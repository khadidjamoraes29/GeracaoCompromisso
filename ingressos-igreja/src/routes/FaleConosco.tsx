import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function FaleConosco() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Fale Conosco</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full p-3 border rounded"
          />
          <textarea
            placeholder="Digite sua mensagem"
            className="w-full p-3 border rounded h-32"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Enviar
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
