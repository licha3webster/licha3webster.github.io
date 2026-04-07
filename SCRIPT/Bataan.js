const CuisineEngine = {
  data: [
    {
      id: 1,
      name: "Montey's Buko Pie",
      origin: 'Morong, Bataan',
      description:
        'The pride of Morong. A heavy, creamy, and authentic Filipino pie filled with tender young coconut meat.',
      image: '../IMAGE/Foods-1.webp',
      video: '../Vedio/Bataan-Vedio/Card-1.mp4',
      sourceVideo: 'https://www.youtube.com/embed/gQgLYGmH4wU',
      prep: '30 Mins',
      cook: '45 Mins',
      servings: '8 Pax',
      ingredients: [
        '2 cups All-purpose flour',
        '1/2 cup Chilled butter',
        '2 cups Fresh buko meat',
        '1 cup Condensed milk',
        '1/3 cup Cornstarch',
      ],
      steps: [
        'Combine flour and cold butter until crumbly. Add cold water to form dough and chill for 30 mins.',
        'In a pan, mix condensed milk and cornstarch over medium heat until thick.',
        'Fold in the fresh buko meat and let the mixture cool completely.',
        'Roll out the dough, add filling, and cover with a top crust.',
        'Bake at 175Â°C (350Â°F) for 45 minutes until the crust is golden brown.',
      ],
    },
    {
      id: 2,
      name: 'Balanga Tinapa',
      origin: 'Balanga City',
      description:
        'Traditional smoked fish known for its deep golden color and distinct aromatic flavor from coconut husks.',
      image: '../IMAGE/Food-2.jpg',
      video: '../Vedio/Bataan-Vedio/Card-2.mp4',
      sourceVideo: 'https://www.youtube.com/embed/Cg-ZPesUBmk',
      prep: '2 Hours',
      cook: '3 Hours',
      servings: '6 Pax',
      ingredients: [
        '1kg Fresh Milkfish',
        '1/2 cup Rock salt',
        '4 cups Water',
        'Dried coconut husks',
      ],
      steps: [
        'Clean the fish thoroughly while keeping the scales and head intact.',
        'Brine the fish in a mixture of salt and water for at least 2 hours.',
        'Remove the fish and air-dry in a cool spot until the skin feels tacky.',
        'Prepare the smoker using coconut husks and smoke for 3 hours until golden.',
      ],
    },
    {
      id: 3,
      name: 'Bibingka Bataan',
      origin: 'Orion, Bataan',
      description:
        'Rice cake baked over and under charcoal, topped with salted egg and local cheese.',
      image: '../IMAGE/Food-3.jpg',
      video: '../Vedio/Bataan-Vedio/Card-3.mp4',
      sourceVideo: 'https://www.youtube.com/embed/JxQ_CD67XTU',
      prep: '20 Mins',
      cook: '25 Mins',
      servings: '4 Pax',
      ingredients: [
        '2 cups Rice flour',
        '1.5 cups Coconut milk',
        '3 Salted eggs',
        'Cheese slices',
        '1 cup Sugar',
      ],
      steps: [
        'Whisk rice flour, coconut milk, and sugar until the batter is smooth.',
        'Line clay pots with banana leaves and pour the batter 3/4 full.',
        'Place sliced salted eggs and cheese on top.',
        'Bake with charcoal heat on top and bottom for 25 minutes.',
      ],
    },
    {
      id: 4,
      name: 'Bataan Bagoong',
      origin: 'Bagac / Morong',
      description:
        'A premium fermented shrimp paste that serves as the perfect salty companion for local dishes.',
      image: '../IMAGE/Food-4.jpg',
      video: '../Vedio/Bataan-Vedio/Card-4.mp4',
      sourceVideo: 'https://www.youtube.com/embed/pUmrnO2GfHk',
      prep: '30 Mins',
      cook: '14 Days',
      servings: 'Bulk',
      ingredients: [
        '3kg Fresh Alamang',
        '1kg Rock salt',
        'Glass fermentation jars',
      ],
      steps: [
        'Wash the small shrimp (alamang) thoroughly and drain properly.',
        'Mix salt and alamang in a 1:3 ratio consistently in a large basin.',
        'Pack the mixture tightly into clean glass jars and seal.',
        'Store in a cool, dark place for 2 weeks to allow natural fermentation.',
      ],
    },
    {
      id: 5,
      name: 'Ginataang Kuhol',
      origin: 'Abucay, Bataan',
      description:
        'Freshwater snails cooked in rich coconut cream with ginger and spicy siling labuyo.',
      image: '../IMAGE/Food-5.jpg',
      video: '../Vedio/Bataan-Vedio/Card-5.mp4',
      sourceVideo: 'https://www.youtube.com/embed/Zj6KsY5Y6u8',
      prep: '45 Mins',
      cook: '30 Mins',
      servings: '4 Pax',
      ingredients: [
        '1kg Kuhol',
        '2 cups Coconut cream',
        'Ginger & Garlic',
        'Chili',
        'Kangkong',
      ],
      steps: [
        'Soak snails in water for 4 hours, then snip the tips of the shells.',
        'SautÃ© garlic, onions, and ginger. Add snails and stir-fry.',
        'Pour in coconut cream and simmer until the sauce thickens.',
        'Add chilies and kangkong leaves, cook for 2 more minutes.',
      ],
    },
    {
      id: 6,
      name: 'Roasted Kasoy',
      origin: 'Bagac, Bataan',
      description:
        "Bataan's signature crunchy snack, roasted to perfection in traditional clay pans.",
      image: '../IMAGE/Food-6.webp',
      video: '../Vedio/Bataan-Vedio/Card-6.mp4',
      sourceVideo: 'https://www.youtube.com/embed/RR9itXq4eFs',
      prep: '15 Mins',
      cook: '20 Mins',
      servings: '5 Pax',
      ingredients: ['2 cups Raw Cashew nuts', 'Sea Salt', '1 tbsp Oil'],
      steps: [
        'Sort the raw cashew nuts and remove any debris.',
        'Heat a large heavy-bottomed pan over medium-low flame.',
        'Add nuts and stir constantly for 15-20 minutes for even roasting.',
        'Toss with sea salt while still hot.',
      ],
    },
  ],

  currentMediaIndex: 0,
  currentWatchUrl: '',
  currentEmbedUrl: '',

  init() {
    this.bindEvents();
    this.renderVideoSourceLinks();
  },

  toWatchUrl(sourceVideo) {
    if (!sourceVideo) return '';

    try {
      const parsedUrl = new URL(sourceVideo);
      const host = parsedUrl.hostname.replace(/^www\./, '');

      if (host === 'youtu.be') {
        const shortId = parsedUrl.pathname.replace('/', '').trim();
        if (shortId) return `https://www.youtube.com/watch?v=${shortId}`;
      }

      if (
        host === 'youtube.com' ||
        host === 'm.youtube.com' ||
        host === 'youtube-nocookie.com'
      ) {
        if (parsedUrl.pathname.startsWith('/embed/')) {
          const embedId = parsedUrl.pathname.split('/')[2];
          if (embedId) return `https://www.youtube.com/watch?v=${embedId}`;
        }

        if (parsedUrl.pathname === '/watch') {
          const watchId = parsedUrl.searchParams.get('v');
          if (watchId) return `https://www.youtube.com/watch?v=${watchId}`;
        }

        if (parsedUrl.pathname === '/embed') {
          const listType = parsedUrl.searchParams.get('listType');
          const listValue = parsedUrl.searchParams.get('list');
          if (listType === 'search' && listValue) {
            return `https://www.youtube.com/results?search_query=${encodeURIComponent(listValue)}`;
          }
        }
      }

      return sourceVideo;
    } catch (error) {
      return sourceVideo;
    }
  },

  toEmbedUrl(sourceVideo) {
    if (!sourceVideo) return '';

    try {
      const parsedUrl = new URL(sourceVideo);
      const host = parsedUrl.hostname.replace(/^www\./, '');

      if (host === 'youtu.be') {
        const shortId = parsedUrl.pathname.replace('/', '').trim();
        if (shortId)
          return `https://www.youtube.com/embed/${shortId}?autoplay=1&rel=0`;
      }

      if (
        host === 'youtube.com' ||
        host === 'm.youtube.com' ||
        host === 'youtube-nocookie.com'
      ) {
        if (parsedUrl.pathname.startsWith('/embed/')) {
          const embedId = parsedUrl.pathname.split('/')[2];
          if (!embedId) return '';

          const params = new URLSearchParams(parsedUrl.search);
          params.set('autoplay', '1');
          params.set('rel', '0');
          return `https://www.youtube.com/embed/${embedId}?${params.toString()}`;
        }

        if (parsedUrl.pathname === '/watch') {
          const watchId = parsedUrl.searchParams.get('v');
          if (!watchId) return '';
          return `https://www.youtube.com/embed/${watchId}?autoplay=1&rel=0`;
        }

        if (parsedUrl.pathname === '/embed') {
          const params = new URLSearchParams(parsedUrl.search);
          params.set('autoplay', '1');
          params.set('rel', '0');
          return `https://www.youtube.com/embed?${params.toString()}`;
        }
      }

      return '';
    } catch (error) {
      return '';
    }
  },

  ensureModalVideoFallbackElement() {
    let fallbackElement = document.getElementById('modalVideoFallback');
    if (fallbackElement) return fallbackElement;

    const trigger = document.querySelector('.video-lightbox-trigger');
    const container = trigger ? trigger.parentElement : null;
    if (!container) return null;

    fallbackElement = document.createElement('p');
    fallbackElement.id = 'modalVideoFallback';
    fallbackElement.className = 'modal-video-fallback';
    fallbackElement.style.display = 'none';
    fallbackElement.style.marginTop = '0.75rem';
    fallbackElement.style.textAlign = 'center';
    fallbackElement.style.fontSize = '0.9rem';
    fallbackElement.style.fontWeight = '600';
    fallbackElement.style.color = '#ffffff';
    fallbackElement.style.padding = '0 0.5rem';

    container.appendChild(fallbackElement);
    return fallbackElement;
  },

  ensureYoutubeFallbackFrame() {
    let youtubeFrame = document.getElementById('modalVideoYoutubeFrame');
    if (youtubeFrame) return youtubeFrame;

    const trigger = document.querySelector('.video-lightbox-trigger');
    if (!trigger) return null;

    const wrapper = document.createElement('div');
    wrapper.id = 'modalVideoYoutubeWrapper';
    wrapper.style.display = 'none';
    wrapper.style.width = '100%';
    wrapper.style.height = '100%';
    wrapper.style.position = 'absolute';
    wrapper.style.inset = '0';
    wrapper.style.borderRadius = '12px';
    wrapper.style.overflow = 'hidden';
    wrapper.style.backgroundColor = '#000';
    wrapper.style.zIndex = '3';

    youtubeFrame = document.createElement('iframe');
    youtubeFrame.id = 'modalVideoYoutubeFrame';
    youtubeFrame.title = 'YouTube backup video';
    youtubeFrame.style.width = '100%';
    youtubeFrame.style.height = '100%';
    youtubeFrame.style.border = '0';
    youtubeFrame.allow =
      'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    youtubeFrame.allowFullscreen = true;
    youtubeFrame.referrerPolicy = 'strict-origin-when-cross-origin';

    wrapper.appendChild(youtubeFrame);
    trigger.appendChild(wrapper);

    return youtubeFrame;
  },

  hideYoutubeVideoFallback() {
    const youtubeFrame = document.getElementById('modalVideoYoutubeFrame');
    const youtubeWrapper = document.getElementById('modalVideoYoutubeWrapper');
    const modalVideo = document.getElementById('modalVideo');
    const overlayPlay = document.querySelector('.video-overlay-play');

    if (youtubeFrame) youtubeFrame.src = '';
    if (youtubeWrapper) youtubeWrapper.style.display = 'none';
    if (modalVideo) modalVideo.style.display = '';
    if (overlayPlay) overlayPlay.style.display = '';
  },

  hideModalVideoFallback() {
    const fallbackElement = document.getElementById('modalVideoFallback');
    this.hideYoutubeVideoFallback();

    if (!fallbackElement) return;
    fallbackElement.style.display = 'none';
    fallbackElement.textContent = '';
  },

  showYoutubeVideoFallback() {
    if (!this.currentEmbedUrl) return false;

    const youtubeFrame = this.ensureYoutubeFallbackFrame();
    const youtubeWrapper = document.getElementById('modalVideoYoutubeWrapper');
    const modalVideo = document.getElementById('modalVideo');
    const overlayPlay = document.querySelector('.video-overlay-play');

    if (!youtubeFrame || !youtubeWrapper || !modalVideo) return false;

    youtubeFrame.src = this.currentEmbedUrl;
    youtubeWrapper.style.display = 'block';
    modalVideo.style.display = 'none';
    if (overlayPlay) overlayPlay.style.display = 'none';

    return true;
  },

  showModalVideoFallback() {
    const usedYoutubeBackup = this.showYoutubeVideoFallback();
    const fallbackElement = this.ensureModalVideoFallbackElement();
    if (!fallbackElement) return;

    if (usedYoutubeBackup) {
      fallbackElement.style.display = 'none';
      return;
    }

    fallbackElement.textContent = 'Video file unavailable. ';

    if (this.currentWatchUrl) {
      const watchLink = document.createElement('a');
      watchLink.href = this.currentWatchUrl;
      watchLink.target = '_blank';
      watchLink.rel = 'noopener noreferrer';
      watchLink.textContent = 'Watch the video here';
      watchLink.style.color = '#ffe08a';
      watchLink.style.fontWeight = '700';
      fallbackElement.appendChild(watchLink);
    }

    fallbackElement.style.display = 'block';
  },

  configureModalVideoFallback(food) {
    this.currentWatchUrl = this.toWatchUrl(
      food && food.sourceVideo ? food.sourceVideo : '',
    );
    this.currentEmbedUrl = this.toEmbedUrl(
      food && food.sourceVideo ? food.sourceVideo : '',
    );

    this.hideModalVideoFallback();

    const modalVideo = document.getElementById('modalVideo');
    const modalSource = modalVideo ? modalVideo.querySelector('source') : null;
    if (modalVideo) {
      modalVideo.onerror = () => {
        this.showModalVideoFallback();
      };
      modalVideo.onloadeddata = () => {
        this.hideModalVideoFallback();
      };
    }

    if (modalSource) {
      modalSource.onerror = () => {
        this.showModalVideoFallback();
      };
    }

    const fullscreenVideo = document.getElementById('fullscreenVideoPlayer');
    if (fullscreenVideo) {
      fullscreenVideo.onerror = () => {
        this.showModalVideoFallback();
      };
    }

    if (!(food && food.video) && (this.currentWatchUrl || this.currentEmbedUrl)) {
      this.showModalVideoFallback();
    }
  },

  renderVideoSourceLinks() {
    document.querySelectorAll('.food-card').forEach((card) => {
      const id = Number.parseInt(card.id.split('-')[1], 10);
      const food = this.data.find((entry) => entry.id === id);
      if (!food || !food.sourceVideo) return;

      const watchUrl = this.toWatchUrl(food.sourceVideo);
      if (!watchUrl) return;

      const info = card.querySelector('.food-card-info');
      if (!info || info.querySelector('.food-video-credit')) return;

      const credit = document.createElement('p');
      credit.className = 'food-video-credit';
      credit.textContent = 'Video source: ';

      const sourceLink = document.createElement('a');
      sourceLink.href = watchUrl;
      sourceLink.target = '_blank';
      sourceLink.rel = 'noopener noreferrer';
      sourceLink.textContent = 'Watch video';

      credit.appendChild(sourceLink);
      credit.addEventListener('click', (event) => {
        event.stopPropagation();
      });

      info.appendChild(credit);
    });
  },
  bindEvents() {
    document.querySelectorAll('.food-card').forEach((card) => {
      card.onclick = () => {
        const id = parseInt(card.id.split('-')[1]);
        this.openModal(id);
      };
    });

    const overlay = document.getElementById('modalOverlay');
    overlay.onclick = (e) => {
      if (e.target === overlay) this.closeModal();
    };

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const fsOverlay = document.getElementById('videoFullscreen');
        if (fsOverlay && fsOverlay.classList.contains('active')) {
          this.toggleVideoExpansion(e);
        } else {
          this.closeModal();
        }
      }
    });
  },

  moveMedia(direction) {
    const track = document.getElementById('mediaTrack');
    const dots = document.querySelectorAll('.media-indicator .dot');
    const video = document.getElementById('modalVideo');

    this.currentMediaIndex = (this.currentMediaIndex + direction + 2) % 2;
    track.style.transform = `translateX(-${this.currentMediaIndex * 50}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentMediaIndex);
    });

    if (this.currentMediaIndex === 0 && video) {
      video.pause();
    } else if (this.currentMediaIndex === 1 && video) {
      video.play();
    }
  },

  toggleVideoExpansion(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const fsOverlay = document.getElementById('videoFullscreen');
    const fsVideo = document.getElementById('fullscreenVideoPlayer'); // SAKTO SA HTML
    const mainVideo = document.getElementById('modalVideo');

    if (!fsOverlay.classList.contains('active')) {
      fsVideo.src = mainVideo.src;
      fsVideo.currentTime = mainVideo.currentTime;
      fsOverlay.style.display = 'flex';
      requestAnimationFrame(() => {
        fsOverlay.classList.add('active');
        fsVideo.play();
        mainVideo.pause();
      });
    } else {
      // Sync time back to small player
      mainVideo.currentTime = fsVideo.currentTime;
      fsOverlay.classList.remove('active');
      setTimeout(() => {
        fsOverlay.style.display = 'none';
        fsVideo.pause();
        if (this.currentMediaIndex === 1) mainVideo.play();
      }, 400);
    }
  },

  openModal(id) {
    const food = this.data.find((f) => f.id === id);
    if (!food) return;
    this.configureModalVideoFallback(food);

    this.currentMediaIndex = 0;
    const track = document.getElementById('mediaTrack');
    const dots = document.querySelectorAll('.media-indicator .dot');
    const scrollContainer = document.querySelector(
      '.thetraingoesbrrr-scroll-container',
    );

    if (track) track.style.transform = 'translateX(0%)';
    dots.forEach((dot, i) => dot.classList.toggle('active', i === 0));
    if (scrollContainer) scrollContainer.scrollTop = 0;

    document.getElementById('modalImage').src = food.image;

    const videoPlayer = document.getElementById('modalVideo');
    if (videoPlayer) {
      if (food.video) {
        videoPlayer.src = food.video;
        videoPlayer.load();
      } else {
        videoPlayer.removeAttribute('src');
        videoPlayer.load();
        this.showModalVideoFallback();
      }
    }

    document.getElementById('modalTitle').innerText = food.name;
    document.getElementById('modalOrigin').innerText = food.origin;
    document.getElementById('modalDescription').innerText = food.description;
    document.getElementById('modalPrepTime').innerText = food.prep;
    document.getElementById('modalCookTime').innerText = food.cook;
    document.getElementById('modalServings').innerText = food.servings;

    document.getElementById('modalIngredients').innerHTML = food.ingredients
      .map((ing) => `<li>${ing}</li>`)
      .join('');

    document.getElementById('modalRecipe').innerHTML = food.steps
      .map(
        (step, index) => `
          <div class="step-item">
              <div class="step-number">${index + 1}</div>
              <div class="step-text">${step}</div>
          </div>
      `,
      )
      .join('');

    const overlay = document.getElementById('modalOverlay');
    overlay.style.display = 'flex';
    requestAnimationFrame(() => {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  },

  closeModal() {
    const overlay = document.getElementById('modalOverlay');
    this.hideModalVideoFallback();
    const video = document.getElementById('modalVideo');
    const fsVideo = document.getElementById('fullscreenVideoPlayer');

    overlay.classList.remove('active');

    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
      if (video) video.pause();
      if (fsVideo) fsVideo.pause();
    }, 400);
  },
};

window.moveMedia = (d) => CuisineEngine.moveMedia(d);
window.closeModal = () => CuisineEngine.closeModal();
window.toggleVideoExpansion = (e) => CuisineEngine.toggleVideoExpansion(e);

document.addEventListener('DOMContentLoaded', () => CuisineEngine.init());

const TouristSpots = {
  data: {
    1: {
      name: 'Mount Samat Shrine',
      location: 'Pilar, Bataan',
      description:
        'The Memorial Cross stands as a towering 92-meter tribute to the heroic struggle of Filipino and American forces during World War II. It offers a 360-degree panoramic view of Bataan and Manila Bay.',
      image: '../Bataan-Image/Mount-samaat-1.jpg',
      time: '6:00 AM - 5:00 PM',
      highlights: '92m Cross, War Museum, Viewing Deck',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.234567890!2d120.5085!3d14.6056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339614f0e4b85f6b%3A0xc0747127c244c7!2sMount%20Samat%20National%20Shrine!5e0!3m2!1sen!2sph!4v1620000000000',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Mount+Samat+National+Shrine',
    },
    2: {
      name: 'Las Casas Filipinas',
      location: 'Bagac, Bataan',
      description:
        'A heritage resort showcasing restored Spanish-colonial houses, stone bridges, and cobblestone streets. It is a living museum of Filipino craftsmanship.',
      image: '../Bataan-Image/las casas filipinas 1.jpg',
      time: '8:00 AM - 6:00 PM',
      highlights: 'Heritage Tours, Balsa River Cruise, Beachfront',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.345678901!2d120.3888!3d14.5988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396695555555555%3A0x7777777777777777!2sLas%20Casas%20Filipinas%20de%20Acuzar!5e0!3m2!1sen!2sph!4v1620000000001',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Las+Casas+Filipinas+de+Acuzar',
    },
    3: {
      name: 'Five Fingers Cove',
      location: 'Mariveles, Bataan',
      description:
        'A series of coves resembling five fingers when viewed from above. It is a haven for adventure seekers featuring cliff diving and island hopping.',
      image: '../Bataan-Image/Five finger cove 1.webp',
      time: '6:00 AM Departure',
      highlights: 'Cliff Diving, Island Hopping, Laki Beach',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.123456789!2d120.4855!3d14.4312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396177777777777%3A0x8888888888888888!2sFive+Fingers+Cove!5e0!3m2!1sen!2sph!4v1620000000002',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=14.4312,120.4855',
    },
    4: {
      name: 'Pawikan Center',
      location: 'Morong, Bataan',
      description:
        'A community-based conservation center dedicated to protecting endangered sea turtles. Visitors can learn about conservation efforts and release hatchlings.',
      image: '../Bataan-Image/Pawikan 1.jpg',
      time: '8:00 AM - 5:00 PM',
      highlights: 'Turtle Hatchery, Conservation Talks, Beach Releases',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.111111111!2d120.2688!3d14.6855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33966aaaaaaabbbb%3A0xcccccccccccccccc!2sPawikan+Conservation+Center!5e0!3m2!1sen!2sph!4v1620000000003',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Pawikan+Conservation+Center+Morong+Bataan',
    },
    5: {
      name: 'WWII Museum',
      location: 'Balanga City, Bataan',
      description:
        "Displays artifacts and dioramas that tell the story of Bataan's defense and the Death March. It serves as a tribute to the resilience of the Filipino spirit.",
      image: '../Bataan-Image/World war musium 1.jpg',
      time: '9:00 AM - 4:00 PM',
      highlights: 'Historic Dioramas, Surrender Room, War Relics',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.000000000!2d120.5400!3d14.6800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33961bbbbbbbbbbb%3A0xdddddddddddddddd!2sBataan+World+War+II+Museum!5e0!3m2!1sen!2sph!4v1620000000004',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Bataan+World+War+II+Museum',
    },
    6: {
      name: 'Corregidor Island',
      location: 'Accessible via Mariveles Port',
      description:
        'An island fortress that stood as a final defense against invading forces. Explore tunnels, battery ruins, and military memorials.',
      image: '../Bataan-Image/Corrigidor 1.jpg',
      time: 'Ferry Schedules Vary',
      highlights: 'Malinta Tunnel, Battery Way, Pacific War Memorial',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3866.555555555!2d120.5755!3d14.3855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33963eeeeeeeeeee%3A0xfffffffffffffff!2sCorregidor+Island!5e0!3m2!1sen!2sph!4v1620000000005',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Corregidor+Island',
    },
  },

  open(id) {
    const spot = this.data[id];
    if (!spot) return;

    document.getElementById('t-thetraingoesbrrr-img').src = spot.image;
    document.getElementById('t-thetraingoesbrrr-title').innerText = spot.name;
    document.getElementById('t-thetraingoesbrrr-location').innerText =
      spot.location;
    document.getElementById('t-thetraingoesbrrr-desc').innerText =
      spot.description;
    document.getElementById('t-thetraingoesbrrr-time').innerText = spot.time;
    document.getElementById('t-thetraingoesbrrr-highlights').innerText =
      spot.highlights;

    const mapElement = document.getElementById('t-thetraingoesbrrr-map');
    mapElement.src = spot.mapSrc;

    const navBtn = document.getElementById('t-thetraingoesbrrr-directions');
    navBtn.href = spot.navUrl;

    const overlay = document.getElementById('touristModal');
    const contentWrapper = overlay.querySelector(
      '.t-thetraingoesbrrr-content-wrapper',
    );

    overlay.style.display = 'flex';
    contentWrapper.scrollTop = 0;

    setTimeout(() => {
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }, 10);
  },

  close() {
    const overlay = document.getElementById('touristModal');
    overlay.classList.remove('active');

    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
      document.getElementById('t-thetraingoesbrrr-map').src = '';
    }, 400);
  },
};

function openTouristModal(id) {
  TouristSpots.open(id);
}
function closeTouristModal() {
  TouristSpots.close();
}

window.onclick = (e) => {
  if (e.target.id === 'touristModal') closeTouristModal();
};
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeTouristModal();
});

const OfficialData = {
  data: {
    1: {
      name: 'Hon. Jose Enrique Garcia III',
      position: 'Governor of Bataan',
      image: '../Bataan-Image/Governor-1.jpeg',
      bio: 'Hon. Jose Enrique "Joet" Garcia III serves as the Governor of Bataan, leading the province with a vision of digital transformation and sustainable growth under the "1Bataan" program. His administration focuses on enhancing public services through innovation and ensuring economic opportunities reach every Bataaneno.',
      fb: 'https://facebook.com/joetgarcia',
      xt: '#',
    },
    2: {
      name: 'Hon. Ma. Cristina Garcia',
      position: 'Vice Governor',
      image: '../Bataan-Image/vice-governor-1.jpg',
      bio: 'Hon. Ma. Cristina "Cris" Garcia is the Vice Governor of Bataan. As the presiding officer of the Sangguniang Panlalawigan, she champions legislative measures for social welfare, education, and environmental protection, ensuring a balanced and inclusive development for the province.',
      fb: 'https://facebook.com/vicegovcrisgarcia',
      xt: '#',
    },
    3: {
      name: 'Hon. Jomar L. Gaza, J.D.',
      position: '1st District Board Member',
      image: '../Bataan-Image/1st board-1.jpg',
      bio: 'Hon. Jomar L. Gaza, J.D., utilizes his legal expertise to craft ordinances that protect the rights and promote the interests of Bataanenos. His work focuses on improving local governance standards and ensuring legal clarity in provincial policies.',
      fb: '#',
      xt: '#',
    },
    4: {
      name: 'Hon. Godofredo B. Galicia Jr.',
      position: '2nd District Board Member',
      image: '../Bataan-Image/2nd board-1.jpg',
      bio: 'Hon. Godofredo B. Galicia Jr. is dedicated to community-based development projects. He focuses on infrastructure improvements and social programs that directly impact the residents of the second district, fostering regional stability and growth.',
      fb: '#',
      xt: '#',
    },
    5: {
      name: 'Hon. Mylene A. Serrano',
      position: '3rd District Board Member',
      image: '../Bataan-Image/3rd board-1.jpg',
      bio: 'Hon. Mylene A. Serrano is a staunch advocate for womenâ€™s rights, healthcare accessibility, and youth empowerment. Her initiatives aim to provide better social safety nets and educational support systems within the third district.',
      fb: '#',
      xt: '#',
    },
    6: {
      name: 'Hon. Atty. Antonino B. Roman, III',
      position: '1st District Representative',
      image: '../Bataan-Image/1st rep-1.jpg',
      bio: 'Hon. Atty. Antonino "Tony" Roman III represents the 1st district of Bataan in Congress. He focuses on national legislation that secures funding for regional infrastructure, education, and sustainable livelihoods for his constituents.',
      fb: '#',
      xt: '#',
    },
    7: {
      name: 'Hon. Albert S. Garcia',
      position: '2nd District Representative',
      image: '../Bataan-Image/2nd rep-1.webp',
      bio: 'Hon. Albert S. Garcia serves as the Representative of the 2nd district. A veteran leader, he continues to champion economic expansion, industrial readiness, and the promotion of the Freeport Area of Bataan as a global investment destination.',
      fb: '#',
      xt: '#',
    },
    8: {
      name: 'Hon. Maria Angela S. Garcia',
      position: '3rd District Representative',
      image: '../Bataan-Image/3rd rep-1.webp',
      bio: 'Hon. Maria Angela "Gila" Garcia represents the 3rd district in the House of Representatives. Her legislative agenda prioritizes public health, social protection, and environmental conservation to improve the quality of life in her district.',
      fb: '#',
      xt: '#',
    },
  },

  open(id) {
    const leader = this.data[id];
    if (!leader) return;

    const modal = document.getElementById('officialModal');
    const scrollArea = modal.querySelector('.o-thetraingoesbrrr-scroll-area');
    const img = document.getElementById('o-thetraingoesbrrr-img');
    const name = document.getElementById('o-thetraingoesbrrr-name');
    const pos = document.getElementById('o-thetraingoesbrrr-position');
    const bio = document.getElementById('o-thetraingoesbrrr-bio');
    const fbLink = modal.querySelector('.social-icon.fb');
    const xtLink = modal.querySelector('.social-icon.x-twitter');

    img.src = leader.image;
    img.alt = leader.name;
    name.textContent = leader.name;
    pos.textContent = leader.position;
    bio.textContent = leader.bio;

    if (fbLink) fbLink.href = leader.fb || '#';
    if (xtLink) xtLink.href = leader.xt || '#';

    modal.style.display = 'flex';
    if (scrollArea) scrollArea.scrollTop = 0;

    requestAnimationFrame(() => {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  },

  close() {
    const modal = document.getElementById('officialModal');
    modal.classList.remove('active');

    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
      document.getElementById('o-thetraingoesbrrr-img').src = '';
    }, 400);
  },
};

function openOfficialModal(id) {
  OfficialData.open(id);
}

function closeOfficialModal() {
  OfficialData.close();
}

window.addEventListener('click', (e) => {
  if (e.target.id === 'officialModal') OfficialData.close();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') OfficialData.close();
});
