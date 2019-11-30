const ajaxDownload = (file, fileName, fileExtension) => {
    const url = window.URL.createObjectURL(new Blob([file]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `${fileName}.${fileExtension}`)
    document.body.appendChild(link)
    link.click()
}

export default ajaxDownload
