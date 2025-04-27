// 定義可搜尋的參數
export interface GetCastleListParams {
  page?: number
  pageSize?: number
  // name?: string  // 支援搜尋 name
  // type?: string  // 支援搜尋 type
}

// 定義城堡結構
export interface Castle {
  id: number
  name: string
  description: string
  country: string
  type: number
  image_url: string
  build_year: number
  created_at: string
  updated_at: string
  name_zh: string
}

export interface CastleType {
  id: number
  name: string
  description: string
  name_zh: string
}

// 定義回傳的資料結構
export interface GetCastleListResponse {
  list: Castle[]
  total: number
}

export interface CreateCastleListResponse {
  message: string,
  castle: Castle
}

export interface GetCastleTypeResponse {
  list: CastleType[]
}