export function Footer() {
    return (
        <footer className="py-8">
            <div className="flex justify-between gap-2 max-sm:flex-col max-sm:text-center">
                <p className="text-muted-foreground text-sm">&copy; {new Date().getFullYear()} Micro Interactions UI</p>
                <div className="flex flex-row items-center justify-center gap-2">
                    <p className="text-muted-foreground text-sm">Created by</p>
                    <a
                        className="text-sm text-foreground decoration-border font-medium underline underline-offset-4 hover:no-underline"
                        href="https://x.com/codemattic"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Mat Machry
                    </a>
                </div>
            </div>
        </footer>
    );
}