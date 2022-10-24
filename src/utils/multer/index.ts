import multer from "multer"

const getNumber = () => {
  let number = Math.floor(Math.random() * 1000000) + 100000
  if (number > 1000000) number -= 100000
  return number
}

const storageImg = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/source/img/board")
  },
  filename: (req, file, cb) => {
    cb(null, `${getNumber()}-${Date.now()}.jpeg`)
  },
})
const uploadImg = multer({ storage: storageImg })

module.exports = { uploadImg }
