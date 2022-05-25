export interface StoreProps {
  params: Params
  size?: Size
  border?: Border
  backgroundColor?: string
  menu?: Menu
  column?: number
  scroll?: boolean
  stickerClick?: Function
  storeClick?: Function
  preview?: boolean
}

interface Params {
  apikey: string
  userId: string
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

interface Menu {
  backgroundColor?: string
  bottomLine?: string
  selectedLine?: string
  height?: number
  listCnt?: number
}