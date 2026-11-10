import { copy, languages, languageNames, languageTags, localize, milestones, organizations, pillars, urls, values } from './content.ts'
import type { Language } from './content.ts'
import { resources, topics } from './resources.ts'
import { guideCopy, guideTopics, guideUrls, lessons } from './field-guide.ts'
import { enejPhotos, eventCopy, events, eventPhotos, photoFiles } from './events.ts'
import { coverageCopy, readingPaths, stageStories, visitPlan } from './coverage.ts'
import { benchmarks, operations, referenceCopy } from './operations.ts'

export const localePath = (locale: Language) => locale === 'pt' ? '/' : '/' + locale + '/'
const escape = (value: string) => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] ?? char)
const arrow = '<span aria-hidden="true">↗</span>'
const themeInit = "try{const t=localStorage.getItem('dmej-theme');if(t==='dark'||t==='light')document.documentElement.dataset.theme=t}catch{}"

export function render(locale: Language) {
  const t = (key: keyof typeof copy) => escape(localize(locale, copy[key]))
  const tr = (value: Parameters<typeof localize>[1]) => escape(localize(locale, value))
  const lang = languageTags[locale]
  const chapters = [
    ['historia', t('history')], ['fundamentos', t('foundations')], ['guia', tr(guideCopy.nav)],
    ['rede', t('network')], ['eventos', tr(eventCopy.nav)], ['acervo', t('library')],
  ]
  const navigation = chapters.map(([id, name]) => `<a href="#${id}">${name}</a>`).join('')
  const label = (index: string, title: string) => `<p class="eyebrow"><span>${index}</span> ${title}</p>`
  const brand = `<a class="brand" href="#inicio" aria-label="DMEJ — Destrincha MEJ"><img src="/mark.svg" width="42" height="42" alt=""><span>DMEJ<small>DESTRINCHA MEJ</small></span></a>`
  const creditLink = (url: string, name: string) => `<a href="${escape(url)}">${name} ${arrow}</a>`
  const languageLinks = languages.map(code => `<a href="${localePath(code)}" lang="${languageTags[code]}" hreflang="${languageTags[code]}"${code === locale ? ' aria-current="page"' : ''}>${languageNames[code]}</a>`).join('')
  const bahia = eventPhotos[0]
  const bahiaFiles = photoFiles(bahia)
  const guide = [...lessons, ...operations]
  const guideAreas = Object.entries(guideTopics)
  const renderPhotos = (photos: typeof eventPhotos, wideIndexes = [0]) => photos.map((photo, index) => {
    const files = photoFiles(photo)
    const sizes = wideIndexes.includes(index) ? '(max-width: 900px) 92vw, 64vw' : '(max-width: 540px) 92vw, (max-width: 900px) 45vw, 30vw'
    const responsive = files.srcset ? `srcset="${files.srcset}" sizes="${sizes}"` : ''
    return `<figure>
      <a class="photo-link" href="${files.full}">
        <img src="${files.src}" ${responsive} width="${photo.width}" height="${photo.height}" loading="lazy" decoding="async" alt="${tr(photo.alt)}">
        <span aria-hidden="true">↗</span>
      </a>
      <figcaption>${escape(photo.title)}</figcaption>
    </figure>`
  }).join('')

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
        <figcaption><span>01 / DMEJ</span><a href="#creditos-imagens">${t('documentary')} ${arrow}</a></figcaption>
      </figure>
    </div>
    <div class="hero-bottom frame"><a href="#historia"><span aria-hidden="true">↓</span> ${t('scroll')}</a><span>BRASIL / BAHIA <b>✳</b></span></div>
  </section>

  <nav class="reader-map" aria-label="${tr(coverageCopy.map)}">
    <div class="frame">
      <p class="eyebrow">${tr(coverageCopy.map)}</p>
      <ul>
        ${readingPaths.map((path, index) => `<li><a href="${path.href}"><span class="path-index">0${index + 1}</span><span><strong>${tr(path.title)}</strong><small>${tr(path.body)}</small></span>${arrow}</a></li>`).join('')}
      </ul>
    </div>
  </nav>

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

  <section id="guia" class="section frame field-guide">
    <div class="section-heading">
      <div>${label('03', tr(guideCopy.nav))}<h2>${tr(guideCopy.title)}</h2></div>
      <p>${tr(guideCopy.intro)}</p>
    </div>
    <div class="filters" hidden>
      <label>${tr(guideCopy.search)}<input type="search" id="guide-search" placeholder="${tr(guideCopy.placeholder)}" aria-controls="guide-lessons"></label>
      <label>${tr(guideCopy.category)}<select id="guide-category" aria-controls="guide-lessons"><option value="">${t('all')}</option>${guideAreas.map(([id, name]) => `<option value="${id}">${tr(name)}</option>`).join('')}</select></label>
    </div>
    <p id="guide-count" class="result-count" role="status" data-label="${tr(guideCopy.found)}" data-empty="${tr(guideCopy.empty)}"></p>
    <div class="lesson-list" id="guide-lessons">
      ${guideAreas.map(([id, name], area) => `<div class="guide-area">
        <h3 class="eyebrow"><span>${String(area + 1).padStart(2, '0')}</span> ${tr(name)}</h3>
        ${guide.filter(lesson => lesson.topic === id).map((lesson, i) => `<details id="guia-${lesson.id}" class="lesson" data-topic="${id}" data-search="${tr(lesson.title)} ${tr(lesson.body)} ${tr(lesson.example)} ${tr(name)}"${area === 0 && i === 0 ? ' open' : ''}>
          <summary><span class="chapter-number">${String(i + 1).padStart(2, '0')}</span><span>${tr(lesson.title)}</span></summary>
          <div class="lesson-body">
            <p>${tr(lesson.body)}</p>
            <aside><strong>${tr(guideCopy.apply)}</strong><p>${tr(lesson.example)}</p></aside>
            ${lesson.formula ? `<p class="lesson-formula">${tr(lesson.formula)}</p>` : ''}
            ${creditLink(lesson.url, escape(lesson.source))}
          </div>
        </details>`).join('')}
      </div>`).join('')}
    </div>
  </section>

  <section id="rede" class="network section">
    <div class="frame">
      <div class="network-top">
        <div>${label('04', t('network'))}<h2>${t('networkTitle')}</h2><p>${t('networkIntro')}</p></div>
        <figure>
          <img src="${bahiaFiles.src}" srcset="${bahiaFiles.srcset}" sizes="(max-width: 820px) 92vw, 45vw" width="${bahia.width}" height="${bahia.height}" loading="lazy" decoding="async" alt="${tr(bahia.alt)}">
          <figcaption>${escape(bahia.title)} · ${tr(bahia.alt)}</figcaption>
        </figure>
      </div>
      <div class="organizations">
        ${organizations.map((org, i) => `<article><p class="eyebrow"><span>0${i + 1}</span> ${tr(org.title)}</p><h3>${org.name}</h3><p>${tr(org.body)}</p>${creditLink(org.url!, org.name)}</article>`).join('')}
      </div>
      <div id="referencias" class="national-references">
        <h3>${tr(referenceCopy.title)}</h3><p>${tr(referenceCopy.intro)}</p>
        <div class="organizations">
          ${benchmarks.map(item => `<article><p class="eyebrow">${tr(item.scope)}</p><h4>${escape(item.name)}</h4><p>${tr(item.body)}</p>${creditLink(item.url, t('source'))}</article>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section id="eventos" class="section event-chapter">
    <div class="frame">
      <div class="section-heading">
        <div>${label('05', tr(eventCopy.nav))}<h2>${tr(eventCopy.title)}</h2></div>
        <p>${tr(eventCopy.intro)}</p>
      </div>
      <section id="enej-2026" class="coverage">
        <div class="coverage-heading">
          <div>${label('BH', 'ENEJ 2026')}<h3>${tr(coverageCopy.title)}</h3></div>
          <div><p>${tr(coverageCopy.intro)}</p><a class="button" href="#fotos-enej-2026">${tr(coverageCopy.album)} <span aria-hidden="true">↓</span></a></div>
        </div>
        <div class="photo-grid coverage-photos" id="fotos-enej-2026" data-photo-group>
          ${renderPhotos(enejPhotos, [0, 3])}
        </div>
        <div class="coverage-reading">
          <div>
            <h4>${tr(coverageCopy.itinerary)}</h4>
            <ol class="visit-plan">${visitPlan.map(step => `<li><strong>${tr(step.title)}</strong><p>${tr(step.body)}</p></li>`).join('')}</ol>
          </div>
          <div>
            <h4>${tr(coverageCopy.stories)}</h4>
            ${stageStories.map(story => `<article class="stage-story"><strong>${tr(story.title)}</strong><p>${tr(story.body)}</p><div><a href="${story.href}">${tr(story.action)} ${arrow}</a>${creditLink(story.url!, t('source'))}</div></article>`).join('')}
          </div>
        </div>
      </section>
      <h3 class="other-events">${tr(coverageCopy.other)}</h3>
      <div class="event-list">
        ${events.map(event => `<article><h4>${tr(event.title)}</h4><p>${tr(event.body)}</p>${creditLink(event.url!, t('source'))}</article>`).join('')}
      </div>
      <div class="gallery-head">
        <h3>${tr(eventCopy.gallery)}</h3><p>${tr(eventCopy.galleryIntro)}</p>
      </div>
      <div class="photo-grid" data-photo-group>
        ${renderPhotos(eventPhotos)}
      </div>
      <dialog id="photo-view" aria-labelledby="photo-caption">
        <div class="photo-toolbar">
          <button type="button" data-photo-step="-1" aria-label="${tr(eventCopy.previous)}">←</button>
          <button type="button" data-photo-step="1" aria-label="${tr(eventCopy.next)}">→</button>
          <form method="dialog"><button type="submit" aria-label="${tr(eventCopy.close)}" autofocus>×</button></form>
        </div>
        <figure><img id="photo-full" alt=""><figcaption id="photo-caption" aria-live="polite"></figcaption></figure>
      </dialog>
    </div>
  </section>

  <section id="acervo" class="section frame">
    <div class="section-heading">
      <div>${label('06', t('library'))}<h2>${t('libraryTitle')}</h2></div>
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
          <li>${creditLink(guideUrls.clusters, 'Brasil Júnior · Fundamentos dos Clusters 4.0')}</li>
          <li>${creditLink(guideUrls.assumptions, 'Brasil Júnior · Premissas e Fundamentos Estratégicos')}</li>
          <li>${creditLink(organizations[0].url!, 'CIMATEC Jr. · ' + t('practice'))}</li>
        </ul>
      </div>
      <div><h2>${t('author')}</h2><p>${creditLink('https://github.com/arthurcunha88', 'Arthur Andrade Cunha')}</p><p>© 2026 Arthur Andrade Cunha. ${t('rights')}</p></div>
    </div>
    <details class="photo-credits" id="creditos-imagens" open>
      <summary>${tr(eventCopy.photoCredits)}</summary>
      <ul>
        <li>${creditLink(urls.photoTeam, t('documentary') + ' · Brasil Júnior / DMEJ 01')}</li>
        ${[...enejPhotos, ...eventPhotos].map(photo => `<li>${creditLink(photo.url, escape(photo.title + ' · ' + photo.credit))}</li>`).join('')}
      </ul>
    </details>
    <a class="back" href="#inicio">${t('back')} <span aria-hidden="true">↑</span></a>
  </div>
</footer>
</body>
</html>`
}
