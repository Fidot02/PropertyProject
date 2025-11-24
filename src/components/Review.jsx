import React from "react";
import "../css/Review.css";

const Review = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "Home Buyer",
      text: "I found my dream home in just two weeks! The listings were accurate and the agents were very helpful.",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Michael Brown",
      role: "Property Investor",
      text: "This platform made it easy to find great investment properties. Highly recommended!",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Amaka Okoro",
      role: "Tenant",
      text: "Stress-free house hunting. I loved how simple and clear the whole process was.",
      image: "https://i.pravatar.cc/150?img=45",
    },
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h2 className="reviews-title">What Our Clients Say</h2>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>
              <img
                src={review.image}
                alt={review.name}
                className="review-image"
              />
              <p className="review-text">“{review.text}”</p>
              <h4 className="review-name">{review.name}</h4>
              <span className="review-role">{review.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
