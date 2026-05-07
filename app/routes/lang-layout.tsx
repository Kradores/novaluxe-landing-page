import { useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export default function LangLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return <Outlet />;
}
