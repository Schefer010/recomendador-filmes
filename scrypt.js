const movies = [
            { id: 1, title: "A Origem", genre: "Ficção Científica", year: 2010, poster: "https://www.portallos.com.br/wp-content/uploads/2010/08/aorigem_poster.jpg" },
            { id: 2, title: "O Cavaleiro das Trevas", genre: "Ação", year: 2008, poster: "https://m.media-amazon.com/images/M/MV5BMTRkYjU1MjQtODMxMS00YTNmLThkOTYtZThlMjE4YWZkZDI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: 3, title: "Pulp Fiction", genre: "Crime", year: 1994, poster: "https://static.wikia.nocookie.net/dublagem/images/0/06/Pulp_Fiction.png/revision/latest/scale-to-width-down/1200?cb=20241008005611&path-prefix=pt-br" },
            { id: 4, title: "Forrest Gump", genre: "Drama", year: 1994, poster: "https://public-website-assets.paramountpictures.com/paramount2025/s3fs-public/styles/poster_medium/public/forrestgump_2019update_en_800x1200.jpg?itok=wqyuMS2H" },
            { id: 5, title: "Matrix", genre: "Ficção Científica", year: 1999, poster: "https://m.media-amazon.com/images/M/MV5BZGM1NDM3MTAtMmI0ZC00ZDAwLWEwY2EtNDdhYjZmMjJkNzM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" },
            { id: 6, title: "Clube da Luta", genre: "Drama", year: 1999, poster: "https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg" },
            { id: 7, title: "Interestelar", genre: "Ficção Científica", year: 2014, poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/3/3a/Interstellar_Filme.png/250px-Interstellar_Filme.png" },
            { id: 8, title: "O Senhor dos Anéis: O Retorno do Rei", genre: "Ação", year: 2003, poster: "https://www.papodecinema.com.br/wp-content/uploads/2012/10/20181214-20224867.webp-r_1280_720-f.webp-q_x-xxyxx.webp" },
            { id: 9, title: "Gladiador", genre: "Ação", year: 2000, poster: "https://upload.wikimedia.org/wikipedia/pt/4/44/GladiadorPoster.jpg" },
            { id: 10, title: "O Poderoso Chefão", genre: "Crime", year: 1972, poster: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/90/93/20/20120876.jpg" },
            { id: 11, title: "Vingadores: Ultimato", genre: "Ação", year: 2019, poster: "https://http2.mlstatic.com/D_NQ_NP_947328-MLA99547393374_122025-O.webp" },
            { id: 12, title: "Parasita", genre: "Drama", year: 2019, poster: "https://m.media-amazon.com/images/I/81io9SYH5dL.jpg" },
            { id: 13, title: "Coringa", genre: "Drama", year: 2019, poster: "https://play-lh.googleusercontent.com/64SMx5o6rrX5HIGVkKt8aJaunQ-owWPlvqRv-MBTs4ZMF5yk3-X-nPj7GmSmuPqiAkg23HgOI8O9mNPgLw" },
            { id: 14, title: "Viva: A Vida é uma Festa", genre: "Animação", year: 2017, poster: "https://br.web.img3.acsta.net/pictures/17/12/07/11/33/0502209.jpg" },
            { id: 15, title: "O Iluminado", genre: "Terror", year: 1980, poster: "https://br.web.img3.acsta.net/pictures/14/10/10/19/21/152595.jpg" },
            { id: 16, title: "La La Land", genre: "Romance", year: 2016, poster: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg" },
            { id: 17, title: "Intocáveis", genre: "Drama", year: 2011, poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlf6d89fkAUj3i-VuJytiEdZaluA-OuSHQjw&s" },
            { id: 18, title: "Mad Max: Estrada da Fúria", genre: "Ação", year: 2015, poster: "https://m.media-amazon.com/images/M/MV5BZDJkNzQ2ZGMtZmI5YS00NzUxLThmNGEtZmE2OWY0MzE1NGM3XkEyXkFqcGc@._V1_.jpg://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400" },
            { id: 19, title: "Superbad", genre: "Comédia", year: 2007, poster: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Superbad_Poster.png/250px-Superbad_Poster.png" },
            { id: 20, title: "Duna: Parte Dois", genre: "Ficção Científica", year: 2024, poster: "https://m.media-amazon.com/images/M/MV5BNzk5MTE4YTUtNGU2My00MTYxLWE5NGItODk4YWFkOWYyMjA5XkEyXkFqcGc@._V1_.jpg" }
        ];

        // Elementos do DOM
        const moviesGrid = document.getElementById('moviesGrid');
        const genreSelect = document.getElementById('genreSelect');
        const yearInput = document.getElementById('yearInput');
        const yearError = document.getElementById('yearError');
        const btnSearch = document.getElementById('btnSearch');
        const btnClear = document.getElementById('btnClear');

        // Função para renderizar os cards na tela
        function renderMovies(moviesList) {
            moviesGrid.innerHTML = '';

            if (moviesList.length === 0) {
                moviesGrid.innerHTML = `
                    <div class="no-results">
                        Nenhum filme encontrado para os critérios selecionados.<br>
                        <small style="font-size: 0.9rem; color: #666;">Dica: Tente mudar o ano ou selecionar 'Todos os Gêneros'.</small>
                    </div>`;
                return;
            }

            moviesList.forEach(movie => {
                const card = document.createElement('div');
                card.className = 'movie-card';
                
                // Alteração estrutural: Passando a tag de imagem com a classe movie-img
                card.innerHTML = `
                    <div class="movie-cover">
                        <img src="${movie.poster}" alt="Pôster do filme ${movie.title}" class="movie-img">
                    </div>
                    <div class="movie-info">
                        <div class="movie-title">${movie.title}</div>
                        <div class="movie-meta">
                            <span class="movie-genre">${movie.genre}</span>
                            <span class="movie-year">${movie.year}</span>
                        </div>
                    </div>
                `;
                moviesGrid.appendChild(card);
            });
        }

        // Função acionada pelo Botão para Validar e Filtrar
        function handleSearch() {
            const selectedGenre = genreSelect.value;
            const yearValue = yearInput.value.trim();
            
            let filtered = movies;
            let isValid = true;

            // Limpa mensagens de erro anteriores
            yearError.textContent = '';

            // VALIDAÇÃO DOS DADOS DO ANO
            if (yearValue !== '') {
                const currentYear = new Date().getFullYear(); // 2026
                const yearNum = parseInt(yearValue, 10);

                if (isNaN(yearNum)) {
                    yearError.textContent = 'Por favor, digite um número válido.';
                    isValid = false;
                } else if (yearNum < 1980 || yearNum > currentYear) {
                    yearError.textContent = `Digite um ano entre 1980 e ${currentYear}.`;
                    isValid = false;
                }

                if (isValid) {
                    filtered = filtered.filter(movie => movie.year === yearNum);
                }
            }

            if (!isValid) {
                return; // Bloqueia a busca em caso de erro
            }

            // Filtragem por Gênero
            if (selectedGenre !== 'todos') {
                filtered = filtered.filter(movie => movie.genre === selectedGenre);
            }

            renderMovies(filtered);
        }

        // Eventos dos botões
        btnSearch.addEventListener('click', handleSearch);
        btnClear.addEventListener('click', () => {
            genreSelect.value = 'todos';
            yearInput.value = '';
            yearError.textContent = '';
            renderMovies(movies);
        });

        // Inicializa exibindo os filmes na tela
        renderMovies(movies);