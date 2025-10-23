export default function Catalogo() {
  return (
    <section className="catalogo">
      <h1>Nosso Catálogo</h1>
      <p>Explore nossa coleção diversificada de livros, desde clássicos da literatura até <br />as mais recentes obras de ficção e não ficção.</p>
      
      <aside className="filtro">
        <form className="filtro-livro">
          <label htmlFor="categoria-filtro">
            <span className="material-symbols-outlined">filter_alt</span>Filtros:
          </label>
          <select id="categoria-filtro" name="categoria">
            <option value="">Todas as categorias</option>
            <option value="Ficção Científica">Ficção Científica</option>
            <option value="Fábula Política">Fábula Política</option>
            <option value="Realismo Mágico">Realismo Mágico</option>
            <option value="Literatura Brasileira">Literatura Brasileira</option>
          </select>
          <select id="ordenar-por" name="ordenar">
            <option value="titulo">Título (A–Z)</option>
            <option value="avaliacao">Maior avaliação</option>
          </select>
        </form>
      </aside>

      <section className="book-container">
        <article className="book-card">
          <header className="book-card-top">
            <p className="book-category">
              <span className="material-symbols-outlined">sell</span>Ficção Científica
            </p>
            <p className="book-status unavailable">Emprestado</p>
          </header>
          <figure className="book-card-image">
            <span className="material-symbols-outlined">book</span>
          </figure>
          <footer className="book-card-down">
            <section className="book-card-text">
              <p className="book-title">1984</p>
              <p className="book-author">
                <span className="material-symbols-outlined">person</span>George Orwell
              </p>
              <p className="book-date">
                <span className="material-symbols-outlined">calendar_today</span>1949
              </p>
              <p className="book-description">Um romance distópico que retrata uma sociedade totalitária onde o governo controla todos os aspectos da vida.</p>
            </section>
            <p className="book-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>(4/5)
            </p>
            <button className="btn-details">
              <span className="material-symbols-outlined">visibility</span>Ver detalhes
            </button>
          </footer>
        </article>

        <article className="book-card">
          <header className="book-card-top">
            <p className="book-category">
              <span className="material-symbols-outlined">sell</span>Fábula Política
            </p>
            <p className="book-status available">Disponível</p>
          </header>
          <figure className="book-card-image">
            <span className="material-symbols-outlined">book</span>
          </figure>
          <footer className="book-card-down">
            <section className="book-card-text">
              <p className="book-title">A Revolução dos Bichos</p>
              <p className="book-author">
                <span className="material-symbols-outlined">person</span>George Orwell
              </p>
              <p className="book-date">
                <span className="material-symbols-outlined">calendar_today</span>1945
              </p>
              <p className="book-description">Uma alegoria sobre a corrupção do poder e as revoluções que prometem liberdade mas acabam em tirania.</p>
            </section>
            <p className="book-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>(4/5)
            </p>
            <button className="btn-details">
              <span className="material-symbols-outlined">visibility</span>Ver detalhes
            </button>
          </footer>
        </article>

        <article className="book-card">
          <header className="book-card-top">
            <p className="book-category">
              <span className="material-symbols-outlined">sell</span>Realismo Mágico
            </p>
            <p className="book-status available">Disponível</p>
          </header>
          <figure className="book-card-image">
            <span className="material-symbols-outlined">book</span>
          </figure>
          <footer className="book-card-down">
            <section className="book-card-text">
              <p className="book-title">Cem Anos de Solidão</p>
              <p className="book-author">
                <span className="material-symbols-outlined">person</span>Gabriel García Márquez
              </p>
              <p className="book-date">
                <span className="material-symbols-outlined">calendar_today</span>1967
              </p>
              <p className="book-description">A saga épica da família Buendía na cidade fictícia de Macondo, misturando realidade e fantasia.</p>
            </section>
            <p className="book-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>(5/5)
            </p>
            <button className="btn-details">
              <span className="material-symbols-outlined">visibility</span>Ver detalhes
            </button>
          </footer>
        </article>

        <article className="book-card">
          <header className="book-card-top">
            <p className="book-category">
              <span className="material-symbols-outlined">sell</span>Literatura Brasileira
            </p>
            <p className="book-status available">Disponível</p>
          </header>
          <figure className="book-card-image">
            <span className="material-symbols-outlined">book</span>
          </figure>
          <footer className="book-card-down">
            <section className="book-card-text">
              <p className="book-title">Dom Casmurro</p>
              <p className="book-author">
                <span className="material-symbols-outlined">person</span>Machado de Assis
              </p>
              <p className="book-date">
                <span className="material-symbols-outlined">calendar_today</span>1899
              </p>
              <p className="book-description">A narrativa de Bento Santiago sobre seu amor por Capitu e as dúvidas sobre a fidelidade que o atormentam.</p>
            </section>
            <p className="book-rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>(4/5)
            </p>
            <button className="btn-details">
              <span className="material-symbols-outlined">visibility</span>Ver detalhes
            </button>
          </footer>
        </article>
      </section>
    </section>
  )
}