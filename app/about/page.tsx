import React from "react";
import { aboutContent } from "@app/_constants"; // Adjust the path as necessary

interface Offering {
  title: string;
  description: string;
}

interface Section {
  type: "vision" | "offerings" | "team" | "contact";
  heading: string;
  text?: string;
  items?: Offering[];
}

const AboutPage: React.FC = () => {
  return (
    <section>
      <div className="w-full bg-black bg-grid-white/[0.2] relative pt-32 pb-20 fade-out">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-semibold tracking-tight">
          {aboutContent.title}
        </h1>
      </div>
      <div className="max-w-3xl mx-auto px-4 text-lg text-[#ADADAD]">
        <p className="mt-8">{aboutContent.introduction}</p>
        {aboutContent.sections.map((section, index) => (
          <div key={index} className="pt-12 pb-6 border-b border-neutral-800">
            <h2 className="text-2xl text-[#EBEBEB] font-bold">
              {section.heading}
            </h2>
            {section.type === "offerings" && section.items ? (
              <ul>
                {section.items.map((item, idx) => (
                  <li key={idx} className="my-6">
                    <strong className="text-[#EBEBEB]">
                      {item.title}
                      {"' "}
                    </strong>

                    {item.description}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="my-6">{section.text}</p>
            )}
          </div>
        ))}
        <p className="my-12">
          <strong className="text-[#EBEBEB]">Thank you </strong>
          {aboutContent.closing}😀
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
