export default function FileUploadField({ name, value, onChange, error, ...props }) {
  const fileName = value?.name || 'No file chosen'
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-edtech-text">Upload Transcript (Mock)</label>
      <div className={`flex items-center gap-3 rounded-lg border px-3.5 py-2.5 bg-white transition-all ${
        error ? 'border-red-400 bg-red-50' : 'border-gray-200 hover:border-gray-300'
      }`}>
        <input type="file" id={name} onChange={onChange} className="hidden" accept=".pdf,.doc,.docx" />
        <label htmlFor={name} className="cursor-pointer text-sm text-primary-600 font-medium hover:underline">
          Browse
        </label>
        <span className="text-sm text-edtech-muted truncate">{fileName}</span>
      </div>
      {error && <p className="text-xs text-red-500" role="alert">{error}</p>}
    </div>
  )
}