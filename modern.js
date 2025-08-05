<!-- JS Section -->
const stories = [
      { name: "John Doe", story: "Your support changed my life." },
      { name: "Jane Doe", story: "I received what I needed most." },
      { name: "Alice Johnson", story: "A small act of kindness goes a long way." }
    ];

    const reviews = [
      { name: "Michael Scott", rating: 5, review: "Absolutely love the products and the cause!" },
      { name: "Pam Beesly", rating: 4, review: "Great service and thoughtful packaging." },
      { name: "Jim Halpert", rating: 5, review: "Fast delivery and high-quality items!" },
      { name: "Dwight Schrute", rating: 3, review: "Good initiative. Could improve shipping." }
    ];

    function renderStories() {
      const container = document.getElementById('storyList');
      container.innerHTML = stories.map((s,index) => `
        <div class="col-12 col-sm-6 col-md-4 mb-4">
          <div class="customer-story">
            <img src="https://picsum.photos/100?random=${Math.floor(Math.random() * 1000)}" class="rounded-circle" alt="${s.name}">
			<h3>${s.name}</h3>
            <p>${s.story}</p>
          </div>
        </div>
      `).join('');
    }

    function renderReviews() {
      const container = document.getElementById('reviewList');
      container.innerHTML = reviews.map(r => {
        const stars = '<i class="fas fa-star text-warning"></i>'.repeat(r.rating) +
                      '<i class="far fa-star text-warning"></i>'.repeat(5 - r.rating);
        return `
          <div class="col-12 col-md-6 col-lg-4 mb-4">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">${r.name}</h5>
                <p class="mb-2">${stars}</p>
                <p class="card-text">${r.review}</p>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }


    // Scroll highlight
    window.addEventListener('scroll', () => {
      const sections = ['hero', 'products', 'impact-areas', 'customer-stories', 'customer-reviews', 'contact-us'];
      let currentSection = 'hero';

      for (const id of sections) {
        const section = document.getElementById(id);
        if (!section) continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 4) {
          currentSection = id;
        }
      }

      document.querySelectorAll('.nav-link').forEach(link => {
        const section = link.getAttribute('data-section');
        if (section === currentSection) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });

    // Smooth scroll
    document.querySelectorAll('.nav-link[data-section]').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('data-section');
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

  function donate() {
      const amount = parseInt(document.getElementById('donationAmount').value);
      if (amount > 0) {
        const impactElem = document.getElementById("impact-count");
        const current = parseInt(impactElem.textContent.replace(/\D/g, '')) || 0;
      const newTotal = current + amount;
      impactElem.textContent = newTotal;

      document.querySelector(".donation-tracker-filled").style.width = Math.min((newTotal / 1000) * 100, 100) + "%";
      $('#donateModal').modal('hide');


        const thankYou = document.getElementById("thankYouMessage");
        $(thankYou).fadeIn(400);
		setTimeout(() => $(thankYou).fadeOut(400), 4000);
      } else {
        // Show error popup modal
    document.getElementById("errorText").textContent = "❌ Enter a valid amount";
    $('#errorModal').modal('show');
      }
    }

    document.addEventListener('DOMContentLoaded', () => {
      renderStories();
      renderReviews();
    });
  
  let count = 0;
  const impactElement = document.getElementById("impact-count");
  const target = 547;
  const interval = setInterval(() => {
    count++;
    impactElement.textContent = count;
    if (count >= target) clearInterval(interval);
  }, 10);

  function scrollToProducts() {
    const section = document.getElementById("products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
