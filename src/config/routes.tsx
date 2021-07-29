import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../page/Home'
import Store from '../App'

export default function Routes(){



    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/store' component={Store}/>
            </Switch>
        </BrowserRouter>
    )
}