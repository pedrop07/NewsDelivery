import axios, { AxiosError } from 'axios'
import { createContext, useState, useEffect, ReactNode } from 'react'
import toast from 'react-hot-toast'
import { NewsData } from '../../interfaces/News'

interface Props {
  children: ReactNode
}

interface NewsContextType {
  news: NewsData[]
  setNews: React.Dispatch<React.SetStateAction<NewsData[]>>
}

export const NewsContext = createContext({} as NewsContextType)

export function NewsProvider({ children }: Props) {
  const [news, setNews] = useState<NewsData[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get<NewsData[]>(
          'http://localhost:3000/news',
        )

        setNews(data)
      } catch (error) {
        if (error instanceof AxiosError) toast.error(error.message)
        else toast.error('Erro ao buscar os dados, tente novamente mais tarde.')
      }
    }

    fetchData()
  }, [])

  return (
    <NewsContext.Provider
      value={{
        news,
        setNews,
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}
