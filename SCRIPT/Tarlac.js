const CuisineEngine = {
  data: [
    {
      id: 1,
      name: 'Iniruban',
      origin: 'Camiling, Tarlac',
      description:
        'A centerpiece of Tarlac’s heritage, this "pounded green rice" is harvested early and toasted, offering a smoky, chewy delicacy unique to the region.',
      image: '../Tarlac-image/Foods-1.jpg',
      video: '../Vedio/Tarlac/Card-3.mp4',
      sourceVideo: 'https://www.youtube.com/embed/NddSURdVOX4?si=o_h50z7RA-jS-066',
      prep: '1 Hr',
      cook: '1 Hr',
      servings: '6 Pax',
      ingredients: [
        '4 cups Young green rice grains',
        '2 cups Coconut milk',
        '1 cup Tagapulot (Molasses)',
        'Banana leaves (wilted)',
      ],
      steps: [
        'Toast the young green rice in a clay pot until the husks start to pop and the aroma is released.',
        'Pound the toasted grains in a wooden mortar (lusong) until flattened and the husks are removed.',
        'Simmer coconut milk and molasses in a pan until it reaches a thick, syrupy consistency.',
        'Incorporate the pounded rice into the syrup, stirring constantly until the mixture is thick and sticky.',
        'Serve on banana leaves and enjoy while warm.',
      ],
    },
    {
      id: 2,
      name: 'Chicharon Camiling',
      origin: 'Camiling, Tarlac',
      description:
        'Famous for its "bagnet-style" preparation, this chicharon is known for a heavy meat-to-fat ratio and a skin that stays crunchy for days.',
      image: '../Tarlac-image/foods-2.jpg',
      video: '../Vedio/Tarlac/Card-3.mp4',
      sourceVideo: 'https://www.youtube.com/embed/qRwfXynYrgY?si=vUqXhaAjXX_qTfTA',
      prep: '1 Hr',
      cook: '3 Hrs',
      servings: '10 Pax',
      ingredients: [
        '2kg Pork Belly (Liempo slabs)',
        '4 tbsp Rock salt',
        '2 tbsp Whole peppercorns',
        'Cooking oil for deep frying',
      ],
      steps: [
        'Boil the pork in seasoned water until the skin is tender but not falling apart.',
        'Remove from liquid and air-dry thoroughly; prick the skin with a fork to create "bubbles" during frying.',
        'Perform the "First Fry" at a lower temperature to cook the meat and render the fat.',
        'Let the meat rest and cool completely to ensure maximum crunch.',
        'Perform the "Second Fry" at high heat until the skin puffs up and turns golden brown.',
      ],
    },
    {
      id: 3,
      name: 'Tarlac Tupig',
      origin: 'Moncada, Tarlac',
      description:
        'A beloved roadside snack made of glutinous rice and coconut, charcoal-grilled in banana leaves to create a smoky, sweet flavor.',
      image: '../Tarlac-image/foods-3.jpg',
      video: '../Vedio/Tarlac/Card-3.mp4',
      sourceVideo: 'https://www.youtube.com/embed/P1qrrEA7dWw?si=03a8Bq94ZbY9O05m',
      prep: '30 Mins',
      cook: '1 Hr',
      servings: '15 Pax',
      ingredients: [
        '1kg Glutinous rice flour',
        '2 cups Shredded young coconut',
        '1.5 cups Muscovado sugar',
        '1 cup Coconut milk',
      ],
      steps: [
        'Mix the rice flour, coconut milk, shredded coconut, and sugar into a thick, uniform batter.',
        'Scoop 2 tablespoons of the mixture onto a wilted banana leaf and roll it into a thin cylinder.',
        'Fold the ends of the leaf to seal the mixture inside.',
        'Place the rolls over a charcoal grill, turning frequently to prevent burning.',
        'Grill until the banana leaves are charred and the rice cake inside is firm and sweet.',
      ],
    },
    {
      id: 4,
      name: 'Tarlac Pigar-Pigar',
      origin: 'Tarlac City',
      description:
        'A savory stir-fry adaptation featuring flash-fried thin beef slices served with a mountain of fresh white onions and crunchy cabbage.',
      image: '../Tarlac-image/foods-4.jpg',
      video: '../Vedio/Tarlac/Card-5.mp4',
      sourceVideo: 'https://www.youtube.com/embed/Dbez1gr7bZk?si=njNd0CdhJ-EdUcDw',
      prep: '15 Mins',
      cook: '30 Mins',
      servings: '4 Pax',
      ingredients: [
        '500g Beef sirloin (thinly sliced)',
        '200g Beef liver (optional)',
        '4 large White onions (rings)',
        '1/2 head Cabbage (chopped)',
        'Salt and black pepper',
      ],
      steps: [
        'Quickly deep-fry the beef slices in hot oil until they are browned and slightly crisp on the edges.',
        'Add the liver during the last 2 minutes of frying to keep it tender.',
        'Remove excess oil and toss in the onions and cabbage.',
        'Sauté for just 1-2 minutes—the vegetables should remain crisp.',
        'Season generously with salt and pepper and serve with a soy-calamansi dip.',
      ],
    },
    {
      id: 5,
      name: 'Victoria Kalamay',
      origin: 'Victoria, Tarlac',
      description:
        'A sticky rice cake tradition from Victoria, recognized for its smooth, elastic texture and rich coconut curd topping.',
      image: '../Tarlac-image/food-5.jpg',
      video: '../Vedio/Tarlac/Card-5.mp4',
      sourceVideo: 'https://www.youtube.com/embed/7AgCj2VgvQ4?si=5fW_hHja5gIJDo66',
      prep: '20 Mins',
      cook: '2 Hrs 40 Mins',
      servings: '20 Pax',
      ingredients: [
        '1kg Glutinous rice flour',
        '4 cups Fresh coconut milk',
        '2 cups Brown sugar',
        'Latik (coconut curd) topping',
      ],
      steps: [
        'Combine rice flour and coconut milk in a large vat, stirring until no lumps remain.',
        'Add brown sugar and place over low heat.',
        'Stir the mixture continuously for several hours until it becomes very thick and heavy.',
        'Spread the cooked kalamay onto a tray lined with oiled banana leaves.',
        'Top with freshly made latik and allow it to cool and set before slicing.',
      ],
    },
    {
      id: 6,
      name: 'Bagnet ni Abel',
      origin: 'Tarlac (Ilocano Influence)',
      description:
        'Tarlac’s version of the deep-fried pork classic, representing the Ilocano migrants who helped shape the province’s diverse landscape.',
      image: '../Tarlac-image/foods-6.jpg',
      video: '../Vedio/Tarlac/Card-5.mp4',
      sourceVideo: 'https://www.youtube.com/embed/X0WdCfuUURI?si=EXes0vHv_-Lx0Y-c',
      prep: '30 Mins',
      cook: '3 Hrs',
      servings: '8 Pax',
      ingredients: [
        '1.5kg Whole pork slab',
        '1 head Garlic',
        '2 tbsp Salt',
        '1 tbsp Peppercorns',
        'Bagoong for dipping',
      ],
      steps: [
        'Simmer the pork with garlic, salt, and peppercorns until the meat is tender.',
        'Drain the meat and dry it thoroughly to ensure the skin puffs correctly.',
        'Deep fry at medium heat for the first round to cook the interior.',
        'Let the pork rest until it reaches room temperature.',
        'Deep fry at high heat for the second round until the skin is blistered and golden.',
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
      name: 'Monasterio de Tarlac',
      location: 'San Jose, Tarlac',
      description:
        'A popular pilgrimage site perched atop Mount Resurrection, this monastery houses the only authenticated relic of the True Cross of Jesus Christ in Asia. It offers a serene atmosphere and a breathtaking panoramic view of the lush mountains of Tarlac.',
      image: '../Tarlac-image/places-1.jpg',
      time: 'Open Daily, 7:00 AM - 6:00 PM',
      highlights:
        'Relic of the True Cross, Mountain Views, Religious Pilgrimage, Peaceful Gardens',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.23456789!2d120.4!3d15.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396c!2sMonasterio%20de%20Tarlac!5e0!3m2!1sen!2sph!4v123456789',
      navUrl: 'https://maps.google.com/?q=Monasterio+de+Tarlac',
    },
    2: {
      name: 'Mount Pinatubo Crater',
      location: 'Capas, Tarlac',
      description:
        'Accessed through a thrilling 4x4 jeep ride across the Crow Valley lahar fields, the crater of Mt. Pinatubo features a stunning turquoise lake. It is a world-famous destination for adventure seekers and nature lovers witnessing the beauty born from a historic eruption.',
      image: '../Tarlac-image/places-2.jpg',
      time: 'Tours start 5:00 AM - 8:00 AM',
      highlights:
        '4x4 Off-Road Adventure, Crater Lake, Volcanic Landscapes, Hiking, Crow Valley',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844!2d120.35!3d15.13!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396!2sMount%20Pinatubo!5e0!3m2!1sen!2sph!4v123456789',
      navUrl: 'https://maps.google.com/?q=Mount+Pinatubo+Cratert',
    },
    3: {
      name: 'Capas National Shrine',
      location: 'Capas, Tarlac',
      description:
        'A poignant memorial dedicated to the Filipino and American soldiers who suffered during the Bataan Death March. Its centerpiece is a 70-meter obelisk that stands as a symbol of heroism, sacrifice, and the enduring quest for freedom.',
      image: '../Tarlac-image/places-3.jpg',
      time: '8:00 AM - 5:00 PM',
      highlights:
        '70-meter Obelisk, Wall of Heroes, Bataan Death March History, Memorial Park',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844!2d120.6!3d15.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396!2sCapas%20National%20Shrine!5e0!3m2!1sen!2sph!4v123456789',
      navUrl: 'https://maps.google.com/?q=Capas+National+Shrine',
    },
    4: {
      name: 'Kart City Tarlac (KCT)',
      location: 'Tarlac City, Tarlac',
      description:
        'A world-class go-karting facility located right in the heart of Tarlac City. It offers a professional-grade track for racing enthusiasts and a vibrant complex with restaurants, making it a favorite spot for family bonding and late-night hangouts.',
      image: '../Tarlac-image/places-4.jpg',
      time: '3:00 PM - 12:00 AM',
      highlights:
        'Go-Kart Racing, Professional Track, Fine Dining, Family Entertainment, Nightlife',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844!2d120.59!3d15.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396!2sKart%20City%20Tarlac!5e0!3m2!1sen!2sph!4v123456789',
      navUrl: 'https://maps.google.com/?q=Kart+City+Tarlac',
    },
    5: {
      name: 'Anzap Twin Falls',
      location: 'Mayantoc, Tarlac',
      description:
        'Hidden within the "Summer Capital of Tarlac," the Anzap Twin Falls offers a refreshing escape for trekkers. The falls drop from a massive rock wall into a cool, natural pool surrounded by the pristine forests of Mayantoc.',
      image: '../Tarlac-image/places-5.webp',
      time: '6:00 AM - 4:00 PM',
      highlights:
        'Twin Waterfalls, Nature Trekking, Natural Swimming Pool, Eco-Tourism',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844!2d120.3!3d15.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396!2sAnzap%20Falls!5e0!3m2!1sen!2sph!4v123456789',
      navUrl: 'https://maps.google.com/?q=Anzap+Twin+Falls+Mayantoc',
    },
    6: {
      name: 'Tarlac Recreational Park',
      location: 'San Jose, Tarlac',
      description:
        'A 78-hectare sports and adventure complex that hosted the Palarong Pambansa. It features facilities for swimming, kayaking, mountain biking, and even an ATV track, making it the ultimate destination for sports lovers and active families.',
      image: '../Tarlac-image/places-6.jpg',
      time: '8:00 AM - 5:00 PM',
      highlights:
        'Olympic-sized Pool, Kayaking, ATV Rides, Mountain Biking Trails, Picnic Areas',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844!2d120.45!3d15.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396!2sTarlac%20Recreational%20Park!5e0!3m2!1sen!2sph!4v123456789',
      navUrl: 'https://maps.google.com/?q=Tarlac+Recreational+Park',
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
      name: 'Hon. Susan A. Yap',
      position: 'Governor of Tarlac',
      image: '../Tarlac-image/Governors-1.jpg',
      bio: "Serves as the Governor of Tarlac, spearheading the province's digital transformation and sustainable development. Under her leadership, Tarlac continues to grow as a hub for industry and a center for agricultural innovation.",
      fb: '#',
      xt: '#',
    },
    2: {
      name: 'Hon. Carlito S. David',
      position: 'Vice Governor of Tarlac',
      image: '../Tarlac-image/Governors-2.jpg',
      bio: 'The presiding officer of the Sangguniang Panlalawigan. He focuses on legislative measures that empower local communities and ensure transparent governance across all municipalities in Tarlac.',
      fb: '#',
      xt: '#',
    },
    3: {
      name: 'Hon. Romeo P. Evangelista Jr.',
      position: '1st District Board Member',
      image: '../Tarlac-image/Governors-6.jpg',
      bio: 'Represents the 1st District in the Provincial Board, advocating for enhanced local infrastructure, educational support, and youth development programs.',
      fb: '#',
      xt: '#',
    },
    4: {
      name: 'Hon. Harmes S. Sembrano',
      position: '2nd District Board Member',
      image: '../Tarlac-image/Governors-7.jpg',
      bio: 'A dedicated public servant representing the 2nd District, focusing on healthcare accessibility, social welfare initiatives, and economic opportunities for his constituents.',
      fb: '#',
      xt: '#',
    },
    5: {
      name: 'Hon. Danilo C. Asiaten',
      position: '3rd District Board Member',
      image: '../Tarlac-image/Governors-8.jpg',
      bio: 'Board Member for the 3rd District, championing environmental protection, agricultural sustainability, and community-based livelihood programs.',
      fb: '#',
      xt: '#',
    },
    6: {
      name: 'Hon. Jaime D. Cojuangco',
      position: '1st Congressional District Representative',
      image: '../Tarlac-image/Governors-3.jpg',
      bio: 'Represents the 1st District of Tarlac in the House of Representatives. His legislative agenda focuses on agricultural modernization, rural electrification, and quality education.',
      fb: '#',
      xt: '#',
    },
    7: {
      name: 'Hon. Christian Tell A. Yap',
      position: '2nd Congressional District Representative',
      image: '../Tarlac-image/Governors-4.png',
      bio: 'Represents the 2nd District in Congress, advocating for national policies that support local industry, labor rights, and the continuous progress of Tarlac.',
      fb: '#',
      xt: '#',
    },
    8: {
      name: 'Hon. Noel N. Rivera',
      position: '3rd Congressional District Representative',
      image: '../Tarlac-image/Governors-5.jpg',
      bio: 'The voice of the 3rd District in the House of Representatives, prioritizing infrastructure connectivity, socialized housing, and public health reforms.',
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
