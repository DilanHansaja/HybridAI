<body style="font-family: Arial, sans-serif; line-height: 1.6; margin: 20px; background-color: #f9f9f9; color: #333;">
    <h1 style="color: #2c3e50; text-align: center;">HybridAI</h1>
    <p>HybridAI is a web-based project that integrates multiple AI tools to 
      provide features like AI chat, language translation, summarization, and more. 
      It demonstrates the practical applications of AI in daily life using user friendly interfaces.
    </p>
    <h2 style="color: #34495e; border-bottom: 2px solid #ddd; padding-bottom: 5px;">Table of Contents</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><a href="#overview" style="color: #2980b9; text-decoration: none;">Overview</a></li>
        <li><a href="#features" style="color: #2980b9; text-decoration: none;">Features</a></li>
        <li><a href="#technologies-used" style="color: #2980b9; text-decoration: none;">Technologies Used</a></li>
        <li><a href="#installation" style="color: #2980b9; text-decoration: none;">Installation</a></li>
        <li><a href="#usage" style="color: #2980b9; text-decoration: none;">Usage</a></li>
        <li><a href="#license" style="color: #2980b9; text-decoration: none;">License</a></li>
    </ul>
    <h2 id="overview" style="color: #34495e; border-bottom: 2px solid #ddd; padding-bottom: 5px;">Overview</h2>
    <p>This project is designed for the Google Chrome Built-in AI Challenge. HybridAI combines natural language processing and AI functionalities to enhance productivity and accessibility.</p>
    <h2 id="features" style="color: #34495e; border-bottom: 2px solid #ddd; padding-bottom: 5px;">Features</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>AI Chat:</strong> Engage in conversations with an AI-powered chatbot.</li>
        <li><strong>Summarization Tool:</strong> Simplify lengthy texts into concise summaries.</li>
        <li><strong>Language Translation:</strong> Translate between multiple languages.</li>
    </ul>
    <h2 id="technologies-used" style="color: #34495e; border-bottom: 2px solid #ddd; padding-bottom: 5px;">Technologies Used</h2>
    <ul style="list-style-type: disc; margin-left: 20px;">
        <li><strong>Frontend:</strong> HTML, CSS, JavaScript</li>
        <li><strong>Libraries:</strong> Bootstrap for styling</li>
        <li><strong>AI APIs:</strong> Integrated APIs for NLP functionalities</li>
    </ul>
    <h2 id="installation" style="color: #34495e; border-bottom: 2px solid #ddd; padding-bottom: 5px;">Installation</h2>
    <ol style="margin-left: 20px;">
        <li>Clone the repository:
            <pre style="background: #f4f4f4; padding: 10px; border: 1px solid #ddd; border-radius: 5px; overflow-x: auto;"><code>git clone https://github.com/DilanHansaja/HybridAi.git</code></pre>
        </li>
        <li>Navigate to the project folder:
            <pre style="background: #f4f4f4; padding: 10px; border: 1px solid #ddd; border-radius: 5px; overflow-x: auto;"><code>cd HybridAi</code></pre>
        </li>
        <li>Open <code>index.html</code> in a web browser to launch the app.</li>
    </ol>
<div style="font-family: Arial, sans-serif; margin: 20px;">
    <h2 style="color: #2980b9; font-size: 1.6em; margin-bottom: 10px;">New Feature: Paste Text from Clipboard</h2>
    <p style="font-size: 1.1em; line-height: 1.5; margin-bottom: 10px;">
        This feature enables users to paste clipboard content into a text area with the click of a button.
    </p>
    <h3 style="font-size: 1.2em; color: #34495e;">How It Works:</h3>
    <ul style="font-size: 1.1em; margin-bottom: 10px;">
        <li>Copy any text to your clipboard.</li>
        <li>Click the 📋 <strong>Paste</strong> button in the app.</li>
        <li>The text is pasted directly into the text area using the Clipboard API.</li>
    </ul>
    <h3 style="font-size: 1.2em; color: #34495e;">Code Snippet:</h3>
    <pre style="background-color: #f4f4f4; padding: 10px; border: 1px solid #ccc; font-family: Courier, monospace; font-size: 1em; margin-bottom: 20px;">
        <code>
document.getElementById('pasteButton').addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        document.getElementById('textArea').value = text;
    } catch (err) {
        alert('Failed to paste text: ' + err);
    }
});
        </code>
    </pre>
    <p style="font-size: 1.1em; line-height: 1.5;">
        Ensure clipboard permissions are enabled and run on a secure (HTTPS) environment.
    </p>
</div>
    <h2 id="usage" style="color: #34495e; border-bottom: 2px solid #ddd; padding-bottom: 5px;">Usage</h2>
    <p>Open the respective HTML files (<code>chat.html</code>, <code>summarizer.html</code>, <code>translate.html</code>) for different features. Interact with the tools to explore AI-driven functionalities.</p>
    <h2 id="license" style="color: #34495e; border-bottom: 2px solid #ddd; padding-bottom: 5px;">License</h2>
    <p>This project is licensed under the <a href="LICENSE" style="color: #2980b9; text-decoration: none;">Unlicense</a>, making it free for public use.</p>
</body>
