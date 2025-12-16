import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { SideNav } from "@/components/shared/SideNav";
import { LeftSidebar } from "@/components/shared/LeftSidebar";
import { MainContentBackground } from "@/components/shared/MainContentBackground";
import { MobileHeader } from "@/components/shared/MobileHeader";
import { JsonLd } from "@/components/JsonLd";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL("https://hamdishehab.dev"),
  title: {
    default: "Anas Ashraf | Full Stack Web Developer | PHP, Laravel, ERP Expert",
    template: "%s | Anas Ashraf - Full Stack Developer",
  },
  description:
    "Professional Full Stack Web Developer specializing in PHP, Laravel, and ERP systems. Building high-performance, scalable web applications with exceptional user experiences. Available for freelance projects and full-time opportunities.",
  keywords: [
    "Full Stack Developer",
    "PHP Developer",
    "Laravel Developer",
    "ERP Expert",
    "Backend Developer",
    "PHP",
    "Laravel",
    "MySQL",
    "ERP Systems",
    "Web Development",
    "Backend Development",
    "API Development",
    "Database Design",
    "Anas Ashraf",
    "Portfolio",
    "Full Stack Engineer",
    "Web Developer Egypt",
    "Freelance Developer",
    "Modern Web Apps",
    "Enterprise Applications",
  ],
  authors: [{ name: "Anas Ashraf", url: "https://hamdishehab.dev" }],
  creator: "Anas Ashraf",
  publisher: "Anas Ashraf",
  alternates: {
    canonical: "https://hamdishehab.dev",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: "/images/anas.png", type: "image/png" }],
    shortcut: "/images/anas.png",
    apple: [{ url: "/images/anas.png", type: "image/png" }],
  },
  openGraph: {
    title: "Anas Ashraf | Full Stack Web Developer | PHP, Laravel, ERP Expert",
    description:
      "Building exceptional digital experiences with PHP, Laravel, and ERP systems. Specialized in high-performance web applications.",
    url: "https://hamdishehab.dev",
    siteName: "Anas Ashraf - Full Stack Developer Portfolio",
    images: [
      {
        url: "/images/anas.png",
        width: 800,
        height: 800,
        alt: "Anas Ashraf - Full Stack Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anas Ashraf | Full Stack Web Developer",
    description:
      "Building exceptional digital experiences with PHP, Laravel, and ERP systems.",
    images: ["/images/anas.png"],
    creator: "@anasafawzy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${jakarta.variable} ${outfit.variable} font-sans bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-primary`}
      >
        <div className="fixed inset-0 -z-10 bg-background"></div>
        {/* Global Background Effects (Subtle) */}
        <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background opacity-50 pointer-events-none"></div>

        <div className="flex min-h-screen">
          {/* Left Sidebar - Desktop Only */}
          <aside className="hidden lg:block w-[280px] h-screen fixed top-0 left-0 z-40">
            <LeftSidebar />
          </aside>

          {/* Mobile Header - Mobile Only */}
          <MobileHeader />

          {/* Main Content Area */}
          <main className="flex-grow lg:ml-[280px] w-full relative pt-16 lg:pt-0 lg:pr-24 min-h-screen">
            <MainContentBackground />
            <SideNav />
            <div className="w-full relative z-10">{children}</div>
          </main>
        </div>
        <JsonLd />
      </body>
    </html>
  );
}
