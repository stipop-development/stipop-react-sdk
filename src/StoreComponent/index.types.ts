export interface StoreProps {
  params: Params
  downloadParams: DownloadParams
  scroll?: boolean
  color?: Color
  onClose?: Function
  size?: Size
  border?: Border
  shadow?: string
  useAuth?: boolean
  authParams?: Auth
  auth?: string
}

interface DownloadParams {
  isPurchase: string
  price?: string
  lang?: string
  countryCode?: string
}

interface Params {
  apikey: string
  userId: string
  lang?: string
  countryCode?: string
  animated?: string
  pageNumber?: number
  limit?: number
}

interface Color {
  backgroundColor?: string
  packageHoverColor?: string
  downloadedColor?: string
  downloadedHoverColor?: string
  downloadBtn?: string
  downloadBtnHover?: string
  deleteBtn?: string
  deleteBtnHover?: string
  recoveryBtn?: string
  recoveryBtnHover?: string
  loadingColor?: string
  scrollHover?: string
}

interface Size {
  width?: number
  height?: number
  previewImg?: number
  detailImg?: number
  mainImg?: number
  packageListHeight?: number
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

interface Auth {
  appId: string
  clientId: string
  clientSecret: string
  refreshToken: string
  expiryTime: number
}