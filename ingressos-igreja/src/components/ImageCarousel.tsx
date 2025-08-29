import { useState } from "react";

const images = [
  "/img/evento1.jpg",
  "/img/evento2.jpg",
  "/img/evento3.jpg"
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % images.length);
  const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-3xl mx-auto mt-10">
      <img src={images[current]} alt="Evento" className="w-full rounded-lg shadow-md" />
      <button onClick={prev} className="absolute left-2 top-1/2 bg-white px-2 py-1 rounded">{"<"}</button>
      <button onClick={next} className="absolute right-2 top-1/2 bg-white px-2 py-1 rounded">{">"}</button>
    </div>
  );
}
