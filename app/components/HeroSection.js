export default function HeroSection() {
  return (
    <section className="hero-section">
      <article className="hero-content">
        <h1>Descubra o Mundo dos <span>Livros</span> <br /> em Nossa <span>Biblioteca <br /> Comunitária</span></h1>
        <p>Conectando leitores, compartilhando conhecimento e <br /> fortalecendo nossa comunidade através da paixão pela <br /> leitura.</p>
      </article>
      <section className="search-main">
        <form className="search-bar-main">
          <input type="text" placeholder="Buscar por título, autor, categoria ou ISBN..." />
          <button type="submit"><span className="material-symbols-outlined">search</span>Buscar</button>
        </form>
      </section>
      <nav className="container-buttons">
        <a href="#"><button id="explorar"><span className="material-symbols-outlined">book_ribbon</span>Explorar Catálogo</button></a>
        <a href="#"><button id="recomendacoes"><span className="material-symbols-outlined">favorite</span>Ver Recomendações</button></a>
      </nav>
    </section>
  )
}