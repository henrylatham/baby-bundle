import { Suspense } from "react";
import Footer from "@/components/Footer";
import TopBanner from "@/components/TopBanner";

export default async function LayoutBlog({ children }) {
  return (
    <div>
      <Suspense>
        <TopBanner /> 
      </Suspense>

      <main className="min-h-screen max-w-6xl mx-auto p-8">{children}</main>

      <div className="h-24" />

      <Footer />
    </div>
  );
}
