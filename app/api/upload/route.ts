import { NextRequest, NextResponse } from 'next/server'
import { upload, uploadURL } from '../bunny/route'
import { swapFaceToGameCard } from '../akool/route'
import { isImgUrl, sleep } from '../../../lib/utils'

import { PrismaClient } from '@prisma/client'

export async function POST(request: NextRequest) {

  const data = await request.formData()
  const file: File | null = data.get('faceImg') as unknown as File
  const cardType: string = data.get('cardType') as string

  if (!file) {
    throw new Error("Missing Image File")
  }

  const filename = `${Date.now()}-${file.name}`

  const path = `/handcrafted/luvletter/user-images/${filename}`

  const uploadRes = await upload(file, path)

  const sourceImgUrl = `https://cdn.handcraftedgames.co/luvletter/user-images/${filename}`
	const faceswapRes =  await swapFaceToGameCard(cardType, sourceImgUrl);

  const cardFilename = `${Date.now()}-generated-${cardType}.jpg`

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

  const generatedUrl = `https://cdn.handcraftedgames.co/luvletter/transformed/${cardFilename}`
  
  if (isImage) {
    const generatedPath = `/handcrafted/luvletter/transformed/${cardFilename}`
    await uploadURL(faceswapRes.data.url, cardFilename, generatedPath)

    const prisma = new PrismaClient()
    await prisma.luvletter_generated_cards.create({
      data: {
        user_id: 'huey@legitimize.io',
        name: cardType,
        status: 'completed',
        url: generatedUrl,
      },
    })
  }

  return NextResponse.json({
    success: true,
    imgUrl: generatedUrl
  })
}