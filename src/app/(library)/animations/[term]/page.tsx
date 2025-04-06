import { getCategory, getComponentsByNames } from "@/shared/config/components-library";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPageHeader } from "@/app/(library)/components/category-page-header";
import { CategoryPageGrid } from "@/app/(library)/components/category-page-grid";
import { ComponentCard } from "@/app/(library)/components/component-card";
import { ComponentLoader } from "@/shared/config/component-loader-server";
import { cache } from "react";

const seoTerms = {
    "animated-tabs": {
        slug: "tabs",
        title: "Animated Tabs - Beautiful UI Components for React",
        description:
            "Discover a collection of stunning tab components built with React, Tailwind CSS, Shadcn and Framer Motion.",
    },
    "react-animated-tabs": {
        slug: "tabs",
        title: "React Animated Tabs - Interactive UI Elements",
        description:
            "Discover a collection of interactive and customizable tab components built with React, Tailwind CSS, Framer Motion and Shadcn for seamless integration.",
    },
    "animated-buttons": {
        slug: "button",
        title: "Animated Buttons - Beautiful UI Components for React",
        description:
            "Discover a collection of animated button components built with React, Tailwind CSS, Framer Motion and Shadcn.",
    },
    "react-animated-buttons": {
        slug: "button",
        title: "React Animated Buttons - Interactive UI Elements",
        description:
            "Discover a collection of animated button components built with React, Tailwind CSS, Framer Motion and Shadcn.",
    },
};

type SeoTermsKeys = keyof typeof seoTerms;

const getComponentCategory = cache(getCategory);

export async function generateMetadata({ params }: AnimationsPageProps): Promise<Metadata> {
    const { term } = await params;
    const { title, description } = seoTerms[term as SeoTermsKeys];
    
    return {
        title: title,
        description: description,
    };
};

export type AnimationsPageProps = {
    params: Promise<{ term: SeoTermsKeys }>;
};

export default async function Page({ params }: AnimationsPageProps) {
    const { term } = await params;
    const componentCategory = getComponentCategory(seoTerms[term as SeoTermsKeys].slug);
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