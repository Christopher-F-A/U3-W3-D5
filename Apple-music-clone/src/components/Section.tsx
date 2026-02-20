import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="mb-4 px-4">
      <h5 className="mb-3">{title}</h5>
      {children}
    </section>
  );
};

export default Section;
