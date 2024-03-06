import { Card, Title, Text } from "@tremor/react";
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Vigilstone Chronicles</Title>
      <Text>Online Social Deduction Game (Played through WeChat, Whatsapp, Discord, Forums)</Text>

      <Card className="mt-8">
        <h3 className="font-bold">Chapter 1</h3>

        <h4 className="font-bold">The Founding</h4>

        {/* Intro */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative">
            <Image src="/img/vigil/vigilstone-village.jpg"
              width={512}
              height={512}
              className="rounded-xl border-[5px]"
              alt="Vigilstone Village" />
          </div>
          <div className="relative text-justify pr-8">
            <p>
              Nestled between the gentle slopes of The Three Sisters, the village of Vigilstone is barely visible from the main road.
              A scattering of thatched rooftops mingled with clusters of old oaks and ash trees, seemingly idyllic next to the
              glimmering river Lach.  New, unfinished buildings tell a story of beginnings, and of hope.
            </p>
            <p className="mt-4">
              But not all is as it seems.  A murder in the night.  Surely the spirits of this old new land has infiltrated the village.  The demons kill at night, and walk among the villagers at sunrise.
            </p>
            <p className="mt-4">
              In order for Vigilstone to prosper, the villagers must weed out the demons among them.  They must dispatch the monsters one by one, until the land is safe to thrive once more.
            </p>
          </div>
        </div>

        {/* Rules */}
        <div className="mt-8 leading-2 p-2 sm:p-4 mx-1 md:mx-4">
          <h3 className="font-bold">Rules</h3>

          <ol className="mt-4 leading-8 list-inside list-decimal">
            <li>In Vigil Chronicles, strategic gameplay is key.
              The villagers can claim victory by eliminating all Demon team players or
              successfully completing the <span className="font-bold">town objectives.</span></li>
            <li>The demon Team can seize victory when <span className="font-bold">the number of demons alive
              is equal to or surpasses the number of villagers alive</span> at any point in the game.</li>
            <li><span>The Town&apos;s Objectives are based on the number of villagers and their roles.  If all the buildings of all the existing roles are built, the villagers win.</span>
              <ol className="list-disc ml-8">
                <li>Finish building the Church (activates Priest Ability)</li>
                <li>Finish building the Hospital (activates the Doctor&apos;s Ability)</li>
                <li>Finish building the Watch Tower (activates the Guard&apos;s Ability)</li>
                <li>Finish building the Constable&apos;s Station (activates the Constable&apos;s Ability)</li>
                <li>Finish building the Town Hall (activates the Mayor&apos;s Abilty)</li>
              </ol>
            </li>

            <li>Game cycles between Day and Night phases</li>

            <li>
              <span>Day phase: The whole village, including ghosts,
                decides on one of two events to accomplish that day</span>

              <ul className="list-inside list-disc ml-4">
                <li>Vote to complete one of the objectives: The objective with the most votes by the players (alive or dead), gets executed.</li>
                <li>Vote to hang someone: The player with the most votes by all the players (alive or dead) is hanged.</li>
              </ul>
            </li>

            <li>In the case of ties, nothing happens.  Players can abstain from voting.</li>

            <li>During the night phase, if the corresponding building is built, Villagers can activate their abilities once that night.</li>

            <li>Or a player can choose to grow their powers instead. They level up to the next level right away.  But they cannot do anything else during the night.</li>

            <li>Demons know each other, but villagers do not.</li>

            <li>When a player is killed, their role is not revealed.</li>

            <li>Anyone can chat with each other privately at any time; demons can consult with each other at night before deciding on their actions.</li>

            <li>If you are attacked when injured, you are killed.  If you are hanged, you are killed.  Killed players become ghosts of the town and can still vote during the day phase.  Ghosts do not execute their actions at night.</li>

            <li>Order of abilities executed at night: protection, heal, investigate, guard, attack, sabotage.</li>

            <li>Sabotage action occurs last in the night (this means villagers with the corresponding building can use their abilities that night before the building is sabotaged)</li>

            <li>The game starts during the day phase.</li>
          </ol>
        </div>

        {/* Roles */}
        <div className="mt-8 leading-2 p-2 sm:p-4 mx-1 md:mx-4">
          <div className="mt-4">
            <div className="font-bold">Roles - Villagers:</div>
            Villagers can only use night ability if the corresponding building is built and not
            sabotaged, and the player is alive.
            <br />
            All players start with the Level 1 ability.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-8">
            <div className="relative">
              <Image src="/img/vigil/constable-male.png"
                width={256}
                height={384}
                className="rounded-xl border-[3px]"
                alt="Constable Male" />
            </div>
            <div className="relative">
              <Image src="/img/vigil/constable-female.png"
                width={256}
                height={384}
                className="rounded-xl border-[3px]"
                alt="Constable Female" />
            </div>
            <div className="grid-col col-span-1 md:col-span-4">
              <label className="font-bold">Constable (Constable Station)</label>
              <ol className="mt-4 list-disc list-inside">
                <li>Level 1: Investigate a person.  The answer will be three roles, the real role, and 2 random roles.</li>
                <li>Level 2: Investigate a person.  The answer will be 2 roles: the real role and a random role.</li>
                <li>Level 3: Investigate a person.  The answer will be the real role of that person.</li>
              </ol>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 mt-8">
            <div className="relative">
              <Image src="/img/vigil/doctor-male.png"
                width={256}
                height={384}
                className="rounded-xl border-[3px]"
                alt="Doctor Male" />
            </div>
            <div className="relative">
              <Image src="/img/vigil/doctor-female.png"
                width={256}
                height={384}
                className="rounded-xl border-[3px]"
                alt="Doctor Female" />
            </div>
            <div className="grid-col col-span-1 md:col-span-4">
              <label className="font-bold">Doctor (Hospital)</label>
              <ol className="mt-4 list-disc list-inside">
                <li>Level 1: choose one player to heal if that person is injured,  can not revive dead people</li>
                <li>Level 2: heal two different people</li>
                <li>Level 3: revive a dead person</li>
              </ol>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 mt-8">
            <div className="relative">
              <Image src="/img/vigil/guard-male.png"
                width={256}
                height={384}
                className="rounded-xl border-[3px]"
                alt="Guard Male" />
            </div>
            <div className="relative">
              <Image src="/img/vigil/guard-female.png"
                width={256}
                height={384}
                className="rounded-xl border-[3px]"
                alt="Guard Female" />
            </div>
            <div className="grid-col col-span-1 md:col-span-4">
              <label className="font-bold">Guard (Watch Tower)</label>
              <ol className="mt-4 list-disc list-inside">
                <li>Level 1: Guard a person or a building.  If the target is attacked, they get hurt instead.</li>
                <li>Level 2: Guard themselves and a person or building.  If the person or the building is attacked, they get hurt instead.</li>
                <li>Level 3: Guard any 2 people or buildings.</li>
              </ol>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 mt-8">
            <div className="relative">
              <Image src="/img/vigil/mayor-male.png"
                width={256}
                height={384}
                className="rounded-xl border-[3px]"
                alt="Mayor Male" />
            </div>
            <div className="relative">
              <Image src="/img/vigil/mayor-female.png"
                width={256}
                height={384}
                className="rounded-xl border-[3px]"
                alt="Mayor Female" />
            </div>
            <div className="grid-col col-span-1 md:col-span-4">
              <label className="font-bold">Mayor (Town Hall)</label>
              <ol className="mt-4 list-disc list-inside">
                <li>Level 1: Use a level one power of another villager (the corresponding building has to be intact).</li>
                <li>Level 2: Use a level one or level two power of another villager (the corresponding building has to be in intact).</li>
                <li>Level 3: Use level 1-3 powers of any villagers (the corresponding building has to be in intact).</li>
              </ol>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 mt-8">
            <div className="relative">
              <Image src="/img/vigil/priest-male.png"
                width={256}
                height={384}
                className="rounded-xl border-[3px]"
                alt="Priest Male" />
            </div>
            <div className="relative">
              <Image src="/img/vigil/priest-female.png"
                width={256}
                height={384}
                className="rounded-xl border-[3px]"
                alt="Priest Female" />
            </div>
            <div className="grid-col col-span-1 md:col-span-4">
              <label className="font-bold">Priest (Church)</label>
              <ol className="mt-4 list-disc list-inside">
                <li>Level 1: cast one protection spell (can protect against one attack.
                  If a demon at level 3 attacks the same person twice, the first attack destroys
                  the protection. The second attack will injure the person or kill them if they are
                  already injured)</li>
                <li>Level 2: can cast one protection spell on themselves and one protection spell onanother player</li>
                <li>Level 3: cast two protection spells on the same person or two different people</li>
              </ol>
            </div>
          </div>

          <div className="mt-12">
            <div><div className="font-bold">Roles - Demons:</div>
              <div>
                Demons act like villagers during the day phase.
                During the night phase, each demon can choose one of the following actions:</div>
            </div>

            <ol className="mt-4 list-decimal ml-4 leading-8 ml-4">
              <li>Attack someone.  If that person is not injured, they become injured.  If that person
                is already injured, they are killed.  A villager can not be attacked by more than one demon
                in the same night.</li>
              <li>Sabotage: Choose a building that is already built and sabotage it.  A sabotaged building makes
                the power of its corresponding villager&apos;s power inactive.  It also works against the village&apos;s Objectives.</li>
              <li>Grow their power: Demons start at Power Level 1.  They gain power at each higher level.</li>
            </ol>

            <div className="mt-4">Note: Sabotages happen last during the night
              (e.g. a Priest can still use their ability once if the church is built during the day and is sabotaged
              during the same night).</div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 mt-8">
            <div className="relative">
              <Image src="/img/vigil/demon-male.png"
                width={256}
                height={384}
                className="rounded-xl border-[3px]"
                alt="Demon Male" />
            </div>
            <div className="relative">
              <Image src="/img/vigil/demon-female.png"
                width={256}
                height={384}
                className="rounded-xl border-[3px]"
                alt="Demon Female" />
            </div>
            <div className="grid-col col-span-1 md:col-span-4">
              <label className="font-bold">Demon</label>
              <ol className="mt-4 list-disc list-inside">
                <li>Level 1: Attack 1 person.  If the target is not injured, they become injured.
                  If the target is already injured, they are killed. Can not attack a target that
                  has been attacked by another demon on the same night.</li>
                <li>Level 2: If investigated, they get a random villager role that’s not the constable.
                  They can execute Mind Reading instead of attacking - Pick a person, and their role is revealed to the demon.</li>
                <li>Level 3: Can attack twice, either the same person or two different people.
                  If attacking the same target twice and that person has no protection spell, that person dies.
                  If the person has a protection spell, they are injured.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Card>
    </main>
  )
} 