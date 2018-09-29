import React,{Componet} from 'react'
import BaseRoutes from './BaseRoutes'
import HomePage from '../container/HomePage'
import Login from '../container/LoginPage'
import DairyEditPage from '../container/DairyEditPage'

export default class extends BaseRoutes{
    getChildRoutes(){
        console.log('blog routes. getChildRoutes...');
        return[
            {path:'/login',component:Login},
            {path:'/dairy',component:DairyEditPage},
            {path:'/',component:HomePage}
        ]
    }
}

