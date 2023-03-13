import { RichTextEditor } from "@mantine/tiptap";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { lowlight } from "lowlight";
import { Fira_Code } from "next/font/google";
const fira = Fira_Code({ subsets: ["latin"] });
import tsLanguageSyntax from "highlight.js/lib/languages/typescript";
import { rem } from "@mantine/core";

lowlight.registerLanguage("ts", tsLanguageSyntax);

function escapeHtml(unsafe: string) {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

interface Icode {
  codeers: string;
}

export default function Editor({ codeers }: Icode) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: `<pre><code>${codeers}</code></pre>`,
  });

  return (
    <RichTextEditor
      editor={editor}
      h={"80.8vh"}
      w={"100%"}
      miw={200}
      styles={(theme) => ({
        root:{
          border: `${rem(1)} solid #1E2D3D`,
        },
        content: {
          background: "#011627",
          pre: {
            background: "#011627",
            fontFamily: fira.className,
            color:
              theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[9],

            padding: `${theme.spacing.md}px ${theme.spacing.xl}px`,

            "& code": {
              background: "none",
              color: "inherit",
              fontSize: "10px",
              padding: 0,
            },

            " & .hljs-comment, & .hljs-quote": {
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[2]
                  : theme.colors.gray[5],
            },

            "& .hljs-variable, & .hljs-template-variable, & .hljs-attribute, & .hljs-tag, & .hljs-name, & .hljs-regexp, & .hljs-link, & .hljs-name, & .hljs-selector-id, & .hljs-selector-class":
              {
                color: theme.colors.red[5],
              },

            "& .hljs-number, & .hljs-meta, & .hljs-built_in, & .hljs-builtin-name, & .hljs-literal, & .hljs-type, & .hljs-params":
              {
                color: "lime",
              },

            "& .hljs-string, & .hljs-symbol, & .hljs-bullet": {
              color: theme.colors.orange[5],
            },

            "& .hljs-title, & .hljs-section": {
              color:
                theme.colors[theme.colorScheme === "dark" ? "lime" : "red"][5],
            },

            "& .hljs-keyword, & .hljs-selector-tag": {
              color: theme.colors.indigo[5],
            },

            "& .hljs-emphasis": {
              fontStyle: "italic",
            },

            "& .hljs-strong": {
              fontWeight: 700,
            },
          },
        },
      })}
    >
      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
