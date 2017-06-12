import * as React from 'react';
import './App.css';
import { FetchButton } from './components/dummy/FetchButton'
import UserForm from './components/dummy/UserForm'
import { fetchDelete, postData } from './actions/'

interface counterProps {
    count?: Number,
    onIncrement?: Function,
    onDecrement?: Function,
    fetchUser?: Function,
    fetchDelete?: Function,
    data?: any,
    dispatch?: any,
    id?: any
 }


class App extends React.Component<counterProps, any>{
    
    componentDidMount(){
        this.props.fetchUser
    }

    handleDelete(id: any){
      this.props.dispatch(fetchDelete(id))
      this.createList(this.props.data);
    }


    createList(data: any){
      var data = data.data;
      const outPut: any = [];
      for(var i = 0; i < data.length; i++){
          const dataI: any = data[i].id;
          outPut.push(
                    <tr key={'table' + i}>        
                      <th key={'name' + i}>{data[i].name}</th>
                      <th key={'country' + i}>{data[i].country}</th>
                      <th key={'state' + i}>{data[i].state}</th>
                      <th key={'id' + i}>{data[i].id}</th>
                      <th key={'button' + i}>
                        <button className="btn btn-danger" key={i} onClick={(i) => this.handleDelete(dataI)}>X</button>
                        <button className="btn btn-info" key={"info" + i}>U</button>
                      </th>
                    </tr>
                       )
      }
      return outPut;
    }


   render(){
       const { fetchUser, data} = this.props;
       const dataL = data.data.length;
     return (

        <div className="container">
          <h1 className="text-center">Users</h1>
            <table className="table table-striped table-hover">
              <tbody>
              <tr>
                <th>User</th>
                <th>Country</th>
                <th>State</th>
                <th>ID</th>
                <th>Button</th>
              </tr>
              {this.createList(data)}
            </tbody>
            </table>
         
          <FetchButton fetchUser={fetchUser} />
          
          <UserForm dispatch={this.props.dispatch} postData={postData} data={data} length={dataL} />
        </div>
    );
   }
}




export default App;
