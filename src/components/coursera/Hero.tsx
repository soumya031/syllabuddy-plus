import heroImage from "@/assets/hero-coursera.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <img src={heroImage} alt="Students learning online with laptops and notes, blue academic theme" className="h-full w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/30" />
      </div>

      <div className="container relative mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl animate-reveal-up">
          <h1 id="hero-title" className="text-4xl md:text-6xl font-bold tracking-tight">
            Learn job‑ready skills with top courses
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Explore certificates and degrees from leading universities and companies.
          </p>

          <form className="mt-8 flex flex-col sm:flex-row gap-3" role="search" aria-label="Search courses">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input
                aria-label="Search for courses"
                placeholder="What do you want to learn?"
                className="pl-10"
              />
            </div>
            <Button variant="hero" size="lg" aria-label="Search">
              Search
            </Button>
          </form>

          <div className="mt-6 text-sm text-muted-foreground">
            Trending: AI, Data Science, Web Development, UX Design
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
