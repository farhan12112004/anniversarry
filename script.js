document.addEventListener("DOMContentLoaded", function () {
  // Set anniversary date (YYYY, MM-1, DD)
  const anniversaryDate = new Date(2024, 4, 9); // May 9, 2023 (month is 0-indexed)
  const today = new Date();

  // Set current year in footer
  const currentYearElement = document.getElementById("current-year");
  if (currentYearElement) {
    currentYearElement.textContent = today.getFullYear();
  }

  // Calculate years together
  let yearsTogether = today.getFullYear() - anniversaryDate.getFullYear();
  if (
    today.getMonth() < anniversaryDate.getMonth() ||
    (today.getMonth() === anniversaryDate.getMonth() &&
      today.getDate() < anniversaryDate.getDate())
  ) {
    yearsTogether--;
  }
  const yearsTogetherElement = document.getElementById("years-together");
  if (yearsTogetherElement) {
    yearsTogetherElement.textContent = yearsTogether;
  }

  // Countdown timer
  function updateCountdown() {
    const now = new Date();
    let nextAnniversary = new Date(
      now.getFullYear(),
      anniversaryDate.getMonth(),
      anniversaryDate.getDate()
    );

    if (now > nextAnniversary) {
      nextAnniversary = new Date(
        now.getFullYear() + 1,
        anniversaryDate.getMonth(),
        anniversaryDate.getDate()
      );
    }

    const diff = nextAnniversary - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");
    const secondsElement = document.getElementById("seconds");

    if (daysElement) {
      daysElement.textContent = days.toString().padStart(2, "0");
    }
    if (hoursElement) {
      hoursElement.textContent = hours.toString().padStart(2, "0");
    }
    if (minutesElement) {
      minutesElement.textContent = minutes.toString().padStart(2, "0");
    }
    if (secondsElement) {
      secondsElement.textContent = seconds.toString().padStart(2, "0");
    }
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  // Create confetti
  function createConfetti() {
    const colors = ["#f472b6", "#ec4899", "#db2777", "#f9a8d4", "#fbcfe8"];
    const confettiContainer = document.getElementById("confetti-container");

    if (!confettiContainer) return;

    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.style.position = "absolute";
      confetti.style.width = Math.random() * 10 + 5 + "px";
      confetti.style.height = Math.random() * 10 + 5 + "px";
      confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.top = -10 + "px";
      confetti.style.opacity = Math.random();
      confetti.style.transform = "rotate(" + Math.random() * 360 + "deg)";
      confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";

      const animationDuration = Math.random() * 3 + 5;
      confetti.style.animation = `falling ${animationDuration}s linear infinite`;

      confettiContainer.appendChild(confetti);

      // Add falling animation
      const keyframes = `
                @keyframes falling {
                    to {
                        transform: translateY(100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `;

      const styleElement = document.createElement("style");
      styleElement.innerHTML = keyframes;
      document.head.appendChild(styleElement);
    }
  }

  createConfetti();

  // Photo gallery
  const photos = [
    {
      url: "img/firstDate.jpg",
      caption: "Our First Date",
    },
    {
      url: "img/bicycle.Date.jpg",
      caption: "Bicycle Date",
    },
    {
      url: "img/swimmingDate.jpg",
      caption: "Swimming Date",
    },
    {
      url: "img/yourBirthday.jpg",
      caption: "Your Birthday",
    },
    {
      url: "img/mountain.jpg",
      caption: "Mountain Date",
    },
    {
      url: "img/myBirthday.jpg",
      caption: "My Birthday",
    },
    {
      url: "img/mountainDate.jpg",
      caption: "Mountain Date",
    },
    {
      url: "img/RunningDate.jpg",
      caption: "Running Date",
    },
    {
      url: "img/newYearDate.jpg",
      caption: "New Year Date",
    },
    {
      url: "img/lakeSideDate.jpg",
      caption: "Lakeside Date",
    },
    {
      url: "img/iceCreamDate.jpg",
      caption: "Ice Cream Date",
    },
    {
      url: "img/rawrStyle.jpg",
      caption: "Rawr Style",
    },
    {
      url: "img/ourEidMubarrak.jpg",
      caption: "Our Eid Mubarrak",
    },
    {
      url: "img/cafeDate.jpg",
      caption: "Cafe Date",
    },
    {
      url: "img/udonDate.jpg",
      caption: "",
    },
    {
      url: "img/reddogDate.jpg",
      caption: "",
    },
    {
      url: "img/mirrorStyle.jpg",
      caption: "Mirror Style",
    },
    {
      url: "img/flower.jpg",
      caption: "",
    },
    {
      url: "img/ourEyes.jpg",
      caption: "Our Eyes",
    },
    {
      url: "img/haircutDate.jpg",
      caption: "Haircut Date",
    },
  ];

  const gallery = document.querySelector(
    ".grid.grid-cols-1.md\\:grid-cols-3.gap-8"
  );
  if (gallery) {
    photos.forEach((photo) => {
      const photoItem = document.createElement("div");
      photoItem.className =
        "photo-frame w-60 mx-auto rounded-xl overflow-hidden bg-white transform transition-all duration-500 hover:shadow-xl";

      photoItem.innerHTML = `
        <div class="relative group mx-auto w-full">
          <div class="aspect-[9/16] w-full overflow-hidden rounded-xl">
            <img src="${photo.url}" alt="${photo.caption}" 
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 style="animation: float 4s ease-in-out infinite;">
          </div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <p class="text-white text-sm font-medium">${photo.caption}</p>
          </div>
        </div>
      `;

      gallery.appendChild(photoItem);
    });
  }

  // Anniversary messages
  const messages = [
    "Every moment with you feels like a beautiful dream I never want to wake up from. You've filled my life with so much joy and love that I can't imagine a day without you by my side.",
    "In your arms, I've found my home. In your eyes, I've found my peace. In your heart, I've found my forever. Thank you for being my everything.",
    "They say love grows with time, and with each passing day, I fall in love with you all over again. You're my greatest adventure and my safest harbor.",
    "If I had to choose between loving you and breathing, I would use my last breath to say 'I love you'. You are the reason my heart beats and my soul sings.",
    "A thousand memories, a million laughs, countless hugs - and yet it feels like we've only just begun. I can't wait to create a lifetime more with you.",
  ];

  let currentMessage = 0;
  const messageElement = document.getElementById("anniversary-message");
  if (messageElement) {
    messageElement.textContent = messages[currentMessage];
    messageElement.style.transition = "opacity 0.8s ease";

    // Change message every 8 seconds
    setInterval(() => {
      currentMessage = (currentMessage + 1) % messages.length;
      messageElement.style.opacity = "0";
      setTimeout(() => {
        messageElement.textContent = messages[currentMessage];
        messageElement.style.opacity = "1";
      }, 800);
    }, 8000);
  }

  // Add scroll animation
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".fade-in, .photo-frame");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  // Set initial state for animation
  document.querySelectorAll(".fade-in").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  });

  document.querySelectorAll(".photo-frame").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px) scale(0.95)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on load

  // Overlay autoplay handler
  const overlay = document.getElementById("start-overlay");
  const startBtn = document.getElementById("start-btn");

  if (startBtn && overlay) {
    startBtn.addEventListener("click", function () {
      overlay.style.opacity = "0";
      overlay.style.pointerEvents = "none";
      setTimeout(() => {
        overlay.style.display = "none";
      }, 700); // waktu harus sesuai dengan transisi

      // Mulai lagu setelah interaksi pengguna
      const song = document.getElementById("song"); // Pastikan ada elemen audio dengan id "song"
      if (song) {
        song
          .play()
          .then(() => {
            const playBtn = document.getElementById("play-btn"); // Pastikan ada tombol play
            if (playBtn) {
              playBtn.innerHTML =
                '<i class="fas fa-pause mr-2"></i> Pause Song';
              playBtn.classList.add("playing");
            }
          })
          .catch((e) => {
            console.error("Audio autoplay failed:", e);
          });
      }
    });
  }
});
