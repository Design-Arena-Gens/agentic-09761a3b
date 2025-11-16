import "@/app/globals.css";

export const metadata = {
  title: "Laxmi Narayan Bartan Bhandar | Immersion Rod Campaign",
  description:
    "Experience the warmth of Laxmi Narayan Bartan Bhandar's shock-proof, fast-heating immersion rod starting at ₹250."
};

export default function RootLayout({ children }) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  );
}
