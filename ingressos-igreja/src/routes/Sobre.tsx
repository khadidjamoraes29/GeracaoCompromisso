import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./Sobre.css";

export default function Sobre() {
  return (
    <div className="sobre-container">
      <NavBar />

      {/* Hero */}
      <header className="hero">
        <div className="hero-overlay">
          <h1>Bem-vindo à nossa Conferência!</h1>
          <p>
            Descubra a história por trás do nosso evento, os visionários que o
            tornaram possível e o que esperar de um dia de inovação e
            inspiração.
          </p>
        </div>
      </header>

      <main className="sobre-main">

        {/* Nossa História */}
        <section className="historia">
          <div className="historia-conteudo">
            <div className="texto">
              <h2>Nossa História</h2>
              <p>
                Este evento nasceu da visão de criar um espaço onde mentes
                criativas e inovadoras pudessem se conectar e moldar o futuro.
                Desde a nossa primeira edição em 2022, crescemos de um pequeno
                encontro para uma conferência de destaque, atraindo líderes e
                pensadores de todo o mundo.
              </p>
              <p>
                Acreditamos que a colaboração e a partilha de conhecimento são a
                chave para o progresso. A nossa missão é proporcionar uma
                plataforma que inspire a mudança, fomente o crescimento e crie
                um impacto duradouro na comunidade.
              </p>
            </div>
            <div className="imagem">
              <img
                src="https://placehold.co/600x400/292524/f5f5f4?text=Momentos+do+Evento"
                alt="Momentos do evento"
              />
            </div>
          </div>
        </section>

        {/* Palestrantes */}
        <section className="palestrantes">
          <h2>Conheça Nossos Palestrantes</h2>
          <div className="grid-palestrantes">
            <div className="card">
              <img
                src="https://placehold.co/150x150/d1d5db/374151?text=John+Doe"
                alt="John Doe"
              />
              <h3>John Doe</h3>
              <p className="cargo">Engenheiro de Software Sênior, TechCorp</p>
              <p>
                John é um especialista em IA e aprendizado de máquina, com mais
                de 10 anos de experiência na área.
              </p>
            </div>

            <div className="card">
              <img
                src="https://placehold.co/150x150/d1d5db/374151?text=Jane+Smith"
                alt="Jane Smith"
              />
              <h3>Jane Smith</h3>
              <p className="cargo">Designer de Produtos Líder, Innovate LLC</p>
              <p>
                Jane é uma líder de design de produto reconhecida, com foco em
                experiência do usuário.
              </p>
            </div>

            <div className="card">
              <img
                src="https://placehold.co/150x150/d1d5db/374151?text=Paul+Davis"
                alt="Paul Davis"
              />
              <h3>Paul Davis</h3>
              <p className="cargo">Cientista de Dados, DataGenius</p>
              <p>
                Paul é um cientista de dados apaixonado por transformar grandes
                conjuntos de dados em insights acionáveis.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="timeline">
          <h2>A Nossa Jornada</h2>
          <div className="timeline-wrapper">
            <div className="timeline-item right">
              <div className="content">
                <h3>O Início</h3>
                <p>
                  A primeira edição do evento, com 100 participantes e 15
                  palestrantes locais, focados em startups e tecnologia.
                </p>
              </div>
              <div className="dot">2012</div>
            </div>

            <div className="timeline-item left">
              <div className="content">
                <h3>Crescimento Exponencial</h3>
                <p>
                  O evento dobra de tamanho, com participantes de 5 países
                  diferentes e uma nova secção dedicada a workshops práticos.
                </p>
              </div>
              <div className="dot">2024</div>
            </div>

            <div className="timeline-item right">
              <div className="content">
                <h3>Edição Internacional</h3>
                <p>
                  Lançamos um programa de mentoria e adicionamos palestrantes de
                  renome internacional, consolidando a nossa posição no mercado
                  global.
                </p>
              </div>
              <div className="dot">2025</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <h2>Pronto para Fazer Parte do Futuro?</h2>
          <p>
            Junte-se a nós nesta jornada de descoberta e inovação. Garanta o seu
            lugar no evento do ano!
          </p>
          <a href="#">Registar Agora!</a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
