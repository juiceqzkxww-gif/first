import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import UICard from "@/components/UICard";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Link } from "react-router-dom";
import { Sparkles, Image, Zap, FolderOpen, ArrowRight, Users } from "lucide-react";

const Index = () => {
  const exampleUIs = [
    { title: "Fantasy Inventory", category: "Inventory" },
    { title: "Neon Shop Menu", category: "Shop" },
    { title: "Minimal HUD", category: "HUD" },
    { title: "Quest Log Panel", category: "Quest" },
    { title: "Character Stats", category: "Stats" },
    { title: "Settings Menu", category: "Menu" },
  ];

  const features = [
    {
      icon: Sparkles,
      title: "Describe & Generate",
      description: "Simply describe your UI vision in text and watch as AI creates professional Roblox interfaces instantly.",
    },
    {
      icon: Image,
      title: "Upload & Transform",
      description: "Upload your basic sketches or screenshots and let AI polish them into stunning, game-ready designs.",
    },
    {
      icon: Zap,
      title: "Roblox Optimized",
      description: "Every output is specifically formatted and optimized for seamless Roblox Studio implementation.",
    },
    {
      icon: FolderOpen,
      title: "Project Management",
      description: "Organize, save, and export your generated assets with our intuitive project management system.",
    },
  ];

  const testimonials = [
    {
      quote: "RoUI cut my UI development time by 80%. The AI understands exactly what I need for my Roblox games.",
      author: "Alex Chen",
      role: "Indie Game Developer",
    },
    {
      quote: "The quality of generated UIs is incredible. My players love the professional look of our new interfaces.",
      author: "Sarah Mitchell",
      role: "Studio Lead at PixelForge",
    },
    {
      quote: "Finally a tool that understands Roblox aesthetics. The Upload & Transform feature is a game-changer.",
      author: "Marcus Johnson",
      role: "UI Designer",
    },
  ];

  return (
    <div className="min-h-screen bg-background bg-grid">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                Trusted by <span className="text-foreground font-medium">10,000+</span> Roblox developers
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 animate-fade-in animation-delay-100">
              Generate professional
              <span className="text-gradient block">Roblox UI in seconds</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in animation-delay-200">
              Transform your ideas into stunning game interfaces with AI. Describe what you want or upload a reference — RoUI handles the rest.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
              <Link to="/auth?mode=signup">
                <Button size="lg" className="btn-glow text-base px-8">
                  Start Creating
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="secondary" size="lg" className="text-base px-8">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-foreground/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-foreground/3 rounded-full blur-2xl" />
      </section>

      {/* Example UI Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              AI-Generated UI Examples
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what's possible with RoUI. Every design below was created by our AI in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {exampleUIs.map((ui, index) => (
              <UICard
                key={index}
                title={ui.title}
                category={ui.category}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` } as React.CSSProperties}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Powerful Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create stunning Roblox interfaces, all powered by AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Loved by Developers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of Roblox creators who trust RoUI for their UI needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
              Ready to transform your UI workflow?
            </h2>
            <p className="text-muted-foreground mb-8">
              Start creating professional Roblox interfaces in seconds. No design skills required.
            </p>
            <Link to="/auth?mode=signup">
              <Button size="lg" className="btn-glow text-base px-8">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
