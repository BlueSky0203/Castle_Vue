import { useRequest } from '@/utils/useRequest'
import { LoginInput, LoginResponse } from '@/types/auth'

export const login = (data: LoginInput) => {
  return useRequest<LoginResponse>({
    url: '/login',
    method: 'post',
    data
  })
}
