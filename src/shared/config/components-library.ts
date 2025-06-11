import { RegistryItem } from "shadcn/registry";
import registry from "@/registry.json";

export type ComponentCategory = {
    slug: string;
    name: string;
    components: { name: string }[];
}

export const categories: ComponentCategory[] = [
    {
        slug: "button",
        name: "Button",
        components: [
            { name: "button1" },
            { name: "button2" },
            { name: "button3" },
            { name: "button4" },
            { name: "button5" },
            { name: "button6" },
            { name: "button7" },
            { name: "button8" },
        ],
    },
    {
        slug: "input",
        name: "Input",
        components: [
            { name: "input1" },
            { name: "input2" },
        ],
    },
    {
        slug: "navbar",
        name: "Navbar",
        components: [
            { name: "navbar1" },
        ],
    },
    {
        slug: "tabs",
        name: "Tabs",
        components: [
            { name: "tabs1" },
            { name: "tabs2" },
            { name: "tabs3" },
            { name: "tabs4" },
            { name: "tabs5" },
        ],
    },
    {
        slug: "theme-toggle",
        name: "Theme Toggle",
        components: [
            { name: "theme-toggle1" },
            { name: "theme-toggle2" },
        ],
    },
    {
        slug: "stepper",
        name: "Stepper",
        components: [
            { name: "stepper1" },
            { name: "stepper2" },
        ],
    }
];

export function getCategory(slug: string): ComponentCategory | undefined {
    return categories.find((category) => category.slug === slug);
}

export const getComponentsByNames = (names: string[]): RegistryItem[] => {
    const components = registry.items as unknown as RegistryItem[];
    const componentsMap = new Map(components.map((comp) => [comp.name, comp]));

    return names
        .map((name) => componentsMap.get(name))
        .filter((comp): comp is RegistryItem => comp !== undefined);
};