import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Split from "react-split";
import Editor from "./Editor";

function HEditor() {
  const [html, setHTML] = useState("<h1>Hello there, what are you doing?</h1>");
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

// const Split = styled.Split`
//   .pane {
//     height: 50vh;
//     display: flex;
//     background-color: white;
//   }
//   .gutter {
//     background-color: #eee;
//     background-repeat: no-repeat;
//     background-position: 50%;
//   }

//   .gutter.gutter-vertical {
//     background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAFAQMAAABo7865AAAABlBMVEVHcEzMzMzyAv2sAAAAAXRSTlMAQObYZgAAABBJREFUeF5jOAMEEAIEEFwAn3kMwcB6I2AAAAAASUVORK5CYII=");
//     cursor: row-resize;
//   }
// `;

export default HEditor;
