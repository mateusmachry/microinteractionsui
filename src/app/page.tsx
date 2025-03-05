import { IconParkSolidApple } from "@/icons/apple";
import { LogosGoogleIcon } from "@/icons/google";
import { Button1 } from "@/registry/button1/button1";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <Button1 size={"lg"} variant={"secondary"} label={<span>Sign in with Google</span>} icon={<LogosGoogleIcon />} />
      <Button1 size={"lg"} variant={"default"} label={<span>Sign in with Apple</span>} icon={<IconParkSolidApple />} />
    </div>
  );
}