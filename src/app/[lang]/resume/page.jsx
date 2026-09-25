import { notFound } from "next/navigation";
import ResumePage from "@/app/resume/page";
import { getDictionary, supportedLanguages } from "@/lib/dictionary";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function LocalizedResumePage({ params }) {
  if (!supportedLanguages.includes(params.lang)) {
    notFound();
  }

  const dictionary = await getDictionary(params.lang);
  return <ResumePage dictionary={dictionary} language={params.lang} />;
}
