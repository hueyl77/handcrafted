import { Card, Title, Text } from "@tremor/react"
import Image from "next/image"

export default function Page() {

  return (
    <main className="mx-auto max-w-8xl">
        {/* Rules */}
        <div className="mt-8 leading-2 p-2 sm:p-4 mx-1 md:mx-4">
          <h3 className="font-bold">Rules</h3>

          <ol className="mt-4 leading-8 list-inside list-none">
            <li>1. Team villagers can claim victory by eliminating all the demons or
              successfully <span className="font-bold">build all five buildings, </span>.</li>
            <li className="mt-3">2. The demon Team can seize victory when <span className="font-bold">the number of demons alive
              surpasses the number of villagers alive</span>, 
              or if the day starts with 0 buildings standng.  The game starts with one random building already built.</li>
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
                      the Town Hall, <br/>
                      the Hospital, <br/>
                      the Church, <br/>
                      the Contable Station, <br/>
                      the Watch Tower.
                    </div>
                    <p>
                      If all five buildings are built, and the demons fail to kill enough villagers 
                      that night, the villagers win.
                    </p>
                    <p>
                    If all five buildings are destroyed, the demons win the following morning.
                    </p>
                    <p>
                      The completed buildings grant extra power to the role they are associated with.
                      </p>
                  </div>
                  <ol className="list-disc ml-8">
                    <li>Finish building the Church (enhances the Priests' Power)</li>
                    <li>Finish building the Hospital (enhances the Doctors' Power)</li>
                    <li>Finish building the Watch Tower ((enhances the Guards' Power)</li>
                    <li>Finish building the Constable&apos; Station (enhances the Constables' Power)</li>
                    <li>Finish building the Town Hall (enhances the Mayor's Power)</li>
                  </ol>
                </span>
              </div>
            </li>

            <li className="mt-3">5. The game cycles between Day and Night phases</li>

            <li className="my-4">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
                <span className="md:col-span-4 md:pr-[100px]">
                  <p>6. <strong>Day phase:</strong> The village (including hidden demons disguised as a villager), 
                    discuss which building to build, this will affect the Mayor's decision at night.  
                    Only the mayor can order a building to be built at night.</p>

                  <ul className="list-inside list-disc ml-4 md:pr-[100px]">
                    <li>The villagers can also vote to hang someone: The player with the most votes is hanged and becomes a spirit.
                      Spirits have one last vote to hang someone, and can still participate in discussions in the day phase.
                    </li>
                    <li>In the case of ties, nothing happens.  Players can abstain from voting.</li>
                  </ul>

                  <div className="mt-4">
                    7. <strong>Night Phase:</strong> During the night phase, players that are still alive are waken up
                      in this order to execute their actions: 
                      <div className="ml-4">
                        Mayor, <br/>
                        Constables, <br/>
                        Doctors, <br/>
                        Priests, <br/>
                        Guards, <br/>
                        Demons. 
                      </div>
                  </div>
                </span>
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

            <li className="mt-4"><br/><br/>13. The order of powers executed at night:
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

            <li className="mt-3">15. The moderator can tell the doctors and priests which players are injured 
              when asking for a decision on who to heal or protect.
              e.g., Player X and Player Y are injured, would you like to heal them?</li>

            <li>16. On each new day, the Moderator should announce which buildings are built, 
              and which players were injured or killed in the night (don&apos;t say their roles).</li>

            <li className="mt-3">17. The game starts during the night phase.  
              A random building will already be built, the mayor does not build the first night.</li>
          </ol>
        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

        <div className="mt-8 leading-2 p-2 sm:p-4 mx-1 md:mx-4">
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
    </main>
  )
} 