import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./components/App";

ReactDOM.createRoot(document.querySelector("#root") as HTMLDivElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);