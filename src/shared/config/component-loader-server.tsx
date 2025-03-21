import { ComponentType } from "react";
import type { RegistryItem } from "shadcn/registry";

export type ComponentLoaderProps = {
    component: RegistryItem;
}

export async function ComponentLoader<TProps extends object>({
    component,
    ...props
}: ComponentLoaderProps & TProps) {
    if (!component?.files?.length) {
        return null;
    }

    try {
        const DynamicComponent = (await import(`@/registry/components/${component.name}/${component.name}`)).default as ComponentType<TProps>;
        return <DynamicComponent {...(props as TProps)} />;
    } catch (error) {
        console.error(`Failed to load component ${component.name}:`, error);
        return null;
    }
}