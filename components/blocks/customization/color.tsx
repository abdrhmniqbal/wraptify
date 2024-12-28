'use client'

import { Button, ColorArea, ColorField, ColorPicker, Label, Select } from 'ui'
import { generateColorScheme } from '@/lib/utils/color'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { DiceFaces05Icon } from 'hugeicons-react'
import { createQueryString } from '@/lib/utils/string'
import {
  getColorChannels,
  parseColor,
  type ColorSpace,
} from 'react-aria-components'

function CustomizeColor() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isHexFormat, setIsHexFormat] = useState(true)
  const [textColor, setTextColor] = useState(
    parseColor(searchParams.get('textColor') || '#000000'),
  )
  const [bgColor, setBgColor] = useState(
    parseColor(searchParams.get('bgColor') || '#FFFFFF'),
  )
  const [space, setSpace] = useState<ColorSpace>('hsl')

  useEffect(() => {
    router.push(
      pathname +
        '?' +
        createQueryString(searchParams, [
          { name: 'textColor', value: textColor.toString(space) },
          { name: 'bgColor', value: bgColor.toString(space) },
        ]),
      { scroll: false },
    )
  }, [textColor, bgColor, pathname, router, searchParams, space])

  const generateRandomColor = () => {
    const color = generateColorScheme()
    setTextColor(parseColor(color.textColor))
    setBgColor(parseColor(color.bgColor))
  }

  return (
    <div className="flex w-full items-end space-x-2">
      <div className="flex w-full flex-col space-y-2">
        <Label>Background color</Label>
        <ColorPicker
          label={bgColor.toString('hex')}
          value={bgColor}
          onChange={setBgColor}
        >
          <>
            <ColorArea />
            <Select
              aria-label="Color Space"
              selectedKey={isHexFormat ? 'hex' : space}
              defaultSelectedKey="hex"
              onSelectionChange={(s) => {
                setSpace(s as ColorSpace)
                setIsHexFormat(s === 'hex')
              }}
            >
              <Select.Trigger />
              <Select.List>
                {['rgb', 'hex', 'hsl', 'hsb'].map((s) => (
                  <Select.Option key={s} id={s} textValue={s}>
                    {s}
                  </Select.Option>
                ))}
              </Select.List>
            </Select>
            {isHexFormat ? (
              <ColorField aria-label="Hex color" colorSpace={space} />
            ) : getColorChannels(space).length > 0 ? (
              <div className="flex gap-2 sm:max-w-56">
                {getColorChannels(space).map((channel) => (
                  <ColorField
                    colorSpace={space}
                    channel={channel}
                    key={channel}
                  />
                ))}
              </div>
            ) : null}
          </>
        </ColorPicker>
      </div>
      <div className="flex w-full flex-col space-y-2">
        <Label>Text color</Label>
        <ColorPicker
          label={textColor.toString('hex')}
          value={textColor}
          onChange={setTextColor}
        >
          <>
            <ColorArea />
            <Select
              aria-label="Color Space"
              selectedKey={isHexFormat ? 'hex' : space}
              defaultSelectedKey="hex"
              onSelectionChange={(s) => {
                setSpace(s as ColorSpace)
                setIsHexFormat(s === 'hex')
              }}
            >
              <Select.Trigger />
              <Select.List>
                {['rgb', 'hex', 'hsl', 'hsb'].map((s) => (
                  <Select.Option key={s} id={s} textValue={s}>
                    {s}
                  </Select.Option>
                ))}
              </Select.List>
            </Select>
            {isHexFormat ? (
              <ColorField aria-label="Hex color" colorSpace={space} />
            ) : getColorChannels(space).length > 0 ? (
              <div className="flex gap-2 sm:max-w-56">
                {getColorChannels(space).map((channel) => (
                  <ColorField
                    colorSpace={space}
                    channel={channel}
                    key={channel}
                  />
                ))}
              </div>
            ) : null}
          </>
        </ColorPicker>
      </div>
      <Button
        onPress={generateRandomColor}
        size="square-petite"
        className="aspect-square"
      >
        <DiceFaces05Icon data-slot="icon" strokeWidth={2} />
      </Button>
    </div>
  )
}

export default CustomizeColor
