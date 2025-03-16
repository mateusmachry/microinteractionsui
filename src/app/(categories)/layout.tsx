import { Footer } from "@/shared/components/footer";
import { TopNavBar } from "@/shared/components/top-navbar";

export default function CategoriesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col min-h-screen mx-auto">
            <TopNavBar />
            <main className="grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}