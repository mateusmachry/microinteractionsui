import { Sidebar1Example } from "@/examples/sidebar/sidebar1";
import { ThemeToggle1Example } from "@/examples/theme-toggle/theme-toggle1";
import { Button1 } from "@/registry/button1/button1";
import { Button2 } from "@/registry/button2/button2";
import { Button3 } from "@/registry/button3/button3";
import { Button4 } from "@/registry/button4/button4";
import { Button5 } from "@/registry/button5/button5";
import { Button6 } from "@/registry/button6/button6";
import { Button7 } from "@/registry/button7/button7";
import { Button8 } from "@/registry/button8/button8";
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
        <Button1 />
        <Button8 />
        <Button2 />
        <Button3 />
        <Button4 />
        <Button5 />
        <Button6 />
        <Button7 />

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