var userTextArea = "";
var detectSpan = "";
var translationArea = "";

var detectLanguage = ""
var selectedLanguage = ""

// const detectLanguageMap = {
//   "af": "Afrikaans",
//   "ca": "Catalan",
//   "eo": "Esperanto",
//   "gd": "Scottish Gaelic",
//   "hu": "Hungarian",
//   "ka": "Georgian",
//   "lt": "Lithuanian",
//   "my": "Burmese",
//   "ru": "Russian",
//   "sr": "Serbian",
//   "uk": "Ukrainian",
//   "am": "Amharic",
//   "ceb": "Cebuano",
//   "es": "Spanish",
//   "gl": "Galician",
//   "hy": "Armenian",
//   "kk": "Kazakh",
//   "lv": "Latvian",
//   "ne": "Nepali",
//   "ru-Latn": "Russian (Latin)",
//   "st": "Sesotho",
//   "ur": "Urdu",
//   "ar": "Arabic",
//   "co": "Corsican",
//   "et": "Estonian",
//   "gu": "Gujarati",
//   "id": "Indonesian",
//   "km": "Khmer",
//   "mg": "Malagasy",
//   "nl": "Dutch",
//   "sd": "Sindhi",
//   "su": "Sundanese",
//   "uz": "Uzbek",
//   "ar-Latn": "Arabic (Latin)",
//   "cs": "Czech",
//   "eu": "Basque",
//   "ha": "Hausa",
//   "ig": "Igbo",
//   "kn": "Kannada",
//   "mi": "Māori",
//   "no": "Norwegian",
//   "si": "Sinhalese",
//   "sv": "Swedish",
//   "vi": "Vietnamese",
//   "az": "Azerbaijani",
//   "cy": "Welsh",
//   "fa": "Persian",
//   "haw": "Hawaiian",
//   "is": "Icelandic",
//   "ko": "Korean",
//   "mk": "Macedonian",
//   "ny": "Chichewa",
//   "sk": "Slovak",
//   "sw": "Swahili",
//   "xh": "Xhosa",
//   "be": "Belarusian",
//   "da": "Danish",
//   "fi": "Finnish",
//   "hi": "Hindi",
//   "it": "Italian",
//   "ku": "Kurdish",
//   "ml": "Malayalam",
//   "pa": "Punjabi",
//   "sl": "Slovenian",
//   "ta": "Tamil",
//   "yi": "Yiddish",
//   "bg": "Bulgarian",
//   "de": "German",
//   "fil": "Filipino",
//   "hi-Latn": "Hindi (Latin)",
//   "iw": "Hebrew",
//   "ky": "Kyrgyz",
//   "mn": "Mongolian",
//   "pl": "Polish",
//   "sm": "Samoan",
//   "te": "Telugu",
//   "yo": "Yoruba",
//   "bg-Latn": "Bulgarian (Latin)",
//   "el": "Greek",
//   "fr": "French",
//   "hmn": "Hmong",
//   "ja": "Japanese",
//   "la": "Latin",
//   "mr": "Marathi",
//   "ps": "Pashto",
//   "sn": "Shona",
//   "tg": "Tajik",
//   "zh": "Chinese",
//   "bn": "Bengali",
//   "el-Latn": "Greek (Latin)",
//   "fy": "Frisian",
//   "hr": "Croatian",
//   "ja-Latn": "Japanese (Latin)",
//   "lb": "Luxembourgish",
//   "ms": "Malay",
//   "pt": "Portuguese",
//   "so": "Somali",
//   "th": "Thai",
//   "zh-Latn": "Chinese (Latin)",
//   "bs": "Bosnian",
//   "en": "English",
//   "ga": "Irish",
//   "ht": "Haitian Creole",
//   "jv": "Javanese",
//   "lo": "Lao",
//   "mt": "Maltese",
//   "ro": "Romanian",
//   "sq": "Albanian",
//   "tr": "Turkish",
//   "zu": "Zulu",
// };
const detectLanguageMap = {
  "ar": "Arabic",
  "bn": "Bengali",
  "de": "German",
  "en": "English",
  "es": "Spanish",
  "fr": "French",
  "hi": "Hindi",
  "it": "Italian",
  "ja": "Japanese",
  "ko": "Korean",
  "nl": "Dutch",
  "pl": "Polish",
  "pt": "Portuguese",
  "ru": "Russian",
  "th": "Thai",
  "tr": "Turkish",
  "vi": "Vietnamese",
  "zh": "Chinese",
  "zh-Hant": "Traditional Chinese"
};

const targetLanguageMap = {
  "ar": "Arabic",
  "bn": "Bengali",
  "de": "German",
  "en": "English",
  "es": "Spanish",
  "fr": "French",
  "hi": "Hindi",
  "it": "Italian",
  "ja": "Japanese",
  "ko": "Korean",
  "nl": "Dutch",
  "pl": "Polish",
  "pt": "Portuguese",
  "ru": "Russian",
  "th": "Thai",
  "tr": "Turkish",
  "vi": "Vietnamese",
  "zh": "Chinese",
  "zh-Hant": "Traditional Chinese"
};

async function aiTranslate() {

  userTextArea = document.querySelector("#userTextArea");
  detectSpan = document.getElementById("detectSpan");
  translationArea = document.getElementById("translationArea");

  let userText = userTextArea.value;

  if (userText.length != 0) {

    detectLanguage = await aiDetect();

    if (detectLanguage in detectLanguageMap) {

      setLanguage2(detectLanguage);

      selectedLanguage = document.getElementById("targetSpan").getAttribute("name");

      const languagePair = {
        sourceLanguage: detectLanguage,
        targetLanguage: selectedLanguage,
      };

      const canTranslate = await translation.canTranslate(languagePair);
      let translator;

      if (canTranslate !== 'no') {

        if (canTranslate === 'readily') {

          translator = await translation.createTranslator(languagePair);
          console.log("ready");

          let translatedText = await translator.translate(userText);

          translationArea.innerHTML = translatedText;
          console.log(translatedText);

        }

      } else {
        translationArea.innerHTML = "Please check the selected Language";
      }

    } else {
      setLanguage2("unsupported");
    }

  } else {
    translationArea.innerHTML = "";
    setLanguage2(detectSpan.getAttribute("name"));

  }

}

async function aiDetect() {

  const canDetect = await translation.canDetect();
  let detector;
  let userText = userTextArea.value;

  if (detectSpan.getAttribute("name") == "detect") {

    if (userText.length != 0) {

      if (canDetect !== 'no') {

        if (canDetect === 'readily') {

          detector = await translation.createDetector();

          const results = await detector.detect(userText);

          const mostLikelyLanguage = results.reduce((max, result) =>
            result.confidence > max.confidence ? result : max
          );

          let language = mostLikelyLanguage.detectedLanguage;

          return language;

        } else {
          // The language detector can be used after the model download.
          detector = await translation.createDetector();
          detector.addEventListener('downloadprogress', (e) => {
            console.log(e.loaded, e.total);
          });
          await detector.ready;
        }
      } else {
        // The language detector can't be used at all.
      }

    }
  } else {
    return detectSpan.getAttribute("name");
  }

}

function setLanguage2(subtag) {

  let language = "Detect Language";

  if (subtag != "detect") {

    if (subtag == "unsupported") {
      language = "Unsupported Language - Detected";

    } else {
      language = detectLanguageMap[subtag];
    }

  }

  let span = document.createElement("span");
  span.setAttribute("name", subtag);

  span.innerHTML = language + " ";
  span.id = "detectSpan";

  document.getElementById("autoDetectBtn").innerHTML = "";
  document.getElementById("autoDetectBtn").appendChild(span);

}

async function aiSummarize() {

  const someUserText = document.getElementById("summarizePromptArea").value;

  const canSummarize = await ai.summarizer.capabilities();
  let summarizer;

  if (canSummarize && canSummarize.available !== 'no') {
    if (canSummarize.available === 'readily') {

      if (someUserText.length !== 0) {

        let type = document.getElementById("summarizeTypeSpan").getAttribute("name");
        let format = document.getElementById("summarizeFormatSpan").getAttribute("name");
        let length = document.getElementById("summarizeLengthSpan").getAttribute("name");

        summarizer = await ai.summarizer.create(
          {
            type: type,
            format: format,
            length: length
          }
        );

        document.getElementById("summarizeResultArea").innerHTML = "Working on your request...";

        const result = await summarizer.summarize(someUserText);
        document.getElementById("summarizeResultArea").innerHTML = result;

        summarizer.destroy();



      } else {
        alert("Enter something to summarize");
      }


    } else {
      // The summarizer can be used after the model download.
      summarizer = await ai.summarizer.create();
      summarizer.addEventListener('downloadprogress', (e) => {
        console.log(e.loaded, e.total);
      });
      await summarizer.ready;
    }
  } else {
    // The summarizer can't be used at all.
  }

}

var divId = 0;

async function prompt() {

  divId = divId + 1;

  const promptMainDiv = document.getElementById("promptMainDiv");
  const promptInput = document.getElementById("promptInput").value;

  var inputdiv_1 = document.createElement("div");
  inputdiv_1.classList.add("row", "g-2", "mb-2", "justify-content-end");

  var inputdiv_2 = document.createElement("div");
  inputdiv_2.classList.add("py-2", "px-3", "rounded-2", "color", "text-end");
  inputdiv_2.style.cssText = "background-color: #2A2A2A; width: auto; max-width: 400px;";
  inputdiv_2.innerHTML = promptInput;

  inputdiv_1.appendChild(inputdiv_2);
  promptMainDiv.append(inputdiv_1);

  document.getElementById("promptInput").value = "";

  const { available, defaultTemperature, defaultTopK, maxTopK } = await ai.languageModel.capabilities();

  if (available !== "no") {
    const session = await ai.languageModel.create();

    // Prompt the model and stream the result:
    const stream = session.promptStreaming(promptInput);

    var subdiv_1 = document.createElement("div");
    subdiv_1.classList.add("row", "g-2", "mb-2");

    var subdiv_2 = document.createElement("div");
    subdiv_2.classList.add("py-2", "px-3", "rounded-2", "color", "text-start");
    subdiv_2.id = "subDIv2" + divId;
    subdiv_2.style.cssText = "background-color: #2A2A2A; width: auto; max-width: 400px;";

    subdiv_1.append(subdiv_2);

    promptMainDiv.append(subdiv_1);

    let result = '';
    let previousChunk = '';
    let index = 0;

    for await (const chunk of stream) {

      const newChunk = chunk.startsWith(previousChunk)
        ? chunk.slice(previousChunk.length) : chunk;


      const appendLetter = () => {
        if (index < result.length) {
          document.getElementById("subDIv2" + divId).textContent += result[index];
          index++;
        } else {
          clearInterval(timer);
        }
      }
      const timer = setInterval(appendLetter, 100);

      // document.getElementById(divId).append(newChunk);

      result += newChunk;
      previousChunk = chunk;
    }


  }

}

function chatPageInit() {
  document.getElementById("promptInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      prompt();
      event.preventDefault();
    }
  });
}

function copyFromDiv(divId) {

  const textToCopy = document.getElementById(divId).value;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert('Text successfully copied to clipboard!'))
      .catch(err => {
        console.error('Clipboard API failed:', err);
        alert('Failed to copy text. Trying fallback...');

      });
  }
}

function clearPrompt(id) {

  document.getElementById(id).value = "";

}

function pasteText(id, btn) {

  let pasteButton = document.getElementById(btn);
  let textArea = document.getElementById(id);

  pasteButton.addEventListener('click', async () => {
    try {
      const text = await navigator.clipboard.readText();
      textArea.value = text; // Paste the text into the textarea
    } catch (error) {
      alert('Failed to paste text. Ensure clipboard permissions are enabled.');
      console.error('Error:', error);
    }
  });

}

