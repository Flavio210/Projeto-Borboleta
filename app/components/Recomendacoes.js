export default function Recomendacoes() {
  return (
    <section className="recomendacoes">
      <h1>Recomendações</h1>
      <p>Descubra seus próximos livros favoritos com base nas preferências da nossa <br />comunidade.</p>
      
      <section className="recomendacoes-content">
        <section className="recommendation-group">
          <h2>
            <span className="material-symbols-outlined">trending_up</span>Mais Populares
          </h2>
          <article className="recommendation-card">
            <section className="recommendation-card-content">
              <header className="recommendation-card-header">
                <p className="rec-card-number">1</p>
                <p className="rec-card-title">O Cortiço</p>
              </header>
              <p className="rec-card-author">Aluísio Azevedo</p>
            </section>
            <footer className="recommendation-card-footer">
              <p className="rec-card-rating">
                <i className="fa-solid fa-star"></i>4.5
              </p>
              <p className="rec-card-reads">89 leituras</p>
            </footer>
          </article>
          <article className="recommendation-card">
            <section className="recommendation-card-content">
              <header className="recommendation-card-header">
                <p className="rec-card-number">2</p>
                <p className="rec-card-title">Dom Casmurro</p>
              </header>
              <p className="rec-card-author">Machado de Assís</p>
            </section>
            <footer className="recommendation-card-footer">
              <p className="rec-card-rating">
                <i className="fa-solid fa-star"></i>4.3
              </p>
              <p className="rec-card-reads">76 leituras</p>
            </footer>
          </article>
          <article className="recommendation-card">
            <section className="recommendation-card-content">
              <header className="recommendation-card-header">
                <p className="rec-card-number">3</p>
                <p className="rec-card-title">Sapiens</p>
              </header>
              <p className="rec-card-author">Yuval Noah Harari</p>
            </section>
            <footer className="recommendation-card-footer">
              <p className="rec-card-rating">
                <i className="fa-solid fa-star"></i>4.7
              </p>
              <p className="rec-card-reads">65 leituras</p>
            </footer>
          </article>
        </section>

        <section className="recommendation-group">
          <h2>
            <span className="material-symbols-outlined">favorite</span>Favoritos da Comunidade
          </h2>
          <article className="recommendation-card">
            <section className="recommendation-card-content">
              <header className="recommendation-card-header">
                <p className="rec-card-number">1</p>
                <p className="rec-card-title">O Pequeno Principe</p>
              </header>
              <p className="rec-card-author">Antonie de Saint-Exupéry</p>
            </section>
            <footer className="recommendation-card-footer">
              <p className="rec-card-rating">
                <i className="fa-solid fa-star"></i>4.9
              </p>
              <p className="rec-card-reads">92 leituras</p>
            </footer>
          </article>
          <article className="recommendation-card">
            <section className="recommendation-card-content">
              <header className="recommendation-card-header">
                <p className="rec-card-number">2</p>
                <p className="rec-card-title">Cem Anos de Solidão</p>
              </header>
              <p className="rec-card-author">Gabriel García Márquez</p>
            </section>
            <footer className="recommendation-card-footer">
              <p className="rec-card-rating">
                <i className="fa-solid fa-star"></i>4.8
              </p>
              <p className="rec-card-reads">54 leituras</p>
            </footer>
          </article>
          <article className="recommendation-card">
            <section className="recommendation-card-content">
              <header className="recommendation-card-header">
                <p className="rec-card-number">3</p>
                <p className="rec-card-title">Harry Potter e a Pedra Filosofal</p>
              </header>
              <p className="rec-card-author">J.K Rowling</p>
            </section>
            <footer className="recommendation-card-footer">
              <p className="rec-card-rating">
                <i className="fa-solid fa-star"></i>4.9
              </p>
              <p className="rec-card-reads">78 leituras</p>
            </footer>
          </article>
        </section>

        <section className="recommendation-group">
          <h2>
            <span className="material-symbols-outlined">workspace_premium</span>Melhores Avaliados
          </h2>
          <article className="recommendation-card">
            <section className="recommendation-card-content">
              <header className="recommendation-card-header">
                <p className="rec-card-number">1</p>
                <p className="rec-card-title">1984</p>
              </header>
              <p className="rec-card-author">George Orwell</p>
            </section>
            <footer className="recommendation-card-footer">
              <p className="rec-card-rating">
                <i className="fa-solid fa-star"></i>5
              </p>
              <p className="rec-card-reads">43 leituras</p>
            </footer>
          </article>
          <article className="recommendation-card">
            <section className="recommendation-card-content">
              <header className="recommendation-card-header">
                <p className="rec-card-number">2</p>
                <p className="rec-card-title">A Revolução dos Bichos</p>
              </header>
              <p className="rec-card-author">George Orwell</p>
            </section>
            <footer className="recommendation-card-footer">
              <p className="rec-card-rating">
                <i className="fa-solid fa-star"></i>4.8
              </p>
              <p className="rec-card-reads">38 leituras</p>
            </footer>
          </article>
          <article className="recommendation-card">
            <section className="recommendation-card-content">
              <header className="recommendation-card-header">
                <p className="rec-card-number">3</p>
                <p className="rec-card-title">O Pequeno Principe</p>
              </header>
              <p className="rec-card-author">Antoine de Saint-Exupéry</p>
            </section>
            <footer className="recommendation-card-footer">
              <p className="rec-card-rating">
                <i className="fa-solid fa-star"></i>4.9
              </p>
              <p className="rec-card-reads">92 leituras</p>
            </footer>
          </article>
        </section>
      </section>
    </section>
  )
}