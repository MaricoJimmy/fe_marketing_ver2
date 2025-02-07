import React from "react";

function ListCardItems({ data }) {
  return (
    <div>
      <h5 data-aos="fade-up" className="text-infor text-lg font-semibold">
        {data.subTitle}
      </h5>
      <h2
        data-aos="fade-up"
        data-aos-delay="100"
        className="mt-2 text-neutral lg:text-4xl text-3xl font-bold"
      >
        {data.title}
      </h2>
      <ul className="mt-8 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-8 gap-4">
        {data.lists.map((item, index) => (
          <li
            data-aos="fade-up"
            data-aos-delay={index * 100 + 100}
            key={item.title}
            className="px-4 py-8 flex flex-col items-center justify-center gap-4 bg-white border border-primary rounded-lg hover:shadow-lg transition-all"
          >
            <div
              className="p-3 bg-neutral/5 text-primary rounded-full"
              dangerouslySetInnerHTML={{ __html: item.icon }}
            ></div>
            <h4 className="text-center text-gray font-semibold">
              {item.title}
            </h4>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListCardItems;
