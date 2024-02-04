const akoolBaseUrl = process.env.AKOOL_BASE_URL

interface DetectFaceRes {
	error_code: 0
	error_msg: "SUCCESS"
	landmarks: number[][]
	region: number[]
	trx_id?: string
}

interface CardImgPresets {
	id: string
	name: string
	imgUrl: string
	faceKeyPoints: string
}

interface FaceSwapRes {
	code: number
	msg: string
	data: {
		_id: string
		job_id: string
		url: string
	}
}

const loveLetterOriginalImgs: CardImgPresets[] = [
	{
		id: "princess",
		name: "Princess",
		imgUrl: "https://cdn.handcraftedgames.co/luvletter/cards/princess.jpg",
		//faceKeyPoints: "x1,y1:x2,y2:x3,y3:x4,y4",
		faceKeyPoints: "371,382:435,373:397,409:387,450",
	},
	{
		id: "countess",
		name: "Countess",
		imgUrl: "https://cdn.handcraftedgames.co/luvletter/cards/countess.jpg",
		faceKeyPoints: "377,398:433,396:412,435:383,463",
	},
	{
		id: "king",
		name: "King",
		imgUrl: "https://cdn.handcraftedgames.co/luvletter/cards/king.jpg",
		faceKeyPoints: "433,506:502,486:488,538:454,573",
	},
	{
		id: "prince",
		name: "Prince",
		imgUrl: "https://cdn.handcraftedgames.co/luvletter/cards/prince.jpg",
		faceKeyPoints: "446,405:517,403:482,432:451,471",
	},
	{
		id: "handmaid",
		name: "Handmaid",
		imgUrl: "https://cdn.handcraftedgames.co/luvletter/cards/handmaid.jpg",
		faceKeyPoints: "314,397:372,409:311,436:306,470",
	},
	{
		id: "baron",
		name: "Baron",
		imgUrl: "https://cdn.handcraftedgames.co/luvletter/cards/baron.jpg",
		faceKeyPoints: "363,352:424,355:380,394:368,424",
	},
	{
		id: "priest",
		name: "Priest",
		imgUrl: "https://cdn.handcraftedgames.co/luvletter/cards/priest.jpg",
		faceKeyPoints: "258,406:329,401:286,452:275,496",
	},
	{
		id: "guard",
		name: "Guard",
		imgUrl: "https://cdn.handcraftedgames.co/luvletter/cards/guard.jpg",
		faceKeyPoints: "375,390:445,400:414,433:377,466",
	},
]

export async function detectFace(imgUrl: string): Promise<DetectFaceRes> {
	const apiUrl = "https://sg3.akool.com/detect"
	const body = {
		single_face: true,
		image_url: imgUrl,
		img: "",
	}

	// post to face swap
	const response = await fetch(apiUrl, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${process.env.AKOOL_TOKEN}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	})

	const resJson = await response.json()

	return resJson
}

export async function swapFaces(
	sourceImgUrl: string, // image to swap in
	sourceImgOpts: string, // faceDetect keypoints as string `x1, y1:x2, y2:x3, y3:x4, y4`
	targetImgUrl: string, // image to be swapped
	targetImgOpts: string, // faceDetecdt keypoints as string `x1, y1:x2, y2:x3, y3:x4, y4`
	modifyImgUrl: string, // result image to place swapped result
	faceEnhance: number,
): Promise<FaceSwapRes> {
	const body = {
		sourceImage: [
			{
				path: sourceImgUrl, // Huey
				// opts is the key points of the face of sourceImage
				// (center of left eye, center of right eye, tip of nose, center of mouth)
				// opts: x1, y1:x2, y2:x3, y3:x4, y4
				opts: sourceImgOpts,
			},
		],
		targetImage: [
			{
				path: targetImgUrl,
				opts: targetImgOpts,
			},
		],
		face_enhance: faceEnhance,
		modifyImage: modifyImgUrl,
	}

	// post to face swap
	const response = await fetch(
		`${akoolBaseUrl}/faceswap/highquality/specifyimage`,
		{
			method: "POST",
			headers: {
				Authorization: `Bearer ${process.env.AKOOL_TOKEN}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		},
	)

	const res = await response.json()
	return res
}

export async function swapFaceToGameCard(
	cardId: string,
	sourceImgUrl: string,
): Promise<FaceSwapRes> {
	const sourceFaceDetect = await detectFace(sourceImgUrl)
	const sourceKeyPoints = sourceFaceDetect.landmarks

	const sourceX1 = sourceKeyPoints[0][0]
	const sourceY1 = sourceKeyPoints[0][1]
	const sourceX2 = sourceKeyPoints[1][0]
	const sourceY2 = sourceKeyPoints[1][1]
	const sourceX3 = sourceKeyPoints[2][0]
	const sourceY3 = sourceKeyPoints[2][1]
	const sourceX4 = sourceKeyPoints[3][0]
	const sourceY4 = sourceKeyPoints[3][1]

	const sourceOpts = `${sourceX1},${sourceY1}:${sourceX2},${sourceY2}:${sourceX3},${sourceY3}:${sourceX4},${sourceY4}`
	const gameCard = loveLetterOriginalImgs.find((c) => c.id === cardId)
	if (!gameCard) {
		throw new Error(`Game card not found: ${cardId}`)
	}

	const targetImgUrl = gameCard.imgUrl
	const targetImgUrlOpts = gameCard.faceKeyPoints
	const modifyImgUrl = targetImgUrl

	const faceswapRes = await swapFaces(
		sourceImgUrl,
		sourceOpts,
		targetImgUrl,
		targetImgUrlOpts,
		modifyImgUrl,
		1,
	)

	return faceswapRes
}
