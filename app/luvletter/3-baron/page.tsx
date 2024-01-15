"use client";

import { useState } from "react";
import { ArrowRightCircleIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import { Button, Card, Icon, Title, Text, Grid } from "@tremor/react";

import Image from 'next/image';
import Dropzone from '../../components/dropzone'

export default function Page() {
	const [princessFaceImg, setPrincessFaceImg] = useState<File>();
	const [userPrincessImgUrl, setUserPrincessImgUrl] = useState<string | null>(null);

	const handleOnchangePrincess = (e: React.ChangeEvent<HTMLInputElement>) => {
		const userImgFile = e.target.files?.[0]

		if (userImgFile) {
			setPrincessFaceImg(userImgFile)
			setUserPrincessImgUrl(URL.createObjectURL(userImgFile))
		}
	}	

	const onPrincessSubmit = async () => {
		if (!princessFaceImg) {
			return;
		}

		try {
			console.log("submitting...")
			const data = new FormData()
			data.set('princessFaceImg', princessFaceImg)

			const res = await fetch('/api/upload', {
				method: 'POST',
				body: data
			})

			if (!res.ok) {
				throw new Error(await res.text())
			}

			const resJson = await res.json()
			console.log("resJson: ", resJson)

		} catch (e) {
			console.log(e)
		}
	};

	const handleOnDrop = (acceptedFiles: File[]) => {
		if (acceptedFiles.length == 0) {
			alert("no files detected")
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
						<Icon icon={ArrowRightCircleIcon} className="absolute right-0" size='xl' />
					</div>)}	
        </Card>
      
        <Card className="flex flex-col items-center justify-center">
          <Image
            src="https://cdn.handcraftedgames.co/cards/princess-scan1.jpg"
            width={200}
            height={200}
            alt="Card Princess Image"
          />

					{userPrincessImgUrl && (<div>
						<Icon icon={ArrowRightCircleIcon} className="absolute right-0" size='xl' />
					</div>)}	
        </Card>
        
          <Button size="sm" onClick={onPrincessSubmit}>Create</Button>
      </Grid>
			
		</main>
	);
}
