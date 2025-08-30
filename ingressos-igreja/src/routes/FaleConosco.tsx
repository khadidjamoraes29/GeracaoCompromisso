import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "./FaleConosco.css";

export default function FaleConosco() {
  return (
    <div className="faleconosco-page">
      <NavBar />

      <main className="faleconosco-main">
        <div className="faleconosco-header">
          
          <h2>Fale Conosco</h2>
          <p>
            Tem alguma dúvida, sugestão ou precisa de ajuda? Preencha o formulário
            abaixo e entraremos em contato com você o mais rápido possível.
          </p>
        </div>

        <form className="faleconosco-form">
          <input type="text" placeholder="Seu nome" required />
          <input type="email" placeholder="Seu e-mail" required />
          <textarea placeholder="Digite sua mensagem" required />
          <button type="submit">Enviar</button>
        </form>
      </main>

      <Footer />
    </div>
  );
}
