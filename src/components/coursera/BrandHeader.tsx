import { Button } from "@/components/ui/button";
import { GraduationCap, Search } from "lucide-react";

export const BrandHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-primary" aria-hidden />
          <span className="font-semibold">Coursewallah</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#categories" className="text-muted-foreground hover:text-foreground">Categories</a>
          <a href="#popular" className="text-muted-foreground hover:text-foreground">Popular</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground">Testimonials</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="hidden md:inline-flex"><Search className="mr-2" />Search</Button>
          <Button variant="default">Sign in</Button>
        </div>
      </div>
    </header>
  );
}

export default BrandHeader;
