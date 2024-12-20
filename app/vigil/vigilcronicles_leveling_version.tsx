import { Card, Title, Text } from "@tremor/react"
import Image from "next/image"

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

            <p className="mt-12 text-left">
              Email hueyl77@gmail.com
              <br />for questions, comments, or suggestions!
              <br />Thanks!
            </p>
          </div>
        </div>

        {/* Rules */}
        <div className="mt-8 leading-2 p-2 sm:p-4 mx-1 md:mx-4">
          <h3 className="font-bold">Rules</h3>

          <ol className="mt-4 leading-8 list-inside list-none">
            <li>1. In Vigil Chronicles, strategic gameplay is key.
              The villagers can claim victory by eliminating all Demon team players or
              successfully completing the <span className="font-bold">town objectives.</span></li>
            <li className="mt-3">2. The demon Team can seize victory when <span className="font-bold">the number of demons alive
              is equal to or surpasses the number of villagers alive</span> at any point in the game.</li>
            <li className="mt-3">3. A moderator is required to run the game.  They will assign random roles to the players, instruct the players
              to wake up at night to execute their powers, moderate votings during the day, and keep track of the state of the game.
            </li>

            <li className="my-4">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
                <span className="md:col-span-4">
                  <p>4. The <i>Town&aposs Objectives</i> are based on the number of villagers and their roles.</p>
                  <p className="ml-4">If all the buildings of all the existing roles are built, the villagers win.</p>
                  <ol className="list-disc ml-8">
                    <li>Finish building the Church (activates Priest Power)</li>
                    <li>Finish building the Hospital (activates the Doctor&aposs Power)</li>
                    <li>Finish building the Watch Tower (activates the Guard&aposs Power)</li>
                    <li>Finish building the Constable&aposs Station (activates the Constable&aposs Power)</li>
                    <li>Finish building the Town Hall (activates the Mayor&aposs Abilty)</li>
                  </ol>
                </span>

                <div className="md:col-span-2">
                  <Image src="/img/vigil/unfinished-church.png"
                    width={512}
                    height={512}
                    className="rounded-xl border-[5px]"
                    alt="Incomplete church" />
                </div>
              </div>
            </li>

            <li className="mt-3">5. The game cycles between Day and Night phases</li>

            <li className="my-4">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
                <span className="md:col-span-4 md:pr-[100px]">
                  <p>6. <strong>Day phase:</strong> The whole village, including ghosts,
                    decides which event to accomplish that day: hang a person or complete an objective.</p>

                  <ul className="list-inside list-disc ml-4 md:pr-[100px]">
                    <li>Vote to complete one of the objectives: The objective with the most votes by the players (alive or dead), gets executed.</li>
                    <li>Vote to hang someone: The player with the most votes by all the players (alive or dead) is hanged.</li>
                    <li>In the case of ties, nothing happens.  Players can abstain from voting.</li>
                  </ul>

                  <div className="mt-4">
                    7. <strong>Night Phase:</strong> During the night phase, if the corresponding building is built,
                    <br />Villagers can activate their powers once that night.
                    <br /><br />Demons can choose their actions based on their levels,
                    without a need for corresponding buildings to be built.
                    <br /><br />Note: a player can not be attacked by more than one demon per night.  But a player
                    can be attacked twice by the same demon (if it is a level 3 demon).
                  </div>
                </span>


                <div className="md:col-span-2">
                  <Image src="/img/vigil/village-square-hangman.png"
                    width={512}
                    height={512}
                    className="rounded-xl border-[5px]"
                    alt="Incomplete church" />
                </div>
              </div>
            </li>

            <li className="mt-10">8. Or a player can choose to grow their powers instead. They level up to the next level right away.  But they cannot do anything else during the night.</li>

            <li className="mt-3">9. Demons know each other, but villagers do not.</li>

            <li className="mt-3">10. When a player is killed, their role is not revealed.</li>

            <li className="mt-3">11. Anyone can chat with each other privately at any time demons can consult with each other at night before deciding on their actions.</li>

            <li className="mt-3">12. If you are attacked when injured, you are killed.  If you are hanged, you are killed.  Killed players become ghosts of the town and can still vote and talk during the day phase.  Ghosts do not execute their actions at night.</li>

            <li className="mt-3">13. Order of powers executed at night: protection, heal, investigate, guard, attack, sabotage.</li>

            <li className="mt-3">14. Sabotage action occurs last in the night (this means villagers with the corresponding building can use their powers that night before the building is sabotaged)</li>

            <li className="mt-3">15. When telling the moderator who to attack, heal, guard, protect, or hang, use the player&aposs name (not their roles).</li>

            <li className="mt-3">16. The moderator can tell the doctor, priest, or guard which players are injured when asking for a decision on who to heal, protect, or guard.
              e.g. Player X is injured, would you like to heal them?  Or, Player X and Player Y are injured, would you like to heal them?</li>

            <li>18. On each new day, the Moderator should announce which buildings are built and still intact. And which players were injured or killed in the night (don&apost say their roles).</li>

            <li className="mt-3">17. The game starts during the day phase.</li>
          </ol>
        </div>

        {/* Roles */}
        <div className="mt-8 leading-2 p-2 sm:p-4 mx-1 md:mx-4">
          <div className="mt-4">
            <div className="font-bold">Roles - Villagers:</div>
            Villagers can only use night power if the corresponding building is built and not
            sabotaged, and the player is alive.
            <br />
            All players start with the Level 1 power.
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
                <li>Level 1: choose one player to heal if that person is injured</li>
                <li>Level 2: heal themselves and another person</li>
                <li>Level 3: heal any two people</li>
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
                <li>Level 2: Guard themselves and another person or building.  If the guard gets attacked, they don&apost get hurt.
                  If a different guarded person or the building is attacked, the guard gets hurt instead.</li>
                <li>Level 3: Guard any 2 people or buildings, including themselves.  If a different guarded person or the
                  building is attacked, the guard gets hurt instead.  The guard can not guard the same target twice.</li>
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
                <li>Level 1: cast one protection spell to protect against one attack.
                  Note: If a demon at level 3 attacks the same person twice, the first attack destroys
                  the protection. The second attack will injure the person or kill them if they are
                  already injured.</li>
                <li>Level 2: can cast one protection spell on themselves and one protection spell on another player.</li>
                <li>Level 3: cast two protection spells on the same person or two different people.  A person with 2 protection
                  spells on them can not be injured or killed.</li>
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
              <li>Sabotage: Level 2+ Demons can choose a building that is already built and sabotage it.  A sabotaged building makes
                the power of its corresponding villager&aposs power inactive.  It also works against the village&aposs Objectives.</li>
              <li>Grow their power: Demons start at Power Level 1.  They gain power at each higher level.</li>
              <li>A Level 3 demon can attack twice during the night, two different player targets once, or the same player target once.
                They can still only sabotage once, a building can not be sabotaged twice.
              </li>
            </ol>

            <div className="mt-4">Note: Sabotages happen last during the night.
              (e.g. a Priest can still use their power once if the church is built during the day and is sabotaged
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
              <ol className="mt-4 list-disc list-inside leading-12">
                <li>Level 1: Attack 1 person.  If the target is not injured, they become injured.
                  If the target is already injured, they are killed. Can not attack a target that
                  has been attacked by another demon on the same night.</li>
                <li className="mt-3">Level 2: Can attack a person or sabotage a building.</li>
                <li className="mt-3">Level 3: Can attack twice, either the same person or two different people.</li>
                <li className="mt-3"><span>If attacking the same target twice and that person has no protection spell, that person dies.</span>
                  <p>If the person has a protection spell, they are injured.</p>
                  <p>If the person has 2 protection spells, they are unharmed.</p>
                  <p>The rule that different demons can&apost target the same person still apply.</p>
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-bold">Moderator Notes:</h3>

          <ol className="mt-4 leading-8 list-inside list-none">
            <li>1. Always ask player&aposs name when voting or completing actions (not their roles)</li>
            <li className="mt-4">2. At the start of each day, announce:</li>
            <li className="ml-4">Which buildings are built or intact, which are sabotaged</li>
            <li className="ml-4">Which players are injured or dead</li>
            <li className="ml-4">Vague actions during the night: e.g. The Priest protected, the guard guarded, the doctor healed,
              but player [name] was injured and player [name] was killed.  Building [name] was sabotaged.</li>

            <li className="mt-4">3. Suggested player count:</li>
            <li className="ml-4">
              2 players.  One play 2 demons, the other play 5 villagers.
              Omit the constable and randomly picked the other roles.
            </li>
            <li className="ml-4">
              3 players.  One play 2 demons, the other play 2 villagers each.
              Omit the constable and randomly picked the other roles.
            </li>
            <li className="ml-4">
              4 players.  One play 2 demons, the others play 1 villagers each.
            </li>
            <li className="ml-4">
              5 players.  One play 2 demons, the others play 1 villagers each.
            </li>
            <li className="ml-4">
              6 players.  2 demons.  5 villagers, one player controls 2 villagers.
            </li>
            <li className="ml-4">
              7 players.  2 demons.  5 villagers.
            </li>
            <li className="ml-4">
              8 players.  2 demons.  6 villagers.  One demon start at level 2.
            </li>
            <li className="ml-4">
              9 players.  3 demons.  6 villagers.
            </li>
            <li className="ml-4">
              10 players.  3 demons.  7 villagers.
            </li>
            <li className="ml-4">
              11 players.  3 demons.  8 villagers.  One demon start at level 2.
            </li>
            <li className="ml-4">
              12 players.  4 demons.  8 villagers.
            </li>
            <li className="ml-4">
              13 players.  4 demons.  9 villagers.
            </li>
            <li className="ml-4">
              14 players.  5 demons.  10 villagers.
            </li>
          </ol>
        </div>
      </Card>
    </main >
  )
} 