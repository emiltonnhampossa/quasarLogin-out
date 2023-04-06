import {ref} from 'vue'

const user = ref(null)
export default function useAuthUser () {
  const login = async ({ email, password }) => {}

  const loginWithSocialProvider = async [provider] => {}

  const logout = async {} => {}

  const isloggIn = {} => {
    return !!userSetter.value
  }

  const register = async ({ email, password, ...meta }) => {}

  
}
