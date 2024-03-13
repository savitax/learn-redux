import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { message } from 'antd'
import './Index.css'

export default function Index() {
    useEffect(() => {
        message.success('Index组件挂载')
        return () => {
            console.log('Index组件卸载')
        }
    }, [])
    return (
        <div id='index'>
            <div className="i_left">
                <NavLink to="/home">HOME</NavLink>
                <br></br>
                <NavLink to="/login">登录</NavLink>
            </div>
            <div className="i_right">
                <Outlet />
            </div>
        </div>
    )
}
