import "./App.css";
import { useTranslation } from "react-i18next";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <LanguageSelector />
      <h1>{t("greetings")}</h1>
    </div>
  );
}

export default App;
