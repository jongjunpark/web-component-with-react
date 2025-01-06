import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import { Provider } from "./Provider";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

class MyWebComponent extends HTMLElement {
  connectedCallback() {
    const root = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(root);
    const cache = createCache({
      key: "css",
      prepend: true,
      container: root,
    });

    ReactDOM.createRoot(root).render(
      <>
        <head>
          <link rel="stylesheet" href="./build.css" />
        </head>

        <React.StrictMode>
          <CacheProvider value={cache}>
            <Provider>
              <App />
            </Provider>
          </CacheProvider>
        </React.StrictMode>
      </>
    );
  }
}

customElements.define("my-web-component", MyWebComponent);

// ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
