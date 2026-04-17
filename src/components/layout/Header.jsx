export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-4xl">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center text-white font-bold">E</div>
          <span className="text-lg font-bold tracking-tight text-edtech-text">EduApply<span className="text-primary-600">.</span></span>
        </div>
        <nav className="hidden sm:flex gap-6 text-sm font-medium text-edtech-muted">
          <a href="#" className="hover:text-primary-600 transition-colors">Programs</a>
          <a href="#" className="hover:text-primary-600 transition-colors">Admissions</a>
          <a href="#" className="hover:text-primary-600 transition-colors">Campus Life</a>
        </nav>
      </div>
    </header>
  )
}