import { useMutation } from '@tanstack/react-query'
import { NewsService } from '../../services/axios/news'
import { toast } from 'react-hot-toast'
import { AxiosError } from 'axios'

export function useMutationEditNews() {
  const mutation = useMutation({
    mutationFn: NewsService.edit,
    onSuccess: () => toast.success('Notícia atualizada !'),
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
      } else {
        toast.error('Erro ao tentar atualizar a notícia.')
      }
    },
  })

  return mutation
}
