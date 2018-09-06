import React from 'react';
import { Card } from 'antd';
import Conversation from './Conversation';
import '../styles/conversationContainer.css';
import { connect } from 'react-redux';
import { Button } from 'antd';

function ConversationContainer(props){
  const data = props.conversations;
  const conversation = data.map((conversation,index)=>
    <Conversation key={index} conversation={conversation}></Conversation>
  )

    return ( 
        <Card  type="inner" title={`Row Details: ${props.conversationTitle}`}>
          {conversation}
          <AttachmentInput/>
        </Card>  
    )
  
}

function AttachmentInput(props){
  let input = React.createRef();
  return(
    <div style={{padding:'10px'}}>
        <input type='file' style={{display:'none'}} ref={input}/>
        <Button type="default" style={{color:'#1890ff',borderColor:'#1890ff',  display:'inline-block', margin:'0 15px',width:'10%'}} onClick={function(){input.current.click()}}>Attach</Button>
    </div>

  )
}
const mapStateToProps = state => ({
  conversations: state.sortedConversation,
  conversationTitle: state.selectedThreadTitle
})

export default connect(
  mapStateToProps,
  )(ConversationContainer);

// export default ConversationContainer;