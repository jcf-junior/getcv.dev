import { useEffect, useState } from "react";
import initialCv from "../data/initialCv.json";

const STORAGE_KEY = "cv-data";

export function useCvData() {
  const [cvData, setCvData] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialCv;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cvData));
  }, [cvData]);

  const resetCv = () => {
    setCvData(initialCv);
  };

  return { cvData, setCvData, resetCv };
}
