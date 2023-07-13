import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppRouter } from './routes'

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  )
}

export default App
