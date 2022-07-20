export interface SearchProps {
  params: Params
  size?: Size
  backgroundColor?: string
  column?: number
  border?: Border
  input?: Input
  scroll?: boolean
  scrollHover?: string
  stickerClick?: Function
  preview?: boolean
  loadingColor?: string
  shadow?: string
  authParams?: Auth
  auth?: string
}

interface Params {
  apikey: string
  userId: string
  lang?: string
  countryCode?: string
  pageNumber?: number
  limit?: number
  default?: string
}

interface Size {
  width?: number
  height?: number
  imgSize?: number
}

interface Border {
  border?: string
  radius?: Radius
}

interface Radius {
  rightTop?: number
  leftTop?: number
  rightBottom?: number
  leftBottom?: number
  all?: number
}

interface Input {
  border?: string
  radius?: number
  backgroundColor?: string
  color?: string
  width?: number
  height?: number
  focus?: string
  search?: string
}

interface Auth {
  appId: string
  clientId: string
  clientSecret: string
  refreshToken: string
  expiryTime: number
}

interface Access {
  apikey: string
  userId: string
  token: string
}