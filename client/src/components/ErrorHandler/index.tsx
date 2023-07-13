import { AxiosError } from 'axios'

interface ErrroHandlerProps {
  error: Error
}

export function ErrorHandler({ error }: ErrroHandlerProps) {
  return (
    <div className="flex items-center text-center flex-col gap-2 md:flex-row justify-center mt-14">
      <h1 className="text-2xl md:text-3xl md:border-r border-gray-400 md:pr-4 md:mr-4">
        ERR_BADRESPONSE
      </h1>
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
