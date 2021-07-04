interface ICharacter {
  name: string
  resourceURI: string
}

interface IComic {
  name: string
  resourceURI: string
}

export interface IStory {
  id: number
  title: string
  description: string
  modified: string
  type: string
  characters: {
    items: ICharacter[]
    available: number
    returned: number
  }
  comics: {
    items: IComic[]
    available: number
    returned: number
  }
  thumbnail?: {
    path: string
    extension: string
  }
}

export interface IStoriesState {
  results: IStory[]
  count: number
  limit: number
  offset: number
  total: number
}