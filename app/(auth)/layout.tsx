export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex relative items-center justify-center min-h-svh">
      <div className="max-w-lg mx-auto w-full relative">
        <div className="absolute right-0 bottom-0 w-200 h-120 blur-3xl rounded-xl bg-gradient-to-br from-neutral-500 to-gray-500 opacity-5" />
        {children}
      </div>
    </div>
  )
}