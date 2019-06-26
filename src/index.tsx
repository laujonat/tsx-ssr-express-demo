import React from "react";
import ReactDOM from "react-dom";
import App from "./app";


declare const window: WindowInterface;

/**
 * We assume the initial render has taken place from the SSR.
 * React expects that the rendered content is identical between the server and the client.
 * It can patch up differences in text content, but you should treat mismatches as bugs and fix them.
 * https://reactjs.org/docs/react-dom.html
 */
const hasWindow = (typeof window !== "undefined") ? true : false;
const data = hasWindow ? window : undefined;
// (initData => {
ReactDOM.hydrate(<App data={data.INITIAL_DATA.data} />, document.getElementById("ssr"));
// })((window as WindowInitData).data);
