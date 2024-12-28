'use client'

import { Select } from 'ui'
import type { Dispatch, SetStateAction } from 'react'
import type { TimePeriod } from '@/types/api'

interface CustomizeTimePeriodProps {
  timePeriod: string
  setTimePeriod: Dispatch<SetStateAction<TimePeriod>>
}

function CustomizeTimePeriod({
  timePeriod,
  setTimePeriod,
}: CustomizeTimePeriodProps) {
  const timePeriods = [
    { id: 'short_term', name: 'Last month' },
    { id: 'medium_term', name: '6 months ago' },
    { id: 'long_term', name: 'All time' },
  ]

  return (
    <Select
      label="Time Period"
      placeholder="Select a software"
      selectedKey={timePeriod}
      onSelectionChange={(key) => setTimePeriod(key as TimePeriod)}
    >
      <Select.Trigger />
      <Select.List items={timePeriods}>
        {(item) => (
          <Select.Option id={item.id} textValue={item.name}>
            {item.name}
          </Select.Option>
        )}
      </Select.List>
    </Select>
  )
}

export default CustomizeTimePeriod
