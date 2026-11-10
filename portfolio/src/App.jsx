import './App.css'

const perfil = {
  nome: 'Derick Alves Maschio',
  cargo: 'Estudante de Sistemas de Informação | Estagiário de IT Delivery',
  local: 'São Paulo - SP',
  sobre:
    'Estudante do último semestre de Sistemas de Informação na UMC, com experiência profissional em tecnologia na The Mosaic Company. Gosto de aprender construindo projetos reais e estou desenvolvendo meu TCC com Java e Spring Boot.',
  github: 'https://github.com/DeregL2',
  linkedin: 'https://www.linkedin.com/in/derick-maschio/',
  email: 'derickmaschio15@gmail.com'
}

const experiencias = [
  {
    cargo: 'Estagiário de IT Delivery - Corporate Functions',
    empresa: 'The Mosaic Company',
    periodo: 'Jan/2025 - Atual',
    descricao:
      'Atuação em entregas de tecnologia para as áreas corporativas da empresa.'
  },
  {
    cargo: 'Jovem Aprendiz',
    empresa: 'Bimbo Pullman',
    periodo: 'Jul/2023 - Out/2024',
    descricao:
      'Primeira experiência profissional, com rotina corporativa e trabalho em equipe.'
  }
]

const formacao = [
  {
    curso: 'Sistemas de Informação',
    instituicao: 'UMC - Universidade de Mogi das Cruzes',
    periodo: 'Último semestre'
  }
]

const stacks = [
  'Java',
  'Spring Boot',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git e GitHub',
  'Vercel'
]

const projetos = [
  {
    titulo: 'TCC - Sistemas de Informação',
    descricao:
      'Aplicação desenvolvida com Java e Spring Boot como trabalho de conclusão de curso.',
    tecnologias: ['Java', 'Spring Boot']
  },
  {
    titulo: 'Portfólio com React',
    descricao:
      'Este site, criado com React e Vite, publicado no GitHub e hospedado na Vercel.',
    tecnologias: ['React', 'Vite', 'Vercel']
  }
]

function App() {
  return (
    <>
      <header className="topo">
        <a href="#inicio" className="logo">
          Derick
        </a>
        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#experiencia">Experiência</a>
          <a href="#formacao">Formação</a>
          <a href="#stacks">Stacks</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <p className="ola">Olá, eu sou</p>
          <h1>{perfil.nome}</h1>
          <h2>{perfil.cargo}</h2>
          <p className="local">{perfil.local}</p>
          <div className="botoes">
            <a href="#projetos" className="botao">
              Ver projetos
            </a>
            <a href="#contato" className="botao secundario">
              Fale comigo
            </a>
          </div>
        </section>

        <section id="sobre" className="secao">
          <h3>Sobre mim</h3>
          <p className="texto">{perfil.sobre}</p>
        </section>

        <section id="experiencia" className="secao">
          <h3>Experiência profissional</h3>
          <div className="lista">
            {experiencias.map((item) => (
              <article className="card" key={item.empresa}>
                <h4>{item.cargo}</h4>
                <p className="destaque">{item.empresa}</p>
                <p className="periodo">{item.periodo}</p>
                <p>{item.descricao}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="formacao" className="secao">
          <h3>Formação acadêmica</h3>
          <div className="lista">
            {formacao.map((item) => (
              <article className="card" key={item.curso}>
                <h4>{item.curso}</h4>
                <p className="destaque">{item.instituicao}</p>
                <p className="periodo">{item.periodo}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="stacks" className="secao">
          <h3>Stacks</h3>
          <div className="tags">
            {stacks.map((stack) => (
              <span className="tag" key={stack}>
                {stack}
              </span>
            ))}
          </div>
        </section>

        <section id="projetos" className="secao">
          <h3>Projetos</h3>
          <div className="lista">
            {projetos.map((projeto) => (
              <article className="card" key={projeto.titulo}>
                <h4>{projeto.titulo}</h4>
                <p>{projeto.descricao}</p>
                <div className="tags">
                  {projeto.tecnologias.map((tec) => (
                    <span className="tag pequena" key={tec}>
                      {tec}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contato" className="secao">
          <h3>Contato</h3>
          <div className="botoes">
            <a href={perfil.linkedin} target="_blank" rel="noreferrer" className="botao">
              LinkedIn
            </a>
            <a href={perfil.github} target="_blank" rel="noreferrer" className="botao">
              GitHub
            </a>
            <a href={`mailto:${perfil.email}`} className="botao secundario">
              E-mail
            </a>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <p>© 2026 {perfil.nome}</p>
      </footer>
    </>
  )
}

export default App