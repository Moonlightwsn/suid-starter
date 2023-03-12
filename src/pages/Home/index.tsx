import { useI18n } from "@solid-primitives/i18n"
import ToastButton from "./components/ToastButton"

const Home = () => {
  const [t] = useI18n()
  return (
    <div>
      <div>{t("hello")}</div>
      <ToastButton />
    </div>
  )
}

export default Home
