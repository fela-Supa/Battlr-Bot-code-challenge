import React from "react";


function BotCard({ bot, clickEvent, deleteBot }) {
  return (

 <div className="card col-4 mt-5 h-100 shadow p-3 mb-5 bg-body rounded"
 key={bot.id}
        onClick={() => clickEvent(bot)}
 >
    <div className="card-body"  >
 
   
          <h3 className="date" onClick={() => clickEvent(bot)}>Name: {bot.name}
          
          </h3>
        
          <h3 className="description">Health: {bot.health}</h3>
       
          <h3 className="category">Damage: {bot.damage}</h3>
       
          <h3 className="amount">Armor: {bot.armor}</h3>
       
        {/* <th>
          <h3 className="amount">BotClass: {bot.bot_class}</h3>
        </th> */}
     
          {/* <h3 className="amount"></h3> */}
          <p>
              <strong>Catchphrase: </strong>
              {bot.catchphrase}
            </p>
            {/* Catchphrase: {bot.catchphrase}</h3> */}
      
      
          <img src={bot.avatar_url} alt="url" className="img"> 

          </img>
        
        {/* <th>
          <h3 className="amount">Created At: {bot.created_at}</h3>
        </th>
        <th>
          <h3 className="amount">Updated At: {bot.updated_at}</h3>
        </th> */}
      <button className="btn btn-warning"
                onClick={(event) => {
                  event.stopPropagation();
                  deleteBot(bot);
                }}
              >
                Delete
              </button>
  </div>
  </div>
   );
  }

  export default BotCard;