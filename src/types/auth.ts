export interface User {
  id: number
  username: string
  email: string
  name: string
  created_at: string
  updated_at: string
}

export interface LoginInput {
  identifier: string
  password: string
}

export interface LoginResponse {
  user: User
  token: string
}

export interface RegisterInput {
  username: string
  email: string
  password: string
  name?: string
}

export interface RegisterResponse {
  user: User
  token: string
  message: string
}
