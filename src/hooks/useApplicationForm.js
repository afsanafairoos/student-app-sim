import { useState, useCallback } from 'react'
import { validateFields } from '../utils/validation'
import { saveApplication } from '../utils/storage'

const INITIAL_STATE = {
  name: '', email: '', phone: '', dob: '', gender: '',
  address: '', education: '', course: '', statement: '', file: null
}

export function useApplicationForm() {
  const [formData, setFormData] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }, [errors])

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file && file.size > 5 * 1024 * 1024) { // 5MB limit check
      setErrors(prev => ({ ...prev, file: 'File size must be under 5MB' }))
      return
    }
    setFormData(prev => ({ ...prev, file }))
    if (errors.file) setErrors(prev => ({ ...prev, file: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const validationErrors = validateFields(formData)
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')

    // Simulate network latency
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Simulate random server behavior (75% success)
    const isSuccess = Math.random() > 0.25

    if (isSuccess) {
      // Mock DB save
      saveApplication(formData)
      setStatus('success')
      setStatusMessage('Application submitted successfully! Our admissions team will review it shortly.')
      setFormData(INITIAL_STATE)
    } else {
      setStatus('error')
      setStatusMessage('Submission failed due to a temporary server issue. Please try again.')
    }
  }

  const resetStatus = () => setStatus('idle')

  return {
    formData, errors, status, statusMessage,
    handleChange, handleFileChange, handleSubmit, resetStatus
  }
}