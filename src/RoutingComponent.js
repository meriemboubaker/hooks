
import React from 'react'
import {Switch,Route} from 'react-router-dom'
import App from './App'
import Description from './Components/Description'
const RoutingComponent =()=>{
 
    return(
        
    <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/description/:id" component={Description}></Route>
    </Switch>
    )

}
export default RoutingComponent ;
