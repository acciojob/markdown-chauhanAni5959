import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownEditor() {
  const [markdown, setMarkdown] = useState("# Hello world");
  const [previewText, setPreviewText] = useState("# Hello world");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
      setPreviewText(markdown);
      setLoading(false);
    }, 50);
    return () => clearTimeout(id);
  }, [markdown]);

  return (
    <>
      <textarea
        className="textarea"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder="Write markdown here..."
      />
      <div className="preview">
        {loading ? (
          <div className="loading">Loading preview...</div>
        ) : (
          <ReactMarkdown>{previewText}</ReactMarkdown>
        )}
      </div>
    </>
  );
}

export default MarkdownEditor;
