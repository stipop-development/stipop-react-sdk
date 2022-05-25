export interface SearchProps {
  params: Params
  size?: Size
  backgroundColor?: string
  column?: number
  border?: Border
  input?: Input
  scroll?: boolean
  stickerClick?: Function
  preview?: boolean
}

interface Params {
  apikey: string
  userId: string
  lang?: string
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
  radius?: number
}

interface Input {
  border?: string
  radius?: number
  backgroundColor?: string
  color?: string
  width?: number
  height?: number
}
