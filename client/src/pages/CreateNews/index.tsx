import { Controller, useForm } from 'react-hook-form'
import img from '../../assets/undraw_news.svg'
import { DatePicker } from '../../components/DatePicker'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useMutationCreateNews } from '../../shared/hooks/useMutationCreateNews'
import {
  NewsFormSchema,
  newsFormSchema,
} from '../../shared/utils/validationsSchema'
import { Spinner } from '../../components/Spinner'

export function CreateNews() {
  const [releaseDate, setReleaseDate] = useState(new Date().toISOString())
  const { mutate, isLoading } = useMutationCreateNews()

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<NewsFormSchema>({
    resolver: zodResolver(newsFormSchema),
  })

  const handleDateChange = (date: Date) => {
    setReleaseDate(new Date(date).toISOString())
  }

  const onSubmit = (data: NewsFormSchema) => {
    mutate({ ...data, release_date: releaseDate })
  }

  return (
    <div className="lg:mt-22 mt-14 flex items-center justify-center gap-20">
      <div>
        <h1 className="font-medium text-4xl mb-6">Crie uma nova notícia</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
            defaultValue={new Date()}
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
      <div className="md:block hidden">
        <img src={img} className="w-[400px]" alt="" />
      </div>
    </div>
  )
}
