const root = document.documentElement
const scheme = matchMedia('(prefers-color-scheme: dark)')
const theme = document.querySelector<HTMLButtonElement>('.theme')
const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : scheme.matches

if (theme) {
  const syncTheme = () => theme.setAttribute('aria-pressed', String(isDark()))
  theme.hidden = false
  syncTheme()
  scheme.addEventListener('change', syncTheme)
  theme.addEventListener('click', () => {
    const next = isDark() ? 'light' : 'dark'
    root.dataset.theme = next
    try { localStorage.setItem('dmej-theme', next) } catch { /* The theme still applies for this page. */ }
    syncTheme()
  })
}

const menus = [...document.querySelectorAll<HTMLDetailsElement>('.controls details')]
for (const menu of menus) {
  menu.addEventListener('toggle', () => {
    if (!menu.open) return
    for (const other of menus) if (other !== menu) other.open = false
  })
  menu.addEventListener('keydown', event => {
    if (event.key !== 'Escape' || !menu.open) return
    menu.open = false
    menu.querySelector('summary')?.focus()
  })
}
document.addEventListener('click', event => {
  for (const menu of menus) if (!menu.contains(event.target as Node)) menu.open = false
})
for (const link of document.querySelectorAll<HTMLAnchorElement>('.mobile-menu a')) {
  link.addEventListener('click', () => {
    const target = document.querySelector<HTMLElement>(link.hash)
    if (target) {
      target.tabIndex = -1
      target.focus({ preventScroll: true })
    }
    const menu = link.closest('details')
    if (menu) menu.open = false
  })
}

const alternateLinks = [...document.querySelectorAll<HTMLAnchorElement>('.language a')]
const syncLanguageLinks = () => {
  for (const link of alternateLinks) link.hash = location.hash
}
addEventListener('hashchange', syncLanguageLinks)
syncLanguageLinks()

const search = document.querySelector<HTMLInputElement>('#search')
const category = document.querySelector<HTMLSelectElement>('#category')
const count = document.querySelector<HTMLElement>('#result-count')
const cards = [...document.querySelectorAll<HTMLElement>('#resources article')]
const normalize = (value: string) => value.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase()
const searchIndex = cards.map(card => normalize(card.dataset.search ?? ''))

if (search && category && count) {
  const filter = () => {
    const terms = normalize(search.value.trim()).split(/\s+/).filter(Boolean)
    let visible = 0
    cards.forEach((card, i) => {
      const matchesTopic = !category.value || card.dataset.topic === category.value
      card.hidden = !matchesTopic || !terms.every(term => searchIndex[i].includes(term))
      if (!card.hidden) visible++
    })
    count.textContent = visible ? count.dataset.label + ' · ' + visible : count.dataset.empty ?? ''
  }
  search.closest('.filters')?.removeAttribute('hidden')
  search.addEventListener('input', filter)
  category.addEventListener('change', filter)
  addEventListener('pageshow', filter)
  filter()
}

const chapters = [...document.querySelectorAll<HTMLElement>('main section[id]')]
const milestones = [...document.querySelectorAll<HTMLElement>('[data-milestone]')]
const nav = [...document.querySelectorAll<HTMLAnchorElement>('.desktop-nav a, .mobile-menu a')]
const years = [...document.querySelectorAll<HTMLAnchorElement>('[data-year]')]
const header = document.querySelector<HTMLElement>('.site-header')
let pending = false

function trackReading() {
  pending = false
  const threshold = (header?.offsetHeight ?? 0) + 48
  const chapter = chapters.findLast(section => section.getBoundingClientRect().top <= threshold)
  const milestone = milestones.findLast(item => item.getBoundingClientRect().top <= threshold)
  const currentYear = chapter?.id === 'historia' ? (milestone ?? milestones[0])?.dataset.milestone : undefined

  for (const link of nav) {
    if (link.hash === '#' + chapter?.id) link.setAttribute('aria-current', 'location')
    else link.removeAttribute('aria-current')
  }
  for (const link of years) {
    if (link.dataset.year === currentYear) link.setAttribute('aria-current', 'location')
    else link.removeAttribute('aria-current')
  }
  const scrollable = root.scrollHeight - innerHeight
  root.style.setProperty('--read', String(scrollable > 0 ? Math.min(1, Math.max(0, scrollY / scrollable)) : 0))
}

function scheduleTracking() {
  if (pending) return
  pending = true
  requestAnimationFrame(trackReading)
}

addEventListener('scroll', scheduleTracking, { passive: true })
addEventListener('resize', scheduleTracking)
addEventListener('pageshow', scheduleTracking)
new ResizeObserver(scheduleTracking).observe(document.body)
scheduleTracking()
