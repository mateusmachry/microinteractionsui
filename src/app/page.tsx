import ProgressButton from "@/examples/buttons/progress-button";
import { ThemeToggle1Example } from "@/examples/theme-toggle/theme-toggle1";
import { IconParkSolidApple } from "@/icons/apple";
import { MaterialSymbolsChevronRight } from "@/icons/chevron-right";
import { LogosGoogleIcon } from "@/icons/google";
import { Button1 } from "@/registry/button1/button1";
import { Button2 } from "@/registry/button2/button2";
import { Button3 } from "@/registry/button3/button3";
import { Button4 } from "@/registry/button4/button4";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <Button1 size={"lg"} variant={"secondary"} label={<span>Sign in with Google</span>} icon={<LogosGoogleIcon />} />
      <Button1 size={"lg"} variant={"default"} label={<span>Sign in with Apple</span>} icon={<IconParkSolidApple />} />

      <Button2 size={"lg"} variant={"default"} label={<span>Get started</span>} />
      <Button2 size={"lg"} variant={"outline"} label={<span>Get started</span>} iconColor="#0A0A0A" iconColorOnHover="#0A0A0A" iconBgColorOnHover="#F59E0B" />

      <Button3 animationDirection={'from-top'} size={"lg"} variant={"outline"} bgColorOnHover={"#262626"} label={<span>Try for free</span>} icon={<MaterialSymbolsChevronRight />} />

      <Button4 className="text-base" label={<span>Get started</span>} />

      <ProgressButton />

      <ThemeToggle1Example />
    </div>
  );
}