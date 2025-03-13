import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Nav} from "./Components/nav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
        {children}
    
      </body>
    </html>
  );
}
