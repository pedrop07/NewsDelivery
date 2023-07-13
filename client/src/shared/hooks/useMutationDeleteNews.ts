import { useMutation } from '@tanstack/react-query'
import { NewsService } from '../../services/axios/news'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function useMutationDeleteNews() {
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: NewsService.delete,
    onSuccess: () => {
      toast.success('Notícia excluida com sucesso !')
      navigate('/')
    },
    onError: () => toast.error('Erro ao tentar excluir a notícia.'),
  })

  return mutation
}
