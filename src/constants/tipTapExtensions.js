import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'

export const extensions = [StarterKit.configure({
    heading: {
        levels: [1, 2, 3],
        HTMLAttributes: {
            class: "heading-custom"
        }
    },
    paragraph: {
        HTMLAttributes: {
            class: "paragraph-custom"
        }
    },
    code: {
        HTMLAttributes: {
            class: "inline-code-custom",
        }
    },
    codeBlock: {
        HTMLAttributes: {
            class: "block-code-custom"
        }
    },
    blockquote: {
        HTMLAttributes: {
            class: "blockquote-custom"
        }
    },
    bulletList: {
      HTMLAttributes: {
        class: "bullet-list-custom"
      }
    },
    orderedList: {
      HTMLAttributes: {
        class: "ordered-list-custom"
      }
    },
    listItem: {
      HTMLAttributes: {
        class: "list-item-custom"
      }
    }
}), Image]