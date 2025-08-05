// pages/AdminDashboard.jsx
import { useState } from "react";
import AdminSidebar from "@/components/AdminSidebar";

export default function AdminDashboard() {
  const [page, setPage] = useState("/admin/themes");

  return (
    <div className="flex">
      <AdminSidebar onNavigate={setPage} />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Admin Page: {page.replace("/admin/", "")}</h1>
        {/* Conditionally load each page */}
        {page === "/admin/themes" && <Themes />}
        {page === "/admin/auth" && <AdminAuth />}
        {page === "/admin/products" && <ProductCRUD />}
        {page === "/admin/categories" && <CategoryCRUD />}
        {page === "/admin/reviews" && <ReviewPage />}
        {page === "/admin/feedback" && <FeedbackPage />}
      </div>
    </div>
  );
}
