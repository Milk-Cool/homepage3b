import { CSSProperties } from "react";

export default function Decoration({ src, w, h, style }: { src: string, w: number, h?: number, style?: CSSProperties }) {
    return <img className="decoration" style={{ width: `${w}vw`, ...(h ? { height: `${h}vh` } : {}), ...(style || {}) }} src={src} />;
}