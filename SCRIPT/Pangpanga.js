const CuisineEngine = {
  data: [
    {
      id: 1,
      name: 'Sizzling Sisig',
      origin: 'Angeles City, Pampanga',
      description:
        'The original pork sisig made from chopped pig’s face and ears, seasoned with calamansi, onions, and chili peppers, served on a sizzling plate.',
      image: '../Pangpanga-Image/Foods-1.jpg',
      video: '../Vedio/Pangpanga/Card-1.mp4',
      sourceVideo: 'https://www.youtube.com/embed/Sbgs4uFafuk',
      prep: '30 Mins',
      cook: '45 Mins',
      servings: '4 Pax',
      ingredients: [
        '1kg Pig face (ears and snout)',
        '1/4 cup Soy sauce',
        '5-6 pieces Calamansi',
        '3 medium Onions (minced)',
        '1/4 cup Mayonnaise (optional)',
        'Red and green chilies (siling labuyo)',
        'Salt and black pepper to taste',
      ],
      steps: [
        'Boil the pig face in water with salt and pepper until tender. Drain and let it cool.',
        'Grill the boiled meat until slightly charred and crispy.',
        'Finely chop the grilled meat into small bits.',
        'Sauté the meat in a pan (or sizzling plate) with onions and chilies.',
        'Season with soy sauce, calamansi juice, salt, and pepper. Serve while sizzling.',
      ],
    },
    {
      id: 2,
      name: 'Kapampangan Kare-Kare',
      origin: 'Pampanga',
      description:
        'A rich, nutty peanut-based stew known for its vibrant orange color and thick sauce, traditionally served with fermented shrimp paste (bagoong).',
      image: '../Pangpanga-Image/Foods-2.jpg',
      video: '../Vedio/Pangpanga/Card-2.mp4',
      sourceVideo: 'https://www.youtube.com/embed/qr5QrAB3MrQ',
      prep: '20 Mins',
      cook: '2 Hrs',
      servings: '6 Pax',
      ingredients: [
        '1kg Oxtail or beef tripe',
        '1 cup Ground roasted peanuts',
        '1/2 cup Toasted ground rice',
        'Annatto (atsuete) water for color',
        'Eggplants, string beans, and banana blossoms',
        'Bagoong alamang (shrimp paste)',
      ],
      steps: [
        'Boil oxtail in a large pot until very tender (about 2 hours). Save the broth.',
        'Add the ground peanuts and toasted ground rice to the broth, stirring until thickened.',
        'Pour in annatto water until the desired orange color is achieved.',
        'Add the vegetables and simmer until cooked through.',
        'Serve hot with a side of sautéed bagoong alamang.',
      ],
    },
    {
      id: 3,
      name: 'Pampanga Tocino (Puso)',
      origin: 'San Fernando, Pampanga',
      description:
        'Naturally fermented sweet-savory cured pork. Known as "Puso" in Pampanga, it is tender, reddish, and a staple breakfast favorite.',
      image: '../Pangpanga-Image/Foods-3.webp',
      video: '../Vedio/Pangpanga/Card-4.mp4',
      sourceVideo: 'https://www.youtube.com/embed/FiZ3WVbsPc0',
      prep: '1 Hr (Curing takes 3 days)',
      cook: '20 Mins',
      servings: '10 Pax',
      ingredients: [
        '1kg Pork shoulder (thinly sliced)',
        '1 cup Brown sugar',
        '1 tbsp Salt',
        '1/2 cup Pineapple juice',
        'Annatto powder for natural color',
      ],
      steps: [
        'Combine sugar, salt, and annatto powder in a bowl.',
        'Rub the mixture thoroughly onto each slice of pork.',
        'Place in a container and let it cure in the refrigerator for 3 days to develop flavor.',
        'To cook, place meat in a pan with a little water until it evaporates.',
        'Fry in its own fat until caramelized and slightly charred.',
      ],
    },
    {
      id: 4,
      name: 'Kapampangan Bringhe',
      origin: 'Pampanga',
      description:
        'The local version of Paella made with glutinous rice, coconut milk, turmeric, and topped with chicken, eggs, and raisins.',
      image: '../Pangpanga-Image/Foods-4.jpg',
      video: '../Vedio/Pangpanga/Card-4.mp4',
      sourceVideo: 'https://www.youtube.com/embed/kNkTCfYyaLA',
      prep: '20 Mins',
      cook: '1 Hr',
      servings: '8 Pax',
      ingredients: [
        '2 cups Glutinous rice (malagkit)',
        '2 cups Coconut milk',
        '500g Chicken pieces',
        '2 tbsp Turmeric powder',
        'Boiled eggs and bell peppers for garnish',
        'Banana leaves (for lining the pan)',
      ],
      steps: [
        'Sauté garlic, onions, and chicken until browned.',
        'Add the glutinous rice and turmeric, stirring to coat the grains.',
        'Pour in coconut milk and bring to a simmer over low heat.',
        'Cover with banana leaves and cook until the rice is tender and a crust (tutong) forms.',
        'Garnish with sliced eggs and raisins before serving.',
      ],
    },
    {
      id: 5,
      name: 'Panecillos de San Nicolas',
      origin: 'Mexico, Pampanga',
      description:
        'Heirloom buttery cookies made with arrowroot flour and molded with intricate religious designs of St. Nicholas.',
      image: '../Pangpanga-Image/Foods-5.webp',
      video: '../Vedio/Pangpanga/Card-5.mp4',
      sourceVideo: 'https://www.youtube.com/embed/Y0DORGdD150',
      prep: '45 Mins',
      cook: '15 Mins',
      servings: '20 Pax',
      ingredients: [
        '500g Arrowroot flour (uraro)',
        '1 cup Coconut milk',
        '1/2 cup Butter (softened)',
        '1 cup Sugar',
        '6 Egg yolks',
      ],
      steps: [
        'Cream butter and sugar together, then add egg yolks and coconut milk.',
        'Gradually fold in the arrowroot flour until a dough forms.',
        'Press a small piece of dough into the traditional wooden San Nicolas mold.',
        'Carefully remove the molded dough and place on a baking sheet.',
        'Bake at 175°C for 12–15 minutes until light golden brown.',
      ],
    },
    {
      id: 6,
      name: 'Razon’s Style Halo-Halo',
      origin: 'Guagua, Pampanga',
      description:
        'A minimalist, creamy version of the classic dessert, famous for its ultra-fine shaved ice, macapuno, and sun-ripened bananas.',
      image: '../Pangpanga-Image/Foods-6.jpg',
      video: '../Vedio/Pangpanga/Card-6.mp4',
      sourceVideo: 'https://www.youtube.com/embed/cpzRsm-sJyE',
      prep: '15 Mins',
      cook: 'N/A',
      servings: '1 Pax',
      ingredients: [
        'Ultra-fine shaved ice',
        'Macapuno strings',
        'Minatamis na Saging (sweetened bananas)',
        'Leche Flan (custard)',
        'Evaporated milk',
      ],
      steps: [
        'Place sweetened bananas and macapuno at the bottom of a tall glass.',
        'Fill the glass with ultra-fine shaved ice.',
        'Pour evaporated milk over the ice.',
        'Top with a generous slice of creamy leche flan.',
        'Mix thoroughly before eating for the perfect creamy texture.',
      ],
    },
  ],

  currentMediaIndex: 0,

  init() {
    this.bindEvents();
    this.renderVideoSourceLinks();
  },

  renderVideoSourceLinks() {
    document.querySelectorAll('.food-card').forEach((card) => {
      const id = Number.parseInt(card.id.split('-')[1], 10);
      const food = this.data.find((entry) => entry.id === id);
      if (!food || !food.sourceVideo) return;

      const info = card.querySelector('.food-card-info');
      if (!info || info.querySelector('.food-video-credit')) return;

      const credit = document.createElement('p');
      credit.className = 'food-video-credit';
      credit.innerHTML = `Video source: <a href="${food.sourceVideo}" target="_blank" rel="noopener noreferrer">${food.sourceVideo}</a>`;
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
    const fsVideo = document.getElementById('fullscreenVideoPlayer');
    const mainVideo = document.getElementById('modalVideo');

    if (!fsOverlay.classList.contains('active')) {
      fsVideo.src = mainVideo.querySelector('source').src;
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
    videoElement.querySelector('source').src = food.video;
    videoElement.load();

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
      name: 'San Guillermo Parish Church',
      location: 'Bacolor, Pampanga',
      description:
        'A historic Baroque church famously half-buried by lahar from the 1991 Mt. Pinatubo eruption. It stands as a powerful monument to Kapampangan resilience, with visitors now entering through what were once the church’s second-story windows.',
      image: '../Pangpanga-Image/Places-1.jpg',
      time: 'Open Daily, 8:00 AM - 5:00 PM',
      highlights:
        'Lahar-Buried Heritage, Baroque Architecture, Historical Significance, Resilience Symbol',

      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.464654316281!2d120.6483120759045!3d15.022379366597233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f6237b19a149%3A0xbb0ecbb0cbcc7949!2sSan%20Guillermo%20Parish%20Church!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph',

      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=San+Guillermo+Parish+Church+Bacolor',
    },
    2: {
      name: 'Mt. Arayat National Park',
      location: 'Arayat / Magalang, Pampanga',
      description:
        'A majestic basaltic volcano rising from the flat plains, legendary as the home of the deity Mariang Sinukuan. It offers diverse hiking trails, refreshing natural spring pools, and a lush forest environment for nature lovers.',
      image: '../Pangpanga-Image/Places-2.jpg',
      time: '6:00 AM - 5:00 PM',
      highlights:
        'Mountain Hiking, Natural Spring Pools, Folklore & Mythology, Biodiversity, Scenic Views',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61596.06836798835!2d120.71002241021484!3d15.207604344075196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ef9ee05adcbd%3A0x59b922a87319633b!2sMount%20Arayat!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Mount+Arayat+National+Park',
    },
    3: {
      name: 'Clark Parade Grounds',
      location: 'Clark Freeport Zone, Pampanga',
      description:
        'The historic heart of the former US Air Base, now a premier open-air destination for leisure and major international events. This vast green space is perfect for jogging, cycling, and witnessing the famous Hot Air Balloon festivals.',
      image: '../Pangpanga-Image/Places-3.jpg',
      time: 'Open 24/7 (Public Park)',
      highlights:
        'Leisure & Sports, Festival Venue, Historical Military Site, Open Green Spaces',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.330062322301!2d120.52834317590747!3d15.195027461836171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339692ab9103d1a9%3A0x3938c8dd14053707!2sClark%20Parade%20Grounds!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Clark+Parade+Grounds',
    },
    4: {
      name: 'Puning Hot Spring',
      location: 'Porac, Pampanga',
      description:
        'An extraordinary eco-adventure destination reached by 4x4 jeep through lahar canyons. It offers natural hot springs, therapeutic volcanic sand spas, and mud packs, providing a unique wellness experience born from volcanic history.',
      image: '../Pangpanga-Image/Places-4.jpg',
      time: '8:00 AM - 5:00 PM',
      highlights:
        '4x4 Off-Road Adventure, Natural Hot Springs, Volcanic Sand Spa, Lahar Canyon Scenery',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.1632731776595!2d120.48529227590757!3d15.20164676161109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33968d5b4724340b%3A0xee658c79be5a5369!2sPuning%20Hot%20Spring%20and%20Restaurant!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Puning+Hot+Spring+Porac',
    },
    5: {
      name: 'Aqua Planet',
      location: 'Clark Freeport, Pampanga',
      description:
        "One of the largest and most modern water parks in Southeast Asia. Boasting over 38 world-class slides and attractions, it is a high-tech recreational hub designed for safe, 'watermazing' fun for families and thrill-seekers alike.",
      image: '../Pangpanga-Image/Places-5.jpg',
      time: '10:00 AM - 4:00 PM',
      highlights:
        'Modern Water Slides, Wave Pools, Family Recreation, International Standard Park',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.6019567936554!2d120.49072237590809!3d15.223846660855663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396938e5854133b%3A0xc397a7a6627672f5!2sAqua%20Planet!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Aqua+Planet+Clark',
    },
    6: {
      name: 'Nayong Pilipino Clark',
      location: 'Clark Freeport Zone, Pampanga',
      description:
        'A cultural theme park showcasing the diverse heritage of the Philippines through scaled replicas of historical landmarks and traditional villages.',
      image: '../Pangpanga-Image/Places-6.jpg',
      time: '8:00 AM - 5:00 PM',
      highlights:
        'Cultural Heritage, Historical Replicas, Traditional Dance, Educational Park',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3848.241517031983!2d120.52737607590757!3d15.198544961715424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396933c605bd167%3A0x11b1c7f3cfbe96d6!2sNayong%20Pilipino%20Clark!5e0!3m2!1sen!2sph!4v1710000000000!5m2!1sen!2sph',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Nayong+Pilipino+Clark',
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
      name: 'Hon. Lilia G. Pineda',
      position: 'Governor of Pampanga',
      image: '../Pangpanga-Image/Governors-1.webp',
      bio: 'Known as "Nanay Baby," she leads the province with a focus on "Kalingang Kapampangan," prioritizing healthcare, social services, and the welfare of every Kapampangan family.',
      fb: 'https://www.facebook.com/PampangaPIO',
      xt: '#',
    },
    2: {
      name: 'Hon. Dennis G. Pineda',
      position: 'Vice Governor of Pampanga',
      image: '../Pangpanga-Image/Governors-2.webp',
      bio: 'Known as "Delta," he presides over the Sangguniang Panlalawigan and is a strong advocate for youth sports, disaster response, and provincial economic growth.',
      fb: 'https://www.facebook.com/PampangaPIO',
      xt: '#',
    },
    3: {
      name: 'Hon. Benjamin C. Jocson',
      position: '1st District Board Member',
      image: '../Pangpanga-Image/Governors-6.jpg',
      bio: 'Representing the 1st District, he focuses on legislative measures that support local infrastructure and community-based livelihood programs.',
      fb: '#',
      xt: '#',
    },
    4: {
      name: 'Hon. Mylyn Pineda-Cayabyab',
      position: '2nd District Board Member',
      image: '../Pangpanga-Image/Governors-7.jpg',
      bio: "A dedicated public servant for the 2nd District, she champions women's rights, maternal health, and sustainable tourism for the province.",
      fb: '#',
      xt: '#',
    },
    5: {
      name: 'Hon. Mica Gonzales',
      position: '3rd District Board Member',
      image: '../Pangpanga-Image/Governors-8.avif',
      bio: 'Representing the 3rd District, she focuses on education and social services, working to provide better opportunities for the youth and the elderly.',
      fb: '#',
      xt: '#',
    },
    6: {
      name: 'Hon. Carmelo B. Lazatin II',
      position: '1st District Representative',
      image: '../Pangpanga-Image/Governors-3.jpg',
      bio: 'Serves the 1st District in Congress, advocating for the continuous urban development and modernized public services in Angeles and Mabalacat.',
      fb: '#',
      xt: '#',
    },
    7: {
      name: 'Hon. Gloria Macapagal-Arroyo',
      position: '2nd District Representative',
      image: '../Pangpanga-Image/Governors-4.webp',
      bio: 'The former President of the Philippines, she now represents the 2nd District, bringing decades of executive experience to regional economic and social policy.',
      fb: '#',
      xt: '#',
    },
    8: {
      name: 'Hon. Aurelio D. Gonzales Jr.',
      position: '3rd District Representative',
      image: '../Pangpanga-Image/Governors-5.jpg',
      bio: 'Representing the 3rd District in the House of Representatives, he focuses on major infrastructure projects and accessible healthcare for his constituents.',
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
