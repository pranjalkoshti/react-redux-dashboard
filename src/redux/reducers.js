import * as types from './types';

export const initialState={
    conversations:[
        {id:'1',name:'Ravi',date:'date',body:' Line 37:  Expected to return a value at the end of arrow function  array-callback-return',userId:'1'},
        {id:'2',name:'Ravi',date:'date',body:' Line 37:  Expected to return a value at the end of arrow function  array-callback-return',userId:'1'},
        {id:'3',name:'Ravi',date:'date',body:' Line 37:  Expected to return a value at the end of arrow function  array-callback-return',userId:'1'},
        {id:'4',name:'Ravi',date:'date',body:' Line 37:  Expected to return a value at the end of arrow function  array-callback-return',userId:'2'},
    ],
    threads:[
        {id:'1',title:'John Boo', status:'ok',latestUpdates:'Short intro of latest updates Short intro of latest updates Short intro of latest updates ',nextDate:'xyz',userName:'user name 2',profileImg:''},
        {id:'2',title:'Peter ', status:'ok',latestUpdates:'Short intro of latest updates',nextDate:'xyz',userName:'user name 2',profileImg:''},
        {id:'3',title:'John Boo', status:'blocked',latestUpdates:'Short intro of latest updates',nextDate:'xyz',userName:'user name 1',profileImg:''}
    ],
    sortedConversation:[],
    filteredThreads:[],
    filterApplied:false,
    selectedThreadTitle:''
}


export const rootReducer = (state = initialState, action)=>{
    if(action.type === types.THREAD_CLICK_HANDLER){
        let id = action.payload.id;
        let title = action.payload.title;
        let sortedConversation = [];
        sortedConversation = state.conversations.filter(function(conversation){ if(conversation.userId === id) return conversation});
        return {
            ...state, sortedConversation: sortedConversation ,selectedThreadTitle:title
        };
    }
    if(action.type === types.FILTERS_HANDLER){
        // let value = action.payload.value;
        // let filterName = action.payload.filterName;
        let filters = action.payload;
        let filteredThreads = [];
        // // let property = '';

        filteredThreads = state.threads.filter(
            function(thread){ 
                let flag = 0;
               filters.map((filter)=>{
                   if(filter.filter === 'statusFilter'){
                       if(thread.status == filter.value){   
                           flag=1;
                       }
                   }
                   if(filter.filter === 'userNameFilter'){
                        if(thread.userName === filter.value){
                            flag=1;
                        }
                }
               })
               if(flag===1){
                   return thread;
               }
            }
        );
        console.log(filteredThreads)
        return {
            ...state, filteredThreads: filteredThreads,filterApplied:true 
        };
           
    }

    if(action.type === types.RESET_FILTERS){
        return {
            ...state, filteredThreads: [], filterApplied:false 
        };
           
    }

    return state;
}

// we can create separate reducer for filters



