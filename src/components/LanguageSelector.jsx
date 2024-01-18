import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "hi", lang: "Hindi" },
  { code: "bn", lang: "Bangla" },
  { code: "ta", lang: "Tamil" },
  { code: "knd", lang: "Kannada" },
  { code: "gu", lang: "Gujarati" },
  { code: "ar", lang: "Arabic" },
  { code: "ru", lang: "Russian" }, // It is not present in locales folder therefor it will by default show english lang
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <div className="btn-container">
      {languages.map((lang) => {
        return (
          <button
            className={lang.code === i18n.language ? "selected" : ""}
            key={lang.code}
            onClick={() => {
              changeLanguage(lang.code);
            }}
          >
            {lang.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
