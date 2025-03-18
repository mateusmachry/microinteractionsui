import { Footer } from "@/shared/footer";
import { TopNavBar } from "@/shared/top-navbar";

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