import React, { useEffect, useRef } from 'react';
import Editor1 from './Editor1';
import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import { javascript } from '@codemirror/lang-javascript';

const ACTIONS = {
    JOIN: 'join',
    JOINED: 'joined',
    DISCONNECTED: 'disconnected',
    CODE_CHANGE: 'code-change',
    SYNC_CODE: 'sync-code',
    LEAVE: 'leave',
};

const Editor = ({ socketRef, roomId, onCodeChange }) => {
    const editorRef = useRef(null);

    useEffect(() => {
        async function init() {
            editorRef.current = new EditorView({
                state: EditorState.create({
                    doc: '',
                    extensions: [
                        basicSetup,
                        javascript(),
                    ],
                }),
                parent: document.getElementById('realtimeEditor'),
            });

            editorRef.current.on('change', (changes) => {
                const code = editorRef.current.state.doc.toString();
                onCodeChange(code);
                socketRef.current.emit(ACTIONS.CODE_CHANGE, {
                    roomId,
                    code,
                });
            });
        }

        init();
    }, []);

    useEffect(() => {
        if (socketRef.current) {
            socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
                if (code !== null) {
                    editorRef.current.setValue(code);
                }
            });

            // Cleanup function for socket event listener
            return () => {
                socketRef.current.off(ACTIONS.CODE_CHANGE);
            };
        }
    }, [socketRef.current]); // Provide socketRef.current as a dependency

    // return <textarea id="realtimeEditor"></textarea>;
    return <Editor1 id="realtimeEditor" />;
};

export default Editor;
