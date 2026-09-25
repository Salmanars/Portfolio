import { portfolioData } from "@/data/portfolioData";
import ContactPage from "@/components/ContactPage";
import { getDictionary } from "@/lib/dictionary";

export default async function ContactRoute() {
  const dictionary = await getDictionary("en");
  return <ContactPage contact={portfolioData.contact} dictionary={dictionary} language="en" />;
}
