import { encode, decode } from "node-base64-image"

export const encoodeBase = async (url: string, options: any) => {
  return await encode(url, options)
}

export const decodeBase = async (
  image: string,
  fileName: string,
  ext: string
) => {
  return await decode(image, { fname: fileName, ext: ext })
}
