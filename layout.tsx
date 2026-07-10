import "./globals.css";
export const metadata = {
  title: "CyberStore | Premium Scripts & Server",
  description: "Portofolio & Store untuk Kebutuhan IT",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}