import { Card, Title, Text } from "@tremor/react"
import Image from "next/image"

export default function Page() {

  return (
    <main className="mx-auto max-w-8xl">
        {/* Roles */}
        <div className="leading-2 p-2 sm:p-4 mx-1 md:mx-4 text-[10px]">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
            <div className="grid-col col-span-1 md:col-span-4">
              <label className="font-bold">Constable (Constable Station)</label>
              <div className="mt-4">
                Constables investigate one person at night.   The moderator will let them know
                if the player is a demon or a villager.
                If the <span className="font-bold">Constable Station</span> is built, they can
                arrest a person and imprison them.  Imprisoned players can not vote or do their actions at night,
                but they are not dead.
                If the Constable Station is successfully attacked, imprisoned players are free again.  Freed demons
                can still execute their actions in the same night.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 mt-4">
            <div className="grid-col col-span-1 md:col-span-4">
              <label className="font-bold">Doctor (Hospital)</label>
              <div className="mt-4">
                Doctors can heal an injured player at night, including themselves.
                If the <span className="font-bold">Hospital</span> is built, they can
                heal 2 players, including themselves.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 mt-4">
            <div className="grid-col col-span-1 md:col-span-4">
              <label className="font-bold">Guard (Watch Tower)</label>
              <div className="mt-4">
                The guard selects a building to guard.  If the target building is attacked, they get hurt instead.
                If the <span className="font-bold">Watch Tower</span> is built, the 
                attacking demon is injured (and can be killed if they get injured again).
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 mt-4">
            <div className="grid-col col-span-1 md:col-span-4">
              <label className="font-bold">Priest (Church)</label>
              <div className="mt-4">
                Priests can cast protection spells to protect another player against one attack.
                  Protection spells do not stack (there can only be one protection spell on a person at any time).
                  Priests can not cast the protection spell on themselves.
                  If the master demon attacks the same person twice, the first attack destroys
                  any protection they have. The second attack will injure the person or kill them if they are
                  already injured.
                  If the <span className="font-bold">Church</span> is built, 
                  priests can cast 2 protection spells on 2 different people.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 mt-4">
            <div className="grid-col col-span-1 md:col-span-4">
              <label className="font-bold">Mayor (Town Hall)</label>
              <div className="mt-4">
                This is a public role, known to all players at the beginning of the game.  
                The mayor ultimately decides which building to build at night, he or she can decide 
                to follow the villagers&apos; discussion during the day or choose a different building altogether.
                Since the mayor goes before the demons at night, the building is built even if they are killed
                later in the night.
                If the <span className="font-bold">Town Hall</span> is built, 
                they can do another base action belonging to another role.
                i.e. Investigate a person, heal a person, protect a person or guard a building.  
                <br/><br/>
                If the mayor dies, the village can elect a new mayor.  (And yes, they can unknowingly elect a demon as a mayor).
                No buildings can be built if there isn&apos;t an active mayor in the village.
                This means the villagers can only win by eliminating the demons before they destroy all the buildings or kill everyone.
              </div>
            </div>
          </div>

          {/* <!-- Demons --> */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-6 mt-4">
            <div className="grid-col col-span-1 md:col-span-4">
              <label className="font-bold">Demons</label>
              <div className="mt-4">
                Demons act like villagers during the day phase.  Since there can be multiple players with the same role,
                they can claim to be a villager&apos;s role.
                During the night phase, each demon can attack 2 different players or one building.  But they can not
                attack the same player twice in a night.
                Healing themselves: Instead of attacking, the demon can decide to heal themselves instead (if they get injured by a guard).
                <br/><br/>
                Become Master Demon: Instead of attacking, a demon can decide to grow their power and become a Master Demon in one night.  
                There can only be one master demon at any time.
                <br/><br/>

                A <span className="font-bold">Master Demon</span> has these extra powers:
                <ol className="list-decimal ml-4">
                  <li>Attack the same player twice in one night.  This means if a player isn&apos;t injured and there are no protection
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
  
    </main >
  )
} 