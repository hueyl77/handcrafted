import { useState } from "react"
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline"
import { Button, Card, Icon, Title, Text, Grid } from "@tremor/react"

import Image from 'next/image'
import Dropzone from "../dropzone"

export default function Form(props: {cardType: string}) {
	const [faceImg, setFaceImg] = useState<File>()
	const [userImgUrl, setUserImgUrl] = useState<string | null>(null)
	const [generatedImgUrl, setGeneratedImgUrl] = useState<string | null>(null)
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const { cardType } = props

	const onSubmit = async () => {
		if (!faceImg) {
			return
		}

		try {
			console.log("submitting...")
			setIsSubmitting(true)

			const data = new FormData()
			data.set('faceImg', faceImg)
      data.set('cardType', cardType)

			const res = await fetch('/api/upload', {
				method: 'POST',
				body: data
			})

			if (!res.ok) {
				setIsSubmitting(false)
				throw new Error(await res.text())
			}

			const resJson = await res.json()
			
			setGeneratedImgUrl(resJson.imgUrl)
			setIsSubmitting(false)

		} catch (e) {
			console.log(e)
		}
	}

	const handleOnDrop = (acceptedFiles: File[]) => {
		if (acceptedFiles.length == 0) {
			alert("Invalid file")
			return
		}
		setFaceImg(acceptedFiles[0])
		setUserImgUrl(URL.createObjectURL(acceptedFiles[0]))
  }

	return (
		<>
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-4 mt-4">
        <Card className="flex flex-col items-center justify-center">
          {!userImgUrl && (<Dropzone 
						accept={{'image/*': []}}
						maxFiles={1}
						maxSize={(1024 * 1024 * 25)}
						onDrop={handleOnDrop}
					/>)}

					{userImgUrl && (<div>
						<Image
							src={userImgUrl}
							width={200}
							height={200}
							alt={`User ${cardType} Image`}
						/>
						<Icon icon={ArrowRightCircleIcon} className="absolute top-1/2 right-0" size='xl' />
					</div>)}	
        </Card>
      
        <Card className="flex flex-col items-center justify-center">
          <Image
            src={`https://cdn.handcraftedgames.co/luvletter/cards/${cardType}.jpg`}
            width={200}
            height={200}
            alt="Card Image"
          />

					{userImgUrl && (<div>
						<Icon icon={ArrowRightCircleIcon} className="absolute top-1/2 right-0" size='xl' />
					</div>)}	
        </Card>
        
          {(!generatedImgUrl && !isSubmitting) && (<Button size="sm" onClick={onSubmit} disabled={userImgUrl == null}>Create</Button>)}
					{(!generatedImgUrl && isSubmitting) && (
						<Card className="flex items-center justify-center">
							<Text>Generating Image ...</Text>
						</Card>)}
					{generatedImgUrl && 
						<Card className="flex items-center justify-center">
							<Image
								src={generatedImgUrl}
								width={200}
								height={200}
								alt="Generated Image"
							/>
						</Card>}
      </Grid>
		</>
	)
}
