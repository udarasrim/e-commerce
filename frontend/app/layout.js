import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "E-Commerce App",
  description: "Simple Clothing Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        <main className="max-w-5xl mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
