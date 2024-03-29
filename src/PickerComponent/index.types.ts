export interface PickerProps {
  params: Params
  size?: Size
  border?: Border
  backgroundColor?: string
  menu?: Menu
  column?: number
  scroll?: boolean
  scrollHover?: string
  stickerClick?: Function
  storeClick?: Function
  preview?: boolean
  loadingColor?: string
  shadow?: string
  auth?: string
  mainLanguage?: string
  store?: boolean
}

interface Params {
  apikey: string
  userId: string
  lang?: string
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

interface Menu {
  backgroundColor?: string
  bottomLine?: string
  selectedLine?: string
  height?: number
  listCnt?: number
  arrowColor?: string
  imgSize?: number
}

