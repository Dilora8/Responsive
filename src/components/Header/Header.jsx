import React from "react";
import "./Header.css";
import { useTranslation } from "react-i18next";
import i18n from './../../i18n'
export function handleLanguage(language) {
  i18n.changeLanguage(language);
}
const Header = () => {
  const { t } = useTranslation();

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./logo.png" alt="logo" width={100} />

        <div className="flexCenter h-menu">
          <a href="">{t("res")}</a>
          <a href="">{t("our")}</a>
          <a href="">{t("us")}</a>
          <a href="">{t("get")}</a>
          <button className="button">
            <a href="">{t("contact")}</a>
          </button>
          <button className="button" onClick={() => handleLanguage("en")}>
            En
          </button>
          <button className="button" onClick={() => handleLanguage("ru")}>
            Ru
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
