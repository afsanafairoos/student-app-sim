export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-8 mt-auto">
      <div className="container mx-auto px-4 max-w-4xl text-center text-sm text-edtech-muted">
        <p>© {new Date().getFullYear()} EduApply Simulation. Built for demonstration purposes.</p>
      </div>
    </footer>
  )
}