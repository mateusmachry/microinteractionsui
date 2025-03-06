import { IconParkSolidApple } from "@/icons/apple";
import { LogosGoogleIcon } from "@/icons/google";
import { Button1 } from "@/registry/button1/button1";
import { Button2 } from "@/registry/button2/button2";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <Button1 size={"lg"} variant={"secondary"} label={<span>Sign in with Google</span>} icon={<LogosGoogleIcon />} />
      <Button1 size={"lg"} variant={"default"} label={<span>Sign in with Apple</span>} icon={<IconParkSolidApple />} />

      <Button2 size={"lg"} variant={"default"} label={<span>Get started</span>} />
      <Button2 size={"lg"} variant={"outline"} label={<span>Get started</span>} iconColor="#0A0A0A" iconHoverColor="#0A0A0A" iconHoverBgColor="#F59E0B" />
    </div>
  );
}