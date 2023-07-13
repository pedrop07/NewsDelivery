import { AxiosError } from 'axios'

interface ErrroHandlerProps {
  error: Error
}

export function ErrorHandler({ error }: ErrroHandlerProps) {
  return (
    <div className="flex items-center justify-center mt-14">
      {error instanceof AxiosError && (
        <h1 className="text-3xl border-r border-gray-400 pr-4 mr-4">
          {error.code}
        </h1>
      )}
      <h2 className="text-1xl font-light">
        Erro ao buscar as notícias, tente novamente.
      </h2>
    </div>
  )
}
