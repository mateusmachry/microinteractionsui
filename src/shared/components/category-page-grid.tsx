export function CategoryPageGrid({ children }: { children: React.ReactNode }) {
    return (
        <div className="overflow-hidden my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 -m-px *:not-first:-ms-px *:not-first:-mt-px">
                {children}
            </div>
        </div>
    );
}