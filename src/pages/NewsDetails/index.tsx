import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NewsContext } from '../../contexts/NewsProvider'
import { NewsData } from '../../interfaces/News'
import { Pencil } from 'phosphor-react'
import { EditModal } from './components/EditModal'

export function NewsDetails() {
  const { news } = useContext(NewsContext)
  const [open, setOpen] = useState(false)
  const { id } = useParams()

  if (news.length === 0) {
    return (
      <>
        <div
          role="status"
          className="mt-10 mb-7 border-b border-gray-400 pb-3 shadow animate-pulse dark:border-gray-700"
        >
          <div className="h-8 bg-gray-200 rounded-full dark:bg-gray-700 w-56 mb-4"></div>
          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-56 mb-2.5"></div>

          <span className="sr-only">Loading...</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
      </>
    )
  }

  const selectedNews = news.find((news) => news.id === id) as NewsData

  const releaseDate = new Date(selectedNews.release_date).toLocaleDateString()
  const releaseTime = new Date(selectedNews.release_date).toLocaleTimeString()

  const handleOpenModal = () => {
    setOpen(!open)
  }

  return (
    <>
      <div>
        <div className="mt-10 mb-7 border-b border-gray-400 pb-3 flex justify-between">
          <div>
            <h1 className="font-bold text-4xl mb-2">{selectedNews.title}</h1>
            <div className="flex items-center gap-3">
              <div className="font-bold text-base">{selectedNews.author}</div>
              <time
                className="font-bold text-sm"
                dateTime={selectedNews.release_date}
              >
                {releaseDate} {releaseTime}
              </time>
            </div>
          </div>
          <div>
            <button
              onClick={handleOpenModal}
              className="rounded-full hover:bg-gray-600 transition-all duration-200 ease-out p-1"
            >
              <Pencil size={26} />
            </button>
          </div>
        </div>
        <div>
          <p className="break-all">{selectedNews.content}</p>
        </div>
      </div>

      <EditModal news={selectedNews} open={open} setOpen={setOpen} />
    </>
  )
}
