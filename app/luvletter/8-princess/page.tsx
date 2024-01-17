"use client"

import { useState } from "react"
import { ArrowRightCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import { Button, Card, Icon, Title, Text, Grid } from "@tremor/react"

import Image from 'next/image'
import Dropzone from '../../components/dropzone'

export default function Page() {
	const [princessFaceImg, setPrincessFaceImg] = useState<File>()
	const [userPrincessImgUrl, setUserPrincessImgUrl] = useState<string | null>(null)
	const [generatedImgUrl, setGeneratedImgUrl] = useState<string | null>(null)
	const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

	const handleOnchangePrincess = (e: React.ChangeEvent<HTMLInputElement>) => {
		const userImgFile = e.target.files?.[0]

		if (userImgFile) {
			setPrincessFaceImg(userImgFile)
			setUserPrincessImgUrl(URL.createObjectURL(userImgFile))
		}
	}	

	const onPrincessSubmit = async () => {
		if (!princessFaceImg) {
			return
		}

		try {
			console.log("submitting...")
			setIsSubmitting(true)

			const data = new FormData()
			data.set('princessFaceImg', princessFaceImg)

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
		setPrincessFaceImg(acceptedFiles[0])
		setUserPrincessImgUrl(URL.createObjectURL(acceptedFiles[0]))
  }

	return (
		<main className="p-4 md:p-10 mx-auto max-w-7xl">
			<Title>LuvLetter Personalized</Title>
			<Text>Create a the princess card.  Add a profile photo and click Create to swap faces with the princess.</Text>
			
      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-4 mt-4">
        <Card className="flex flex-col items-center justify-center">
          {!userPrincessImgUrl && (<Dropzone 
						accept={{'image/*': []}}
						maxFiles={1}
						maxSize={(1024 * 1024 * 25)}
						onDrop={handleOnDrop}
					/>)}

					{userPrincessImgUrl && (<div>
						<Image
							src={userPrincessImgUrl}
							width={200}
							height={200}
							alt="User Princess Image"
						/>
						<Icon icon={ArrowRightCircleIcon} className="absolute top-1/2 right-0" size='xl' />
					</div>)}	
        </Card>
      
        <Card className="flex flex-col items-center justify-center">
          <Image
            src="https://cdn.handcraftedgames.co/cards/8-princess.jpg"
            width={200}
            height={200}
            alt="Card Princess Image"
          />

					{userPrincessImgUrl && (<div>
						<Icon icon={ArrowRightCircleIcon} className="absolute top-1/2 right-0" size='xl' />
					</div>)}	
        </Card>
        
          {(!generatedImgUrl && !isSubmitting) && (<Button size="sm" onClick={onPrincessSubmit} disabled={userPrincessImgUrl == null}>Create</Button>)}
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
								alt="Generated Princess Image"
							/>
						</Card>}
      </Grid>
			
		</main>
	)
}
