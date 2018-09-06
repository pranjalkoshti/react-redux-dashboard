import React, { Component } from 'react';
import {connect} from 'react-redux';
import Filters from './components/Filters';
import List from './components/List';
import  './styles/dashboard.css';
import ConversationContainer from './components/ConversationContainer';


class Dashboard extends Component {

   
    render() {
        if(this.props.sortedConversation.length !== 0){
            return (
                <div style={{padding:'1em'}}>
                   <div className="section-container">
                        <Filters/>
                    </div> 
                    <div className="section-container">
                        <List/>
                    </div>
                     <div className="section-container">
                       <ConversationContainer/>
                    </div> 
                </div>
              );
        }else{
            return (
                <div style={{padding:'1em'}}>
                   <div className="section-container">
                        <Filters/>
                    </div> 
                    <div className="section-container">
                        <List/>
                    </div>
                </div>
              );
        }
    }
  }
  
const mapStateToProps = state => ({
    sortedConversation: state.sortedConversation
})

  export default connect(
    mapStateToProps
    )(Dashboard);

//   export default Dashboard;
  