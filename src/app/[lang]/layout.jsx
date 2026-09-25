import Navbar from "@/components/Navbar";
import { getDictionary, supportedLanguages } from "@/lib/dictionary";

export function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function LanguageLayout({ children, params }) {
  const dictionary = await getDictionary(params.lang);

  return (
    <>
      <Navbar language={params.lang} dictionary={dictionary} />
      {children}
    </>
  );
}
