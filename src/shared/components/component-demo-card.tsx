import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CodeIcon } from "lucide-react";
import { SVGProps } from "react";


function IconV0(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M14.066 6.028v2.22h5.729q.075-.001.148.005l-5.853 5.752a2 2 0 0 1-.024-.309V8.247h-2.353v5.45c0 2.322 1.935 4.222 4.258 4.222h5.675v-2.22h-5.675q-.03 0-.059-.003l5.729-5.629q.006.082.006.166v5.465H24v-5.465a4.204 4.204 0 0 0-4.205-4.205zM0 8.245l8.28 9.266c.839.94 2.396.346 2.396-.914V8.245H8.19v5.44l-4.86-5.44Z"></path></svg>
    )
}

export function ComponentDemoCard({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            className={cn(
                "relative p-12 sm:p-16 border flex justify-center items-center",
            )}
        >
            {children}
            <div className="absolute bottom-2 right-2 flex flex-row items-center gap-0">
                <Button size={"sm"} variant={"ghost"} className="hidden cursor-pointer">
                    <IconV0 width={16} height={16} />
                </Button>
                <Button size={"sm"} variant={"ghost"} className="cursor-pointer">
                    <CodeIcon size={16} />
                </Button>
            </div>
        </div>
    );
}