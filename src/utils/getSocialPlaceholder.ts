import { socialsPlaceholders } from "../data/data";

export function getSocialPlaceholder(index: number) {
  const placeholder = socialsPlaceholders[index]
    ? socialsPlaceholders[index]
    : { link: "https://social-media.com/johndoe", value: "@johndoe" };

  return placeholder;
}
