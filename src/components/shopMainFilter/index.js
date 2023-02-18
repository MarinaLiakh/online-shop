import React from "react";
import styles from "./index.module.css";
import { SearchProductInput } from "../searchProductInput";
import { ShopFilter } from "../shopFilter";

export const ShopMainFilter = () => {
  return (
    <div className={styles.searchWrapper}>
      <SearchProductInput />
      <ShopFilter />
    </div>
  );
};
