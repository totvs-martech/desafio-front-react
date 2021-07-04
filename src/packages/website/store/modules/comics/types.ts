interface IStory {
  name: string
  resourceURI: string
  type: string
}

interface ICharacter {
  name: string
  resourceURI: string
}

interface IPrice {
  price: number
  type: string
}

export interface IComic {
  id: number
  title: string
  description: string
  prices: IPrice[]
  thumbnail?: {
    path: string
    extension: string
  }
  stories: {
    available: number
    returned: number
    items: IStory[]
  },
  characters: {
    items: ICharacter[]
    available: number
    returned: number
  }
}

export interface IComicsState {
  results: IComic[]
  count: number
  limit: number
  offset: number
  total: number
}