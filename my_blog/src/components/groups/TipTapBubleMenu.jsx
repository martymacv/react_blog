import styles from './TipTapEditorToolbar.module.css'
import { BubbleMenu } from '@tiptap/react/menus'

function TipTapBubleMenu({ editor, editorState }) {
    return (
        <BubbleMenu editor={editor}>
            <div className={`sticky ${styles.toolbar}`}>
                <button
                  onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                  className={editorState.isHeading1 ? 'is-active' : ''}
                >
                  H1
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                  className={editorState.isHeading2 ? 'is-active' : ''}
                >
                  H2
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                  className={editorState.isHeading3 ? 'is-active' : ''}
                >
                  H3
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                  className={editorState.isHeading4 ? 'is-active' : ''}
                >
                  H4
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                  className={editorState.isHeading5 ? 'is-active' : ''}
                >
                  H5
                </button>
                <button
                  onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
                  className={editorState.isHeading6 ? 'is-active' : ''}
                >
                  H6
                </button>
                </div>
        </BubbleMenu>
    )
}

export default TipTapBubleMenu
