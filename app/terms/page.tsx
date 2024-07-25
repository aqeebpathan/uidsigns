import LegalDocumentSection from "@app/_components/LegalDocumentSection";
import { termsOfService } from "@app/_constants";

const Terms = () => {
  const { title, sections } = termsOfService;
  return (
    <main>
      <LegalDocumentSection title={title} sections={sections} />
    </main>
  );
};

export default Terms;
