'use client'

import { Select } from 'ui'
import type { TimePeriod } from '@/types/api'
import { useSearchParams, useRouter } from 'next/navigation'
import { createQueryString } from '@/lib/utils/string'

function CustomizeTimePeriod() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const timePeriod =
    (searchParams.get('time_period') as TimePeriod) || 'short_term'
  const timePeriods = [
    { id: 'short_term', name: 'Last month' },
    { id: 'medium_term', name: '6 months ago' },
    { id: 'long_term', name: 'All time' },
  ]

  const handleTimePeriodChange = (newTimePeriod: TimePeriod) => {
    const updatedQuery = createQueryString(searchParams, [
      { name: 'time_period', value: newTimePeriod },
    ])
    router.replace(`?${updatedQuery}`, { scroll: false })
  }

  return (
    <Select
      label="Time Period"
      placeholder="Select a software"
      selectedKey={timePeriod}
      onSelectionChange={(key) => handleTimePeriodChange(key as TimePeriod)}
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
