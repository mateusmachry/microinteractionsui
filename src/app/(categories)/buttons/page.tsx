import { Button1 } from "@/registry/button1/button1";
import { Button2 } from "@/registry/button2/button2";
import { Button3 } from "@/registry/button3/button3";
import { Button4 } from "@/registry/button4/button4";
import { Button5 } from "@/registry/button5/button5";
import { Button6 } from "@/registry/button6/button6";
import { Button7 } from "@/registry/button7/button7";
import { Button8 } from "@/registry/button8/button8";
import { CategoryPageGrid } from "@/shared/components/category-page-grid";
import { CategoryPageHeader } from "@/shared/components/category-page-header";
import { ComponentDemoCard } from "@/shared/components/component-demo-card";

export default function ButtonComponents() {
    return (
        <>
            <CategoryPageHeader title={"Buttons"}>
                A growing collection of 10 buttons components built
                with React and Tailwind CSS.
            </CategoryPageHeader>
            <CategoryPageGrid className="max-w-5xl mx-auto">
                <ComponentDemoCard>
                    <Button1 />
                </ComponentDemoCard>
                <ComponentDemoCard>
                    <Button2 />
                </ComponentDemoCard>
                <ComponentDemoCard>
                    <Button3 />
                </ComponentDemoCard>
                <ComponentDemoCard>
                    <Button4 />
                </ComponentDemoCard>
                <ComponentDemoCard>
                    <Button5 />
                </ComponentDemoCard>
                <ComponentDemoCard>
                    <Button6 />
                </ComponentDemoCard>
                <ComponentDemoCard>
                    <Button7 />
                </ComponentDemoCard>
                <ComponentDemoCard>
                    <Button8 />
                </ComponentDemoCard>
            </CategoryPageGrid>
        </>
    );
}