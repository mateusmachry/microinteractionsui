import type { Metadata } from "next";
import { Noto_Sans, Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const notoSans = Noto_Sans({
	variable: "--font-noto-sans",
	subsets: ["latin"],
});

const notoMono = Noto_Sans_Mono({
	variable: "--font-noto-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "MicroInteractions UI",
	description: "A collection of ready-to-use animated UI components built with React, Tailwind CSS, Shadcn, and Framer Motion.",
	openGraph: {
		title: "MicroInteractions UI",
		description: "A collection of ready-to-use animated UI components built with React, Tailwind CSS, Shadcn, and Framer Motion.",
		url: "https://microinteractionsui.com",
		siteName: "MicroInteractions UI",
		images: [
			{
				url: "https://microinteractionsui.com/og-image.png",
				width: 1200,
				height: 630,
				alt: "MicrointeractionsUI OG image",
			},
		],
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${notoSans.variable} ${notoMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
				<Analytics />
			</body>
		</html>
	);
}
