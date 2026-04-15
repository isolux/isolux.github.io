import { createContext, useContext, useState, useEffect } from 'react'

const i18n = {
  zh: {
    primary: '嶼日數位設計',
    full: '嶼日數位設計有限公司',
    sub: 'isolux Co., Ltd.',
    tagline: '以設計驅動數位創新',
    services: ['平面設計', 'UI/UX', '全端開發', 'AI 整合'],
    contact: '聯絡我們',
    toggle: 'EN',
  },
  en: {
    primary: 'isolux',
    full: 'isolux Co., Ltd.',
    sub: '嶼日數位設計有限公司',
    tagline: 'Design-Driven Digital Innovation',
    services: ['Graphic Design', 'UI/UX', 'Web Development', 'AI Integration'],
    contact: 'Contact Us',
    toggle: '中',
  },
}

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('zh')

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-TW' : 'en'
  }, [lang])

  const toggle = () => setLang(l => (l === 'zh' ? 'en' : 'zh'))

  return (
    <LanguageContext.Provider value={{ lang, t: i18n[lang], toggle }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
