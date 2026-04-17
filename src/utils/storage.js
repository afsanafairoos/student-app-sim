const STORAGE_KEY = 'student_applications'

/**
 * Appends a new application to localStorage
 */
export function saveApplication(application) {
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    existing.push({ ...application, submittedAt: new Date().toISOString() })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existing))
    return true
  } catch (e) {
    console.error('LocalStorage save failed:', e)
    return false
  }
}