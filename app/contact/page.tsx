import { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactComponent = dynamic(
  () =>
    import("@/components/sections/Contact").then((m) => ({
      default: m.Contact,
    })),
  { ssr: true }
);

export const metadata: Metadata = {
  title: "Contact Me - Get In Touch",
  description:
    "Get in touch with Hamdi Shehab for freelance projects, collaboration opportunities, or full-time positions. Available for React.js and Next.js development work.",
  alternates: {
    canonical: "https://hamdishehab.dev/contact",
  },
  openGraph: {
    title: "Contact Hamdi Shehab - Front-End Developer",
    description:
      "Ready to collaborate on your next project? Let's build something amazing together with React and Next.js.",
    url: "https://hamdishehab.dev/contact",
    images: [
      {
        url: "/landing.png",
        width: 800,
        height: 800,
        alt: "Contact Hamdi Shehab",
      },
    ],
  },
};
import { PageWrapper } from "@/components/PageWrapper";

export default function ContactPage() {
  return (
    <PageWrapper backgroundVariant="contact">
      <ContactComponent />
    </PageWrapper>
  );
}
