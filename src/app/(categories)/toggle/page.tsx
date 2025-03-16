import { ThemeToggle1 } from "@/registry/theme-toggle1/theme-toggle1";
import { CategoryPageGrid } from "@/shared/components/category-page-grid";
import { CategoryPageHeader } from "@/shared/components/category-page-header";
import { ComponentDemoCard } from "@/shared/components/component-demo-card";

export default function ToggleComponents() {
    return (
        <>
            <CategoryPageHeader title={"Toggle"}>
                A growing collection of 10 buttons components built
                with React and Tailwind CSS.
            </CategoryPageHeader>
            <CategoryPageGrid className="max-w-5xl mx-auto">
                <ComponentDemoCard>
                    <ThemeToggle1 />
                </ComponentDemoCard>
            </CategoryPageGrid>
        </>
    );
}