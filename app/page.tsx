import { Title, Text, Grid, Card } from '@tremor/react'
import Link from 'next/link'
import Image from 'next/image'

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string }
}) {

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Handcrafted Games</Title>

      <Text>Select a game below to get started</Text>

      <Grid numItems={1} numItemsSm={2} numItemsLg={3} className="gap-4 mt-8">

        <Card className="flex flex-col items-center justify-center">
          <Text className="mb-2">Luv Letter</Text>
          <Link href="/luvletter">
            <Image
              src="https://cdn.handcraftedgames.co/luvletter/cards/princess.jpg"
              width={138}
              height={256}
              alt="Princess Image"
            />
          </Link>
        </Card>

        <Card className="flex flex-col items-center justify-center">
          <Text className="mb-2">Vigilstone Chronicles</Text>
          <Link href="/vigil">
            <Image src="/img/vigil/vigilstone-village.jpg"
              width={256}
              height={256}
              className="rounded-xl border-[5px]"
              alt="Vigilstone Village" />
          </Link>
        </Card>

        <Card className="flex flex-col items-center justify-center">
          <Text className="mb-2">Werewolf</Text>
          <Link href="/documents/werewolfgame-rules.pdf">
            <Image src="/img/werewolf/werewolfgame-tilteimg.jpg"
              width={256}
              height={256}
              className="rounded-xl border-[5px]"
              alt="Werewolf Game Village" />
          </Link>
        </Card>
      </Grid>
    </main>
  )
}
