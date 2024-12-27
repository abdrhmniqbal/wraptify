'use client'

import { Button, Input, Label } from 'ui'
import { generateColorScheme } from '@/lib/utils/color'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { DiceIcon } from 'hugeicons-react'
import { createQueryString } from '@/lib/utils/string'

function CustomizeColor() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [textColor, setTextColor] = useState(
    searchParams.get('textColor') || '#000000',
  )
  const [bgColor, setBgColor] = useState(
    searchParams.get('bgColor') || '#FFFFFF',
  )

  useEffect(() => {
    router.push(
      pathname +
        '?' +
        createQueryString(searchParams, [
          { name: 'textColor', value: textColor },
          { name: 'bgColor', value: bgColor },
        ]),
      { scroll: false },
    )
  }, [textColor, bgColor, pathname, router, searchParams])

  const generateRandomColor = () => {
    const color = generateColorScheme()
    setTextColor(color.textColor)
    setBgColor(color.bgColor)
  }

  return (
    <div className="flex w-full items-end space-x-2">
      <div className="flex w-full flex-col space-y-2">
        <Label>Background color</Label>
        <Input
          placeholder="#000000"
          defaultValue={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </div>
      <div className="flex w-full flex-col space-y-2">
        <Label>Text color</Label>
        <Input
          placeholder="#FFFFFF"
          defaultValue={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </div>
      <Button
        onPress={generateRandomColor}
        size="square-petite"
        className="aspect-square"
      >
        <DiceIcon className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default CustomizeColor
