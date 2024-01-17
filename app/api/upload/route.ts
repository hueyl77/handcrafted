import { NextRequest, NextResponse } from 'next/server'
import { upload, uploadURL } from '../bunny/route'
import { swapFaceToGameCard } from '../akool/route'
import { isImgUrl, sleep } from '../../../src/utils'

export async function POST(request: NextRequest) {
  const cardTypeName = "princess"

  const data = await request.formData()
  const file: File | null = data.get('princessFaceImg') as unknown as File

  if (!file) {
    throw new Error("Missing Image File")
  }

  const filename = `${Date.now()}-${file.name}`

  const path = `/handcrafted-luvletter/user-images/${filename}`

  await upload(file, path)

  const sourceImgUrl = `https://cdn.handcraftedgames.co/user-images/${filename}`
	const faceswapRes =  await swapFaceToGameCard(cardTypeName, sourceImgUrl);

  const princessFilename = `${Date.now()}-generated-${cardTypeName}.jpg`

  await sleep(1000)

  let isImage = await isImgUrl(faceswapRes.data.url)
  let tries = 1
  const MAX_TRIES = 60

  do {
    await sleep(3000)

    isImage = await isImgUrl(faceswapRes.data.url)
    tries++
  } while (!isImage && tries < MAX_TRIES)

  if (tries === MAX_TRIES) {
    throw new Error("Timed out generating image")
  }
  
  if (isImage) {
    const generatedPath = `/handcrafted-luvletter/transformed/${princessFilename}`
    await uploadURL(faceswapRes.data.url, princessFilename, generatedPath)
  }

  return NextResponse.json({
    success: true,
    imgUrl: `https://cdn.handcraftedgames.co/transformed/${princessFilename}`
  })
}