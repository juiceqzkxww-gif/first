import { cn } from "@/lib/utils";

interface UICardProps {
  title: string;
  category: string;
  imageUrl?: string;
  className?: string;
  style?: React.CSSProperties;
}

const UICard = ({ title, category, imageUrl, className }: UICardProps) => {
  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-xl glass-card transition-all duration-300 hover:glow-white-sm cursor-pointer",
        className
      )}
    >
      {/* Preview Area */}
      <div className="aspect-video bg-secondary/50 relative overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary to-muted">
            <div className="w-3/4 h-3/4 rounded-lg border border-border/50 bg-background/20 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">UI Preview</span>
            </div>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-foreground font-medium">View Details</span>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-4">
        <span className="text-xs text-muted-foreground uppercase tracking-wide">
          {category}
        </span>
        <h3 className="text-foreground font-medium mt-1 group-hover:text-foreground/80 transition-colors">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default UICard;
