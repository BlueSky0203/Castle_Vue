import api from '@/utils/api'
import { AxiosResponse } from 'axios'
import { GetCastleListParams, GetCastleListResponse } from '@/types/castle'

export const getCastleList = (
  params?: GetCastleListParams
): Promise<AxiosResponse<GetCastleListResponse>> => {
  return api({
    url: '/castles',
    method: 'get',
    params,
  })
}