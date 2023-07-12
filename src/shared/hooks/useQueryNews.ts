import { useQuery } from '@tanstack/react-query'
import { NewsService } from '../../services/axios/news'

export function useQueryNews() {
  const { data, isLoading, isError, error } = useQuery({
    queryFn: NewsService.getAll,
    queryKey: ['news'],
    retry: 2,
  })

  return {
    news: data?.data,
    isLoadingNews: isLoading,
    isErrorNews: isError,
    errorNews: error,
  }
}
