import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeHighlight from "rehype-highlight";

export default function MarkdownReader() {
  const { type, file } = useParams();
  const [content, setContent] = useState("Loading...");

  useEffect(() => {
    async function loadMarkdown() {
      try {
        const response = await fetch(`/markdown/${type}/${file}.md`);

        if (!response.ok) {
          setContent("404 - Post not found.");
          return;
        }

        const text = await response.text();
        setContent(text);

      } catch {
        setContent("Error loading content.");
      }
    }

    loadMarkdown();
  }, [type, file]);

  return (
    <div className="prose bg-base-200 p-4 md:p-8">
      <ReactMarkdown
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeHighlight, rehypeKatex]}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
