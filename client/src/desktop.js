import React from "react";
import styles from "./Desktop1.module.scss";

const Desktop1 = ({
  title = "App Name",
  subtitle = "Start your food journey today.",
  username = "Name",
  email = "Email",
  password = "Password",
  confirmPassword = "Confirm Password",
  submit = "Continue",
  selectOther = "or",
  facebookLogin = "Continue with Facebook"
}) => {
  return (
    <div className={styles.desktop1}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.flexWrapperFive}>
        <p className={styles.username}>{username}</p>
      </div>
      <div className={styles.flexWrapperFour}>
        <p className={styles.username}>{email}</p>
      </div>
      <div className={styles.flexWrapperThree}>
        <p className={styles.username}>{password}</p>
      </div>
      <div className={styles.flexWrapperTwo}>
        <p className={styles.username}>{confirmPassword}</p>
      </div>
      <div className={styles.flexWrapperOne}>
        <p className={styles.submit}>{submit}</p>
      </div>
      <p className={styles.selectOther}>{selectOther}</p>
      <div className={styles.relativeWrapperOne}>
        <div className={styles.frame1}>
          <div className={styles.facebookBox} />
        </div>
        <img
          alt=""
          className={styles.facebookLogo}
          src="https://static.overlay-tech.com/assets/6af36964-9c57-436d-ba42-597e98f36e3a.png"
        />
        <p className={styles.facebookLogin}>
          {facebookLogin}
        </p>
      </div>
    </div>
  );
};

export default Desktop1;