import { urls } from './content.ts'
import type { Entry } from './content.ts'

export const topics = {
  strategy: ['Estratégia', 'Strategy', 'Stratégie', 'Estrategia'],
  leadership: ['Liderança', 'Leadership', 'Leadership', 'Liderazgo'],
  operations: ['Gestão', 'Operations', 'Gestion', 'Gestión'],
  network: ['Rede', 'Network', 'Réseau', 'Red'],
} as const

type Resource = Entry & {
  topic: keyof typeof topics
  credit: string
  steps?: Entry['title'][]
}

export const resources: Resource[] = [
  {
    topic: 'strategy', credit: 'Brasil Júnior', url: urls.strategy,
    title: ['PE da Rede 2025–2027', 'Network strategy 2025–2027', 'Stratégie du réseau 2025–2027', 'Estrategia de la red 2025–2027'],
    body: ['Consulte as prioridades e indicadores do ciclo. Escolha um objetivo da Rede e converse sobre como traduzi-lo em um compromisso da sua EJ.', 'Review the cycle’s priorities and indicators. Choose a network goal and discuss what your Junior Enterprise could commit to.', 'Consulte les priorités et indicateurs du cycle. Choisis un objectif et discute de l’engagement que pourrait prendre ta Junior-Entreprise.', 'Consulta las prioridades y los indicadores del ciclo. Elige un objetivo y debate qué compromiso podría asumir tu empresa júnior.'],
  },
  {
    topic: 'network', credit: 'Brasil Júnior', url: urls.kit,
    title: ['Kit Tudão', 'Kit Tudão', 'Kit Tudão', 'Kit Tudão'],
    body: ['Encontre trilhas de formação, expansão, negócios, gestão de pessoas e desenvolvimento de núcleos para as instâncias do MEJ.', 'Find learning paths for movement bodies on training, expansion, business, people management and hub development.', 'Trouve des parcours pour les organisations du mouvement sur la formation, l’expansion, les affaires, la gestion des personnes et le développement des pôles.', 'Encuentra itinerarios sobre formación, expansión, negocios, gestión de personas y desarrollo de núcleos para las instancias del movimiento.'],
  },
  {
    topic: 'network', credit: 'Brasil Júnior', url: urls.portal,
    title: ['Portal BJ', 'BJ Portal', 'Portail BJ', 'Portal BJ'],
    body: ['Acesse o ambiente oficial da Rede para acompanhar resultados e consultar recursos da sua instância. O acesso depende de credenciais próprias.', 'Use the official network platform to track results and find resources for your organization. A separate login is required.', 'Utilise la plateforme officielle du réseau pour suivre les résultats et consulter les ressources de ton organisation. Un compte est nécessaire.', 'Accede a la plataforma oficial para seguir resultados y consultar recursos de tu instancia. Se requiere una cuenta propia.'],
  },
  {
    topic: 'leadership', credit: 'Brasil Júnior · Kit Tudão', url: urls.formation,
    title: ['Formação empreendedora', 'Entrepreneurial learning', 'Formation entrepreneuriale', 'Formación emprendedora'],
    body: ['Consulte materiais de formação e identifique uma competência que sua equipe pode desenvolver em um projeto real.', 'Explore training resources and identify a skill your team can develop on a real project.', 'Consulte les ressources et identifie une compétence que ton équipe peut développer sur un vrai projet.', 'Consulta los recursos de formación e identifica una competencia que tu equipo pueda desarrollar en un proyecto real.'],
  },
  {
    topic: 'operations', credit: 'Brasil Júnior · Kit Tudão', url: urls.people,
    title: ['Gente e gestão', 'People and operations', 'Équipe et gestion', 'Personas y gestión'],
    body: ['Consulte a trilha de cultura, governança e processos internos. Use-a para preparar uma conversa sobre como sua gestão vai deixar legado.', 'Explore the track on culture, governance and internal processes. Use it to discuss what your team will hand over to its successors.', 'Explore le parcours sur la culture, la gouvernance et les processus internes. Discute de ce que ton équipe transmettra à la suivante.', 'Explora el itinerario sobre cultura, gobernanza y procesos internos. Úsalo para hablar de lo que tu equipo dejará al siguiente.'],
  },
  {
    topic: 'strategy', credit: 'Brasil Júnior', url: urls.transparency,
    title: ['Portal da Transparência', 'Transparency Portal', 'Portail de la transparence', 'Portal de Transparencia'],
    body: ['Compare relatórios de legado, ciclos de planejamento e demonstrativos. Observe o que é possível reconstruir a partir dos registros.', 'Compare handover reports, planning cycles and financial statements. Look at what you can reconstruct from the records.', 'Compare les bilans de mandat, les cycles de planification et les états financiers. Observe ce que les archives permettent de reconstituer.', 'Compara informes de legado, ciclos de planificación y estados financieros. Observa qué puedes reconstruir a partir de los registros.'],
  },
  {
    topic: 'leadership', credit: 'DMEJ',
    title: ['Delegue uma decisão real', 'Delegate a real decision', 'Délègue une vraie décision', 'Delega una decisión real'],
    body: ['Exercício para desenvolver autonomia em um projeto em andamento.', 'An exercise for developing autonomy in an active project.', 'Un exercice pour développer l’autonomie dans un projet en cours.', 'Ejercicio para desarrollar autonomía en un proyecto en marcha.'],
    steps: [
      ['Escolha uma decisão reversível com impacto real para o time.', 'Choose a reversible decision with a real impact on the team.', 'Choisis une décision réversible qui a un effet réel sur l’équipe.', 'Elige una decisión reversible con impacto real para el equipo.'],
      ['Combine o resultado esperado, os limites e quando pedir ajuda.', 'Agree on the expected outcome, boundaries and when to ask for help.', 'Convenez du résultat attendu, des limites et du moment où demander de l’aide.', 'Acuerda el resultado esperado, los límites y cuándo pedir ayuda.'],
      ['Na revisão, pergunte qual evidência guiou a decisão e o que mudaria.', 'At the review, ask what evidence guided the decision and what they would change.', 'Au bilan, demande quels éléments ont guidé la décision et ce qui pourrait changer.', 'En la revisión, pregunta qué evidencia guió la decisión y qué cambiaría.'],
    ],
  },
  {
    topic: 'operations', credit: 'DMEJ · CIMATEC Jr.',
    title: ['Registre uma decisão de preço', 'Document a pricing decision', 'Consigne une décision de prix', 'Registra una decisión de precio'],
    body: ['Ficha didática inspirada em um procedimento de pesquisa e validação de referências de mercado da CIMATEC Jr.', 'An exercise informed by CIMATEC Jr.’s approach to researching and validating market references.', 'Fiche pédagogique inspirée d’une démarche de recherche et de validation de références de marché de CIMATEC Jr.', 'Ficha didáctica inspirada en un procedimiento de búsqueda y validación de referencias de mercado de CIMATEC Jr.'],
    steps: [
      ['Escolha um serviço e anote o escopo, as premissas e o motivo da revisão.', 'Pick a service and record its scope, assumptions and reason for review.', 'Choisis un service et note son périmètre, les hypothèses et le motif de la révision.', 'Elige un servicio y anota el alcance, los supuestos y el motivo de la revisión.'],
      ['Reúna referências comparáveis e explicite diferenças de escopo ou prazo.', 'Gather comparable references and spell out differences in scope or timing.', 'Rassemble des références comparables et précise les différences de périmètre ou de délai.', 'Reúne referencias comparables y explicita las diferencias de alcance o plazo.'],
      ['Defina quem revisa a proposta. Registre as evidências, a decisão e a data para reavaliar.', 'Name the reviewer. Record the evidence, the decision and a date to revisit it.', 'Désigne la personne qui valide. Consigne les éléments, la décision et la date de réexamen.', 'Define quién revisará la propuesta. Registra la evidencia, la decisión y la fecha de reevaluación.'],
    ],
  },
  {
    topic: 'operations', credit: 'DMEJ',
    title: ['Prepare a troca de gestão', 'Prepare the handover', 'Prépare la passation', 'Prepara el relevo de gestión'],
    body: ['Teste se outra pessoa consegue executar uma rotina usando o que está documentado.', 'Check whether someone else can run a routine using your documentation.', 'Vérifie si quelqu’un d’autre peut exécuter une routine à partir de la documentation.', 'Comprueba si otra persona puede ejecutar una rutina con la documentación disponible.'],
    steps: [
      ['Escolha um processo crítico e anote gatilho, entradas, saída e responsável.', 'Pick a critical process and write down its trigger, inputs, output and owner.', 'Choisis un processus critique et note son déclencheur, ses entrées, sa sortie et son responsable.', 'Elige un proceso crítico y anota el activador, las entradas, la salida y el responsable.'],
      ['Peça a uma pessoa de outra área para seguir o fluxo em um cenário de teste.', 'Ask someone from another team to follow the workflow in a test scenario.', 'Demande à une personne d’une autre équipe de suivre le processus dans un cas test.', 'Pide a alguien de otra área que siga el flujo en un escenario de prueba.'],
      ['Corrija as lacunas e combine quem manterá o registro após a transição.', 'Fix the gaps and agree on who will maintain the documentation after the handover.', 'Comble les lacunes et décide qui tiendra la documentation à jour après la passation.', 'Corrige los vacíos y acuerda quién mantendrá el registro después del relevo.'],
    ],
  },
]
