import React from "react";

function Tags({ tags }) {
  return (
    <ul className="flex flex-wrap items-center gap-3">
      {tags.map((tag, index) => (
        <li
          key={index}
          className="px-2 py-1 bg-infor/30 text-neutral text-sm font-medium rounded-md"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default Tags;
