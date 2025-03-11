import { useRouter } from "next/router";
import React from "react";

function TableOfContent({ headings }) {
  const { locale } = useRouter();
  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -200; // offset 80px lên trên
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const localeTextTOC = locale === "vi" ? "Mục lục" : "Table of content";
  return (
    <nav className="p-3 w-full border border-gray/20 rounded-lg">
      <h6 className="text-lg font-medium">{localeTextTOC}</h6>
      <ul className="mt-2">
        {headings.map((heading, index) => (
          <li key={index} style={{ marginLeft: (heading.level - 1) * 16 }}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToHeading(heading.id);
              }}
              className="text-base font-medium leading-relaxed text-neutral hover:text-primary hover:underline transition-all"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TableOfContent;
