import { SVGProps } from "react";

export function ToggleIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="46" height="22" rx="11" fill="none"/>
            <rect x="1" y="1" width="46" height="22" rx="11" stroke="currentColor" strokeWidth="2"/>
            <circle cx="38" cy="12" r="4" fill="currentColor"/>
        </svg>
    )
}