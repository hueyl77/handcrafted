import { Title, Text } from '@tremor/react'
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components"

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Handcrafted Games</Title>
      <div>
        <LoginLink>Sign in</LoginLink>
      </div>

      <Text>Select a game below to get started</Text>

      <div className="mt-8">
        <a href="/luvletter">Luv Letter</a>
      </div>
    </main>
  );
}
