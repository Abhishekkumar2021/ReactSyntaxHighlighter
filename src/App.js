import "./App.css";
import React, { useState } from "react";
import Dropdown from "./components/Dropdown/dropdown";
import Editor from "./components/Editor/editor";
import Highlighter from "./components/Highlighter/highlighter";
import * as themes from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as languages from "react-syntax-highlighter/dist/esm/languages/hljs";
function App() {
	const [input, setInput] = useState("");
	const [theme, setTheme] = useState("");
	const [language, setLanguage] = useState("");

	return (
		<div className="App">
			<nav>
				<Dropdown
					onChange={(event) => setTheme(event.target.value)}
					data={themes}
				/>
				<Dropdown
					onChange={(event) => setLanguage(event.target.value)}
					data={languages}
				/>
			</nav>
			<div className="Boxes">
				<Editor
					placeHolder="Type your code here..."
					onChange={(event) => setInput(event.target.value)}
				/>

				<Highlighter language={language} theme={themes[theme]}>
					{input}
				</Highlighter>
				<div className="orange ball"></div>
				<div className="red ball"></div>
				<div className="green ball"></div>
			</div>
		</div>
	);
}

export default App;
