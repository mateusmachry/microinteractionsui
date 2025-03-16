import { Tabs1 } from "@/registry/tabs1/tabs1";
import { Tabs2 } from "@/registry/tabs2/tabs2";
import { Tabs3 } from "@/registry/tabs3/tabs3";
import { Tabs4 } from "@/registry/tabs4/tabs4";
import { Tabs5 } from "@/registry/tabs5/tabs5";
import { CategoryPageGrid } from "@/shared/components/category-page-grid";
import { CategoryPageHeader } from "@/shared/components/category-page-header";
import { ComponentDemoCard } from "@/shared/components/component-demo-card";

export default function TabComponents() {
    return (
        <>
            <CategoryPageHeader title={"Tabs"}>
                A growing collection of 10 buttons components built
                with React and Tailwind CSS.
            </CategoryPageHeader>
            <CategoryPageGrid>
                <ComponentDemoCard>
                    <Tabs1 />
                </ComponentDemoCard>
                <ComponentDemoCard>
                    <Tabs2 />
                </ComponentDemoCard>
                <ComponentDemoCard>
                    <Tabs3 />
                </ComponentDemoCard>
                <ComponentDemoCard>
                    <Tabs4 />
                </ComponentDemoCard>
                <ComponentDemoCard>
                    <Tabs5 />
                </ComponentDemoCard>
            </CategoryPageGrid>
        </>
    );
}