import Link from "next/link";
import { useRouter } from "next/router";
const setCookie = (locale) => {
  document.cookie = `NEXT_LOCALE=${locale}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
};

const Navigation = () => {
  const router = useRouter();

  return (
    <>
      <ul>
        <li>
          <Link href="/" passHref locale={router.locale}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/dashboard/auth/login" passHref locale={router.locale}>
            Login
          </Link>
        </li>
        <li>
          <Link href="/dashboard/auth/register" passHref locale={router.locale}>
            Register
          </Link>
        </li>
      </ul>
      <button
        onClick={() => {
          const locale = router.locale === "en" ? "fr" : "en";
          setCookie(locale);
          router.push(`/${locale}`, `/${locale}`, { locale: false });
        }}
      >
        {router.locale === "en" ? "fr" : "en"}
      </button>
      <p>
        <span>Local----{router.locale}</span>
      </p>
    </>
  );
};

export default Navigation;
