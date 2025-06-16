import type { Metadata } from "next";
import Script from "next/script.js";


// import "@/public/css/index.css"


import "@/public/css/settings.css"
import "@/public/css/css_1.css"
import "@/public/css/css.css"

import "@/public/css/reset.css"

import "@/public/css/superfish.css"
import "@/public/css/prettyPhoto.css"

// import "@/public/css/jquery.qtip.css"

import "@/public/css/style_4.css"

import "@/public/css/animations.css"
import "@/public/css/responsive.css"
import "@/public/css/odometer-theme-default.css"
import "@/public/css/style_3.css"
import "@/public/css/style.css"
import "@/public/css/style_2.css"
import "@/public/css/style_1.css"
import "@/public/css/style_selector.css"


// import "./globals.css";


import Preloader from "../_components/UI/preloader";
import SearchAbsoluteContainer from "../_components/UI/SearchAbsoluteContainer";



export const metadata: Metadata = {
  title: "Finpeak - Business Finance Consulting Template",
  description: "Business Finance Consulting Template",
  keywords: [
    "Business",
    "Finance",
    "Consulting",
    "Accounting",
    "Loans",
    "Optimization",
    "Analyzes",
    "Banking",
    "Audit",
    "Capital",
    "Costs reduction",
    "Employee benefits",
    "Company value",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">


      <body
        className={`antialiased fp-site-preloader with-topbar`}
      >
        
        <Preloader />
        {children}

        <a href="#top" className="scroll-top animated-element template-up1" title="Scroll to top"></a>
        <div className="background-overlay"></div>
        <SearchAbsoluteContainer />

      

        <Script data-cfasync="false" src="/js/email-decode.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery-3.6.0.min.js" strategy="afterInteractive" />

        <Script src="/js/jquery.themepunch.tools.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.themepunch.revolution.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.ba-bbq.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery-ui-1.13.1.custom.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.ui.touch-punch.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.isotope-packed.js" strategy="afterInteractive" />
        <Script src="/js/jquery.easing.1.4.1.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.carouFredSel-6.2.1-packed.js" strategy="afterInteractive" />
        <Script src="/js/jquery.touchSwipe.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.transit.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.costCalculator.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.parallax.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.prettyPhoto.js" strategy="afterInteractive" />
        <Script src="/js/jquery.qtip.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.blockUI.min.js" strategy="afterInteractive" />
        <Script src="/js/jquery.imagesloaded-packed.js" strategy="afterInteractive" />
        <Script src="/js/main.js" strategy="afterInteractive" />
        <Script src="/js/odometer.min.js" strategy="afterInteractive" />

        <Script src="/js/style_selector.js" strategy="afterInteractive" />

      </body>
    </html>
  );
}
