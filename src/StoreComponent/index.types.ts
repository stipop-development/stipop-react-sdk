export interface StoreProps {
    params: Params
    downloadParams: DownloadParams
    scroll?: boolean
    color?: Color
    onClose?: Function
    size?: Size
    border?: Border
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
}

interface Size {
    width?: number
    height?: number
    previewImg?: number
    detailImg?: number
    mainImg?: number
}

interface Border {
    border?: string
    radius?: number
}