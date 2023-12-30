import { Card, Title, Text, Grid } from "@tremor/react";

export default function Page() {
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>LuvLetter Personalized</Title>
      <Text>Create a personalized LuvLetter game.</Text>

      <Card className="mt-6">
        <div className="h-96" />
      </Card>

      <Grid numItemsMd={2} className="mt-6 gap-6">
        <Card>
          {/* Placeholder to set height */}
          <div className="h-28" />
        </Card>
        <Card>
          {/* Placeholder to set height */}
          <div className="h-28" />
        </Card>
      </Grid>
    </main>
  )
}