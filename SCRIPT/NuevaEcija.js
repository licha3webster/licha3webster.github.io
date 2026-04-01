const CuisineEngine = {
  data: [
    {
      id: 1,
      name: 'Cabanatuan Longganisa',
      origin: 'Cabanatuan City',
      description:
        'Famous for its sweet (hamonado) or savory (batutay) varieties, this beef-based sausage is a breakfast staple in the region.',
      image: '../nueva-ecija-image/longganisa.jpg',
      video: '../Vedio/Neuva ecija/Card-1.mp4',
      sourceVideo: 'https://www.youtube.com/embed/FFTGEygt3lg?si=CLv2_O4Tg06WHREY',
      prep: '30 Mins',
      cook: '30 Mins',
      servings: '6 Pax',
      ingredients: [
        '1kg Ground Beef',
        '1/2 cup Garlic (minced)',
        '1/4 cup Soy sauce',
        '2 tbsp Brown sugar',
        '1 tsp Black pepper',
      ],
      steps: [
        'In a large bowl, combine ground beef, minced garlic, soy sauce, sugar, and pepper.',
        'Mix thoroughly and let it marinate in the refrigerator for at least 4 hours.',
        'Stuff the mixture into casings or form into skinless links.',
        'Fry in a small amount of water and oil until the natural fats come out.',
      ],
    },
    {
      id: 2,
      name: 'Carabao Milk Products',
      origin: 'Talavera, Cabiao, and Muñoz',
      description:
        'Nueva Ecija is the "Milk Capital of the Philippines." Fresh carabao milk is transformed into pastillas, kesong puti, and creamy ice cream.',
      image: '../nueva-ecija-image/keso.png',
      video: '../Vedio/Neuva ecija/Card-2.mp4',
      sourceVideo: 'https://www.youtube.com/embed/-a7MCYUVI7k?si=RCextLZSsb7BdTph',
      prep: '15 Mins',
      cook: '15 Mins',
      servings: '4 Pax',
      ingredients: [
        '2 Liters Fresh Carabao Milk',
        '1/2 cup Vinegar (for Kesong Puti)',
        'Salt to taste',
        'Sugar (for Pastillas)',
      ],
      steps: [
        'For Kesong Puti: Heat the milk in a pot but do not let it boil.',
        'Slowly add vinegar while stirring gently until curds form.',
        'Strain the curds using a cheesecloth and add salt.',
        'Press into molds and let it cool until firm.',
      ],
    },
    {
      id: 3,
      name: 'Sinampalukang Kambing',
      origin: 'San Leonardo and Muñoz',
      description:
        'A savory goat stew soured with young tamarind leaves, known for its tender meat and aromatic broth.',
      image: '../nueva-ecija-image/kambing.jpg',
      video: '../Vedio/Neuva ecija/Card-3.mp4',
      sourceVideo: 'https://www.youtube.com/embed/KFrBuZH73po?si=Q91qn682OJXWkLXY',
      prep: '20 Mins',
      cook: '45 Mins',
      servings: '5 Pax',
      ingredients: [
        '1kg Goat meat (chopped)',
        '2 cups Young tamarind leaves',
        'Ginger, Garlic, and Onions',
        'Fish sauce (Patis)',
        'Siling haba (Green chili)',
      ],
      steps: [
        'Sauté ginger, garlic, and onions in a large pot.',
        'Add the goat meat and cook until lightly browned.',
        'Pour in water and simmer until the meat is tender.',
        'Add the tamarind leaves and chilies. Simmer for another 5 minutes.',
      ],
    },
    {
      id: 4,
      name: 'Pancit Cuyapo',
      origin: 'Cuyapo',
      description:
        'A local variation of pancit with a unique blend of spices and topped with generous helpings of vegetables and meat.',
      image: '../nueva-ecija-image/cuyapo.jpg',
      video: '../Vedio/Neuva ecija/Card-3.mp4',
      sourceVideo: 'https://www.youtube.com/embed/39oZPRLkblo?si=VuD7lxSQ4Mhs8jL7',
      prep: '20 Mins',
      cook: '30 Mins',
      servings: 'Bulk',
      ingredients: [
        '500g Pancit noodles',
        'Pork slices',
        'Cabbage and Carrots',
        'Soy sauce and Calamansi',
        'Pork broth',
      ],
      steps: [
        'Sauté garlic and onions, then add pork slices until cooked.',
        'Add vegetables and stir-fry briefly. Remove and set aside.',
        'In the same pan, pour pork broth and soy sauce. Bring to a boil.',
        'Add noodles and cook until liquid is absorbed. Mix back the vegetables.',
      ],
    },
    {
      id: 5,
      name: 'Alibangbang Soup',
      origin: 'Minalungao, Nueva Ecija',
      description:
        'A unique Sinigang style dish that uses Alibangbang (Butterfly) leaves as a natural souring agent.',
      image: '../nueva-ecija-image/alibangbang.jpg',
      video: '../Vedio/Neuva ecija/Card-6.mp4',
      sourceVideo: 'https://www.youtube.com/embed/xhk26fgwMDc?si=Rnhy_q6mXkLUeL4a',
      prep: '15 Mins',
      cook: '25 Mins',
      servings: '4 Pax',
      ingredients: [
        '1kg Pork ribs',
        '2 cups Fresh Alibangbang leaves',
        'Tomatoes and Onions',
        'Taro (Gabi)',
        'Water',
      ],
      steps: [
        'Boil pork ribs with onions, tomatoes, and gabi until meat is tender.',
        'Add the Alibangbang leaves to provide the natural sour flavor.',
        'Simmer until the leaves are soft and the broth is slightly thickened.',
        'Adjust salt or patis to taste before serving.',
      ],
    },
    {
      id: 6,
      name: 'Kakanin (Rice Cakes)',
      origin: 'San Jose, Peñaranda, and San Antonio',
      description:
        'Sweet delicacies made from glutinous rice, often topped with latik or toasted coconut.',
      image: '../nueva-ecija-image/kakanin.jpg',
      video: '../Vedio/Neuva ecija/Card-6.mp4',
      sourceVideo: 'https://www.youtube.com/embed/7AgCj2VgvQ4?si=2MbqSA9Q4sTKJp5B',
      prep: '15 Mins',
      cook: '20 Mins',
      servings: '8 Pax',
      ingredients: [
        '2 cups Glutinous rice flour',
        '1 cup Coconut milk',
        '1/2 cup Sugar',
        'Latik for topping',
      ],
      steps: [
        'Mix rice flour, coconut milk, and sugar until a thick batter forms.',
        'Pour into steamed molds lined with banana leaves.',
        'Steam for 20-30 minutes until a toothpick comes out clean.',
        'Top with latik or grated coconut while warm.',
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
      name: 'Pantabangan Lake',
      location: 'Pantabangan, Nueva Ecija',
      description:
        'A vast reservoir and recreational area perfect for water sports, fishing, and camping. The lake offers stunning views of the surrounding mountains and is one of the largest man-made lakes in the Philippines.',
      image: '../nueva-ecija-image/pantabangan.jpg',
      time: 'Open Daily',
      highlights: 'Water Sports, Fishing, Mountain Views, Camping',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.234567890!2d121.1448!3d15.8018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1234567890%3A0xabcdef1234567890!2sPantabangan+Lake!5e0!3m2!1sen!2sph!4v1620000000000',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Pantabangan+Lake+Nueva+Ecija',
    },
    2: {
      name: 'Minalungao National Park',
      location: 'Gen. Tinio, Nueva Ecija',
      description:
        'A stunning national park featuring limestone cliffs, crystal-clear rivers, and lush greenery. It is a favorite destination for cliff diving, swimming, and nature trekking.',
      image: '../nueva-ecija-image/minalungao.jpg',
      time: '6:00 AM - 5:00 PM',
      highlights: 'Cliff Diving, River Swimming, Limestone Cliffs, Trekking',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.345678901!2d121.0833!3d15.6500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b9999999999%3A0xbbbbbbbbbbbbbbbb!2sMinalungao+National+Park!5e0!3m2!1sen!2sph!4v1620000000001',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Minalungao+National+Park+General+Tinio+Nueva+Ecija',
    },
    3: {
      name: 'Cabanatuan War Memorial',
      location: 'Cabanatuan City, Nueva Ecija',
      description:
        'A historic memorial dedicated to Filipino and American prisoners of war who suffered during World War II. The site honors the brave soldiers and serves as a reminder of the sacrifices made during the war.',
      image: '../nueva-ecija-image/park.jpg',
      time: '8:00 AM - 5:00 PM',
      highlights: 'War Memorials, Historic Monuments, POW Camp Site',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.000000000!2d120.9700!3d15.4800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cccccccccccc%3A0xdddddddddddddddd!2sCabanatuan+War+Memorial!5e0!3m2!1sen!2sph!4v1620000000002',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Cabanatuan+War+Memorial+Nueva+Ecija',
    },
    4: {
      name: 'PhilRice Complex',
      location: 'Science City of Muñoz, Nueva Ecija',
      description:
        "The Philippine Rice Research Institute is the country's premier rice research center. Visitors can explore rice varieties, research facilities, and learn about modern rice farming technologies.",
      image: '../nueva-ecija-image/philrice.jpg',
      time: '8:00 AM - 5:00 PM',
      highlights: 'Rice Museum, Research Farms, Educational Tours',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.111111111!2d120.9055!3d15.7188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397eeeeeeeeeeee%3A0xffffffffffffffff!2sPhilRice!5e0!3m2!1sen!2sph!4v1620000000003',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=PhilRice+Science+City+of+Munoz+Nueva+Ecija',
    },
    5: {
      name: 'Gapan Heritage Church',
      location: 'Gapan City, Nueva Ecija',
      description:
        'A centuries-old Catholic church known for its rich historical and cultural heritage. The church features stunning Spanish colonial architecture and is one of the oldest landmarks in Nueva Ecija.',
      image: '../nueva-ecija-Image/gapan.jpg',
      time: 'Open Daily',
      highlights:
        'Spanish Colonial Architecture, Heritage Site, Cultural Landmark',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.555555555!2d120.9455!3d15.3088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397aaaaaaaaaaa%3A0xbbbbbbbbbbbbbbb!2sGapan+Heritage+Church!5e0!3m2!1sen!2sph!4v1620000000004',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Gapan+Heritage+Church+Nueva+Ecija',
    },
    6: {
      name: 'Laur Ecotourism Park',
      location: 'Laur, Nueva Ecija',
      description:
        'A nature-based ecotourism destination offering trekking trails, wildlife spotting, and immersive forest experiences. It is a haven for nature lovers seeking adventure and relaxation away from the city.',
      image: '../nueva-ecija-image/laur.jpg',
      time: '7:00 AM - 5:00 PM',
      highlights: 'Trekking, Wildlife Spotting, Forest Trails, Eco-Adventure',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123015.42959767343!2d121.11271271563906!3d15.525679417648957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397346e05bf5d69%3A0x8bc33d54fa3c6acb!2sLaur%2C%20Nueva%20Ecija!5e0!3m2!1sen!2sph!4v1774596311029!5m2!1sen!2sph" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Laur+Ecotourism+Park+Nueva+Ecija',
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
      name: 'Hon. Aurelio M. Umali',
      position: 'Governor of Nueva Ecija',
      image: '../nueva-ecija-image/auyrelioo .jpg',
      bio: 'Serves as Governor of Nueva Ecija, focusing on agricultural modernization and inclusive development.',
      fb: '#',
      xt: '#',
    },
    2: {
      name: 'Hon. Emmanuel Antonio M. Umali',
      position: 'Vice Governor of Nueva Ecija',
      image: '../nueva-ecija-image/emannuel.jpg',
      bio: 'Presides over the Sangguniang Panlalawigan and supports legislative measures for the province.',
      fb: '#',
      xt: '#',
    },

    3: {
      name: 'Hon. Belinda E. Palilio',
      position: '1st District Board Member',
      image: '../nueva-ecija-image/belindaa.png',
      bio: 'Board Member representing the 1st District, advocating for infrastructure and community welfare.',
      fb: '#',
      xt: '#',
    },
    4: {
      name: 'Hon. Jason J. Abalos',
      position: '2nd District Board Member',
      image: '../nueva-ecija-image/jasoon.png',
      bio: 'Focuses on social development and public service programs in the 2nd District.',
      fb: '#',
      xt: '#',
    },
    5: {
      name: 'Hon. Eric Daniel F. Salazar',
      position: '2nd District Board Member',
      image: '../nueva-ecija-image/salazaar.png',
      bio: 'Serves as Board Member for the 2nd District, championing growth and community initiatives.',
      fb: '#',
      xt: '#',
    },

    6: {
      name: 'Hon. Mikaela Angela B. Suansing',
      position: '1st District Representative',
      image: '../nueva-ecija-image/mikaela.jpg',
      bio: 'Represents the 1st District in Congress with focus on agriculture and public services.',
      fb: '#',
      xt: '#',
    },
    7: {
      name: 'Hon. Estrellita B. Suansing',
      position: '2nd District Representative',
      image: '../nueva-ecija-image/estrellita.jpg',
      bio: 'Serves as the Representative of the 2nd District, advocating education and economic development.',
      fb: '#',
      xt: '#',
    },
    8: {
      name: 'Hon. Rosanna "Ria" Vergara',
      position: '3rd District Representative',
      image: '../nueva-ecija-image/vergara.jpg',
      bio: 'Represents the 3rd District in Congress, focusing on healthcare and local programs.',
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
