import { Button, DatePicker } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Demo: React.FC = () => {
  const navigate = useNavigate();
  const onChange = () => {
    console.log('onChange')
  }
  return (
    <>
      <div>demo页面demo页面</div>
      <Button onClick={()=> {navigate('/demo2')}}>测试跳转</Button>
      <DatePicker onChange={onChange} />
    </>
  )
}

export default Demo
