export const formatDate = (dateString: string | null): string => {
  if (!dateString) return "Present";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  const formatted = new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(date);

  return formatted.replace(" ", ". ");
};

export const formatPeriod = (start = "2020-01-01", end: string | null): string => {
  return `${formatDate(start)} - ${formatDate(end)}`;
};
