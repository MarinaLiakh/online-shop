import React from 'react';
import styles from './index.module.css';


export const Cart = ({useName, category, description, img, price}) => (
<div className={styles.wrapper}>
    <h3 className={styles.useName}>{useName}</h3>
    <p className={styles.ategory}>{category}</p>
    <p className={styles.description}>{description}</p>
    <img src={img} alt='' className={styles.img}/>
    <p className={styles.price}>{price}</p>
    </div>
);
