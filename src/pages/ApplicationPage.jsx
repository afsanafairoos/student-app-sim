import { useApplicationForm } from '../hooks/useApplicationForm'
import InputField from '../components/ui/InputField'
import SelectField from '../components/ui/SelectField'
import TextAreaField from '../components/ui/TextAreaField'
import FileUploadField from '../components/ui/FileUploadField'
import Button from '../components/ui/Button'
import StatusCard from '../components/feedback/StatusCard'

const GENDER_OPTIONS = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'non_binary', label: 'Non-binary' },
  { value: 'prefer_not', label: 'Prefer not to say' }
]

const EDUCATION_OPTIONS = [
  { value: 'high_school', label: 'High School Diploma' },
  { value: 'associate', label: 'Associate Degree' },
  { value: 'bachelor', label: 'Bachelor\'s Degree' },
  { value: 'master', label: 'Master\'s Degree' }
]

const COURSE_OPTIONS = [
  { value: 'cs', label: 'Computer Science' },
  { value: 'ds', label: 'Data Science' },
  { value: 'design', label: 'UX/UI Design' },
  { value: 'business', label: 'Business Administration' }
]

export default function ApplicationPage() {
  const { formData, errors, status, statusMessage, handleChange, handleFileChange, handleSubmit, resetStatus } = useApplicationForm()

  if (status !== 'idle') {
    return (
      <div className="mx-auto max-w-xl mt-8">
        <StatusCard status={status} message={statusMessage} onReset={resetStatus} />
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-edtech-text sm:text-3xl">Student Application</h1>
        <p className="mt-2 text-edtech-muted">Complete the form below to submit your application. All fields marked with <span className="text-red-500">*</span> are required.</p>
      </div>

      <form onSubmit={handleSubmit} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} placeholder="John Doe" />
          <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} placeholder="john@example.com" />
          <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} placeholder="+1 (555) 000-0000" />
          <InputField label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} error={errors.dob} />
          <SelectField label="Gender" name="gender" value={formData.gender} onChange={handleChange} error={errors.gender} options={GENDER_OPTIONS} />
          <SelectField label="Highest Education" name="education" value={formData.education} onChange={handleChange} error={errors.education} options={EDUCATION_OPTIONS} />
          <div className="sm:col-span-2">
            <InputField label="Street Address" name="address" value={formData.address} onChange={handleChange} error={errors.address} placeholder="123 University Ave, City, ST" />
          </div>
          <SelectField label="Applied Course" name="course" value={formData.course} onChange={handleChange} error={errors.course} options={COURSE_OPTIONS} />
          <FileUploadField name="file" value={formData.file} onChange={handleFileChange} error={errors.file} />
          <div className="sm:col-span-2">
            <TextAreaField label="Personal Statement" name="statement" value={formData.statement} onChange={handleChange} error={errors.statement} placeholder="Why do you want to join this program? What are your academic goals?" />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          {/* <Button type="reset" className="bg-gray-100 text-gray-700 hover:bg-gray-200">Clear Form</Button> */}
          <Button type="submit" isLoading={status === 'loading'}>Submit Application</Button>
        </div>
      </form>
    </div>
  )
}