import React, { useEffect, useState } from "react";
import BotsCollection from "./BotCollection";
import BotArmy from "./YourBotArmy";

function Display() {
  let [bots, setBot] = useState([])

  useEffect(() => {

    fetch("https://vercel1-smoky.vercel.app/bots")
      .then((resp) => resp.json())
      .then(data => setBot(data))
  }, [])

  let addBot= (bot)=>{
    setBot(bots.map((b)=>(b.id === bot.id ? {...b, army:true} : b)))
}
let removeBot =(bot)=>{
    setBot(bots.map((b)=>(b.id === bot.id ? {...b, army:false} : b)))
}

let deleteBot = (bot)=>{
    let botRemoved =  bots.filter((b)=> b.id !==bot.id);
    setBot((bot)=>botRemoved)
}
  return (
    <div>
    <BotArmy
            bots={bots.filter((b)=>b.army)}
            removeBot={removeBot}
            deleteBot={deleteBot}
            
            />
 <BotsCollection 
            bots= {bots}
            addBot={addBot}
            deleteBot={deleteBot}
 />
 </div>
  )
}

export default Display;