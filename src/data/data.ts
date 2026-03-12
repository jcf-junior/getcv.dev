import initialCv from "./initialCv.json";
import type { CVData } from "../types/cv";

export const cvData: CVData = initialCv;

export const socialsPlaceholders = [
    {
      link: "https://johndoe.dev",
      value: "johndoe.dev",
    },
    {
      link: "mailto:john@example.com",
      value: "john@example.com",
    },
    {
      link: "https://github.com/johndoe",
      value: "github.com/johndoe",
    },
    {
      link: "https://linkedin/johndoe",
      value: "linkedin/in/johndoe",
    },
    {
      link: "tel:+1123456789",
      value: "+1 123-456-789",
    },
  ];