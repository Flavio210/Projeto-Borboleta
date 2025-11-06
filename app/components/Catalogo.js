"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./Catalogo.module.css";

const BOOKS = [
  {
    id: "1984",
    title: "1984",
    author: "George Orwell",
    category: "Ficção Científica",
    year: 1949,
    description:
      "Um romance distópico que retrata uma sociedade totalitária onde o governo controla todos os aspectos da vida.",
    rating: 4,
    status: "Emprestado",
  },
  {
    id: "animal-farm",
    title: "A Revolução dos Bichos",
    author: "George Orwell",
    category: "Fábula Política",
    year: 1945,
    description:
      "Uma alegoria sobre a corrupção do poder e as revoluções que prometem liberdade mas acabam em tirania.",
    rating: 4,
    status: "Disponível",
  },
  {
    id: "cem-anos",
    title: "Cem Anos de Solidão",
    author: "Gabriel García Márquez",
    category: "Realismo Mágico",
    year: 1967,
    description:
      "A saga épica da família Buendía na cidade fictícia de Macondo, misturando realidade e fantasia.",
    rating: 5,
    status: "Disponível",
  },
  {
    id: "dom-casmurro",
    title: "Dom Casmurro",
    author: "Machado de Assis",
    category: "Literatura Brasileira",
    year: 1899,
    description:
      "A narrativa de Bento Santiago sobre seu amor por Capitu e as dúvidas sobre a fidelidade que o atormentam.",
    rating: 4,
    status: "Disponível",
  },
];

export default function Catalogo() {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortBy, setSortBy] = useState("titulo");
  const [selectedBook, setSelectedBook] = useState(null);

  const filteredAndSorted = useMemo(() => {
    const filtered = BOOKS.filter((b) =>
      categoryFilter ? b.category.includes(categoryFilter) : true
    );
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === "avaliacao") return b.rating - a.rating;
      return a.title.localeCompare(b.title, "pt", { sensitivity: "base" });
    });
    return sorted;
  }, [categoryFilter, sortBy]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setSelectedBook(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section className={styles.catalogo}>
      <h1>Nosso Catálogo</h1>
      <p>Explore nossa coleção diversificada de livros, desde clássicos da literatura até <br />as mais recentes obras de ficção e não ficção.</p>
      
      <aside className={styles.filtro}>
        <form className={styles.filtroLivro}>
          <label htmlFor="categoria-filtro">
            <span className="material-symbols-outlined">filter_alt</span>Filtros:
          </label>
          <select
            id="categoria-filtro"
            name="categoria"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className={styles.select}
          >
            <option value="">Todas as categorias</option>
            <option value="Ficção Científica">Ficção Científica</option>
            <option value="Fábula Política">Fábula Política</option>
            <option value="Realismo Mágico">Realismo Mágico</option>
            <option value="Literatura Brasileira">Literatura Brasileira</option>
          </select>
          <select
            id="ordenar-por"
            name="ordenar"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={styles.select}
          >
            <option value="titulo">Título (A–Z)</option>
            <option value="avaliacao">Maior avaliação</option>
          </select>
        </form>
      </aside>

      <section className={styles.bookContainer}>
        {filteredAndSorted.map((book) => (
          <article className={styles.bookCard} key={book.id}>
            <header className={styles.bookCardTop}>
              <p className={styles.bookCategory}>
                <span className="material-symbols-outlined">sell</span>
                {book.category}
              </p>
              <p className={`${styles.bookStatus} ${book.status === "Disponível" ? styles.available : styles.unavailable}`}>
                {book.status}
              </p>
            </header>
            <figure className={styles.bookCardImage}>
              <span className="material-symbols-outlined">book</span>
            </figure>
            <footer className={styles.bookCardDown}>
              <section className={styles.bookCardText}>
                <p className={styles.bookTitle}>{book.title}</p>
                <p className={styles.bookAuthor}>
                  <span className="material-symbols-outlined">person</span>
                  {book.author}
                </p>
                <p className={styles.bookDate}>
                  <span className="material-symbols-outlined">calendar_today</span>
                  {book.year}
                </p>
                <p className={styles.bookDescription}>{book.description}</p>
              </section>
              <p className={styles.bookRating}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <i
                    key={i}
                    className={i < book.rating ? "fa-solid fa-star" : "fa-regular fa-star"}
                  ></i>
                ))}
                ({book.rating}/5)
              </p>
              <button className={styles.btnDetails} onClick={() => setSelectedBook(book)}>
                <span className="material-symbols-outlined">visibility</span>Ver detalhes
              </button>
            </footer>
          </article>
        ))}
      </section>

      {selectedBook && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedBook(null);
          }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              background: "#fff",
              maxWidth: "600px",
              width: "90%",
              borderRadius: "12px",
              padding: "20px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              position: "relative",
            }}
          >
            <button
              aria-label="Fechar"
              onClick={() => setSelectedBook(null)}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                border: "none",
                background: "transparent",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
            <h2 style={{ marginTop: 0 }}>{selectedBook.title}</h2>
            <p><strong>Autor:</strong> {selectedBook.author}</p>
            <p><strong>Categoria:</strong> {selectedBook.category}</p>
            <p><strong>Ano:</strong> {selectedBook.year || "—"}</p>
            <p><strong>Status:</strong> {selectedBook.status}</p>
            <p><strong>Avaliação:</strong> {selectedBook.rating}/5</p>
            <hr />
            <p>{selectedBook.description}</p>
          </div>
        </div>
      )}
    </section>
  )
}