import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import Prism.js CSS for styling
import 'prismjs/components/prism-python'; // Import Prism.js Python language plugin

const IDECompiler = () => {
  const [language, setLanguage] = useState('python3');
  const [code, setCode] = useState('print("Hello, World!");');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    Prism.highlightAll(); // Initialize Prism.js syntax highlighting on mount
  }, []);

  const textareaStyle = {
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    fontSize: '16px',
    lineHeight: '1.5',
    color: '#333333',
    background: '#f5f2f0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const options = {
      method: 'POST',
      url: 'https://online-code-compiler.p.rapidapi.com/v1/',
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': 'eb4b08fae2mshcbeba7d360358d3p11679ejsn3ebf92525167',
        'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
      },
      data: {
        language,
        version: 'latest',
        code,
        input: input || null
      }
    };

    try {
      const response = await axios.request(options);
      setOutput(response.data.output);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="ide-compiler-container">
      <h2 className="ide-compiler-title">Online Code Compiler</h2>
      <form onSubmit={handleSubmit}>
        <div className="ide-compiler-input">
          <label htmlFor="language">Select Language:</label>
          <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="python3">Python 3</option>
            <option value="python2">Python 2</option>
            <option value="verilog">Verilog</option>
            <option value="vhdl">VHDL</option>
            {/* Add more language options as needed */}
          </select>
        </div>
        <div className="ide-compiler-input">
          <label htmlFor="code">Enter Your Code:</label>
          <textarea
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={10}
            style={textareaStyle}
          ></textarea>
        </div>
        <div className="ide-compiler-input">
          <label htmlFor="input">Input (optional):</label>
          <textarea id="input" value={input} onChange={(e) => setInput(e.target.value)}></textarea>
        </div>
        <button className="ide-compiler-button">Compile</button>
      </form>
      {output && (
        <div className="ide-compiler-output">
          <h3>Output:</h3>
          <pre>{output}</pre>
        </div>
      )}
      {error && (
        <div className="ide-compiler-error">
          <h3>Error:</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};

export default IDECompiler;
