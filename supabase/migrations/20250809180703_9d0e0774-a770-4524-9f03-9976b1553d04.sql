-- Create courses table with RLS and sensible defaults
create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  created_by uuid not null,
  title text not null,
  slug text not null unique,
  description text,
  category text,
  image_url text,
  level text,
  rating numeric(2,1) not null default 0 check (rating >= 0 and rating <= 5),
  learners_count integer not null default 0 check (learners_count >= 0),
  price_cents integer not null default 0 check (price_cents >= 0),
  currency text not null default 'USD',
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Helpful indexes
create index if not exists idx_courses_category on public.courses (category);
create index if not exists idx_courses_published on public.courses (published);

-- Enable RLS
alter table public.courses enable row level security;

-- Generic updated_at trigger function (idempotent)
create or replace function public.update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Attach trigger
drop trigger if exists trg_courses_updated_at on public.courses;
create trigger trg_courses_updated_at
before update on public.courses
for each row execute function public.update_updated_at_column();

-- RLS Policies
-- Public can view published courses
drop policy if exists "Courses are viewable by everyone" on public.courses;
create policy "Courses are viewable by everyone"
on public.courses
for select
using (published = true);

-- Owners (authenticated) can view their own drafts too
drop policy if exists "Owners can view their drafts" on public.courses;
create policy "Owners can view their drafts"
on public.courses
for select
to authenticated
using (auth.uid() = created_by);

-- Only owners can insert their own rows
drop policy if exists "Users can create their own courses" on public.courses;
create policy "Users can create their own courses"
on public.courses
for insert
to authenticated
with check (auth.uid() = created_by);

-- Owners can update their rows
drop policy if exists "Owners can update their courses" on public.courses;
create policy "Owners can update their courses"
on public.courses
for update
to authenticated
using (auth.uid() = created_by);

-- Owners can delete their rows
drop policy if exists "Owners can delete their courses" on public.courses;
create policy "Owners can delete their courses"
on public.courses
for delete
to authenticated
using (auth.uid() = created_by);