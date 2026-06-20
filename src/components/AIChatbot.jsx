"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Sparkles, RotateCcw, ArrowRight } from "lucide-react";

const SUGGESTED_QUESTIONS = [
    "Is Gourav available for internships?",
    "What tech stack does he know?",
    "Tell me about his projects",
    "If bugs could review Gourav, what would they say?",
];

function TypingIndicator() {
    return (
        <div className="flex items-center gap-1.5 px-4 py-3 bg-[#1A1A1A] border border-white/5 rounded-2xl rounded-tl-sm w-fit">
            {[0, 1, 2].map((i) => (
                <motion.span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-zinc-500"
                    animate={{ opacity: [0.3, 1, 0.3], y: [0, -3, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                />
            ))}
        </div>
    );
}

function RedirectPill({ redirect, onNavigate }) {
    return (
        <motion.button
            onClick={() => onNavigate(redirect.route)}
            className="flex items-center gap-2 mt-2 px-3.5 py-2 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-semibold w-fit hover:bg-amber-500/20 hover:border-amber-500/50 transition-all duration-200"
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
        >
            <span>{redirect.emoji}</span>
            {redirect.label}
            <ArrowRight size={12} />
        </motion.button>
    );
}

function FloatingButton({ onClick }) {
    const [phase, setPhase] = useState("hidden");
    // phases: hidden → circle → expanded → circle

    useEffect(() => {
        const t1 = setTimeout(() => setPhase("circle"), 500);   // appear as circle
        const t2 = setTimeout(() => setPhase("expanded"), 2000); // expand with name
        const t3 = setTimeout(() => setPhase("circle"), 5000);   // collapse back
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);

    if (phase === "hidden") return null;

    return (
        <motion.button
            onClick={onClick}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-amber-500 text-[#0A0A0A] font-bold text-sm shadow-[0_8px_30px_rgba(245,166,35,0.35)] hover:bg-amber-400 transition-colors duration-200"
            initial={{ scale: 0, opacity: 0, borderRadius: "50%", width: 48, height: 48 }}
            animate={{
                scale: 1,
                opacity: 1,
                borderRadius: phase === "expanded" ? "14px" : "50%",
                width: phase === "expanded" ? 190 : 48,
                height: 48,
            }}
            transition={{
                width: { delay: phase === "expanded" ? 0 : 0.2, type: "spring", stiffness: 200, damping: 22 },
                borderRadius: { delay: phase === "expanded" ? 0 : 0.2, duration: 0.3 },
                scale: { type: "spring", stiffness: 200, damping: 22 },
                opacity: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="flex items-center gap-2 px-3">
                <Sparkles size={17} className="shrink-0" />
                <AnimatePresence>
                    {phase === "expanded" && (
                        <motion.span
                            key="label"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                opacity: {
                                    duration: 0.15,
                                    delay: phase === "expanded" ? 0.2 : 0
                                }
                            }}
                            className="whitespace-nowrap text-sm font-bold"
                        >
                            Ask about Gourav
                        </motion.span>
                    )}
                </AnimatePresence>
            </div>
        </motion.button>
    );
}

export default function AIChatbot() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "Hey! I'm Gourav's AI assistant. Ask me anything about his skills, projects, background, or availability. 👋",
            redirect: null,
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(true);
    const bottomRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const handler = () => setIsOpen(true);
        window.addEventListener("open-chatbot", handler);
        return () => window.removeEventListener("open-chatbot", handler);
    }, []);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    useEffect(() => {
        if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
    }, [isOpen]);

    function handleNavigate(route) {
        setIsOpen(false);
        router.push(route);
    }

    async function sendMessage(text) {
        const userText = text || input.trim();
        if (!userText || isLoading) return;

        setInput("");
        setShowSuggestions(false);

        const newMessages = [...messages, { role: "user", content: userText, redirect: null }];
        setMessages(newMessages);
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: newMessages
                        .filter((m) => m.role !== "system")
                        .map(({ role, content }) => ({ role, content })),
                }),
            });

            const data = await res.json();
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: data.message || "Sorry, something went wrong. Try again!",
                    redirect: data.redirect || null,
                },
            ]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Oops! Something went wrong. Please try again.",
                    redirect: null,
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    }

    function handleReset() {
        setMessages([
            {
                role: "assistant",
                content:
                    "Hey! I'm Gourav's AI assistant. Ask me anything about his skills, projects, background, or availability. 👋",
                redirect: null,
            },
        ]);
        setShowSuggestions(true);
        setInput("");
    }

    function handleKey(e) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    }

    return (
        <>
            {/* Floating Button — hidden when chat is open */}
            {!isOpen && <FloatingButton onClick={() => setIsOpen(true)} />}

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop — mobile only */}
                        <motion.div
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            className="fixed bottom-6 right-3 sm:right-6 z-50 w-[calc(100vw-1.5rem)] sm:w-[400px] h-[580px] flex flex-col bg-[#111111] border border-[#2A2A2A] rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-hidden"
                            initial={{ opacity: 0, scale: 0.92, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.92, y: 20 }}
                            transition={{ type: "spring", stiffness: 300, damping: 28 }}
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-[#161616] shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                                        <Sparkles size={15} className="text-amber-400" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">Ask about Gourav</p>
                                        <div className="flex items-center gap-1.5 mt-0.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                            <p className="text-zinc-500 text-xs">AI Assistant · Always online</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={handleReset}
                                        className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 text-zinc-500 hover:text-zinc-300 hover:bg-white/10 transition-all duration-200"
                                        title="Reset chat"
                                    >
                                        <RotateCcw size={14} />
                                    </button>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 text-zinc-500 hover:text-zinc-300 hover:bg-white/10 transition-all duration-200"
                                    >
                                        <X size={15} />
                                    </button>
                                </div>
                            </div>

                            {/* Messages */}
                            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 scrollbar-hide">
                                <AnimatePresence initial={false}>
                                    {messages.map((msg, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
                                        >
                                            <div
                                                className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed
                                                    ${msg.role === "user"
                                                        ? "bg-amber-500 text-[#0A0A0A] font-medium rounded-tr-sm"
                                                        : "bg-[#1A1A1A] border border-white/5 text-zinc-300 rounded-tl-sm"
                                                    }`}
                                            >
                                                {msg.content}
                                            </div>

                                            {msg.role === "assistant" && msg.redirect && (
                                                <RedirectPill redirect={msg.redirect} onNavigate={handleNavigate} />
                                            )}
                                        </motion.div>
                                    ))}

                                    {isLoading && (
                                        <motion.div
                                            key="typing"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="flex justify-start"
                                        >
                                            <TypingIndicator />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Suggested questions */}
                                {showSuggestions && messages.length === 1 && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="flex flex-col gap-2 mt-2"
                                    >
                                        <p className="text-zinc-600 text-xs px-1">Suggested questions</p>
                                        {SUGGESTED_QUESTIONS.map((q) => (
                                            <button
                                                key={q}
                                                onClick={() => sendMessage(q)}
                                                className="text-left px-4 py-2.5 rounded-xl bg-[#1A1A1A] border border-white/5 text-zinc-400 text-xs hover:border-amber-500/30 hover:text-amber-400 transition-all duration-200"
                                            >
                                                {q}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}

                                <div ref={bottomRef} />
                            </div>

                            {/* Input */}
                            <div className="px-4 py-4 border-t border-white/5 bg-[#0F0F0F] shrink-0">
                                <div className="flex items-center gap-2 bg-[#1A1A1A] border border-white/5 rounded-2xl px-4 py-2.5 focus-within:border-amber-500/40 transition-colors duration-300">
                                    <input
                                        ref={inputRef}
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        onKeyDown={handleKey}
                                        placeholder="Ask anything about Gourav..."
                                        className="flex-1 bg-transparent text-white placeholder:text-zinc-600 text-sm outline-none"
                                        disabled={isLoading}
                                    />
                                    <motion.button
                                        onClick={() => sendMessage()}
                                        disabled={!input.trim() || isLoading}
                                        className="w-8 h-8 flex items-center justify-center rounded-xl bg-amber-500 text-[#0A0A0A] disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Send size={14} />
                                    </motion.button>
                                </div>
                                <p className="text-center text-zinc-700 text-[10px] mt-2">
                                    More than a portfolio. A conversation.
                                </p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
