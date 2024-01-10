import { NextRequest, NextResponse } from 'next/server'
import { Readable } from 'stream'
import https from 'https'
import { pipeline } from 'node:stream/promises';
import { swapFaceToGameCard } from '../akool/route'

export async function POST(request: NextRequest) {
  const data = await request.formData()
  const file: File | null = data.get('princessFaceImg') as unknown as File

  if (!file) {
    throw new Error("Missing Image File")
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  const readStream = Readable.from(buffer)
  const filename = `${Date.now()}-${file.name}`

  const options = {
    method: 'PUT',
    host: 'la.storage.bunnycdn.com',
    path: `/handcrafted-luvletter/user-images/${filename}`,
    headers: {
      AccessKey: process.env.BUNNY_API_KEY,
      'Content-Type': 'application/octet-stream',
    },
  }

  const req = https.request(options, (res) => {
    res.on('data', async (resp) => {
      console.log(resp.toString('utf8'))

      const sourceImgUrl = `https://cdn.handcraftedgames.co/user-images/${filename}`
	    const faceswapRes =  await swapFaceToGameCard("princess", sourceImgUrl); 
      console.log("faceswapRes: ", faceswapRes)
    })
  })

  req.on('error', (error) => {
    console.error("Bunny.net error: ", error)
  })

  // readStream.pipe(req)
  const endPipeline = pipeline(readStream, req);

  let result = await endPipeline;

  return NextResponse.json({
    success: true,
    imgUrl: `https://cdn.handcraftedgames.co/user-images/${filename}`
  })
}