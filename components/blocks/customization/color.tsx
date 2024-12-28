'use client'

import {
  Button,
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  Label,
  Select,
} from 'ui'
import { generateColorScheme } from '@/lib/utils/color'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState, type Dispatch, type SetStateAction } from 'react'
import { DiceFaces05Icon } from 'hugeicons-react'
import { createQueryString } from '@/lib/utils/string'
import {
  getColorChannels,
  parseColor,
  type ColorSpace,
} from 'react-aria-components'
import type { Color } from 'react-aria-components'

function CustomizeColor() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [textColor, setTextColor] = useState(
    parseColor(searchParams.get('textColor') || '#000000'),
  )
  const [bgColor, setBgColor] = useState(
    parseColor(searchParams.get('bgColor') || '#FFFFFF'),
  )

  useEffect(() => {
    router.push(
      pathname +
        '?' +
        createQueryString(searchParams, [
          { name: 'textColor', value: textColor.toString('hex') },
          { name: 'bgColor', value: bgColor.toString('hex') },
        ]),
      { scroll: false },
    )
  }, [textColor, bgColor, pathname, router, searchParams])

  const generateRandomColor = () => {
    const color = generateColorScheme()
    setTextColor(parseColor(color.textColor))
    setBgColor(parseColor(color.bgColor))
  }

  return (
    <div className="flex w-full items-end space-x-2">
      <CustomColorPicker
        label="Background color"
        value={bgColor}
        onValueChange={setBgColor}
      />
      <CustomColorPicker
        label="Text color"
        value={textColor}
        onValueChange={setTextColor}
      />
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

interface CustomColorPickerProps {
  label: string
  value: Color
  onValueChange: Dispatch<SetStateAction<Color>>
}
function CustomColorPicker({ label, value: color, onValueChange: setColor }: CustomColorPickerProps) {
  const [isHexFormat, setIsHexFormat] = useState(true)
  const [space, setSpace] = useState<ColorSpace>('hsl')
  return (
    <div className="flex w-full flex-col space-y-2">
      <Label>{label}</Label>
      <ColorPicker
        label={color.toString('hex')}
        value={color}
        onChange={setColor}
      >
        <>
          <ColorArea
            colorSpace="hsb"
            xChannel="saturation"
            yChannel="brightness"
          />
          <ColorSlider
            showOutput={false}
            colorSpace="hsb"
            channel="hue"
            className="w-full"
          />
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
  )
}

export default CustomizeColor
