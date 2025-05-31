import { useRequest } from '@/utils/useRequest'
import { LoginInput, LoginResponse, RegisterInput, RegisterResponse } from '@/types/auth'

export const login = (data: LoginInput) => {
  return useRequest<LoginResponse>({
    url: '/login',
    method: 'post',
    data
  })
}

export const register = (data: RegisterInput) => {
  return useRequest<RegisterResponse>({
    url: '/register',
    method: 'post',
    data
  })
}