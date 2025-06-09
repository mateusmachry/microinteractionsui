import Home from "@/app/(home)/components/home";
import { SITE_BASE_URL } from "@/app/sitemap";
import { Metadata } from "next";

const seoTerms = {
    "microinteractions-ui": {
        title: "Microinteractions UI - Beautiful Animated Components for React",
        description:
            "Explore Microinteractions UI, a collection of animated components built with React, Tailwind CSS, Shadcn and Framer Motion.",
    },
    "css-micro-animations": {
        title: "CSS Micro Animations - Smooth UI Interactions",
        description:
            "Enhance your UI with CSS Micro Animations. Built with React, Tailwind CSS, Shadcn and Framer Motion for seamless integration.",
    },
};

type SeoTermsKeys = keyof typeof seoTerms;
export const lpSEOTerms: string[] = Object.keys(seoTerms) as string[];

export async function generateMetadata({ params }: LPPageProps): Promise<Metadata> {
    const { term } = await params;
    const { title, description } = seoTerms[term as SeoTermsKeys];
    const canonical = `${SITE_BASE_URL}/lp/${term}`;

    return {
        title: title,
        description: description,
        alternates: {
            canonical,
        },
        openGraph: {
            title: "MicroInteractions UI",
            description: "A collection of ready-to-use animated UI components built with React, Tailwind CSS, Shadcn, and Framer Motion.",
            url: "https://www.microinteractionsui.com",
            siteName: "MicroInteractions UI",
            images: [
                {
                    url: "https://www.microinteractionsui.com/og-image.png",
                    width: 1200,
                    height: 630,
                    alt: "MicrointeractionsUI OG image",
                },
            ],
            type: "website",
        },
    };
};

export type LPPageProps = {
    params: Promise<{ term: SeoTermsKeys }>
};

export default function Page() {
    return (
        <Home />
    );
}