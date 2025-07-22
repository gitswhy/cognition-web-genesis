interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  version?: string;
  operatingSystem?: string;
  applicationCategory?: string;
  offers?: {
    price: string;
    priceCurrency: string;
    name: string;
  }[];
}

export const SoftwareApplicationSchema = ({
  name,
  description,
  version = "1.0.0",
  operatingSystem = "Linux, macOS, Windows",
  applicationCategory = "DeveloperApplication",
  offers = []
}: SoftwareApplicationSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "softwareVersion": version,
    "developer": {
      "@type": "Organization",
      "name": "ReflexCore",
      "url": "https://reflexcore.io"
    },
    "downloadUrl": "https://install.gitswhy.io",
    "featureList": [
      "Cognitive DevSecOps",
      "Real-time security scanning",
      "Automated code repair",
      "Intent-driven development",
      "Team collaboration tools"
    ],
    "screenshot": "https://reflexcore.io/assets/cli-demo.png",
    ...(offers.length > 0 && {
      "offers": offers.map(offer => ({
        "@type": "Offer",
        "price": offer.price,
        "priceCurrency": offer.priceCurrency,
        "name": offer.name,
        "availability": "https://schema.org/InStock"
      }))
    })
  };

  return (
    <>
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
};