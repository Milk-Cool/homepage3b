import { CSSProperties } from "react";

export default function Decoration({ src, w, h, style, className }: { src: string, w?: number, h?: number, style?: CSSProperties, className?: string }) {
    return <img className={"decoration " + (className || "")} style={{ ...(w ? { width: `${w}vhvw` } : {}), ...(h ? { height: `${h}vh` } : {}), ...(style || {}) }} src={src} />;
}