import { useState } from 'react'
import { uploadService } from '../services/upload.service'

export function ImgUploader({changePage, onUploaded = null }) {
  const [imgData, setImgData] = useState({
    imgUrl: null,
    height: 585,
    width: 468,
  })
  const [isUploading, setIsUploading] = useState(false)

  async function uploadImg(ev) {
    setIsUploading(true)
    const { secure_url, height, width } = await uploadService.uploadImg(ev)
    setImgData({ imgUrl: secure_url, width, height })
    changePage()
    setIsUploading(false)

    onUploaded && onUploaded(secure_url)

  }

  function getUploadLabel() {
    if (imgData.imgUrl) return 'Upload Another?'
    return isUploading ? 'Uploading....' : 'Upload Image'
  }

  return (
    <div className="upload-preview">
      {imgData.imgUrl && <img src={imgData.imgUrl} style={{ maxWidth: '200px', float: 'right' }} />}
      <input type="file" onChange={uploadImg} accept="img/*" id="imgUpload" />
      <label className="lable" htmlFor="imgUpload">{getUploadLabel()}</label>
    </div>
  )
}