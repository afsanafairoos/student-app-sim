/**
 * Regex patterns for validation
 */
const PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?[\d\s\-()]{7,15}$/,
}

/**
 * Validates form fields against business rules
 * @param {Object} formData
 * @returns {Object} validation errors map
 */
export function validateFields(formData) {
  const errors = {}
  const { name, email, phone, dob, gender, address, education, course, statement } = formData

  if (!name?.trim()) errors.name = 'Full name is required'
  
  if (!email?.trim()) errors.email = 'Email address is required'
  else if (!PATTERNS.email.test(email)) errors.email = 'Invalid email format (e.g., user@example.com)'

  if (!phone?.trim()) errors.phone = 'Phone number is required'
  else if (!PATTERNS.phone.test(phone)) errors.phone = 'Invalid phone format (7-15 digits)'

  if (!dob) errors.dob = 'Date of birth is required'
  if (!gender) errors.gender = 'Please select a gender'
  if (!address?.trim()) errors.address = 'Full address is required'
  if (!education) errors.education = 'Highest qualification is required'
  if (!course) errors.course = 'Please select a course'

  if (!statement?.trim()) errors.statement = 'Personal statement is required'
  else if (statement.length > 500) errors.statement = 'Statement must be 500 characters or less'

  return errors
}