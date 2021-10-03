import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
const Login = (props) => {
  const { t } = useTranslation("login");
  return (
    <div>
      <h1>{t("Title")}</h1>
    </div>
  );
};
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["login"])),
      // Will be passed to the page component as props
    },
  };
}

export default Login;
