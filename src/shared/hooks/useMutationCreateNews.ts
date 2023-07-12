import { useMutation } from '@tanstack/react-query'
import { NewsService } from '../../services/axios/news'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export function useMutationCreateNews() {
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: NewsService.create,
    onSuccess: () => {
      toast.success('Notícia criada com sucesso !')
      navigate('/')
    },
    onError: () => toast.error('Erro ao tentar criar a notícia.'),
  })

  return mutation
}
