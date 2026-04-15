import { LanguageProvider } from './contexts/LanguageContext'
import AppRoutes from './routes'

function App() {
  return (
    <LanguageProvider>
      <AppRoutes />
    </LanguageProvider>
  )
}

export default App
