export type TimePeriod = 'short_term' | 'medium_term' | 'long_term'

export type Track = {
  id: string
  name: string
  popularity: number
  disc_number: number
  track_number: number
  duration_ms: number
  explicit: boolean
  type: string
  uri: string
  is_local: boolean
  artists: SimplifiedArtist[]
  album: Album
}

export type Artist = SimplifiedArtist & {
  genres: string[]
  images: Image[]
}

export type Image = {
  url: string
  height: number
  width: number
}

export type SimplifiedArtist = {
  id: string
  name: string
  type: string
  uri: string
}

export type Album = {
  id: string
  name: string
  type: string
  album_type: string
  total_tracks: number
  release_date: string
  images: Image[]
  release_date_precision: 'year' | 'month' | 'day'
  uri: string
  artists: SimplifiedArtist[]
}
