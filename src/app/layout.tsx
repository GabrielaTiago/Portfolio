import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head />
      <body className="bg-[rgb(36,36,36)] text-white">{children}</body>
    </html>
  );
}
