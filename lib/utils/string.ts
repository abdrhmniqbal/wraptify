import type { ReadonlyURLSearchParams } from 'next/navigation'

export const createQueryString = (
  searchParams: ReadonlyURLSearchParams,
  query: { name: string; value: string }[],
) => {
  const params = new URLSearchParams(searchParams.toString())
  query.forEach(({ name, value }) => {
    params.set(name, value)
  })

  return params.toString()
}
