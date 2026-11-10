import { urls } from './content.ts'
import type { Entry } from './content.ts'

type Translation = Entry['title']
export const guideTopics = {
  movement: ['Fundamentos do MEJ', 'Movement foundations', 'Fondements du mouvement', 'Fundamentos del movimiento'],
  metrics: ['Indicadores e estratégia', 'Metrics and strategy', 'Indicateurs et stratégie', 'Indicadores y estrategia'],
  portal: ['Portal BJ e auditoria', 'BJ Portal and auditing', 'Portail BJ et audit', 'Portal BJ y auditoría'],
  management: ['Gestão da EJ', 'Managing a Junior Enterprise', 'Gestion d’une Junior-Entreprise', 'Gestión de la empresa júnior'],
} satisfies Record<string, Translation>

export const guidePreviews = {
  movement: {
    body: ['Uma EJ executa projetos. Núcleos, federações e a Brasil Júnior conectam e desenvolvem a Rede. Entenda o papel de cada um e como uma EJ começa.', 'A Junior Enterprise delivers projects. Hubs, federations and Brasil Júnior connect and develop the network. See what each does and how a team gets started.', 'Une Junior-Entreprise réalise des projets. Les pôles, les fédérations et Brasil Júnior relient et développent le réseau. Découvre leur rôle et comment créer une équipe.', 'Una empresa júnior ejecuta proyectos. Núcleos, federaciones y Brasil Júnior conectan y desarrollan la red. Descubre qué hace cada uno y cómo nace un equipo.'],
    example: ['Instâncias, fundação e federação', 'Network bodies, founding and affiliation', 'Instances, création et affiliation', 'Instancias, fundación y afiliación'],
  },
  metrics: {
    body: ['CSAT mede a satisfação do cliente. O cluster agrupa EJs por maturidade usando o CSAT e outros dados. Veja como interpretar os números e agir a partir deles.', 'CSAT measures customer satisfaction. Clusters group teams by maturity using CSAT and other data. Learn how to read the numbers and act on them.', 'Le CSAT mesure la satisfaction des clients. Les clusters regroupent les équipes par maturité à partir du CSAT et d’autres données. Apprends à interpréter ces chiffres et à agir.', 'El CSAT mide la satisfacción del cliente. Los clústeres agrupan equipos por madurez mediante el CSAT y otros datos. Aprende a interpretar las cifras y actuar con ellas.'],
    example: ['CSAT, clusters e faturamento colaborativo', 'CSAT, clusters and collaborative revenue', 'CSAT, clusters et chiffre d’affaires collaboratif', 'CSAT, clústeres y facturación colaborativa'],
  },
  portal: {
    body: ['O Portal BJ reúne resultados, registros e ferramentas da Rede. Saiba onde consultar dados e como organizar documentos para comprovar o que sua EJ declarou.', 'The BJ Portal brings together network results, records and tools. Find out where to look up data and how to organize evidence for what your team reports.', 'Le portail BJ centralise les résultats, les données et les outils du réseau. Découvre où consulter les données et comment préparer les justificatifs de ton équipe.', 'El Portal BJ reúne resultados, registros y herramientas de la red. Aprende dónde consultar los datos y cómo preparar evidencias de lo que declara tu equipo.'],
    example: ['Selo EJ, evidências e Kit Tudão', 'Selo EJ, evidence and Kit Tudão', 'Selo EJ, justificatifs et Kit Tudão', 'Selo EJ, evidencias y Kit Tudão'],
  },
  management: {
    body: ['Da proposta à entrega, alguém precisa decidir, executar e registrar. Veja como combinar responsabilidades e passar processos para a próxima gestão.', 'From proposal to delivery, someone needs to decide, do the work and keep a record. Learn how to assign responsibilities and hand processes over to the next team.', 'De l’offre à la livraison, il faut décider, agir et garder une trace. Apprends à répartir les responsabilités et à transmettre les processus à l’équipe suivante.', 'De la propuesta a la entrega, alguien debe decidir, ejecutar y registrar. Aprende a repartir responsabilidades y a transferir procesos al siguiente equipo.'],
    example: ['Projetos, governança e sucessão', 'Projects, governance and handover', 'Projets, gouvernance et passation', 'Proyectos, gobernanza y relevo'],
  },
} satisfies Record<keyof typeof guideTopics, { body: Translation; example: Translation }>

export type Lesson = Entry & {
  id: string
  topic: keyof typeof guideTopics
  example: Translation
  formula?: Translation
  source: string
  url: string
}

export const guideCopy = {
  nav: ['Guia', 'Guide', 'Guide', 'Guía'],
  title: ['Destrinche o MEJ.', 'Unpack the movement.', 'Décrypte le mouvement.', 'Desglosa el movimiento.'],
  intro: ['Entenda quem faz o quê, o que o PE 2025–2027 mede, como usar o Portal BJ e o que levar para a próxima reunião da sua EJ.', 'Learn who does what, what the 2025–2027 plan measures, how to use the BJ Portal and what to take to your next team meeting.', 'Découvre qui fait quoi, ce que mesure le plan 2025–2027, comment utiliser le portail BJ et quoi aborder à la prochaine réunion.', 'Descubre quién hace qué, qué mide el plan 2025–2027, cómo usar el Portal BJ y qué llevar a la próxima reunión.'],
  apply: ['Exemplo para a sua EJ', 'Example for your team', 'Exemple pour ton équipe', 'Ejemplo para tu equipo'],
  search: ['Buscar no guia', 'Search the guide', 'Rechercher dans le guide', 'Buscar en la guía'],
  placeholder: ['Ex.: instância, CSAT, auditoria', 'E.g. federation, CSAT, audit', 'Ex. fédération, CSAT, audit', 'P. ej., federación, CSAT, auditoría'],
  category: ['Área de conhecimento', 'Knowledge area', 'Domaine', 'Área de conocimiento'],
  found: ['Capítulos encontrados', 'Chapters found', 'Chapitres trouvés', 'Capítulos encontrados'],
  empty: ['Nenhum capítulo encontrado.', 'No chapters found.', 'Aucun chapitre trouvé.', 'No se encontraron capítulos.'],
  map: ['Por onde começar', 'Where to begin', 'Par où commencer', 'Por dónde empezar'],
  mapTitle: ['O MEJ em quatro áreas.', 'Four ways into the movement.', 'Quatre portes d’entrée dans le mouvement.', 'Cuatro maneras de explorar el movimiento.'],
  mapEvent: ['Ver a cobertura do ENEJ 2026', 'Explore ENEJ 2026 coverage', 'Découvrir la couverture de l’ENEJ 2026', 'Ver la cobertura del ENEJ 2026'],
} satisfies Record<string, Translation>

export const guideUrls = {
  clusters: 'https://drive.google.com/file/d/1mFYA3wcuPsW3swFqlSUs8POx2I2LGN3F/view',
  assumptions: 'https://drive.google.com/file/d/1CyITjHqQA6Eu_Tkh_gX_VozUMVse_3du/view',
}

export const lessons: Lesson[] = [
  {
    id: 'principios', topic: 'movement',
    title: ['Princípios da vivência empresarial', 'Principles of learning through enterprise', 'Principes de l’apprentissage en entreprise', 'Principios de la experiencia empresarial'],
    body: [
      'Uma EJ é uma associação sem fins lucrativos gerida por estudantes de graduação. Os estudantes tomam decisões sobre a gestão e trabalham em projetos reais, com orientação e supervisão nas atividades. Os recursos sustentam a associação e a formação dos membros. Inconformismo, transparência e sinergia aparecem em decisões concretas: testar uma melhoria, registrar critérios e dividir responsabilidades com a Rede.',
      'A Junior Enterprise is a nonprofit association run by undergraduate students. Students make management decisions and work on real projects with guidance and supervision. Resources support the association and member learning. Questioning routines, being transparent and working together show up in concrete decisions: test an improvement, document criteria and share responsibilities with the network.',
      'Une Junior-Entreprise est une association à but non lucratif gérée par des étudiants. Ceux-ci prennent les décisions de gestion et travaillent sur de vrais projets, avec accompagnement et supervision. Les ressources soutiennent l’association et la formation. La remise en question, la transparence et la coopération se traduisent en décisions concrètes : tester une amélioration, documenter les critères et partager les responsabilités.',
      'Una empresa júnior es una asociación sin fines de lucro gestionada por estudiantes de grado. Los estudiantes toman decisiones de gestión y trabajan en proyectos reales con orientación y supervisión. Los recursos sostienen a la asociación y la formación de sus miembros. El inconformismo, la transparencia y la cooperación se reflejan en decisiones concretas: probar una mejora, documentar los criterios y compartir responsabilidades.',
    ],
    example: ['Na passagem de gestão, peça à equipe que recebe o processo para reproduzir uma decisão anterior com os registros existentes. Se ela precisar perguntar a quem saiu, descubra o que falta documentar.', 'During a handover, ask the incoming team to reconstruct a past decision from existing records. If they need to ask someone who left, find out what needs documenting.', 'À la passation, demande à l’équipe entrante de reconstituer une décision à partir des traces existantes. Si elle doit interroger quelqu’un qui est parti, identifie ce qui reste à documenter.', 'En el relevo, pide al equipo entrante que reconstruya una decisión anterior con los registros disponibles. Si necesita preguntar a alguien que se fue, averigua qué falta documentar.'],
    source: 'Lei 13.267/2016', url: urls.law,
  },
  {
    id: 'cluster', topic: 'metrics',
    title: ['O que é cluster?', 'What is a cluster?', 'Qu’est-ce qu’un cluster ?', '¿Qué es un clúster?'],
    body: [
      'O Sistema de Clusterização 4.0 agrupa as EJs em cinco faixas de maturidade. O índice combina quatro dimensões: acessibilidade (faturamento), qualidade (CSAT), formação (engajamento com o MEJ) e impacto (representatividade do faturamento colaborativo). A régua converte o índice em uma faixa de 1 a 5. A evolução oficial também depende de condições do ciclo, como Selo EJ e indicadores essenciais.',
      'The 4.0 system groups Junior Enterprises into five maturity bands. The index combines four dimensions: accessibility (revenue), quality (CSAT), development (engagement with the movement) and impact (collaborative share of revenue). The scale maps the index to a band from 1 to 5. Official advancement also depends on cycle requirements such as Selo EJ and essential indicators.',
      'Le système 4.0 répartit les Junior-Entreprises en cinq niveaux de maturité. L’indice combine quatre dimensions : accessibilité (chiffre d’affaires), qualité (CSAT), formation (engagement dans le mouvement) et impact (part du chiffre d’affaires collaboratif). Le barème traduit l’indice en un niveau de 1 à 5. La progression officielle dépend aussi du cycle, notamment du Selo EJ et des indicateurs essentiels.',
      'El sistema 4.0 agrupa a las empresas júnior en cinco niveles de madurez. El índice combina accesibilidad (facturación), calidad (CSAT), formación (participación en el movimiento) e impacto (peso de la facturación colaborativa). La escala traduce el índice a un nivel del 1 al 5. El ascenso oficial también depende de las condiciones del ciclo, como el Selo EJ y los indicadores esenciales.',
    ],
    example: ['Se duas EJs faturam o mesmo, elas ainda podem ter índices diferentes. Uma pode ter mais clientes satisfeitos ou mais membros envolvidos em iniciativas da Rede. Consulte a régua vigente antes de interpretar a faixa.', 'Two teams with the same revenue can have different indexes. One may have more satisfied clients or more members engaged in network initiatives. Check the current scale before interpreting the band.', 'Deux équipes au même chiffre d’affaires peuvent obtenir des indices différents selon la satisfaction des clients ou la participation au réseau. Vérifie le barème en vigueur avant d’interpréter le niveau.', 'Dos equipos con la misma facturación pueden tener índices diferentes por la satisfacción de sus clientes o la participación en la red. Consulta la escala vigente antes de interpretar el nivel.'],
    formula: [
      'Índice = faturamento × CSAT × (1 + engajamento) × (1 + proporção colaborativa) × 100. Use proporções de 0 a 1.',
      'Index = revenue × CSAT × (1 + engagement) × (1 + collaborative share) × 100. Use proportions from 0 to 1.',
      'Indice = chiffre d’affaires × CSAT × (1 + engagement) × (1 + part collaborative) × 100. Utilise des proportions de 0 à 1.',
      'Índice = facturación × CSAT × (1 + participación) × (1 + proporción colaborativa) × 100. Usa proporciones entre 0 y 1.',
    ],
    source: 'Brasil Júnior · Fundamentos dos Clusters 4.0', url: guideUrls.clusters,
  },
  {
    id: 'fundamentos-clusters', topic: 'metrics',
    title: ['Como usar os Fundamentos dos Clusters', 'How to use the cluster framework', 'Comment utiliser le référentiel des clusters', 'Cómo usar los fundamentos de los clústeres'],
    body: [
      'Os Fundamentos ajudam a investigar dores em quatro eixos: projetos e modelo de negócios, vendas e mercado, gestão e operações, time e cultura. Comece por um efeito observável, investigue sua causa e escolha um plano de ação. Volte ao diagnóstico depois de testar a mudança.',
      'The framework helps teams investigate problems across projects and business model, sales and market, management and operations, and team and culture. Start with a visible symptom, investigate its cause and choose an action. Revisit the diagnosis after testing the change.',
      'Le référentiel aide à diagnostiquer quatre axes : projets et modèle économique, ventes et marché, gestion et opérations, équipe et culture. Pars d’un symptôme observable, cherche sa cause et choisis une action. Reviens au diagnostic après le test.',
      'El marco ayuda a diagnosticar cuatro ejes: proyectos y modelo de negocio, ventas y mercado, gestión y operaciones, y equipo y cultura. Parte de un efecto observable, investiga su causa y elige una acción. Vuelve al diagnóstico después de la prueba.',
    ],
    example: ['Três entregas atrasaram. Compare os escopos, a carga do time e os pontos de aprovação. Se o gargalo for a aprovação, teste um responsável e um prazo de resposta por etapa durante o próximo mês.', 'Three deliveries ran late. Compare scopes, workload and approval steps. If approval is the bottleneck, test assigning an owner and a response deadline to each stage for a month.', 'Trois livraisons ont pris du retard. Compare le périmètre, la charge et les étapes de validation. Si la validation bloque, teste un responsable et un délai par étape pendant un mois.', 'Tres entregas se retrasaron. Compara el alcance, la carga del equipo y las aprobaciones. Si el bloqueo está en la aprobación, prueba un responsable y un plazo por etapa durante un mes.'],
    source: 'Brasil Júnior · Fundamentos dos Clusters 4.0', url: guideUrls.clusters,
  },
  {
    id: 'csat', topic: 'metrics',
    title: ['CSAT: o que o cliente percebeu?', 'CSAT: what did the client experience?', 'CSAT : qu’a vécu le client ?', 'CSAT: ¿cómo vivió el cliente la experiencia?'],
    body: [
      'Customer Satisfaction Score mede a satisfação com a solução entregue. O PE usa a média das notas de 1 a 5 e prevê coleta mínima de 80% na base elegível de soluções finalizadas no ano, com premissa de nota 3,5. A nota mostra a percepção de quem respondeu. A cobertura mostra quanto da base foi ouvida.',
      'Customer Satisfaction Score measures satisfaction with the delivered solution. The plan averages scores from 1 to 5 and calls for responses from at least 80% of eligible solutions completed in the year, with a benchmark of 3.5. The score reflects respondents’ experience, while coverage shows how much of the eligible base answered.',
      'Le Customer Satisfaction Score mesure la satisfaction à l’égard de la solution livrée. Le plan retient la moyenne des notes de 1 à 5 et prévoit au moins 80 % de réponses parmi les solutions éligibles achevées dans l’année, avec un seuil de 3,5. La note reflète l’expérience des répondants. La couverture indique la part des réponses.',
      'El Customer Satisfaction Score mide la satisfacción con la solución entregada. El plan usa el promedio de notas del 1 al 5 y exige respuestas de al menos el 80 % de las soluciones elegibles finalizadas durante el año, con una referencia de 3,5. La nota refleja la experiencia de quienes respondieron y la cobertura indica qué parte de la base respondió.',
    ],
    example: ['Se 4 de 5 projetos elegíveis recebem notas 5, 4, 4 e 3, o CSAT é 4,0 e a cobertura é 80%. Leia os comentários para entender o 3 e testar uma melhoria na próxima entrega.', 'If 4 of 5 eligible projects receive scores of 5, 4, 4 and 3, CSAT is 4.0 and coverage is 80%. Read the comments to understand the 3 and test an improvement on your next delivery.', 'Si 4 projets éligibles sur 5 obtiennent les notes 5, 4, 4 et 3, le CSAT vaut 4,0 et la couverture 80 %. Lis les commentaires pour comprendre le 3 et tester une amélioration.', 'Si 4 de 5 proyectos elegibles reciben notas de 5, 4, 4 y 3, el CSAT es 4,0 y la cobertura, 80 %. Lee los comentarios para entender el 3 y probar una mejora.'],
    source: 'Brasil Júnior · Premissas e Fundamentos Estratégicos', url: guideUrls.assumptions,
  },
  {
    id: 'colaboracao', topic: 'metrics',
    title: ['Faturamento colaborativo', 'Collaborative revenue', 'Chiffre d’affaires collaboratif', 'Facturación colaborativa'],
    body: [
      'É o faturamento de contratos elegíveis em que a EJ compartilha a entrega de uma solução ao cliente final com outra EJ ou agente do ecossistema, com contrapartida financeira. A terceirização em que o prestador não se relaciona com o cliente final fica fora. A representatividade divide o faturamento colaborativo pelo total. A taxa de colaboração acompanha sua variação de um ano para o outro.',
      'This is revenue from eligible contracts where a Junior Enterprise shares delivery to the end client with another enterprise or ecosystem partner, with payment. Outsourcing where the contractor has no relationship with the end client is excluded. The collaborative share divides collaborative revenue by total revenue. The collaboration rate tracks year-over-year change.',
      'Il s’agit du chiffre d’affaires des contrats éligibles où la Junior-Entreprise réalise une solution pour le client final avec une autre structure, avec rémunération. La sous-traitance sans relation avec le client final est exclue. La part collaborative rapporte ce chiffre au total. Le taux de collaboration suit son évolution annuelle.',
      'Es la facturación de contratos elegibles en los que la empresa júnior comparte la entrega al cliente final con otra empresa júnior o un agente del ecosistema, con contraprestación económica. Se excluye la subcontratación sin relación con el cliente final. El peso colaborativo divide esa facturación por la total. La tasa de colaboración sigue su variación anual.',
    ],
    example: ['Uma EJ de engenharia e outra de design entregam juntas um serviço ao cliente. Cada uma registra sua parcela no Portal BJ. Se uma EJ apura R$ 20 mil em contratos elegíveis e R$ 100 mil no total, a representatividade dela é 20%.', 'An engineering team and a design team deliver a service together. Each reports its own share in the BJ Portal. If one team records R$20,000 from eligible contracts and R$100,000 total, its collaborative share is 20%.', 'Une équipe d’ingénierie et une équipe de design livrent ensemble un service. Chacune déclare sa part sur le portail BJ. Avec 20 000 R$ de contrats éligibles pour 100 000 R$ au total, la part collaborative est de 20 %.', 'Un equipo de ingeniería y otro de diseño entregan juntos un servicio. Cada uno registra su parte en el Portal BJ. Con R$20.000 de contratos elegibles sobre R$100.000 en total, el peso colaborativo es del 20 %.'],
    source: 'Brasil Júnior · Premissas e Fundamentos Estratégicos', url: guideUrls.assumptions,
  },
]
