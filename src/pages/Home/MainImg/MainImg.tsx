import styles from "./MainImg.module.css";

function MainImg() {
  return (
    <div className={styles.main_Img_Div}>
      {/* <img className={styles.main_Img} src="mainImg.jpg" alt="mainImg" /> */}
      <div className={styles.main_Img_Inner_Div}>
        <div className={styles.main_Img_Text}>
          Where Scents Meets Artistry..
        </div>
      </div>
    </div>
  );
}

export default MainImg;
