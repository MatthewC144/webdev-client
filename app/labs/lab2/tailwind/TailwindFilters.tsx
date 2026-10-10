export default function TailwindFilters() {
  // reactjs.jpg is used here so the lab runs out of the box.
  const src = "/images/reactjs.jpg";
  return (
    <div>
      <h2>Blurs</h2>
      <div className="flex">
        <img className="blur-none w-1/4" src={src} alt="blur none" />
        <img className="blur-sm w-1/4" src={src} alt="blur sm" />
        <img className="blur-lg w-1/4" src={src} alt="blur lg" />
        <img className="blur-2xl w-1/4" src={src} alt="blur 2xl" />
      </div>
      <h3 className="text-xl font-semibold mb-2">Grayscale & Brightness</h3>
      <div className="flex gap-4 mb-4">
        <img src="/images/reactjs.jpg" className="w-1/4 grayscale" alt="Grayscale" />
        <img src="/images/reactjs.jpg" className="w-1/4 grayscale-0" alt="Grayscale 0" />
        <img src="/images/reactjs.jpg" className="w-1/4 brightness-50" alt="Brightness 50" />
        <img src="/images/reactjs.jpg" className="w-1/4 brightness-150" alt="Brightness 150" />
      </div>

      <h3 className="text-xl font-semibold mb-2">Grayscale and brightness</h3>
      <div id="wd-ai-filters" className="flex gap-4 mb-4">
        <img src="/images/reactjs.jpg" className="w-1/4 grayscale" alt="Grayscale" />
        <img src="/images/reactjs.jpg" className="w-1/4 grayscale-0" alt="Grayscale 0" />
        <img src="/images/reactjs.jpg" className="w-1/4 brightness-50" alt="Brightness 50" />
        <img src="/images/reactjs.jpg" className="w-1/4 brightness-150" alt="Brightness 150" />
      </div>
    </div>
  );
}