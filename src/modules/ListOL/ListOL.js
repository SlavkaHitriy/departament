import React from 'react'


// Styles
import styles from './index.module.scss'


const ListOL = (mas) => {
   const listItems = mas.map((itemList) =>
      <ol className={styles.itemList}>{itemList}</ol>
   );
   return (
      <ul className={styles.itemLists}>{listItems}</ul>
   )
}

export default ListOL