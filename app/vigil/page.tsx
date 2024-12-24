import { Card, Title, Text } from "@tremor/react"
import Image from "next/image"

export default function Page() {

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Vigilstone Chronicles</Title>
      <Text>Online Social Deduction Game (Played through WeChat, Whatsapp, Discord, Forums)</Text>


        {/* Intro */}
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="relative">
            <Image src="/img/vigil/vigilstone-village.jpg"
              width={512}
              height={512}
              className="rounded-xl border-[5px]"
              alt="Vigilstone Village" />
          </div>
          <div className="relative text-justify pr-8">
            <p>
            Nestled between the gentle slopes of two mountains, the village of Vigilstone is barely visible from the main road. A scattering of thatched rooftops mingled with clusters of old oaks and ash trees, seemingly idyllic, next to the glimmering river. New, unfinished buildings tell a story of beginnings and of hope.
            </p>
            <p className="mt-4">
            But not all is as it seems. A murder in the night, the spirits of the land have infiltrated the village, trying to protect their home from the invading humans. The demons kill at night and walk among the villagers during the day.
            </p>
            <p className="mt-4">
            In order for Vigilstone to prosper, the villagers must weed out the demons among them. 
            They must dispatch the monsters until the land is safe to thrive again.
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
            <li>1. The players are split into two teams, villagers and demons.
              Team villagers win by eliminating all the demons or
              successfully <span className="font-bold">building all five buildings, </span>.</li>
            <li className="mt-3">2. The demon Team wins when the number of demons alive surpasses the number of villagers alive, 
              or if the day starts with 0 buildings standing.  The game starts with one random building already built.</li>
              
            <li className="mt-3">3. A moderator runs the game.  They will assign random roles to the players, instruct the players
              to wake up at night to execute their powers, moderate votings during the day, and keep track of the state of the game.
            </li>

            <li className="my-4">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
                <span className="md:col-span-4">
                  <div>
                    4. The five buildings are:
                    <br/>
                    <div className="ml-4">
                      the Town Hall <br/>
                      the Hospital <br/>
                      the Church <br/>
                      the Constable Station <br/>
                      the Watch Tower
                    </div>
                    <div className="mt-4">
                      Completed buildings grant extra power to the roles they are associated with.
                    </div>
                  </div>
                  <ol className="list-disc ml-8">
                    <li>Finish building the Church (enhances the Priests&apos; Power)</li>
                    <li>Finish building the Hospital (enhances the Doctors&apos; Power)</li>
                    <li>Finish building the Watch Tower ((enhances the Guards&apos; Power)</li>
                    <li>Finish building the Constable&apos; Station (enhances the Constables&apos; Power)</li>
                    <li>Finish building the Town Hall (enhances the Mayor&apos;s Power)</li>
                  </ol>

                  <div className="mt-6">
                    If all five buildings are built,  villagers win the following day.                    
                    <br/>
                    If all five buildings are destroyed, the demons win the following morning.
                    <br/>
                    <ol className="list-disc ml-8 mt-4">
                      <li>Building victories will always come first. </li>
                      <li>
                         If the villagers completed all 5 buildings in one night, 
                        without any of them successfully sabotaged, and the Demons kill off all the villagers, 
                        the Village still win.
                      </li>
                      <li>
                        Likewise, if the demons destroyed all buildings, 
                        but they all died in the process, the demons still win.
                      </li>
                    </ol>
                    
                  </div>
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

            <li className="mt-4">5. The game cycles between Day and Night phases</li>

            <li className="my-4">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
                <span className="md:col-span-4 md:pr-[100px]">
                  <p>6. <strong>Day phase:</strong> The village (including hidden demons disguised as a villager), 
                    discuss which building to build, this will affect the Mayor&apos;s decision at night.  
                    Only the mayor can order a building to be built at night.</p>

                  <ul className="list-inside list-disc ml-4 mt-4 md:pr-[100px]">
                    <li>The villagers can also vote to hang someone: The player with the most votes, and has
                      the minimum number of votes, is hanged and become a spirit.
                      Spirits have one last vote to hang someone, and can still participate in discussions in the day phase.
                    </li>
                    <li>In the case of ties, nothing happens.  Players can abstain from voting.</li>
                  </ul>

                  <div className="mt-4">
                    7. <strong>Night Phase:</strong> During the night phase, players that are still alive are woken up
                      in this order to execute their actions: 
                      <div className="ml-4">
                        Mayor <br/>
                        Constables <br/>
                        Doctors <br/>
                        Priests <br/>
                        Guards <br/>
                        Demons. 
                      </div>
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

            <li className="mt-10">8. A player can not be attacked by more than one demon per night.  A player will
            first become injured if successfully attacked, and will be killed if they are already injured.</li>

            <li className="mt-3">9. Demons know each other, but villagers do not (except for the Mayor, which is a public role).</li>

            <li className="mt-3">10. When a player is killed, their role is revealed. 
              There could be multiple players with the same roles (Except for the mayor, there will always only be one mayor).</li>

            <li className="mt-3">11. No one can talk at night, except for demons.  Demons can consult with each other at night before deciding on their actions.</li>

            <li className="mt-3">12. If you are attacked when injured, you are killed.  If you are hanged, you are killed instantly, injured or not.
               Killed players become spirits of the town and can still vote one time,
               and can talk during the day phase.  Spirits do not execute their actions at night.</li>

            <li className="mt-3">13. The order of powers executed at night:
              <div className="ml-4">
                Mayor builds a building <br/>
                Constables investigate or imprison<br/>
                Doctors heal<br/>
                Priests protect people<br/>
                Guards protect buildings<br/> 
                Demons attack
              </div>
            </li>

            <li className="mt-3">14. When telling the moderator who to attack, heal, guard, protect, or hang, 
              use the player&apos; name (not their roles).</li>

            <li>15. On each new day, the Moderator should announce which buildings are built, 
              and which players were injured or killed in the night (don&apos;t say their roles).</li>

            <li>16. Except for the Town Hall, the effects that grant their respective roles extra power are activated
              on the same night they are built.  The Town Hall, however, only allows the Mayor an extra action on subsquent nights
              if it is still standing.</li>

            <li className="mt-3">17. The game starts during the day phase.  
              A random building will already be built.  A random player that&apos;s not a demon is selected as the Mayor.</li>

            <li className="mt-3">18. The moderator can randomly assign roles (repeated roles are allowed), 
                or they can customize the roles as they see fit.  The can choose which roles are present and how many of 
                them there are to the players, or not, it&apos;s up to the moderator to decide.</li>
            
            <li className="mt-3">19. Building victories will always come first.  If the villagers
              build all 5 buildings in one night, and the Demons kill off all the villagers, the Village still win.
              Likewise, if the demons destroyed all buildings, but they all died in the process, the demons still win.
            </li>

            <li className="mt-3">
              20. Voting for Hangings or for a new Mayor:<br />
              The votes must be equal to or higher than the number of players alive to succeed.
              Ties result in nothing happening (no one is hanged or a new mayor isn&apos;t elected).
            </li>

            <li className="mt-3">
              21. Villagers can unknowling select the same target to investigate, imprison, protect, heal,
              or guard.  In those cases, the moderator do not tell them someone else has already 
              investigated/healed/protected/guarded that target.  It is a wasted action (protection spells
              do not stack and buildings do not get double guarded.)
              <br/><br/>
              In the case of multiple guards guarding the same building that were attacked, 
              a random guard is selected to resolve the attack.
            </li>
          </ol>
        </div>

        {/* Roles */}
        <div className="mt-8 leading-2 p-2 sm:p-4 mx-1 md:mx-4">
          <div className="mt-4">
            <div className="font-bold">Roles:</div>
          </div>

          <div className="grid md:grid-cols-6 gap-2">
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
              <div className="mt-4">
                Constables investigate one person at night.   The moderator will let them know
                if the player is a demon or a villager.
                <br/><br/>
                If the <span className="font-bold">Constable Station</span> is built, they can
                arrest a person and imprison them.  Imprisoned players can not vote or do their actions at night,
                but they are not dead.
                <br/><br/>
                If the Constable Station is successfully attacked, imprisoned players are free again.  Freed demons
                can still execute their actions in the same night.
                <br/><br/>
                In the unlikely case where 2 Constables unknowingly try to imprison each other, nothing happens.
                Neither one is imprisoned.
              </div>
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
              <div className="mt-4">
                Doctors can heal an injured player at night, including themselves.
                <br/><br/>
                If the <span className="font-bold">Hospital</span> is built, they can
                heal 2 players, including themselves.
              </div>
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
              <div className="mt-4">
                The guard selects a building to guard.  
                If the target building is attacked, they get hurt instead.
                <br/><br/>
                If the <span className="font-bold">Watch Tower</span> is built, the 
                attacking demon is ALSO injured (and can be killed if they get injured again).
                <br/><br/>
                If multiple guards are guarding the same building, 
                a guard is randomly selected to resolve the attack.
              </div>
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
              <div className="mt-4">
                <li>Priests can cast protection spells to protect another player against one attack.
                  Protection spells do not stack (there can only be one protection spell on a person at any time).
                  <br/><br/>
                  Priests can not cast the protection spell on themselves.
                  <br/><br/>
                  If the master demon attacks the same person twice, the first attack destroys
                  any protection they have. The second attack will injure the person or kill them if they are
                  already injured.</li>
                  <br/><br/>
                  If the <span className="font-bold">Church</span> is built, 
                  priests can cast 2 protection spells on 2 different people.
              </div>
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
              <div className="mt-4">
                This is a public role, known to all players at the beginning of the game.  
                The mayor ultimately decides which building to build at night, he or she can decide 
                to follow the villagers&apos; discussion during the day or choose a different building altogether.
                <br/><br/>
                Since the mayor goes before the demons at night, the building is built even if they are killed
                later in the night.
                <br/><br/>
                If the <span className="font-bold">Town Hall</span> is built, 
                they can do another base action belonging to another role.
                i.e. Investigate a person, heal a person, protect a person or guard a building.  <br/>
                But unlike other buildings, the Town Hall only grants the Mayor the extra action on a subsequent night.
                <br/><br/>
                If the mayor dies, the village can elect a new mayor.  (And yes, they can unknowingly elect a demon as a mayor).
                No buildings can be built if there isn&apos;t an active mayor in the village.
                This means the villagers can only win by eliminating the demons before they destroy all the buildings or kill everyone.
              </div>
            </div>
          </div>

          {/* <!-- Demons --> */}
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
              <label className="font-bold">Demons</label>
              <div className="mt-4">
                Demons act like villagers during the day phase.  Since there can be multiple players with the same role,
                they can claim to be a villager&apos;s role.
                <br/><br/>
                During the night phase, each demon can attack 2 different players or one building.  But they can not
                attack the same player twice in a night.
                <br/><br/>
                Healing themselves: Instead of attacking, the demon can decide to heal themselves instead (if they get injured by a guard).
                <br/><br/>
                Become Master Demon: Instead of attacking, a demon can decide to grow their power and become a Master Demon in one night.  
                There can only be one master demon at any time.
                <br/><br/>

                A Master Demon has these extra powers:<br/>
                <ol className="mt-4 list-decimal ml-4 leading-8 ml-4">
                  <li>Attack the same player or building twice in one night.  This means if a player isn&apos;t injured and there are no protection
                    spells on them, they will die instantly.  But if the player is protected by a priest, then they will only get injured.
                  </li>
                  <li>If investigaged, they are revealed as a villager.
                  </li>
                  <li>Hanging a Master Demon only injure them.  i.e. they can only be killed by hanging them when they are already injured.
                    This means they have to be hanged twice, or hanged when they are already injured from attacking a building with a guard 
                    and the Watch Tower in play.
                    <br/><br/>
                    Note: The Master Demon can still be imprisoned by the constable to keep them from wreaking havoc, to be hanged
                    again at the villagers&apos; leisure.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-8 mb-8"/>

        <div className="mt-4">
          <h3 className="font-bold">Moderator Notes:</h3>

          <ol className="mt-4 leading-8 list-inside list-none">
            <li>1. Always ask for and say the player&apos;s name when voting or completing actions (not their roles)</li>
            <li className="mt-4">2. At the start of each day, announce:</li>
            <li className="ml-4">Which buildings are built</li>
            <li className="ml-4">Which players are injured or dead</li>

            <li className="mt-4">3. When dealing out roles, always include 1 mayor, specified number of demons, and all villager roles randomized.  
              There are 3 of each roles in the deck, ensuring there could be multiple players of the same role in the game.
              This is an advantage to the demons, who can claim to be a role without drawing too much suspicion.
            </li>

            <li className="mt-4">4. Suggested player count:</li>
            <li className="ml-4">
              2 players.  One play 2 demons, the other play 5 villagers.
              Omit the constable, include 1 mayor, and randomly pick the other roles.
            </li>
            <li className="ml-4">
              3 players.  One play 2 demons, the other players play 3 villagers each.
              Omit the constable, include 1 mayor, and randomly pick the other roles.
            </li>
            <li className="ml-4">
              4 players.  One play 2 demons, the others play 2 villagers each.
              Include 1 mayor, and randomly pick the other roles.
            </li>
            <li className="ml-4">
              5 players.  One play 2 demons, the others play 1 villagers each.
              Include 1 mayor, and randomly pick the other roles.
            </li>
            <li className="ml-4">
              6 players.  2 demons.  5 villagers, one player controls 2 villagers.
            </li>
            <li className="ml-4">
              7 players.  2 demons.  5 villagers.
            </li>
            <li className="ml-4">
              8 players.  2 demons.  6 villagers.
            </li>
            <li className="ml-4">
              9 players.  3 demons.  6 villagers.
            </li>
            <li className="ml-4">
              10 players.  3 demons.  7 villagers.
            </li>
            <li className="ml-4">
              11 players.  3 demons.  8 villagers.
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
            <li className="ml-4">
              15 players.  5 demons.  11 villagers.
            </li>
          </ol>
        </div>
  
    </main >
  )
} 