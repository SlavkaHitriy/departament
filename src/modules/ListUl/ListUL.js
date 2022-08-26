import React from 'react'


// Styles
import styles from './index.module.scss'


const ListUL = (mas) => {
   const listItems = mas.map((itemList) =>
      <li className={styles.itemList}>{itemList}</li>
   );
   return (
      <ul className={styles.itemLists}>{listItems}</ul>
   )
}

export default ListUL