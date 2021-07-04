interface IStory {
  name: string
  resourceURI: string
  type: string
}

interface IComic {
  name: string
  resourceURI: string
}

export interface ICharacter {
  id: number
  name: string
  description: string
  resourceURI: string
  thumbnail: {
    path: string
    extension: string
  },
  stories: {
    available: number
    returned: number
    items: IStory[]
  },
  comics: {
    available: number
    returned: number
    items: IComic[]
  }
}

export interface ICharactersState {
  results: ICharacter[]
  count: number
  limit: number
  offset: number
  total: number
}