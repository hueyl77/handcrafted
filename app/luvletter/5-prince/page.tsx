"use client"

import { Title, Text } from '@tremor/react'
import LuvletterForm from '../../components/luvletter/form'

export default function Page() {

	const cardType = 'prince'

	return (
		<main className="p-4 md:p-10 mx-auto max-w-7xl">
			<Title>LuvLetter Personalized</Title>
			<Text>Create a the {cardType} card.  Add a profile photo and click Create to swap faces with the {cardType}.</Text>
			<LuvletterForm cardType={cardType} />
		</main>
	)
}
