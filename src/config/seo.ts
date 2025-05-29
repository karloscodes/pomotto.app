// Define types for SEO data
interface PageMetadata {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface StructuredData {
  "@context": string;
  "@type": string;
  name: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    "@type": string;
    price: string;
    priceCurrency: string;
    availability: string;
  };
  description: string;
}

interface PageCollection {
  home: PageMetadata;
  whyPomotto: PageMetadata;
  contact: PageMetadata;
  privacyPolicy: PageMetadata;
  thankYou: PageMetadata;
}

// Site-wide SEO configuration
export const siteName: string = "Pomotto";
export const siteUrl: string = "https://www.pomotto.app";
export const defaultImage: string = "/images/pomotto-og-image.png";
export const fullDefaultImage: string = `${siteUrl}${defaultImage}`;
export const defaultDescription: string =
  "A smarter Pomodoro timer that takes care of your energy and focus reminding you to take breaks and cutting out distractions";
export const defaultTitle: string = "Pomotto | Deep Work, Done Right";

// Structured data for the homepage
export const structuredData: StructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pomotto",
  applicationCategory: "Productivity",
  operatingSystem: "macOS",
  offers: {
    "@type": "Offer",
    price: "2.99",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  description: defaultDescription,
};

// Page-specific metadata
export const pages: PageCollection = {
  home: {
    title: defaultTitle,
    description: defaultDescription,
    image: fullDefaultImage,
    url: siteUrl,
  },
  whyPomotto: {
    title: "Pomotto | Why Pomotto?",
    description:
      "A smarter Pomodoro timer that takes care of your energy and focus reminding you to take breaks and cutting out distractions",
    image: fullDefaultImage,
    url: `${siteUrl}/why-pomotto`,
  },
  contact: {
    title: "Pomotto | Contact",
    description:
      "Get in touch with the Pomotto team for questions, feedback, or support.",
    image: fullDefaultImage,
    url: `${siteUrl}/contact`,
  },
  privacyPolicy: {
    title: "Pomotto | Privacy Policy",
    description:
      "Pomotto's privacy policy details how we handle your data and protect your privacy.",
    image: fullDefaultImage,
    url: `${siteUrl}/privacy-policy`,
  },
  thankYou: {
    title: "Pomotto | Thank You",
    description:
      "Thank you for your submission.",
    image: fullDefaultImage,
    url: `${siteUrl}/thank-you`,
  },
}; 
