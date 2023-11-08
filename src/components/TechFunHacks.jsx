import SectionContainer from "./SectionContainer";

const TechFunHacks = () => {
  return (
    <SectionContainer>
      <h2 className="text-4xl font-bold text-center mt-14 mb-8">
        Tech Fun Hacks
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <iframe
          className="w-full"
          src="https://www.youtube.com/embed/k3PcVruvZCs?si=jQWBXsF5kG-ixbWk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          className="w-full"
          src="https://www.youtube.com/embed/xhG2AeyJXcU?si=oiRaysn81BFfWDQ3"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <iframe
          className="w-full"
          src="https://www.youtube.com/embed/1J8dQA6gN7k?si=uv1hcRfDvf6XL2vT"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </SectionContainer>
  );
};

export default TechFunHacks;
