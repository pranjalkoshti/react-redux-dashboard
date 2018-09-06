import React from 'react';

function Conversation(props){
    const conversation = props.conversation;

      return (
       <div className="conversation">
           <div className="left-side">
               <h4>{conversation.name}</h4>
               <p>{conversation.date}</p>
           </div>
           <div className="right-side">
               <div>
                   <p>{conversation.body}</p>
               </div>
               <div>
                   <span>My Files</span>
                   <span>My Files</span>
               </div>
           </div>

           {/* <table>
               <tbody>
                   <tr>
                        <td>{conversation.name}</td>
                        <td>{conversation.body}</td>
                   </tr>
               </tbody>
           </table> */}
       </div>
      );
    
  }
  
  export default Conversation;