import React, { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";

const CaseConverter = () => {
  const [text, setText] = useState(localStorage.getItem("text") || "");
  const [convertedText, setConvertedText] = useState(localStorage.getItem("convertedText") || "");

  const handleConvert = (type) => {
    let converted = text;

    switch (type) {
      case "upper":
        converted = text.toUpperCase();
        break;
      case "lower":
        converted = text.toLowerCase();
        break;
      case "title":
        converted = text
          .toLowerCase()
          .split(" ")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ");
        break;
      case "sentence":
        converted = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
        break;
      case "camel":
        converted = text
          .toLowerCase()
          .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
        break;
      case "Pascal":
        converted = text
          .toLowerCase()
          .split(/[^a-zA-Z0-9]/)
          .map(w => w.charAt(0).toUpperCase() + w.slice(1))
          .join("");
        break;
      case "snake":
        converted = text.toLowerCase().replace(/\s+/g, "_");
        break;
      case "slug":
        converted = text
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");
        break;
      case "trim":
        converted = text.trim();
        break;
      case "nopunct":
        converted = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "");
        break;
      case "ascii":
        converted = text.replace(/[^\x00-\x7F]/g, "");
        break;
      default:
        break;
    }
    localStorage.setItem("text", text);
    localStorage.setItem("convertedText", converted);
    setConvertedText(converted);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(convertedText);
    // alert("Converted text copied to clipboard!");
  };

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  const options = [
    { id: "upper", label: "Uppercase" },
    { id: "lower", label: "Lowercase" },
    { id: "title", label: "Title Case" },
    { id: "sentence", label: "Sentence Case" },
    { id: "camel", label: "Camel Case" },
    { id: "Pascal", label: "Pascal Case" },
    { id: "snake", label: "Snake Case" },
    { id: "slug", label: "Slugify" },
    { id: "trim", label: "Trim" },
    { id: "nopunct", label: "Remove Punctuation" },
    { id: "ascii", label: "ASCII Only" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-5 py-3 bg-white border-2 border-gray-300 border-dashed  rounded-xl mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Input Text</h2>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-60 border border-gray-300 rounded-lg p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Enter your text here..."
          ></textarea>
          <div className="text-sm text-gray-600 flex justify-between">
            <p><strong>Words:</strong> {wordCount}</p>
            <p><strong>Characters:</strong> {charCount}</p>
          </div>
        </div>

        {/* Output */}
        <div className="space-y-4 relative">
          <h2 className="text-xl font-semibold text-gray-700">Converted Text</h2>
          <textarea
            value={convertedText}
            readOnly
            className="w-full h-60 border border-green-300 bg-green-50 rounded-lg p-4 text-gray-800 focus:outline-none resize-none"
            placeholder="Converted text will appear here..."
          ></textarea>
          <button
            onClick={handleCopy}
            className="absolute top-12 right-4 bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded transition duration-300"
          >
            <MdOutlineContentCopy />
          </button>
        </div>
      </div>

      {/* Convert Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
        {options.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => handleConvert(id)}
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 font-medium px-4 py-2 rounded transition duration-200 border border-blue-300 text-sm cursor-pointer"
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CaseConverter;
