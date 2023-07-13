import { useMutation } from '@tanstack/react-query'
import { NewsService } from '../../services/axios/news'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

export function useMutationCreateNews() {
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: NewsService.create,
    onSuccess: () => {
      toast.success('Notícia criada com sucesso !')
      navigate('/')
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message)
      } else {
        toast.error('Erro ao tentar criar a notícia.')
      }
    },
  })

  return mutation
}
