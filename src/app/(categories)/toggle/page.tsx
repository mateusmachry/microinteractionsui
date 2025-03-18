import { ThemeToggle1 } from "@/registry/theme-toggle1/theme-toggle1";
import { ThemeToggle2 } from "@/registry/theme-toggle2/theme-toggle2";
import { CategoryPageGrid } from "@/shared/components/category-page-grid";
import { CategoryPageHeader } from "@/shared/components/category-page-header";
import { ComponentDemoCard } from "@/shared/components/component-demo-card";

export default function ToggleComponents() {
    return (
        <>
            <CategoryPageHeader title={"Toggle"} />
            <CategoryPageGrid className="max-w-5xl mx-auto">
                <ComponentDemoCard>
                    <ThemeToggle1 />
                </ComponentDemoCard>
                <ComponentDemoCard>
                    <ThemeToggle2 />
                </ComponentDemoCard>
            </CategoryPageGrid>
        </>
    );
}