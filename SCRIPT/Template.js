/* ===================================================
   SECTION 1: INTEGRATED & FIXED
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const escapeHTML = (value) =>
    value.replace(/[&<>"']/g, (char) => {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
      };
      return map[char] || char;
    });

  const cleanText = (value) => value.replace(/\s+/g, ' ').trim();

  const extractURLFromCSSValue = (value) => {
    if (!value) return '';
    const match = value.match(/url\((['"]?)(.*?)\1\)/i);
    return match && match[2] ? cleanText(match[2]) : '';
  };

  const extractPageText = (selectors, fallback = '') => {
    for (const selector of selectors) {
      const node = document.querySelector(selector);
      if (!node) continue;

      let value = '';
      if (node.tagName && node.tagName.toLowerCase() === 'meta') {
        value = node.getAttribute('content') || '';
      } else {
        value = node.textContent || '';
      }

      value = cleanText(value);
      if (value) return value;
    }
    return fallback;
  };

  const extractIntroImage = () => {
    const candidateSelectors = [
      '.slide.active .slide-bg',
      '.slide-1 .slide-bg',
      '.hero-slider .slide-bg',
      '.bg-layer.active',
      '.bg-layer',
      '.history-image',
      '.hero-image img',
      '.feature-image img',
      'main img',
      'img',
    ];

    for (const selector of candidateSelectors) {
      const node = document.querySelector(selector);
      if (!node) continue;

      const tagName = node.tagName ? node.tagName.toLowerCase() : '';
      if (tagName === 'img') {
        const src = cleanText(node.getAttribute('src') || '');
        if (src) return src;
      }

      const inlineURL = extractURLFromCSSValue(
        node.getAttribute('style') || '',
      );
      if (inlineURL) return inlineURL;

      const computedURL = extractURLFromCSSValue(
        window.getComputedStyle(node).backgroundImage || '',
      );
      if (computedURL) return computedURL;
    }

    return '';
  };

  const showPageIntro = () => {
    if (!document.body) return;
    if (document.querySelector('.home-wawawa')) return;
    if (document.querySelector('.page-intro-overlay')) return;

    const fallbackTitle = cleanText(document.title.split('|')[0] || 'Welcome');
    const eyebrow = extractPageText(
      ['.s1-label', '.location-tag', '.slide-subtitle', '.section-eyebrow'],
      'Welcome',
    );
    const titleText = extractPageText(
      ['.s1-title', '.slide.active .slide-title', '.slide-title', 'h1'],
      fallbackTitle,
    );
    let description = extractPageText(
      [
        '.s1-desc',
        '.slide.active .slide-desc',
        '.slide-desc',
        'meta[name="description"]',
      ],
      '',
    );

    if (description.length > 150) {
      description = `${description.slice(0, 147).trimEnd()}...`;
    }

    const titleWords = titleText.split(/\s+/).filter(Boolean).slice(0, 10);
    const wordsMarkup = titleWords.length
      ? titleWords
          .map(
            (word, index) =>
              `<span class="page-intro-word" style="--word-delay:${(0.45 + index * 0.12).toFixed(2)}s">${escapeHTML(word)}</span>`,
          )
          .join('')
      : `<span class="page-intro-word" style="--word-delay:0.45s">${escapeHTML(
          fallbackTitle,
        )}</span>`;

    const actionsMarkup = '';
    const introImage = extractIntroImage();
    const introVisualMarkup = introImage
      ? `<div class="page-intro-visual" aria-hidden="true"><img src="${escapeHTML(introImage)}" alt="" loading="eager" decoding="async"></div>`
      : '';

    const overlay = document.createElement('div');
    overlay.className = 'page-intro-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    overlay.innerHTML = `
      ${introVisualMarkup}
      <div class="page-intro-content">
        <p class="page-intro-eyebrow">${escapeHTML(eyebrow)}</p>
        <h1 class="page-intro-title">${wordsMarkup}</h1>
        ${description ? `<p class="page-intro-desc">${escapeHTML(description)}</p>` : ''}
        ${actionsMarkup ? `<div class="page-intro-actions" aria-hidden="true">${actionsMarkup}</div>` : ''}
      </div>
    `;

    document.body.classList.add('intro-lock');
    document.body.prepend(overlay);

    const removeIntro = () => {
      if (!overlay.isConnected) return;
      overlay.remove();
      document.body.classList.remove('intro-lock');
    };

    overlay.addEventListener('animationend', (event) => {
      if (event.animationName === 'pageIntroOverlayOut') removeIntro();
    });

    setTimeout(removeIntro, 8400);
  };

  showPageIntro();

  // Keep fullscreen/fixed overlays outside transformed sections so centering is reliable.
  const mountOverlayToBody = (id) => {
    const modal = document.getElementById(id);
    if (!modal || !document.body) return;
    if (modal.parentElement !== document.body) {
      document.body.appendChild(modal);
    }
  };

  ['touristModal', 'officialModal', 'modalOverlay', 'videoFullscreen'].forEach(
    mountOverlayToBody,
  );

  const updateClock = () => {
    const now = new Date();

    const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };

    const timeOptions = {
      hour: '2-digit',

      minute: '2-digit',

      second: '2-digit',

      hour12: true,
    };

    const dateEl = document.getElementById('live-date');

    const clockEl = document.getElementById('live-clock');

    if (dateEl)
      dateEl.textContent = now.toLocaleDateString('en-PH', dateOptions);

    if (clockEl)
      clockEl.textContent = now.toLocaleTimeString('en-PH', timeOptions);
  };

  setInterval(updateClock, 1000);

  updateClock();

  const header = document.querySelector('.main-navigation');
  const root = document.documentElement;

  //ahhhhhh start ytoqst kkkkkkk - responsive header/nav behavior
  const updateHeaderOffsets = () => {
    if (!root || !header) return;
    if (window.innerWidth > 980) {
      root.style.removeProperty('--utility-bar-height');
      root.style.removeProperty('--nav-height');
      return;
    }

    const topBar = document.querySelector('.top-utility-bar');
    const topHeight = topBar ? topBar.offsetHeight : 0;
    const navHeight = header.offsetHeight;
    root.style.setProperty('--utility-bar-height', `${topHeight}px`);
    root.style.setProperty('--nav-height', `${navHeight}px`);
  };

  const prefersClassNav = !!document.querySelector('.nav-toggle');

  const handleNavStyle = () => {
    if (!header) return;
    if (prefersClassNav) {
      header.classList.toggle('nav-scrolled', window.scrollY > 20);
      return;
    }

    if (window.scrollY > 20) {
      header.style.padding = '12px 8%';
      header.style.background = '#050505';
      header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    } else {
      header.style.padding = '20px 8%';
      header.style.background = 'rgba(5, 5, 5, 0.95)';
      header.style.boxShadow = 'none';
    }
  };

  window.addEventListener('scroll', handleNavStyle);
  window.addEventListener('scroll', updateHeaderOffsets);
  window.addEventListener('resize', updateHeaderOffsets);
  window.addEventListener('load', updateHeaderOffsets);
  window.addEventListener('orientationchange', () => {
    setTimeout(updateHeaderOffsets, 150);
  });

  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', updateHeaderOffsets);
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(updateHeaderOffsets).catch(() => {});
  }

  handleNavStyle();
  updateHeaderOffsets();
  setTimeout(updateHeaderOffsets, 250);
  setTimeout(updateHeaderOffsets, 900);

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const dropdownParent = document.querySelector('.has-dropdown');
  const navBackdrop = document.querySelector('.nav-backdrop');

  if (navMenu && !navMenu.querySelector('.nav-menu-brand')) {
    const sourceLogo = document.querySelector('.site-logo');
    if (sourceLogo) {
      const brandItem = document.createElement('li');
      brandItem.className = 'menu-item nav-menu-brand';
      brandItem.setAttribute('aria-hidden', 'true');
      brandItem.appendChild(sourceLogo.cloneNode(true));
      navMenu.prepend(brandItem);
    }
  }

  const dropdownList = document.querySelector('.dropdown-list');
  const dropdownTriggerLink = dropdownParent
    ? dropdownParent.querySelector('.link')
    : null;

  const setDropdownExpanded = (isExpanded, options = {}) => {
    const shouldBlur = !!options.blur;
    if (dropdownParent) {
      dropdownParent.classList.toggle('dropdown-open', isExpanded);
    }
    if (dropdownTriggerLink) {
      dropdownTriggerLink.setAttribute(
        'aria-expanded',
        isExpanded ? 'true' : 'false',
      );
      if (!isExpanded && shouldBlur) dropdownTriggerLink.blur();
    }
    if (dropdownList) {
      if (isExpanded) {
        dropdownList.style.display = 'block';
        dropdownList.style.opacity = '1';
        dropdownList.style.transform = 'translateY(0)';
      } else {
        dropdownList.style.removeProperty('display');
        dropdownList.style.removeProperty('opacity');
        dropdownList.style.removeProperty('transform');
      }
    }
  };

  const closeNav = () => {
    if (!header) return;
    header.classList.remove('nav-open');
    document.body.classList.remove('nav-locked');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
    if (navToggle) navToggle.classList.remove('is-active');
    setDropdownExpanded(false, { blur: true });
  };

  if (navToggle && header) {
    navToggle.addEventListener('click', () => {
      const isOpen = header.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navToggle.classList.toggle('is-active', isOpen);
      document.body.classList.toggle('nav-locked', isOpen);
      if (!isOpen) setDropdownExpanded(false);
    });
  }

  if (navToggle && navMenu) {
    navMenu.addEventListener('click', (event) => {
      const link = event.target.closest('a');
      if (!link) return;
      const isMobile = window.innerWidth <= 980;
      const dropdownTrigger = link.closest('.has-dropdown > .link');

      if (dropdownTrigger) {
        if (isMobile) {
          event.preventDefault();
          event.stopPropagation();
          const parentDropdown = dropdownTrigger.closest('.has-dropdown');
          const isExpanded =
            !parentDropdown.classList.contains('dropdown-open');
          setDropdownExpanded(isExpanded, { blur: !isExpanded });
        } else {
          event.preventDefault();
          const isExpanded =
            !dropdownParent.classList.contains('dropdown-open');
          setDropdownExpanded(isExpanded);
        }
        return;
      }

      if (isMobile) {
        closeNav();
      } else if (
        dropdownParent &&
        dropdownParent.classList.contains('dropdown-open')
      ) {
        setDropdownExpanded(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) {
        closeNav();
      }
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeNav();
    });
  }

  if (navBackdrop && navToggle) {
    navBackdrop.addEventListener('click', closeNav);
  }

  document.addEventListener('click', (event) => {
    if (window.innerWidth <= 980) return;
    if (!dropdownParent || !dropdownParent.classList.contains('dropdown-open'))
      return;
    if (dropdownParent.contains(event.target)) return;
    setDropdownExpanded(false);
  });

  const canUseHoverDropdown = window.matchMedia(
    '(hover: hover) and (pointer: fine)',
  ).matches;

  if (dropdownParent && dropdownList && canUseHoverDropdown) {
    dropdownParent.addEventListener('mouseenter', () => {
      if (window.innerWidth <= 980) return;
      if (dropdownParent.classList.contains('dropdown-open')) return;
      dropdownList.style.display = 'block';

      setTimeout(() => {
        dropdownList.style.opacity = '1';
        dropdownList.style.transform = 'translateY(0)';
      }, 10);
    });

    dropdownParent.addEventListener('mouseleave', () => {
      if (window.innerWidth <= 980) return;
      if (dropdownParent.classList.contains('dropdown-open')) return;
      dropdownList.style.opacity = '0';
      dropdownList.style.transform = 'translateY(15px)';

      setTimeout(() => {
        if (dropdownList.style.opacity === '0')
          dropdownList.style.display = 'none';
      }, 400);
    });
  }

  const slides = document.querySelectorAll('.slide');

  const dots = document.querySelectorAll('.dot');

  const prevBtn = document.querySelector('.control-prev');

  const nextBtn = document.querySelector('.control-next');

  let currentSlide = 0;

  let slideInterval;

  const intervalTime = 6000;

  const showSlide = (index) => {
    if (!slides.length) return;

    slides.forEach((slide) => slide.classList.remove('active'));

    dots.forEach((dot) => dot.classList.remove('active'));

    slides[index].classList.add('active');

    if (dots[index]) dots[index].classList.add('active');

    currentSlide = index;
  };

  const nextSlide = () => {
    let next = (currentSlide + 1) % slides.length;

    showSlide(next);
  };

  const prevSlide = () => {
    let prev = (currentSlide - 1 + slides.length) % slides.length;

    showSlide(prev);
  };

  const startTimer = () => {
    if (slides.length) slideInterval = setInterval(nextSlide, intervalTime);
  };

  const resetTimer = () => {
    clearInterval(slideInterval);

    startTimer();
  };

  if (nextBtn)
    nextBtn.addEventListener('click', () => {
      nextSlide();

      resetTimer();
    });

  if (prevBtn)
    prevBtn.addEventListener('click', () => {
      prevSlide();

      resetTimer();
    });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);

      resetTimer();
    });
  });

  startTimer();

  const historyElements = document.querySelectorAll(
    '.history-header, .history-period, .wiwiwi-header, .wiwiwi-period',
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');

          revealObserver.unobserve(entry.target);
        }
      });
    },

    { threshold: 0.25 },
  );

  historyElements.forEach((el, i) => {
    if (
      el.classList.contains('history-period') ||
      el.classList.contains('wiwiwi-period')
    ) {
      const idx = el.querySelector('.history-index, .wiwiwi-index');

      if (idx) idx.innerText = i.toString().padStart(2, '0');
    }

    revealObserver.observe(el);
  });
});

const animateNumbers = () => {
  const stats = document.querySelectorAll('.stat-val');

  stats.forEach((stat) => {
    const target = parseFloat(stat.innerText.replace(/,/g, ''));

    if (isNaN(target)) return;

    let count = 0;

    const speed = target / 100;

    const updateCount = () => {
      count += speed;

      if (count < target) {
        stat.innerText = Math.floor(count).toLocaleString();

        setTimeout(updateCount, 20);
      } else {
        stat.innerText =
          target.toLocaleString() + (stat.innerText.includes('M') ? 'M' : '');
      }
    };

    updateCount();
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const utilityBar = document.querySelector('.top-utility-bar');
  const navBar = document.querySelector('.main-navigation');
  const navItems = document.querySelectorAll('.nav-menu .menu-item');

  setTimeout(() => {
    if (utilityBar) utilityBar.classList.add('nav-visible');
    if (navBar) navBar.classList.add('nav-visible');

    navItems.forEach((item, index) => {
      setTimeout(
        () => {
          item.classList.add('link-visible');
        },
        150 * (index + 1),
      );
    });
  }, 200);

  const updateClock = () => {
    const now = new Date();
    const dateOptions = { month: 'long', day: 'numeric', year: 'numeric' };
    const timeOptions = {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    };

    const dateEl = document.getElementById('live-date');
    const clockEl = document.getElementById('live-clock');

    if (dateEl)
      dateEl.textContent = now.toLocaleDateString('en-PH', dateOptions);
    if (clockEl)
      clockEl.textContent = now.toLocaleTimeString('en-PH', timeOptions);
  };
  setInterval(updateClock, 1000);
  updateClock();
});

/* ===================================================
   SECTION 2:
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = { threshold: 0.2 };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(
    '.about-content, .stats-showcase',
  );

  revealElements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    revealObserver.observe(el);
  });
});

/* ===================================================
   SECTION 3
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const trackItems = document.querySelectorAll('.track-item');
  const bgLayers = document.querySelectorAll('.bg-layer');
  const contentBoxes = document.querySelectorAll('.content-box');

  const switchProvince = (provinceId) => {
    trackItems.forEach((item) => item.classList.remove('active'));
    bgLayers.forEach((layer) => layer.classList.remove('active'));
    contentBoxes.forEach((box) => box.classList.remove('active'));

    const activeTrack = document.querySelector(
      `.track-item[data-id="${provinceId}"]`,
    );
    const activeBG = document.getElementById(`bg-${provinceId}`);
    const activeContent = document.querySelector(
      `.content-box[data-content="${provinceId}"]`,
    );

    if (activeTrack) activeTrack.classList.add('active');
    if (activeBG) activeBG.classList.add('active');
    if (activeContent) activeContent.classList.add('active');
  };

  trackItems.forEach((item) => {
    item.addEventListener('click', () => {
      const id = item.getAttribute('data-id');
      switchProvince(id);
    });
  });

  const odysseySection = document.querySelector('.provincial-odyssey');
  if (odysseySection) {
    odysseySection.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const moveX = (clientX - centerX) * 0.02;
      const moveY = (clientY - centerY) * 0.02;

      const activeBG = document.querySelector('.bg-layer.active');
      if (activeBG) {
        activeBG.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`;
      }
    });
  }
});

/* ========= Animation Iyak ======== */

document.addEventListener('DOMContentLoaded', () => {
  const aboutSection = document.querySelector('.about-region-three');

  const aboutObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');

          const stats = entry.target.querySelectorAll('.stat-val');
          stats.forEach((stat) => {
            const targetStr = stat.innerText.replace(/,/g, '');
            const target = parseFloat(targetStr);

            if (!isNaN(target)) {
              let count = 0;
              const duration = 2000;
              const startTime = performance.now();

              const update = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const currentCount = progress * target;

                if (target % 1 !== 0) {
                  stat.innerText =
                    currentCount.toFixed(2) +
                    (targetStr.includes('M') ? 'M' : '');
                } else {
                  stat.innerText = Math.floor(currentCount).toLocaleString();
                }

                if (progress < 1) {
                  requestAnimationFrame(update);
                } else {
                  stat.innerText =
                    target.toLocaleString() +
                    (targetStr.includes('M') ? 'M' : '');
                }
              };
              requestAnimationFrame(update);
            }
          });

          aboutObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  if (aboutSection) {
    aboutObserver.observe(aboutSection);
  }
});

/* Section 3 iyak na ako ibahin natin to */

document.addEventListener('DOMContentLoaded', () => {
  const trackItems = document.querySelectorAll('.track-item');
  const bgLayers = document.querySelectorAll('.bg-layer');
  const contentBoxes = document.querySelectorAll('.content-box');

  const switchProvince = (id) => {
    bgLayers.forEach((layer) => layer.classList.remove('active'));
    contentBoxes.forEach((box) => box.classList.remove('active'));
    trackItems.forEach((item) => item.classList.remove('active'));

    const targetBg = document.getElementById(`bg-${id}`);
    const targetContent = document.querySelector(`[data-content="${id}"]`);
    const targetTrack = document.querySelector(`[data-id="${id}"]`);

    if (targetBg) targetBg.classList.add('active');
    if (targetContent) targetContent.classList.add('active');
    if (targetTrack) targetTrack.classList.add('active');
  };

  trackItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      const id = item.getAttribute('data-id');
      switchProvince(id);
    });
  });

  let currentAuto = 1;
  const autoCycle = () => {
    currentAuto = (currentAuto % 7) + 1;
    const id = currentAuto.toString().padStart(2, '0');
    switchProvince(id);
  };

  let cycleInterval = null;
  if (trackItems.length) {
    cycleInterval = setInterval(autoCycle, 6000);
  }

  const odysseySection = document.querySelector('.provincial-odyssey');
  if (odysseySection) {
    odysseySection.addEventListener('mouseenter', () => {
      if (cycleInterval) clearInterval(cycleInterval);
    });
    odysseySection.addEventListener('mouseleave', () => {
      if (trackItems.length) {
        cycleInterval = setInterval(autoCycle, 6000);
      }
    });
  }
});

/* ======== Section 4 Skibidi si Bazar ======= */

document.addEventListener('DOMContentLoaded', () => {
  const featureItems = document.querySelectorAll('.pulse-feature-item');

  const pulseObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          pulseObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    },
  );

  featureItems.forEach((item) => {
    pulseObserver.observe(item);
  });

  window.addEventListener('scroll', () => {
    const watermark = document.querySelector('.pulse-watermark');
    if (watermark) {
      const scrollValue = window.scrollY;
      watermark.style.transform = `translate(-50%, calc(-50% + ${scrollValue * 0.05}px))`;
    }
  });
});

/* ------  Section 5 Gutom na ako ------*/

document.addEventListener('DOMContentLoaded', () => {
  const eliteHeader = document.querySelector('.elite-header');
  const eliteRows = document.querySelectorAll('.elite-row');

  const historyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          historyObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 },
  );

  if (eliteHeader) historyObserver.observe(eliteHeader);

  eliteRows.forEach((row) => {
    historyObserver.observe(row);
  });
});

/* ====== Section Paa ======*/

document.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('.elite-footer');

  const footerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          footerObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  if (footer) footerObserver.observe(footer);

  const backToTop = document.querySelector('.elite-back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }
});

/* Animation for Province */

document.addEventListener('DOMContentLoaded', () => {
  const cultureObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const target = entry.target.querySelector('.header-reveal-logic');
        if (entry.isIntersecting) {
          target.classList.add('is-visible');
        } else {
          target.classList.remove('is-visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    },
  );

  const targetSection = document.querySelector('#culture');
  if (targetSection) cultureObserver.observe(targetSection);
});

/* Animation for the card Food section */

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px',
    },
  );

  document.querySelectorAll('.food-card').forEach((card) => {
    observer.observe(card);
  });
});

/* Animation for the festival intro */

document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.festival-intro-section-title');
  const text = title.textContent.trim();
  title.innerHTML = '';

  text.split('').forEach((char) => {
    const span = document.createElement('span');
    span.classList.add('letter');
    span.innerHTML = char === ' ' ? '&nbsp;' : char;
    title.appendChild(span);
  });

  const festivalObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const header = entry.target.querySelector('.festival-intro-header');
        const letters = entry.target.querySelectorAll('.letter');

        if (entry.isIntersecting) {
          header.classList.add('is-visible');
          letters.forEach((letter, index) => {
            setTimeout(
              () => {
                letter.classList.add('active');
              },
              300 + index * 40,
            );
          });
        } else {
          header.classList.remove('is-visible');
          letters.forEach((letter) => letter.classList.remove('active'));
        }
      });
    },
    { threshold: 0.2 },
  );

  const section = document.querySelector('#festival-section');
  if (section) festivalObserver.observe(section);
});

/* Animation for the festival Section */

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px',
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll(
    '.festival-feature-item, .festival-intro-header, .food-card, .header-reveal-logic',
  );

  animatedElements.forEach((el) => {
    scrollObserver.observe(el);
  });
});

/* Animation for the tourist intro */

document.addEventListener('DOMContentLoaded', () => {
  const introSection = document.querySelector('.simple-spot-intro');

  if (!introSection) return;

  const introObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px',
    },
  );

  introObserver.observe(introSection);
});

/* Animation for the tourist Section */

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px',
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, observerOptions);

  const targetElements = document.querySelectorAll(
    '.tourist-intro-header, .spot-card',
  );

  targetElements.forEach((el) => {
    scrollObserver.observe(el);
  });
});

/* Animation for the Governor intro */

function openTouristModal(id) {
  const modal = document.getElementById('touristModal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeTouristModal() {
  const modal = document.getElementById('touristModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

window.onclick = function (event) {
  const modal = document.getElementById('touristModal');
  if (event.target == modal) {
    closeTouristModal();
  }
};

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeTouristModal();
  }
});

/* intro animation for the governor */

document.addEventListener('DOMContentLoaded', () => {
  const govObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  const govSection = document.querySelector('.governor-odyssey-intro');
  if (govSection) {
    govObserver.observe(govSection);
  }
});

/* Animation for the governor Section */

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  }, observerOptions);

  const targets = [
    '.governor-odyssey-intro',
    '.officials-pyramid-bulacan-section .tourist-intro-header',
    '.pyramid-row',
  ];

  targets.forEach((selector) => {
    document
      .querySelectorAll(selector)
      .forEach((el) => scrollObserver.observe(el));
  });
});

// Official modal open/close handlers are provided by province-specific scripts.

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.tourist-intro-header');

  if (!header) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        } else {
          entry.target.classList.remove('is-visible');
        }
      });
    },
    {
      threshold: 0.2,
    },
  );

  observer.observe(header);
});

/* Animation for the Overview Section */

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  const sections = [
    '.overview-section',
    '.governor-odyssey-intro',
    '.officials-pyramid-bulacan-section',
    '.tourist-intro-header',
  ];

  sections.forEach((selector) => {
    const el = document.querySelector(selector);
    if (el) observer.observe(el);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const provLinks = document.querySelectorAll('.prov-nav-link');

  provLinks.forEach((link) => {
    link.addEventListener('click', function () {
      const targetId = this.getAttribute('data-id');
      const trackButton = document.querySelector(
        `.track-item[data-id="${targetId}"]`,
      );
      if (trackButton) {
        trackButton.click();
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const provLinks = document.querySelectorAll('.prov-nav-link');

  provLinks.forEach((link) => {
    link.addEventListener('click', function () {
      const targetId = this.getAttribute('data-id');
      const trackButton = document.querySelector(
        `.track-item[data-id="${targetId}"]`,
      );
      if (trackButton) {
        trackButton.click();
      }
    });
  });
});

/* Animation for intro page */

document.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.home-wawawa');
  const video = document.querySelector('.home-wawawa__video');

  if (video) {
    video.muted = true;
    video.setAttribute('playsinline', '');
    video.autoplay = true;
    video.preload = 'auto';

    const playVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {
          video.muted = true;
          video.play();
        });
      }
    };

    if (video.readyState >= 2) {
      playVideo();
    } else {
      video.addEventListener('loadeddata', playVideo, { once: true });
      video.addEventListener('canplay', playVideo, { once: true });
    }

    const manualTrigger = () => {
      if (video.paused) playVideo();
      ['click', 'touchstart', 'keydown'].forEach((e) =>
        document.removeEventListener(e, manualTrigger),
      );
    };

    ['click', 'touchstart', 'keydown'].forEach((e) =>
      document.addEventListener(e, manualTrigger),
    );
  }

  setTimeout(() => {
    if (intro) {
      intro.style.pointerEvents = 'none';
    }
  }, 3500);
});
