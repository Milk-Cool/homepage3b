import Content from "./Center";
import Construction from "./Construction";
import ConstructionFloor from "./ConstructionFloor";
import ConstructionSign from "./ConstructionSign";
import Decoration from "./Decoration";

export default function App() {
    return <>
        <Decoration src="/clouds.png" w={100} style={{ position: "fixed", opacity: 0.7, zIndex: -1 }} />
        <Content>
            <ConstructionSign>
                <h3>milk_cool's</h3>
                <h1>CONSTRUCTION SITE</h1>
            </ConstructionSign>
        </Content>
        <Construction>
            <ConstructionFloor>
                <h2>Hii</h2>
            </ConstructionFloor>
        </Construction>
    </>;
}