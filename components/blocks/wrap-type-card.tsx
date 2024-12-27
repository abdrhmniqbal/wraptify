import { Button } from 'ui'
import { Card } from 'ui'
import { generateColorScheme } from '@/lib/utils/color'
import Link from 'next/link'
import { ArrowRight01Icon } from 'hugeicons-react'
import type React from 'react'

interface WrapTypeCardProps {
  title: string
  description: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
  href: string
  query: {
    time_period: string
  }
}

export default function WrapTypeCard({
  title,
  description,
  icon: Icon,
  href,
  query,
}: WrapTypeCardProps) {
  const color = generateColorScheme()
  return (
    <Link
      href={{
        pathname: href,
        query: { bgColor: color.bgColor, textColor: color.textColor, ...query },
      }}
    >
      <Card className="group hover:border-primary hover:bg-secondary">
        <Card.Header>
          <Button size="square-petite" className="mb-1">
            <Icon className="size-4" strokeWidth={2} />
          </Button>
          <Card.Title>{title}</Card.Title>
          <Card.Description className="text-muted-fg group-hover:text-fg">
            {description}
          </Card.Description>
          <Card.Content className="text-fg group-hover:text-primary flex items-center p-0 pt-2 text-sm">
            <span>Generate now</span>
            <ArrowRight01Icon className="ml-1 size-3 transition-all group-hover:ml-2" />
          </Card.Content>
        </Card.Header>
      </Card>
    </Link>
  )
}
