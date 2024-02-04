export interface APIResponse {
    items: Item[];
    totalCount: number;
  }
  
  export interface Item {
    id: number;
    type: string;
    code: string;
    title: string;
    subtitle: string;
    description: string;
    trialPeriod: any;
    installmentPrice: any;
    installmentPeriod: any;
    rating: number;
    startDate: any;
    endDate: any;
    viewType?: string;
    createdAt: string;
    items: Item2[]
    media: Medum2[]
    thumbnail?: Thumbnail
    taggings: Tagging[]
    singleCollections: any[]
  }
  
  export interface Item2 {
    createdAt: string
    updatedAt: string
    deletedAt: any
    uuid: string
    name: string
    body: any
    collectionId: number
    key: string
    seq: number
    entityType: string
    entityId: number
    optionKey: any
    publication: Publication
    prdType: number
  }
  
  export interface Publication {
    id: number
    title: string
    code: string
    productId: number
    prdType: number
    offeringType: string
    rating: number
    isExistResidual: boolean
    isAdult: number
    preface?: string
    prefaceIconUrl?: string
    productName: string
    brandName: string
    media: Medum[]
    isTrial: boolean
    tagsOnImage: string[]
    tagsOnDesc: string[]
    priceInfo: PriceInfo
    discounts: Discount[]
    applyCoupon: boolean
  }
  
  export interface Medum {
    seq: number
    type: string
    uri: string
    mimeType: string
    deviceType: any
  }
  
  export interface PriceInfo {
    price: number
    discountPrice?: number
    discountRate?: number
    couponDiscountPrice?: number
    couponDiscountRate?: number
  }
  
  export interface Discount {
    id: number
    name?: string
    type: string
    calcMethod: string
    value: number
    activeFrom: any
    activeTo: any
    qty: number
    remain?: number
  }
  
  export interface Medum2 {
    createdAt: string
    updatedAt: string
    deletedAt: any
    uuid: string
    mimeType: string
    uri: string
    fileName: string
    objectKey: string
    deviceType: any
    collectionId: number
    seq: number
    itemKey: any
    type: string
  }
  
  export interface Thumbnail {
    createdAt: string
    updatedAt: string
    deletedAt: any
    uuid: string
    mimeType: string
    uri: string
    fileName: string
    objectKey: string
    deviceType: any
    collectionId: number
    seq: number
    itemKey: any
    type: string
  }
  
  export interface Tagging {
    createdAt: string
    updatedAt: string
    deletedAt: any
    collectionId: number
    tagId: number
    isOpen: boolean
    tag: Tag
  }
  
  export interface Tag {
    createdAt: string
    updatedAt: string
    deletedAt: any
    id: number
    code: string
    name: string
    description: any
    type: string
  }
  