
import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, addBot, deleteBot }) {
  const botItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={addBot}
        deleteBot={deleteBot}
       
      />
    );
  });
  return (
    <div className="container mt-4">
      <div className="row">
      
        {botItem}
      </div>
    </div>
  );
}

export default BotCollection;
    