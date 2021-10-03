import 'tailwindcss/tailwind.css'

export default function HomePage() {
  return (
    <>

      <div className="p-10 bg-base-100 text-base-content">
        <button className="btn">button</button>
        <button className="btn btn-primary">button</button>
        <button className="btn btn-secondary">button</button>
        <button className="btn btn-accent">button</button>
      </div>

      <div className="p-10 bg-base-100 text-base-content" data-theme="garden">
        <button className="btn">button</button>
        <button className="btn btn-primary">button</button>
        <button className="btn btn-secondary">button</button>
        <button className="btn btn-accent">button</button>
      </div>

      <div className="p-10 bg-base-100 text-base-content" data-theme="forest">
        <button className="btn">button</button>
        <button className="btn btn-primary">button</button>
        <button className="btn btn-secondary">button</button>
        <button className="btn btn-accent">button</button>
      </div>

    </>
  );
}
