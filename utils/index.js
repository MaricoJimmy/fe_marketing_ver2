import { routeMaps } from "./router";

export const getDate = (publishedAt, locale) => {
  return locale === "vi"
    ? new Date(publishedAt).toLocaleDateString("vi-VN", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : new Date(publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
};

export function getLocalizedPath(pathName, locale) {
  return routeMaps[locale][pathName] || pathName;
}
