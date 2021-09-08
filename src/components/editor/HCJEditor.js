import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Split from "react-split";
import Editor from "./Editor";

function HCJEditor() {
  const [html, setHTML] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>`);
    }, 250);
    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Split className="split" direction="vertical">
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHTML}
        />

        <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />

        <Editor
          language="javascript"
          displayName="JavaScript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </Split>
  );
}

// const APP = styled.div`
//   .pane {
//     height: 50vh;
//     display: flex;
//     background-color: white;
//   }
// `;

export default HCJEditor;
