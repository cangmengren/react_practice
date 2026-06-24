import { DatePicker } from 'antd'
import React from 'react'
import style from './Demo2.less';

const Demo2: React.FC = () => {
  const onChange = () => {
    console.log('onChange')
  }
  return (
    <div className={style.content}>
      <div>
      <div>demo2页面demo2页面</div>
      <div>demo2页面demo2页面</div>
      </div>
      <div>
      <div>demo2页面demo2页面</div>
      <DatePicker onChange={onChange} />
      </div>
    </div>
  )
}

export default Demo2
