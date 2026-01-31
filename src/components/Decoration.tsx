import { CSSProperties } from "react";

export default function Decoration({ src, w, h, style, className, id }: { src: string, w?: number, h?: number, style?: CSSProperties, className?: string, id?: string }) {
    return <img id={id} className={"decoration " + (className || "")} style={{ ...(w ? { width: `${w}vw` } : {}), ...(h ? { height: `${h}vh` } : {}), ...(style || {}) }} src={src} />;
}