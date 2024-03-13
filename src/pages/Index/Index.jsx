import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { message } from 'antd'
import './Index.css'

export default function Index() {
    const data = useSelector((state) => state.testReducer.user);
    console.log('data', data);
    useEffect(() => {
        message.success('Index组件挂载')
        return () => {
            console.log('Index组件卸载')
        }
    }, [])
    return (
        <div id='index'>
            <div className="i_left">
                <h2>欢迎{data}来到首页</h2>
            </div>
            <div className="i_right">
                <Outlet />
            </div>
        </div>
    )
}
