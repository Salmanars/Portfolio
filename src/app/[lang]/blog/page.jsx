import { notFound } from "next/navigation";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import { getDictionary, supportedLanguages } from "@/lib/dictionary";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function LocalizedBlogPage({ params }) {
  if (!supportedLanguages.includes(params.lang)) {
    notFound();
  }

  const dictionary = await getDictionary(params.lang);

  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-transparent px-4 pt-24 text-white">
      <div className="relative z-10">
        <Blog dictionary={dictionary} />
        <Footer dictionary={dictionary} lang={params.lang} />
      </div>
    </main>
  );
}
