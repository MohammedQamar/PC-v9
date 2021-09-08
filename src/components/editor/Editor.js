import React, { useState } from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { Controlled as ControlledEditor } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/ayu-dark.css";

function Editor(props) {
  const CodeMirror = dynamic(
    () => {
      import("codemirror/mode/xml/xml");
      import("codemirror/mode/javascript/javascript");
      import("codemirror/mode/css/css");
      import("codemirror/theme/material.css");
      return import("react-codemirror2");
    },
    { ssr: false }
  );

  const { language, displayName, value, onChange } = props;

  //   const [open, setOpen] = useState(true);

  function handleChange(editor, data, value) {
    onChange(value);
  }

  return (
    <EditorWrapper className="editor-container">
      <div className="editor-title">{displayName}</div>

      {
        <ControlledEditor
          onBeforeChange={handleChange}
          value={value}
          className="code-mirror-wrapper"
          options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            lineNumbers: true,
            theme: "ayu-dark",
          }}
        />
      }
    </EditorWrapper>
  );
}

const EditorWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  padding-bottom: 1rem;
  flex-direction: column;
  padding: 0.5rem;
  background-color: hsl(225, 6%, 25%);
  /* background-color: var(--primary-bcg); */

  .editor-title {
    display: flex;
    justify-content: flex-start;
    padding: 0.5rem;
  }

  .CodeMirror {
    height: 100% !important;
    font-size: 0.9rem;
  }

  .code-mirror-wrapper {
    flex-grow: 1;
    border-radius: 0.5rem;
    overflow: hidden;
  }
`;

export default Editor;
