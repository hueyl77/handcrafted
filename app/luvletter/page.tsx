"use client";

import { Card, Grid, Title, Text } from "@tremor/react";
import Link from 'next/link'
import Image from 'next/image';

export default function Page() {
	
	return (
		<main className="p-4 md:p-10 mx-auto max-w-7xl">
			<Title>LuvLetter Personalized</Title>
			<Text>Click a card to upload and swap in your own face.</Text>

			<Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-4 mt-4">
				
				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">8. Princess (x1)</Text>
					<Link href="/luvletter/princess">
						<Image
							src="https://cdn.handcraftedgames.co/cards/princess-scan1.jpg"
							width={120}
							height={120}
							alt="Princess Image"
						/>
					</Link>
				</Card>

				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">7. Countess (x1)</Text>
					<Image
						src="https://cdn.handcraftedgames.co/cards/princess-scan1.jpg"
						width={120}
						height={120}
						alt="Princess Image"
					/>
				</Card>
			
				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">6. King (x1)</Text>
					<Image
						src="https://cdn.handcraftedgames.co/cards/guard-scan1.jpg"
						width={120}
						height={120}
						alt="King Image"
					/>
				</Card>

				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">5. Prince (x2)</Text>
					<Image
						src="https://cdn.handcraftedgames.co/cards/princess-scan1.jpg"
						width={120}
						height={120}
						alt="Princess Image"
					/>
				</Card>

				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">4. Maid (x2)</Text>
					<Image
						src="https://cdn.handcraftedgames.co/cards/princess-scan1.jpg"
						width={120}
						height={120}
						alt="Princess Image"
					/>
				</Card>

				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">3. Baron (x2)</Text>
					<Image
						src="https://cdn.handcraftedgames.co/cards/princess-scan1.jpg"
						width={120}
						height={120}
						alt="Princess Image"
					/>
				</Card>

				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">2. Priest (x2)</Text>
					<Image
						src="https://cdn.handcraftedgames.co/cards/princess-scan1.jpg"
						width={120}
						height={120}
						alt="Princess Image"
					/>
				</Card>

				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">1. Guard (x5)</Text>
					<Image
						src="https://cdn.handcraftedgames.co/cards/guard-scan1.jpg"
						width={120}
						height={120}
						alt="Princess Image"
					/>
				</Card>
				
			</Grid>
			
		</main>
	);
}
