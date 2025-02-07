function WhyChooseUs({
  data,
  customCol = "lg:grid-cols-4 md:grid-cols-2 grid-cols-1",
}) {
  return (
    <div>
      <div>
        <h2
          data-aos="fade-up"
          className="text-4xl text-neutral text-center font-bold"
          dangerouslySetInnerHTML={{ __html: data.title }}
        ></h2>
        <h5
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-2 text-center text-base text-neutral/80 font-medium"
        >
          {data.subTitle}
        </h5>
      </div>
      <ul
        className={`lg:mt-20 mt-10 items-start grid ${customCol} lg:gap-10 gap-4`}
      >
        {data.contents.map((content, index) => (
          <li
            data-aos="flip-left"
            data-aos-delay={index * 100 + 100}
            key={content.id}
            className="flex flex-col items-center justify-center gap-4 group"
          >
            <div
              className="text-primary group-hover:scale-105 duration-300"
              dangerouslySetInnerHTML={{ __html: content.icon }}
            ></div>
            <div>
              <h3 className="text-center text-neutral text-2xl font-semibold">
                {content.title}
              </h3>
              <h5 className="mt-2 text-center text-neutral/80 text-base font-medium">
                {content.content}
              </h5>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WhyChooseUs;
