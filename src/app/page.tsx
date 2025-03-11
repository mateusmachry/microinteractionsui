import ProgressButton from "@/examples/buttons/progress-button";
import { Sidebar1Example } from "@/examples/sidebar/sidebar1";
import { ThemeToggle1Example } from "@/examples/theme-toggle/theme-toggle1";
import { IconParkSolidApple } from "@/icons/apple";
import { MaterialSymbolsChevronRight } from "@/icons/chevron-right";
import { LogosGoogleIcon } from "@/icons/google";
import { Button1 } from "@/registry/button1/button1";
import { Button2 } from "@/registry/button2/button2";
import { Button3 } from "@/registry/button3/button3";
import { Button4 } from "@/registry/button4/button4";
import { Button6 } from "@/registry/button6/button6";
import { Button7 } from "@/registry/button7/button7";
import { Tabs1 } from "@/registry/tabs1/tabs1";
import { Tabs2 } from "@/registry/tabs2/tabs2";
import { Tabs3 } from "@/registry/tabs3/tabs3";
import { Tabs4 } from "@/registry/tabs4/tabs4";
import { Tabs5 } from "@/registry/tabs5/tabs5";

export default function Home() {
  return (
    <div className="flex flex-row justify-start">
      <Sidebar1Example />
      <div className="flex-1 flex flex-col justify-center items-center gap-4 py-12">
        <Button1 size={"lg"} variant={"secondary"} label={<span>Sign in with Google</span>} icon={<LogosGoogleIcon />} />
        <Button1 size={"lg"} variant={"default"} label={<span>Sign in with Apple</span>} icon={<IconParkSolidApple />} />
        <Button2 size={"lg"} variant={"default"} label={<span>Get started</span>} />
        <Button3 animationDirection={'from-top'} size={"lg"} variant={"outline"} label={<span>Try for free</span>} icon={<MaterialSymbolsChevronRight />} />
        <Button4 className="text-base" label={<span>Get started</span>} />
        <ProgressButton />
        <Button6>Subscribe</Button6>
        <Button7>Gradient Button</Button7>

        <ThemeToggle1Example />

        <Tabs1 />
        <Tabs2 />
        <Tabs3 />
        <Tabs4 />
        <Tabs5 />
      </div>
    </div>
  );
}