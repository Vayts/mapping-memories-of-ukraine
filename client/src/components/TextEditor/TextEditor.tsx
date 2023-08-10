import React, { useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';
import styles from './TextEditor.module.scss';

const TextEditor: React.FC = () => {
  const [editorState, setEditorState] = React.useState(
    () => EditorState.createEmpty(),
  );

  return (
    <>
      <Editor
        editorState={editorState}
        editorClassName={styles.editor}
        toolbar={{
          options: ['inline', 'blockType', 'list', 'textAlign', 'link'],
          blockType: {
            inDropdown: false,
            options: ['Normal', 'H1', 'H2', 'Blockquote'],
            className: styles.editor__button,
          },
        }}
        onEditorStateChange={setEditorState}
      />
      {/*<div dangerouslySetInnerHTML={{ __html: value }} />*/}
    </>
  );
};

export default TextEditor;
