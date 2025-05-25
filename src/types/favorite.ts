import { Castle } from '@/types/castle'

export interface Favorite {
  id: number,
  user_id: number,
  castle_id: number,
  type: number // 1: 收藏中, 0: 已取消
}

export interface AddFavoriteInput {
  castle_id: number
}

export interface FavoriteWithCastle extends Favorite {
  castle: Castle
}