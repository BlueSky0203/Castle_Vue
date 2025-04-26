import api from '@/utils/api'

export const getCastleList = (params) => {
  return api({
    url: '/castles',
    method: 'get',
    params
  })
}