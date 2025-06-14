"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { motion } from "framer-motion";

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      showAlertMessage("danger", "Please fill in all fields");
      return;
    }

    setIsLoading(true);

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Monil",
          from_email: formData.email,
          to_email: "monilc2801@gmail.com",
          message: formData.message,
        }
      );

      console.log("EmailJS response:", response);
      
      if (response.status === 200) {
        setFormData({ name: "", email: "", message: "" });
        showAlertMessage("success", "Thank you for your message. I will get in touch with you personally within 24 to 48 hours.");
        
        // Send auto-reply to user
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_AUTOREPLY_TEMPLATE_ID,
          {
            to_name: formData.name,
            to_email: formData.email,
            from_name: "Monil Choudhary",
            message: formData.message,
          }
        );
      } else {
        showAlertMessage("danger", "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      showAlertMessage(
        "danger", 
        error.text || "Something went wrong. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative flex items-center justify-center min-h-screen px-4 py-12 sm:px-6 lg:px-8">
      {showAlert && (
        <div className="fixed top-4 right-4 z-50">
          <Alert type={alertType} text={alertMessage} />
        </div>
      )}

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl p-8 bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 rounded-xl shadow-2xl shadow-purple-500/10"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-3">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 max-w-lg mx-auto">
            Have a project in mind or want to discuss opportunities? Send me a message and I'll get back to you soon.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Your Name
            </label>
            <motion.input
              id="name"
              name="name"
              type="text"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <motion.input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Your Message
            </label>
            <motion.textarea
              id="message"
              name="message"
              rows="5"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all"
              placeholder="Your message for me . . ."
              value={formData.message}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
            />
          </div>

          <motion.button
            type="submit"
            disabled={isLoading}
            className={`w-full px-6 py-3 text-lg font-medium text-white rounded-lg transition-all ${
              isLoading
                ? "bg-purple-700 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-lg"
            }`}
            whileHover={!isLoading ? { scale: 1.02 } : {}}
            whileTap={!isLoading ? { scale: 0.98 } : {}}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;