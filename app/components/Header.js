export default function Header() {
  return (
    <header>
      <div className="titulo">
        <span className="material-symbols-outlined">book_ribbon</span>
        <h1>Biblioteca Comunitária</h1>
      </div>
      <nav className="link-content">
        <p><a href="#">Catálogo</a></p>
        <p><a href="#">Recomendações</a></p>
        <p><a href="#">Sobre</a></p>
        <p><a href="#">Contato</a></p>
      </nav>
      <section className="search">
        <form className="search-bar">
          <button type="submit"><span className="material-symbols-outlined">search</span></button>
          <input id="buscar" type="text" placeholder="Buscar por título, autor ou categoria..." />
        </form>
      </section>
      <div className="botoes">
        <a href="#"><button id="login"><span className="material-symbols-outlined">person</span>Entrar</button></a>
        <a href="#"><button id="add-livro"><span className="material-symbols-outlined">add</span>Adicionar um livro</button></a>
      </div>
    </header>
  )
}