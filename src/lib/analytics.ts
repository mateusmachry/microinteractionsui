import { track } from "@vercel/analytics";

export function trackEvent(
  name: "component_type_clicked",
  properties: { category_slug: string; category_name: string }
): void;
export function trackEvent(
  name: "component_view_code_opened",
  properties: { component_name: string; category_slug: string }
): void;
export function trackEvent(
  name: "component_open_in_v0_clicked",
  properties: { component_name: string; category_slug: string }
): void;
export function trackEvent(
  name: "component_install_copied",
  properties: {
    component_name: string;
    category_slug: string;
    package_manager: string;
  }
): void;
export function trackEvent(
  name: string,
  properties: Record<string, string>
): void {
  track(name, properties);
}
