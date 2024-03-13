import { Button, Card, Input, message } from 'antd'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

export default function Login() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  function login() {
    message.success(username + '登录成功');
    dispatch({
      type: "login",
      data: username
    })
  }
  return (
    <Card title="登录" style={{ width: 300 }}>
      <Input
        placeholder="请输入用户名"
        value={username}
        onChange={(e) => { setUsername(e.target.value) }}
      />
      <Button
        type="primary"
        style={{ width: '100%', marginTop: 20 }}
        onClick={login}
      >
        登录
      </Button>
    </Card >
  )
}
