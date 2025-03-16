import { Button1 } from "@/registry/button1/button1";
import { Button2 } from "@/registry/button2/button2";
import { Button3 } from "@/registry/button3/button3";
import { Button4 } from "@/registry/button4/button4";
import { Button5 } from "@/registry/button5/button5";
import { Button6 } from "@/registry/button6/button6";
import { Button7 } from "@/registry/button7/button7";
import { Button8 } from "@/registry/button8/button8";

export default function ButtonComponents() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-16 gap-y-16 max-w-3xl">
            <Button1 />
            <Button8 />
            <Button2 />
            <Button3 />
            <Button4 />
            <Button5 />
            <Button6 />
            <Button7 />
        </div>
    );
}