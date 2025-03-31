// src/app/layout.js
"use client";
import { DashboardProvider } from "./contexts/DashboardContext";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ProjectProvider } from "./contexts/ProjectContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <title>Archo - Architecture &amp; Interior HTML Template</title>
        <meta
          name="description"
          content="Archo is a beautifully unique Architecture & Interior HTML Template. It is a great choice for any type of architecture or construction-related company"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="profile" href="https://gmpg.org/xfn/11" />
        <link rel="canonical" href="Replace_with_your_PAGE_URL" />
        {/* Stylesheets */}
        <link href="/css/bootstrap.css" rel="stylesheet" />
        <link href="/css/main.css" rel="stylesheet" />
        <link href="/css/responsive.css" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Poppins:wght@300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&family=Teko:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Add site Favicon */}
        <link
          rel="shortcut icon"
          href="images/favicon.png"
          type="image/x-icon"
        />
        <link rel="icon" href="images/favicon.png" type="image/x-icon" />
        <meta name="msapplication-TileImage" content="images/favicon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DashboardProvider>
          <ProjectProvider>
          {children}
          </ProjectProvider>
        </DashboardProvider>

        {/* Scripts */}
        <script src="js/jquery.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="js/jquery.fancybox.js"></script>
        <script src="js/appear.js"></script>
        <script src="js/owl.js"></script>
        <script src="js/wow.js"></script>
        <script src="js/parallax.min.js"></script>
        <script src="js/tilt.jquery.min.js"></script>
        <script src="js/jquery.paroller.min.js"></script>
        <script src="js/jquery-ui.js"></script>
        {/* <script src="js/script.js"></script> */}
      </body>
    </html>
  );
}