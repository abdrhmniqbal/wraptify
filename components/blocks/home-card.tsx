import { Button } from 'ui'
import { Card } from 'ui'
import { generateColorScheme } from '@/lib/utils/color'
import Link from 'next/link'
import { ArrowRight01Icon } from 'hugeicons-react'
import type React from 'react'

interface HomeCardProps {
  title: string
  description: string
  icon: React.FC<React.HTMLAttributes<SVGElement>>
  href: string
  query: {
    time_period: string
  }
}

export default function HomeCard({
  title,
  description,
  icon: Icon,
  href,
  query,
}: HomeCardProps) {
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
            <Icon className="size-4" />
          </Button>
          <Card.Title className="group-hover:text-secondary-foreground scroll-m-20 text-2xl font-semibold tracking-tight">
            {title}
          </Card.Title>
          <div className="text-accent-foreground group-hover:text-foreground">
            {description}
          </div>
          <Card.Description className="text-muted-foreground group-hover:text-primary flex items-center">
            <span>Generate now</span>
            <ArrowRight01Icon className="ml-1 size-3 transition-all group-hover:ml-2" />
          </Card.Description>
        </Card.Header>
      </Card>
    </Link>
  )
}
