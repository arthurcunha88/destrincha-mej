import { urls } from './content.ts'
import type { Entry } from './content.ts'
import { guideUrls, lessons } from './field-guide.ts'
import { operations } from './operations.ts'

type Translation = Entry['title']
type Topic = 'strategy' | 'network' | 'identity' | 'practice'
type Faq = {
  id: string
  topic: Topic
  question: Translation
  paragraphs: Translation[]
  points?: Translation[]
  formula?: Translation
  source: string
  url: string
}

export const faqTopics = {
  strategy: ['Cluster e indicadores', 'Clusters and metrics', 'Clusters et indicateurs', 'Clústeres e indicadores'],
  network: ['Instâncias e responsabilidades', 'Network bodies and responsibilities', 'Instances et responsabilités', 'Instancias y responsabilidades'],
  identity: ['Missão, visão e valores', 'Mission, vision and values', 'Mission, vision et valeurs', 'Misión, visión y valores'],
  practice: ['Projetos e Portal BJ', 'Projects and the BJ Portal', 'Projets et portail BJ', 'Proyectos y Portal BJ'],
} satisfies Record<Topic, Translation>

export const faqCopy = {
  nav: ['FAQ MEJ', 'MEJ FAQ', 'FAQ MEJ', 'FAQ MEJ'],
  title: ['Pergunte. Entenda. Aplique.', 'Ask. Understand. Apply.', 'Questionner. Comprendre. Agir.', 'Pregunta. Entiende. Aplica.'],
  intro: ['Respostas para consultar antes da reunião, conferir um indicador ou entender quem pode ajudar sua EJ. A referência estratégica é o ciclo 2025–2027 e a versão de outubro de 2025 dos Fundamentos dos Clusters 4.0.', 'Answers to check before a meeting, review a metric or find who can help your team. The strategic references are the 2025–2027 cycle and the October 2025 Clusters 4.0 framework.', 'Des réponses à consulter avant une réunion, pour vérifier un indicateur ou trouver qui peut aider ton équipe. Les références sont le cycle 2025–2027 et le référentiel Clusters 4.0 d’octobre 2025.', 'Respuestas para consultar antes de una reunión, revisar un indicador o saber quién puede ayudar a tu equipo. Las referencias son el ciclo 2025–2027 y los Fundamentos de Clústeres 4.0 de octubre de 2025.'],
  search: ['Buscar nas perguntas', 'Search questions', 'Rechercher une question', 'Buscar preguntas'],
  placeholder: ['Ex.: subir de cluster, valores, núcleo', 'E.g. cluster progression, values, hub', 'Ex. progression, valeurs, pôle', 'P. ej., subir de clúster, valores, núcleo'],
  topic: ['Assunto', 'Topic', 'Sujet', 'Tema'],
  found: ['Perguntas encontradas', 'Questions found', 'Questions trouvées', 'Preguntas encontradas'],
  empty: ['Nenhuma pergunta encontrada. Tente outro termo.', 'No questions found. Try another term.', 'Aucune question trouvée. Essaie un autre terme.', 'No se encontraron preguntas. Prueba otro término.'],
  link: ['Link desta pergunta', 'Link to this question', 'Lien vers cette question', 'Enlace a esta pregunta'],
  access: ['Referência institucional consultada na RNPE de 14/10/2026. O acesso depende das permissões do acervo.', 'Institutional reference checked in the October 14, 2026 RNPE. Access depends on archive permissions.', 'Référence vérifiée dans la RNPE du 14/10/2026. L’accès dépend des autorisations des archives.', 'Referencia consultada en la RNPE del 14/10/2026. El acceso depende de los permisos del archivo.'],
} satisfies Record<string, Translation>

const clusters = { source: 'Brasil Júnior · Fundamentos dos Clusters 4.0 · outubro/2025', url: guideUrls.clusters }
const assumptions = { source: 'Brasil Júnior · Premissas e Fundamentos Estratégicos · PE 2025–2027', url: guideUrls.assumptions }
export const cimatecReference = { source: 'CIMATEC Jr. · RNPE 14/10/2026 · missão, visão e valores', url: 'https://www.canva.com/design/DAHX_OsYHj4/view' }

export const faqs: Faq[] = [
  {
    id: 'indicadores-cluster', topic: 'strategy',
    question: ['Quais indicadores entram no índice de cluster?', 'Which metrics make up the cluster index?', 'Quels indicateurs composent l’indice de cluster ?', '¿Qué indicadores componen el índice de clúster?'],
    paragraphs: [
      ['O índice 4.0 combina faturamento, CSAT, engajamento com o MEJ e representatividade do faturamento colaborativo. Eles representam as dimensões de acessibilidade, qualidade, formação e impacto.', 'The 4.0 index combines revenue, CSAT, engagement with the movement and collaborative revenue share. They represent accessibility, quality, development and impact.', 'L’indice 4.0 combine chiffre d’affaires, CSAT, engagement dans le mouvement et part collaborative. Ils représentent l’accessibilité, la qualité, la formation et l’impact.', 'El índice 4.0 combina facturación, CSAT, participación y proporción colaborativa. Representan accesibilidad, calidad, formación e impacto.'],
      ['Engajamento e proporção colaborativa entram como frações de 0 a 1. Use 0,50 para 50%. Confira os dados elegíveis e a cobertura de CSAT antes de calcular.', 'Engagement and collaborative share use fractions from 0 to 1. Enter 50% as 0.50. Check eligible data and CSAT coverage first.', 'L’engagement et la part collaborative utilisent des fractions de 0 à 1. Pour 50 %, utilise 0,50. Vérifie les données éligibles et la couverture CSAT.', 'La participación y la proporción colaborativa usan fracciones de 0 a 1. Introduce el 50% como 0,50. Verifica los datos elegibles y la cobertura del CSAT.'],
    ],
    formula: ['Índice = faturamento × CSAT × (1 + engajamento) × (1 + proporção colaborativa) × 100', 'Index = revenue × CSAT × (1 + engagement) × (1 + collaborative share) × 100', 'Indice = chiffre d’affaires × CSAT × (1 + engagement) × (1 + part collaborative) × 100', 'Índice = facturación × CSAT × (1 + participación) × (1 + proporción colaborativa) × 100'],
    ...clusters,
  },
  {
    id: 'eixos-pilares', topic: 'strategy',
    question: ['Quais são os eixos de cluster e seus pilares?', 'What are the cluster axes and their pillars?', 'Quels sont les axes des clusters et leurs piliers ?', '¿Cuáles son los ejes de los clústeres y sus pilares?'],
    paragraphs: [['Os Fundamentos organizam o diagnóstico em quatro eixos. Cada um detalha objetivos, dores e efeitos observáveis por cluster. Os pilares ajudam a localizar o problema antes de escolher uma ação.', 'The framework organizes diagnosis into four axes, with goals, problems and observable effects per cluster. Pillars help locate the problem before choosing an action.', 'Le référentiel structure le diagnostic en quatre axes, avec objectifs, difficultés et effets observables par cluster. Les piliers aident à situer le problème avant d’agir.', 'El marco organiza el diagnóstico en cuatro ejes, con objetivos, problemas y efectos observables por clúster. Los pilares ayudan a localizar el problema antes de actuar.']],
    points: [
      ['Projetos e Modelo de Negócios — proposta de valor, mecanismo de lucro, cadeia de valor, diversificação e inovação.', 'Projects and Business Model — value proposition, revenue mechanism, value chain, diversification and innovation.', 'Projets et modèle économique — proposition de valeur, mécanisme de revenu, chaîne de valeur, diversification et innovation.', 'Proyectos y Modelo de Negocio — propuesta de valor, mecanismo de ingresos, cadena de valor, diversificación e innovación.'],
      ['Vendas e Mercado — estratégia comercial, aquisição, conversão e retenção.', 'Sales and Market — sales strategy, acquisition, conversion and retention.', 'Ventes et marché — stratégie commerciale, acquisition, conversion et fidélisation.', 'Ventas y Mercado — estrategia comercial, adquisición, conversión y retención.'],
      ['Gestão e Operações — planejamento estratégico, sistema de gestão, sustentabilidade financeira e estrutura organizacional.', 'Management and Operations — strategic planning, management system, financial sustainability and organizational structure.', 'Gestion et opérations — planification stratégique, système de gestion, pérennité financière et structure organisationnelle.', 'Gestión y Operaciones — planificación estratégica, sistema de gestión, sostenibilidad financiera y estructura organizativa.'],
      ['Time e Cultura — atração e retenção, cultura organizacional, engajamento e produtividade, formação de lideranças e desenvolvimento de habilidades técnicas.', 'Team and Culture — attraction and retention, organizational culture, engagement and productivity, leadership development and technical skills.', 'Équipe et culture — attraction et fidélisation, culture organisationnelle, engagement et productivité, formation des leaders et compétences techniques.', 'Equipo y Cultura — atracción y retención, cultura organizativa, participación y productividad, formación de líderes y competencias técnicas.'],
    ],
    ...clusters,
  },
  {
    id: 'dimensoes-eixos', topic: 'strategy',
    question: ['Dimensões do índice e eixos de evolução são a mesma coisa?', 'Are index dimensions and development axes the same thing?', 'Dimensions de l’indice et axes d’évolution désignent-ils la même chose ?', '¿Las dimensiones del índice y los ejes de evolución son lo mismo?'],
    paragraphs: [['As dimensões ligam os indicadores ao propósito do ciclo. Os eixos ajudam a diagnosticar como a organização funciona. Uma nota baixa de CSAT está na dimensão de qualidade e pode levar a investigar escopo, execução e comunicação nos eixos de Projetos ou Gestão e Operações.', 'Dimensions link metrics to the cycle’s purpose. Axes diagnose how the organization works. Low CSAT belongs to quality and can prompt investigation of scope, delivery and communication in Projects or Operations.', 'Les dimensions relient les indicateurs au sens du cycle. Les axes servent au diagnostic. Un CSAT faible relève de la qualité et peut conduire à examiner le périmètre, les livraisons et la communication.', 'Las dimensiones conectan indicadores y propósito. Los ejes ayudan a diagnosticar la organización. Un CSAT bajo pertenece a calidad y puede llevar a revisar alcance, ejecución y comunicación.']],
    ...clusters,
  },
  {
    id: 'essenciais', topic: 'strategy',
    question: ['Quais são os indicadores essenciais das EJs?', 'Which indicators are essential for Junior Enterprises?', 'Quels sont les indicateurs essentiels des Junior-Entreprises ?', '¿Cuáles son los indicadores esenciales de las empresas júnior?'],
    paragraphs: [
      ['No PE 2025–2027, são faturamento, CSAT, tempo de permanência no MEJ e engajamento com o MEJ. Cada um tem base, meta e regra de validação próprias. A permanência é acompanhada por pessoa e consolidada para a EJ.', 'For 2025–2027, they are revenue, CSAT, time in the movement and engagement. Each has its own base, target and validation rules. Time in the movement is tracked individually and consolidated for the team.', 'Pour 2025–2027, il s’agit du chiffre d’affaires, du CSAT, de la durée d’adhésion et de l’engagement. Chacun a sa base, son objectif et ses règles. La durée est suivie par personne puis consolidée.', 'En 2025–2027 son facturación, CSAT, tiempo de permanencia y participación. Cada uno tiene su base, meta y validación. La permanencia se sigue por persona y se consolida para el equipo.'],
      ['O atingimento anual dos essenciais participa dos títulos do triênio. Confira as metas cadastradas e os resultados auditados do ano para avaliar a situação da EJ.', 'Annual achievement contributes to recognition titles. Check registered targets and audited results for that year.', 'La réalisation annuelle participe aux distinctions. Vérifie les objectifs enregistrés et les résultats audités de l’année.', 'El logro anual contribuye a los títulos. Consulta las metas registradas y los resultados auditados del año.'],
    ],
    ...assumptions,
  },
  {
    id: 'complementares', topic: 'strategy',
    question: ['Quais são os indicadores complementares?', 'Which indicators are complementary?', 'Quels sont les indicateurs complémentaires ?', '¿Cuáles son los indicadores complementarios?'],
    paragraphs: [
      ['Para EJs, o PE reúne políticas de diversidade e inclusão, projetos de impacto e taxa de colaboração. Eles dão origem aos selos de diversidade, impacto e colaboração, com comprovação e renovação anual.', 'For teams, the plan lists diversity and inclusion policies, impact projects and collaboration rate. They support the corresponding seals, with annual evidence and renewal.', 'Pour les équipes, le plan retient les politiques de diversité et d’inclusion, les projets à impact et le taux de collaboration. Les labels correspondants nécessitent des justificatifs et un renouvellement annuel.', 'Para los equipos, el plan incluye políticas de diversidad e inclusión, proyectos de impacto y tasa de colaboración. Los sellos requieren evidencias y renovación anual.'],
      ['Para instâncias, são oportunidades para a Rede e CSAT de produto de conexão. O papel do indicador depende do tipo de organização e das regras do ciclo.', 'For network bodies, they are opportunities for the network and connection-product CSAT. Their role depends on organization type and cycle rules.', 'Pour les instances, ce sont les opportunités pour le réseau et le CSAT des produits de connexion. Leur rôle dépend de l’organisation et du cycle.', 'Para las instancias, son oportunidades para la red y CSAT de productos de conexión. Su papel depende de la organización y el ciclo.'],
    ],
    ...assumptions,
  },
  {
    id: 'como-clusterizar', topic: 'strategy',
    question: ['Como fazer uma clusterização da EJ?', 'How do I determine my team’s cluster?', 'Comment déterminer le cluster de mon équipe ?', '¿Cómo determinar el clúster de mi equipo?'],
    paragraphs: [['Escolha o ano, reúna os valores elegíveis e auditados, confirme a cobertura de CSAT e aplique a fórmula. Compare o índice com a régua vigente e verifique as condições de evolução. Em seguida, use os quatro eixos para diagnosticar as dores e preparar um plano de ação.', 'Choose the year, gather eligible audited figures, check CSAT coverage and calculate the index. Compare it with the current scale and check advancement requirements. Then diagnose problems using the four axes and plan action.', 'Choisis l’année, rassemble les données éligibles et auditées, vérifie la couverture CSAT et calcule l’indice. Compare-le au barème et aux conditions de progression. Utilise ensuite les quatre axes pour préparer les actions.', 'Elige el año, reúne datos elegibles y auditados, verifica la cobertura del CSAT y calcula el índice. Compáralo con la escala y los requisitos de ascenso. Usa después los cuatro ejes para preparar acciones.']],
    points: [
      ['Exemplo didático — R$ 20.000 de faturamento, CSAT 4,0, 50% de engajamento e 20% de proporção colaborativa resultam em índice 14.400.000.', 'Learning example — R$20,000 revenue, CSAT 4.0, 50% engagement and 20% collaborative share produce an index of 14,400,000.', 'Exemple pédagogique — 20 000 R$ de chiffre d’affaires, CSAT 4,0, engagement 50 % et part collaborative 20 % donnent 14 400 000.', 'Ejemplo didáctico — R$20.000 de facturación, CSAT 4,0, participación 50% y proporción colaborativa 20% dan un índice de 14.400.000.'],
      ['Na régua de outubro de 2025, esse resultado está na faixa do cluster 2. A confirmação oficial considera auditoria, situação inicial e requisitos de evolução.', 'Under the October 2025 scale, this falls in cluster 2. Official confirmation also considers auditing, starting position and advancement requirements.', 'Selon le barème d’octobre 2025, cet indice relève du cluster 2. La confirmation officielle tient aussi compte de l’audit, du niveau initial et des conditions de progression.', 'En la escala de octubre de 2025 corresponde al clúster 2. La confirmación oficial considera auditoría, nivel inicial y requisitos de ascenso.'],
    ],
    ...clusters,
  },
  {
    id: 'regua', topic: 'strategy',
    question: ['Quais são as faixas da régua de clusters 4.0?', 'What are the Clusters 4.0 index bands?', 'Quels sont les seuils des clusters 4.0 ?', '¿Cuáles son los intervalos de los clústeres 4.0?'],
    paragraphs: [['A versão de outubro de 2025 apresenta as faixas abaixo para o índice que combina os quatro indicadores. A Brasil Júnior pode rever a régua conforme o comportamento da Rede.', 'The October 2025 version gives these bands for the index combining the four indicators. Brasil Júnior may revise the scale as the network develops.', 'La version d’octobre 2025 donne ces seuils pour l’indice des quatre indicateurs. Brasil Júnior peut les revoir selon l’évolution du réseau.', 'La versión de octubre de 2025 establece estos intervalos del índice de cuatro indicadores. Brasil Júnior puede revisarlos según evolucione la red.']],
    points: [
      ['Cluster 1 — índice de 1 a 12.000.000.', 'Cluster 1 — index from 1 to 12,000,000.', 'Cluster 1 — indice de 1 à 12 000 000.', 'Clúster 1 — índice de 1 a 12.000.000.'],
      ['Cluster 2 — acima de 12.000.000 até 24.000.000.', 'Cluster 2 — above 12,000,000 through 24,000,000.', 'Cluster 2 — au-delà de 12 000 000 jusqu’à 24 000 000.', 'Clúster 2 — superior a 12.000.000 hasta 24.000.000.'],
      ['Cluster 3 — acima de 24.000.000 até 61.000.000.', 'Cluster 3 — above 24,000,000 through 61,000,000.', 'Cluster 3 — au-delà de 24 000 000 jusqu’à 61 000 000.', 'Clúster 3 — superior a 24.000.000 hasta 61.000.000.'],
      ['Cluster 4 — acima de 61.000.000 até 130.000.000.', 'Cluster 4 — above 61,000,000 through 130,000,000.', 'Cluster 4 — au-delà de 61 000 000 jusqu’à 130 000 000.', 'Clúster 4 — superior a 61.000.000 hasta 130.000.000.'],
      ['Cluster 5 — acima de 130.000.000, sujeito às condições do ciclo, incluindo projeto de impacto.', 'Cluster 5 — above 130,000,000, subject to cycle requirements including an impact project.', 'Cluster 5 — au-delà de 130 000 000, sous réserve des conditions du cycle dont un projet à impact.', 'Clúster 5 — superior a 130.000.000, sujeto a los requisitos del ciclo, incluido un proyecto de impacto.'],
    ],
    ...clusters,
  },
  {
    id: 'subir-cluster', topic: 'strategy',
    question: ['Como subir de cluster?', 'How can my team move up a cluster?', 'Comment progresser d’un cluster ?', '¿Cómo subir de clúster?'],
    paragraphs: [
      ['Pela versão de outubro de 2025, a EJ precisa alcançar a faixa seguinte, cumprir todos os essenciais do ano e estar regular no Selo EJ. A evolução é limitada a um cluster por ano. Para chegar ao cluster 5 até o fechamento, precisa atingir o complementar de projeto de impacto. Se a cobertura mínima de CSAT falhar, o valor de CSAT usado no índice é reduzido a 1. Sem faturamento no fechamento do ano, a EJ vai ao cluster 1.', 'Under the October 2025 version, a team must reach the next band, meet all annual essentials and comply with Selo EJ. Advancement is limited to one cluster per year. Cluster 5 also requires an impact project. Insufficient CSAT coverage reduces its index input to 1. Closing the year without revenue places the team in cluster 1.', 'Selon la version d’octobre 2025, il faut atteindre le seuil suivant, réaliser tous les essentiels et être conforme au Selo EJ. La progression est limitée à un cluster par an. Le cluster 5 exige un projet à impact. Une couverture CSAT insuffisante réduit sa valeur à 1 dans l’indice. Sans chiffre d’affaires en fin d’année, l’équipe rejoint le cluster 1.', 'Según la versión de octubre de 2025, hay que alcanzar el siguiente intervalo, cumplir todos los esenciales y el Selo EJ. El ascenso se limita a un clúster por año. El clúster 5 exige un proyecto de impacto. Una cobertura CSAT insuficiente reduce su valor a 1 en el índice. Sin facturación al cierre, el equipo pasa al clúster 1.'],
      ['Escolha dores recorrentes nos quatro eixos, investigue causas e acompanhe ações com responsáveis e evidências. Avalie a capacidade de sustentar os resultados e valide a evolução com a instância responsável.', 'Investigate recurring problems across the four axes and track actions with owners and evidence. Check the ability to sustain results and validate progression with the responsible body.', 'Examine les problèmes des quatre axes et suis les actions avec responsables et preuves. Évalue la pérennité des résultats et valide la progression avec l’instance responsable.', 'Investiga problemas de los cuatro ejes y sigue acciones con responsables y evidencias. Evalúa si los resultados se sostienen y valida el ascenso con la instancia responsable.'],
    ],
    ...clusters,
  },
  {
    id: 'instancia-cluster', topic: 'network',
    question: ['A clusterização do núcleo, da EJ e do engajamento é diferente?', 'Do hubs, teams and engagement have different cluster systems?', 'Pôles, équipes et engagement ont-ils des systèmes de clusters différents ?', '¿La clasificación del núcleo, la empresa y la participación es diferente?'],
    paragraphs: [
      ['O Sistema de Clusters 4.0 consultado classifica a EJ como organização. O engajamento é um indicador do cálculo, analisável por pessoa ou equipe na gestão interna. A publicação consultada não define um cluster individual de engajamento.', 'The consulted Clusters 4.0 system classifies the team as an organization. Engagement is an input that can be analyzed internally per person or team. The publication does not define individual engagement clusters.', 'Le système consulté classe la Junior-Entreprise comme organisation. L’engagement est un indicateur analysable par personne ou équipe. La publication ne définit pas de cluster individuel d’engagement.', 'El sistema consultado clasifica a la empresa como organización. La participación es un indicador analizable por persona o equipo. La publicación no define un clúster individual de participación.'],
      ['O núcleo regional acompanha EJs e tem indicadores próprios de instância. Um núcleo técnico interno, como o NPE da CIMATEC Jr., pode ter diagnóstico e metas departamentais. Para segmentações locais de núcleos ou engajamentos, consulte a metodologia do programa da federação.', 'A regional hub supports teams and has its own indicators. An internal technical department such as CIMATEC Jr.’s NPE can have departmental diagnostics and targets. For local segmentation, consult the federation program’s methodology.', 'Le pôle régional accompagne les équipes et a ses propres indicateurs. Un département technique interne comme le NPE de CIMATEC Jr. peut avoir ses objectifs. Pour une segmentation locale, consulte la méthodologie du programme de la fédération.', 'El núcleo regional acompaña a las empresas y tiene sus indicadores. Un departamento técnico interno como el NPE de CIMATEC Jr. puede tener metas propias. Para segmentaciones locales, consulta la metodología del programa de la federación.'],
    ],
    ...assumptions,
  },
  {
    id: 'responsabilidade-instancia', topic: 'network',
    question: ['Qual é a principal responsabilidade de uma instância sobre uma EJ?', 'What is a network body’s main responsibility toward a team?', 'Quelle est la principale responsabilité d’une instance envers une équipe ?', '¿Cuál es la principal responsabilidad de una instancia con una empresa júnior?'],
    paragraphs: [['Apoiar o desenvolvimento da EJ e conectá-la à estratégia e às oportunidades da Rede. Isso envolve acompanhamento, diagnóstico, formação e articulação. Federações e núcleos também participam da auditoria de resultados conforme as atribuições locais. A gestão da EJ responde pelas decisões e pela execução dos projetos.', 'Support development and connect the team to network strategy and opportunities through follow-up, diagnosis, training and coordination. Federations and hubs also audit results under local responsibilities. Team management is responsible for decisions and project delivery.', 'Accompagner le développement et relier l’équipe à la stratégie et aux opportunités par le suivi, le diagnostic et la formation. Les fédérations et pôles participent aussi aux audits selon leurs compétences. La gestion de l’équipe répond des décisions et projets.', 'Apoyar el desarrollo y conectar al equipo con la estrategia y las oportunidades mediante seguimiento, diagnóstico y formación. Federaciones y núcleos participan en auditorías según sus atribuciones. La gestión de la empresa responde por decisiones y proyectos.']],
    source: 'Brasil Júnior · Kit Tudão e desenvolvimento da Rede', url: urls.kit,
  },
  {
    id: 'indicadores-instancias', topic: 'network',
    question: ['Quais indicadores acompanham o trabalho das instâncias?', 'Which indicators track network bodies’ work?', 'Quels indicateurs suivent le travail des instances ?', '¿Qué indicadores siguen el trabajo de las instancias?'],
    paragraphs: [['O quadro de essenciais do PE lista caixa mínimo, EJs na Rede, percentual de EJs em produtos de conexão e evolução da Rede. Eles acompanham sustentação da operação, alcance e desenvolvimento das EJs atendidas. Oportunidades para a Rede e CSAT de produto de conexão aparecem como complementares.', 'The plan lists minimum cash, teams in the network, share of teams in connection products and network evolution as essentials. They track operational sustainability, reach and team development. Opportunities and connection-product CSAT are complementary.', 'Le plan retient la trésorerie minimale, les équipes dans le réseau, leur participation aux produits de connexion et l’évolution du réseau comme essentiels. Ils suivent pérennité, portée et développement. Les opportunités et le CSAT des produits de connexion sont complémentaires.', 'El plan incluye caja mínima, empresas en la red, porcentaje en productos de conexión y evolución de la red como esenciales. Siguen sostenibilidad, alcance y desarrollo. Las oportunidades y el CSAT de productos de conexión son complementarios.']],
    ...assumptions,
  },
  {
    id: 'missao-mej', topic: 'identity',
    question: ['Qual é a missão do MEJ?', 'What is the movement’s mission?', 'Quelle est la mission du mouvement ?', '¿Cuál es la misión del movimiento?'],
    paragraphs: [['A missão é desenvolver, pela experiência empresarial, lideranças que assumam o compromisso de transformar o Brasil por meio do empreendedorismo. O aprendizado acontece ao atender clientes, conduzir projetos, gerir a associação e assumir responsabilidade pelo impacto das decisões.', 'Its mission is to develop leaders through enterprise experience who commit to transforming Brazil through entrepreneurship. Learning happens through clients, projects, association management and responsibility for decisions.', 'Sa mission est de former, par l’expérience en entreprise, des leaders engagés à transformer le Brésil par l’entrepreneuriat. L’apprentissage passe par les clients, projets, gestion associative et responsabilité des décisions.', 'Su misión es formar, mediante la experiencia empresarial, líderes comprometidos con transformar Brasil a través del emprendimiento. Se aprende con clientes, proyectos, gestión de la asociación y responsabilidad por las decisiones.']],
    source: 'Brasil Júnior · Conheça o MEJ', url: urls.movement,
  },
  {
    id: 'visao-mej', topic: 'identity',
    question: ['Qual é a visão do MEJ no ciclo 2025–2027?', 'What is the movement’s vision for 2025–2027?', 'Quelle est la vision du mouvement pour 2025–2027 ?', '¿Cuál es la visión del movimiento para 2025–2027?'],
    paragraphs: [['O ciclo busca lideranças protagonistas que impulsionem o desenvolvimento sustentável em rede e construam impacto no ecossistema. Essa visão orienta as três frentes do PE até 2027. A página institucional conserva a redação sobre lideranças plurais e soluções colaborativas, associada ao ciclo anterior nos Fundamentos 4.0.', 'The cycle aims for leaders who take initiative, advance sustainable development across the network and create ecosystem impact. It guides the plan’s three fronts through 2027. The institutional page retains wording about diverse leaders and collaborative solutions, linked to the previous cycle in the 4.0 framework.', 'Le cycle vise des leaders qui prennent des initiatives, un développement durable en réseau et un impact sur l’écosystème. Il guide les trois fronts du plan jusqu’en 2027. La page institutionnelle conserve la formulation du cycle précédent sur les leaders pluriels et solutions collaboratives.', 'El ciclo busca líderes protagonistas, desarrollo sostenible en red e impacto en el ecosistema. Orienta los tres frentes hasta 2027. La página institucional conserva la redacción del ciclo anterior sobre líderes plurales y soluciones colaborativas.']],
    ...clusters,
  },
  {
    id: 'valores-mej', topic: 'identity',
    question: ['Quais são os valores do MEJ?', 'What are the movement’s values?', 'Quelles sont les valeurs du mouvement ?', '¿Cuáles son los valores del movimiento?'],
    paragraphs: [['A página institucional apresenta orgulho de ser MEJ, postura empreendedora, compromisso com resultado, sinergia, transparência e autenticidade. Eles orientam pertencimento, iniciativa, geração de valor, cooperação, responsabilidade pelos registros e participação com identidade própria.', 'The institutional page lists pride in the movement, entrepreneurial mindset, commitment to results, synergy, transparency and authenticity. They guide belonging, initiative, value creation, cooperation, accountable records and participation with one’s own identity.', 'La page institutionnelle cite la fierté du mouvement, l’esprit entrepreneurial, l’engagement envers les résultats, la synergie, la transparence et l’authenticité. Ils guident appartenance, initiative, création de valeur, coopération et responsabilité.', 'La página institucional presenta orgullo de ser MEJ, actitud emprendedora, compromiso con los resultados, sinergia, transparencia y autenticidad. Orientan pertenencia, iniciativa, creación de valor, cooperación y responsabilidad.']],
    source: 'Brasil Júnior · Conheça o MEJ', url: urls.movement,
  },
  {
    id: 'missao-cimatec', topic: 'identity',
    question: ['Qual é a missão da CIMATEC Jr.?', 'What is CIMATEC Jr.’s mission?', 'Quelle est la mission de CIMATEC Jr. ?', '¿Cuál es la misión de CIMATEC Jr.?'],
    paragraphs: [
      ['A RNPE apresenta a missão de desenvolver jovens empreendedores capazes de realizar projetos de excelência. A formação dos membros e a qualidade das entregas aparecem juntas nessa formulação.', 'The RNPE states the mission of developing young entrepreneurs capable of delivering excellent projects. It links member development and delivery quality.', 'La RNPE présente une mission de développement de jeunes entrepreneurs capables de réaliser des projets d’excellence. Elle lie formation des membres et qualité des livraisons.', 'La RNPE presenta la misión de desarrollar jóvenes emprendedores capaces de realizar proyectos de excelencia. Vincula la formación de los miembros con la calidad de las entregas.'],
      ['O Estatuto revisado de 2025, art. 3º, §1º, descreve a finalidade de oferecer soluções e aproximar estudantes, professores e empresários para ligar teoria acadêmica e prática de mercado. O FAQ usa a formulação de comunicação da RNPE e registra esse contexto estatutário.', 'The revised 2025 statute, article 3, paragraph 1, describes providing solutions and connecting students, faculty and entrepreneurs to link theory and practice. This FAQ uses the RNPE communication wording and records that statutory context.', 'Le statut révisé de 2025, art. 3, §1, décrit des solutions réunissant étudiants, enseignants et entrepreneurs pour relier théorie et pratique. La FAQ utilise la formulation de la RNPE et précise ce contexte.', 'El estatuto revisado de 2025, art. 3, §1, describe soluciones que acercan estudiantes, docentes y empresarios para unir teoría y práctica. La FAQ usa la formulación de la RNPE y recoge ese contexto.'],
    ],
    ...cimatecReference,
  },
  {
    id: 'visao-cimatec', topic: 'identity',
    question: ['Qual é a visão da CIMATEC Jr.?', 'What is CIMATEC Jr.’s vision?', 'Quelle est la vision de CIMATEC Jr. ?', '¿Cuál es la visión de CIMATEC Jr.?'],
    paragraphs: [['Nos slides consultados, a visão é ser a maior empresa júnior do Brasil em 2030. Esse horizonte institucional orienta o desdobramento em objetivos, indicadores e planos de desenvolvimento para cada gestão.', 'The consulted slides state the vision of becoming Brazil’s largest Junior Enterprise in 2030. This institutional horizon informs objectives, indicators and development plans for each term.', 'Les diapositives présentent l’ambition de devenir la plus grande Junior-Entreprise du Brésil en 2030. Cet horizon oriente les objectifs, indicateurs et plans de chaque mandat.', 'Las diapositivas presentan la visión de ser la mayor empresa júnior de Brasil en 2030. Ese horizonte orienta los objetivos, indicadores y planes de cada gestión.']],
    ...cimatecReference,
  },
  {
    id: 'valores-cimatec', topic: 'identity',
    question: ['Quais são os valores da CIMATEC Jr.?', 'What are CIMATEC Jr.’s values?', 'Quelles sont les valeurs de CIMATEC Jr. ?', '¿Cuáles son los valores de CIMATEC Jr.?'],
    paragraphs: [['A coluna institucional do slide apresenta união, projetos, energia, qualidade, resiliência, construção e transparência. Esses sete valores pertencem à CIMATEC Jr. A apresentação traz em outra coluna os valores específicos do NPE.', 'The institutional column lists unity, projects, energy, quality, resilience, building and transparency. These seven values belong to CIMATEC Jr. Another column presents NPE’s values.', 'La colonne institutionnelle cite union, projets, énergie, qualité, résilience, construction et transparence. Ces sept valeurs sont celles de CIMATEC Jr. Une autre colonne présente celles du NPE.', 'La columna institucional enumera unión, proyectos, energía, calidad, resiliencia, construcción y transparencia. Estos siete valores pertenecen a CIMATEC Jr. Otra columna presenta los del NPE.']],
    ...cimatecReference,
  },
]

const guide = [...lessons, ...operations]
const related = [
  ['csat', 'csat', ['O que é CSAT e qual cobertura preciso ter?', 'What is CSAT and what response coverage do I need?', 'Qu’est-ce que le CSAT et quelle couverture faut-il ?', '¿Qué es el CSAT y qué cobertura se necesita?']],
  ['colaboracao', 'colaboracao', ['O que conta como faturamento colaborativo?', 'What counts as collaborative revenue?', 'Qu’est-ce qui compte comme chiffre d’affaires collaboratif ?', '¿Qué cuenta como facturación colaborativa?']],
  ['impacto', 'impacto', ['O que torna um projeto um projeto de impacto?', 'What qualifies a project as an impact project?', 'Qu’est-ce qui fait d’un projet un projet à impact ?', '¿Qué convierte un proyecto en proyecto de impacto?']],
  ['faturamento', 'faturamento', ['Faturamento, recebimento e caixa são diferentes?', 'How do revenue, payments and cash differ?', 'Comment distinguer chiffre d’affaires, encaissements et trésorerie ?', '¿Cómo se diferencian facturación, cobros y caja?']],
  ['selo-ej', 'selo-ej', ['O que é o Selo EJ e como preparar a auditoria?', 'What is Selo EJ and how do I prepare for an audit?', 'Qu’est-ce que le Selo EJ et comment préparer l’audit ?', '¿Qué es Selo EJ y cómo preparar la auditoría?']],
  ['portal-bj', 'portal-bj', ['Onde encontro formações e materiais no Portal BJ?', 'Where can I find training and materials in the BJ Portal?', 'Où trouver des formations et ressources sur le portail BJ ?', '¿Dónde encontrar formación y materiales en el Portal BJ?']],
] as const
for (const [id, guideId, question] of related) {
  const entry = guide.find(item => item.id === guideId)!
  faqs.push({ id, topic: 'practice', question, paragraphs: [entry.body, entry.example], source: entry.source, url: entry.url })
}
