import { NewsData } from '../../interfaces/News'
import api from './api'

export const NewsService = {
  getAll: async () => api.get<NewsData[]>('news'),
  getById: async (id: string) => api.get(`news/${id}`),
  edit: async (data: NewsData) => {
    return api.patch(`news/${data.id}`, {
      ...data,
    })
  },
  create: async (data: NewsData) => {
    return api.post('news', {
      ...data,
    })
  },
  delete: async (id: string) => {
    return api.delete(`news/${id}`)
  },
}
