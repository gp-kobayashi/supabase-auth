import type { Metadata } from "next";
import "./globals.css";
import SupabaseListener from "./components/supabase-listener";

export const metadata: Metadata = {
  title: "Supabase Auth",
  description: "Supabase Auth",
};

export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col min-h-screen">
          {/* @ts-expect-error next version of TS will this */}
          <SupabaseListener />
          <main className="flex-1 container max-w-screen-sm mx-auto px-1 py-5">
            {children}
          </main>
          <footer className="py-5">
            <div className="text-center text-sm">
              Copyright @ All rights reserved | FullStackChannel
            </div>
          </footer>
        </div>
       </body>
    </html>
  );
}
