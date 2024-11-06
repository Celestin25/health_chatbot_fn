import React, { useState, useEffect } from "react";
import { SendHorizontal, Building2 } from "lucide-react";
import Footer from "./Homepage/Homepage_footer";
import Header from "./Homepage/Homepage_header";
// Define the Message interface
interface Message {
  question: string;
  answer: string;
  sender: "user" | "assistant";
  timestamp: string;
}

const MentalHealthChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<"en" | "rw">("en");
  const [userId, setUserId] = useState<number | null>(1);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("appLanguage");
    if (savedLanguage === "rw" || savedLanguage === "en") {
      setSelectedLanguage(savedLanguage as "en" | "rw");
    }
  }, []);

  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      question: inputMessage,
      answer: "",
      sender: "user",
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/api/chat/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: inputMessage,
          language: selectedLanguage,
          user_id: userId,
        }),
      });

      const data: { response?: string; language?: string } =
        await response.json();

      const botMessage: Message = {
        question: inputMessage,
        answer:
          data.response ||
          (selectedLanguage === "en"
            ? "I apologize, but I am unable to provide a response at the moment."
            : "Mbabarira, ariko ndimo guhura n'ikibazo cyo kuguha igisubizo ubu."),
        sender: "assistant",
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        question: inputMessage,
        answer:
          selectedLanguage === "en"
            ? "I apologize, but I am experiencing technical difficulties. Please try again later."
            : "Mbabarira, ariko ndimo guhura n'ikibazo cya tekinike. Gerageza nyuma.",
        sender: "assistant",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // Function to toggle between languages
  const toggleLanguage = (language) => {
    const newLanguage = language;
    setSelectedLanguage(newLanguage);
    localStorage.setItem("appLanguage", newLanguage);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      < Header />
      <div className="bg-white shadow-sm px-6 py-4 border-b">
        <div className="flex items-center gap-3">
          <Building2 className="h-8 w-8 text-gray-700" />
          <h1 className="text-2xl font-semibold text-gray-800">
            {selectedLanguage === "en"
              ? "Mental Health Assistant"
              : "Umufasha mu Buzima bwo Mumutwe"}
          </h1>
          <button className="ml-auto bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600">
            {selectedLanguage === "en" ? "English" : "Kinyarwanda"}
          </button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r p-4">
          <button
            onClick={() => toggleLanguage("en")}
            className={`w-full ${
              selectedLanguage === "en" ? "bg-red-500" : "bg-gray-200"
            } text-white rounded-md py-2 px-4 mb-3 flex items-center gap-2`}
          >
            <span className="text-sm font-medium">English</span>
          </button>
          <button
            onClick={() => toggleLanguage("rw")}
            className={`w-full ${
              selectedLanguage === "rw" ? "bg-red-500" : "bg-gray-200"
            } text-white rounded-md py-2 px-4 text-left flex items-center gap-2`}
          >
            <span className="text-sm">Kinyarwanda</span>
          </button>
        </div>

        {/* Main chat area */}
        <div className="flex-1 flex flex-col">
          {/* Welcome message */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {selectedLanguage === "en"
                ? "Welcome to the Mental Health Assistant!"
                : "Murakaza neza kuri Umufasha w'Ubuzima bwo mumutwe!"}
            </h2>
            <p className="text-gray-600 mb-6">
              {selectedLanguage === "en"
                ? "You are now logged in. Feel free to ask me anything related to mental health."
                : "Uheruka kwinjira. Wobaza icyo ushaka ku buzima bwo mu mutwe."}
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {selectedLanguage === "en"
                ? "Mental Health (English)"
                : "Ubuzima bwo mumutwe (Kinyarwanda)"}
            </h3>
            <p className="text-gray-600">
              {selectedLanguage === "en"
                ? "Ask me anything about mental health, and I will try to assist you with answers."
                : "Mobaza icyo ushaka ku buzima bwo mu mutwe, kandi nzagerageza kubakurikiza."}
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-6 py-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 flex ${
                  message.sender === "user"
                    ? "flex-row-reverse justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`p-3 rounded-lg max-w-[70%] ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <div className="font-medium">
                    {message.sender === "user"
                      ? selectedLanguage === "en"
                        ? "You:"
                        : "Mwe:"
                      : selectedLanguage === "en"
                      ? "Assistant:"
                      : "Umufasha:"}
                  </div>
                  <div className="mt-1">{message.question}</div>
                  <div className="mt-2 font-medium">
                    {message.sender === "user"
                      ? selectedLanguage === "en"
                        ? "Answer:"
                        : "Igisubizo:"
                      : selectedLanguage === "en"
                      ? "Response:"
                      : "Isubizo:"}
                  </div>
                  <div>{message.answer}</div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="mr-auto max-w-md">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  {selectedLanguage === "en"
                    ? "Typing..."
                    : "Ndimo kwandika..."}
                </div>
              </div>
            )}
          </div>

          {/* Input area */}
          <form onSubmit={sendMessage} className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputMessage(e.target.value)
                }
                placeholder={
                  selectedLanguage === "en"
                    ? "Type your question..."
                    : "Andika ikibazo cyawe..."
                }
                className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
              >
                <SendHorizontal className="h-5 w-5" /> {/* Send icon */}
              </button>
            </div>
          </form>
        </div>
      </div>
      < Footer />
    </div>
  );
};

export default MentalHealthChat;