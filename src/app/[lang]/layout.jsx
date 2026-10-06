import Navbar from "@/components/Navbar";
import RouteBackgroundVideo from "@/components/RouteBackgroundVideo";
import { notFound } from "next/navigation";
import { getDictionary, supportedLanguages } from "@/lib/dictionary";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  if (!supportedLanguages.includes(params.lang)) {
    notFound();
  }

  const dictionary = await getDictionary(params.lang);
  const metadata = dictionary.metadata;

  return {
    title: metadata.title,
    description: metadata.description,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "website",
      locale: params.lang === "id" ? "id_ID" : "en_US",
      images: [
        {
          url: "/section.png",
          width: 1200,
          height: 630,
          alt: metadata.imageAlt
        }
      ]
    }
  };
}

export default async function LanguageLayout({ children, params }) {
  if (!supportedLanguages.includes(params.lang)) {
    notFound();
  }

  const dictionary = await getDictionary(params.lang);

  return (
    <div className="relative isolate min-h-screen bg-transparent">
      <RouteBackgroundVideo />
      <Navbar language={params.lang} dictionary={dictionary} />
      {children}
    </div>
  );
}
