export default function Button({ children, isLoading, type = 'button', ...props }) {
  return (
    <button
      type={type}
      disabled={isLoading}
      className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/40 ${
        isLoading 
          ? 'bg-primary-300 cursor-not-allowed' 
          : 'bg-primary-600 hover:bg-primary-700 active:scale-[0.98]'
      }`}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
          </svg>
          Processing...
        </span>
      ) : children}
    </button>
  )
}