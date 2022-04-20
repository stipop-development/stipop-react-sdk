export interface SearchProps {
  params: Params
  size?: Size
  backgroundColor?: string
  column?: number
  border?: Border
  input?: Input
  stickerClick?: Function
}

interface Params {
  apikey: string
  userId: string
  lang?: string
  pageNumber?: number
  limit?: number
}

interface Size {
  width?: number
  height?: number
}

interface Border {
  border?: string
  radius?: number
}

interface Input {
  border?: string
  radius?: number
  backgroundColor?: string
}
