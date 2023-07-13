import { z } from 'zod'

export const newsFormSchema = z.object({
  title: z
    .string({ required_error: 'Título não pode ser vazio.' })
    .min(4, { message: 'Mínimo 4 caracteres.' })
    .max(60, { message: 'Máximo 60 caracteres.' }),
  author: z
    .string({ required_error: 'Nome do Autor não pode ser vazio.' })
    .min(3, { message: 'Mínimo 3 caracteres.' })
    .max(80, { message: 'Máximo 80 caracteres.' })
    .regex(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/, 'Nome inválido'),
  content: z
    .string({ required_error: 'Conteúdo não pode ser vazio.' })
    .min(120, { message: 'Mínimo 120 caracteres.' })
    .max(255, { message: 'Máximo 255 caracteres.' }),
})

export type NewsFormSchema = z.infer<typeof newsFormSchema>
