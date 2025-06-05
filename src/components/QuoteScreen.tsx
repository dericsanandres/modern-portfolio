'use client';

import React, { useEffect, useState } from 'react';

interface Quote {
  text: string;
  author: string;
  image?: string;
}

// Powerful, short quotes for maximum impact
const fallbackQuotes: Quote[] = [
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  }
];

const QuoteScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const fetchAuthorImage = async (authorName: string): Promise<string | null> => {
    try {
      const searchResponse = await fetch(
        `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages&piprop=thumbnail&pithumbsize=300&titles=${encodeURIComponent(authorName)}&origin=*`
      );
      
      if (searchResponse.ok) {
        const data = await searchResponse.json();
        const pages = data.query?.pages;
        if (pages && pages.length > 0 && pages[0].thumbnail) {
          return pages[0].thumbnail.source;
        }
      }
    } catch (error) {
      console.log('Wikipedia image fetch failed:', error);
    }
    return null;
  };

  const testImageLoad = (url: string): Promise<boolean> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
      
      setTimeout(() => resolve(false), 2000);
    });
  };

  useEffect(() => {
    const fetchQuoteAndImage = async () => {
      const randomFallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
      setCurrentQuote(randomFallback);
      setShowImage(false);

      try {
        const quoteResponse = await fetch(
          'https://api.quotable.io/random?tags=motivational,inspirational,wisdom,success&maxLength=80&minLength=25'
        );
        
        if (quoteResponse.ok) {
          const quoteData = await quoteResponse.json();
          
          if (!isVisible) {
            const newQuote: Quote = {
              text: quoteData.content,
              author: quoteData.author
            };

            const authorImage = await fetchAuthorImage(quoteData.author);
            if (authorImage) {
              const imageLoads = await testImageLoad(authorImage);
              if (imageLoads) {
                setImageUrl(authorImage);
                setShowImage(true);
                newQuote.image = authorImage;
              }
            }

            setCurrentQuote(newQuote);
          }
        }
      } catch (error) {
        console.log('Quote fetch failed, using reliable fallback');
      }
    };

    fetchQuoteAndImage();
  }, [isVisible]);

  useEffect(() => {
    const fadeInTimer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    const fadeOutTimer = setTimeout(() => {
      setIsExiting(true);
    }, 3800);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(fadeInTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const handleImageError = () => {
    setShowImage(false);
    setImageUrl(null);
  };

  if (!currentQuote) return null;

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center bg-backgroundPrimary transition-all duration-600 ease-out ${
      isExiting ? 'opacity-0' : isVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      
      <div className="max-w-4xl mx-auto px-8 w-full">
        {/* Elegant Typography Layout */}
        <div className={`text-center transform transition-all duration-800 ease-out ${
          isVisible && !isExiting ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-98'
        }`}>
          
          {/* Optional Author Photo - Hidden for now but code preserved */}
          {false && showImage && imageUrl && (
            <div className={`mb-6 flex justify-center transition-all duration-800 delay-100 ease-out ${
              isVisible && !isExiting ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden bg-gradient-to-br from-primary/10 to-cyan-500/10 p-0.5">
                <img 
                  src={imageUrl} 
                  alt={currentQuote.author}
                  className="w-full h-full object-cover rounded-full"
                  onError={handleImageError}
                />
              </div>
            </div>
          )}
          
          {/* Refined Quote Typography */}
          <div className="space-y-8">
            
            {/* Subtle Opening Quote Mark */}
            <div className={`transition-all duration-800 delay-200 ease-out ${
              isVisible && !isExiting ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <span className="text-4xl md:text-5xl font-serif text-primary/40 leading-none select-none">
                "
              </span>
            </div>

            {/* Main Quote Text - Elegant Italic */}
            <blockquote className={`transition-all duration-1000 delay-400 ease-out ${
              isVisible && !isExiting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light italic text-textPrimary leading-relaxed tracking-wide max-w-3xl mx-auto">
                {currentQuote.text}
              </p>
            </blockquote>

            {/* Subtle Closing Quote Mark */}
            <div className={`transition-all duration-800 delay-600 ease-out ${
              isVisible && !isExiting ? 'opacity-40 translate-y-0' : 'opacity-0 translate-y-2'
            }`}>
              <span className="text-4xl md:text-5xl font-serif text-primary/40 leading-none select-none">
                "
              </span>
            </div>

            {/* Minimalist Separator */}
            <div className={`flex justify-center py-4 transition-all duration-600 delay-800 ease-out ${
              isVisible && !isExiting ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              <div className="w-16 h-px bg-primary"></div>
            </div>

            {/* Author Attribution */}
            <cite className={`transition-all duration-800 delay-1000 ease-out ${
              isVisible && !isExiting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
            }`}>
              <div className="text-lg md:text-xl font-medium text-textSecondary tracking-wide">
                — {currentQuote.author}
              </div>
            </cite>
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-1/3 left-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl transition-all duration-2000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}></div>
        <div className={`absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/2 rounded-full blur-3xl transition-all duration-2000 delay-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}></div>
      </div>
    </div>
  );
};

export default QuoteScreen;