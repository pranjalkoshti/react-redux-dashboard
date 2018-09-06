import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filtersHandler, resetFilters } from '../../../redux/actionCreators';
import { Card,Select,Button } from 'antd';
const Option = Select.Option;


class Filters extends Component {
  constructor(props){
    super(props)
    this.state = {
      value:'user name 2',
      filterName:'userNameFilter',
      filters:[]
    }

    this.applyFilter = this.applyFilter.bind(this)
    this.updateUserNameFilter = this.updateUserNameFilter.bind(this)
    this.updateStatusFilter = this.updateStatusFilter.bind(this)
  }

  applyFilter(){
    if(this.state.value !== "" && this.state.filterName !== "" && this.state.filters.length == 0){
      let filters = [...this.state.filters];
      const value = this.state.value;
      const filterName = this.state.filterName;
      
      let object = {value:value, filter:filterName}
      filters.push(object);
      this.setState({
        filters:filters
      })

      this.props.filtersHandler(filters)
    }
    if(this.state.filters.length!== 0){
      this.props.filtersHandler(this.state.filters)
    }
  }
   

  updateUserNameFilter(value){
    let filters = [...this.state.filters];

    if(filters.filter((filter)=> {if(filter.filter === 'userNameFilter') return filter}).length !== 0 ){
      //update filters array

      let updatedFilter = filters.filter(function(filter){
        if(filter.filter === 'userNameFilter'){
          filter.value = value
        } 
        return filter
      })
      // console.log(updatedFilter)
      this.setState({
        value:value,
        filterName:'userNameFilter',
        filters:filters
      })

    }else{

      let object = {value:value, filter:'userNameFilter'}
      filters.push(object);
  
      this.setState({
        value:value,
        filterName:'userNameFilter',
        filters:filters
      })

    }
   
 
  }

  updateStatusFilter(value){
    let filters = [...this.state.filters];

    if(filters.filter((filter)=> {if(filter.filter === 'statusFilter') return filter}).length !== 0 ){
      //update filters array

      
      let updatedFilter = filters.filter(function(filter){
        if(filter.filter === 'statusFilter'){
          filter.value = value
        } 
        return filter
      })

      this.setState({
        value:value,
        filterName:'statusFilter',
        filters:filters
      })

    }else{
        let object = {value:value, filter:'statusFilter'}
        filters.push(object);

        this.setState({
          value:value,
          filterName:'statusFilter',
          filters:filters
        })
    }

  }

    render() {
      return (
        <Card type="inner" title="Filters"  style={{ width: 'auto',borderRadius:'5px',border:'1px solid #1890ff' }}>
        <div>
            <Select defaultValue="user name 2" style={{ display:'inline-block', margin:'0 15px', width:'30%'}} onChange={this.updateUserNameFilter}>
                <Option value="user name 1">User Name 1</Option>
                <Option value="user name 2">User Name 2</Option>
             </Select>
             <Select defaultValue="ok" style={{  display:'inline-block', margin:'0 15px',width:'25%' }} onChange={this.updateStatusFilter} >
                <Option value="ok">Ok</Option>
                <Option value="blocked">Blocked</Option>
             </Select>
             <Button type="default" style={{borderRadius:'20px',color:'#1890ff',borderColor:'#1890ff',  display:'inline-block',margin:'0 15px', width:'10%'}} onClick={this.applyFilter}>Apply</Button>
             <Button type="default" style={{borderRadius:'20px',color:'#1890ff',borderColor:'#1890ff',  display:'inline-block', margin:'0 15px',width:'10%'}} onClick={this.props.resetFilters}>Reset</Button>
             </div>
        </Card>
      )
    }
}

const mapDispatchToProps = dispatch => ({
  filtersHandler: (value,filterName) => dispatch(filtersHandler(value,filterName)),
  resetFilters: () => dispatch(resetFilters())
})

export default connect(
  null,
  mapDispatchToProps,
  )(Filters);

// export default Filters;
