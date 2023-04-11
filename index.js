import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./src/App"

const el = document.getElementById('root');
const root = ReactDOMClient.createRoot(el);
// reactDom.render(<App debug={el.getAttribute('data-debug')} />, el);
root.render(<App debug={el.getAttribute('data-debug')} />);
