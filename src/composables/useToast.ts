import { h, render } from 'vue'
import ToastMessage from '@/components/ToastMessage.vue'

type ToastType = 'success' | 'error' | 'info' | 'warning'

export function useToast() {
  return (type: ToastType, message: string, duration?: number) => {
    const container = document.createElement('div')
    document.body.appendChild(container)

    const vnode = h(ToastMessage, {
      type,
      message,
      duration,
      onVanish: () => {
        render(null, container)
        document.body.removeChild(container)
      }
    })

    render(vnode, container)
  }
}
