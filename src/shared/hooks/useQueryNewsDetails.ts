import { useQuery } from '@tanstack/react-query'
import { NewsService } from '../../services/axios/news'

export function useQueryNewsDetails(id: string) {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryFn: () => NewsService.getById(id),
    queryKey: [`news:${id}`],
    retry: 2,
    staleTime: 1000 * 60 * 5,
  })

  return {
    news: data?.data,
    isLoadingNews: isLoading,
    isErrorNews: isError,
    errorNews: error,
    refetch,
  }
}
