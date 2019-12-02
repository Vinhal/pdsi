const saveToken = (token) => localStorage.setItem('TOKEN', token)

const getToken = () => localStorage.getItem('TOKEN')

export { saveToken, getToken }