    

    // Get movie ID from URL
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');//id

    // Fetch and display movie details
    async function fetchMovieDetails(id) {
      //const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
      const res = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
      const movie = await res.json();

      

      

      const container = document.getElementById('movie-details');
      container.innerHTML = `
        <img src="${IMAGE_BASE + movie.poster_path}" alt="${movie.title}" class="w-full md:w-1/3 rounded-lg shadow" />
        <div>
          <h2 class="text-3xl font-bold mb-2">${movie.title}</h2>
          <p class="text-sm text-gray-500 dark:text-gray-400 mb-2">Release Date: ${movie.release_date}</p>
          <p class="mb-4">${movie.overview}</p>
          <p class="font-semibold">Genres:</p>
          <div class="flex flex-wrap gap-2 mt-1">
            ${movie.genres.map(g => `<span class="px-2 py-1 bg-blue-600 text-white text-sm rounded">${g.name}</span>`).join('')}
          </div>
          <p class="mt-4 font-semibold">Rating: ⭐ ${movie.vote_average} / 10</p>
        </div>



        <div class="mt-8 w-full aspect-video">
      <!--<iframe 
  src="https://vidlink.pro/movie/${id}?api_key=${API_KEY}" 
  width="100%" 
  height="600" 
  frameborder="0" 
  allowfullscreen>
        </iframe>
      -->


        <iframe 
  src="https://www.vidking.net/embed/movie/${id}?api_key=${API_KEY}" 
  width="100%" 
  height="600" 
  frameborder="0" 
  allowfullscreen>
        </iframe>
        
      <br><br>
        
        <iframe 
  src="https://vidsrc-embed.su/embed/movie?tmdb=${id}" 
  width="100%" 
  height="600" 
  frameborder="0" 
  allowfullscreen>
        </iframe>
      </div>

      <br><br>

      <iframe 
  src="https://vidsrc.cc/v2/embed/movie/${id}" 
  width="100%" 
  height="600" 
  frameborder="0" 
  allowfullscreen>
        </iframe>
      </div>

      <br><br>
      
      <iframe 
  src="https://vidsrc.icu/embed/movie/${id}" 
  width="100%" 
  height="600" 
  frameborder="0" 
  allowfullscreen>
        </iframe>
      </div>

      <br><br>

      <iframe 
  src="https://vidsrc.to/embed/movie/${id}" 
  width="100%" 
  height="600" 
  frameborder="0" 
  allowfullscreen>
        </iframe>
      </div>
      
      <!--
      <iframe 
  src="https://player.autoembed.cc/embed/movie/${id}" 
  width="100%" 
  height="600" 
  frameborder="0" 
  allowfullscreen>
        </iframe>
      </div>
     -->



      `;


      
      
    }

    

    fetchMovieDetails(movieId);
