import { personalInfo } from "@/lib/data";

export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: personalInfo.name,
    url: "https://hamdishehab.dev",
    image: "https://hamdishehab.dev/landing.png",
    sameAs: [
      personalInfo.github,
      personalInfo.linkedin,
      "https://twitter.com/7amdishehab",
    ],
    jobTitle: "Junior Front-End Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: personalInfo.location.split(", ")[0],
      addressRegion: "Kafr El-Sheikh",
      addressCountry: "EG",
    },
    email: personalInfo.email,
    telephone: personalInfo.phone,
    description: personalInfo.about,
    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Web Development",
      "Front-End Development",
      "UI/UX Design",
      "Responsive Design",
      "Web Performance Optimization",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Kafr El-Sheikh University",
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Front-End Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Egypt",
      },
      estimatedSalary: {
        "@type": "MonetaryAmountDistribution",
        name: "Competitive",
        currency: "USD",
      },
      skills: "React.js, Next.js, TypeScript, JavaScript, Tailwind CSS",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hamdi Shehab - Front-End Developer Portfolio",
    url: "https://hamdishehab.dev",
    description:
      "Professional Front-End Developer Portfolio showcasing React.js and Next.js projects",
    author: {
      "@type": "Person",
      name: personalInfo.name,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://hamdishehab.dev/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Hamdi Shehab - Front-End Development Services",
    image: "https://hamdishehab.dev/landing.png",
    url: "https://hamdishehab.dev",
    telephone: personalInfo.phone,
    email: personalInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kafr El-Sheikh",
      addressRegion: "Kafr El-Sheikh",
      addressCountry: "EG",
    },
    priceRange: "$$",
    serviceType: [
      "Web Development",
      "Front-End Development",
      "React Development",
      "Next.js Development",
      "TypeScript Development",
    ],
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Front-End Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "React.js Development",
            description:
              "Building modern, responsive web applications with React.js",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Next.js Development",
            description:
              "Creating high-performance, SEO-optimized websites with Next.js",
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://hamdishehab.dev",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://hamdishehab.dev/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: "https://hamdishehab.dev/projects",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Experience",
        item: "https://hamdishehab.dev/experience",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://hamdishehab.dev/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        key="person-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        key="website-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalService),
        }}
        key="service-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        key="breadcrumb-schema"
      />
    </>
  );
}
