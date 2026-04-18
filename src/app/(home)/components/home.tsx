import { Hero } from "@/app/(home)/components/hero";
import { TabsIcon } from "@/app/(home)/components/icons/tabs";
import { ButtonIcon } from "@/app/(home)/components/icons/buttons";
import { InputIcon } from "@/app/(home)/components/icons/inputs";
import { TopNavBar } from "@/shared/top-navbar";
import { ToggleIcon } from "@/app/(home)/components/icons/toggle";
import { ComponentTypeCard } from "@/app/(home)/components/component-type-card";
import { Footer } from "@/shared/footer";
import { SideNavbarIcon } from "@/app/(home)/components/icons/side-navbar";
import { StepperIcon } from "@/app/(home)/components/icons/stepper";

export default function Home() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-background flex flex-col">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.18),transparent_45%),radial-gradient(circle_at_78%_18%,rgba(15,23,42,0.08),transparent_32%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.22),transparent_30%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.09),transparent_45%),radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.05),transparent_32%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_30%)]" />
                <div className="absolute left-1/2 top-[14rem] h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0.16),rgba(255,255,255,0)),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0))] blur-3xl opacity-60 dark:opacity-30" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent,transparent_49.5%,rgba(15,23,42,0.05)_50%,transparent_50.5%),linear-gradient(to_bottom,transparent,transparent_49.5%,rgba(15,23,42,0.05)_50%,transparent_50.5%)] bg-[size:5rem_5rem] opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_78%)] dark:opacity-10" />
            </div>
            <TopNavBar />
            <main className="relative z-10 flex flex-1 flex-col items-center justify-center w-full gap-8 px-4 pt-8 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    <Hero />
                    <div className="grid w-full max-w-3xl grid-cols-1 grid-flow-row gap-x-4 gap-y-8 pb-16 mx-auto md:grid-cols-2">
                        <ComponentTypeCard icon={<TabsIcon />} href={"/tabs"} label={"Tabs"} />
                        <ComponentTypeCard icon={<ButtonIcon />} href={"/button"} label={"Button"} />
                        <ComponentTypeCard icon={<InputIcon />} href={"/input"} label={"Input"} />
                        <ComponentTypeCard icon={<ToggleIcon />} href={"/theme-toggle"} label={"Toggle"} />
                        <ComponentTypeCard icon={<StepperIcon />} href={"/stepper"} label={"Stepper"} />
                        <ComponentTypeCard icon={<SideNavbarIcon />} href={"/navbar"} label={"Navbar"} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
