import { Dialog } from '@headlessui/react'
import { Pencil } from 'phosphor-react'
import { Modal } from '../../../../components/Modal'
import { Input } from '../../../../components/Input'
import { TextArea } from '../../../../components/TextArea'
import { NewsData } from '../../../../interfaces/News'
import { DatePicker } from '../../../../components/DatePicker'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useMutationEditNews } from '../../../../shared/hooks/useMutationEditNews'
import {
  NewsFormSchema,
  newsFormSchema,
} from '../../../../shared/utils/validationsSchema'
import { Spinner } from '../../../../components/Spinner'

interface EditModalProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  news: NewsData
  refetch: () => void
}

export function EditModal({ open, setOpen, news, refetch }: EditModalProps) {
  const [newReleaseDate, setNewReleaseDate] = useState(news.release_date)
  const { mutate, isSuccess, isLoading } = useMutationEditNews()

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<NewsFormSchema>({
    resolver: zodResolver(newsFormSchema),
    defaultValues: {
      title: news.title,
      author: news.author,
      content: news.content,
    },
  })

  const handleDateChange = (date: Date) => {
    setNewReleaseDate(new Date(date).toISOString())
  }

  const onSubmit = (data: NewsFormSchema) => {
    mutate({ ...data, id: news.id, release_date: newReleaseDate })
  }

  useEffect(() => {
    if (isSuccess) {
      setOpen(false)
      refetch()
    }
  }, [isSuccess])

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="bg-slate-800 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
        <div className="sm:flex sm:items-start">
          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 sm:mx-0 sm:h-10 sm:w-10">
            <Pencil className="h-6 w-6 text-blue-100" />
          </div>
          <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
            <Dialog.Title
              as="h3"
              className="text-base font-semibold leading-6 text-white"
            >
              Editar informações da notícia
            </Dialog.Title>
            <div className="mt-3">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-4"
              >
                <div className="grid gap-6 md:grid-cols-2">
                  <Controller
                    control={control}
                    name="title"
                    render={({ field }) => (
                      <Input
                        type="text"
                        id="title"
                        label="Título"
                        required
                        error={!!errors.title?.message}
                        errorText={errors.title?.message as string}
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    control={control}
                    name="author"
                    render={({ field }) => (
                      <Input
                        type="text"
                        id="author"
                        label="Autor"
                        required
                        error={!!errors.author?.message}
                        errorText={errors.author?.message as string}
                        {...field}
                      />
                    )}
                  />
                </div>

                <DatePicker
                  label="Data de publicação"
                  defaultValue={new Date(news.release_date)}
                  onDateChange={handleDateChange}
                />

                <Controller
                  control={control}
                  name="content"
                  render={({ field }) => (
                    <TextArea
                      id="content"
                      label="Conteúdo"
                      required
                      error={!!errors.content?.message}
                      errorText={errors.content?.message as string}
                      {...field}
                    />
                  )}
                />

                <button
                  type="submit"
                  className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                >
                  {isLoading ? <Spinner /> : 'Enviar'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-sm  hover:bg-red-700 sm:mt-0 sm:w-auto"
          onClick={() => setOpen(false)}
        >
          Cancelar
        </button>
      </div>
    </Modal>
  )
}
