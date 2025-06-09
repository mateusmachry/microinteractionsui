import { getCategory, getComponentsByNames } from "@/shared/config/components-library";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPageHeader } from "@/app/(library)/components/category-page-header";
import { CategoryPageGrid } from "@/app/(library)/components/category-page-grid";
import { ComponentCard } from "@/app/(library)/components/component-card";
import { ComponentLoader } from "@/shared/config/component-loader-server";
import { cache } from "react";
import { SITE_BASE_URL } from "@/app/sitemap";
import { animationsSEOTerms, AnimationsSEOTermsKeys } from "./seo";

const getComponentCategory = cache(getCategory);

export async function generateMetadata({ params }: AnimationsPageProps): Promise<Metadata> {
    const { term } = await params;
    const { title, description } = animationsSEOTerms[term as AnimationsSEOTermsKeys];
    const canonical = `${SITE_BASE_URL}/animations/${term}`;

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

export type AnimationsPageProps = {
    params: Promise<{ term: AnimationsSEOTermsKeys }>;
};

export default async function Page({ params }: AnimationsPageProps) {
    const { term } = await params;
    const componentCategory = getComponentCategory(animationsSEOTerms[term as AnimationsSEOTermsKeys].slug);
    if (!componentCategory) {
        return notFound();
    }
    const components = getComponentsByNames(componentCategory.components.map((item) => item.name));
    return (
        <>
            <CategoryPageHeader title={componentCategory.name} />
            <CategoryPageGrid className={`${componentCategory.slug === 'tabs' ? 'w-full' : 'max-w-5xl'} mx-auto`}>
                {components.map((component) => (
                    <ComponentCard key={component.name} component={component}>
                        <ComponentLoader component={component} />
                    </ComponentCard>
                ))}
            </CategoryPageGrid>
        </>
    );
}