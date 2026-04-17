export default function Button({
  children,
  isLoading,
  type = 'button',
  variant = 'primary',
  ...props
}) {
  const baseStyles =
    "relative w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed"

  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 active:scale-[0.98] focus:ring-blue-500",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 active:scale-[0.98] focus:ring-gray-400",
    danger:
      "bg-red-500 text-white hover:bg-red-600 active:scale-[0.98] focus:ring-red-400"
  }

  return (
    <button
      type={type}
      disabled={isLoading}
      className={`${baseStyles} ${variants[variant]}`}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white"></span>
          <span>Processing...</span>
        </>
      ) : (
        children
      )}

      {/* subtle shine effect */}
      {!isLoading && (
        <span className="absolute inset-0 rounded-xl opacity-0 hover:opacity-10 bg-white transition-opacity" />
      )}
    </button>
  )
}