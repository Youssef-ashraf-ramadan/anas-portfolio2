import { Metadata } from "next";
import { Education as EducationComponent } from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "Education - Academic Background",
  description:
    "Discover Hamdi Shehab's educational background, academic achievements, and professional certifications in Computer Science and Web Development.",
  alternates: {
    canonical: "https://hamdishehab.dev/education",
  },
  openGraph: {
    title: "Education & Certifications - Hamdi Shehab",
    description:
      "Explore my academic journey, certifications, and continuous learning in web development and computer science.",
    url: "https://hamdishehab.dev/education",
    images: [
      {
        url: "/landing.png",
        width: 800,
        height: 800,
        alt: "Hamdi Shehab Education",
      },
    ],
  },
};
import { PageWrapper } from "@/components/PageWrapper";

export default function EducationPage() {
  return (
    <PageWrapper>
      <div className="space-y-20">
        <EducationComponent />
      </div>
    </PageWrapper>
  );
}
