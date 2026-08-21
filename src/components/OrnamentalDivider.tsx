interface OrnamentalDividerProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function OrnamentalDivider({ className = '', variant = 'light' }: OrnamentalDividerProps) {
  const isDark = variant === 'dark';
  
  return (
    <div className={`flex items-center justify-center gap-3 py-6 my-2 ${className}`}>
      <div className={`h-px w-16 sm:w-24 md:w-32 transition-all ${isDark ? 'bg-[#E4DCC8]/30' : 'bg-[#E4DCC8]'}`} />
      <div className="flex items-center gap-2">
        <span className="text-xs opacity-60">✦</span>
        <span className="text-lg md:text-xl transform hover:scale-110 transition-transform select-none" title="Tradycja beskidzka">
          🏔️
        </span>
        <span className="text-xs opacity-60">✦</span>
      </div>
      <div className={`h-px w-16 sm:w-24 md:w-32 transition-all ${isDark ? 'bg-[#E4DCC8]/30' : 'bg-[#E4DCC8]'}`} />
    </div>
  );
}
