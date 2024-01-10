const akoolBaseUrl = process.env.AKOOL_BASE_URL;

interface DetectFaceRes {
	error_code: 0;
	error_msg: "SUCCESS";
	landmarks: number[][];
	region: number[];
	trx_id?: string;
}

interface CardImgPresets {
	id: string;
	name: string;
	imgUrl: string;
	faceKeyPoints: string;
}

interface FaceSwapRes {
	code: number;
	msg: string;
	data: {
		_id: string;
		job_id: string;
		url: string;
	};
}

const loveLetterOriginalImgs: CardImgPresets[] = [
	{
		id: "princess",
		name: "Princess",
		imgUrl: "https://cdn.handcraftedgames.co/cards/princess-scan1.jpg",
		faceKeyPoints: "883,848:1043,833:951,916:918,1011",
	},
	{
		id: "guard",
		name: "Guard",
		imgUrl: "https://cdn.handcraftedgames.co/cards/guard-scan1.jpg",
		faceKeyPoints: "904,898:1095,923:1009,1005:912,1095",
	},
];

export async function detectFace(imgUrl: string): Promise<DetectFaceRes> {
	const apiUrl = "https://sg3.akool.com/detect";
	const body = {
		single_face: true,
		image_url: imgUrl,
		img: "",
	};

	// post to face swap
	const response = await fetch(apiUrl, {
		method: "POST",
		headers: {
			Authorization: `Bearer ${process.env.AKOOL_TOKEN}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(body),
	});

	const resJson = await response.json();

	return resJson;
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
	};

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
	);

	const res = await response.json();
	return res;
}

export async function swapFaceToGameCard(
	cardId: string,
	sourceImgUrl: string,
): Promise<FaceSwapRes> {
	const sourceFaceDetect = await detectFace(sourceImgUrl);
	const sourceKeyPoints = sourceFaceDetect.landmarks;

	const sourceX1 = sourceKeyPoints[0][0];
	const sourceY1 = sourceKeyPoints[0][1];
	const sourceX2 = sourceKeyPoints[1][0];
	const sourceY2 = sourceKeyPoints[1][1];
	const sourceX3 = sourceKeyPoints[2][0];
	const sourceY3 = sourceKeyPoints[2][1];
	const sourceX4 = sourceKeyPoints[3][0];
	const sourceY4 = sourceKeyPoints[3][1];

	const sourceOpts = `${sourceX1},${sourceY1}:${sourceX2},${sourceY2}:${sourceX3},${sourceY3}:${sourceX4},${sourceY4}`;
	const gameCard = loveLetterOriginalImgs.find((c) => c.id === cardId);
	if (!gameCard) {
		throw new Error(`Game card not found: ${cardId}`);
	}

	const targetImgUrl = gameCard.imgUrl;
	const targetImgUrlOpts = gameCard.faceKeyPoints;
	const modifyImgUrl = targetImgUrl;

	const faceswapRes = await swapFaces(
		sourceImgUrl,
		sourceOpts,
		targetImgUrl,
		targetImgUrlOpts,
		modifyImgUrl,
		1,
	);

	return faceswapRes;
}
