
const summarizeTypeMap = {
    "headline": "Headline",
    "teaser": "Teaser",
    "key-points": "Key Points",
    "tl;dr": "TLDR"
}
const summarizeLengthMap = {
    "short": "Short",
    "medium": "Medium",
    "long": "Long"
}
const summarizeFormatMap = {
    "plain-text": "Plain Text",
    "markdown": "Markdown"
}

function translatePageInit() {

    const detectLanguageDropdown = document.getElementById("detectLanguageDropdown");
    const targetLanguageDropdown = document.getElementById("targetLanguageDropdown");

    for (const [subtag, languageName] of Object.entries(detectLanguageMap)) {

        let listItem = document.createElement("li");
        listItem.innerHTML = languageName;
        listItem.classList = "dropdown-item curserPointer";
        listItem.setAttribute("onclick", "setLanguage('" + subtag + "','" + languageName + "','detect');");

        detectLanguageDropdown.appendChild(listItem);

    }

    for (const [subtag, languageName] of Object.entries(targetLanguageMap)) {

        let listItem = document.createElement("li");
        listItem.innerHTML = languageName;
        listItem.classList = "dropdown-item curserPointer";
        listItem.setAttribute("onclick", "setLanguage('" + subtag + "','" + languageName + "','target');");

        targetLanguageDropdown.appendChild(listItem);

    }
}
function summerizePageInit() {

    const summarizeTypeDropdown = document.getElementById("summarizeTypeDropdown");
    const summarizeFormatDropdown = document.getElementById("summarizeFormatDropdown");
    const summarizeLengthDropdown = document.getElementById("summarizeLengthDropdown");

    for (const [id, type] of Object.entries(summarizeTypeMap)) {

        let listItem = document.createElement("li");
        listItem.innerHTML = type;
        listItem.classList = "dropdown-item curserPointer";
        listItem.setAttribute("onclick", "setSummarizeType('" + id + "','" + type + "');");

        summarizeTypeDropdown.appendChild(listItem);

    }
    for (const [id, format] of Object.entries(summarizeFormatMap)) {

        let listItem = document.createElement("li");
        listItem.innerHTML = format;
        listItem.classList = "dropdown-item curserPointer";
        listItem.setAttribute("onclick", "setSummarizeFormat('" + id + "','" + format + "');");

        summarizeFormatDropdown.appendChild(listItem);

    }
    for (const [id, length] of Object.entries(summarizeLengthMap)) {

        let listItem = document.createElement("li");
        listItem.innerHTML = length;
        listItem.classList = "dropdown-item curserPointer";
        listItem.setAttribute("onclick", "setSummarizeLength('" + id + "','" + length + "');");

        summarizeLengthDropdown.appendChild(listItem);

    }

}
function setLanguage(subtag, languageName, component) {

    let span = document.createElement("span");
    span.setAttribute("name", subtag);
    span.innerHTML = languageName + " ";


    if (component == "detect") {
        span.id = "detectSpan";
        document.getElementById("autoDetectBtn").innerHTML = "";
        document.getElementById("autoDetectBtn").appendChild(span);
    } else {
        span.id = "targetSpan";
        document.getElementById("targetBtn").innerHTML = "";
        document.getElementById("targetBtn").appendChild(span);
    }

    aiTranslate();

}
function setSummarizeType(id, type) {

    let span = document.createElement("span");
    span.setAttribute("name", id);
    span.innerHTML = type + " ";

    span.id = "summarizeTypeSpan";
    document.getElementById("summarizeTypeBtn").innerHTML = "";
    document.getElementById("summarizeTypeBtn").appendChild(span);

}
function setSummarizeFormat(id, format) {

    let span = document.createElement("span");
    span.setAttribute("name", id);
    span.innerHTML = format + " ";

    span.id = "summarizeFormatSpan";
    document.getElementById("summarizeFormatBtn").innerHTML = "";
    document.getElementById("summarizeFormatBtn").appendChild(span);

}
function setSummarizeLength(id, length) {

    let span = document.createElement("span");
    span.setAttribute("name", id);
    span.innerHTML = length + " ";

    span.id = "summarizeLengthSpan";
    document.getElementById("summarizeLengthBtn").innerHTML = "";
    document.getElementById("summarizeLengthBtn").appendChild(span);

}

async function loadDesign(name) {

    try {
        let response;

        if (name == "translator") {

            response = await fetch("translate.html");

        } else if (name == "summarizer") {

            response = await fetch("summarizer.html");

        } else if (name == "chat") {

            response = await fetch("chat.html");

        } else if (name = "writer") {
            response = await fetch("writer.html");
        }

        console.log(name);

        if (response.ok) {
            let html = await response.text();

            if (html !== "") {
                let container = document.getElementById("containerDiv");
                container.innerHTML = "";
                container.innerHTML = html;

                if (name == "translator") {
                    translatePageInit();

                } else if (name == "summarizer") {
                    summerizePageInit();

                } else if (name == "chat") {
                    chatPageInit();
                }

            }
        } else {
            console.error("Failed to load translate.html:", response.status, response.statusText);
        }
    } catch (error) {
        console.error("Error loading translate.html:", error);
    }

}

