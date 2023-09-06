import "./assets/css/vendors/bootstrap.css";
import "./assets/fonts/font-awesome/css/font-awesome.css";
import "./assets/css/vendors/magnific-popup.css";
import "./assets/css/vendors/splitting.css";
import "./assets/css/vendors/swiper.css";
import "./assets/css/vendors/animate.css";
import "./assets/css/style.css";
import "./assets/css/dark.css";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Script from "next/script";
import React from "react";
import Hydrate from "./components/Hydrate";

const font1 = Jost({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Dike Wisdom",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${font1.className} home light-skin`}>
        <div className="container-page">{children}</div>
      </body>

      <Script src="/js/custom.js"></Script>
      <Script src="/js/jquery.min.js"></Script>
      <Script src="/js/jquery.validate.min.js"></Script>
      <Script src="/js/bootstrap.js"></Script>
      <Script src="/js/swiper.js"></Script>
      <Script src="/js/splitting.js"></Script>
      <Script src="/js/jarallax.min.js"></Script>
      <Script src="/js/magnific-popup.js"></Script>
      <Script src="/js/imagesloaded.pkgd.js"></Script>
      <Script src="/js/isotope.pkgd.js"></Script>
      <Script src="/js/jquery.scrolla.js"></Script>
      <Script src="/js/skrollr.js"></Script>
      <Script src="/js/jquery.cookie.js"></Script>
      <Script src="/js/typed.js"></Script>
      <Script src="/js/common.js"></Script>
    </html>
  );
}
