import { Link, useLocation } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const location = useLocation();

  const navItem = (path, label) => (
    <Link
      to={path}
      className={cn(
        "block px-4 py-2 rounded hover:bg-gray-800 transition-all text-sm",
        location.pathname === path ? "bg-blue-600 text-white" : "text-gray-300"
      )}
    >
      {label}
    </Link>
  );

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 p-4 space-y-6">
      <div>
        <h2 className="text-xs uppercase text-gray-500 mb-2">Header</h2>
        {navItem("/themes", "Themes")}
      </div>

      <Separator className="bg-gray-700" />

      <div>
        <h2 className="text-xs uppercase text-gray-500 mb-2">Admin</h2>
        {navItem("/admin/auth", "Auth")}
        {navItem("/admin/smtp", "SMTP")}
      </div>

      <Separator className="bg-gray-700" />

      <div>
        <h2 className="text-xs uppercase text-gray-500 mb-2">CRUD Operations</h2>
        {navItem("/crud/product", "Product")}
        {navItem("/crud/category", "Category")}
        {navItem("/crud/review", "Review")}
        {navItem("/crud/feedback", "Feedback")}
      </div>
    </aside>
  );
};

export default Sidebar;
