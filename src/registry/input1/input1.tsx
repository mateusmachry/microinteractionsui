"use client";

import { Badge } from "@/components/ui/badge";
import { SVGProps, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EditIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path fill="currentColor" d="m11.4 18.161l7.396-7.396a10.3 10.3 0 0 1-3.326-2.234a10.3 10.3 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.6 6.6 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56q.647-.308 1.211-.749c.318-.248.607-.537 1.184-1.114m9.448-9.448a3.932 3.932 0 0 0-5.561-5.561l-.887.887l.038.111a8.75 8.75 0 0 0 2.092 3.32a8.75 8.75 0 0 0 3.431 2.13z"></path>
        </svg>
    )
};

const CheckIcon = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
            <path fill="currentColor" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83z"></path>
        </svg>
    )
};

export function Input1() {
    const [text, setText] = useState<string>("Javascript");
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing) {
            setIsInputFocused(true);
            const input = inputRef.current;
            if (input) {
                const length = input.value.length;
                input.setSelectionRange(length, length);
                input.focus();
            }
        } else {
            setIsInputFocused(false);
            inputRef.current?.blur();
        }
    }, [isEditing]);

    const onEditTextClicked = () => {
        setIsEditing(true);
    };

    const onSaveTextClicked = () => {
        setIsEditing(false);
    };

    const buttonVariants = {
        initial: { rotate: -90, opacity: 0 },
        animate: { rotate: 0, opacity: 1 },
        exit: { rotate: 90, opacity: 0 }
    };

    return (
        <Badge variant="outline" className={`rounded-md px-2 py-1 flex flex-row items-center ${isInputFocused ? 'border-primary' : ''} transition-all duration-400 ease-in-out`}>
            <input
                ref={inputRef}
                type="text"
                className="w-auto min-w-16 outline-0 border-transparent text-muted-foreground focus-visible:text-foreground text-base md:text-sm"
                value={text}
                size={text.length === 0 ? 1 : text.length}
                disabled={!isEditing}
                onChange={(event) => setText(event.target.value)}
            />
            <div className="relative w-8 h-8 flex items-center justify-center">
                <AnimatePresence mode="popLayout" initial={false}>
                    {!isEditing ? (
                        <motion.button
                            key="edit"
                            className="cursor-pointer rounded-full bg-secondary text-muted-foreground hover:text-primary p-2 absolute"
                            onClick={() => onEditTextClicked()}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={buttonVariants}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                            }}
                        >
                            <EditIcon width={12} height={12} />
                        </motion.button>
                    ) : (
                        <motion.button
                            key="save"
                            className="cursor-pointer rounded-full bg-primary hover:bg-primary/80 text-primary-foreground p-2 absolute"
                            onClick={() => onSaveTextClicked()}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={buttonVariants}
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                            }}
                        >
                            <CheckIcon width={12} height={12} />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </Badge>
    );
}