import { NewsProvider } from './contexts/NewsProvider'
import { AppRouter } from './routes'

function App() {
  return (
    <>
      <NewsProvider>
        <AppRouter />
      </NewsProvider>
    </>
  )
}

export default App
