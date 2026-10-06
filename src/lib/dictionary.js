import "server-only";
import en from "../../dictionaries/en.json";
import id from "../../dictionaries/id.json";

const dictionaries = {
  en,
  id
};

export const supportedLanguages = ["en", "id"];

export async function getDictionary(language) {
  const dictionary = dictionaries[language];
  if (!dictionary) {
    throw new RangeError(`Unsupported language: ${language}`);
  }
  return dictionary;
}
