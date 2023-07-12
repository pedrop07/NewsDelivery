import { useMutation } from '@tanstack/react-query'
import { NewsService } from '../../services/axios/news'
import { toast } from 'react-hot-toast'

export function useMutationEditNews() {
  const mutation = useMutation({
    mutationFn: NewsService.edit,
    onSuccess: () => toast.success('Notícia atualizada !'),
    onError: () => toast.error('Erro ao tentar atualizar a notícia.'),
  })

  return mutation
}
