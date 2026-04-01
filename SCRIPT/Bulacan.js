const CuisineEngine = {
  data: [
    {
      id: 1,
      name: 'Empanada de Kaliskis',
      origin: 'Malolos, Bulacan',
      description:
        'A century-old recipe characterized by its flaky, "scale-like" crust, usually filled with chicken or pork, potatoes, and spices.',
      image: '../Bulacan-Images/empanada.jpg',
      video: '../Vedio/Bulucan-Vedio/Card-1.mp4',
      sourceVideo: 'https://www.youtube.com/embed/MLWGNBktMow?si=5tsWVUqvl2mmMGAw',
      prep: '45 Mins',
      cook: '45 Mins',
      servings: '10 Pax',
      ingredients: [
        '2 cups All-purpose flour',
        '1/2 cup Butter or lard',
        '1/2 cup Cold water',
        '250g Chicken or Pork (diced)',
        '1 cup Potatoes (diced)',
        'Salt, pepper, and spices to taste',
      ],
      steps: [
        'Make the flaky crust by cutting cold butter into flour until crumbly. Add cold water gradually and mix until dough forms. Chill for 30 minutes.',
        'Sauté garlic and onions, then add diced chicken or pork. Cook until browned.',
        'Add potatoes and season with salt, pepper, and spices. Cook until potatoes are tender. Let the filling cool.',
        'Roll out the dough and cut into circles. Place filling in the center, fold over, and crimp the edges to create the scale-like pattern.',
        'Bake at 180°C for 25–30 minutes or until golden brown.',
      ],
    },
    {
      id: 2,
      name: 'Asado de Carajay',
      origin: 'Bulacan',
      description:
        'A savory, slow-cooked pork dish using a technique that results in rich, tender meat, often considered a celebratory dish in Bulacan heritage.',
      image: '../Bulacan-Images/asado.jpg',
      video: '../Vedio/Bulucan-Vedio/Card-2.mp4',
      sourceVideo: 'https://www.youtube.com/embed/fJw5KLW0gRw?si=xjInCI_k4uNlsiLg',
      prep: '20 Mins',
      cook: '2 Hrs',
      servings: '8 Pax',
      ingredients: [
        '1kg Pork belly or shoulder',
        '1/4 cup Soy sauce',
        '1/4 cup Vinegar',
        '1 head Garlic (crushed)',
        '2 tbsp Brown sugar',
        'Bay leaves and black pepper',
      ],
      steps: [
        'Marinate pork in soy sauce, vinegar, garlic, sugar, bay leaves, and pepper for at least 1 hour.',
        'Place pork and marinade in a carajay (wok) over medium heat. Bring to a boil.',
        'Lower heat and slow-cook, turning pork occasionally, until liquid is reduced and pork is tender.',
        'Continue cooking until the sauce thickens and caramelizes around the meat.',
        'Slice and serve with steamed rice.',
      ],
    },
    {
      id: 3,
      name: 'Pork Chicharon',
      origin: 'Bocaue, Bulacan',
      description:
        'Famous for its extreme crunch, often packed with meat ("laman") and fat ("taba"), making it a quintessential pasalubong (souvenir).',
      image: '../Bulacan-Images/chicharon.jpg',
      video: '../Vedio/Bulucan-Vedio/Card-4.mp4',
      sourceVideo: 'https://www.youtube.com/embed/qRwfXynYrgY?si=glovCumCrYDzJHTv',
      prep: '30 Mins',
      cook: '2 Hrs 30 Mins',
      servings: '8 Pax',
      ingredients: [
        '1kg Pork skin with meat and fat',
        'Salt to taste',
        'Water for boiling',
        'Oil for deep frying',
      ],
      steps: [
        'Boil pork skin in salted water until tender, about 45 minutes to 1 hour.',
        'Drain and let it dry completely — ideally sun-dry for several hours or overnight.',
        'Cut into desired pieces and season with salt.',
        'Deep fry in hot oil until the skin puffs up and turns golden and extremely crunchy.',
        'Drain on paper towels and let cool before serving or packing as pasalubong.',
      ],
    },
    {
      id: 4,
      name: 'Pastillas de Leche',
      origin: 'San Miguel, Bulacan',
      description:
        "Sweet confections made from carabao's milk, traditionally wrapped in intricate, hand-cut paper (borlas de pastillas).",
      image: '../Bulacan-Images/pastillas.jpg',
      video: '../Vedio/Bulucan-Vedio/Card-4.mp4',
      sourceVideo: 'https://www.youtube.com/embed/L0IE6TzHMA0?si=Agq1xyqSyHBet4n0',
      prep: '20 Mins',
      cook: '25 Mins',
      servings: '12 Pax',
      ingredients: [
        '2 cups Carabao milk (or fresh whole milk)',
        '1 cup Sugar',
        '1/2 cup Milk powder',
        'Sugar for rolling',
      ],
      steps: [
        'Combine fresh milk and sugar in a pan over low heat. Stir continuously.',
        'Add milk powder and keep stirring until the mixture thickens and pulls away from the sides of the pan.',
        'Remove from heat and let cool until handleable.',
        'Roll into small logs and coat generously with granulated sugar.',
        'Wrap individually in decorative hand-cut paper (borlas) to serve in the traditional style.',
      ],
    },
    {
      id: 5,
      name: 'Inipit',
      origin: 'Bulacan',
      description:
        'A soft, custard-filled chiffon sandwich most famously from Eurobake, whose name translates to "pressed" in Tagalog.',
      image: '../Bulacan-Images/inipit.jpg',
      video: '../Vedio/Bulucan-Vedio/Card-5.mp4',
      sourceVideo: 'https://www.youtube.com/embed/F2jA7XNMlSQ?si=7UW_lHbOjuHZKAY3',
      prep: '30 Mins',
      cook: '30 Mins',
      servings: '12 Pax',
      ingredients: [
        '1 cup Cake flour',
        '6 Eggs (separated)',
        '1/2 cup Sugar',
        '1/4 cup Oil',
        '1/4 cup Milk',
        '1 cup Custard cream filling',
      ],
      steps: [
        'Beat egg yolks with sugar, oil, and milk until combined. Fold in sifted cake flour.',
        'In a separate bowl, whip egg whites until stiff peaks form. Gently fold into the batter.',
        'Pour into a lined baking pan and bake at 170°C for 25–30 minutes. Let cool completely.',
        'Slice the chiffon cake horizontally into two thin layers.',
        'Spread custard filling generously on one layer, press the other layer on top, and cut into squares.',
      ],
    },
    {
      id: 6,
      name: 'Sukang Paombong',
      origin: 'Paombong, Bulacan',
      description:
        'A natural, fermented vinegar made from nipa sap, providing a distinct tangy flavor to local cuisine.',
      image: '../Bulacan-Images/SUKA.jpg',
      video: '../Vedio/Bulucan-Vedio/Card-6.mp4',
      sourceVideo: 'https://www.youtube.com/embed/Pn-QpwA3Dn8?si=J_HzdFmmAHcyRsW0',
      prep: 'Fermented',
      cook: 'N/A',
      servings: 'Condiment',
      ingredients: [
        'Fresh nipa palm sap (tuba)',
        'Natural fermentation vessels',
        'Time (several weeks for fermentation)',
      ],
      steps: [
        'Collect fresh sap from nipa palm trees early in the morning.',
        'Transfer the sap into clay pots or fermentation vessels.',
        'Allow the sap to naturally ferment over several weeks, exposed to open air.',
        'Once the desired sourness is achieved, filter and bottle the vinegar.',
        'Use as a dipping sauce, marinade, or flavor enhancer in traditional Bulacan dishes.',
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
    const videoElement = document.getElementById('modalVideo');

    this.currentMediaIndex = (this.currentMediaIndex + direction + 2) % 2;
    track.style.transform = `translateX(-${this.currentMediaIndex * 50}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentMediaIndex);
    });

    if (this.currentMediaIndex === 0 && videoElement) {
      videoElement.pause();
    } else if (this.currentMediaIndex === 1 && videoElement) {
      videoElement.play();
    }
  },

  toggleVideoExpansion(e) {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const fsOverlay = document.getElementById('videoFullscreen');
    const fsPlayer = document.getElementById('fullscreenVideoPlayer');
    const modalVideo = document.getElementById('modalVideo');

    if (!fsOverlay.classList.contains('active')) {
      fsPlayer.currentTime = modalVideo.currentTime;
      fsOverlay.style.display = 'flex';
      requestAnimationFrame(() => {
        fsOverlay.classList.add('active');
        fsPlayer.play();
        modalVideo.pause();
      });
    } else {
      modalVideo.currentTime = fsPlayer.currentTime;
      fsOverlay.classList.remove('active');
      setTimeout(() => {
        fsOverlay.style.display = 'none';
        fsPlayer.pause();
        if (this.currentMediaIndex === 1) modalVideo.play();
      }, 400);
    }
  },

  openModal(id) {
    const food = this.data.find((f) => f.id === id);
    if (!food) return;

    this.currentMediaIndex = 0;
    document.getElementById('mediaTrack').style.transform = 'translateX(0%)';
    document
      .querySelectorAll('.media-indicator .dot')
      .forEach((dot, i) => dot.classList.toggle('active', i === 0));

    document.getElementById('modalImage').src = food.image;

    const vPlayer = document.getElementById('modalVideo');
    const fPlayer = document.getElementById('fullscreenVideoPlayer');
    vPlayer.src = food.video;
    fPlayer.src = food.video;
    vPlayer.load();
    fPlayer.load();

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
    document.getElementById('modalVideo').pause();
    document.getElementById('fullscreenVideoPlayer').pause();
    overlay.classList.remove('active');
    setTimeout(() => {
      overlay.style.display = 'none';
      document.body.style.overflow = 'auto';
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
      name: 'Barasoain Church',
      location: 'Malolos City, Bulacan',
      description:
        'One of the most historically significant churches in the Philippines, Barasoain Church served as the site of the First Philippine Congress in 1898 and the drafting of the Malolos Constitution. It is a National Cultural Treasure and a proud symbol of Filipino democracy.',
      image: '../Bulacan-Images/church.jpg',
      time: 'Open Daily, 6:00 AM - 6:00 PM',
      highlights:
        'Historical Landmark, National Cultural Treasure, Colonial Architecture, Philippine Revolution Site',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.1!2d120.8134!3d14.8433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0e2e2e2e2e3%3A0xbarasoain!2sBarasoain+Church!5e0!3m2!1sen!2sph!4v1620000000010',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Barasoain+Church+Malolos+Bulacan',
    },
    2: {
      name: 'Biak-na-Bato National Park',
      location: 'San Miguel, Bulacan',
      description:
        'A protected national park renowned for its vast cave systems, rocky limestone formations, and lush forest. It is historically significant as the site where Emilio Aguinaldo and his revolutionaries took refuge during the Philippine Revolution.',
      image: '../Bulacan-Images/biak-na-bato.jpg',
      time: '8:00 AM - 5:00 PM',
      highlights:
        'Cave Exploration, Limestone Formations, Historical Site, Nature Trekking, River Swimming',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.2!2d121.0833!3d15.1200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397biaknabato%3A0xbiaknabato!2sBiak-na-Bato+National+Park!5e0!3m2!1sen!2sph!4v1620000000011',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Biak-na-Bato+National+Park+San+Miguel+Bulacan',
    },
    3: {
      name: 'Philippine Arena',
      location: 'Bocaue / Santa Maria, Bulacan',
      description:
        'The largest indoor arena in the world, with a seating capacity of over 55,000. Built by Iglesia ni Cristo, this architectural marvel hosts major religious gatherings, concerts, and sporting events, and is a testament to Filipino engineering excellence.',
      image: '../Bulacan-Images/ph-arena.jpg',
      time: 'Event-Based Schedule',
      highlights:
        "World's Largest Indoor Arena, Architectural Marvel, Major Events Venue, Engineering Wonder",
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.5!2d120.9400!3d14.7900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397philippinearena%3A0xphilippinearena!2sPhilippine+Arena!5e0!3m2!1sen!2sph!4v1620000000012',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Philippine+Arena+Bocaue+Bulacan',
    },
    4: {
      name: 'Mount Manalmon',
      location: 'San Miguel, Bulacan',
      description:
        'A scenic mountain nestled within the Biak-na-Bato National Park, offering adventurers challenging trails, breathtaking views, and a rich biodiversity of flora and fauna. It is a favorite destination for hikers and nature enthusiasts.',
      image: '../Bulacan-Images/mt..jpg',
      time: '6:00 AM - 4:00 PM',
      highlights:
        'Mountain Hiking, Scenic Views, Biodiversity, Adventure Trekking, Nature Photography',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.8!2d121.0900!3d15.1300!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397mountmanalmon%3A0xmountmanalmon!2sMount+Manalmon!5e0!3m2!1sen!2sph!4v1620000000013',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Mount+Manalmon+San+Miguel+Bulacan',
    },
    5: {
      name: 'Pinagrealan Cave',
      location: 'Norzagaray, Bulacan',
      description:
        "An impressive cave system featuring stunning stalactite and stalagmite formations, underground rivers, and cathedral-like chambers. It is one of Bulacan's hidden natural gems, perfect for spelunking and adventure seekers.",
      image: '../Bulacan-Images/pinagrealan.jpg',
      time: '8:00 AM - 5:00 PM',
      highlights:
        'Spelunking, Stalactite & Stalagmite Formations, Underground River, Cave Photography',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.3!2d121.0500!3d14.9800!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397pinagrealancave%3A0xpinagrealancave!2sPinagrealan+Cave!5e0!3m2!1sen!2sph!4v1620000000014',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=Pinagrealan+Cave+Norzagaray+Bulacan',
    },
    6: {
      name: 'San Rafael River Adventure',
      location: 'San Rafael, Bulacan',
      description:
        'A premier eco-adventure park along the Angat River offering thrilling white-water rafting, kayaking, and riverside camping. It is one of the most exciting outdoor destinations in Central Luzon, perfect for families and adventure groups.',
      image: '../Bulacan-Images/san-rafael.jpg',
      time: '7:00 AM - 5:00 PM',
      highlights:
        'White-Water Rafting, Kayaking, Riverside Camping, Eco-Adventure, Family Activities',
      mapSrc:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3857.9!2d121.0200!3d14.9600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397sanrafaelriver%3A0xsanrafaelriver!2sSan+Rafael+River+Adventure!5e0!3m2!1sen!2sph!4v1620000000015',
      navUrl:
        'https://www.google.com/maps/dir/?api=1&destination=San+Rafael+River+Adventure+Bulacan',
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
      name: 'Hon. Daniel Fernando',
      position: 'Governor of Bulacan',
      image: '../Bulacan-Images/alexis.png',
      bio: 'Serves as the Governor of Bulacan, leading the province toward sustainable development, infrastructure growth, and improved public services for all Bulaceños.',
      fb: '#',
      xt: '#',
    },
    2: {
      name: 'Hon. Alexis C. Castro',
      position: 'Vice Governor of Bulacan',
      image: '../Bulacan-Images/daniel.png',
      bio: 'Presides over the Sangguniang Panlalawigan of Bulacan and supports key legislative measures aimed at provincial progress and community welfare.',
      fb: '#',
      xt: '#',
    },
    3: {
      name: 'Hon. Lee Edward Nicolas',
      position: '2nd Congressional District Board Member',
      image: '../Bulacan-Images/lee.png',
      bio: 'Serves as Board Member for the 2nd Congressional District, championing infrastructure development and community-centered legislation.',
      fb: '#',
      xt: '#',
    },
    4: {
      name: 'Hon. Raul A. Mariano',
      position: '3rd Congressional District Board Member',
      image: '../Bulacan-Images/raul.png',
      bio: 'Represents the 3rd Congressional District in the Sangguniang Panlalawigan, focusing on agriculture, livelihood programs, and local governance.',
      fb: '#',
      xt: '#',
    },
    5: {
      name: 'Hon. Romeo V. Castro Jr.',
      position: '3rd Congressional District Board Member',
      image: '../Bulacan-Images/romeo.png',
      bio: 'Board Member for the 3rd Congressional District, dedicated to public safety, social welfare, and grassroots development initiatives.',
      fb: '#',
      xt: '#',
    },
    6: {
      name: 'Hon. Michael M. Aquino',
      position: '1st Congressional District Representative',
      image: '../Bulacan-Images/michael.png',
      bio: 'Represents the 1st Congressional District of Bulacan in the House of Representatives, advocating for education, infrastructure, and economic opportunities.',
      fb: '#',
      xt: '#',
    },
    7: {
      name: 'Hon. Romina D. Fermin',
      position: '1st Congressional District Representative',
      image: '../Bulacan-Images/romina.png',
      bio: "Co-represents the 1st Congressional District, focusing on health, women's rights, and social development programs for constituents.",
      fb: '#',
      xt: '#',
    },
    8: {
      name: 'Hon. Erlene Luz V. Dela Cruz',
      position: '2nd Congressional District Representative',
      image: '../Bulacan-Images/erlene.png',
      bio: 'Represents the 2nd Congressional District in Congress, championing economic reform, environmental protection, and inclusive growth for Bulacan.',
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
