import React from 'react';
import { connect } from 'react-redux';
import { threadClickHandler } from '../../../redux/actionCreators';

function List(props){
    let data='';
    if(props.filterApplied){
        data = props.filteredThreads;
    }else{
        data = props.threads;
    }
    

    // data.map((thread,index)=>{
    //     let object = {
    //         key:index+1,
    //         title:thread.title,
    //         status:thread.status,
    //         latestUpdates:thread.latestUpdates,
    //         nextDate:thread.nextDate,
    //         userName:thread.userName
    //     }
    //     console.log(object)
    //     dataSource.push(object)
    // }   
// )
    
      return (
        <ThreadsTable data={data} threadClickHandler={props.threadClickHandler}/>
      )
}

function ThreadsTable(props){

    let threadRow = props.data.map(function(thread,index){
        return <ThreadRow key={index} thread={thread} threadClickHandler={props.threadClickHandler}/>
    })
    return(
        <table className="threads-table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Status</th> 
                    <th>Latest Update</th>
                    <th>Next Date</th>
                    <th>User's Name</th>
                </tr>
            </thead>
            <tbody>
                {threadRow}
            </tbody>
        </table>
    )
}

function ThreadRow(props){
    const thread = props.thread;
    return(
        <tr onClick={function(){return props.threadClickHandler(thread.id,thread.title)}}>
            <td>{thread.title}</td>
            <td><StatusBadge status={thread.status}/></td> 
            <td>{thread.latestUpdates}</td>
            <td>{thread.nextDate}</td>
            <td>{thread.userName}</td>
        </tr>
    )
}

function StatusBadge(props){
    let className="";
    if(props.status === 'ok'){
        className = 'greenBadge'
    }
    if(props.status === 'blocked'){
        className = 'greyBadge'
    }

    return(
        <span style={{color:'white',padding:'2px 10px',borderRadius:'5px',width:'auto'}} className={className}>{props.status}</span>
    )
}


const mapStateToProps = state => ({
    threads: state.threads,
    filteredThreads:state.filteredThreads,
    filterApplied:state.filterApplied
})

const mapDispatchToProps = dispatch => ({
    threadClickHandler: (id,title) => dispatch(threadClickHandler(id,title))
})


  export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(List);

// export default List;