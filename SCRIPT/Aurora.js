const CuisineEngine = {
  data: [
    {
      id: 1,
      name: 'Suman de Baler',
      origin: 'Baler, Aurora',
      description:
        "Aurora's most iconic treat. Made from organic purple glutinous rice (diket), wrapped in coconut leaves, and steamed to perfection.",
      image: '../Aurura-Image/Foods-1.webp',
      video: '../Vedio/Aurua-Vedio/Card-2.mp4',
      sourceVideo: 'https://www.youtube.com/embed/tBwhEkdPv7M?si=ntPSCL5ffD13MjjD',
      prep: '45 Mins',
      cook: '45 Mins',
      servings: '12 Pax',
      ingredients: [
        '1kg Purple Glutinous Rice (Diket)',
        '2 cups Coconut milk',
        '1/2 cup White sugar',
        '1 tsp Salt',
        'Young coconut leaves',
      ],
      steps: [
        'Wash the purple rice and soak in water for at least 2 hours.',
        'Combine coconut milk, sugar, and salt in a pot; bring to a simmer.',
        'Add the rice and stir constantly until the liquid is fully absorbed.',
        'Wrap 2 tablespoons of the mixture tightly in coconut leaves.',
        'Steam the wrapped suman for 45-60 minutes until firm and aromatic.',
      ],
    },
    {
      id: 2,
      name: "Nanay Pacing's Peanut Butter",
      origin: 'Baler, Aurora',
      description:
        'A legendary Baler pasalubong. Unlike commercial versions, this is incredibly creamy, oily, and made with 100% local peanuts.',
      image: '../Aurura-Image/Foods-2.jpg',
      video: '../Vedio/Aurua-Vedio/Card-2.mp4',
      sourceVideo: 'https://www.youtube.com/embed/XlQfFKX8lKk?si=pez4rGtLCepvD_wa',
      prep: '20 Mins',
      cook: '25 Mins',
      servings: 'Bulk',
      ingredients: [
        '1kg Native Peanuts (shelled)',
        '1/2 cup Refined sugar',
        '1/4 cup Coconut oil',
        '1/2 tsp Sea salt',
      ],
      steps: [
        'Toast the peanuts in a dry pan over low heat until golden brown.',
        'Remove the skins by rubbing the nuts together and winnowing.',
        'Grind the peanuts using a heavy-duty grinder until they release oil.',
        'Mix in the sugar, salt, and coconut oil until perfectly smooth.',
      ],
    },
    {
      id: 3,
      name: 'Pacific Lobster (Adobo Style)',
      origin: 'Casiguran / Dingalan',
      description:
        'Freshly caught from the rocky Pacific coast, these lobsters are prized for their sweet, firm meat.',
      image: '../Aurura-Image/Foods-3.jpg',
      video: '../Vedio/Aurua-Vedio/Card-3.mp4',
      sourceVideo: 'https://www.youtube.com/embed/iwnaW5aPktk?si=SNb91iVThPKQ3KLU',
      prep: '15 Mins',
      cook: '15 Mins',
      servings: '2 Pax',
      ingredients: [
        '2 Large Pacific Lobsters',
        '1/2 cup Butter',
        '5 cloves Garlic (minced)',
        '1/4 cup Sprite or 7-Up',
        'Salt and Pepper',
      ],
      steps: [
        'Clean the lobsters and split them lengthwise.',
        'Melt butter in a large wok and sauté minced garlic until fragrant.',
        'Place lobsters in the pan and pour soda to steam the meat.',
        'Cover and cook for 8-10 minutes until shells turn bright orange.',
        'Season with salt and pepper, then baste with garlic butter sauce.',
      ],
    },
    {
      id: 4,
      name: 'Ensaladang Pako',
      origin: 'Maria Aurora',
      description:
        'A refreshing salad featuring edible river ferns gathered from the foothills of the Sierra Madre.',
      image: '../Aurura-Image/Foods-4.jpg',
      video: '../Vedio/Aurua-Vedio/Card-4.mp4',
      sourceVideo: 'https://www.youtube.com/embed/CAv0T78bx_s?si=-es2u8lRFYDLMccS',
      prep: '15 Mins',
      cook: 'N/A',
      servings: '4 Pax',
      ingredients: [
        '3 bunches Fresh Pako',
        '2 Salted eggs (sliced)',
        '3 Tomatoes (wedged)',
        '1 Red onion (slivered)',
        'Vinegar dressing with honey',
      ],
      steps: [
        'Blanch pako tips in boiling water for 30 seconds, then shock in ice water.',
        'Drain the ferns thoroughly and place them in a large salad bowl.',
        'Top with salted eggs, tomatoes, and onions.',
        'Drizzle with vinegar dressing right before serving to keep it crisp.',
      ],
    },
    {
      id: 5,
      name: 'Ginataang Alimasag',
      origin: 'Dipaculao, Aurora',
      description:
        "Blue crabs simmered in rich coconut milk, highlighting Aurora's ocean and coconut bounties.",
      image: '../Aurura-Image/Foods-5.png',
      video: '../Vedio/Aurua-Vedio/Card-5.mp4',
      sourceVideo: 'https://www.youtube.com/embed/XMHfpgm4El4?si=VRi1At70yoV4476f',
      prep: '20 Mins',
      cook: '20 Mins',
      servings: '4 Pax',
      ingredients: [
        '1kg Fresh Crabs (Alimasag)',
        '3 cups Coconut milk',
        '1 tbsp Ginger',
        '2 cups Squash (cubed)',
        'Long beans (Sitaw)',
      ],
      steps: [
        'Sauté ginger, garlic, and onions in a pot.',
        'Pour in the coconut milk and bring to a gentle boil.',
        'Add the squash and cook until slightly soft.',
        'Add crabs and sitaw; simmer until sauce thickens and crabs turn orange.',
        'Season with patis and siling haba.',
      ],
    },
    {
      id: 6,
      name: 'Aurora Coco Jam',
      origin: 'San Luis, Aurora',
      description:
        'A dark, rich spread made from pure coconut cream and muscovado sugar, a staple pairing for Suman.',
      image: '../Aurura-Image/Foods-6.jpg',
      video: '../Vedio/Aurua-Vedio/Card-6.mp4',
      sourceVideo: 'https://www.youtube.com/embed/9REdjlSSqMI?si=AuDEnPCQSCt5Yg9S',
      prep: '10 Mins',
      cook: '50 Mins',
      servings: 'Bulk',
      ingredients: [
        '4 cups Coconut cream',
        '2 cups Muscovado sugar',
        'A pinch of salt',
      ],
      steps: [
        'Combine coconut cream and muscovado sugar in a heavy-bottomed pan.',
        'Stir constantly over medium-low heat to prevent burning.',
        'Continue simmering until the mixture becomes thick and shiny.',
        'Cool completely before storing in glass jars.',
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
      fsVideo.src = mainVideo.src;
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

    const videoPlayer = document.getElementById('modalVideo');
    videoPlayer.src = food.video;
    videoPlayer.load();

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
      if (fsVideo) {
        fsVideo.pause();
        fsVideo.src = '';
      }
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
      name: 'Sabang Beach',
      location: 'Baler, Aurora',
      description:
        'The birthplace of Philippine surfing. With its long shoreline and consistent gray-sand waves, it is the perfect playground for both beginners and professional surfers.',
      image: '../Aurura-Image/Places-1.jpg',
      time: 'Open 24/7 (Surfing: 6AM - 6PM)',
      highlights: 'Surfing Lessons, Sunrise Views, Boardwalk Strolls',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.23456789!2d121.5645!3d15.7589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390036666666667%3A0x6666666666666666!2sSabang%20Beach!5e0!3m2!1sen!2sph!4v1700000000000',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Sabang+Beach+Baler+Aurora',
    },
    2: {
      name: 'Ditumabo Mother Falls',
      location: 'San Luis, Aurora',
      description:
        'Standing at 140 feet, this is the largest waterfall in Aurora. The trek involves crossing rivers and rocky paths, leading to a massive, cold basin perfect for swimming.',
      image: '../Aurura-Image/Places-2.jpg',
      time: '7:00 AM - 4:00 PM',
      highlights: 'Eco-Trek, 140ft Drop, Hydroelectric Plant Walk',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.44444444!2d121.4888!3d15.7333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33900123456789ab%3A0xabcdef1234567890!2sDitumabo%20Mother%20Falls!5e0!3m2!1sen!2sph!4v1700000000001',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Ditumabo+Mother+Falls+Aurora',
    },
    3: {
      name: 'Diguisit Rock Formations',
      location: 'Baler, Aurora',
      description:
        'Jagged rock islets carved by the fierce Pacific waves over centuries. These formations provide a dramatic backdrop for photography and exploring marine life in tide pools.',
      image: '../Aurura-Image/Places-3.jpeg',
      time: '6:00 AM - 6:00 PM',
      highlights: 'Aniao Islets, Photography, Low-tide Exploration',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.11111111!2d121.6055!3d15.7666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33900123456789cd%3A0xabcdef1234567891!2sDiguisit%20Rocks!5e0!3m2!1sen!2sph!4v1700000000002',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Diguisit+Rocks+Aurora',
    },
    4: {
      name: 'Millennium Tree (Balete)',
      location: 'Maria Aurora, Aurora',
      description:
        'A 600-year-old giant Balete tree, known as the largest in Asia. Visitors can actually climb through its massive exposed roots and explore the hollow center.',
      image: '../Aurura-Image/Places-4.jpg',
      time: '8:00 AM - 5:00 PM',
      highlights: 'Inside-Tree Trek, 600-Year-Old Roots, Souvenirs',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.99999999!2d121.4666!3d15.7999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33900123456789ef%3A0xabcdef1234567892!2sMillennium%20Tree!5e0!3m2!1sen!2sph!4v1700000000003',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Millennium+Tree+Aurora',
    },
    5: {
      name: 'Ermita Hill',
      location: 'Baler, Aurora',
      description:
        "The highest point in Baler, serving as a sanctuary during the 'Tromba Marina' (tsunami) of 1735. It offers a breathtaking view of Baler Bay and the Pacific Ocean.",
      image: '../Aurura-Image/Places-5.jpg',
      time: '6:00 AM - 7:00 PM',
      highlights: 'Scenic Overlook, Historic Statue, Nature Park',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.22222222!2d121.5833!3d15.7500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33900123456789gh%3A0xabcdef1234567893!2sErmita%20Hill!5e0!3m2!1sen!2sph!4v1700000000004',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Ermita+Hill+Baler',
    },
    6: {
      name: 'Dingalan Viewpoint',
      location: 'Dingalan, Aurora',
      description:
        'Often called the Batanes of the East, this viewpoint features rolling green hills that drop sharply into the crashing blue waves of the Pacific.',
      image: '../Aurura-Image/Places-6.jpg',
      time: '5:00 AM Departure Recommended',
      highlights: 'Mountain Ridge View, Boat Ride, White Beach',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.55555555!2d121.4000!3d15.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33900123456789ij%3A0xabcdef1234567894!2sDingalan%20Feeder%20Port!5e0!3m2!1sen!2sph!4v1700000000005',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Dingalan+Aurora',
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
      name: 'Hon. Isidro P. Galban',
      position: 'Governor of Aurora',
      image: '../Aurura-Image/Politician-1.jpg',
      bio: 'Hon. Isidro P. Galban leads the province of Aurora with a dedicated focus on sustainable agriculture and the protection of the Sierra Madre mountain range. His administration prioritizes grassroots development and ensuring that Aurora remains a premier eco-tourism destination while uplifting the lives of every Auroran.',
      fb: 'https://facebook.com/governorisidrogalban',
      xt: '#',
    },
    2: {
      name: 'Hon. Jennifer A. Araña',
      position: 'Vice Governor',
      image: '../Aurura-Image/Politician-2.jpg',
      bio: 'Hon. Jennifer A. Araña serves as the Vice Governor and presiding officer of the Sangguniang Panlalawigan. She is a champion of legislative measures that promote social justice, youth development, and women’s empowerment across the eight municipalities of Aurora.',
      fb: 'https://facebook.com/vicegovjenniferarana',
      xt: '#',
    },
    3: {
      name: 'Hon. San Pedro M. Ong, Jr.',
      position: '1st District Board Member',
      image: '../Aurura-Image/politician-4.jpg',
      bio: 'Hon. San Pedro M. Ong, Jr. represents the 1st District with a commitment to enhancing local infrastructure and agricultural productivity. He works closely with local farmers to ensure sustainable livelihoods and improved market access for Aurora’s produce.',
      fb: '#',
      xt: '#',
    },
    4: {
      name: 'Hon. Philippe Jacobson A. Galban',
      position: '1st District Board Member',
      image: '../Aurura-Image/Politician-5.jpg',
      bio: 'Hon. Philippe Jacobson A. Galban is an active advocate for modernizing public services and integrating technology into local governance. His initiatives focus on digital literacy for the youth and improving the efficiency of provincial administrative processes.',
      fb: '#',
      xt: '#',
    },
    5: {
      name: 'Hon. Mariano C. Tangson',
      position: '1st District Board Member',
      image: '../Aurura-Image/Politician-6.jpg',
      bio: 'Hon. Mariano C. Tangson utilizes his extensive experience in public service to focus on peace, order, and disaster risk reduction. He is dedicated to making Aurora a resilient province capable of facing the challenges of the Pacific climate.',
      fb: '#',
      xt: '#',
    },
    6: {
      name: 'Hon. Rommel T. Angara',
      position: 'Lone District Representative',
      image: '../Aurura-Image/Politician-3.jpg',
      bio: 'Hon. Rommel Rico T. Angara represents the Lone District of Aurora in the House of Representatives. Carrying on a legacy of service, his legislative agenda focuses on national funding for Aurora’s infrastructure, the expansion of the tourism sector, and the preservation of the province’s cultural heritage.',
      fb: 'https://facebook.com/rommel.angara',
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
