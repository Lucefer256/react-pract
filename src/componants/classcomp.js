import React from 'react';
class ClassComp extends React.Component
{
    constructor()
    {
        super();
        this.state={
            name:"",
            pass:"",
            login:null
        };
    }
    login=()=>
    { console.log('hello');
        if(this.state.name=='Sourav'&&this.state.pass==12345)
        {
            this.setState({login:'success'});
        }
        else{
            this.setState({login:'login falied'});
        }
    }
    render(){
        return(
           
            <div>
                <div>User Name : <input type='text' onChange={(e)=>{this.setState({name:e.target.value})}}/></div>
                <br/>
                <div>Password : <input type='password'onChange={(e)=>{this.setState({pass:e.target.value})}}/></div>
                <br/>
                <button onClick={this.login}>login</button><br/>
                {this.state.login==null?null:this.state.login}
            </div>
           
        )
        };
}
export default ClassComp;