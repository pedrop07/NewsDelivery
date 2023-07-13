import { Dialog } from '@headlessui/react'
import { Trash } from 'phosphor-react'
import { Modal } from '../../../../components/Modal'
import { NewsData } from '../../../../interfaces/News'
import { useEffect } from 'react'
import { useMutationDeleteNews } from '../../../../shared/hooks/useMutationDeleteNews'
import { Spinner } from '../../../../components/Spinner'

interface DeleteModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  news: NewsData
}

export function DeleteModal({ open, setOpen, news }: DeleteModalProps) {
  const { mutate, isSuccess, isLoading } = useMutationDeleteNews()

  const handleDeleteNews = () => {
    mutate(news.id)
  }

  useEffect(() => {
    if (isSuccess) {
      setOpen(false)
    }
  }, [isSuccess])

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="bg-slate-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-600 sm:mx-0 sm:h-10 sm:w-10">
            <Trash className="h-6 w-6 text-blue-100" />
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <Dialog.Title
              as="h2"
              className="text-base font-semibold leading-6 text-white"
            >
              Deletar notícia
            </Dialog.Title>
            <div className="mt-3">
              <h3>
                Você tem certeza que deseja excluir a notícia:
                <br />
                <span className="font-semibold text-lg">{news.title}</span> ?
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-700 px-4 py-3 sm:flex sm:flex-row-reverse gap-4 sm:px-6">
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 sm:mt-0 sm:w-auto"
          onClick={handleDeleteNews}
        >
          {isLoading ? <Spinner /> : 'Confirmar'}
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm  hover:bg-red-600 sm:mt-0 sm:w-auto"
          onClick={() => setOpen(false)}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  )
}
