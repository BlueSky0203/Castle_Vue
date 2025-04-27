import { useRequest } from '@/utils/useRequest'
import { GetCastleListParams, GetCastleListResponse, GetCastleTypeResponse } from '@/types/castle'

export const getCastleList = (params?: GetCastleListParams) => {
  return useRequest<GetCastleListResponse>({
    url: '/castles',
    method: 'get',
    params,
  })
}

export const getCastleType = () => {
  return useRequest<GetCastleTypeResponse>({
    url: '/castle-types',
    method: 'get'
  })
}