import Home from "@/app/(home)/components/home";
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

export async function generateMetadata({ params }: LPPageProps): Promise<Metadata> {
    const { term } = await params;
    const { title, description } = seoTerms[term as SeoTermsKeys];
    
    return {
        title: title,
        description: description,
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