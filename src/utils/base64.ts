import { encode, decode } from "node-base64-image"

/**
 *
 * @param url
 * @param options
 * @returns
 */
export const encodeBase = async (url: string, options: any) => {
  return await encode(url, options)
}

/**
 *
 * @param image
 * @param fileName
 * @param ext
 * @returns
 */
export const decodeBase = async (
  image: string,
  fileName: string,
  ext: string
) => {
  return await decode(image, { fname: fileName, ext: ext })
}
