import styles from "./HeroSection.module.css"

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <article className={styles.heroContent}>
        <h1>Descubra o Mundo dos <span>Livros</span> <br /> em Nossa <span>Biblioteca <br /> Comunitária</span></h1>
        <p>Conectando leitores, compartilhando conhecimento e <br /> fortalecendo nossa comunidade através da paixão pela <br /> leitura.</p>
      </article>
      <section className={styles.searchMain}>
        <form className={styles.searchBarMain}>
          <input type="text" placeholder="Buscar por título, autor, categoria ou ISBN..." />
          <button type="submit"><span className="material-symbols-outlined">search</span>Buscar</button>
        </form>
      </section>
      <nav className={styles.containerButtons}>
        <a href="#"><button className={styles.explorar}><span className="material-symbols-outlined">book_ribbon</span>Explorar Catálogo</button></a>
        <a href="#"><button className={styles.recomendacoesBtn}><span className="material-symbols-outlined">favorite</span>Ver Recomendações</button></a>
      </nav>
    </section>
  )
}