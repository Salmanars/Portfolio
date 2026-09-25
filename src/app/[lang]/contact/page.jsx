import { notFound } from "next/navigation";
import { portfolioData } from "@/data/portfolioData";
import ContactPage from "@/components/ContactPage";
import { getDictionary, supportedLanguages } from "@/lib/dictionary";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function LocalizedContactPage({ params }) {
  if (!supportedLanguages.includes(params.lang)) {
    notFound();
  }

  const dictionary = await getDictionary(params.lang);
  return <ContactPage contact={portfolioData.contact} dictionary={dictionary} language={params.lang} />;
}
