import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Pencil, Trash } from 'phosphor-react'
import { EditModal } from './components/EditModal'
import { useQueryNewsDetails } from '../../shared/hooks/useQueryNewsDetails'
import { ErrorHandler } from '../../components/ErrorHandler'
import { DeleteModal } from './components/DeleteModal'

type DetailsParams = {
  id: string
}

export function NewsDetails() {
  const [openEditModal, setOpenEditModal] = useState(false)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const { id } = useParams<DetailsParams>()
  const { isLoadingNews, news, errorNews, isErrorNews, refetch } =
    useQueryNewsDetails(id as string)

  if (isLoadingNews) {
    return (
      <>
        <div
          role="status"
          className="mt-10 mb-7 border-b border-gray-400 pb-3 shadow animate-pulse"
        >
          <div className="h-8 bg-gray-500 rounded-full w-56 mb-4"></div>
          <div className="h-3 bg-gray-500 rounded-full w-56 mb-2.5"></div>

          <span className="sr-only">Loading...</span>
        </div>
        <div className="h-2 bg-gray-500 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full mb-2.5"></div>
        <div className="h-2 bg-gray-500 rounded-full"></div>
      </>
    )
  }

  if (isErrorNews) {
    return <ErrorHandler error={errorNews as Error} />
  }

  const releaseDate = new Date(news.release_date).toLocaleDateString()

  const handleOpenEditModal = () => {
    setOpenEditModal(true)
  }

  const handleOpenDeleteModal = () => {
    setOpenDeleteModal(true)
  }

  return (
    <>
      <div>
        <div className="mt-10 mb-7 border-b border-gray-400 pb-3 flex justify-between">
          <div>
            <h1 className="font-bold text-4xl mb-2">{news.title}</h1>
            <div className="flex items-center gap-3">
              <div className="font-bold text-base">{news.author}</div>
              <time className="font-bold text-sm" dateTime={news.release_date}>
                {releaseDate}
              </time>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleOpenEditModal}
              className="rounded-full hover:bg-gray-600 transition-all duration-200 ease-out p-2"
            >
              <Pencil size={26} />
            </button>
            <button
              onClick={handleOpenDeleteModal}
              className="rounded-full hover:bg-gray-600 transition-all duration-200 ease-out p-2"
            >
              <Trash size={26} />
            </button>
          </div>
        </div>
        <div>
          <p className="break-all">{news.content}</p>
        </div>
      </div>

      <EditModal
        refetch={refetch}
        news={news}
        open={openEditModal}
        setOpen={setOpenEditModal}
      />
      <DeleteModal
        news={news}
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
      />
    </>
  )
}
