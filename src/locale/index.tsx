import { JSX, Component } from "solid-js"
import { I18nContext, createI18nContext } from "@solid-primitives/i18n"
import dict from "./dict"

const I18nProvider: Component<{
  locale?: string
  children?: JSX.Element
}> = (props) => {
  const value = createI18nContext(dict, props.locale)
  return (
    <I18nContext.Provider value={value}>{props.children}</I18nContext.Provider>
  )
}

export default I18nProvider
