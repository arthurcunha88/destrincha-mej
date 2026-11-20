import type { Entry } from './content.ts'

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
} satisfies Record<string, Translation>

export const cimatecReference = { source: 'CIMATEC jr · Missão, visão e valores', url: 'https://www.canva.com/design/DAHX_OsYHj4/view' }

export const faqs: Faq[] = [
  {
    "id": "indicadores-cluster",
    "topic": "strategy",
    "question": [
      "Quais indicadores entram no índice de cluster?",
      "Which metrics make up the cluster index?",
      "Quels indicateurs composent l’indice de cluster ?",
      "¿Qué indicadores componen el índice de clúster?"
    ],
    "paragraphs": [
      [
        "O índice 4.0 combina faturamento, CSAT, engajamento com o MEJ e representatividade do faturamento colaborativo. Eles representam as dimensões de acessibilidade, qualidade, formação e impacto.",
        "The 4.0 index combines revenue, CSAT, engagement with the movement and collaborative revenue share. They represent accessibility, quality, development and impact.",
        "L’indice 4.0 combine chiffre d’affaires, CSAT, engagement dans le mouvement et part collaborative. Ils représentent l’accessibilité, la qualité, la formation et l’impact.",
        "El índice 4.0 combina facturación, CSAT, participación y proporción colaborativa. Representan accesibilidad, calidad, formación e impacto."
      ],
      [
        "Engajamento e proporção colaborativa entram como frações de 0 a 1. Use 0,50 para 50%. Confira os dados elegíveis e a cobertura de CSAT antes de calcular.",
        "Engagement and collaborative share use fractions from 0 to 1. Enter 50% as 0.50. Check eligible data and CSAT coverage first.",
        "L’engagement et la part collaborative utilisent des fractions de 0 à 1. Pour 50 %, utilise 0,50. Vérifie les données éligibles et la couverture CSAT.",
        "La participación y la proporción colaborativa usan fracciones de 0 a 1. Introduce el 50% como 0,50. Verifica los datos elegibles y la cobertura del CSAT."
      ]
    ],
    "formula": [
      "Índice = faturamento × CSAT × (1 + engajamento) × (1 + proporção colaborativa) × 100",
      "Index = revenue × CSAT × (1 + engagement) × (1 + collaborative share) × 100",
      "Indice = chiffre d’affaires × CSAT × (1 + engagement) × (1 + part collaborative) × 100",
      "Índice = facturación × CSAT × (1 + participación) × (1 + proporción colaborativa) × 100"
    ],
    "source": "Brasil Júnior · Fundamentos dos Clusters 4.0 · outubro/2025",
    "url": "https://drive.google.com/file/d/1mFYA3wcuPsW3swFqlSUs8POx2I2LGN3F/view",
    "points": [
      [
        "Leia o índice como um conjunto: faturamento expressa volume elegível; CSAT, satisfação; engajamento, participação na Rede; proporção colaborativa, a parcela das vendas em entregas conjuntas elegíveis. A fórmula é multiplicativa: uma fragilidade pode limitar o ganho obtido em outro fator.",
        "Read the index as a whole: revenue reflects eligible volume; CSAT, satisfaction; engagement, network participation; collaborative share, the portion of sales from eligible joint delivery. The formula is multiplicative: weakness in one factor can limit gains in another.",
        "Lis l’indice dans son ensemble : chiffre d’affaires éligible, satisfaction, participation au réseau et part des ventes collaboratives éligibles. La formule est multiplicative : une faiblesse peut limiter les gains ailleurs.",
        "Lee el índice en conjunto: volumen elegible, satisfacción, participación en la red y proporción de ventas colaborativas elegibles. La fórmula es multiplicativa: una debilidad puede limitar las mejoras de otro factor."
      ]
    ]
  },
  {
    "id": "eixos-pilares",
    "topic": "strategy",
    "question": [
      "Quais são os eixos de cluster e seus pilares?",
      "What are the cluster axes and their pillars?",
      "Quels sont les axes des clusters et leurs piliers ?",
      "¿Cuáles son los ejes de los clústeres y sus pilares?"
    ],
    "paragraphs": [
      [
        "São quatro áreas usadas para diagnosticar a maturidade da EJ. Cada eixo reúne pilares: aspectos concretos da operação que precisam funcionar para sustentar o crescimento. O diagnóstico serve para descobrir por que um resultado está baixo e escolher o que corrigir primeiro.",
        "Four areas help diagnose a team’s maturity. Each axis contains pillars: practical parts of the business that must work to sustain growth. Use them to understand why a result is weak and decide what to fix first.",
        "Quatre domaines permettent de diagnostiquer la maturité de l’équipe. Leurs piliers sont les éléments concrets du fonctionnement nécessaires à une croissance durable. Ils servent à comprendre un résultat faible et à choisir la première amélioration.",
        "Son cuatro áreas para diagnosticar la madurez del equipo. Cada eje reúne pilares: aspectos concretos de la operación necesarios para sostener el crecimiento. Sirven para entender un resultado bajo y decidir qué corregir primero."
      ],
      [
        "Exemplo: poucas vendas podem vir de uma oferta pouco clara, de baixa prospecção ou da falta de pessoas preparadas para negociar. O número mostra o problema; a análise dos eixos ajuda a encontrar a causa. As ações abaixo são exemplos de aplicação dos pilares.",
        "For example, weak sales may come from an unclear offer, too little prospecting or a team unprepared to negotiate. The metric reveals the problem; the axes help find its cause. The actions below illustrate how to use the pillars.",
        "Par exemple, des ventes faibles peuvent venir d’une offre floue, de peu de prospection ou d’un manque de préparation à la négociation. Le chiffre révèle le problème ; les axes aident à en trouver la cause. Les actions ci-dessous illustrent les piliers.",
        "Por ejemplo, pocas ventas pueden deberse a una oferta poco clara, poca prospección o falta de preparación para negociar. El indicador muestra el problema; los ejes ayudan a encontrar su causa. Las acciones siguientes ilustran los pilares."
      ]
    ],
    "points": [
      [
        "Projetos e Modelo de Negócios — proposta de valor, mecanismo de lucro, cadeia de valor, diversificação e inovação. Na prática: verifique se a solução resolve uma necessidade real, se o preço cobre os custos e se a equipe consegue entregar o que vende.",
        "Projects and Business Model — value proposition, revenue mechanism, value chain, diversification and innovation. In practice: check whether the solution meets a real need, the price covers costs and the team can deliver its promise.",
        "Projets et modèle économique — proposition de valeur, mécanisme de revenu, chaîne de valeur, diversification et innovation. En pratique : vérifie le besoin réel, la couverture des coûts et la capacité à livrer la promesse.",
        "Proyectos y Modelo de Negocio — propuesta de valor, mecanismo de ingresos, cadena de valor, diversificación e innovación. En la práctica: verifica la necesidad real, si el precio cubre costos y si el equipo puede entregar lo prometido."
      ],
      [
        "Vendas e Mercado — estratégia comercial, aquisição, conversão e retenção. Na prática: acompanhe contatos, reuniões, propostas e contratos para localizar onde as oportunidades se perdem.",
        "Sales and Market — sales strategy, acquisition, conversion and retention. In practice: track contacts, meetings, proposals and contracts to find where opportunities are lost.",
        "Ventes et marché — stratégie commerciale, acquisition, conversion et fidélisation. En pratique : suis les contacts, rendez-vous, offres et contrats pour repérer où les opportunités se perdent.",
        "Ventas y Mercado — estrategia comercial, adquisición, conversión y retención. En la práctica: sigue contactos, reuniones, propuestas y contratos para detectar dónde se pierden oportunidades."
      ],
      [
        "Gestão e Operações — planejamento estratégico, sistema de gestão, sustentabilidade financeira e estrutura organizacional. Na prática: transforme metas em rotinas com responsáveis, prazos, controle de caixa e registros que sobrevivam à troca de gestão.",
        "Management and Operations — strategic planning, management system, financial sustainability and organizational structure. In practice: turn targets into routines with owners, deadlines, cash monitoring and records that survive handovers.",
        "Gestion et opérations — planification stratégique, système de gestion, pérennité financière et structure organisationnelle. En pratique : transforme les objectifs en routines avec responsables, délais, suivi de trésorerie et traces transmissibles.",
        "Gestión y Operaciones — planificación estratégica, sistema de gestión, sostenibilidad financiera y estructura organizativa. En la práctica: convierte metas en rutinas con responsables, plazos, control de caja y registros para el relevo."
      ],
      [
        "Time e Cultura — atração e retenção, cultura organizacional, engajamento e produtividade, formação de lideranças e desenvolvimento de habilidades técnicas. Na prática: distribua carga, prepare sucessores, acompanhe a aprendizagem e investigue por que membros saem ou deixam de participar.",
        "Team and Culture — attraction and retention, organizational culture, engagement and productivity, leadership development and technical skills. In practice: balance workload, prepare successors, track learning and investigate why members leave or disengage.",
        "Équipe et culture — attraction et fidélisation, culture organisationnelle, engagement et productivité, formation des leaders et compétences techniques. En pratique : répartis la charge, prépare la relève, suis les apprentissages et analyse les départs ou le désengagement.",
        "Equipo y Cultura — atracción y retención, cultura organizativa, participación y productividad, formación de líderes y competencias técnicas. En la práctica: reparte la carga, prepara sucesores, sigue el aprendizaje e investiga las salidas o la baja participación."
      ]
    ],
    "source": "Brasil Júnior · Fundamentos dos Clusters 4.0 · outubro/2025",
    "url": "https://drive.google.com/file/d/1mFYA3wcuPsW3swFqlSUs8POx2I2LGN3F/view"
  },
  {
    "id": "dimensoes-eixos",
    "topic": "strategy",
    "question": [
      "Dimensões do índice e eixos de evolução são a mesma coisa?",
      "Are index dimensions and development axes the same thing?",
      "Dimensions de l’indice et axes d’évolution désignent-ils la même chose ?",
      "¿Las dimensiones del índice y los ejes de evolución son lo mismo?"
    ],
    "paragraphs": [
      [
        "Não. As dimensões explicam o que o índice busca representar: acessibilidade, qualidade, formação e impacto. Os eixos mostram onde investigar a operação: Projetos e Modelo de Negócios, Vendas e Mercado, Gestão e Operações, Time e Cultura.",
        "No. Dimensions describe what the index represents: accessibility, quality, development and impact. Axes identify where to investigate operations: Projects and Business Model, Sales and Market, Management and Operations, Team and Culture.",
        "Non. Les dimensions décrivent ce que représente l’indice : accessibilité, qualité, formation et impact. Les axes indiquent où examiner les opérations : projets et modèle économique, ventes et marché, gestion et opérations, équipe et culture.",
        "No. Las dimensiones describen qué representa el índice: accesibilidad, calidad, formación e impacto. Los ejes indican dónde investigar: Proyectos y Modelo de Negocio, Ventas y Mercado, Gestión y Operaciones, Equipo y Cultura."
      ],
      [
        "Se o CSAT cair, a dimensão afetada é qualidade. Para agir, investigue os eixos: houve promessa comercial excessiva, falha técnica, atraso de aprovação ou sobrecarga da equipe? Cada causa pede uma solução diferente.",
        "If CSAT drops, quality is the affected dimension. Investigate the axes: did sales overpromise, did technical delivery fail, were approvals delayed or was the team overloaded? Each cause needs a different response.",
        "Si le CSAT baisse, la qualité est touchée. Examine les axes : promesse excessive, erreur technique, validation tardive ou surcharge ? Chaque cause demande une réponse différente.",
        "Si baja el CSAT, la dimensión afectada es calidad. Revisa los ejes: ¿se prometió demasiado, falló la ejecución técnica, hubo aprobaciones tardías o sobrecarga? Cada causa requiere una respuesta distinta."
      ]
    ],
    "source": "Brasil Júnior · Fundamentos dos Clusters 4.0 · outubro/2025",
    "url": "https://drive.google.com/file/d/1mFYA3wcuPsW3swFqlSUs8POx2I2LGN3F/view"
  },
  {
    "id": "essenciais",
    "topic": "strategy",
    "question": [
      "Quais são os indicadores essenciais das EJs?",
      "Which indicators are essential for Junior Enterprises?",
      "Quels sont les indicateurs essentiels des Junior-Entreprises ?",
      "¿Cuáles son los indicadores esenciales de las empresas júnior?"
    ],
    "paragraphs": [
      [
        "No PE 2025–2027, são faturamento, CSAT, tempo de permanência no MEJ e engajamento com o MEJ. Cada um tem base, meta e regra de validação próprias. A permanência é acompanhada por pessoa e consolidada para a EJ.",
        "For 2025–2027, they are revenue, CSAT, time in the movement and engagement. Each has its own base, target and validation rules. Time in the movement is tracked individually and consolidated for the team.",
        "Pour 2025–2027, il s’agit du chiffre d’affaires, du CSAT, de la durée d’adhésion et de l’engagement. Chacun a sa base, son objectif et ses règles. La durée est suivie par personne puis consolidée.",
        "En 2025–2027 son facturación, CSAT, tiempo de permanencia y participación. Cada uno tiene su base, meta y validación. La permanencia se sigue por persona y se consolida para el equipo."
      ],
      [
        "O atingimento anual dos essenciais participa dos títulos do triênio. Confira as metas cadastradas e os resultados auditados do ano para avaliar a situação da EJ.",
        "Annual achievement contributes to recognition titles. Check registered targets and audited results for that year.",
        "La réalisation annuelle participe aux distinctions. Vérifie les objectifs enregistrés et les résultats audités de l’année.",
        "El logro anual contribuye a los títulos. Consulta las metas registradas y los resultados auditados del año."
      ]
    ],
    "source": "Brasil Júnior · Premissas e Fundamentos Estratégicos · PE 2025–2027",
    "url": "https://drive.google.com/file/d/1CyITjHqQA6Eu_Tkh_gX_VozUMVse_3du/view",
    "points": [
      [
        "Faturamento — acompanha o valor elegível das soluções vendidas. Na gestão, relacione a meta anual à capacidade de prospecção, venda e entrega.",
        "Revenue — tracks eligible value from solutions sold. Connect the annual target to prospecting, sales and delivery capacity.",
        "Chiffre d’affaires — suit la valeur éligible des solutions vendues. Relie l’objectif annuel aux capacités de prospection, vente et livraison.",
        "Facturación — sigue el valor elegible de las soluciones vendidas. Relaciona la meta anual con la capacidad de prospectar, vender y entregar."
      ],
      [
        "CSAT — mede a satisfação do cliente com a solução. Acompanhe a nota e a cobertura de respostas; uma média alta com poucos clientes ouvidos pode esconder problemas.",
        "CSAT — measures satisfaction with the solution. Track both score and response coverage: a high average from few respondents can hide problems.",
        "CSAT — mesure la satisfaction. Suis la note et la couverture : une moyenne élevée avec peu de réponses peut masquer des problèmes.",
        "CSAT — mide satisfacción. Sigue la nota y la cobertura: un promedio alto con pocas respuestas puede ocultar problemas."
      ],
      [
        "Tempo de permanência — acompanha a duração da vivência no MEJ. Investigue saídas precoces, carga excessiva e falta de perspectiva de desenvolvimento.",
        "Time in the movement — tracks the duration of members’ experience. Investigate early departures, overload and limited development opportunities.",
        "Durée d’adhésion — suit la durée de l’expérience. Analyse les départs précoces, la surcharge et le manque de perspectives.",
        "Permanencia — sigue la duración de la experiencia. Investiga salidas tempranas, sobrecarga y falta de oportunidades de desarrollo."
      ],
      [
        "Engajamento — acompanha participação em produtos de conexão elegíveis. Planeje acesso e participação ao longo do ano, com registros por membro.",
        "Engagement — tracks participation in eligible connection activities. Plan access and participation throughout the year and keep member-level records.",
        "Engagement — suit la participation aux activités éligibles. Prévois l’accès sur l’année et conserve les données par membre.",
        "Participación — sigue la presencia en actividades elegibles. Planifica el acceso durante el año y conserva registros por miembro."
      ]
    ]
  },
  {
    "id": "complementares",
    "topic": "strategy",
    "question": [
      "Quais são os indicadores complementares?",
      "Which indicators are complementary?",
      "Quels sont les indicateurs complémentaires ?",
      "¿Cuáles son los indicadores complementarios?"
    ],
    "paragraphs": [
      [
        "Para EJs, o PE reúne políticas de diversidade e inclusão, projetos de impacto e taxa de colaboração. Eles dão origem aos selos de diversidade, impacto e colaboração, com comprovação e renovação anual.",
        "For teams, the plan lists diversity and inclusion policies, impact projects and collaboration rate. They support the corresponding seals, with annual evidence and renewal.",
        "Pour les équipes, le plan retient les politiques de diversité et d’inclusion, les projets à impact et le taux de collaboration. Les labels correspondants nécessitent des justificatifs et un renouvellement annuel.",
        "Para los equipos, el plan incluye políticas de diversidad e inclusión, proyectos de impacto y tasa de colaboración. Los sellos requieren evidencias y renovación anual."
      ],
      [
        "Para instâncias, são oportunidades para a Rede e CSAT de produto de conexão. O papel do indicador depende do tipo de organização e das regras do ciclo.",
        "For network bodies, they are opportunities for the network and connection-product CSAT. Their role depends on organization type and cycle rules.",
        "Pour les instances, ce sont les opportunités pour le réseau et le CSAT des produits de connexion. Leur rôle dépend de l’organisation et du cycle.",
        "Para las instancias, son oportunidades para la red y CSAT de productos de conexión. Su papel depende de la organización y el ciclo."
      ]
    ],
    "source": "Brasil Júnior · Premissas e Fundamentos Estratégicos · PE 2025–2027",
    "url": "https://drive.google.com/file/d/1CyITjHqQA6Eu_Tkh_gX_VozUMVse_3du/view",
    "points": [
      [
        "Diversidade e inclusão — transforme a política em práticas de entrada, permanência e desenvolvimento. Defina responsáveis e guarde evidências da execução.",
        "Diversity and inclusion — turn policy into recruitment, retention and development practices. Assign owners and retain implementation evidence.",
        "Diversité et inclusion — applique la politique au recrutement, à la fidélisation et au développement. Désigne des responsables et conserve les preuves.",
        "Diversidad e inclusión — aplica la política al ingreso, permanencia y desarrollo. Asigna responsables y conserva evidencias."
      ],
      [
        "Projetos de impacto — demonstre o resultado produzido para o cliente ou o ecossistema, com dados anteriores e posteriores à intervenção.",
        "Impact projects — demonstrate the result for the client or ecosystem using data before and after the intervention.",
        "Projets à impact — démontre le résultat pour le client ou l’écosystème avec des données avant et après.",
        "Proyectos de impacto — demuestra el resultado para el cliente o ecosistema con datos anteriores y posteriores."
      ],
      [
        "Colaboração — desenvolva entregas conjuntas elegíveis e registre a participação financeira de cada parceiro. Conexão entre EJs precisa resultar em trabalho compartilhado para caracterizar a entrega colaborativa.",
        "Collaboration — develop eligible joint delivery and record each partner’s financial share. Networking must lead to shared delivery to characterize collaborative work.",
        "Collaboration — réalise des missions communes éligibles et consigne la part financière de chaque partenaire. La mise en relation doit déboucher sur un travail partagé.",
        "Colaboración — realiza entregas conjuntas elegibles y registra la parte financiera de cada socio. La conexión debe resultar en trabajo compartido."
      ]
    ]
  },
  {
    "id": "como-clusterizar",
    "topic": "strategy",
    "question": [
      "Como fazer uma clusterização da EJ?",
      "How do I determine my team’s cluster?",
      "Comment déterminer le cluster de mon équipe ?",
      "¿Cómo determinar el clúster de mi equipo?"
    ],
    "paragraphs": [
      [
        "Clusterizar é calcular a posição da EJ no sistema e analisar sua maturidade. Comece por uma base única do mesmo ano: faturamento elegível, média de CSAT, cobertura das respostas, engajamento e representatividade colaborativa. Compare os registros internos com o Portal BJ e resolva divergências antes do cálculo.",
        "Clusterization means calculating the team’s position and assessing maturity. Start with one consistent annual dataset: eligible revenue, average CSAT, response coverage, engagement and collaborative share. Reconcile internal records with the BJ Portal before calculating.",
        "La classification consiste à calculer la position de l’équipe et à analyser sa maturité. Utilise des données cohérentes d’une même année : chiffre d’affaires éligible, CSAT moyen, couverture, engagement et part collaborative. Rapproche les données internes du portail avant le calcul.",
        "Clusterizar consiste en calcular la posición del equipo y analizar su madurez. Usa datos del mismo año: facturación elegible, CSAT medio, cobertura, participación y proporción colaborativa. Concílialos con el Portal BJ antes de calcular."
      ],
      [
        "Aplique a fórmula, compare com a régua e confira os requisitos de evolução: essenciais, Selo EJ e, quando aplicável, projeto de impacto. O índice calculado é uma simulação até a validação dos dados. Depois, avalie os quatro eixos para transformar o diagnóstico em prioridades, responsáveis e prazos.",
        "Apply the formula, compare the result with the scale and check advancement requirements: essentials, Selo EJ and, where applicable, an impact project. A calculated index is a simulation until data is validated. Use the four axes to turn the diagnosis into priorities, owners and deadlines.",
        "Applique la formule, compare au barème et vérifie les conditions de progression : essentiels, Selo EJ et projet à impact si nécessaire. Le calcul reste une simulation avant validation. Utilise les axes pour définir priorités, responsables et délais.",
        "Aplica la fórmula, compara con la escala y verifica requisitos: esenciales, Selo EJ y proyecto de impacto cuando corresponda. El cálculo es una simulación hasta validar los datos. Usa los ejes para definir prioridades, responsables y plazos."
      ]
    ],
    "points": [
      [
        "Exemplo didático — R$ 20.000 de faturamento, CSAT 4,0, 50% de engajamento e 20% de proporção colaborativa resultam em índice 14.400.000.",
        "Learning example — R$20,000 revenue, CSAT 4.0, 50% engagement and 20% collaborative share produce an index of 14,400,000.",
        "Exemple pédagogique — 20 000 R$ de chiffre d’affaires, CSAT 4,0, engagement 50 % et part collaborative 20 % donnent 14 400 000.",
        "Ejemplo didáctico — R$20.000 de facturación, CSAT 4,0, participación 50% y proporción colaborativa 20% dan un índice de 14.400.000."
      ],
      [
        "Na régua de outubro de 2025, esse resultado está na faixa do cluster 2. A confirmação oficial considera auditoria, situação inicial e requisitos de evolução.",
        "Under the October 2025 scale, this falls in cluster 2. Official confirmation also considers auditing, starting position and advancement requirements.",
        "Selon le barème d’octobre 2025, cet indice relève du cluster 2. La confirmation officielle tient aussi compte de l’audit, du niveau initial et des conditions de progression.",
        "En la escala de octubre de 2025 corresponde al clúster 2. La confirmación oficial considera auditoría, nivel inicial y requisitos de ascenso."
      ]
    ],
    "source": "Brasil Júnior · Fundamentos dos Clusters 4.0 · outubro/2025",
    "url": "https://drive.google.com/file/d/1mFYA3wcuPsW3swFqlSUs8POx2I2LGN3F/view"
  },
  {
    "id": "regua",
    "topic": "strategy",
    "question": [
      "Quais são as faixas da régua de clusters 4.0?",
      "What are the Clusters 4.0 index bands?",
      "Quels sont les seuils des clusters 4.0 ?",
      "¿Cuáles son los intervalos de los clústeres 4.0?"
    ],
    "paragraphs": [
      [
        "A versão de outubro de 2025 apresenta as faixas abaixo para o índice que combina os quatro indicadores. A Brasil Júnior pode rever a régua conforme o comportamento da Rede.",
        "The October 2025 version gives these bands for the index combining the four indicators. Brasil Júnior may revise the scale as the network develops.",
        "La version d’octobre 2025 donne ces seuils pour l’indice des quatre indicateurs. Brasil Júnior peut les revoir selon l’évolution du réseau.",
        "La versión de octubre de 2025 establece estos intervalos del índice de cuatro indicadores. Brasil Júnior puede revisarlos según evolucione la red."
      ]
    ],
    "points": [
      [
        "Cluster 1 — índice de 1 a 12.000.000.",
        "Cluster 1 — index from 1 to 12,000,000.",
        "Cluster 1 — indice de 1 à 12 000 000.",
        "Clúster 1 — índice de 1 a 12.000.000."
      ],
      [
        "Cluster 2 — acima de 12.000.000 até 24.000.000.",
        "Cluster 2 — above 12,000,000 through 24,000,000.",
        "Cluster 2 — au-delà de 12 000 000 jusqu’à 24 000 000.",
        "Clúster 2 — superior a 12.000.000 hasta 24.000.000."
      ],
      [
        "Cluster 3 — acima de 24.000.000 até 61.000.000.",
        "Cluster 3 — above 24,000,000 through 61,000,000.",
        "Cluster 3 — au-delà de 24 000 000 jusqu’à 61 000 000.",
        "Clúster 3 — superior a 24.000.000 hasta 61.000.000."
      ],
      [
        "Cluster 4 — acima de 61.000.000 até 130.000.000.",
        "Cluster 4 — above 61,000,000 through 130,000,000.",
        "Cluster 4 — au-delà de 61 000 000 jusqu’à 130 000 000.",
        "Clúster 4 — superior a 61.000.000 hasta 130.000.000."
      ],
      [
        "Cluster 5 — acima de 130.000.000, sujeito às condições do ciclo, incluindo projeto de impacto.",
        "Cluster 5 — above 130,000,000, subject to cycle requirements including an impact project.",
        "Cluster 5 — au-delà de 130 000 000, sous réserve des conditions du cycle dont un projet à impact.",
        "Clúster 5 — superior a 130.000.000, sujeto a los requisitos del ciclo, incluido un proyecto de impacto."
      ]
    ],
    "source": "Brasil Júnior · Fundamentos dos Clusters 4.0 · outubro/2025",
    "url": "https://drive.google.com/file/d/1mFYA3wcuPsW3swFqlSUs8POx2I2LGN3F/view"
  },
  {
    "id": "subir-cluster",
    "topic": "strategy",
    "question": [
      "Como subir de cluster?",
      "How can my team move up a cluster?",
      "Comment progresser d’un cluster ?",
      "¿Cómo subir de clúster?"
    ],
    "paragraphs": [
      [
        "Pela versão de outubro de 2025, a EJ precisa alcançar a faixa seguinte, cumprir todos os essenciais do ano e estar regular no Selo EJ. A evolução é limitada a um cluster por ano. Para chegar ao cluster 5 até o fechamento, precisa atingir o complementar de projeto de impacto. Se a cobertura mínima de CSAT falhar, o valor de CSAT usado no índice é reduzido a 1. Sem faturamento no fechamento do ano, a EJ vai ao cluster 1.",
        "Under the October 2025 version, a team must reach the next band, meet all annual essentials and comply with Selo EJ. Advancement is limited to one cluster per year. Cluster 5 also requires an impact project. Insufficient CSAT coverage reduces its index input to 1. Closing the year without revenue places the team in cluster 1.",
        "Selon la version d’octobre 2025, il faut atteindre le seuil suivant, réaliser tous les essentiels et être conforme au Selo EJ. La progression est limitée à un cluster par an. Le cluster 5 exige un projet à impact. Une couverture CSAT insuffisante réduit sa valeur à 1 dans l’indice. Sans chiffre d’affaires en fin d’année, l’équipe rejoint le cluster 1.",
        "Según la versión de octubre de 2025, hay que alcanzar el siguiente intervalo, cumplir todos los esenciales y el Selo EJ. El ascenso se limita a un clúster por año. El clúster 5 exige un proyecto de impacto. Una cobertura CSAT insuficiente reduce su valor a 1 en el índice. Sin facturación al cierre, el equipo pasa al clúster 1."
      ],
      [
        "Escolha dores recorrentes nos quatro eixos, investigue causas e acompanhe ações com responsáveis e evidências. Avalie a capacidade de sustentar os resultados e valide a evolução com a instância responsável.",
        "Investigate recurring problems across the four axes and track actions with owners and evidence. Check the ability to sustain results and validate progression with the responsible body.",
        "Examine les problèmes des quatre axes et suis les actions avec responsables et preuves. Évalue la pérennité des résultats et valide la progression avec l’instance responsable.",
        "Investiga problemas de los cuatro ejes y sigue acciones con responsables y evidencias. Evalúa si los resultados se sostienen y valida el ascenso con la instancia responsable."
      ]
    ],
    "source": "Brasil Júnior · Fundamentos dos Clusters 4.0 · outubro/2025",
    "url": "https://drive.google.com/file/d/1mFYA3wcuPsW3swFqlSUs8POx2I2LGN3F/view",
    "points": [
      [
        "Descubra o gargalo — simule o índice com os dados atuais e identifique qual fator limita o resultado. Pela fórmula, elevar faturamento sem preservar satisfação pode ter pouco efeito.",
        "Find the bottleneck — simulate the index with current data and identify the limiting factor. Increasing revenue while losing satisfaction may produce little benefit.",
        "Trouve le frein — simule l’indice et repère le facteur limitant. Augmenter les ventes en dégradant la satisfaction peut avoir peu d’effet.",
        "Detecta el cuello de botella — simula el índice e identifica el factor limitante. Aumentar ventas perdiendo satisfacción puede aportar poco."
      ],
      [
        "Ataque a causa — converta o problema em uma ação verificável. Exemplo: padronizar escopo e aceite para reduzir retrabalho e melhorar a experiência do cliente.",
        "Address the cause — define a verifiable action. For example, standardize scope and sign-off to reduce rework and improve client experience.",
        "Traite la cause — définis une action vérifiable, comme standardiser le périmètre et la réception pour réduire les reprises.",
        "Ataca la causa — define una acción verificable, como estandarizar alcance y aceptación para reducir retrabajo."
      ],
      [
        "Acompanhe durante o ano — revise a projeção mensalmente, valide evidências e prepare a sucessão. Crescimento que depende de uma pessoa ou de um único contrato precisa de atenção.",
        "Track progress through the year — review forecasts monthly, validate evidence and prepare handovers. Growth dependent on one person or contract needs attention.",
        "Suis la progression — revois les prévisions chaque mois, valide les preuves et prépare la relève. Surveille la dépendance à une personne ou à un contrat.",
        "Sigue el avance — revisa proyecciones cada mes, valida evidencias y prepara el relevo. Vigila la dependencia de una persona o contrato."
      ]
    ]
  },
  {
    "id": "instancia-cluster",
    "topic": "network",
    "question": [
      "A clusterização do núcleo, da EJ e do engajamento é diferente?",
      "Do hubs, teams and engagement have different cluster systems?",
      "Pôles, équipes et engagement ont-ils des systèmes de clusters différents ?",
      "¿La clasificación del núcleo, la empresa y la participación es diferente?"
    ],
    "paragraphs": [
      [
        "Sim, são análises de objetos diferentes. O cluster 4.0 da EJ classifica a empresa como um todo, com dados consolidados. Engajamento é um indicador de participação de membros; seu percentual entra no índice da EJ e pode ser acompanhado internamente por equipe ou pessoa.",
        "Yes: they describe different objects. A team’s 4.0 cluster classifies the whole organization using consolidated data. Engagement measures member participation; its percentage contributes to the team’s index and can be tracked internally by person or department.",
        "Oui : les objets analysés diffèrent. Le cluster 4.0 classe l’ensemble de la Junior-Entreprise à partir de données consolidées. L’engagement mesure la participation des membres ; son pourcentage entre dans l’indice et peut être suivi par personne ou équipe.",
        "Sí: analizan objetos diferentes. El clúster 4.0 clasifica a toda la empresa con datos consolidados. La participación mide la presencia de miembros; su porcentaje entra en el índice y puede seguirse por persona o equipo."
      ],
      [
        "Um núcleo regional, como o NEJ Salvador, acompanha um conjunto de EJs e tem responsabilidades e indicadores de instância. Um núcleo interno da EJ é uma unidade de trabalho e pode ter diagnóstico próprio. Se um programa usar a palavra cluster para esses grupos, verifique sua fórmula e finalidade: as faixas da EJ não se transferem automaticamente para eles.",
        "A regional hub such as NEJ Salvador supports multiple teams and has network-body responsibilities and indicators. An internal department is a work unit and can have its own diagnosis. If a program uses “cluster” for either group, check its formula and purpose: the team’s index bands do not automatically apply.",
        "Un pôle régional comme NEJ Salvador accompagne plusieurs structures et possède ses propres responsabilités et indicateurs. Un département interne est une unité de travail. Si un programme les classe en clusters, vérifie sa formule et son objectif : le barème des Junior-Entreprises ne s’y applique pas automatiquement.",
        "Un núcleo regional como NEJ Salvador acompaña a varias empresas y tiene indicadores y responsabilidades propios. Un núcleo interno es una unidad de trabajo. Si un programa los agrupa en clústeres, revisa su fórmula y finalidad: los intervalos de las empresas no se aplican automáticamente."
      ]
    ],
    "source": "Brasil Júnior · Premissas e Fundamentos Estratégicos · PE 2025–2027",
    "url": "https://drive.google.com/file/d/1CyITjHqQA6Eu_Tkh_gX_VozUMVse_3du/view"
  },
  {
    "id": "responsabilidade-instancia",
    "topic": "network",
    "question": [
      "Qual é a principal responsabilidade de uma instância sobre uma EJ?",
      "What is a network body’s main responsibility toward a team?",
      "Quelle est la principale responsabilité d’une instance envers une équipe ?",
      "¿Cuál es la principal responsabilidad de una instancia con una empresa júnior?"
    ],
    "paragraphs": [
      [
        "Apoiar o desenvolvimento da EJ e conectá-la à estratégia e às oportunidades da Rede. Isso envolve acompanhamento, diagnóstico, formação e articulação. Federações e núcleos também participam da auditoria de resultados conforme as atribuições locais. A gestão da EJ responde pelas decisões e pela execução dos projetos.",
        "Support development and connect the team to network strategy and opportunities through follow-up, diagnosis, training and coordination. Federations and hubs also audit results under local responsibilities. Team management is responsible for decisions and project delivery.",
        "Accompagner le développement et relier l’équipe à la stratégie et aux opportunités par le suivi, le diagnostic et la formation. Les fédérations et pôles participent aussi aux audits selon leurs compétences. La gestion de l’équipe répond des décisions et projets.",
        "Apoyar el desarrollo y conectar al equipo con la estrategia y las oportunidades mediante seguimiento, diagnóstico y formación. Federaciones y núcleos participan en auditorías según sus atribuciones. La gestión de la empresa responde por decisiones y proyectos."
      ]
    ],
    "source": "Brasil Júnior · Kit Tudão e desenvolvimento da Rede",
    "url": "https://brasiljunior.org.br/blog/kit-tudao-o-passo-a-passo-para-amadurecer-a-sua-instancia",
    "points": [
      [
        "Diagnosticar e acompanhar — entender a realidade da EJ, combinar prioridades e acompanhar se o apoio gerou evolução.",
        "Diagnose and follow up — understand the team, agree priorities and check whether support produced improvement.",
        "Diagnostiquer et suivre — comprendre l’équipe, fixer les priorités et vérifier les progrès.",
        "Diagnosticar y acompañar — entender al equipo, acordar prioridades y comprobar la mejora."
      ],
      [
        "Conectar e representar — aproximar EJs, parceiros e oportunidades de formação, colaboração e negócios dentro de sua atuação.",
        "Connect and represent — bring teams, partners and learning, collaboration and business opportunities together within its remit.",
        "Relier et représenter — rapprocher équipes, partenaires et opportunités de formation, collaboration et affaires.",
        "Conectar y representar — acercar equipos, socios y oportunidades de formación, colaboración y negocios."
      ],
      [
        "Orientar sem substituir a gestão — esclarecer regras e responsabilidades; a diretoria da EJ continua responsável pelas decisões, pelos clientes e pela execução.",
        "Guide while preserving management responsibility — clarify rules; the team’s directors remain responsible for decisions, clients and delivery.",
        "Accompagner la gestion — clarifier les règles ; la direction reste responsable des décisions, des clients et des missions.",
        "Orientar la gestión — aclarar reglas; la directiva sigue siendo responsable de decisiones, clientes y ejecución."
      ]
    ]
  },
  {
    "id": "indicadores-instancias",
    "topic": "network",
    "question": [
      "Quais indicadores acompanham o trabalho das instâncias?",
      "Which indicators track network bodies’ work?",
      "Quels indicateurs suivent le travail des instances ?",
      "¿Qué indicadores siguen el trabajo de las instancias?"
    ],
    "paragraphs": [
      [
        "O quadro de essenciais do PE lista caixa mínimo, EJs na Rede, percentual de EJs em produtos de conexão e evolução da Rede. Eles acompanham sustentação da operação, alcance e desenvolvimento das EJs atendidas. Oportunidades para a Rede e CSAT de produto de conexão aparecem como complementares.",
        "The plan lists minimum cash, teams in the network, share of teams in connection products and network evolution as essentials. They track operational sustainability, reach and team development. Opportunities and connection-product CSAT are complementary.",
        "Le plan retient la trésorerie minimale, les équipes dans le réseau, leur participation aux produits de connexion et l’évolution du réseau comme essentiels. Ils suivent pérennité, portée et développement. Les opportunités et le CSAT des produits de connexion sont complémentaires.",
        "El plan incluye caja mínima, empresas en la red, porcentaje en productos de conexión y evolución de la red como esenciales. Siguen sostenibilidad, alcance y desarrollo. Las oportunidades y el CSAT de productos de conexión son complementarios."
      ]
    ],
    "source": "Brasil Júnior · Premissas e Fundamentos Estratégicos · PE 2025–2027",
    "url": "https://drive.google.com/file/d/1CyITjHqQA6Eu_Tkh_gX_VozUMVse_3du/view",
    "points": [
      [
        "Caixa mínimo: capacidade de manter a operação. EJs na Rede: alcance da representação e do acompanhamento.",
        "Minimum cash: ability to sustain operations. Teams in the network: reach of representation and support.",
        "Trésorerie minimale : capacité à maintenir l’activité. Équipes dans le réseau : portée de la représentation et du suivi.",
        "Caja mínima: capacidad de sostener la operación. Empresas en la red: alcance de representación y acompañamiento."
      ],
      [
        "EJs em produtos de conexão: acesso das empresas às iniciativas elegíveis. Evolução da Rede: desenvolvimento das EJs atendidas.",
        "Teams in connection products: access to eligible initiatives. Network evolution: development of supported teams.",
        "Équipes dans les produits de connexion : accès aux initiatives éligibles. Évolution du réseau : développement des équipes accompagnées.",
        "Empresas en productos de conexión: acceso a iniciativas elegibles. Evolución de la red: desarrollo de los equipos acompañados."
      ],
      [
        "Leia os números juntos: um evento cheio pode ter baixa satisfação; ampliar a base exige capacidade de acompanhamento. Para avaliar a instância, observe acesso, qualidade e resultado do apoio.",
        "Read the figures together: a full event can have low satisfaction; expanding reach requires support capacity. Assess access, quality and the results of support.",
        "Lis les chiffres ensemble : un événement complet peut décevoir ; élargir le réseau exige des moyens de suivi. Évalue accès, qualité et effets du soutien.",
        "Lee las cifras juntas: un evento lleno puede tener baja satisfacción; ampliar la red exige capacidad de apoyo. Evalúa acceso, calidad y resultados."
      ]
    ]
  },
  {
    "id": "missao-mej",
    "topic": "identity",
    "question": [
      "Qual é a missão do MEJ?",
      "What is the movement’s mission?",
      "Quelle est la mission du mouvement ?",
      "¿Cuál es la misión del movimiento?"
    ],
    "paragraphs": [
      [
        "A missão é desenvolver, pela experiência empresarial, lideranças que assumam o compromisso de transformar o Brasil por meio do empreendedorismo. O aprendizado acontece ao atender clientes, conduzir projetos, gerir a associação e assumir responsabilidade pelo impacto das decisões.",
        "Its mission is to develop leaders through enterprise experience who commit to transforming Brazil through entrepreneurship. Learning happens through clients, projects, association management and responsibility for decisions.",
        "Sa mission est de former, par l’expérience en entreprise, des leaders engagés à transformer le Brésil par l’entrepreneuriat. L’apprentissage passe par les clients, projets, gestion associative et responsabilité des décisions.",
        "Su misión es formar, mediante la experiencia empresarial, líderes comprometidos con transformar Brasil a través del emprendimiento. Se aprende con clientes, proyectos, gestión de la asociación y responsabilidad por las decisiones."
      ]
    ],
    "source": "Brasil Júnior · Conheça o MEJ",
    "url": "https://brasiljunior.org.br/conheca-o-mej",
    "points": [
      [
        "Na prática: o estudante assume uma responsabilidade real, executa com orientação, recebe feedback e usa o aprendizado na próxima decisão. A experiência precisa desenvolver competência e compromisso com os efeitos do trabalho.",
        "In practice: students take real responsibility, work with guidance, receive feedback and apply learning to their next decision. Experience must develop competence and responsibility for outcomes.",
        "En pratique : l’étudiant assume une responsabilité réelle, agit avec accompagnement, reçoit des retours et apprend pour sa prochaine décision. L’expérience développe compétence et responsabilité.",
        "En la práctica: el estudiante asume responsabilidades reales, actúa con orientación, recibe feedback y aplica lo aprendido. La experiencia debe desarrollar competencia y responsabilidad por sus efectos."
      ]
    ]
  },
  {
    "id": "visao-mej",
    "topic": "identity",
    "question": [
      "Qual é a visão do MEJ no ciclo 2025–2027?",
      "What is the movement’s vision for 2025–2027?",
      "Quelle est la vision du mouvement pour 2025–2027 ?",
      "¿Cuál es la visión del movimiento para 2025–2027?"
    ],
    "paragraphs": [
      [
        "No ciclo 2025–2027, a visão aponta para lideranças protagonistas que impulsionam o desenvolvimento sustentável em rede e geram impacto no ecossistema. O horizonte combina formação de pessoas, fortalecimento coletivo das EJs e transformação produzida pelas soluções entregues.",
        "For 2025–2027, the vision centers on proactive leaders advancing sustainable development across the network and creating ecosystem impact. It combines people development, collective organizational strength and change produced by delivered solutions.",
        "Pour 2025–2027, la vision vise des leaders qui prennent des initiatives, portent le développement durable en réseau et créent un impact dans l’écosystème. Elle associe formation, solidité collective et transformation par les missions réalisées.",
        "En 2025–2027, la visión apunta a líderes protagonistas que impulsan el desarrollo sostenible en red y generan impacto en el ecosistema. Combina formación, fortalecimiento colectivo y transformación mediante las soluciones entregadas."
      ],
      [
        "Para a EJ, isso significa planejar resultados que desenvolvam membros, preservem a continuidade da organização e atendam problemas reais dos clientes. Uma meta de vendas deve vir acompanhada de capacidade de entrega, aprendizagem e avaliação do resultado.",
        "For a team, this means developing members, preserving organizational continuity and addressing real client problems. A sales target needs delivery capacity, learning and outcome evaluation alongside it.",
        "Pour l’équipe, cela signifie former les membres, assurer la continuité et répondre aux problèmes réels des clients. Un objectif commercial doit être accompagné de capacité de livraison, d’apprentissage et d’évaluation.",
        "Para el equipo significa desarrollar miembros, preservar la continuidad y atender problemas reales. Una meta de ventas requiere capacidad de entrega, aprendizaje y evaluación del resultado."
      ]
    ],
    "source": "Brasil Júnior · Fundamentos dos Clusters 4.0 · outubro/2025",
    "url": "https://drive.google.com/file/d/1mFYA3wcuPsW3swFqlSUs8POx2I2LGN3F/view"
  },
  {
    "id": "valores-mej",
    "topic": "identity",
    "question": [
      "Quais são os valores do MEJ?",
      "What are the movement’s values?",
      "Quelles sont les valeurs du mouvement ?",
      "¿Cuáles son los valores del movimiento?"
    ],
    "paragraphs": [
      [
        "Orgulho de ser MEJ, postura empreendedora, compromisso com resultado, sinergia, transparência e autenticidade. Eles orientam como a EJ decide, se relaciona e assume responsabilidade pelo que entrega.",
        "Pride in the movement, entrepreneurial mindset, commitment to results, synergy, transparency and authenticity. They guide decisions, relationships and responsibility for delivery.",
        "Fierté du mouvement, esprit entrepreneurial, engagement envers les résultats, synergie, transparence et authenticité. Ils guident décisions, relations et responsabilité.",
        "Orgullo de ser MEJ, actitud emprendedora, compromiso con los resultados, sinergia, transparencia y autenticidad. Orientan decisiones, relaciones y responsabilidad."
      ]
    ],
    "source": "Brasil Júnior · Conheça o MEJ",
    "url": "https://brasiljunior.org.br/conheca-o-mej",
    "points": [
      [
        "Orgulho de ser MEJ — reconhecer o propósito de formação e representar o movimento com responsabilidade. Postura empreendedora — identificar problemas, propor soluções e assumir a execução.",
        "Pride in the movement — represent its educational purpose responsibly. Entrepreneurial mindset — identify problems, propose solutions and act.",
        "Fierté — représenter avec responsabilité la mission de formation. Esprit entrepreneurial — repérer les problèmes, proposer des solutions et agir.",
        "Orgullo — representar responsablemente el propósito formativo. Actitud emprendedora — identificar problemas, proponer soluciones y actuar."
      ],
      [
        "Compromisso com resultado — medir o que foi entregue e aprender com os desvios. Sinergia — cooperar entre áreas e EJs para ampliar a capacidade de resolver problemas.",
        "Commitment to results — measure delivery and learn from gaps. Synergy — cooperate across departments and teams to solve problems better.",
        "Résultats — mesurer les réalisations et apprendre des écarts. Synergie — coopérer entre services et structures pour mieux résoudre les problèmes.",
        "Resultados — medir entregas y aprender de desvíos. Sinergia — cooperar entre áreas y empresas para resolver mejor los problemas."
      ],
      [
        "Transparência — comunicar decisões, riscos e resultados de forma verificável. Autenticidade — participar com identidade própria e coerência entre discurso e prática.",
        "Transparency — communicate decisions, risks and verifiable results. Authenticity — contribute with your own identity and align words with actions.",
        "Transparence — communiquer décisions, risques et résultats vérifiables. Authenticité — participer avec son identité et aligner paroles et actes.",
        "Transparencia — comunicar decisiones, riesgos y resultados verificables. Autenticidad — participar con identidad propia y coherencia entre discurso y práctica."
      ]
    ]
  },
  {
    "id": "missao-cimatec",
    "topic": "identity",
    "question": [
      "Qual é a missão da CIMATEC jr?",
      "What is CIMATEC jr’s mission?",
      "Quelle est la mission de CIMATEC jr ?",
      "¿Cuál es la misión de CIMATEC jr?"
    ],
    "paragraphs": [
      [
        "Desenvolver jovens empreendedores capazes de realizar projetos de excelência.",
        "Develop young entrepreneurs capable of delivering excellent projects.",
        "Développer de jeunes entrepreneurs capables de réaliser des projets d’excellence.",
        "Desarrollar jóvenes emprendedores capaces de realizar proyectos de excelencia."
      ],
      [
        "A missão une formação de pessoas e qualidade de entrega. O membro aprende ao resolver problemas reais, assumir responsabilidades e receber orientação e feedback. O cliente deve perceber esse desenvolvimento em soluções bem executadas, comunicação clara e compromissos cumpridos.",
        "The mission links people development and delivery quality. Members learn by solving real problems, taking responsibility and receiving guidance and feedback. Clients should see that development in well-executed solutions, clear communication and fulfilled commitments.",
        "La mission relie formation et qualité. Les membres apprennent en résolvant de vrais problèmes, en prenant des responsabilités et en recevant accompagnement et retours. Le client doit le percevoir dans la qualité, la clarté et le respect des engagements.",
        "La misión une formación y calidad. Los miembros aprenden resolviendo problemas reales, asumiendo responsabilidades y recibiendo orientación y feedback. El cliente debe percibirlo en soluciones bien ejecutadas, comunicación clara y compromisos cumplidos."
      ]
    ],
    "source": "CIMATEC jr · Missão, visão e valores",
    "url": "https://www.canva.com/design/DAHX_OsYHj4/view"
  },
  {
    "id": "visao-cimatec",
    "topic": "identity",
    "question": [
      "Qual é a visão da CIMATEC jr?",
      "What is CIMATEC jr’s vision?",
      "Quelle est la vision de CIMATEC jr ?",
      "¿Cuál es la visión de CIMATEC jr?"
    ],
    "paragraphs": [
      [
        "Ser a maior empresa júnior do Brasil em 2030.",
        "Become Brazil’s largest Junior Enterprise in 2030.",
        "Devenir la plus grande Junior-Entreprise du Brésil en 2030.",
        "Ser la mayor empresa júnior de Brasil en 2030."
      ],
      [
        "A visão define o horizonte da organização. Para orientar a gestão, precisa ser desdobrada em metas anuais, capacidade de execução e desenvolvimento de pessoas. O acompanhamento deve tornar explícito como a EJ mede o avanço e o que cada área precisa entregar, preservando qualidade e continuidade entre gestões.",
        "The vision sets the organization’s horizon. Management must translate it into annual targets, delivery capacity and people development. Tracking should make progress measures and departmental responsibilities explicit while preserving quality and continuity between terms.",
        "La vision fixe l’horizon. La gestion doit la traduire en objectifs annuels, capacité d’exécution et formation. Le suivi doit préciser les mesures de progression et les responsabilités de chaque département, en préservant qualité et continuité.",
        "La visión fija el horizonte. La gestión debe traducirla en metas anuales, capacidad de ejecución y desarrollo de personas. El seguimiento debe explicitar cómo medir avances y qué debe entregar cada área, preservando calidad y continuidad."
      ]
    ],
    "source": "CIMATEC jr · Missão, visão e valores",
    "url": "https://www.canva.com/design/DAHX_OsYHj4/view"
  },
  {
    "id": "valores-cimatec",
    "topic": "identity",
    "question": [
      "Quais são os valores da CIMATEC jr?",
      "What are CIMATEC jr’s values?",
      "Quelles sont les valeurs de CIMATEC jr ?",
      "¿Cuáles son los valores de CIMATEC jr?"
    ],
    "paragraphs": [
      [
        "União, projetos, energia, qualidade, resiliência, construção e transparência. A aplicação abaixo traduz esses valores em atitudes para o dia a dia da EJ.",
        "Unity, projects, energy, quality, resilience, building and transparency. The applications below translate these values into everyday team behavior.",
        "Union, projets, énergie, qualité, résilience, construction et transparence. Les applications ci-dessous les traduisent en comportements quotidiens.",
        "Unión, proyectos, energía, calidad, resiliencia, construcción y transparencia. Las aplicaciones siguientes los traducen en conductas cotidianas."
      ]
    ],
    "source": "CIMATEC jr · Missão, visão e valores",
    "url": "https://www.canva.com/design/DAHX_OsYHj4/view",
    "points": [
      [
        "União — compartilhar responsabilidade e cooperar entre áreas. Projetos — aprender e gerar valor por meio de entregas reais.",
        "Unity — share responsibility across departments. Projects — learn and create value through real delivery.",
        "Union — partager les responsabilités entre services. Projets — apprendre et créer de la valeur par des réalisations concrètes.",
        "Unión — compartir responsabilidades entre áreas. Proyectos — aprender y generar valor con entregas reales."
      ],
      [
        "Energia — participar com iniciativa e disposição para executar. Qualidade — combinar critérios de aceite e revisar o resultado antes de entregar.",
        "Energy — participate with initiative and readiness to act. Quality — agree acceptance criteria and review results before delivery.",
        "Énergie — participer avec initiative. Qualité — fixer les critères d’acceptation et vérifier avant la livraison.",
        "Energía — participar con iniciativa. Calidad — acordar criterios de aceptación y revisar antes de entregar."
      ],
      [
        "Resiliência — aprender com dificuldades e ajustar a rota. Construção — deixar processos, conhecimentos e relações melhores para quem assume depois.",
        "Resilience — learn from setbacks and adjust. Building — leave better processes, knowledge and relationships for successors.",
        "Résilience — apprendre des difficultés et s’adapter. Construction — transmettre de meilleurs processus, connaissances et relations.",
        "Resiliencia — aprender de dificultades y ajustar el rumbo. Construcción — dejar mejores procesos, conocimientos y relaciones al relevo."
      ],
      [
        "Transparência — registrar decisões, comunicar riscos e apresentar resultados com dados verificáveis.",
        "Transparency — record decisions, communicate risks and present results backed by verifiable data.",
        "Transparence — consigner les décisions, communiquer les risques et justifier les résultats par des données vérifiables.",
        "Transparencia — registrar decisiones, comunicar riesgos y presentar resultados con datos verificables."
      ]
    ]
  },
  {
    "id": "csat",
    "topic": "practice",
    "question": [
      "O que é CSAT e qual cobertura preciso ter?",
      "What is CSAT and what response coverage do I need?",
      "Qu’est-ce que le CSAT et quelle couverture faut-il ?",
      "¿Qué es el CSAT y qué cobertura se necesita?"
    ],
    "paragraphs": [
      [
        "Customer Satisfaction Score mede a satisfação com a solução entregue. O PE usa a média das notas de 1 a 5 e prevê coleta mínima de 80% na base elegível de soluções finalizadas no ano, com premissa de nota 3,5. A nota mostra a percepção de quem respondeu. A cobertura mostra quanto da base foi ouvida.",
        "Customer Satisfaction Score measures satisfaction with the delivered solution. The plan averages scores from 1 to 5 and calls for responses from at least 80% of eligible solutions completed in the year, with a benchmark of 3.5. The score reflects respondents’ experience, while coverage shows how much of the eligible base answered.",
        "Le Customer Satisfaction Score mesure la satisfaction à l’égard de la solution livrée. Le plan retient la moyenne des notes de 1 à 5 et prévoit au moins 80 % de réponses parmi les solutions éligibles achevées dans l’année, avec un seuil de 3,5. La note reflète l’expérience des répondants. La couverture indique la part des réponses.",
        "El Customer Satisfaction Score mide la satisfacción con la solución entregada. El plan usa el promedio de notas del 1 al 5 y exige respuestas de al menos el 80 % de las soluciones elegibles finalizadas durante el año, con una referencia de 3,5. La nota refleja la experiencia de quienes respondieron y la cobertura indica qué parte de la base respondió."
      ],
      [
        "Se 4 de 5 projetos elegíveis recebem notas 5, 4, 4 e 3, o CSAT é 4,0 e a cobertura é 80%. Leia os comentários para entender o 3 e testar uma melhoria na próxima entrega.",
        "If 4 of 5 eligible projects receive scores of 5, 4, 4 and 3, CSAT is 4.0 and coverage is 80%. Read the comments to understand the 3 and test an improvement on your next delivery.",
        "Si 4 projets éligibles sur 5 obtiennent les notes 5, 4, 4 et 3, le CSAT vaut 4,0 et la couverture 80 %. Lis les commentaires pour comprendre le 3 et tester une amélioration.",
        "Si 4 de 5 proyectos elegibles reciben notas de 5, 4, 4 y 3, el CSAT es 4,0 y la cobertura, 80 %. Lee los comentarios para entender el 3 y probar una mejora."
      ]
    ],
    "source": "Brasil Júnior · Premissas e Fundamentos Estratégicos",
    "url": "https://drive.google.com/file/d/1CyITjHqQA6Eu_Tkh_gX_VozUMVse_3du/view",
    "points": [
      [
        "Inclua a coleta no encerramento de cada projeto, com responsável e acompanhamento das respostas. Leia os comentários, registre a causa de insatisfação e acompanhe a correção. Pedir avaliação só aos clientes mais satisfeitos distorce o diagnóstico.",
        "Make feedback part of every project closure, with an owner and response tracking. Read comments, identify dissatisfaction causes and follow corrective actions. Asking only happy clients distorts diagnosis.",
        "Intègre la collecte à chaque clôture, avec un responsable et un suivi. Lis les commentaires, identifie les causes et vérifie les corrections. Interroger seulement les clients satisfaits fausse le diagnostic.",
        "Incluye la evaluación en cada cierre, con responsable y seguimiento. Lee comentarios, identifica causas y sigue las correcciones. Preguntar solo a clientes satisfechos distorsiona el diagnóstico."
      ]
    ]
  },
  {
    "id": "colaboracao",
    "topic": "practice",
    "question": [
      "O que conta como faturamento colaborativo?",
      "What counts as collaborative revenue?",
      "Qu’est-ce qui compte comme chiffre d’affaires collaboratif ?",
      "¿Qué cuenta como facturación colaborativa?"
    ],
    "paragraphs": [
      [
        "É o faturamento de contratos elegíveis em que a EJ compartilha a entrega de uma solução ao cliente final com outra EJ ou agente do ecossistema, com contrapartida financeira. A terceirização em que o prestador não se relaciona com o cliente final fica fora. A representatividade divide o faturamento colaborativo pelo total. A taxa de colaboração acompanha sua variação de um ano para o outro.",
        "This is revenue from eligible contracts where a Junior Enterprise shares delivery to the end client with another enterprise or ecosystem partner, with payment. Outsourcing where the contractor has no relationship with the end client is excluded. The collaborative share divides collaborative revenue by total revenue. The collaboration rate tracks year-over-year change.",
        "Il s’agit du chiffre d’affaires des contrats éligibles où la Junior-Entreprise réalise une solution pour le client final avec une autre structure, avec rémunération. La sous-traitance sans relation avec le client final est exclue. La part collaborative rapporte ce chiffre au total. Le taux de collaboration suit son évolution annuelle.",
        "Es la facturación de contratos elegibles en los que la empresa júnior comparte la entrega al cliente final con otra empresa júnior o un agente del ecosistema, con contraprestación económica. Se excluye la subcontratación sin relación con el cliente final. El peso colaborativo divide esa facturación por la total. La tasa de colaboración sigue su variación anual."
      ],
      [
        "Uma EJ de engenharia e outra de design entregam juntas um serviço ao cliente. Cada uma registra sua parcela no Portal BJ. Se uma EJ apura R$ 20 mil em contratos elegíveis e R$ 100 mil no total, a representatividade dela é 20%.",
        "An engineering team and a design team deliver a service together. Each reports its own share in the BJ Portal. If one team records R$20,000 from eligible contracts and R$100,000 total, its collaborative share is 20%.",
        "Une équipe d’ingénierie et une équipe de design livrent ensemble un service. Chacune déclare sa part sur le portail BJ. Avec 20 000 R$ de contrats éligibles pour 100 000 R$ au total, la part collaborative est de 20 %.",
        "Un equipo de ingeniería y otro de diseño entregan juntos un servicio. Cada uno registra su parte en el Portal BJ. Con R$20.000 de contratos elegibles sobre R$100.000 en total, el peso colaborativo es del 20 %."
      ]
    ],
    "source": "Brasil Júnior · Premissas e Fundamentos Estratégicos",
    "url": "https://drive.google.com/file/d/1CyITjHqQA6Eu_Tkh_gX_VozUMVse_3du/view",
    "points": [
      [
        "Antes de começar, defina escopo de cada parceiro, contato com o cliente, divisão financeira e aceite das entregas. Guarde os documentos que comprovam a atuação conjunta e evite duplicar o valor total do contrato nos registros de cada EJ.",
        "Before starting, define each partner’s scope, client contact, financial split and acceptance process. Retain joint-delivery evidence and avoid reporting the full contract value for every team.",
        "Avant de commencer, définis périmètre, relation client, répartition financière et réception. Conserve les preuves et évite que chaque équipe déclare la valeur totale du contrat.",
        "Antes de empezar, define alcance, contacto con el cliente, reparto financiero y aceptación. Conserva evidencias y evita registrar el valor total del contrato en cada equipo."
      ]
    ]
  },
  {
    "id": "impacto",
    "topic": "practice",
    "question": [
      "O que torna um projeto um projeto de impacto?",
      "What qualifies a project as an impact project?",
      "Qu’est-ce qui fait d’un projet un projet à impact ?",
      "¿Qué convierte un proyecto en proyecto de impacto?"
    ],
    "paragraphs": [
      [
        "É um projeto que resolve um problema relevante do ecossistema e demonstra a mudança produzida, atendendo aos critérios do indicador de impacto. Entregar um relatório, um aplicativo ou uma consultoria é realizar uma entrega; comprovar o efeito dessa solução exige medir o resultado para quem a utiliza.",
        "An impact project addresses a relevant ecosystem problem and demonstrates the change produced while meeting the impact indicator’s criteria. A report, app or consultancy is a deliverable; proving its effect requires measuring the result for its users.",
        "Un projet à impact résout un problème pertinent de l’écosystème et démontre le changement produit selon les critères de l’indicateur. Un rapport, une application ou un conseil est un livrable ; son effet se démontre en mesurant le résultat pour les utilisateurs.",
        "Un proyecto de impacto resuelve un problema relevante del ecosistema y demuestra el cambio producido según los criterios del indicador. Un informe, aplicación o consultoría es un entregable; demostrar su efecto exige medir el resultado para quienes lo usan."
      ],
      [
        "Defina o problema, quem é afetado, o indicador de resultado e a situação inicial antes da execução. Depois, compare o resultado com essa base, explique como mediu e registre a satisfação dos envolvidos. Exemplo: reduzir desperdício exige medir perdas antes e depois, e não apenas comprovar que uma capacitação aconteceu. O reconhecimento no indicador depende da avaliação e dos requisitos oficiais.",
        "Before delivery, define the problem, affected people, outcome metric and baseline. Then compare results, explain measurement and record stakeholder satisfaction. Waste reduction needs before-and-after loss data, beyond proof that training occurred. Recognition depends on official assessment and requirements.",
        "Définis avant la mission le problème, les bénéficiaires, la mesure et la situation initiale. Compare ensuite les résultats, explique la méthode et recueille la satisfaction. Réduire le gaspillage exige des données avant et après, au-delà d’une preuve de formation. La reconnaissance dépend de l’évaluation officielle.",
        "Define antes de ejecutar el problema, afectados, indicador y situación inicial. Después compara resultados, explica la medición y registra satisfacción. Reducir desperdicios exige medir pérdidas antes y después, además de acreditar una capacitación. El reconocimiento depende de la evaluación oficial."
      ]
    ],
    "source": "Brasil Júnior · Premissas e Fundamentos Estratégicos",
    "url": "https://drive.google.com/file/d/1CyITjHqQA6Eu_Tkh_gX_VozUMVse_3du/view"
  },
  {
    "id": "faturamento",
    "topic": "practice",
    "question": [
      "Faturamento, recebimento e caixa são diferentes?",
      "How do revenue, payments and cash differ?",
      "Comment distinguer chiffre d’affaires, encaissements et trésorerie ?",
      "¿Cómo se diferencian facturación, cobros y caja?"
    ],
    "paragraphs": [
      [
        "No PE, faturamento é a soma das contrapartidas financeiras elegíveis pelas soluções vendidas no período. O registro parte do contrato ou da nota fiscal conforme as regras de auditoria, e ajustes como distrato parcial e terceirização mudam o valor elegível. Recebimento é a entrada efetiva de dinheiro. Caixa é a disponibilidade financeira em um momento.",
        "In the plan, revenue is the sum of eligible amounts for solutions sold in the period. Contracts or invoices support reporting under audit rules, and partial cancellations and outsourcing can change the eligible amount. A payment is an actual cash inflow. Cash is the amount available at a point in time.",
        "Dans le plan, le chiffre d’affaires cumule les montants éligibles des solutions vendues sur la période. Les contrats ou factures justifient la déclaration, et une annulation partielle ou la sous-traitance peut modifier le montant éligible. L’encaissement est l’entrée effective d’argent. La trésorerie correspond à l’argent disponible à un instant donné.",
        "En el plan, la facturación suma los importes elegibles por soluciones vendidas en el período. Los contratos o facturas respaldan el registro, y una cancelación parcial o subcontratación puede cambiar el importe elegible. Un cobro es una entrada real. La caja es el dinero disponible en un momento dado."
      ],
      [
        "Uma venda elegível de R$ 6 mil parcelada em três vezes pode contar para o indicador antes de todo o dinheiro entrar. Planeje o pagamento de despesas considerando as datas de recebimento.",
        "An eligible R$6,000 sale paid in three installments can count before all the cash arrives. Plan expenses around the dates payments are due.",
        "Une vente éligible de 6 000 R$ en trois versements peut être comptée avant l’encaissement complet. Planifie les dépenses en fonction des échéances.",
        "Una venta elegible de R$6.000 en tres cuotas puede contar antes de que entre todo el dinero. Planifica los gastos según las fechas de cobro."
      ]
    ],
    "source": "Brasil Júnior · Premissas e Fundamentos Estratégicos",
    "url": "https://drive.google.com/file/d/1CyITjHqQA6Eu_Tkh_gX_VozUMVse_3du/view",
    "points": [
      [
        "Use controles separados: vendas elegíveis para o indicador, contas a receber para acompanhar os pagamentos e fluxo de caixa para planejar entradas e saídas. Antes de assumir uma despesa, confira o dinheiro disponível e as datas de recebimento.",
        "Keep separate controls: eligible sales for the indicator, receivables for payments and cash flow for inflows and outflows. Before committing to an expense, check available cash and payment dates.",
        "Sépare les ventes éligibles, les créances clients et le suivi de trésorerie. Avant une dépense, vérifie les disponibilités et les dates d’encaissement.",
        "Separa ventas elegibles, cuentas por cobrar y flujo de caja. Antes de comprometer un gasto, verifica disponibilidad y fechas de cobro."
      ]
    ]
  },
  {
    "id": "selo-ej",
    "topic": "practice",
    "question": [
      "O que é o Selo EJ e como preparar a auditoria?",
      "What is Selo EJ and how do I prepare for an audit?",
      "Qu’est-ce que le Selo EJ et comment préparer l’audit ?",
      "¿Qué es Selo EJ y cómo preparar la auditoría?"
    ],
    "paragraphs": [
      [
        "O Selo EJ orienta e verifica a regularidade documental e institucional conforme o edital. O ciclo do selo e a auditoria dos resultados são rotinas distintas: um verifica requisitos da EJ, a outra comprova dados declarados. Consulte o edital da sua instância para documentos, prazos e responsáveis.",
        "Selo EJ guides and verifies institutional and documentary compliance under its current rules. The seal and results auditing are separate routines: one checks organizational requirements, the other validates reported data. Check the current notice for documents, deadlines and owners.",
        "Le Selo EJ encadre et vérifie la conformité documentaire et institutionnelle. Le label et l’audit des résultats suivent deux démarches : l’une vérifie les exigences de l’organisation, l’autre valide les données déclarées. Consulte l’avis en vigueur pour les pièces, les délais et les responsables.",
        "Selo EJ orienta y verifica la regularidad documental e institucional. El sello y la auditoría de resultados son procesos distintos: uno verifica requisitos de la organización y el otro valida los datos declarados. Consulta la convocatoria vigente para conocer documentos, plazos y responsables."
      ],
      [
        "Monte um controle com documento, data, responsável e status. Para resultados, relacione cada valor registrado ao contrato ou comprovante aplicável e deixe registrada a justificativa de ajustes.",
        "Track each document, date, owner and status. For results, connect each reported amount to its applicable evidence and record why any adjustments were made.",
        "Suis chaque document, date, responsable et statut. Relie chaque montant déclaré à son justificatif et note la raison des ajustements.",
        "Controla cada documento, fecha, responsable y estado. Vincula cada importe declarado a su evidencia y registra el motivo de los ajustes."
      ]
    ],
    "source": "Brasil Júnior · Guia histórico do Selo EJ",
    "url": "https://uploads.brasiljunior.org.br/uploads/cms/ejseal/file/file/5/_Selo_EJ__Guia_de_Utiliza%C3%A7%C3%A3o_-_Portal_BJ.pdf",
    "points": [
      [
        "Organize um calendário de vencimentos, um responsável por documento e uma revisão antes do envio. Se houver pendência, registre o que falta, quem resolve e o prazo. Preserve o histórico para que a próxima gestão consiga manter a regularidade.",
        "Keep an expiry calendar, a document owner and a pre-submission review. Track what is missing, who resolves it and by when. Preserve history so successors can maintain compliance.",
        "Prévois un calendrier des échéances, un responsable par pièce et une vérification avant envoi. Note les manques, responsables et délais. Conserve l’historique pour la relève.",
        "Mantén calendario de vencimientos, responsable por documento y revisión previa. Registra pendientes, responsables y plazos. Conserva el historial para el relevo."
      ]
    ]
  },
  {
    "id": "portal-bj",
    "topic": "practice",
    "question": [
      "Onde encontro formações e materiais no Portal BJ?",
      "Where can I find training and materials in the BJ Portal?",
      "Où trouver des formations et ressources sur le portail BJ ?",
      "¿Dónde encontrar formación y materiales en el Portal BJ?"
    ],
    "paragraphs": [
      [
        "O Portal BJ concentra registros e ferramentas da Rede. Consulte os resultados da sua EJ, alinhe com a gestão quem registra metas e evidências e verifique o perfil de acesso. Para formação das instâncias, o Tetris abriga o Kit Tudão, com trilhas do PE, formação, expansão, negócios e gente e gestão.",
        "The BJ Portal brings together network records and tools. Review your team’s results, agree on who logs targets and evidence, and check your access role. For network bodies, Tetris hosts Kit Tudão with learning paths on strategy, development, expansion, business and people management.",
        "Le portail BJ centralise les données et outils du réseau. Consulte les résultats de ton équipe, définis qui saisit les objectifs et justificatifs et vérifie tes droits. Pour les instances, Tetris héberge Kit Tudão avec des parcours sur la stratégie, la formation, l’expansion, les affaires et la gestion des personnes.",
        "El Portal BJ reúne registros y herramientas de la red. Consulta los resultados de tu equipo, acuerda quién registra las metas y evidencias y revisa tu perfil de acceso. Para las instancias, Tetris alberga Kit Tudão con itinerarios sobre estrategia, formación, expansión, negocios y gestión de personas."
      ],
      [
        "Antes do fechamento do mês, confira os dados da EJ no portal e compare com os controles internos. Resolva divergências com os responsáveis pelo registro e pela auditoria.",
        "Before month-end, check your portal results against internal records. Resolve differences with the people responsible for reporting and audit.",
        "Avant la clôture du mois, compare les résultats du portail avec les données internes. Résous les écarts avec les responsables de la déclaration et de l’audit.",
        "Antes del cierre mensual, compara los resultados del portal con los registros internos. Resuelve discrepancias con los responsables del registro y la auditoría."
      ]
    ],
    "source": "Brasil Júnior · Kit Tudão",
    "url": "https://brasiljunior.org.br/blog/kit-tudao-o-passo-a-passo-para-amadurecer-a-sua-instancia",
    "points": [
      [
        "Comece pela necessidade: resultados para acompanhar metas; registros e evidências para comprovar dados; acervo e trilhas para estudar. Os acessos variam por perfil. Se uma área não aparecer, confirme a permissão com a gestão ou a instância responsável.",
        "Start with the need: results for targets, records and evidence for validation, resources and learning paths for study. Access varies by role; check permissions with management or the responsible body if a section is missing.",
        "Pars du besoin : résultats pour les objectifs, données et preuves pour la validation, ressources et parcours pour apprendre. Les droits varient ; fais vérifier ton profil si une rubrique manque.",
        "Parte de la necesidad: resultados para metas, registros y evidencias para validar, recursos e itinerarios para estudiar. Los accesos varían; verifica permisos si falta una sección."
      ]
    ]
  }
]
