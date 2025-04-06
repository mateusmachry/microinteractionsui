import { categories, getCategory, getComponentsByNames } from "@/shared/config/components-library";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { cache } from "react";
import { CategoryPageHeader } from "@/app/(library)/components/category-page-header";
import { CategoryPageGrid } from "@/app/(library)/components/category-page-grid";
import { ComponentCard } from "@/app/(library)/components/component-card";
import { ComponentLoader } from "@/shared/config/component-loader-server";

export type CategoryPageProps = {
    params: Promise<{ category: string }>;
};

const getComponentCategory = cache(getCategory);

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
    const { category } = await params;
    const componentCategory = getComponentCategory(category);

    if (!componentCategory) {
        return {};
    }

    return {
        title: `Animated ${componentCategory.name} components built with React, Tailwind CSS and Framer Motion - MicroInteractions UI`,
        description: `A collection of beautiful animated ${componentCategory.name.toLowerCase()} components built with React, Tailwind CSS and Framer Motion.`,
    };
}

export async function generateStaticParams() {
    const allCategories = categories;
    return allCategories.map((category) => ({
        category: category.slug,
    }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const { category } = await params;
    const componentCategory = getComponentCategory(category);
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