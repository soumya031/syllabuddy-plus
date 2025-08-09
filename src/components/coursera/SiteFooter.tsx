const SiteFooter = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-semibold">Coursera Clone</div>
          <p className="mt-2 text-sm text-muted-foreground">Learn in-demand skills with flexible online courses.</p>
        </div>
        <nav className="text-sm flex gap-6 md:justify-center">
          <a href="#categories" className="text-muted-foreground hover:text-foreground">Categories</a>
          <a href="#popular" className="text-muted-foreground hover:text-foreground">Popular</a>
          <a href="#testimonials" className="text-muted-foreground hover:text-foreground">Testimonials</a>
        </nav>
        <div className="text-sm md:text-right text-muted-foreground">© {new Date().getFullYear()} Coursera Clone</div>
      </div>
    </footer>
  );
};

export default SiteFooter;
