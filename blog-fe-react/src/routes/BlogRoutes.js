import React,{Componet} from 'react'
import BaseRoutes from './BaseRoutes'
import HomePage from '../container/HomePage'
import Login from '../container/LoginPage'
import DairyEditPage from '../container/DairyEditPage'
import TestPage from '../container/TestPage'


export default class extends BaseRoutes{
    getChildRoutes(){
        console.log('blog routes. getChildRoutes...');
        return[
            {path:'/login',component:Login},
            {path:'/diary',component:DairyEditPage},
            {path:'/test',component:TestPage},
            {path:'/',component:HomePage}
        ]
    }
}

