import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Comprar() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 max-w-2xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">Comprar Ingresso</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Nome"
            className="w-full p-3 border rounded"
          />
          <input
            type="text"
            placeholder="Sobrenome"
            className="w-full p-3 border rounded"
          />
          <input
            type="tel"
            placeholder="Telefone"
            className="w-full p-3 border rounded"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full p-3 border rounded"
          />
          <select className="w-full p-3 border rounded">
            <option value="">Método de pagamento</option>
            <option value="pix">PIX</option>
            <option value="cartao">Cartão</option>
            <option value="boleto">Boleto</option>
          </select>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Finalizar Compra
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
