export default function InputField({ label, name, type = 'text', value, onChange, error, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-edtech-text">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/40 ${
          error ? 'border-red-400 bg-red-50 focus:ring-red-400' : 'border-gray-200 bg-white hover:border-gray-300 focus:border-primary-500'
        }`}
        {...props}
      />
      {error && <p id={`${name}-error`} className="text-xs text-red-500" role="alert">{error}</p>}
    </div>
  )
}