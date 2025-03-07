document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial-box p");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentIndex = 0;
    const totalTestimonials = testimonials.length;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? "block" : "none";
        });
    }

    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        showTestimonial(currentIndex);
    }

    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
        showTestimonial(currentIndex);
    }

    // Auto-slide every 4 seconds
    setInterval(nextTestimonial, 4000);

    // Attach event listeners to buttons
    nextBtn.addEventListener("click", nextTestimonial);
    prevBtn.addEventListener("click", prevTestimonial);

    // Show the first testimonial initially
    showTestimonial(currentIndex);
});
document.getElementById("menu-search").addEventListener("input", function() {
    let searchValue = this.value.toLowerCase();
    let menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        let itemText = item.innerText.toLowerCase();
        if (itemText.includes(searchValue)) {
            item.style.display = "block"; // Show item
        } else {
            item.style.display = "none"; // Hide item
        }
    });
});

    document.querySelector(".btn").addEventListener("click", function() {
        document.getElementById("order-popup").style.display = "flex";
    });

    function closePopup() {
        document.getElementById("order-popup").style.display = "none";
    }

