import clsx from 'clsx'
import { TextareaHTMLAttributes } from 'react'

interface TextAreaProps {
  error?: boolean
  errorText?: string
  label: string
}

export function TextArea({
  className,
  error,
  errorText,
  label,
  id,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & TextAreaProps) {
  return (
    <div className="flex flex-col gap-1">
      <div>
        <label
          htmlFor={id}
          className="block mb-1 text-sm font-medium text-white"
        >
          {label}
        </label>
        <textarea
          rows={4}
          className={clsx(
            'border p-3 w-full text-sm rounded-lg placeholder:text-slate-200 focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500',
            className,
            error && 'border-rose-500 border-2',
          )}
          placeholder="Write your thoughts here..."
          id={id}
          {...props}
        />
      </div>
      {errorText && (
        <span className="text-sm text-rose-500 font-medium">{errorText}</span>
      )}
    </div>
  )
}
