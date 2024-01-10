import { ref } from 'vue'

const toast = ref({
  visible: false,
  message: '',
  color: 'green',
})

export default function useToast() {
  function callToast(msg: string, color?: 'green' | 'red') {
    toast.value.visible = true
    toast.value.message = msg
    toast.value.color = color || 'green'
    setTimeout(() => {
      toast.value.visible = false
    }, 8000)
  }

  return {
    callToast,
    toast,
  }
}
