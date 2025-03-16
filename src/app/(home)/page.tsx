import { Hero } from "@/app/(home)/components/hero";
import { TabsIcon } from "@/app/(home)/components/icons/tabs";
import { ButtonIcon } from "@/app/(home)/components/icons/buttons";
import { InputIcon } from "@/app/(home)/components/icons/inputs";
import { TopNavBar } from "@/shared/components/top-navbar";
import { ToggleIcon } from "@/app/(home)/components/icons/toggle";
import { ComponentTypeCard } from "@/app/(home)/components/component-type-card";
import { Footer } from "@/shared/components/footer";

export default function Home() {
	return (
		<div className="min-h-screen w-full bg-background flex flex-col max-w-5xl mx-auto">
			<TopNavBar />
			<main className="flex flex-col flex-1 items-center justify-center w-full gap-8">
				<Hero />
				<div className="max-w-3xl grid w-full grid-cols-1 md:grid-cols-2 grid-flow-row gap-y-8 gap-x-4 pb-16">
					<ComponentTypeCard icon={<TabsIcon />} href={"/tabs"} label={"Tabs"} />
					<ComponentTypeCard icon={<ButtonIcon />} href={"/buttons"} label={"Buttons"} />
					<ComponentTypeCard icon={<InputIcon />} href={"/inputs"} label={"Inputs"} />
					<ComponentTypeCard icon={<ToggleIcon />} href={"/toggle"} label={"Toggle"} />
				</div>
			</main>
			<Footer />
		</div>
	);
}