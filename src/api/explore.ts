import api from '@/utils/api'
import { AxiosResponse } from 'axios'

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

// 定義回傳的資料結構
export interface GetCastleListResponse {
  data: Castle[]
  total: number
}

export const getCastleList = (
  params?: GetCastleListParams
): Promise<AxiosResponse<GetCastleListResponse>> => {
  return api({
    url: '/castles',
    method: 'get',
    params,  // 這裡會傳遞 name 和 type 的搜尋參數
  })
}