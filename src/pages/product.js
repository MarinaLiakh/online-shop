import React from 'react';
import styles from './index.module.css';

export const Product = ({useName, category, description, img, price}) => (
    <div className={styles.wrapper}>
        <h3 className={styles.useName}>{useName}</h3>
        <p className={styles.category}>{category}</p>
        <p className={styles.description}>{description}</p>
        <img src={img} alt='' className={styles.img}/>
        <div className={styles.price}>{price}</div>
    </div>
    );