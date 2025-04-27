import { useRequest } from '@/utils/useRequest'
import { Castle, CreateCastleListResponse, CreateCastleImageResponse } from '@/types/castle'

export const createCastleList = (data: Castle) => {
  return useRequest<CreateCastleListResponse>({
    url: '/create-castle',
    method: 'post',
    data,
  })
}

export const uploadCastleImage = (file: File) => {
  const formData = new FormData()
  formData.append('image', file)

  return useRequest<CreateCastleImageResponse>({
    url: '/upload-castle-image',
    method: 'post',
    data: formData,
  })
}