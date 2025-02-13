let currentReview = 0;
const reviews = document.querySelectorAll('.review-item');
const totalReviews = reviews.length;

function showReview(index) {
  reviews.forEach((review, i) => {
    review.classList.toggle('active', i === index);
  });
}

document.querySelector('.next').addEventListener('click', () => {
  currentReview = (currentReview + 1) % totalReviews;
  showReview(currentReview);
});

document.querySelector('.prev').addEventListener('click', () => {
  currentReview = (currentReview - 1 + totalReviews) % totalReviews;
  showReview(currentReview);
});

// Auto-rotate carousel every 5 seconds
setInterval(() => {
  currentReview = (currentReview + 1) % totalReviews;
  showReview(currentReview);
}, 2000);