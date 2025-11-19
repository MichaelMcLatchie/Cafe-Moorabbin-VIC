document.addEventListener('DOMContentLoaded', (event) => {
  const structuredData = {
      "@context": "https://schema.org",
      "@type": "CafeOrCoffeeShop",
      "name": "Cafe Moorabbin VIC",
      "image": "https://michaelmclatchie.github.io/Cafe-Moorabbin-VIC/images/hero.webp",
      "address": {
          "@type": "PostalAddress",
          "streetAddress": "488 South Road",
          "addressLocality": "Moorabbin",
          "addressRegion": "VIC",
          "postalCode": "3189",
          "addressCountry": "AU"
      },
      "telephone": "+61 407 889 208",
      "email": "michaelbmclatchie98@gmail.com",
      "url": "https://michaelmclatchie.github.io/Cafe-Moorabbin-VIC/",
      "openingHours": [
          "Mo-Fr 07:00-16:00",
          "Sa-Su 08:00-15:00"
      ],
      "sameAs": [
          "https://www.instagram.com/moorabbincoffee/",
          "https://x.com/MoorabbinCoffee"
      ]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);
});