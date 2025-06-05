'use client';

import React, { useEffect, useState } from 'react';

interface Quote {
  text: string;
  author: string;
}

const fallbackQuotes: Quote[] = [
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Champions aren't made in the gyms. Champions are made from something deep inside them - a desire, a dream, a vision.",
    author: "Muhammad Ali"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins"
  },
  {
    text: "Hard work beats talent when talent doesn't work hard.",
    author: "Tim Notke"
  }
];

const QuoteScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [currentQuote, setCurrentQuote] = useState<Quote>(fallbackQuotes[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Fetch quote from API
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random?tags=motivational,inspirational,wisdom,success&maxLength=150');
        if (response.ok) {
          const data = await response.json();
          setCurrentQuote({
            text: data.content,
            author: data.author
          });
        } else {
          // Use fallback if API fails
          setCurrentQuote(fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)]);
        }
      } catch (error) {
        // Use fallback if API fails
        setCurrentQuote(fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)]);
      }
    };

    fetchQuote();
  }, []);

  useEffect(() => {
    // Fade in animation
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Start fade out after 3.5 seconds
    const fadeOutTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3500);

    // Complete transition after fade out
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center bg-gradient-to-br from-backgroundPrimary via-backgroundSecondary to-backgroundPrimary transition-opacity duration-500 ${
      isExiting ? 'opacity-0' : isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent transform -skew-y-12"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/10 to-transparent transform skew-y-12"></div>
      </div>

      {/* Quote Content */}
      <div className={`relative text-center max-w-4xl mx-auto px-8 transform transition-all duration-700 ${
        isVisible && !isExiting ? 'translate-y-0 scale-100' : 'translate-y-8 scale-95'
      }`}>
        {/* Quote Mark */}
        <div className={`text-6xl md:text-8xl text-primary/20 font-serif mb-4 transition-all duration-1000 delay-300 ${
          isVisible && !isExiting ? 'opacity-100 rotate-0' : 'opacity-0 rotate-12'
        }`}>
          "
        </div>

        {/* Quote Text */}
        <blockquote className={`text-xl md:text-2xl lg:text-3xl font-light text-textPrimary leading-relaxed mb-8 transition-all duration-1000 delay-500 ${
          isVisible && !isExiting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {currentQuote.text}
        </blockquote>

        {/* Author */}
        <cite className={`text-lg md:text-xl text-textSecondary font-medium transition-all duration-1000 delay-700 ${
          isVisible && !isExiting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          — {currentQuote.author}
        </cite>

        {/* Animated Underline */}
        <div className={`w-24 h-0.5 bg-gradient-to-r from-primary to-cyan-500 mx-auto mt-6 transition-all duration-1000 delay-900 ${
          isVisible && !isExiting ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary/30 rounded-full transition-all duration-2000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.5}s`,
              animation: isVisible ? 'float 4s ease-in-out infinite' : 'none',
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default QuoteScreen;