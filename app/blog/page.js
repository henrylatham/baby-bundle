import { categories, articles } from "./_assets/content";
import CardArticle from "./_assets/components/CardArticle";
import CardCategory from "./_assets/components/CardCategory";
import Hero from "@/components/Hero";


import config from "@/config";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: `${config.appName} Blog | Stripe Chargeback Protection`,
  description:
    "Learn how to prevent chargebacks, how to accept payments online, and keep your Stripe account in good standing",
  canonicalUrlRelative: "/blog",
});

export default async function Blog() {
  const articlesToDisplay = articles
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, 20);
  return (
    <>
      <section className="text-center max-w-xl mx-auto mt-12 mb-24 md:mb-32">
        <h1 className="font-extrabold text-3xl lg:text-5xl tracking-tight mb-6">
          Expert Tips & Essential Guides for Stress-Free Baby Travel
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Get started with our 5 Essential Guides:
        </p>
      </section>

      <section className="grid lg:grid-cols-2 mb-24 md:mb-32 gap-8">
        {articlesToDisplay.map((article, i) => (
          <CardArticle
            article={article}
            key={article.slug}
            isImagePriority={i <= 2}
          />
        ))}
      </section>

      <section>
        <p className="font-bold text-2xl lg:text-4xl tracking-tight text-center mb-8 md:mb-12">
          Browse articles by category
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CardCategory key={category.slug} category={category} tag="div" />
          ))}
        </div>
      </section>

      <section className="mt-20">
        <Hero variant="grey" />
      </section>
    </>
  );
}
