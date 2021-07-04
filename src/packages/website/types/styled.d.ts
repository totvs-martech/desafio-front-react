import 'styled-components'

import { theme } from '@monorepo/components'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}