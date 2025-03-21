import { categories } from "@/shared/config/components-library";
import { MetadataRoute } from "next";

const baseUrl = 'https://microinteractionsui.com';
const lastModified = new Date().toISOString().split('T')[0];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const categoryPages = categories.map((category) => ({
        url: `${baseUrl}/${category.slug}`,
        lastModified: lastModified,
        changeFrequency: 'weekly',
        priority: 1.0
    })) as MetadataRoute.Sitemap;
    return [
        {
            url: baseUrl,
            lastModified: lastModified,
            changeFrequency: 'weekly',
            priority: 1.0
        },
        ...categoryPages
    ]
};