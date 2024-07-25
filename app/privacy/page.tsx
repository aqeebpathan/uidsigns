import LegalDocumentSection from "@app/_components/LegalDocumentSection";
import { privacyPolicy } from "@app/_constants";

const page = () => {
  const { title, sections } = privacyPolicy;
  return (
    <main>
      <LegalDocumentSection title={title} sections={sections} />
    </main>
  );
};

export default page;
