interface HeaderProps {
  title: string
  description: string
}
export default function Header({ title, description }: HeaderProps) {
  return (
    <div className="pt-6 pb-8 lg:pb-0">
      <h2 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl">
        {title}
      </h2>
      <p className="text-muted-foreground text-xl">{description}</p>
    </div>
  )
}
