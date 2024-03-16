import React, { useEffect, useRef } from 'react';
import Editor1 from './Editor1';
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
            // editorRef.current = Codemirror.fromTextArea(
            //     document.getElementById('realtimeEditor'),
            //     {
            //         extension: [javascript({ jsx: true })],
            //         theme: 'abcdef',
            //         autoCloseTags: true,
            //         autoCloseBrackets: true,
            //         lineNumbers: true,
            //     }
            // );

            editorRef.current.on('change', (instance, changes) => {
                const { origin } = changes;
                const code = instance.getValue();
                onCodeChange(code);
                if (origin !== 'setValue') {
                    socketRef.current.emit(ACTIONS.CODE_CHANGE, {
                        roomId,
                        code,
                    });
                }
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
        }

        return () => {
            socketRef.current.off(ACTIONS.CODE_CHANGE);
        };
    }, [socketRef.current]);

    // return <textarea id="realtimeEditor"></textarea>;
    return <Editor1 id="realtimeEditor"/>
};

export default Editor;
