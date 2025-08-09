import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  title: string;
  provider: string;
  image: string;
}

const CourseCard = ({ title, provider, image }: CourseCardProps) => {
  return (
    <article className="group">
      <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-elegant">
        <img src={image} alt={`${title} course cover`} className="h-40 w-full object-cover" loading="lazy" />
        <div className="p-4">
          <h3 className="font-semibold leading-snug">{title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{provider}</p>
          <div className="mt-4">
            <Button variant="outline" size="sm">View details</Button>
          </div>
        </div>
      </Card>
    </article>
  );
};

export default CourseCard;
