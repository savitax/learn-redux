import React from 'react'
import { useSelector } from 'react-redux';

export default function Home() {
  const { name } = useSelector((store) => store.user);
  return (
    <div>{name}之家</div>
  )
}
