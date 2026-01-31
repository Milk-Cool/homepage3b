import ConstructionObject from "./ConstructionObject";

export default function Project({ name, children, links }: { name: string, children: React.ReactNode, links: Record<string, string> }) {
    return <ConstructionObject>
        <h1>{name}</h1>
        {children}
        {Object.entries(links).map(([k, v], i) => <span>{i !== 0 ? " | " : ""}<a href={v} target="_blank">{k}</a></span>)}
    </ConstructionObject>;
}