import { routeMaps } from "./router";
import * as cheerio from "cheerio";

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

// Hàm tạo slug từ text
export const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

// Hàm thêm id cho các thẻ heading
export const addIdsToHeadings = (htmlContent) => {
  const $ = cheerio.load(htmlContent);
  $("h1, h2, h3, h4, h5, h6").each((i, el) => {
    const headingText = $(el).text();
    const slug = slugify(headingText);
    $(el).attr("id", slug);
  });
  return $.html();
};

// Hàm nhận vào chuỗi HTML và trả về mảng chứa thông tin các heading
export const extractHeadings = (htmlContent) => {
  const $ = cheerio.load(htmlContent);
  const headings = [];

  $("h1, h2, h3, h4, h5, h6").each((i, el) => {
    const level = parseInt(el.tagName.substring(1));
    const text = $(el).text();
    const id = $(el).attr("id");
    headings.push({ level, text, id });
  });

  return headings;
};
