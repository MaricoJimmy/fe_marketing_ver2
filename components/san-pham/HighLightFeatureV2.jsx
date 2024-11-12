function HighLightFeatureV2({ data }) {
  return (
    <div className="grid lg:grid-cols-3">
      {data.lists.map((feature) => (
        <div
          key={feature.title}
          className="lg:px-10 px-4 lg:py-0 py-8 lg:border-r lg:border-b-0 border-b last:border-none border-white/50"
        >
          <h3 className="text-white text-center text-3xl font-semibold">
            {feature.title}
          </h3>
          <h5 className="mt-6 text-white text-justify font-medium">
            {feature.desc}
          </h5>
        </div>
      ))}
    </div>
  );
}

export default HighLightFeatureV2;
