import type { Entry } from './content.ts'

type Translation = Entry['title']
type Photo = { id: string; width: number; height: number; title: string; credit: string; url: string; alt: Translation }

export const eventCopy = {
  nav: ['Eventos', 'Events', 'Événements', 'Eventos'],
  title: ['O MEJ se encontra.', 'The movement gets together.', 'Le mouvement se retrouve.', 'El movimiento se encuentra.'],
  intro: ['Da recepção de trainees em Salvador ao encontro nacional, cada evento aproxima EJs que vivem desafios diferentes e têm o que aprender umas com as outras.', 'From welcoming trainees in Salvador to the national meeting, events connect teams facing different challenges with plenty to learn from one another.', 'De l’accueil des stagiaires à Salvador à la rencontre nationale, les événements relient des équipes confrontées à des défis différents qui ont beaucoup à apprendre les unes des autres.', 'Desde la bienvenida a trainees en Salvador hasta el encuentro nacional, los eventos conectan equipos con desafíos distintos que pueden aprender entre sí.'],
  gallery: ['A Rede em imagens', 'The network in pictures', 'Le réseau en images', 'La red en imágenes'],
  galleryIntro: ['Abra uma foto para ver o registro inteiro. Os créditos e as fontes estão no fim da página.', 'Open a photo to see the full frame. Credits and sources are at the end of the page.', 'Ouvre une photo pour la voir en entier. Les crédits et les sources figurent en bas de page.', 'Abre una foto para verla completa. Los créditos y las fuentes están al final de la página.'],
  close: ['Fechar foto', 'Close photo', 'Fermer la photo', 'Cerrar foto'],
  previous: ['Foto anterior', 'Previous photo', 'Photo précédente', 'Foto anterior'],
  next: ['Próxima foto', 'Next photo', 'Photo suivante', 'Siguiente foto'],
  photoCredits: ['Créditos das imagens', 'Image credits', 'Crédits des images', 'Créditos de las imágenes'],
} satisfies Record<string, Translation>

export const events: Entry[] = [
  { title: ['ENEJ · Encontro Nacional de Empresas Juniores', 'ENEJ · Brazil’s National Junior Enterprise Meeting', 'ENEJ · Rencontre nationale des Junior-Entreprises du Brésil', 'ENEJ · Encuentro Nacional de Empresas Júnior de Brasil'],
    body: ['Realizado pela primeira vez em 1993, o ENEJ reúne a Rede brasileira para formação, troca de práticas, conexões e reconhecimento de EJs. Leve um desafio concreto e marque conversas com equipes que já passaram por ele. Em 2026, Belo Horizonte recebeu o ENEJ junto da conferência mundial JEWC.', 'First held in 1993, ENEJ brings the Brazilian network together for training, peer exchange, connections and recognition. Bring a concrete challenge and talk to teams that have faced it. In 2026, Belo Horizonte hosted ENEJ alongside the JEWC world conference.', 'Organisé pour la première fois en 1993, l’ENEJ réunit le réseau brésilien pour se former, échanger et distinguer des Junior-Entreprises. Apporte un défi concret et rencontre des équipes qui l’ont déjà relevé. En 2026, Belo Horizonte a accueilli l’ENEJ et la conférence mondiale JEWC.', 'Celebrado por primera vez en 1993, el ENEJ reúne a la red brasileña para formación, intercambio, conexiones y reconocimientos. Lleva un reto concreto y conversa con equipos que ya lo afrontaron. En 2026, Belo Horizonte acogió el ENEJ junto a la conferencia mundial JEWC.'], url: 'https://enej.brasiljunior.org.br/' },
  { title: ['EEJ Bahia', 'EEJ Bahia', 'EEJ Bahia', 'EEJ Bahía'],
    body: ['Encontro estadual promovido pela UNIJr-BA. Reúne EJs baianas em oficinas, palestras, atividades de integração e momentos de reconhecimento.', 'The state meeting organized by UNIJr-BA brings Bahia’s Junior Enterprises together for workshops, talks, team activities and recognition.', 'Organisée par l’UNIJr-BA, cette rencontre réunit les Junior-Entreprises de Bahia pour des ateliers, conférences, activités collectives et remises de prix.', 'Encuentro estatal organizado por UNIJr-BA que reúne a las empresas júnior de Bahía en talleres, charlas, actividades de integración y reconocimientos.'], url: 'https://portal.ifba.edu.br/paulo-afonso/noticias.paf/2023/estudantes-de-engenharia-eletrica-do-ifba-paulo-afonso-sao-destaques-em-encontro-de-empresarios-juniores-da-bahia' },
  { title: ['EDL · Encontro de Líderes', 'EDL · Leaders’ Meeting', 'EDL · Rencontre des leaders', 'EDL · Encuentro de Líderes'],
    body: ['Espaço de formação e alinhamento para lideranças discutirem os desafios da Rede. Uma forma de aproveitar o encontro é voltar com uma prática para testar e uma pessoa de outra instância com quem revisá-la.', 'A space for leaders to learn together and align on network challenges. Take home a practice to test and find a peer from another organization to review it with you.', 'Un espace où les responsables se forment ensemble et débattent des défis du réseau. Reviens avec une pratique à tester et une personne d’une autre organisation pour en discuter.', 'Espacio de formación y alineación para que los líderes debatan los desafíos de la red. Vuelve con una práctica para probar y alguien de otra instancia con quien revisarla.'], url: 'https://brasiljunior.org.br/blog/saiba-mais-sobre-o-encontro-de-lideres' },
  { title: ['WELCOMEJ · NEJ Salvador', 'WELCOMEJ · NEJ Salvador', 'WELCOMEJ · NEJ Salvador', 'WELCOMEJ · NEJ Salvador'],
    body: ['Encontro local que aproxima quem está começando das outras EJs e da Rede de Salvador. É uma oportunidade de conhecer diferentes formas de organizar projetos e formar equipes.', 'A local meeting that introduces newcomers to other Junior Enterprises and the Salvador network. It is a chance to see different ways of running projects and developing teams.', 'Cette rencontre locale présente aux nouveaux membres d’autres Junior-Entreprises du réseau de Salvador. C’est l’occasion de découvrir différentes manières de conduire des projets et de former des équipes.', 'Encuentro local que acerca a quienes empiezan a otras empresas júnior y a la red de Salvador. Permite conocer distintas formas de organizar proyectos y desarrollar equipos.'], url: 'https://farmacia.ufba.br/sites/farmacia.ufba.br/files/relatorio_da_faculdade_de_farmacia_-_2022.pdf' },
  { title: ['ESEJ · Encontro Soteropolitano de Empresas Juniores', 'ESEJ · Salvador Junior Enterprise Meeting', 'ESEJ · Rencontre des Junior-Entreprises de Salvador', 'ESEJ · Encuentro de Empresas Júnior de Salvador'],
    body: ['Encontro promovido pelo NEJ Salvador para reunir a rede local em atividades de formação e troca. Empresas da região também compartilham e celebram práticas da sua atuação.', 'NEJ Salvador’s meeting brings together the local network for learning and exchange. Regional teams also share and celebrate practices from their work.', 'Cette rencontre du NEJ Salvador réunit le réseau local pour se former et échanger. Les équipes de la région y partagent leurs pratiques et leurs résultats.', 'El encuentro del NEJ Salvador reúne a la red local para aprender e intercambiar experiencias. Los equipos de la región comparten y celebran sus prácticas.'], url: 'https://pt.linkedin.com/posts/primus-consultoria-empresarial_durante-o-ano-de-2024-a-primus-consultoria-activity-7270612950510440448-Xw3Y' },
  { title: ['JEWC · Junior Enterprises World Conference', 'JEWC · Junior Enterprises World Conference', 'JEWC · Junior Enterprises World Conference', 'JEWC · Junior Enterprises World Conference'],
    body: ['Conferência mundial das Junior Enterprises. A edição de 2026 foi realizada em colaboração entre Junior Enterprises Global, Brasil Júnior e FEJEMG.', 'The global Junior Enterprise conference. Junior Enterprises Global, Brasil Júnior and FEJEMG collaborated on the 2026 edition.', 'La conférence mondiale des Junior-Entreprises. Junior Enterprises Global, Brasil Júnior et la FEJEMG ont collaboré à l’édition 2026.', 'Conferencia mundial de las empresas júnior. Junior Enterprises Global, Brasil Júnior y FEJEMG colaboraron en la edición de 2026.'], url: 'https://www.juniorenterprises.org/pt/jewc2026' },
]

export const eventPhotos: Photo[] = [
  {
    id: 'eej-bahia', width: 1200, height: 720, title: 'MEJ · Bahia', credit: 'Gabriel Moreira · iBahia',
    url: 'https://www.ibahia.com/salvador/empresas-juniores-promovem-workshop-gratuito-para-mulheres-negras-299060',
    alt: ["Delegações do MEJ baiano com bandeiras, incluindo a CIMATEC Jr.","Bahia delegations with flags, including CIMATEC Jr.","Des délégations de Bahia avec leurs drapeaux, dont CIMATEC Jr.","Delegaciones de Bahía con banderas, incluida CIMATEC Jr."],
  },
  {
    id: 'enej-beaga', width: 960, height: 432, title: 'ENEJ 2026 · Belo Horizonte', credit: 'Divulgação · UFT',
    url: 'https://www.uft.edu.br/noticias/empresas-juniores-do-tocantins-representam-a-uft-no-palco-do-enej-2026',
    alt: ["Participantes no ginásio do Mineirinho.","Participants inside the Mineirinho arena.","Les participants dans la salle du Mineirinho.","Participantes en el pabellón Mineirinho."],
  },
  {
    id: 'cimatec-institucional', width: 441, height: 441, title: 'CIMATEC Jr. · Salvador', credit: 'CIMATEC Jr.',
    url: 'https://cimatecjr.com.br/sobre',
    alt: ["Dois membros da CIMATEC Jr. em uma bancada de laboratório.","Two CIMATEC Jr. members at a laboratory bench.","Deux membres de CIMATEC Jr. à une paillasse de laboratoire.","Dos integrantes de CIMATEC Jr. en una mesa de laboratorio."],
  },
  {
    id: 'enej-rio', width: 1200, height: 800, title: 'ENEJ · Rio de Janeiro', credit: 'Gabriel Moreira / Brasil Júnior · Correio Braziliense',
    url: 'https://www.correiobraziliense.com.br/euestudante/ensino-superior/2023/09/5125399-encontro-nacional-de-empresas-juniores-comeca-nesta-quinta-feira-14-no-rio-de-janeiro.html',
    alt: ["Palestra com participantes sentados em um salão.","An audience seated for a talk in an ornate hall.","Un public assis pour une conférence dans une salle ornée.","Público sentado durante una charla en un salón ornamentado."],
  },
  {
    id: 'welcomej', width: 800, height: 450, title: 'WELCOMEJ · Salvador', credit: 'Lucas Moreno · LinkedIn',
    url: 'https://pt.linkedin.com/posts/lucas-moreno01_participei-do-welcomej-como-trainee-da-activity-7203893889571708929-w-bu',
    alt: ["Trainees da TITAN posam com a bandeira da EJ.","TITAN trainees pose with their team flag.","Des stagiaires de TITAN posent avec le drapeau de leur équipe.","Trainees de TITAN posan con la bandera de su equipo."],
  },
  {
    id: 'enej-maceio', width: 800, height: 534, title: 'ENEJ 2022 · Maceió', credit: 'Divulgação / Brasil Júnior · iNewsBR',
    url: 'https://www.inewsbr.com/2022/09/encontro-nacional-de-empresas-juniores-movimenta-mais-de-r-13-milhoes/',
    alt: ["Público diante do palco do encontro nacional.","An audience in front of the national meeting stage.","Le public devant la scène de la rencontre nationale.","Público frente al escenario del encuentro nacional."],
  },
  {
    id: 'luminus-eej', width: 768, height: 512, title: 'EEJ 2023 · Salvador', credit: 'IFBA · Campus Paulo Afonso',
    url: 'https://portal.ifba.edu.br/paulo-afonso/noticias.paf/2023/estudantes-de-engenharia-eletrica-do-ifba-paulo-afonso-sao-destaques-em-encontro-de-empresarios-juniores-da-bahia',
    alt: ["Equipe da Luminus Jr. no palco com sua bandeira.","The Luminus Jr. team holds its flag on stage.","L’équipe de Luminus Jr. tient son drapeau sur scène.","El equipo de Luminus Jr. sostiene su bandera en el escenario."],
  },
  {
    id: 'enej-ouro-preto', width: 1024, height: 576, title: 'ENEJ 2018 · Ouro Preto', credit: 'Brasil Júnior · UFMS Júnior',
    url: 'https://ufmsjr.ufms.br/empresas-juniores-da-ufms-sao-reconhecidas-no-palco-do-enej-2018/',
    alt: ["Delegação da UFMS reunida no encontro nacional.","The UFMS delegation gathers at the national meeting.","La délégation de l’UFMS à la rencontre nationale.","La delegación de la UFMS se reúne en el encuentro nacional."],
  },
  {
    id: 'chronos-equipe', width: 400, height: 377, title: 'Chronos Jr. · Salvador', credit: 'Acervo da Chronos Jr. · IFBA',
    url: 'https://portal.ifba.edu.br/salvador/comunicacao/noticias/2025/chronos-junior-servicos-de-engenharia-para-comunidade-e-experiencia-pratica-para-estudantes',
    alt: ["Equipe da Chronos Jr. reunida no laboratório.","The Chronos Jr. team gathers in a laboratory.","L’équipe de Chronos Jr. réunie au laboratoire.","El equipo de Chronos Jr. reunido en el laboratorio."],
  },
  {
    id: 'cimatec-gestao', width: 1200, height: 1200, title: 'CIMATEC Jr. · 2025.1', credit: 'CIMATEC Jr. · LinkedIn',
    url: 'https://pt.linkedin.com/posts/cimatecjr_gest%C3%A3odeprojetos-inova%C3%A7%C3%A3oengenharia-activity-7305528345163661313-Um79',
    alt: ["Retrato dos gerentes dos núcleos técnicos da CIMATEC Jr.","Portrait of the CIMATEC Jr. technical team managers.","Portrait des responsables des équipes techniques de CIMATEC Jr.","Retrato de los responsables de los equipos técnicos de CIMATEC Jr."],
  },
  {
    id: 'event', width: 1200, height: 1162, title: 'ENEJ 2024 · Florianópolis', credit: 'Brasil Júnior',
    url: 'https://brasiljunior.org.br/blog/a-importancia-dos-eventos-na-conexao-e-engajamento-de-publicos',
    alt: ["Participantes na área externa do encontro.","Participants outside the meeting venue.","Les participants à l’extérieur du site de la rencontre.","Participantes en el exterior del recinto."],
  },
]

export function photoFiles(photo: Photo) {
  const full = '/media/' + photo.id + (photo.id === 'event' ? '-1200.jpg' : '-1040.jpg')
  if (photo.width <= 480) return { full, src: full, srcset: '' }
  const smallWidth = photo.id === 'event' ? 680 : 480
  const src = '/media/' + photo.id + '-' + smallWidth + '.jpg'
  return { full, src, srcset: src + ' ' + smallWidth + 'w, ' + full + ' ' + photo.width + 'w' }
}
