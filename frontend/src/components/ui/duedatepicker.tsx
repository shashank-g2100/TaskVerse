'use client'

import * as React from "react"
import { DayPicker } from "react-day-picker"
import 'react-day-picker/dist/style.css'
import { format } from "date-fns"

export default function DueDatePicker() {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>()
  const [showCalendar, setShowCalendar] = React.useState(false)

  return (
    <div className="relative w-full">
      <label className="block text-sm font-medium mb-2">Due Date</label>

      <div className="relative">
        <input
          type="text"
          readOnly
          value={selectedDate ? format(selectedDate, "dd/MM/yyyy") : ""}
          onClick={() => setShowCalendar(!showCalendar)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:ring-1 focus:outline-none cursor-pointer"
          placeholder="Select a date"
        />
        <span
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          onClick={() => setShowCalendar(!showCalendar)}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
            <path d="M12 2h-1V0h-2v2H7V0H5v2H4C2.9 2 2 2.9 2 4v8c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 10H4V7h8v5z" />
          </svg>
        </span>
      </div>

      {showCalendar && (
        <div className="absolute z-40 bg-white border border-gray-300 mt-2 rounded shadow-md">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              setSelectedDate(date)
              setShowCalendar(false)
            }}
          />
        </div>
      )}
    </div>
  )
}
