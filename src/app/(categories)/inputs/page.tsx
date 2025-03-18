import { Input1 } from "@/registry/input1/input1";
import { Input2 } from "@/registry/input2/input2";
import { CategoryPageGrid } from "@/shared/components/category-page-grid";
import { CategoryPageHeader } from "@/shared/components/category-page-header";
import { ComponentDemoCard } from "@/shared/components/component-demo-card";

export default function InputComponents() {
    return (
        <>
            <CategoryPageHeader title={"Inputs"} />
            <CategoryPageGrid className="max-w-5xl mx-auto">
                <ComponentDemoCard>
                    <Input1 />
                </ComponentDemoCard>
                <ComponentDemoCard>
                    <Input2 />
                </ComponentDemoCard>
            </CategoryPageGrid>
        </>
    );
}