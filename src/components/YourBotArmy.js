import React from "react";
import BotCard from "./BotCard";

function BotArmy ({bots, removeBot, deleteBot}){

    let myBotArmy =  bots.map((bot)=>{
        return (
            <BotCard
            key={bot.id}
            bot={bot}
            deleteBot={removeBot}
            // deleteBot={deleteBot}
            />
        )
    })

    return(
        <div className= 'd-block p-2 bg-dark text-black army'>
            <strong style={{color: "white"}}>🤖BOT ARMY🦾 </strong>
            <div className="container mt-4">
                <div className="row">
                    {myBotArmy}
                </div>
            </div>
        </div>
    )
}

export default BotArmy