import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ApplicationPage from './pages/ApplicationPage'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <ApplicationPage />
      </main>
      <Footer />
    </div>
  )
}