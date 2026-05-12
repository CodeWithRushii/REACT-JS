import { useState } from "react";
import { motion } from "framer-motion";
import { Languages, ArrowLeftRight, Copy, Check, Sparkles, Loader2 } from "lucide-react";
import { translate } from "./services/service";

const LANGUAGES = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "ja", name: "Japanese" },
  { code: "de", name: "German" },
  { code: "bn", name: "Bengali" },
  { code: "pa", name: "Punjabi" },
  { code: "gu", name: "Gujarati" },
  { code: "ta", name: "Tamil" },
  { code: "te", name: "Telugu" },
  { code: "vi", name: "Vietnamese" },
];

export default function ElegantTranslator() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [source, setSource] = useState("en");
  const [target, setTarget] = useState("hi");
  const [Loader, setLoader] = useState(false);
  const [copied, setCopied] = useState(false);


  const handleTranslate = async () => {
    if (!input) {
      alert("Please enter some text to translate.");
      return;
    }

    setLoader(true);
    try {
      let translateOutput: string = await translate(input, source, target);
      setOutput(translateOutput);
    } catch (error) {
      console.error("Translation failed", error);
    } finally {
      setLoader(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex items-center justify-center p-6 font-sans">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <main className="w-full max-w-5xl z-10">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 px-2">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-linear-to-br from-blue-500 to-violet-600 rounded-xl shadow-lg shadow-blue-500/20">
              <Languages size={22} className="text-white" />
            </div>
            <h1 className="text-xl font-semibold tracking-tight">Lingo<span className="text-blue-400">Flow</span></h1>
          </div>
          <div className="text-xs font-medium px-3 py-1 bg-zinc-800/50 border border-zinc-700/50 rounded-full text-zinc-400">
            RapidAPI Powered
          </div>
        </header>

        {/* Translation Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Input Box */}
          <div className="group relative bg-zinc-900/40 border border-zinc-800 p-6 rounded-4xl transition-all hover:border-zinc-700">
            <div className="flex items-center justify-between mb-4">
              <select
                value={source}
                onChange={(e) => setSource(e.target.value)}
                className="bg-transparent text-sm font-medium text-zinc-400 outline-none cursor-pointer hover:text-white transition-colors"
              >
                {LANGUAGES.map(l => <option key={l.code} value={l.code} className="bg-zinc-900">{l.name}</option>)}
              </select>
              <Sparkles size={16} className="text-zinc-600 group-hover:text-blue-400 transition-colors" />
            </div>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter text to translate..."
              className="w-full h-48 bg-transparent border-none outline-none text-2xl resize-none placeholder-zinc-700"
            />
          </div>

          {/* Output Box */}
          <div className="relative bg-zinc-900/40 border border-zinc-800 p-6 rounded-4xl transition-all overflow-hidden">
            {/* Animated loading bar */}
            {Loader && (
              <motion.div
                initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute top-0 left-0 h-0.5 w-full bg-linear-to-r from-transparent via-blue-500 to-transparent"
              />
            )}

            <div className="flex items-center justify-between mb-4">
              <select
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="bg-transparent text-sm font-medium text-zinc-400 outline-none cursor-pointer hover:text-white transition-colors"
              >
                {LANGUAGES.map(l => <option key={l.code} value={l.code} className="bg-zinc-900">{l.name}</option>)}
              </select>

              <button
                onClick={copyToClipboard}
                className="p-2 hover:bg-zinc-800 rounded-lg transition-colors text-zinc-500 hover:text-white"
              >
                {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>
            <div className={`text-2xl h-48 overflow-y-auto ${!output ? 'text-zinc-700' : 'text-zinc-100'}`}>
              {output || "Translation will appear here..."}
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="mt-8 flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setSource(target); setTarget(source); }}
              className="p-4 bg-zinc-800/50 border border-zinc-700 rounded-2xl hover:bg-zinc-700 transition-all active:scale-95"
            >
              <ArrowLeftRight size={20} />
            </button>
            <button
              onClick={handleTranslate}
              disabled={Loader || !input}
              className="px-10 py-4 bg-white text-black font-bold rounded-2xl flex items-center gap-3 hover:bg-blue-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-xl shadow-white/5"
            >
              {Loader ? <Loader2 className="animate-spin" size={20} /> : "Translate Now"}
            </button>
          </div>

          <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
            Real-time Neural Translation
          </p>
        </div>
      </main>
    </div>
  );
}