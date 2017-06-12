import * as React from 'react';
import {postUser} from '../../actions/'

interface userProps {
    postData?: any,
    dispatch: Function,
    data: any,
    length: number
}

interface UserState {
    name: string,
    country: string,
    state: string
}

class UserForm extends React.Component<userProps, UserState> {

    constructor(props: userProps){
        super(props);

        this.state = {
            name: 'Name',
            country: 'Country',
            state: 'State'
        }
    }

    onChange = (e: any) => {
        var target = e.target;
        var name = target.name;
        this.setState({
            [name]: e.target.value
            
        })
    }

    handleClick = (e: any) =>{
        const id = () => {
            var ret = this.props.data.data;
            console.log('ret')
            for(var x = 0; x < ret.length; x++){
                if(ret[x].id != x){
                    console.log("ret[x]")
                    return ret = x;
                }else if(ret[x+1] === null || ret[x+1] === undefined){
                    console.log("ret[x+1]")
                    return ret = x+1;
                    
                }
            }
            
            return ret;
    
        };
        //Delete all the unneccessary stuff on string
        const value_check = this.state.name.replace(/[^A-Za-z0-9]/g, '');
        const value_final = value_check.charAt(0).toUpperCase() + value_check.slice(1).toLowerCase();
        const country = this.state.country;
        const state = this.state.state;
        e.preventDefault
        this.props.dispatch(postUser(value_final, id, country, state));
    }

    
    render(){

        return (
            <div className="container">
                <form className="form-horizontal">
                    <h1>Insert Information</h1>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                            <input name="user" className="form-control" value={this.state.name} onChange={this.onChange} />
                        </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-map-marker"></i></span>
                        <input name="country" className="form-control" value={this.state.country} onChange={this.onChange} />
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-screenshot"></i></span>
                        <input name="state" className="form-control" value={this.state.state} onChange={this.onChange} />
                    </div>

                    <button className="btn btn-success"onClick={this.handleClick.bind(this)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserForm;