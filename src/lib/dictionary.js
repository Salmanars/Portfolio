import "server-only";
import en from "../../dictionaries/en.json";
import id from "../../dictionaries/id.json";

const dictionaries = {
  en,
  id
};

export const supportedLanguages = ["en", "id"];

export async function getDictionary(language) {
  return dictionaries[language] || dictionaries.en;
}
