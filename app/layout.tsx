import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { OrderModalProvider } from "@/components/order-modal/OrderModalContext";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["500", "600", "700"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// [PLACEHOLDER] Remplacer par le domaine réel une fois déployé sur Vercel
const siteUrl = "https://petits-savants.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Petits Savants — Le cahier magique qui donne le goût d'apprendre",
  description:
    "Kit de cahiers magiques réutilisables pour apprendre l'écriture, les chiffres et le calcul en français, dès 3 ans. Encre effaçable, rainures 3D, livraison au Bénin.",
  openGraph: {
    title: "Petits Savants — Le cahier magique qui donne le goût d'apprendre",
    description:
      "Le kit d'écriture 100% en français pour préparer la rentrée : encre magique effaçable, rainures 3D, réutilisable à l'infini.",
    locale: "fr_BJ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${workSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-bg text-ink antialiased">
        <OrderModalProvider>
          <Header />
          <main className="flex-1 pb-16 md:pb-0">{children}</main>
          <Footer />
          <StickyMobileCTA />
        </OrderModalProvider>
      </body>
    </html>
  );
}
