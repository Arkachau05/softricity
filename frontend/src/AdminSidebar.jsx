// components/AdminSidebar.jsx
import { PanelLeft, LayoutDashboard, Lock, Package, Tag, Star, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const links = [
  { label: "Themes", icon: <LayoutDashboard size={18} />, path: "/admin/themes" },
  { label: "Admin Auth / SMTP", icon: <Lock size={18} />, path: "/admin/auth" },
  { label: "Products", icon: <Package size={18} />, path: "/admin/products" },
  { label: "Categories", icon: <Tag size={18} />, path: "/admin/categories" },
  { label: "Reviews", icon: <Star size={18} />, path: "/admin/reviews" },
  { label: "Feedback", icon: <MessageCircle size={18} />, path: "/admin/feedback" },
];

export default function AdminSidebar({ onNavigate }) {
  const [active, setActive] = useState(links[0].path);

  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-4 flex items-center gap-2">
        <PanelLeft className="text-blue-500" />
        <h2 className="text-lg font-semibold">Admin Panel</h2>
      </div>
      <nav className="flex flex-col gap-1 px-2">
        {links.map((link) => (
          <Button
            key={link.path}
            variant="ghost"
            className={cn("justify-start text-sm", active === link.path && "bg-gray-800 text-blue-400")}
            onClick={() => {
              setActive(link.path);
              onNavigate(link.path);
            }}
          >
            <span className="mr-2">{link.icon}</span> {link.label}
          </Button>
        ))}
      </nav>
    </aside>
  );
}
