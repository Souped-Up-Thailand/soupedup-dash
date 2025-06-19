import "@/styles/globals.css";

import { type Metadata } from "next";
import { Noto_Sans_Thai } from 'next/font/google';

import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
    title: "Souped Up Dashboard",
    description: "Souped Up Dashboard",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const NotoSansThai = Noto_Sans_Thai({
    subsets: ["latin", "thai"],
});


export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${NotoSansThai.className}`}>
            <body className="bg-zinc-900">
                <TRPCReactProvider>{children}</TRPCReactProvider>
            </body>
        </html>
    );
}
