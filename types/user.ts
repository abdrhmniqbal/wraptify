export type User = {
  display_name: string
  external_urls: {
    spotify: string
  }
  followers: {
    href?: string
    total: number
  }
}
