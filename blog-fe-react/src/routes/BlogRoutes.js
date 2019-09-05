import React,{Componet} from 'react'
import BaseRoutes from './BaseRoutes'
import HomePage from '../container/HomePage'
import Login from '../container/LoginPage'
import DairyEditPage from '../container/DairyEditPage'
import TestPage from '../container/TestPage'
import DiaryList from '../container/DiaryList'
import ReadDiary from '../container/ReadDiary'


export default class extends BaseRoutes{
    getChildRoutes(){
        console.log('blog routes 其它配置加在/前面...');
        return[
            {path:'/readdiary',component:ReadDiary},
            {path:'/diarylist',component:DiaryList},
            {path:'/login',component:Login},
            {path:'/diary',component:DairyEditPage},
            {path:'/test',component:TestPage},
            {path:'/',component:HomePage},
        ]
    }
}

