import { notFound } from "next/navigation";
import HomePage from "@/components/HomePage";
import { getDictionary, supportedLanguages } from "@/lib/dictionary";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function LanguageHomePage({ params }) {
  if (!supportedLanguages.includes(params.lang)) {
    notFound();
  }

  const dictionary = await getDictionary(params.lang);
  return <HomePage dictionary={dictionary} language={params.lang} />;
}
