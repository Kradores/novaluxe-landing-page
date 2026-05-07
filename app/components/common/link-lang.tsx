import type { RefAttributes } from "react";
import { useTranslation } from "react-i18next";
import { Link, type LinkProps } from "react-router";

type LinkLangProps = Omit<LinkProps, "lang"> & RefAttributes<HTMLAnchorElement>

const LinkLang = ({ to, children, ...props }: LinkLangProps) => {
  const { i18n } = useTranslation();
  return <Link to={`/${i18n.language}${to}`} lang={i18n.language} {...props}>
    {children}
  </Link>;
};

export default LinkLang;