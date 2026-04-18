'use client';

import { Button } from "@/components/ui/button";

export default function Button7() {
    return (
        <Button
            type="button"
            className="rounded-full relative flex justify-center items-center cursor-pointer bg-[#161a20] text-neutral-200 border-none hover:z-0 hover:shadow-[40px_0_100px_#008cff85,-40px_0_100px_#e100ffbb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 after:absolute after:w-[103%] after:h-[109%] after:rounded-full after:bg-gradient-to-br after:from-[#008cff] after:to-[#e100ff] after:z-[-1]"
        >
            Gradient Button
        </Button>
    );
};
