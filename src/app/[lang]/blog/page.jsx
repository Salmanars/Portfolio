import { notFound } from "next/navigation";
import Blog from "@/components/Blog";
import DarkModernBackground from "@/components/DarkModernBackground";
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
  const blogBackground = dictionary?.blog?.background ?? {};

  return (
    <main className="relative isolate min-h-screen w-full overflow-hidden bg-transparent px-4 pt-24 text-white">
      {blogBackground.main === "experience" && <DarkModernBackground />}
      <div className="relative z-10">
        <Blog dictionary={dictionary} />
      </div>
      <div
        className="relative isolate z-10 -mx-4 mt-10 bg-cover bg-center"
        style={{ backgroundImage: `url("${blogBackground.bottom}")` }}
      >
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-10">
          <Footer dictionary={dictionary} lang={params.lang} />
        </div>
      </div>
    </main>
  );
}
