import { useRequest } from '@/utils/useRequest'
import { GetCastleListParams, GetCastleListResponse } from '@/types/castle'

export const getCastleList = (params?: GetCastleListParams) => {
  return useRequest<GetCastleListResponse>({
    url: '/castles',
    method: 'get',
    params,
  })
}