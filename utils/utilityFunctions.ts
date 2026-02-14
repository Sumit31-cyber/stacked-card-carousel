export function timeAgo(isoDate: string): string {
  const inputDate = new Date(isoDate);
  const now = new Date();

  const diffInSeconds = Math.floor(
    (now.getTime() - inputDate.getTime()) / 1000,
  );

  if (diffInSeconds < 0) return "just now";

  const minutes = Math.floor(diffInSeconds / 60);
  const hours = Math.floor(diffInSeconds / 3600);
  const days = Math.floor(diffInSeconds / 86400);
  const weeks = Math.floor(diffInSeconds / 604800);
  const months = Math.floor(diffInSeconds / 2629800); // avg month
  const years = Math.floor(diffInSeconds / 31557600); // avg year

  if (diffInSeconds < 60) return "just now";
  if (minutes < 60) return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  if (hours < 24) return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  if (days < 7) return `${days} day${days !== 1 ? "s" : ""} ago`;
  if (weeks < 5) return `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  if (months < 12) return `${months} month${months !== 1 ? "s" : ""} ago`;

  return `${years} year${years !== 1 ? "s" : ""} ago`;
}
