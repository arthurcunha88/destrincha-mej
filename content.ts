export const languages = ['pt', 'en', 'fr', 'es'] as const
export type Language = typeof languages[number]

type Translation = readonly [string, string, string, string]
export const languageNames: Record<Language, string> = { pt: 'Português', en: 'English', fr: 'Français', es: 'Español' }
export const languageTags: Record<Language, string> = { pt: 'pt-BR', en: 'en', fr: 'fr', es: 'es' }
export const localize = (locale: Language, value: Translation) => value[languages.indexOf(locale)]

export const copy = {
  skip: ['Pular para o conteúdo', 'Skip to content', 'Aller au contenu', 'Saltar al contenido'],
  nav: ['Navegação principal', 'Main navigation', 'Navigation principale', 'Navegación principal'],
  menu: ['Menu', 'Menu', 'Menu', 'Menú'],
  language: ['Idioma', 'Language', 'Langue', 'Idioma'],
  theme: ['Tema escuro', 'Dark theme', 'Thème sombre', 'Tema oscuro'],
  heroLabel: ['Guia independente do MEJ', 'An independent guide to the movement', 'Guide indépendant du mouvement', 'Guía independiente del movimiento'],
  heroFirst: ['Que MEJ você', 'What kind of movement', 'Quel mouvement', '¿Qué movimiento'],
  heroLast: ['quer construir?', 'will you build?', 'veux-tu construire ?', 'quieres construir?'],
  intro: ['Da origem do Movimento Empresa Júnior às decisões que você toma na sua EJ. Entenda a Rede, questione seus processos e coloque o aprendizado em prática.', 'From the origins of the Junior Enterprise Movement to the decisions you make in your own team. Understand the network, question your processes and put what you learn into practice.', 'Des origines du mouvement des Junior-Entreprises aux décisions prises dans ton équipe. Comprends le réseau, questionne tes processus et mets tes acquis en pratique.', 'Desde el origen del Movimiento Empresa Júnior hasta las decisiones que tomas en tu equipo. Entiende la red, cuestiona tus procesos y pon en práctica lo aprendido.'],
  start: ['Entender o movimento', 'Explore the movement', 'Comprendre le mouvement', 'Entender el movimiento'],
  scroll: ['Continue a leitura', 'Keep reading', 'Poursuivre la lecture', 'Seguir leyendo'],
  heroAlt: ['Participantes do ENEJ 2024, de camisetas rosas, reunidos em Florianópolis.', 'Participants in pink shirts gather at ENEJ 2024 in Florianópolis.', 'Des participants en tee-shirts roses se rassemblent à l’ENEJ 2024 à Florianópolis.', 'Participantes con camisetas rosas se reúnen en el ENEJ 2024 en Florianópolis.'],
  documentary: ['ENEJ 2024 · Florianópolis', 'ENEJ 2024 · Florianópolis', 'ENEJ 2024 · Florianópolis', 'ENEJ 2024 · Florianópolis'],
  history: ['História', 'History', 'Histoire', 'Historia'],
  historyTitle: ['Como tudo começou.', 'How it all started.', 'Comment tout a commencé.', 'Cómo empezó todo.'],
  historyIntro: ['O que começou em uma escola francesa tornou-se uma rede de estudantes que aprende atendendo clientes, conduzindo projetos e gerindo suas próprias associações.', 'What began in a French school became a network of students learning through client work, project delivery and the management of their own associations.', 'Née dans une école française, l’initiative est devenue un réseau où les étudiants apprennent en accompagnant des clients, en menant des projets et en gérant leurs associations.', 'Lo que empezó en una escuela francesa se convirtió en una red donde los estudiantes aprenden atendiendo a clientes, dirigiendo proyectos y gestionando sus asociaciones.'],
  timeline: ['Marcos da história', 'Historical milestones', 'Repères historiques', 'Hitos históricos'],
  source: ['Consultar fonte', 'View source', 'Consulter la source', 'Consultar fuente'],
  foundations: ['Fundamentos', 'Foundations', 'Fondements', 'Fundamentos'],
  foundationTitle: ['Por que o MEJ existe.', 'Why the movement exists.', 'Pourquoi le mouvement existe.', 'Por qué existe el movimiento.'],
  purpose: ['O propósito do movimento é aproximar formação universitária e prática empreendedora. Em uma EJ, estudantes conduzem projetos para clientes reais e assumem a gestão da organização.', 'The movement brings higher education and entrepreneurial practice together. In a Junior Enterprise, students deliver work for real clients and manage their own organization.', 'Le mouvement rapproche formation universitaire et pratique entrepreneuriale. Dans une Junior-Entreprise, les étudiants réalisent des projets pour de vrais clients et gèrent leur organisation.', 'El movimiento acerca la formación universitaria a la práctica emprendedora. En una empresa júnior, los estudiantes realizan proyectos para clientes reales y gestionan su organización.'],
  mission: ['Missão', 'Mission', 'Mission', 'Misión'],
  missionBody: ['Formar lideranças empreendedoras por meio da vivência empresarial, com responsabilidade pelo impacto que geram no Brasil.', 'Develop entrepreneurial leaders through hands-on enterprise experience, with responsibility for the impact they have in Brazil.', 'Former des leaders entrepreneurs par l’expérience en entreprise et les responsabiliser quant à leur impact au Brésil.', 'Formar líderes emprendedores mediante la experiencia empresarial, con responsabilidad por el impacto que generan en Brasil.'],
  vision: ['Visão', 'Vision', 'Vision', 'Visión'],
  visionBody: ['No ciclo 2025–2027, a Rede busca formar lideranças protagonistas, impulsionar o desenvolvimento sustentável em conjunto e gerar impacto no ecossistema.', 'In the 2025–2027 cycle, the network aims to develop leaders who take initiative, advance sustainable development together and create impact across the ecosystem.', 'Pour 2025–2027, le réseau veut former des leaders qui prennent des initiatives, faire avancer ensemble le développement durable et agir sur l’écosystème.', 'En el ciclo 2025–2027, la red busca formar líderes que tomen la iniciativa, impulsar juntos el desarrollo sostenible y generar impacto en el ecosistema.'],
  values: ['Valores da Rede', 'Network values', 'Valeurs du réseau', 'Valores de la red'],
  practice: ['Na prática', 'In practice', 'En pratique', 'En la práctica'],
  practiceTitle: ['O jeito DMEJ de olhar para a Rede.', 'How DMEJ looks at the network.', 'Le regard de DMEJ sur le réseau.', 'La mirada de DMEJ sobre la red.'],
  network: ['Rede na Bahia', 'Bahia network', 'Réseau de Bahia', 'Red en Bahía'],
  networkTitle: ['A Rede tem endereço.', 'The network starts locally.', 'Le réseau prend vie sur le terrain.', 'La red empieza cerca.'],
  networkIntro: ['Da execução de projetos em uma EJ à articulação estadual, conheça a rede baiana e sua conexão com a confederação nacional.', 'From delivering projects in a Junior Enterprise to coordinating across the state, explore the Bahia network and how it connects to the national confederation.', 'De la réalisation de projets au sein d’une Junior-Entreprise à la coordination régionale, découvre le réseau de Bahia et ses liens avec la confédération nationale.', 'De la ejecución de proyectos en una empresa júnior a la coordinación estatal, conoce la red de Bahía y su conexión con la confederación nacional.'],
  library: ['Acervo', 'Library', 'Ressources', 'Biblioteca'],
  libraryTitle: ['Leve para a próxima reunião.', 'Take it to your next meeting.', 'À emporter à ta prochaine réunion.', 'Llévalo a tu próxima reunión.'],
  libraryIntro: ['Abra as referências da Rede e use as fichas do DMEJ para sair da leitura com uma decisão, um responsável e uma forma de acompanhar.', 'Open the network’s resources and use DMEJ’s exercises to turn what you read into a decision, an owner and a way to follow up.', 'Consulte les ressources du réseau et utilise les fiches DMEJ pour déboucher sur une décision, une personne responsable et un suivi.', 'Consulta los recursos de la red y utiliza las fichas de DMEJ para convertir la lectura en una decisión, una persona responsable y una forma de seguimiento.'],
  search: ['Buscar no acervo', 'Search the library', 'Rechercher une ressource', 'Buscar en la biblioteca'],
  searchExample: ['Ex.: processos, estratégia', 'E.g. processes, strategy', 'Ex. processus, stratégie', 'P. ej., procesos, estrategia'],
  category: ['Tema do material', 'Resource topic', 'Thème de la ressource', 'Tema del recurso'],
  all: ['Todos os temas', 'All topics', 'Tous les thèmes', 'Todos los temas'],
  none: ['Nenhum material encontrado.', 'No resources found.', 'Aucune ressource trouvée.', 'No se encontraron recursos.'],
  count: ['Materiais encontrados', 'Resources found', 'Ressources trouvées', 'Recursos encontrados'],
  open: ['Abrir material', 'Open resource', 'Ouvrir la ressource', 'Abrir recurso'],
  external: ['Original em português', 'Portuguese original', 'Original en portugais', 'Original en portugués'],
  exercise: ['Ver ficha prática', 'Read the exercise', 'Voir la fiche pratique', 'Ver ficha práctica'],
  sources: ['Fontes e créditos', 'Sources and credits', 'Sources et crédits', 'Fuentes y créditos'],
  closing: ['Que processo você vai melhorar primeiro?', 'Which process will you improve first?', 'Quel processus vas-tu améliorer en premier ?', '¿Qué proceso vas a mejorar primero?'],
  back: ['Voltar ao início', 'Back to top', 'Retour en haut', 'Volver al inicio'],
  independence: ['Projeto editorial independente. Marcas e materiais de terceiros pertencem a seus respectivos titulares.', 'Independent editorial project. Third-party marks and materials belong to their respective owners.', 'Projet éditorial indépendant. Les marques et ressources de tiers appartiennent à leurs titulaires respectifs.', 'Proyecto editorial independiente. Las marcas y los materiales de terceros pertenecen a sus respectivos titulares.'],
  author: ['Idealização, autoria e direção', 'Concept, authorship and direction', 'Conception, réalisation et direction', 'Concepto, autoría y dirección'],
  rights: ['Todos os direitos reservados sobre as contribuições originais de sua autoria ao DMEJ.', 'All rights reserved in his original contributions to DMEJ.', 'Tous droits réservés sur ses contributions originales à DMEJ.', 'Todos los derechos reservados sobre sus aportaciones originales a DMEJ.'],
} satisfies Record<string, Translation>

export const urls = {
  movement: 'https://brasiljunior.org.br/conheca-o-mej',
  history: 'https://www.camara.leg.br/noticias/537771-camara-homenageia-30-anos-do-movimento-empresa-junior-no-brasil/',
  law: 'https://www2.camara.leg.br/legin/fed/lei/2016/lei-13267-6-abril-2016-782843-norma-pl.html',
  strategy: 'https://drive.google.com/drive/folders/1pULrEeNRjYLcHDx2KvRkaF5_9IfjSryN',
  portal: 'https://id.brasiljunior.org.br/sign-in',
  kit: 'https://brasiljunior.org.br/blog/kit-tudao-o-passo-a-passo-para-amadurecer-a-sua-instancia',
  formation: 'https://drive.google.com/drive/folders/1n1rsxoyn6uOx9An3Bcr4q_moJKA3cPyB',
  people: 'https://drive.google.com/drive/folders/11FIr2qtSJn3fKK1E2dc5S26dS3htPcWm',
  transparency: 'https://brasiljunior.org.br/portal-da-transparencia',
  photoTeam: 'https://brasiljunior.org.br/blog/employer-branding-eficaz-como-atrair-talentos-preparados-para-o-futuro',
}

export type Entry = { title: Translation, body: Translation, url?: string }

export const milestones: (Entry & { year: string })[] = [
  { year: '1967', title: ['A experiência francesa', 'The French experiment', 'L’expérience française', 'La experiencia francesa'], body: ['Estudantes na França dão início à experiência que levaria o aprendizado universitário a projetos reais para clientes.', 'Students in France launch an experiment that brings university learning into real client projects.', 'En France, des étudiants lancent une expérience qui applique leurs apprentissages à de véritables projets clients.', 'Estudiantes en Francia ponen en marcha una experiencia que lleva el aprendizaje universitario a proyectos reales para clientes.'], url: urls.history },
  { year: '1988', title: ['O MEJ chega ao Brasil', 'The movement reaches Brazil', 'Le mouvement arrive au Brésil', 'El movimiento llega a Brasil'], body: ['A experiência chega ao país com as primeiras empresas juniores. A EJ da Fundação Getulio Vargas foi pioneira.', 'The first Junior Enterprises bring the model to Brazil. Fundação Getulio Vargas’s Junior Enterprise is an early pioneer.', 'Les premières Junior-Entreprises introduisent le modèle au Brésil. Celle de la Fondation Getulio Vargas fait figure de pionnière.', 'Las primeras empresas júnior llevan el modelo a Brasil. La de la Fundación Getulio Vargas fue pionera.'], url: 'https://brasiljunior.org.br/blog/como-funciona-uma-empresa-junior-descubra-agora' },
  { year: '2016', title: ['O marco legal', 'A legal milestone', 'Un cadre juridique', 'El marco legal'], body: ['A Lei 13.267 disciplina a criação e a organização das EJs no ensino superior brasileiro, reconhecendo a gestão estudantil e a função formativa dos projetos.', 'Law 13,267 sets out how Brazilian Junior Enterprises are formed and organized within higher education, recognizing student management and the educational role of projects.', 'La loi 13 267 encadre la création et l’organisation des Junior-Entreprises dans l’enseignement supérieur brésilien, ainsi que leur gestion étudiante et leur rôle pédagogique.', 'La Ley 13.267 regula la creación y organización de empresas júnior en la educación superior brasileña, con gestión estudiantil y proyectos formativos.'], url: urls.law },
  { year: '25–27', title: ['Uma estratégia de Rede', 'A network-wide strategy', 'Une stratégie de réseau', 'Una estrategia de red'], body: ['O Planejamento Estratégico 2025–2027 conecta prioridades e indicadores entre as instâncias do movimento. Use o ciclo como ponto de partida para discutir como a sua EJ contribui para a Rede.', 'The 2025–2027 strategic plan aligns priorities and indicators across the movement. Use it to discuss how your Junior Enterprise contributes to the network.', 'Le plan stratégique 2025–2027 relie les priorités et les indicateurs du mouvement. Utilise-le pour discuter de la contribution de ta Junior-Entreprise au réseau.', 'El plan estratégico 2025–2027 alinea prioridades e indicadores del movimiento. Úsalo para discutir cómo contribuye tu empresa júnior a la red.'], url: urls.strategy },
]

export const values: Translation[] = [
  ['Orgulho de ser MEJ', 'Pride in the movement', 'Fierté d’appartenir au mouvement', 'Orgullo de ser MEJ'],
  ['Postura empreendedora', 'Entrepreneurial mindset', 'Esprit entrepreneurial', 'Actitud emprendedora'],
  ['Compromisso com resultado', 'Commitment to results', 'Engagement envers les résultats', 'Compromiso con los resultados'],
  ['Sinergia', 'Synergy', 'Synergie', 'Sinergia'],
  ['Transparência', 'Transparency', 'Transparence', 'Transparencia'],
  ['Autenticidade', 'Authenticity', 'Authenticité', 'Autenticidad'],
]

export const pillars: Entry[] = [
  { title: ['Inconformismo', 'Question the status quo', 'Remettre en question', 'Inconformismo'], body: ['Escolha uma rotina que todo mundo repete. Descubra qual problema ela resolvia e teste uma melhoria com a equipe.', 'Pick a routine everyone follows. Find out what problem it was meant to solve and test an improvement with the team.', 'Choisis une routine que tout le monde suit. Identifie le problème qu’elle devait résoudre et teste une amélioration avec l’équipe.', 'Elige una rutina que todos repiten. Averigua qué problema resolvía y prueba una mejora con el equipo.'] },
  { title: ['Protagonismo jovem', 'Youth leadership', 'Leadership des jeunes', 'Protagonismo juvenil'], body: ['Dê a alguém em formação uma decisão real, acesso às informações e uma conversa de revisão depois da entrega.', 'Give a developing team member a real decision, access to information and a review conversation after delivery.', 'Confie une vraie décision à une personne en formation, donne-lui accès aux informations et organise un retour après la livraison.', 'Dale a alguien en formación una decisión real, acceso a la información y una conversación de revisión después de la entrega.'] },
  { title: ['Transparência', 'Transparency', 'Transparence', 'Transparencia'], body: ['Registre decisões, responsáveis e critérios em um lugar que a equipe consiga consultar na próxima gestão.', 'Record decisions, owners and criteria somewhere the team can consult during the next term.', 'Consigne les décisions, les responsables et les critères là où l’équipe pourra les retrouver au prochain mandat.', 'Registra decisiones, responsables y criterios en un lugar que el equipo pueda consultar en el próximo mandato.'] },
  { title: ['Autonomia de processos', 'Process ownership', 'Autonomie des processus', 'Autonomía de procesos'], body: ['Defina quem decide, em que condições e quando escalar. Documente o fluxo para que ele sobreviva à troca de pessoas.', 'Define who decides, under what conditions and when to escalate. Document the workflow so it survives team changes.', 'Définis qui décide, dans quelles conditions et quand faire remonter un problème. Documente le processus pour qu’il survive aux changements d’équipe.', 'Define quién decide, en qué condiciones y cuándo escalar. Documenta el flujo para que sobreviva a los cambios de equipo.'] },
]

export const organizations: (Entry & { name: string })[] = [
  { name: 'CIMATEC Jr.', title: ['Empresa Júnior', 'Junior Enterprise', 'Junior-Entreprise', 'Empresa Júnior'], body: ['Empresa Júnior do SENAI CIMATEC, em Salvador, que desenvolve soluções de engenharia e oferece a seus membros experiência em projetos reais.', 'SENAI CIMATEC’s Junior Enterprise in Salvador develops engineering solutions and gives members experience in real projects.', 'La Junior-Entreprise du SENAI CIMATEC à Salvador développe des solutions d’ingénierie et permet à ses membres de travailler sur de vrais projets.', 'Empresa júnior del SENAI CIMATEC en Salvador que desarrolla soluciones de ingeniería y ofrece a sus integrantes experiencia en proyectos reales.'], url: 'https://br.linkedin.com/company/cimatecjr' },
  { name: 'NEJ Salvador', title: ['Núcleo regional', 'Regional hub', 'Pôle régional', 'Núcleo regional'], body: ['Núcleo de Salvador e Região Metropolitana que aproxima EJs e apoia seu desenvolvimento com mentorias, capacitações e encontros.', 'A hub for Salvador and its metropolitan area that connects Junior Enterprises and supports them through mentoring, training and events.', 'Pôle de Salvador et de sa région métropolitaine qui relie les Junior-Entreprises et les soutient par du mentorat, des formations et des rencontres.', 'Núcleo de Salvador y su área metropolitana que conecta a las empresas júnior y las apoya con mentorías, formación y encuentros.'], url: 'https://www.linkedin.com/company/nejsalvador' },
  { name: 'UNIJr-BA', title: ['Federação estadual', 'State federation', 'Fédération de Bahia', 'Federación estatal'], body: ['Federação das Empresas Juniores da Bahia. Atua na escala estadual, representando e conectando a rede baiana.', 'The Bahia Federation of Junior Enterprises represents and connects the network across the state.', 'La Fédération des Junior-Entreprises de Bahia représente et relie le réseau à l’échelle de l’État.', 'La Federación de Empresas Juniores de Bahía representa y conecta a la red en todo el estado.'], url: 'https://br.linkedin.com/company/unijrba' },
  { name: 'Brasil Júnior', title: ['Confederação nacional', 'National confederation', 'Confédération nationale', 'Confederación nacional'], body: ['Instância nacional que representa o MEJ brasileiro e articula prioridades comuns entre as federações.', 'The national body that represents Brazil’s movement and coordinates shared priorities across federations.', 'L’organisation nationale représente le mouvement brésilien et coordonne les priorités communes des fédérations.', 'La instancia nacional representa al movimiento brasileño y coordina prioridades compartidas entre federaciones.'], url: 'https://brasiljunior.org.br/conheca-a-brasil-junior' },
]
