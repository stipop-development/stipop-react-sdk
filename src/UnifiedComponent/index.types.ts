export interface UnifiedProps {
  params: Params
  size?: Size
  border?: Border
  input?: Input
  menu?: Menu
  backgroundColor?: string
  loadingColor?: string
  column?: number
  scroll?: boolean
  scrollHover?: string
  preview?: boolean
  stickerClick?: Function
  storeClick?: Function
  shadow?: string
  auth?: string
  mainLanguage?: string
  store?: boolean
}

interface Params {
  apikey: string
  userId: string
  lang?: string
  countryCode?: string
  pageNumber?: number
  limit?: number
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

interface Menu {
  backgroundColor?: string
  bottomLine?: string
  selectedLine?: string
  height?: number
  listCnt?: number
  arrowColor?: string
  imgSize?: number
}
