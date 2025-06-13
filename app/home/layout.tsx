import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script.js";

// import "../../public/css/settings.css"
// import "../../public/css/css_1.css"
// import "../../public/css/css.css"
// import "../../public//css/reset.css"
// import "../../public/css/superfish.css"
// import "../../public/css/prettyPhoto.css"
// import "../../public/css/jquery.qtip.css"
// import "../../public/css/style_4.css"
// import "../../public/css/animations.css"
// import "../../public/css/responsive.css"
// import "../../public/css/odometer-theme-default.css"
// import "../../public/css/style_3.css"
// import "../../public/css/style.css"
// import "../../public/css/style_2.css"
// import "../../public/css/style_1.css"
// import "../../public/css/style_selector.css"

// import Preloader from "../_components/UI/preloader";
// import SearchAbsoluteContainer from "../_components/UI/SearchAbsoluteContainer";


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Home Finpeak - Business Finance Consulting Template",
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
        <>
            {children}
        </>
    );
}
