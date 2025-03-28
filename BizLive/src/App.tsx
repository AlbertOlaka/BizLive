import { useState } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
      <motion.h1 
        className="text-5xl font-bold text-center mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        BizLive - Business & Finance Streaming
      </motion.h1>
      <motion.p 
        className="text-lg text-center max-w-2xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Join the waitlist for early access to the next-gen streaming platform for business and finance creators. Stay ahead with exclusive content and opportunities.
      </motion.p>
      <div className="mt-6 w-full max-w-md">
        {submitted ? (
          <motion.p 
            className="text-green-400 text-center text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thanks for signing up! We'll keep you updated.
          </motion.p>
        ) : (
          <motion.a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSed-WY6_VUbz5AO17gqOW8ODhK8HeUAksJFz0saKlE-ChHVAw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full shadow-lg"
              onClick={() => setSubmitted(true)}
            >
              Join the Waitlist
            </button>
          </motion.a>
        )}
      </div>
    </div>
  );
}
