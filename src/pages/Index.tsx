import BrandHeader from "@/components/coursera/BrandHeader";
import Hero from "@/components/coursera/Hero";
import CategoryGrid from "@/components/coursera/CategoryGrid";
import CourseCard from "@/components/coursera/CourseCard";
import Testimonials from "@/components/coursera/Testimonials";
import SiteFooter from "@/components/coursera/SiteFooter";
import thumb1 from "@/assets/course-ml.jpg";
import thumb2 from "@/assets/course-web.jpg";
import thumb3 from "@/assets/course-ux.jpg";

const courses = [
  { title: "Machine Learning Specialization", provider: "Leading University", image: thumb1 },
  { title: "Full‑Stack Web Development", provider: "Top Tech Company", image: thumb2 },
  { title: "UX/UI Design Foundations", provider: "Design Institute", image: thumb3 },
  { title: "Data Analysis with Python", provider: "Industry Partner", image: thumb1 },
  { title: "Generative AI for Everyone", provider: "AI Lab", image: thumb2 },
  { title: "Product Management Essentials", provider: "Business School", image: thumb3 },
];

const Index = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: courses.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Course',
        name: c.title,
        provider: { '@type': 'Organization', name: c.provider },
      },
    })),
  };

  return (
    <div>
      <BrandHeader />
      <main>
        <Hero />
        <section id="popular" aria-labelledby="popular-title" className="container mx-auto px-4 py-14">
          <h2 id="popular-title" className="text-2xl md:text-3xl font-semibold">Popular courses</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <CourseCard key={course.title} {...course} />
            ))}
          </div>
        </section>
        <CategoryGrid />
        <Testimonials />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
};

export default Index;
