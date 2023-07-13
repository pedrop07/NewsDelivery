import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import Datepicker from 'tailwind-datepicker-react'

interface DatePickerProps {
  label?: string
  onDateChange?: (date: Date) => void
  defaultValue: Date
}

export function DatePicker({
  label,
  defaultValue,
  onDateChange,
}: DatePickerProps) {
  const [show, setShow] = useState(false)

  const handleChange = (selectedDate: Date) => {
    if (onDateChange) {
      onDateChange(selectedDate)
    }
  }

  const handleClose = (state: boolean) => {
    setShow(state)
  }

  const datePickerOptions = {
    title: label || '',
    autoHide: true,
    todayBtn: false,
    clearBtn: false,
    maxDate: new Date(),
    minDate: new Date('1990-01-01'),
    defaultDate: defaultValue,
    theme: {
      background: 'p-1 md:p-4',
      todayBtn: '',
      clearBtn: '',
      icons: '',
      text: '',
      disabledText: 'cursor-not-allowed',
      input: 'bg-gray-700 border-gray-600 text-white',
      inputIcon: '',
      selected: '',
    },
    icons: {
      prev: () => <CaretLeft size={25} />,
      next: () => <CaretRight size={25} />,
    },
    datepickerClassNames: '',
    language: 'pt',
  }

  return (
    <div>
      {label && (
        <label
          htmlFor={'date'}
          className="block mb-1 text-sm font-medium text-white"
        >
          {label}
        </label>
      )}
      <Datepicker
        onChange={handleChange}
        show={show}
        setShow={handleClose}
        options={datePickerOptions}
      />
    </div>
  )
}
