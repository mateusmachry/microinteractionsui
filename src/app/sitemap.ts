import { categories } from "@/shared/config/components-library";
import { MetadataRoute } from "next";

const baseUrl = 'https://www.microinteractionsui.com';
const lastModified = new Date().toISOString().split('T')[0];
const lpSeoTerms = ["microinteractions-ui", "css-micro-animations"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const categoryPages = categories.map((category) => ({
        url: `${baseUrl}/${category.slug}`,
        lastModified: lastModified,
        changeFrequency: 'weekly',
        priority: 1.0
    })) as MetadataRoute.Sitemap;
    const lpSeoPages = lpSeoTerms.map((term) => ({
        url: `${baseUrl}/${term}`,
        lastModified: lastModified,
        changeFrequency: "weekly",
        priority: 1.0,
    })) as MetadataRoute.Sitemap;
    return [
        {
            url: baseUrl,
            lastModified: lastModified,
            changeFrequency: 'weekly',
            priority: 1.0
        },
        ...categoryPages,
        ...lpSeoPages
    ]
};