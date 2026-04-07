const CuisineEngine = {
  data: [
    {
      id: 1,
      name: 'Binungey',
      origin: 'Aeta Communities, Zambales',
      description:
        'Sticky rice mixed with coconut milk and sugar, cooked inside bamboo tubes over open fire. Slightly smoky, mildly sweet, and often eaten during special occasions.',
      image: '../Zambales-Image/food-kakanin.jpg',
      video: '../Vedio/Zambales/Card-1.mp4',
      sourceVideo: 'https://www.youtube.com/embed?listType=search&list=Binungey+recipe',
      prep: '25 Mins',
      cook: '45 Mins',
      servings: '8 Pax',
      ingredients: [
        'Glutinous rice',
        'Coconut milk',
        'Brown sugar',
        'Bamboo tubes',
        'Banana leaf plugs',
      ],
      steps: [
        'Soak glutinous rice, then mix with coconut milk and brown sugar.',
        'Fill bamboo tubes with the mixture and seal with banana leaves.',
        'Cook over open charcoal fire while rotating for even heat.',
        'Let cool slightly, then split bamboo and serve warm.',
      ],
    },
    {
      id: 2,
      name: 'Tibok-tibok',
      origin: 'Zambales (Kapampangan Influence)',
      description:
        "A Kapampangan-influenced dessert common in Zambales. Made from carabao's milk, sugar, and cornstarch, topped with latik (toasted coconut curds).",
      image: '../Zambales-Image/food-coconut-stew.jpg',
      video: '../Vedio/Zambales/Card-2.mp4',
      sourceVideo: 'https://www.youtube.com/embed?listType=search&list=Tibok+tibok+recipe',
      prep: '10 Mins',
      cook: '25 Mins',
      servings: '6 Pax',
      ingredients: [
        "Carabao's milk",
        'Cornstarch',
        'Sugar',
        'Coconut milk for latik',
        'Toasted coconut curds',
      ],
      steps: [
        "Dissolve cornstarch and sugar in carabao's milk.",
        'Cook over medium heat while stirring continuously until thick.',
        'Pour into a tray and let it set.',
        'Top with latik before serving.',
      ],
    },
    {
      id: 3,
      name: 'Inihaw na Bangus',
      origin: 'Masinloc Coast',
      description:
        'Grilled milkfish, typically marinated in vinegar, garlic, and calamansi. Coastal towns rely heavily on fresh bangus.',
      image: '../Zambales-Image/food-grilled-seafood.jpg',
      video: '../Vedio/Zambales/Card-3.mp4',
      sourceVideo: 'https://www.youtube.com/embed?listType=search&list=Inihaw+na+bangus+recipe',
      prep: '15 Mins',
      cook: '25 Mins',
      servings: '4 Pax',
      ingredients: [
        'Fresh bangus',
        'Vinegar',
        'Garlic',
        'Calamansi juice',
        'Salt and pepper',
      ],
      steps: [
        'Clean and score the bangus.',
        'Marinate in vinegar, garlic, calamansi, salt, and pepper.',
        'Grill over charcoal until skin is crisp and fish is cooked through.',
        'Serve with toyomansi or spiced vinegar.',
      ],
    },
    {
      id: 4,
      name: 'Kilawin (Kinilaw na Isda)',
      origin: 'Seaside Towns, Zambales',
      description:
        'Raw fish cured in vinegar with ginger, onions, and chili. A staple in seaside communities due to immediate fish access.',
      image: '../Zambales-Image/Food.jpg',
      video: '../Vedio/Zambales/Card-4.mp4',
      sourceVideo: 'https://www.youtube.com/embed?listType=search&list=Kinilaw+na+isda+recipe',
      prep: '20 Mins',
      cook: 'No cook',
      servings: '4 Pax',
      ingredients: ['Fresh fish fillet', 'Vinegar', 'Ginger', 'Onion', 'Chili'],
      steps: [
        'Cube very fresh fish and rinse briefly in vinegar.',
        'Mix with fresh vinegar, ginger, onion, and chili.',
        'Season with salt and let cure for several minutes.',
        'Serve immediately while chilled.',
      ],
    },
    {
      id: 5,
      name: 'Adobong Pusit',
      origin: 'Subic Bay Coast',
      description:
        'Squid cooked in vinegar, soy sauce, garlic, and its own ink, producing a dark, savory dish with briny depth.',
      image: '../Zambales-Image/Food2.jpg',
      video: '../Vedio/Zambales/Card-5.mp4',
      sourceVideo: 'https://www.youtube.com/embed?listType=search&list=Adobong+pusit+recipe',
      prep: '15 Mins',
      cook: '30 Mins',
      servings: '5 Pax',
      ingredients: [
        'Fresh squid with ink sac',
        'Vinegar',
        'Soy sauce',
        'Garlic',
        'Onion and pepper',
      ],
      steps: [
        'Clean squid carefully and reserve ink.',
        'Saute garlic and onion, then add squid.',
        'Add vinegar and soy sauce, then simmer briefly.',
        'Stir in ink and cook until sauce darkens and thickens.',
      ],
    },
    {
      id: 6,
      name: 'Pinangat na Isda',
      origin: 'Fishing Villages, Zambales',
      description:
        'Fish simmered in tomatoes, onions, and sometimes souring agents like kamias. Light, broth-based, and common in fishing villages.',
      image: '../Zambales-Image/food-sinigang.jpg',
      video: '../Vedio/Zambales/Card-6.mp4',
      sourceVideo: 'https://www.youtube.com/embed?listType=search&list=Pinangat+na+isda+recipe',
      prep: '10 Mins',
      cook: '25 Mins',
      servings: '4 Pax',
      ingredients: [
        'Fresh fish',
        'Tomatoes',
        'Onion',
        'Kamias or other souring agent',
        'Salt and pepper',
      ],
      steps: [
        'Layer tomatoes and onions in a pot with fish.',
        'Add water and souring agent, then simmer gently.',
        'Season lightly and continue until fish is cooked.',
        'Serve hot with rice and broth.',
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

    if (video) {
      if (this.currentMediaIndex === 1) {
        video.play().catch((err) => console.log('Auto-play prevented'));
      } else {
        video.pause();
      }
    }
  },

  toggleVideoExpansion(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const fsOverlay = document.getElementById('videoFullscreen');
    const fsVideo = document.getElementById('fullscreenVideoPlayer');
    const mainVideo = document.getElementById('modalVideo');

    if (!fsOverlay.classList.contains('active')) {
      fsVideo.querySelector('source').src =
        mainVideo.querySelector('source').src;
      fsVideo.load();
      fsVideo.currentTime = mainVideo.currentTime;
      fsOverlay.style.display = 'flex';
      requestAnimationFrame(() => {
        fsOverlay.classList.add('active');
        fsVideo.play();
        mainVideo.pause();
      });
    } else {
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

    const videoElement = document.getElementById('modalVideo');
    if (videoElement) {
      const sourceElement = videoElement.querySelector('source');
      if (sourceElement) {
        sourceElement.src = food.video || '';
      } else {
        videoElement.src = food.video || '';
      }
      videoElement.load();
      videoElement.pause();
      if (!food.video) this.showModalVideoFallback();
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
      name: 'Anawangin Cove',
      location: 'San Antonio, Zambales',
      description:
        'A crescent-shaped cove known for its calm shoreline, ash-colored sand, and agoho trees that grew after the Pinatubo era.',
      image: '../Zambales-Image/Zambales-section.avif',
      time: 'Dry season',
      highlights: 'Cove Camping, Beach Trails, Sunset & Stargazing',
      mapSrc:
        'https://www.google.com/maps?q=Anawangin+Cove+Zambales&output=embed',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Anawangin+Cove+Zambales',
    },
    2: {
      name: 'Nagsasa Cove',
      location: 'San Antonio, Zambales',
      description:
        'A remote cove with broad sandy stretches, mountain backdrops, and calm waters ideal for overnight coastal trips.',
      image: '../Zambales-Image/Zambales.jpg',
      time: 'Dry season',
      highlights: 'Boat Trips, Quiet Beaches, Scenic Mountain Views',
      mapSrc:
        'https://www.google.com/maps?q=Nagsasa+Cove+Zambales&output=embed',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Nagsasa+Cove+Zambales',
    },
    3: {
      name: 'Subic Bay Boardwalk',
      location: 'Subic, Zambales',
      description:
        'A lively waterfront area with bay views, dining strips, and sunset walks that connect tourism and local enterprise.',
      image: '../Zambales-Image/Subic.jpg',
      time: 'Late afternoon',
      highlights: 'Bay Walk, Food Stops, Heritage & Sunset Views',
      mapSrc: 'https://www.google.com/maps?q=Subic+Bay+Zambales&output=embed',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Subic+Zambales',
    },
    4: {
      name: 'Potipot Island',
      location: 'Candelaria, Zambales',
      description:
        'A compact island destination with clear waters and bright sand, popular for island hopping and day camping.',
      image: '../Zambales-Image/potishit.jpg',
      time: 'Dry season',
      highlights: 'Island Hopping, Snorkeling, Day & Overnight Camping',
      mapSrc:
        'https://www.google.com/maps?q=Potipot+Island+Zambales&output=embed',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Potipot+Island+Zambales',
    },
    5: {
      name: 'Mount Tapulao Trail',
      location: 'Palauig, Zambales',
      description:
        'A long highland trek known for pine-lined routes, cool weather, and panoramic summit views of western Luzon.',
      image: '../Zambales-Image/mtxd.jpg',
      time: 'Cool months',
      highlights: 'Hiking Trails, Pine Forests, Summit Views & Camps',
      mapSrc:
        'https://www.google.com/maps?q=Mount+Tapulao+Zambales&output=embed',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Mount+Tapulao+Zambales',
    },
    6: {
      name: 'Mango Orchard Loop',
      location: 'Iba, Zambales',
      description:
        'A farm route experience that highlights mango orchards, produce stalls, and local agri-enterprises around harvest season.',
      image: '../Zambales-Image/mangoes.jpg',
      time: 'Harvest months',
      highlights: 'Mango Farms, Local Produce, Orchard-side Food Stops',
      mapSrc:
        'https://www.google.com/maps?q=Iba+Zambales+Mango+farm&output=embed',
      navUrl: 'https://www.google.com/maps/dir/?api=1&destination=Iba+Zambales',
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
      name: 'Hermogenes Ebdane Jr.',
      position: 'Governor of Zambales',
      image: '../Zambales-Image/person-jun-ebdane.jpg',
      bio: 'A longtime public official from Zambales, Hermogenes "Jun" Ebdane Jr. has led provincial programs focused on infrastructure, peace and order, and agricultural support services. His administration is often associated with transport connectivity, public facilities, and local economic development initiatives.',
      fb: 'https://en.wikipedia.org/wiki/Jun_Ebdane',
      xt: 'https://en.wikipedia.org/wiki/Zambales_Provincial_Board',
    },
    2: {
      name: 'Jefferson "Jay" Khonghun',
      position: 'Representative, Zambales 1st District',
      image: '../Zambales-Image/person-jay-khonghun.jpg',
      bio: 'Jefferson "Jay" Khonghun serves as representative of Zambales\' 1st District and has previously held local executive and provincial posts. His public profile includes local governance work in Subic and policy advocacy tied to district-level development.',
      fb: 'https://en.wikipedia.org/wiki/Jay_Khonghun',
      xt: 'https://en.wikipedia.org/wiki/Jay_Khonghun',
    },
    3: {
      name: 'Ramon Magsaysay',
      position: 'Former President of the Philippines',
      image: '../Zambales-Image/person-ramon-magsaysay.jpg',
      bio: 'Born in Iba, Zambales, Ramon Magsaysay became the 7th President of the Philippines and remains one of the most respected public servants in national history. His legacy is closely tied to grassroots governance, public trust, and responsive leadership.',
      fb: 'https://en.wikipedia.org/wiki/Ramon_Magsaysay',
      xt: 'https://en.wikipedia.org/wiki/Ramon_Magsaysay',
    },
    4: {
      name: 'Genaro Magsaysay',
      position: 'Former Senator',
      image: '../Zambales-Image/person-genaro-magsaysay.jpg',
      bio: 'Genaro Magsaysay was a Filipino statesman from Zambales who served in the Senate and in the House of Representatives. He is remembered for his legislative work and longstanding contribution to public service in Central Luzon.',
      fb: 'https://en.wikipedia.org/wiki/Genaro_Magsaysay',
      xt: 'https://en.wikipedia.org/wiki/Genaro_Magsaysay',
    },
    5: {
      name: 'Maria Milagros "Mitos" Magsaysay',
      position: 'Former Representative, Zambales 1st District',
      image: '../Zambales-Image/person-mitos-magsaysay.jpg',
      bio: 'Maria Milagros "Mitos" Magsaysay represented Zambales in Congress and became known for her work in national policy debates and district representation. Her career reflects the province\'s continuing role in national-level public service.',
      fb: 'https://en.wikipedia.org/wiki/Mitos_Magsaysay',
      xt: 'https://en.wikipedia.org/wiki/Mitos_Magsaysay',
    },
    6: {
      name: 'Jun Rundstedt Ebdane',
      position: 'Board Member, Zambales 2nd District',
      image: '../Zambales-Image/person-rundy-ebdane.jpg',
      bio: 'Jun Rundstedt "Rundy" Ebdane has served in both municipal and provincial offices in Zambales, including as mayor of Iba and member of the provincial board. His portfolio highlights local governance, public administration, and district-level planning.',
      fb: 'https://en.wikipedia.org/wiki/Jun_Rundstedt_Ebdane',
      xt: 'https://en.wikipedia.org/wiki/Zambales_Provincial_Board',
    },
    7: {
      name: 'Rolen C. Paulino Jr.',
      position: 'SBMA Chairperson and Public Administrator',
      image: '../Zambales-Image/person-rolen-paulino.jpg',
      bio: 'Rolen C. Paulino Jr. has been active in local administration and currently leads the Subic Bay Metropolitan Authority. His work is associated with economic zone development, investment promotion, and regional business connectivity.',
      fb: 'https://en.wikipedia.org/wiki/Rolen_Paulino',
      xt: 'https://en.wikipedia.org/wiki/Rolen_Paulino',
    },
    8: {
      name: 'Richard J. Gordon',
      position: 'Former Olongapo Mayor and Senator',
      image: '../Zambales-Image/person-dick-gordon.jpg',
      bio: 'Richard J. Gordon is a veteran public servant from Olongapo with a long record in local and national government. His career spans city leadership, Senate work, and civic management initiatives linked to regional development and disaster response.',
      fb: 'https://en.wikipedia.org/wiki/Dick_Gordon_(politician)',
      xt: 'https://en.wikipedia.org/wiki/Dick_Gordon_(politician)',
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
