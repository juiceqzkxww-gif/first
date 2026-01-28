import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Plus,
  Search,
  Settings,
  Upload,
  Sparkles,
  History,
  FolderOpen,
  CreditCard,
  LogOut,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [prompt, setPrompt] = useState("");

  const recentProjects = [
    { id: 1, name: "Fantasy RPG UI", date: "Today" },
    { id: 2, name: "Sci-Fi HUD", date: "Yesterday" },
    { id: 3, name: "Inventory System", date: "Dec 28" },
  ];

  const credits = { used: 127, total: 500 };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0 lg:w-16"
        }`}
      >
        <div className="flex flex-col h-full p-4">
          {/* Logo */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center">
                <span className="text-background font-bold text-sm">R</span>
              </div>
              {sidebarOpen && (
                <span className="font-display text-lg font-bold text-foreground">RoUI</span>
              )}
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden text-muted-foreground hover:text-foreground"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* New Generation */}
          <Button className="w-full mb-6 btn-glow" size="sm">
            <Plus className="w-4 h-4 mr-2" />
            {sidebarOpen && "New Generation"}
          </Button>

          {/* Search */}
          {sidebarOpen && (
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input placeholder="Search projects..." className="pl-9 bg-sidebar-accent" />
            </div>
          )}

          {/* Recent Projects */}
          <div className="flex-1 overflow-y-auto">
            {sidebarOpen && (
              <>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground uppercase tracking-wide">Recent</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="space-y-1">
                  {recentProjects.map((project) => (
                    <button
                      key={project.id}
                      className="w-full text-left px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition-colors"
                    >
                      <div className="truncate">{project.name}</div>
                      <div className="text-xs text-muted-foreground/60">{project.date}</div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Bottom Section */}
          <div className="pt-4 border-t border-sidebar-border space-y-2">
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition-colors">
              <History className="w-4 h-4" />
              {sidebarOpen && "History"}
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition-colors">
              <FolderOpen className="w-4 h-4" />
              {sidebarOpen && "Projects"}
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition-colors">
              <Settings className="w-4 h-4" />
              {sidebarOpen && "Settings"}
            </button>

            {/* Credits */}
            {sidebarOpen && (
              <div className="mt-4 p-3 rounded-lg bg-sidebar-accent">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-muted-foreground">Credits</span>
                  <CreditCard className="w-4 h-4 text-muted-foreground" />
                </div>
                <div className="text-lg font-bold text-foreground">
                  {credits.used} / {credits.total}
                </div>
                <div className="w-full h-1.5 bg-background rounded-full mt-2">
                  <div
                    className="h-full bg-foreground rounded-full"
                    style={{ width: `${(credits.used / credits.total) * 100}%` }}
                  />
                </div>
                <Button variant="secondary" size="sm" className="w-full mt-3">
                  Upgrade
                </Button>
              </div>
            )}

            {/* Logout */}
            <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition-colors">
              <LogOut className="w-4 h-4" />
              {sidebarOpen && "Log out"}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between p-4 border-b border-border">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu className="w-6 h-6 text-foreground" />
          </button>
          <span className="font-display font-bold text-foreground">RoUI</span>
          <div className="w-6" />
        </header>

        {/* Generator Interface */}
        <div className="flex-1 flex items-center justify-center p-4 sm:p-8 bg-grid">
          <div className="w-full max-w-2xl">
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
                What UI will you create today?
              </h1>
              <p className="text-muted-foreground">
                Describe your vision or upload a reference image
              </p>
            </div>

            {/* Prompt Input */}
            <div className="glass-card rounded-2xl p-6">
              <Textarea
                placeholder="Describe your UI... (e.g., 'fantasy inventory panel with wooden texture and gold accents')"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[120px] bg-transparent border-none resize-none focus-visible:ring-0 text-foreground placeholder:text-muted-foreground"
              />

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mt-4 pt-4 border-t border-border">
                <div className="flex items-center gap-2">
                  <Button variant="secondary" size="sm">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Image
                  </Button>
                  <select className="bg-secondary text-foreground text-sm rounded-lg px-3 py-2 border-none">
                    <option>HD Quality</option>
                    <option>Basic</option>
                    <option>Ultra HD</option>
                  </select>
                </div>

                <Button className="btn-glow" disabled={!prompt.trim()}>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Generate
                </Button>
              </div>
            </div>

            {/* Quick Prompts */}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-3">Try these:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Medieval inventory",
                  "Neon shop menu",
                  "Minimal HUD",
                  "Fantasy quest log",
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setPrompt(suggestion)}
                    className="px-3 py-1.5 rounded-full text-sm bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
