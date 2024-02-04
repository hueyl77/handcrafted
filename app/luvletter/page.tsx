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
					<Link href="/luvletter/8-princess">
						<Image
							src="https://cdn.handcraftedgames.co/luvletter/cards/princess.jpg"
							width={120}
							height={120}
							alt="Princess Image"
						/>
					</Link>
				</Card>

				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">7. Countess (x1)</Text>
					<Link href="/luvletter/7-countess">
						<Image
							src="https://cdn.handcraftedgames.co/luvletter/cards/countess.jpg"
							width={120}
							height={120}
							alt="Countess Image"
						/>
					</Link>
				</Card>
			
				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">6. King (x1)</Text>
					<Link href="/luvletter/6-king">
						<Image
							src="https://cdn.handcraftedgames.co/luvletter/cards/king.jpg"
							width={120}
							height={120}
							alt="King Image"
						/>
					</Link>
				</Card>

				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">5. Prince (x2)</Text>
					<Link href="/luvletter/5-prince">
						<Image
							src="https://cdn.handcraftedgames.co/luvletter/cards/prince.jpg"
							width={120}
							height={120}
							alt="Prince Image"
						/>
					</Link>
				</Card>

				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">4. Handmaid (x2)</Text>
					<Link href="/luvletter/4-handmaid">
						<Image
							src="https://cdn.handcraftedgames.co/luvletter/cards/handmaid.jpg"
							width={120}
							height={120}
							alt="Handmaid Image"
						/>
					</Link>
				</Card>

				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">3. Baron (x2)</Text>
					<Link href="/luvletter/3-baron">
						<Image
							src="https://cdn.handcraftedgames.co/luvletter/cards/baron.jpg"
							width={120}
							height={120}
							alt="Baron Image"
						/>
					</Link>
				</Card>

				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">2. Priest (x2)</Text>
					<Link href="/luvletter/2-priest">
						<Image
							src="https://cdn.handcraftedgames.co/luvletter/cards/priest.jpg"
							width={120}
							height={120}
							alt="Priest Image"
						/>
					</Link>
				</Card>

				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">1. Guard (x5)</Text>
					<Link href="/luvletter/1-guard">
						<Image
							src="https://cdn.handcraftedgames.co/luvletter/cards/guard.jpg"
							width={120}
							height={120}
							alt="Guard Image"
						/>
					</Link>
				</Card>

				<Card className="flex flex-col items-center justify-center">
					<Text className="mb-2">Back of Card</Text>
					<Link href="/luvletter/back">
						<Image
							src="https://cdn.handcraftedgames.co/luvletter/cards/back-1.jpg"
							width={120}
							height={120}
							alt="Back of Card Image"
						/>
					</Link>
				</Card>
				
			</Grid>
			
		</main>
	);
}
