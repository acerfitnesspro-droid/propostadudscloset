import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Mic, MicOff, X, MessageSquare, Send, Sparkles, Volume2, VolumeX } from 'lucide-react';

const ALINE_SYSTEM_PROMPT = `
Você é Aline, uma assistente de voz feminina, clara, gentil, confiável e extremamente inteligente.
Seu papel é atuar dentro do site oficial do serviço (Acelera Mídia/DudsCloset), ajudando visitantes a entenderem todos os planos, benefícios, dúvidas técnicas, diferenças entre planos, recomendações, funcionalidades, preços, automação, vantagens, e como cada plano funciona na prática.

Você NÃO inventa nada.
Você SÓ responde usando as informações oficiais abaixo.
Quando a informação não estiver nos dados fornecidos, diga:
“Posso te ajudar apenas com dúvidas relacionadas aos planos e aos serviços oferecidos.”

Você deve ser capaz de compreender perguntas complexas, comparar planos, dar orientações e explicar tudo de forma simples e clara.
Sempre responda com voz feminina, educada, profissional e com tom de especialista.

CONHECIMENTO OFICIAL SOBRE OS PLANOS:

Plano 1 — BIO para Instagram — R$ 197,00
Para quem quer começar com presença digital rápida e profissional.
Inclui: Página leve, moderna e objetiva; Visual alinhado à identidade da marca; Acesso rápido às categorias; Aumento da credibilidade; Melhora na experiência da cliente.

Plano 2 — BIO + Site Oficial — R$ 449,00
Transforma o negócio em uma marca profissional online.
Inclui: Personalização completa conforme o sonho da cliente; Assistente de voz e texto integrada para ajudar a comprar; Sistema bancário integrado para compras automáticas; Painel administrativo básico para produtos e coleções.

Plano 3 — BIO + Site + Painel Administrativo Completo — R$ 749,00
Perfeito para quem quer automação e gestão inteligente.
Inclui tudo dos planos anteriores, mais: Fluxo de estoque inteligente (enviar foto da nota fiscal -> sistema cadastra); Gerador automático de nota de venda; Gerador de imagens de produtos, modelos e looks sem precisar experimentar; Administração inteligente (estoque e financeiro atualizados automaticamente).

Plano 4 — Automação Total via WhatsApp — R$ 1.000 + R$ 349/mês
Automação completa de vendas, atendimento e geração de looks personalizados.
Inclui tudo dos planos anteriores, mais: Agente inteligente que monta looks; Gera imagem de como o look ficaria na cliente usando apenas uma foto; Atende 24h conforme treinamento personalizado; Finaliza vendas automaticamente; Notifica no painel quando a venda for concluída; Estoque e financeiro totalmente integrados.

REGRAS DE COMPORTAMENTO:
Jamais altere preços, funções ou entregas.
Não invente funcionalidades além das listadas.
Quando a pergunta for externa ao conteúdo dos planos, responda: “Consigo te ajudar apenas com informações sobre os nossos planos e como cada um funciona.”
Responda de forma clara, natural e objetiva. Mantenha as respostas curtas (máximo 2-3 frases) pois é uma conversa por voz, a menos que peçam detalhes.
Pode comparar os planos sempre que fizer sentido.
Pode recomendar o melhor plano com base na necessidade do usuário.
`;

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const AlineAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Eu sou a Aline. Como posso ajudar você a escolher o melhor plano hoje?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const synthRef = useRef<SpeechSynthesis | null>(null);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initialize Speech APIs
  useEffect(() => {
    if (typeof window !== 'undefined') {
      synthRef.current = window.speechSynthesis;

      // Setup Speech Recognition
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.lang = 'pt-BR';
        recognition.continuous = false;
        recognition.interimResults = false;

        recognition.onstart = () => setIsListening(true);
        recognition.onend = () => setIsListening(false);
        recognition.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInputText(transcript);
          handleSend(transcript);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  const speak = (text: string) => {
    if (!synthRef.current || !soundEnabled) return;

    // Cancel current speech
    synthRef.current.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR';
    
    // Try to select a female voice if available
    const voices = synthRef.current.getVoices();
    const femaleVoice = voices.find(v => v.lang.includes('pt-BR') && (v.name.includes('Google') || v.name.includes('Luciana') || v.name.includes('Female')));
    if (femaleVoice) utterance.voice = femaleVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    
    synthRef.current.speak(utterance);
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
    } else {
      recognitionRef.current?.start();
    }
  };

  const handleSend = async (textToSend: string = inputText) => {
    if (!textToSend.trim()) return;

    // Add User Message
    const userMsg: Message = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      // Initialize Gemini
      // Note: Assuming process.env.API_KEY is available as per instructions. 
      // In a real Vercel deploy, this needs to be set in Project Settings.
      const apiKey = process.env.API_KEY || ''; 
      
      let ai;
      try {
         ai = new GoogleGenAI({ apiKey });
      } catch (e) {
         console.error("API Key missing or invalid");
         const errorMsg = "Desculpe, não consegui conectar ao meu cérebro agora. (Erro de Configuração de API)";
         setMessages(prev => [...prev, { role: 'model', text: errorMsg }]);
         setIsLoading(false);
         speak(errorMsg);
         return;
      }

      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          ...history,
          { role: 'user', parts: [{ text: textToSend }] }
        ],
        config: {
          systemInstruction: ALINE_SYSTEM_PROMPT,
        }
      });

      const responseText = response.text || "Desculpe, não entendi.";
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
      speak(responseText);

    } catch (error) {
      console.error("Error generating content:", error);
      const errorMsg = "Tive um problema técnico momentâneo. Pode repetir?";
      setMessages(prev => [...prev, { role: 'model', text: errorMsg }]);
      speak(errorMsg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-[70] group flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-neon-purple/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative bg-dark-surface border border-neon-pink text-white w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:bg-neon-magenta/20 hover:shadow-[0_0_20px_rgba(196,58,117,0.5)] transition-all duration-300">
           {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6 text-neon-pink" />}
        </div>
        {!isOpen && (
           <span className="absolute left-14 ml-2 px-3 py-1 bg-dark-card border border-white/10 rounded-lg text-xs font-bold text-neon-pink whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             Falar com Aline
           </span>
        )}
      </button>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-[70] w-[90vw] md:w-[380px] h-[500px] bg-dark-surface/95 backdrop-blur-xl border border-neon-pink/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-float">
          {/* Header */}
          <div className="bg-gradient-to-r from-neon-magenta to-neon-pink p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white leading-none">Aline</h3>
                <span className="text-[10px] text-white/80 uppercase tracking-wider">Assistente Virtual</span>
              </div>
            </div>
            <button onClick={() => setSoundEnabled(!soundEnabled)} className="text-white/80 hover:text-white">
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user'
                      ? 'bg-neon-pink/20 border border-neon-pink/50 text-white rounded-tr-none'
                      : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none flex gap-1">
                  <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-neon-pink rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-white/10 bg-black/20">
            <div className="flex items-center gap-2">
              <button
                onClick={toggleListening}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isListening
                    ? 'bg-red-500 text-white shadow-[0_0_15px_rgba(239,68,68,0.5)] animate-pulse'
                    : 'bg-white/10 text-neon-pink hover:bg-neon-pink/20'
                }`}
              >
                {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
              
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite ou fale sua dúvida..."
                  className="w-full bg-black/40 border border-white/10 rounded-full py-3 px-4 text-sm text-white focus:outline-none focus:border-neon-pink transition-colors"
                />
              </div>

              <button
                onClick={() => handleSend()}
                disabled={!inputText.trim() || isLoading}
                className="p-3 bg-neon-pink text-white rounded-full hover:bg-neon-magenta disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
