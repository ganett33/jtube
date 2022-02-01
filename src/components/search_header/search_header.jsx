import styles from "./search_header.module.css";
import React, { useRef, memo } from "react";

const SearchHeader = memo(({ onSearch }) => {
  const inputRef = useRef(); //계속 메모가 된다.
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        className={styles.input}
        ref={inputRef}
        type="search"
        placeholder="Serach..."
        onKeyPress={onKeyPress}
      />
      <button className={styles.btn} type="submit" onClick={onClick}>
        <img className={styles.btn_img} src="images/search.png" alt="search" />
      </button>
    </header>
  );
});

export default SearchHeader;
