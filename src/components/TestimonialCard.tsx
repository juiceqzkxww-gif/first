import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar?: string;
  className?: string;
}

const TestimonialCard = ({
  quote,
  author,
  role,
  avatar,
  className,
}: TestimonialCardProps) => {
  return (
    <div
      className={cn(
        "p-6 rounded-xl glass-card transition-all duration-300 hover:glow-white-sm",
        className
      )}
    >
      <blockquote className="text-foreground mb-4">"{quote}"</blockquote>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center overflow-hidden">
          {avatar ? (
            <img src={avatar} alt={author} className="w-full h-full object-cover" />
          ) : (
            <span className="text-foreground font-medium">
              {author.charAt(0).toUpperCase()}
            </span>
          )}
        </div>
        <div>
          <div className="text-sm font-medium text-foreground">{author}</div>
          <div className="text-xs text-muted-foreground">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
