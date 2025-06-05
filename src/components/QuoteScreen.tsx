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
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Set fallback immediately to prevent flash
    const randomFallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    setCurrentQuote(randomFallback);

    // Try to fetch API quote, but don't change if already visible
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random?tags=motivational,inspirational,wisdom,success&maxLength=120');
        if (response.ok) {
          const data = await response.json();
          // Only update if we haven't started showing the quote yet
          if (!isVisible) {
            setCurrentQuote({
              text: data.content,
              author: data.author
            });
          }
        }
      } catch (error) {
        // Keep the fallback quote
      }
    };

    fetchQuote();
  }, [isVisible]);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const fadeOutTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3700);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!currentQuote) return null;

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center bg-backgroundPrimary transition-all duration-700 ${
      isExiting ? 'opacity-0 scale-95' : isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
    }`}>
      {/* Minimalist Content */}
      <div className={`text-center max-w-3xl mx-auto px-8 space-y-8 transform transition-all duration-1000 ease-out ${
        isVisible && !isExiting ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}>
        
        {/* Quote Text */}
        <blockquote className={`text-3xl md:text-4xl lg:text-5xl font-light text-textPrimary leading-tight transition-all duration-1200 delay-300 ${
          isVisible && !isExiting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          "{currentQuote.text}"
        </blockquote>

        {/* Simple line separator */}
        <div className={`w-16 h-px bg-primary mx-auto transition-all duration-800 delay-700 ${
          isVisible && !isExiting ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}></div>

        {/* Author */}
        <cite className={`block text-xl md:text-2xl text-textSecondary font-normal transition-all duration-1000 delay-900 ${
          isVisible && !isExiting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          {currentQuote.author}
        </cite>
      </div>
    </div>
  );
};

export default QuoteScreen;