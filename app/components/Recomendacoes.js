import styles from "./Recomendacoes.module.css"

export default function Recomendacoes() {
  return (
    <section className={styles.recomendacoes}>
      <h1>Recomendações</h1>
      <p className={styles.intro}>Descubra seus próximos livros favoritos com base nas preferências da nossa <br />comunidade.</p>
      
      <section className={styles.recomendacoesContent}>
        <section className={styles.recommendationGroup}>
          <h2>
            <span className="material-symbols-outlined">trending_up</span>Mais Populares
          </h2>
          <article className={styles.recommendationCard}>
            <section className={styles.recommendationCardContent}>
              <header className={styles.recommendationCardHeader}>
                <p className={styles.recCardNumber}>1</p>
                <p className={styles.recCardTitle}>O Cortiço</p>
              </header>
              <p className={styles.recCardAuthor}>Aluísio Azevedo</p>
            </section>
            <footer className={styles.recommendationCardFooter}>
              <p className={styles.recCardRating}>
                <i className="fa-solid fa-star"></i>4.5
              </p>
              <p className={styles.recCardReads}>89 leituras</p>
            </footer>
          </article>
          <article className={styles.recommendationCard}>
            <section className={styles.recommendationCardContent}>
              <header className={styles.recommendationCardHeader}>
                <p className={styles.recCardNumber}>2</p>
                <p className={styles.recCardTitle}>Dom Casmurro</p>
              </header>
              <p className={styles.recCardAuthor}>Machado de Assís</p>
            </section>
            <footer className={styles.recommendationCardFooter}>
              <p className={styles.recCardRating}>
                <i className="fa-solid fa-star"></i>4.3
              </p>
              <p className={styles.recCardReads}>76 leituras</p>
            </footer>
          </article>
          <article className={styles.recommendationCard}>
            <section className={styles.recommendationCardContent}>
              <header className={styles.recommendationCardHeader}>
                <p className={styles.recCardNumber}>3</p>
                <p className={styles.recCardTitle}>Sapiens</p>
              </header>
              <p className={styles.recCardAuthor}>Yuval Noah Harari</p>
            </section>
            <footer className={styles.recommendationCardFooter}>
              <p className={styles.recCardRating}>
                <i className="fa-solid fa-star"></i>4.7
              </p>
              <p className={styles.recCardReads}>65 leituras</p>
            </footer>
          </article>
        </section>

        <section className={styles.recommendationGroup}>
          <h2>
            <span className="material-symbols-outlined">favorite</span>Favoritos da Comunidade
          </h2>
          <article className={styles.recommendationCard}>
            <section className={styles.recommendationCardContent}>
              <header className={styles.recommendationCardHeader}>
                <p className={styles.recCardNumber}>1</p>
                <p className={styles.recCardTitle}>O Pequeno Principe</p>
              </header>
              <p className={styles.recCardAuthor}>Antonie de Saint-Exupéry</p>
            </section>
            <footer className={styles.recommendationCardFooter}>
              <p className={styles.recCardRating}>
                <i className="fa-solid fa-star"></i>4.9
              </p>
              <p className={styles.recCardReads}>92 leituras</p>
            </footer>
          </article>
          <article className={styles.recommendationCard}>
            <section className={styles.recommendationCardContent}>
              <header className={styles.recommendationCardHeader}>
                <p className={styles.recCardNumber}>2</p>
                <p className={styles.recCardTitle}>Cem Anos de Solidão</p>
              </header>
              <p className={styles.recCardAuthor}>Gabriel García Márquez</p>
            </section>
            <footer className={styles.recommendationCardFooter}>
              <p className={styles.recCardRating}>
                <i className="fa-solid fa-star"></i>4.8
              </p>
              <p className={styles.recCardReads}>54 leituras</p>
            </footer>
          </article>
          <article className={styles.recommendationCard}>
            <section className={styles.recommendationCardContent}>
              <header className={styles.recommendationCardHeader}>
                <p className={styles.recCardNumber}>3</p>
                <p className={styles.recCardTitle}>Harry Potter e a Pedra Filosofal</p>
              </header>
              <p className={styles.recCardAuthor}>J.K Rowling</p>
            </section>
            <footer className={styles.recommendationCardFooter}>
              <p className={styles.recCardRating}>
                <i className="fa-solid fa-star"></i>4.9
              </p>
              <p className={styles.recCardReads}>78 leituras</p>
            </footer>
          </article>
        </section>

        <section className={styles.recommendationGroup}>
          <h2>
            <span className="material-symbols-outlined">workspace_premium</span>Melhores Avaliados
          </h2>
          <article className={styles.recommendationCard}>
            <section className={styles.recommendationCardContent}>
              <header className={styles.recommendationCardHeader}>
                <p className={styles.recCardNumber}>1</p>
                <p className={styles.recCardTitle}>1984</p>
              </header>
              <p className={styles.recCardAuthor}>George Orwell</p>
            </section>
            <footer className={styles.recommendationCardFooter}>
              <p className={styles.recCardRating}>
                <i className="fa-solid fa-star"></i>5
              </p>
              <p className={styles.recCardReads}>43 leituras</p>
            </footer>
          </article>
          <article className={styles.recommendationCard}>
            <section className={styles.recommendationCardContent}>
              <header className={styles.recommendationCardHeader}>
                <p className={styles.recCardNumber}>2</p>
                <p className={styles.recCardTitle}>A Revolução dos Bichos</p>
              </header>
              <p className={styles.recCardAuthor}>George Orwell</p>
            </section>
            <footer className={styles.recommendationCardFooter}>
              <p className={styles.recCardRating}>
                <i className="fa-solid fa-star"></i>4.8
              </p>
              <p className={styles.recCardReads}>38 leituras</p>
            </footer>
          </article>
          <article className={styles.recommendationCard}>
            <section className={styles.recommendationCardContent}>
              <header className={styles.recommendationCardHeader}>
                <p className={styles.recCardNumber}>3</p>
                <p className={styles.recCardTitle}>O Pequeno Principe</p>
              </header>
              <p className={styles.recCardAuthor}>Antoine de Saint-Exupéry</p>
            </section>
            <footer className={styles.recommendationCardFooter}>
              <p className={styles.recCardRating}>
                <i className="fa-solid fa-star"></i>4.9
              </p>
              <p className={styles.recCardReads}>92 leituras</p>
            </footer>
          </article>
        </section>
      </section>
    </section>
  )
}