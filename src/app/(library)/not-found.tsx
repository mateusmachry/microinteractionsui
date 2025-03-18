import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="flex flex-col h-96 justify-center items-center">
			<div className="text-center py-10 px-4 sm:px-6 lg:px-8">
				<h1 className="block text-7xl font-bold text-gray-800 sm:text-9xl dark:text-white">404</h1>
				<p className="mt-3 text-gray-600 dark:text-neutral-400">Oops, something went wrong.</p>
				<p className="text-gray-600 dark:text-neutral-400">Sorry, we couldn't find your page.</p>
				<div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
					<Button asChild className="rounded-full">
						<Link href="/">Browse components</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}