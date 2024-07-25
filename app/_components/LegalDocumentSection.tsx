import React from "react";

// Define the type for content items
interface ContentItem {
  subheading?: string;
  text: string;
}

// Define the type for sections
interface Section {
  heading?: string;
  content: ContentItem[] | string;
}

// Define the props for the component
interface LegalDocumentSectionProps {
  title: string;
  sections: Section[];
}
const LegalDocumentSection: React.FC<LegalDocumentSectionProps> = ({
  title,
  sections,
}) => {
  return (
    <section>
      <div className="w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative pt-32 pb-20 fade-out">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center font-semibold tracking-tight">
          {title}
        </h1>
      </div>
      <div className="max-w-3xl mx-auto text-lg text-[#ADADAD] px-4 mb-[-1px]">
        {sections.map(({ heading, content }, index) => (
          <div key={heading} className="py-12 border-b border-neutral-800">
            <h2 className="text-2xl text-[#EBEBEB] font-bold">{heading}</h2>

            {Array.isArray(content) ? (
              content.map(({ subheading, text }) => (
                <div key={subheading}>
                  <p className="mt-6">
                    {subheading && (
                      <strong className="text-[#EBEBEB]">
                        {subheading}
                        {"' "}
                      </strong>
                    )}

                    {text}
                  </p>
                </div>
              ))
            ) : (
              <p className={`${index > 0 ? "mt-6" : ""}`}>{content}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LegalDocumentSection;
