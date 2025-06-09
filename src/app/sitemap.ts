import { categories } from "@/shared/config/components-library";
import { MetadataRoute } from "next";
import { lpSEOTerms } from "@/app/(home)/lp/[term]/seo";
import { animationsSEOTerms } from "@/app/(library)/animations/[term]/seo";

export const SITE_BASE_URL = 'https://www.microinteractionsui.com';
const lastModified = new Date().toISOString().split('T')[0];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const lpTerms: string[] = Object.keys(lpSEOTerms) as string[];
    const animationsTerms: string[] = Object.keys(animationsSEOTerms) as string[];

    const categoryPages = categories.map((category) => ({
        url: `${SITE_BASE_URL}/${category.slug}`,
        lastModified: lastModified,
        changeFrequency: 'weekly',
        priority: 1.0
    })) as MetadataRoute.Sitemap;
    const lpSeoPages = lpTerms.map((term) => ({
        url: `${SITE_BASE_URL}/lp/${term}`,
        lastModified: lastModified,
        changeFrequency: "weekly",
        priority: 1.0,
    })) as MetadataRoute.Sitemap;
    const animationComponentsPages = animationsTerms.map((term) => ({
        url: `${SITE_BASE_URL}/animations/${term}`,
        lastModified: lastModified,
        changeFrequency: "weekly",
        priority: 1.0,
    })) as MetadataRoute.Sitemap;
    return [
        {
            url: SITE_BASE_URL,
            lastModified: lastModified,
            changeFrequency: 'weekly',
            priority: 1.0
        },
        ...categoryPages,
        ...lpSeoPages,
        ...animationComponentsPages
    ]
};