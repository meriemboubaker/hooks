
import React from 'react'
import {Switch,Route} from 'react-router-dom'
import App from './App'
import Description from './Components/Description'
import { ListOfFilm } from "./Components/filmList";
const RoutingComponent =(props)=>{


 
    return(
        
    <Switch>
        <Route exact path="/" render={()=><App {...props} ListOfFilm={ListOfFilm}/>}></Route>
        <Route exact path="/description/:id" component={Description}></Route>
    </Switch>
    )

}
export default RoutingComponent ;
