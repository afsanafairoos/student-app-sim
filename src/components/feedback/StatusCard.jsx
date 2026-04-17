export default function StatusCard({ status, message, onReset }) {
  if (status === 'idle') return null

  const isSuccess = status === 'success'
  return (
    <div className={`rounded-xl border p-6 text-center ${isSuccess ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
      <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${isSuccess ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
        {isSuccess ? (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        ) : (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        )}
      </div>
      <h3 className={`text-lg font-semibold mb-2 ${isSuccess ? 'text-green-800' : 'text-red-800'}`}>
        {isSuccess ? 'Submission Successful' : 'Submission Failed'}
      </h3>
      <p className={`mb-6 text-sm ${isSuccess ? 'text-green-700' : 'text-red-700'}`}>{message}</p>
      <button 
        onClick={onReset}
        className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${isSuccess ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-red-600 text-white hover:bg-red-700'}`}
      >
        {isSuccess ? 'Submit Another Application' : 'Try Again'}
      </button>
    </div>
  )
}