const saveToken = (token) => localStorage.setItem('TOKEN', token)

const getToken = () => localStorage.getItem('TOKEN')

const removeToken = () => localStorage.clear()

export { saveToken, getToken, removeToken }