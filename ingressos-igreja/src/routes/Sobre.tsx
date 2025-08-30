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
            Descubra a história por trás do nosso evento, como começou
            e o que esperar de um dia de comunhão e adoração conosco.
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
                Este evento nasceu da visão de criar um espaço onde os jovens cristãos
                pudessem desenvolver seu conhecimento na palavra e muita comunhão.
                Desde a nossa primeira edição em 201x, crescemos de um pequeno
                encontro para uma conferência de destaque, atraindo líderes e
                jovens de todo o Recife.
              </p>
              <p>
                Acreditamos que  a partilha de conhecimento são a
                chave para uma comunidade mais enjada. 
                A nossa missão é desenvolver uma juventude que 
               cresça na fé e crie um impacto duradouro na comunidade.
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
                src="/sostenes.jpg"
                alt="Sostenes Bernardes"
              />
              <h3>Sóstenes Bernardes</h3>
              <p className="cargo">Pastor</p>
              <p>
                Sóstenes é um pastor da igreja Tal.
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
                  A primeira edição do evento, com 100 participantes e 3
                  palestrantes locais, focados em desenvolver os jovens da 
                  comunidade no conhecimento da palavra.
                </p>
              </div>
              <div className="dot">2012</div>
            </div>

            <div className="timeline-item left">
              <div className="content">
                <h3>Retomada</h3>
                <p>
                  O evento resurge, com palestrantes de outros estados
                  trazendo um tema importante sobre identidade em Cristo.
                </p>
              </div>
              <div className="dot">2024</div>
            </div>

            <div className="timeline-item right">
              <div className="content">
                <h3>Dias Atuais</h3>
                <p>
                  A edição de 2025 promete novidades e conteúdos especiais.
                </p>
              </div>
              <div className="dot">2025</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <h2>Pronto para Construir essa História Conosco?</h2>
          <p>
            Junte-se a nós nesta jornada de descoberta, adoração e santidade. Garanta o seu
            lugar no evento do ano!
          </p>
          <a href="#">Compre Agora!</a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
