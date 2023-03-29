import "./globals.css";

export const metadata = {
  title: "Mallory Daniel | Full Stack Developer",
  description: "Created by Mallory Daniel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
