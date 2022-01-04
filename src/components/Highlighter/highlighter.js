import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import "./highlighter.css";

export default function Highlighter({ language, theme, children }) {
	return (
		<SyntaxHighlighter
			language={language}
			style={theme}
			className="highlighter">
			{children}
		</SyntaxHighlighter>
	);
}
