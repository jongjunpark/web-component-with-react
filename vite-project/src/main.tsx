import ReactDOM from "react-dom/client";
import React from "react";
import { Provider } from "./Provider";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { Nested } from "./Nested";
import App from "./App";
import Home from "./Home";

export const normalizeAttribute = (attribute: string) => {
  return attribute.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
};

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
        <link rel="stylesheet" href="./build.css" />

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

class HomeComponent extends HTMLElement {
  constructor() {
    super();

    const supportsDeclarative = Object.prototype.hasOwnProperty.call(
      HTMLElement.prototype,
      "attachInternals"
    );
    const internals = supportsDeclarative ? this.attachInternals() : undefined;

    // check for a Declarative Shadow Root.
    let shadow = internals?.shadowRoot;

    if (!shadow) {
      // there wasn't one. create a new Shadow Root:
      shadow = this.attachShadow({
        mode: "open",
      });
    }

    ReactDOM.createRoot(shadow).render(<Home />);
  }
}

class NestedComponent extends HTMLElement {
  connectedCallback() {
    const root = document.createElement("div");
    this.attachShadow({ mode: "open" }).appendChild(root);

    ReactDOM.createRoot(root).render(<Nested />);
  }
}

customElements.define("my-web-component", MyWebComponent);
customElements.define("home-component", HomeComponent);
customElements.define("nested-component", NestedComponent);

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
