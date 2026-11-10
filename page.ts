import { copy, languages, languageNames, languageTags, localize, milestones, organizations, pillars, urls, values } from './content.ts'
import type { Language } from './content.ts'
import { resources, topics } from './resources.ts'

export const localePath = (locale: Language) => locale === 'pt' ? '/' : '/' + locale + '/'
const escape = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] ?? char)
const arrow = '<span aria-hidden="true">↗</span>'
const chapterIds = ['historia', 'fundamentos', 'rede', 'acervo'] as const
const chapterLabels = ['history', 'foundations', 'network', 'library'] as const
const themeInit = "try{const t=localStorage.getItem('dmej-theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch{}"

export function render(locale: Language) {
  const t = (key: keyof typeof copy) => escape(localize(locale, copy[key]))
  const tr = (value: Parameters<typeof localize>[1]) => escape(localize(locale, value))
  const lang = languageTags[locale]
  const navigation = chapterIds.map((id, i) => `<a href="#${id}">${t(chapterLabels[i])}</a>`).join('')
  const label = (index: string, title: string) => `<p class="eyebrow"><span>${index}</span> ${title}</p>`
  const brand = `<a class="brand" href="#inicio" aria-label="DMEJ — Destrincha MEJ"><img src="/mark.svg" width="42" height="42" alt=""><span>DMEJ<small>DESTRINCHA MEJ</small></span></a>`
  const creditLink = (url: string, name: string) => `<a href="${escape(url)}">${name} ${arrow}</a>`
  const languageLinks = languages.map(code => `<a href="${localePath(code)}" lang="${languageTags[code]}" hreflang="${languageTags[code]}"${code === locale ? ' aria-current="page"' : ''}>${languageNames[code]}</a>`).join('')
  const photos = [
    { url: urls.photoTeam, label: t('documentary') + ' / 01' },
    { url: urls.photoEvent, label: t('documentary') + ' / 02' },
  ]

  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="${t('intro')}">
<meta name="theme-color" content="#101f3d">
<meta property="og:title" content="DMEJ — Destrincha MEJ">
<meta property="og:description" content="${t('intro')}">
<title>DMEJ — Destrincha MEJ</title>
${languages.map(code => `<link rel="alternate" hreflang="${languageTags[code]}" href="${localePath(code)}">`).join('')}
<link rel="alternate" hreflang="x-default" href="/">
<link rel="icon" href="/mark.svg" type="image/svg+xml">
<script>${themeInit}</script>
<link rel="preload" href="/media/barlow.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/style.css">
<script type="module" src="/client.js"></script>
</head>
<body>
<a class="skip" href="#conteudo">${t('skip')}</a>
<header class="site-header">
  <div class="nav-shell">
    ${brand}
    <nav class="desktop-nav" aria-label="${t('nav')}">${navigation}</nav>
    <div class="controls">
      <button class="theme" type="button" aria-label="${t('theme')}" aria-pressed="false" hidden>
        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M20.9 14a8.8 8.8 0 0 1-11-11A9 9 0 1 0 21 14Z"/></svg>
      </button>
      <details class="language"><summary><span class="sr-only">${t('language')}: </span>${locale.toUpperCase()} <span aria-hidden="true">⌄</span></summary><div>${languageLinks}</div></details>
      <details class="mobile-menu"><summary><span class="sr-only">${t('menu')}</span><span aria-hidden="true">☰</span></summary><nav aria-label="${t('nav')}">${navigation}</nav></details>
    </div>
  </div>
  <div class="read-progress" aria-hidden="true"></div>
</header>
<main id="conteudo" tabindex="-1">
  <section class="hero" id="inicio">
    <div class="hero-inner frame">
      <div class="hero-copy">
        ${label('↗', t('heroLabel'))}
        <h1><span>${t('heroFirst')}</span><em>${t('heroLast')}</em></h1>
        <p class="hero-intro">${t('intro')}</p>
        <a class="button" href="#historia">${t('start')} <span aria-hidden="true">↓</span></a>
      </div>
      <figure class="hero-figure">
        <div class="photo-frame">
          <img src="/media/team-1440.jpg" srcset="/media/team-680.jpg 680w, /media/team-1440.jpg 1440w" sizes="(max-width: 820px) 92vw, 50vw" width="1440" height="810" fetchpriority="high" alt="${t('heroAlt')}">
        </div>
        <figcaption><span>01 / DMEJ</span><a href="${urls.photoTeam}">${t('documentary')} · Brasil Júnior ${arrow}</a></figcaption>
      </figure>
    </div>
    <div class="hero-bottom frame"><a href="#historia"><span aria-hidden="true">↓</span> ${t('scroll')}</a><span>BRASIL / BAHIA <b>✳</b></span></div>
  </section>

  <section id="historia" class="section frame">
    <div class="section-heading">
      <div>${label('01', t('history'))}<h2>${t('historyTitle')}</h2></div>
      <p>${t('historyIntro')}</p>
    </div>
    <div class="timeline">
      <nav aria-label="${t('timeline')}" class="years">
        ${milestones.map(m => `<a href="#marco-${m.year}" data-year="${m.year}">${m.year}<span aria-hidden="true">↘</span></a>`).join('')}
      </nav>
      <ol class="milestones">
        ${milestones.map(m => `<li id="marco-${m.year}" data-milestone="${m.year}"><span class="milestone-year">${m.year}</span><div><h3>${tr(m.title)}</h3><p>${tr(m.body)}</p>${creditLink(m.url!, t('source'))}</div></li>`).join('')}
      </ol>
    </div>
  </section>

  <section id="fundamentos" class="foundation section">
    <div class="frame">
      ${label('02', t('foundations'))}
      <h2>${t('foundationTitle')}</h2><p class="purpose">${t('purpose')}</p>
      <div class="foundation-grid">
        <article><span class="glyph" aria-hidden="true">↗</span><h3>${t('mission')}</h3><p>${t('missionBody')}</p></article>
        <article><span class="glyph" aria-hidden="true">✳</span><h3>${t('vision')}</h3><p>${t('visionBody')}</p></article>
        <article class="values"><h3>${t('values')}</h3><ul>${values.map(value => `<li>${tr(value)}</li>`).join('')}</ul>${creditLink(urls.movement, 'Brasil Júnior')}</article>
      </div>
    </div>
  </section>

  <section class="section frame practice">
    <div>${label('02 / A', t('practice'))}<h2>${t('practiceTitle')}</h2></div>
    <ol>
      ${pillars.map((item, i) => `<li><span class="chapter-number">0${i + 1}</span><div><h3>${tr(item.title)}</h3><p>${tr(item.body)}</p></div></li>`).join('')}
    </ol>
  </section>

  <section id="rede" class="network section">
    <div class="frame">
      <div class="network-top">
        <div>${label('03', t('network'))}<h2>${t('networkTitle')}</h2><p>${t('networkIntro')}</p></div>
        <figure>
          <img src="/media/event-1200.jpg" srcset="/media/event-680.jpg 680w, /media/event-1200.jpg 1200w" sizes="(max-width: 820px) 92vw, 45vw" width="1200" height="1162" loading="lazy" alt="${t('networkAlt')}">
          <figcaption>${t('networkNote')} ${creditLink(urls.photoEvent, 'Brasil Júnior')}</figcaption>
        </figure>
      </div>
      <div class="organizations">
        ${organizations.map((org, i) => `<article><p class="eyebrow"><span>0${i + 1}</span> ${tr(org.title)}</p><h3>${org.name}</h3><p>${tr(org.body)}</p>${creditLink(org.url!, org.name)}</article>`).join('')}
      </div>
    </div>
  </section>

  <section id="acervo" class="section frame">
    <div class="section-heading">
      <div>${label('04', t('library'))}<h2>${t('libraryTitle')}</h2></div>
      <p>${t('libraryIntro')}</p>
    </div>
    <div class="filters" hidden>
      <label>${t('search')}<input type="search" id="search" placeholder="${t('searchExample')}" aria-controls="resources"></label>
      <label>${t('category')}<select id="category" aria-controls="resources"><option value="">${t('all')}</option>${Object.entries(topics).map(([key, name]) => `<option value="${key}">${tr(name)}</option>`).join('')}</select></label>
    </div>
    <p id="result-count" class="result-count" role="status" data-label="${t('count')}" data-empty="${t('none')}"></p>
    <div class="resources" id="resources">
      ${resources.map((resource, i) => `<article data-topic="${resource.topic}" data-search="${tr(resource.title)} ${tr(resource.body)} ${escape(resource.credit)} ${tr(topics[resource.topic])}">
        <p class="eyebrow"><span>${String(i + 1).padStart(2, '0')}</span> ${tr(topics[resource.topic])}</p>
        <h3>${tr(resource.title)}</h3><p>${tr(resource.body)}</p>
        <div class="resource-credit">${escape(resource.credit)}${resource.url ? ' · ' + t('external') : ''}</div>
        ${resource.url ? `<a class="resource-action" href="${escape(resource.url)}">${t('open')} ${arrow}</a>` : `<details class="exercise"><summary>${t('exercise')}</summary><ol>${resource.steps?.map(step => `<li>${tr(step)}</li>`).join('')}</ol></details>`}
      </article>`).join('')}
    </div>
  </section>
  <section class="closing">
    <div class="frame"><p class="eyebrow">DMEJ / 2026</p><h2>${t('closing')}</h2><a class="button" href="#acervo">${t('library')} ${arrow}</a></div>
  </section>
</main>
<footer class="site-footer" id="fontes">
  <div class="frame">
    <div class="footer-grid">
      <div>${brand}<p>${t('independence')}</p></div>
      <div><h2>${t('sources')}</h2>
        <ul>
          <li>${creditLink(urls.movement, 'Brasil Júnior · ' + t('foundations'))}</li>
          <li>${creditLink(urls.history, 'Câmara dos Deputados · ' + t('history'))}</li>
          <li>${creditLink(urls.kit, 'Brasil Júnior · Kit Tudão')}</li>
          <li>${creditLink(urls.strategy, 'Brasil Júnior · PE 2025–2027')}</li>
          ${photos.map(photo => `<li>${creditLink(photo.url, 'Brasil Júnior · ' + photo.label)}</li>`).join('')}
          <li>${creditLink(organizations[0].url!, 'CIMATEC Jr. · ' + t('practice'))}</li>
        </ul>
      </div>
      <div><h2>${t('author')}</h2><p>${creditLink('https://github.com/arthurcunha88', 'Arthur Andrade Cunha')}</p><p>© 2026 Arthur Andrade Cunha. ${t('rights')}</p></div>
    </div>
    <a class="back" href="#inicio">${t('back')} <span aria-hidden="true">↑</span></a>
  </div>
</footer>
</body>
</html>`
}
