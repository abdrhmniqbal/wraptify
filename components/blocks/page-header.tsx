import { Heading, Description } from 'ui'

interface HeaderProps {
  title: string
  description: string
}
export default function PageHeader({ title, description }: HeaderProps) {
  return (
    <div className="pt-6 pb-8 lg:pb-0">
      <Heading level={1} className="text-4xl sm:text-4xl md:text-5xl">
        {title}
      </Heading>
      <Description className="text-lg sm:text-lg md:text-xl">
        {description}
      </Description>
    </div>
  )
}
