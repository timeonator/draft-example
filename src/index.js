import React from 'react';
import ReactDOM from 'react-dom';
import {convertToRaw, EditorState} from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'draft-js/dist/Draft.css';




const MyEditor = () => {
    const [editorState, setEditorState] = React.useState(
      () => EditorState.createEmpty(),
    );
  
    return (
    <>
        {/* <Editor editorState={editorState} onChange={setEditorState} />; */}
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          toolbarClassName="toolbar-class"
          onEditorStateChange={setEditorState}
        />
    </>
    );

}

ReactDOM.render(
  <React.StrictMode>
      <MyEditor />
  </React.StrictMode>,
  document.getElementById('root')
);
