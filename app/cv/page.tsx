import { ThemeToggle } from '../components/theme-toggle'
import { LanguageSwitcher } from '../components/language-switcher'
import { CVContent } from '../components/cv-content'

export default function CVPage() {
  return (
    <>
      <div className="floating-controls">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
      <CVContent />
    </>
  )
}
