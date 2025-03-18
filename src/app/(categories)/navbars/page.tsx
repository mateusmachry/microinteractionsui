import { Navbar1 } from "@/registry/navbar1/navbar1";
import { CategoryPageGrid } from "@/shared/components/category-page-grid";
import { CategoryPageHeader } from "@/shared/components/category-page-header";
import { ComponentDemoCard } from "@/shared/components/component-demo-card";

export default function NavbarComponents() {
    return (
        <>
            <CategoryPageHeader title={"Navbars"} />
            <CategoryPageGrid className="max-w-5xl mx-auto">
                <ComponentDemoCard>
                    <Navbar1 />
                </ComponentDemoCard>
            </CategoryPageGrid>
        </>
    );
}