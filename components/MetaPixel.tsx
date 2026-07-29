"use client";

import Script from "next/script";
import { FB_PIXEL_ID, isPixelEnabled } from "@/lib/fpixel";

// Code de base du Pixel Meta (chargé une seule fois via le layout).
// Envoie automatiquement l'événement PageView à chaque chargement de page.
// Les événements InitiateCheckout (boutons "Commander") et Purchase
// (confirmation de commande) sont déclenchés depuis les composants concernés.
export default function MetaPixel() {
  // Aucun script tant que l'ID de Pixel n'est pas configuré.
  if (!isPixelEnabled) return null;

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${FB_PIXEL_ID}');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}
