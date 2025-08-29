import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Sobre() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-10 text-center">
        <h2 className="text-3xl font-bold mb-4">Sobre o Evento</h2>
        <p className="text-lg text-gray-700">
          Nosso evento é um momento especial de comunhão, adoração e celebração.
          Venha participar e viver uma experiência inesquecível com toda a igreja.
        </p>
      </main>
      <Footer />
    </div>
  );
}
