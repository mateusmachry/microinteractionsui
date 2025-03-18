import { SVGProps } from "react";

export function LogoIcon({ fillColor, ...props }: { fillColor: string } & SVGProps<SVGSVGElement>) {
    return (
        <svg {...props} viewBox="0 0 124 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="124" height="124" rx="62" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M55.3287 42H61.9934V28.6667H55.3287V42ZM28.6699 62H41.9993V55.3334H28.6699V62ZM44.524 49.2384L35.0999 39.8084L39.8118 35.095L49.2357 44.525L44.524 49.2384ZM39.8116 82.2364L35.0998 77.5231L44.5235 68.0931L49.2355 72.8064L39.8116 82.2364ZM72.7999 49.2384L68.0879 44.525L77.5118 35.095L82.2238 39.8084L72.7999 49.2384ZM64.3332 94.5L51.7227 51.7073L94.4999 64.3334L84.6999 74.1334L94.0332 83.4334L83.4332 94.0334L74.1332 84.7L64.3332 94.5Z" fill={fillColor} />
        </svg>
    )
}