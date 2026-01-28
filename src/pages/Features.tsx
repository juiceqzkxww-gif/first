import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Sparkles, Image, Zap, FolderOpen, Layers, Palette, Download, Shield } from "lucide-react";

const Features = () => {
  const mainFeatures = [
    {
      icon: Sparkles,
      title: "Describe & Generate",
      description: "Turn your ideas into reality with text-to-UI generation. Simply describe what you envision — 'fantasy quest log with stone texture' or 'futuristic neon shop menu' — and watch as AI creates a polished, game-ready interface.",
      details: [
        "Natural language understanding",
        "Style and theme recognition",
        "Multiple variations per prompt",
        "Real-time generation preview",
      ],
    },
    {
      icon: Image,
      title: "Upload & Transform",
      description: "Have a rough sketch or screenshot? Upload it and let our AI transform it into a professional UI design. Perfect for iterating on existing layouts or polishing basic concepts.",
      details: [
        "Image-to-UI transformation",
        "Style transfer capabilities",
        "Layout preservation option",
        "Enhancement suggestions",
      ],
    },
    {
      icon: Zap,
      title: "Roblox Optimized",
      description: "Every generated UI is specifically designed for Roblox games. Our AI understands Roblox's unique constraints and aesthetic requirements, ensuring seamless integration.",
      details: [
        "Roblox resolution support",
        "GUI-friendly formatting",
        "Performance-conscious designs",
        "Studio-ready exports",
      ],
    },
    {
      icon: FolderOpen,
      title: "Project Management",
      description: "Keep all your generated assets organized. Create projects, save favorites, track your generation history, and export whenever you're ready.",
      details: [
        "Unlimited project folders",
        "Generation history tracking",
        "Bulk export options",
        "Team sharing (Enterprise)",
      ],
    },
  ];

  const additionalFeatures = [
    {
      icon: Layers,
      title: "Multiple Styles",
      description: "From fantasy RPG to sci-fi shooters, our AI adapts to any game genre and visual style.",
    },
    {
      icon: Palette,
      title: "Color Customization",
      description: "Fine-tune colors and themes to match your game's palette perfectly.",
    },
    {
      icon: Download,
      title: "Easy Export",
      description: "Download high-resolution assets ready for direct import into Roblox Studio.",
    },
    {
      icon: Shield,
      title: "Commercial License",
      description: "Use generated UIs in your commercial games with full ownership rights.",
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
              Powerful AI Features
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to create stunning Roblox interfaces, all powered by cutting-edge AI technology.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-video rounded-xl glass-card overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                      <feature.icon className="w-16 h-16 text-muted-foreground/50" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              And Much More
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Additional tools and capabilities to supercharge your UI workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl glass-card transition-all duration-300 hover:glow-white-sm"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
