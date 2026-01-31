import Content from "./Center";
import Construction from "./Construction";
import ConstructionFloor from "./ConstructionFloor";
import ConstructionSign from "./ConstructionSign";
import ConstructionObject from "./ConstructionObject";
import Decoration from "./Decoration";
import ConstructionTitle from "./ConstructionTitle";
import Project from "./Project";

export default function App() {
    return <>
        <Decoration src="/clouds.png" w={100} style={{ position: "fixed", opacity: 0.7, zIndex: -1 }} />
        <Content>
            <ConstructionSign>
                <h3>milk_cool's</h3>
                <h1>CONSTRUCTION SITE</h1>
            </ConstructionSign>
        </Content>
        <Decoration src="/rooftop.png" className="rooftop" />
        <Construction>
            <ConstructionTitle>General</ConstructionTitle>
            <ConstructionFloor>
                <Project name="3Draw" links={{
                    "3DS side GitHub": "https://github.com/Milk-Cool/3Draw",
                    "PC side GitHub": "https://github.com/Milk-Cool/3DrawServer"
                }}>
                    <p>An app for Nintendo 3DS and a Python script for desktop for PC control from 3DS</p>
                </Project>
                <Project name="Notebook3DS" links={{
                    "GitHub": "https://github.com/Milk-Cool/Notebook3DS"
                }}>
                    <p>An app for Nintendo 3DS for taking notes</p>
                </Project>
                <Project name="Praylang" links={{
                    "GitHub": "https://github.com/Milk-Cool/PrayThisWorks"
                }}>
                    <p>A programming language that looks like prayers</p>
                </Project>
            </ConstructionFloor>
            <ConstructionFloor>
                <Project name="CheburChat" links={{
                    "GitHub": "https://github.com/Milk-Cool/CheburChat"
                }}>
                    <p>An offline ESP-based chat</p>
                </Project>
                <Project name="2060" links={{
                    "GitHub": "https://github.com/Milk-Cool/2060",
                    "Website": "https://2060.milkcool.ru/"
                }}>
                    <p>A 2048-like game that resets every minute</p>
                </Project>
                <Project name="Neocities8831" links={{
                    "GitHub": "https://github.com/Milk-Cool/Neocities8831",
                    "Website (inactive)": "https://neo8831.milkcool.ru/"
                }}>
                    <p>A Neocities scanner that scans for 88x31 web buttons</p>
                </Project>
            </ConstructionFloor>
            <Decoration src="/birds.png" w={100} style={{ position: "absolute", left: 0, zIndex: -1 }} />
            <ConstructionFloor>
                <Project name="PC64K" links={{
                    "GitHub": "https://github.com/PC64K",
                    "Demo": "https://pc64k-demo.milkcool.ru/"
                }}>
                    <p>An 8-bit fantasy PC with 64KB of RAM, its own CPU architecture and an assembly-like language</p>
                </Project>
                <Project name="imp" links={{
                    "GitHub (server)": "https://github.com/Milk-Cool/imp",
                    "GitHub (ESP)": "https://github.com/Milk-Cool/imp-esp"
                }}>
                    <p>A messaging protocol/architecture, designed to work with any transport.</p>
                </Project>
                <Project name="Neura" links={{
                    "Website": "https://neura.milkcool.ru/"
                }}>
                    <p>A brand new AI startup :troll:</p>
                </Project>
            </ConstructionFloor>
            <ConstructionFloor>
                <Project name="Bluesky life sim" links={{
                    "GitHub": "https://github.com/Milk-Cool/BskyLifeSim",
                    "Bluesky": "https://bsky.app/profile/did:plc:l5ootjcieq2ba5pas62w2i7b"
                }}>
                    <p>A non-interactive life sim, similar to and using assets from Tomodachi Life</p>
                </Project>
                <Project name="overflow" links={{
                    "GitHub": "https://github.com/Milk-Cool/overflow",
                    "NPM": "https://www.npmjs.com/package/overflow-scanner"
                }}>
                    <p>A node graph-based vulnerability "scanner" that combines multiple pentesting tools</p>
                </Project>
            </ConstructionFloor>
            <ConstructionFloor>
                <Project name="QRBattles" links={{
                    "GitHub": "https://github.com/Milk-Cool/QRBattles"
                }}>
                    <p>A QR-based card game</p>
                </Project>
                <Project name="Sprig CHIP8" links={{
                    "GitHub": "https://github.com/Milk-Cool/Sprig-CHIP-8",
                    "Play": "https://sprig.hackclub.com/~/gjnlxzeouaClbx2JK25"
                }}>
                    <p>A CHIP-8 emulator for HackClub's sprig</p>
                </Project>
            </ConstructionFloor>
            <ConstructionFloor>
                <Project name="sniff" links={{
                    "GitHub (server)": "https://github.com/Milk-Cool/sniff-server",
                    "GitHub (ESP32)": "https://github.com/Milk-Cool/sniff-esp32",
                    "UI Demo": "https://sniff-demo.milkcool.ru/"
                }}>
                    <p>An ESP32-based WiFi sniffer designed for monitoring the amount of people in an area</p>
                </Project>
                <Project name="AqUTAU" links={{
                    "GitHub (Website)": "https://github.com/Milk-Cool/AqUTAUWeb",
                    "GitHub (NPM nodule)": "https://github.com/Milk-Cool/AqUTAU",
                    "NPM": "https://www.npmjs.com/package/aqutau",
                    "Demo": "https://aqutau.milkcool.ru",
                }}>
                    <p>An AquesTalk-based UTAU voicebank generator</p>
                </Project>
            </ConstructionFloor>
            <ConstructionTitle>Letovo</ConstructionTitle>
            <ConstructionFloor>
                <Project name="LetovoPing" links={{
                    "GitHub": "https://github.com/Milk-Cool/LetovoPing",
                    "Telegram": "https://t.me/letovo_ping_bot"
                }}>
                    <p>A Telegram bot for checking Letovo online services status</p>
                </Project>
                <Project name="LetovoInoagents" links={{
                    "GitHub": "https://github.com/Milk-Cool/PretendoLookup",
                    "Website": "https://letoagent.milkcool.ru"
                }}>
                    <p>A joke website that has information on people that Letovo doesn't like</p>
                </Project>
                <Project name="LetovoArchive" links={{
                    "GitHub": "https://github.com/LetovoArchive",
                    "Website": "https://archive.milkcool.ru/"
                }}>
                    <p>An archive for public letovo resources</p>
                </Project>
            </ConstructionFloor>
            <ConstructionTitle>Pretendo</ConstructionTitle>
            <ConstructionFloor>
                <Project name="Pinder" links={{
                    "GitHub": "https://github.com/Milk-Cool/Pinder",
                    "Website": "https://pinder.pretendo.zip/"
                }}>
                    <p>A Tinder-like app for finding friends on Pretendo</p>
                </Project>
                <Project name="PretendoLookup" links={{
                    "GitHub": "https://github.com/Milk-Cool/PretendoLookup",
                    "Website": "https://lookup.pretendo.zip/"
                }}>
                    <p>A website for archiving Juxt posts</p>
                </Project>
                <Project name="PretendoStatus" links={{
                    "GitHub": "https://github.com/Milk-Cool/PretendoStatus",
                    "Website": "https://status.pretendo.zip/"
                }}>
                    <p>A status page for Pretendo</p>
                </Project>
            </ConstructionFloor>
        </Construction>
        <div id="crane" style={{ position: "relative" }}><Decoration src="/crane.png" style={{ position: "absolute", bottom: 0, zIndex: -1, transform: `translateX(-20vw)`, maxWidth: "100vw" }} /></div>
    </>;
}