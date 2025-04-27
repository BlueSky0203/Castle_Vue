import { AxiosRequestConfig } from 'axios'
import api from '@/utils/api'

export async function useRequest<T>(config: AxiosRequestConfig): Promise<T | null> {
  try {
    const response = await api.request<T>(config)
    return response.data
  } catch(error: unknown) {
    if (error instanceof Error) {
      console.log('API error', error.message)
    } else {
      console.log('Unknown Error:', error)
    }
    return null
  }
}