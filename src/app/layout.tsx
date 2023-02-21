import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head />
      <body className="bg-[rgb(36,36,36)] text-white snap-y snap-mandatory z-0 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
