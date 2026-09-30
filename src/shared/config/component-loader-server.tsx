import { ComponentType } from "react";
import type { RegistryItem } from "shadcn/registry";

export type ComponentLoaderProps = {
  component: RegistryItem;
};

export async function ComponentLoader<TProps extends object>({
  component,
  ...props
}: ComponentLoaderProps & TProps) {
  if (!component?.files?.length) {
    return null;
  }

  let DynamicComponent: ComponentType<TProps>;

  try {
    DynamicComponent = (await import(`@/registry/components/${component.name}`))
      .default as ComponentType<TProps>;
  } catch (error) {
    console.error(`Failed to load component ${component.name}:`, error);
    return null;
  }

  return <DynamicComponent {...(props as TProps)} />;
}
