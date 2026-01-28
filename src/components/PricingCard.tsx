import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  className?: string;
}

const PricingCard = ({
  name,
  price,
  period = "/month",
  description,
  features,
  popular = false,
  ctaText = "Get Started",
  className,
}: PricingCardProps) => {
  return (
    <div
      className={cn(
        "relative p-6 rounded-xl transition-all duration-300",
        popular
          ? "glass-card glow-white border-foreground/20"
          : "glass-card hover:glow-white-sm",
        className
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-foreground text-background text-xs font-medium px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground mb-2">{name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          {period && <span className="text-muted-foreground">{period}</span>}
        </div>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Link to="/auth?mode=signup">
        <Button
          className={cn(
            "w-full",
            popular ? "btn-glow" : ""
          )}
          variant={popular ? "default" : "secondary"}
        >
          {ctaText}
        </Button>
      </Link>
    </div>
  );
};

export default PricingCard;
