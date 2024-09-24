'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

const YOUR_IP_ADDRESS = '192.168.0.19'; // Replace with your actual IP address

export default function GoogleAnalytics() {
  const [shouldLoadGA, setShouldLoadGA] = useState(false);

  useEffect(() => {
    async function checkIp() {
      try {
        const response = await fetch('/api/getIp');
        const data = await response.json();
        if (data.ip !== YOUR_IP_ADDRESS) {
          setShouldLoadGA(true);
        }
      } catch (error) {
        console.error('Error checking IP:', error);
      }
    }

    checkIp();
  }, []);

  if (!shouldLoadGA) return null;

  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-717PYZF555"/>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-717PYZF555');
          `,
        }}
      />
    </>
  );
}