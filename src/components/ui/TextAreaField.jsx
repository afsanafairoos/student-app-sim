export default function TextAreaField({ label, name, value, onChange, error, maxLength = 500, ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-edtech-text">
        {label} <span className="text-red-500">*</span>
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        rows={4}
        aria-invalid={!!error}
        className={`w-full rounded-lg border px-3.5 py-2.5 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary-500/40 resize-y ${
          error ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300 focus:border-primary-500'
        }`}
        {...props}
      />
      <div className="flex justify-between items-center mt-1">
        {error ? <p className="text-xs text-red-500" role="alert">{error}</p> : <span />}
        <span className={`text-xs ${value.length >= maxLength ? 'text-red-500 font-medium' : 'text-edtech-muted'}`}>
          {value.length}/{maxLength}
        </span>
      </div>
    </div>
  )
}