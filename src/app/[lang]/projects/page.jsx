import { notFound } from "next/navigation";
import ProjectsPage from "@/app/projects/page";
import { getDictionary, supportedLanguages } from "@/lib/dictionary";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function LocalizedProjectsPage({ params }) {
  if (!supportedLanguages.includes(params.lang)) {
    notFound();
  }

  const dictionary = await getDictionary(params.lang);
  return <ProjectsPage dictionary={dictionary} language={params.lang} />;
}
