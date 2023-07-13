import { NewsData, NewsPayload } from '../../interfaces/News'
import api from './api'

interface GetPayload {
  data: NewsData[]
}

export const NewsService = {
  getAll: async () => api.get<GetPayload>('news'),
  getById: async (id: string) => api.get(`news/${id}`),
  edit: async (data: NewsData) => {
    return api.patch(`news/${data.id}`, {
      ...data,
    })
  },
  create: async (data: NewsPayload) => {
    return api.post('news', {
      ...data,
    })
  },
  delete: async (id: number) => {
    return api.delete(`news/${id}`)
  },
}
