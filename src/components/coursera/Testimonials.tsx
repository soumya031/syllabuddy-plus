import { Card } from "@/components/ui/card";

const testimonials = [
  {
    quote: "The courses helped me change careers into data science.",
    author: "Soumya R.",
  },
  {
    quote: "University-grade content with flexible learning.",
    author: "Priya S.",
  },
  {
    quote: "Certificates boosted my resume and confidence!",
    author: "Marco T.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="container mx-auto px-4 py-16">
      <h2 id="testimonials-title" className="text-2xl md:text-3xl font-semibold">Learner stories</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.author} className="p-6 card-surface">
            <p className="text-lg">“{t.quote}”</p>
            <p className="mt-4 text-sm text-muted-foreground">{t.author}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
