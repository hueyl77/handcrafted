import { Title, Text } from '@tremor/react';

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Dashboard</Title>
      <Text>Select a game below to get started</Text>

      <div className="mt-8">
        <a href="/luvletter">Luv Letter</a>
      </div>
    </main>
  );
}
