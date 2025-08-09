import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const categories = [
  { name: "Data Science", emoji: "📊" },
  { name: "AI & ML", emoji: "🤖" },
  { name: "Web Development", emoji: "🌐" },
  { name: "Design", emoji: "🎨" },
  { name: "Business", emoji: "💼" },
  { name: "Personal Development", emoji: "🧭" },
];

const CategoryGrid = () => {
  return (
    <section id="categories" aria-labelledby="categories-title" className="container mx-auto px-4 py-14">
      <h2 id="categories-title" className="text-2xl md:text-3xl font-semibold">Browse categories</h2>
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
        {categories.map((c) => (
          <Card key={c.name} className={cn("group p-4 text-center transition hover:shadow-elegant")}> 
            <div className="text-2xl" aria-hidden>{c.emoji}</div>
            <div className="mt-2 text-sm font-medium">{c.name}</div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
