import React from 'react'
import cn from 'classnames'
// Styles
import styles from './index.module.scss'

const Title = (props) => {
   return (
      <h3 className={cn({
         [styles.title] : true,
         [props.className] : props.className
      })}>{props.contents}</h3>
   )
}
export default Title