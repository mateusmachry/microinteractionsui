import { Hero } from "@/app/(home)/components/hero";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { TabsIcon } from "@/app/(home)/components/icons/tabs";
import { ButtonIcon } from "@/app/(home)/components/icons/buttons";
import { InputIcon } from "@/app/(home)/components/icons/inputs";
import { TopNavBar } from "@/app/(home)/components/top-navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col">
      <TopNavBar />
      <main className="flex flex-col items-center justify-center w-full gap-8">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center justify-center gap-4">
            <Card className="bg-neutral-100 dark:bg-neutral-900 transition-transform duration-300 hover:scale-98">
              <Link href={"/"}>
                <CardContent>
                  <div className="h-40 flex flex-col items-center justify-center p-6">
                    <TabsIcon />
                  </div>
                </CardContent>
              </Link>
            </Card>
            <label className="text-base font-medium">Tabs</label>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Card className="bg-neutral-100 dark:bg-neutral-900 transition-transform duration-300 hover:scale-98">
              <Link href={"/"}>
                <CardContent>
                  <div className="h-40 flex flex-col items-center justify-center p-6">
                    <ButtonIcon />
                  </div>
                </CardContent>
              </Link>
            </Card>
            <label className="text-base font-medium">Buttons</label>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <Card className="bg-neutral-100 dark:bg-neutral-900 transition-transform duration-300 hover:scale-98">
              <Link href={"/"}>
                <CardContent>
                  <div className="h-40 flex flex-col items-center justify-center p-6">
                    <InputIcon />
                  </div>
                </CardContent>
              </Link>
            </Card>
            <label className="text-base font-medium">Inputs</label>
          </div>
        </div>
      </main>
    </div>
  );
}