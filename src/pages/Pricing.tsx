import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "/month",
      description: "Perfect for trying out RoUI and creating your first designs.",
      features: [
        "50 credits per month",
        "Basic quality outputs",
        "Watermarked exports",
        "3 project folders",
        "Community support",
      ],
      popular: false,
      ctaText: "Get Started",
    },
    {
      name: "Pro",
      price: "$19",
      period: "/month",
      description: "For serious creators who need more power and flexibility.",
      features: [
        "500 credits per month",
        "HD quality outputs",
        "No watermarks",
        "Unlimited projects",
        "Priority generation queue",
        "Generation history",
        "Priority support",
      ],
      popular: true,
      ctaText: "Go Pro",
    },
    {
      name: "Enterprise",
      price: "$49",
      period: "/month",
      description: "Maximum power for teams and professional studios.",
      features: [
        "2,000 credits per month",
        "Ultra HD quality",
        "No watermarks",
        "Unlimited everything",
        "Fastest priority queue",
        "Team collaboration",
        "API access",
        "Dedicated support",
        "Custom integrations",
      ],
      popular: false,
      ctaText: "Contact Sales",
    },
  ];

  const faqs = [
    {
      question: "What are credits?",
      answer: "Credits are used to generate UI designs. Each generation costs 1-5 credits depending on complexity and quality settings.",
    },
    {
      question: "Can I upgrade or downgrade anytime?",
      answer: "Yes! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the next billing cycle.",
    },
    {
      question: "Do unused credits roll over?",
      answer: "Monthly credits reset each billing cycle and don't roll over. We recommend choosing a plan that fits your typical usage.",
    },
    {
      question: "Is there a refund policy?",
      answer: "We offer a 7-day money-back guarantee for first-time subscribers on paid plans.",
    },
  ];

  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your needs. All plans include access to our full AI generation suite.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
                ctaText={plan.ctaText}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Credit Explainer */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6 text-center">
                How Credits Work
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">1 credit</div>
                  <p className="text-sm text-muted-foreground">Basic quality generation</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">3 credits</div>
                  <p className="text-sm text-muted-foreground">HD quality generation</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">5 credits</div>
                  <p className="text-sm text-muted-foreground">Ultra HD + variations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-foreground mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/faq">
                <Button variant="secondary">View All FAQs</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
