import Content from "./Center";
import Construction from "./Construction";
import ConstructionFloor from "./ConstructionFloor";
import ConstructionSign from "./ConstructionSign";
import ConstructionObject from "./ConstructionObject";
import Decoration from "./Decoration";
import ConstructionTitle from "./ConstructionTitle";

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
            <ConstructionTitle>Hii</ConstructionTitle>
            <ConstructionFloor>
                <ConstructionObject>
                    <h1>Hii</h1>
                    <p>Lorem ipsum dolor sit amet. I am going insane.</p>
                </ConstructionObject>
                <ConstructionObject>
                    <h1>Hii</h1>
                    <p>Lorem ipsum dolor sit amet. I am going insane.</p>
                </ConstructionObject>
            </ConstructionFloor>
            <ConstructionTitle>Hii</ConstructionTitle>
            <ConstructionFloor>
                <ConstructionObject>
                    <h1>Hii</h1>
                    <p>Lorem ipsum dolor sit amet. I am going insane.</p>
                </ConstructionObject>
                <ConstructionObject>
                    <h1>Hii</h1>
                    <p>Lorem ipsum dolor sit amet. I am going insane.</p>
                </ConstructionObject>
            </ConstructionFloor>
        </Construction>
    </>;
}