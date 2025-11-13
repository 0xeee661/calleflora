'use client'

import React, { useCallback, useMemo, useState } from 'react';

interface ISingleSelectData {
  round1: string | null;
  round2: string | null;
  round3: string | null;
}

interface IOptionItem {
  id: string;
  label: string;
}

interface ISingleSelectMultiStepModalProps {
  isOpen: boolean;
  onClose: () => void;
  round1Options: IOptionItem[];
  round2Options: IOptionItem[];
  round3Options: IOptionItem[];
  onComplete?: (data: ISingleSelectData) => void; // optional callback for payload consumption
  topPercent?: number; // vertical offset for desktop/tablet (percentage)
  topPercentMobile?: number; // vertical offset for mobile (percentage)
  topPercent320?: number; // vertical offset for 320px width screens (percentage)
}

export default function SingleSelectMultiStepModal({
  isOpen,
  onClose,
  round1Options,
  round2Options,
  round3Options,
  onComplete,
  topPercent,
  topPercentMobile,
  topPercent320
}: ISingleSelectMultiStepModalProps) {

  const [currentRound, setCurrentRound] = useState<1 | 2 | 3>(1);
  const [data, setData] = useState<ISingleSelectData>({ round1: null, round2: null, round3: null });
  const [computedTopPercent, setComputedTopPercent] = useState<number>(typeof topPercent === 'number' ? topPercent : 50);

  const resetAll = useCallback(() => {
    setCurrentRound(1);
    setData({ round1: null, round2: null, round3: null });
  }, []);

  const handleCancel = useCallback(() => {
    resetAll();
    onClose();
  }, [onClose, resetAll]);

  const getOptions = useCallback((): IOptionItem[] => {
    if (currentRound === 1) return round1Options;
    if (currentRound === 2) return round2Options;
    return round3Options;
  }, [currentRound, round1Options, round2Options, round3Options]);

  const selectedId = useMemo(() => {
    if (currentRound === 1) return data.round1;
    if (currentRound === 2) return data.round2;
    return data.round3;
  }, [currentRound, data]);

  const setSelectedId = useCallback((id: string) => {
    setData(prev => {
      if (currentRound === 1) return { ...prev, round1: prev.round1 === id ? id : id };
      if (currentRound === 2) return { ...prev, round2: prev.round2 === id ? id : id };
      return { ...prev, round3: prev.round3 === id ? id : id };
    });
  }, [currentRound]);

  const canProceed = useMemo(() => !!selectedId, [selectedId]);
  const isFinalRound = currentRound === 3;
  const primaryCtaLabel = isFinalRound ? 'Submit Data' : 'Next';

  const handlePrimary = useCallback(() => {
    if (!canProceed) return;
    if (!isFinalRound) {
      setCurrentRound(prev => (prev + 1) as 1 | 2 | 3);
      return;
    }
    const payload: ISingleSelectData = { ...data };
    if (onComplete) onComplete(payload);
    resetAll();
    onClose();
  }, [canProceed, isFinalRound, data, onClose, onComplete, resetAll]);

  const options = getOptions();
  // Update computed top on mount and on resize for responsiveness
  React.useEffect(() => {
    const updateTop = () => {
      const width = typeof window !== 'undefined' ? window.innerWidth : 1024;
      const is320 = width <= 320;
      const isMobile = width < 1024; // align with lg breakpoint
      if (is320 && typeof topPercent320 === 'number') {
        setComputedTopPercent(topPercent320);
      } else if (isMobile && typeof topPercentMobile === 'number') {
        setComputedTopPercent(topPercentMobile);
      } else if (typeof topPercent === 'number') {
        setComputedTopPercent(topPercent);
      } else {
        setComputedTopPercent(50);
      }
    };
    updateTop();
    window.addEventListener('resize', updateTop);
    return () => window.removeEventListener('resize', updateTop);
  }, [topPercent, topPercentMobile, topPercent320]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 z-40 transition-opacity duration-300
        w-auto"
        onClick={handleCancel}
        aria-hidden="true"
      />

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ">
        
        <div
          className={
            `absolute transform -translate-x-1/2 -translate-y-1/2 bg-[#44021C] 
            border-2 border-white/20 rounded-2xl shadow-2xl max-w-xl md:w-full 
            w-[90%] transform transition-all 
duration-300 backdrop-blur-sm md:pl-0 pl-4 left-[50%] `
          }
          style={{ top: `${computedTopPercent}%` }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="single-step-title"
        >

          <div className="px-6 py-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <h2 id="single-step-title" className="text-xl font-bold text-white">
                Configuration · Step {currentRound} of 3
              </h2>
              <div className="flex gap-2 w-32">
                {[1, 2, 3].map(step => (
                  <div
                    key={step}
                    className={`h-1 flex-1 rounded
                       ${step <= currentRound ? 
                       'bg-white' : 'bg-white/15'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="px-6 py-6 space-y-4 ">
            <p className="text-white/80 text-sm sm:text-base md:text-[17px] lg:text-lg">
              {currentRound === 1 && '¿Con cuál de estos perfiles te identificas mejor?'}
              {currentRound === 2 && '¿Cuánto suman sus ingresos mensuales de tu núcleo familiar?'}
              {currentRound === 3 && '¿Estarías dispuesto(a) a realizar un plan de pagos durante ese periodo?'}
            </p>

            <div className="space-y-3">
              {options.map(opt => {
                const checked = selectedId === opt.id;
                return (
                  <label
                    key={opt.id}
                    className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer border-2 transition-all duration-200 ${
                      checked ? 'border-[#44021C] bg-[#44021C]/10' : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => setSelectedId(opt.id)}
                      className="w-5 h-5 text-white border-2 border-white/50 focus:ring-white focus:ring-2 bg-transparent cursor-pointer rounded accent-[#44021C]"
                    />
                    <span className={`text-sm sm:text-base md:text-[16px] lg:text-lg leading-snug md:leading-normal ${checked ? 'text-white font-medium' : 'text-white/80'}`}>{opt.label}</span>
                  </label>
                );
              })}
            </div>

            {!canProceed && (
              <div className="mt-2 p-3 rounded bg-red-500/10 border-l-2 border-red-500">
                <p className="text-red-300 text-sm">Debes seleccionar una opción para continuar.</p>
              </div>
            )}
          </div>

          <div className="px-6 py-4 border-t border-white/10 
          flex justify-between items-center">
            {currentRound > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentRound(prev => (prev - 1) as 1 | 2 | 3)}
                className="md:px-6 px-2 py-2.5 rounded-lg border-2 border-white/30 
                text-white font-semibold transition-all 
                hover:border-white/50 hover:bg-white/5 md:-ml-0 -ml-6 md:mr-0 mr-4"
              >
                ← Previous
              </button>
            ) : <span />}

            <div className="flex gap-3 items-center">
              <button
                type="button"
                onClick={handleCancel}
                className="md:px-6 px-2 py-2.5 rounded-lg border-2 border-white/30 
                text-white font-semibold transition-all hover:border-white/50 
                hover:bg-white/5"
              >
                Cancel
              </button>

              <button
                type="button"
                onClick={handlePrimary}
                disabled={!canProceed}
                className={`md:px-8 px-5 py-2.5 rounded-lg font-semibold transition-all 
                  disabled:opacity-50 disabled:cursor-not-allowed ${
                  canProceed ? 'bg-white text-[#44021C] hover:shadow-lg' : 'bg-gradient-to-r from-[#44021C]/50 to-[#6d0933]/50 text-white/60'
                }`}
              >
                {primaryCtaLabel}
              </button>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}
