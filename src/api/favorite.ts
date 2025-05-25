import { useRequest } from '@/utils/useRequest'
import { AddFavoriteInput, FavoriteWithCastle } from '@/types/favorite'

// 新增收藏，回傳一般訊息物件
export function addFavorite(data: AddFavoriteInput) {
  return useRequest<{ message: string }>({
    url: '/favorites',
    method: 'post',
    data,
  })
}

// 取消收藏，回傳一般訊息物件
export function removeFavorite(castleId: number) {
  return useRequest<{ message: string }>({
    url: `/favorites/${castleId}`,
    method: 'delete',
  })
}

// 取得收藏列表，回傳 Favorite 陣列包在物件裡
export function getFavoriteList() {
  return useRequest<{ favorites: FavoriteWithCastle[] }>({
    url: '/favorites',
    method: 'get',
  })
}
