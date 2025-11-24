 import { useAuth } from "../context/AuthContext";

const ReviewForm = () => {
  const { user } = useAuth();

  //  Not logged in
  if (!user) {
    return (
      <div style={{ textAlign: "center", padding: "4rem" }}>
        <h3>You must be logged in to leave a review</h3>
        <p>
          <a href="/login">Login</a> or <a href="/signup">Create an account</a>
        </p>
      </div>
    );
  }

  //  Logged in
  return (
    <section style={{ padding: "4rem 2rem", maxWidth: "700px", margin: "auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Leave a Review
      </h2>

      <form className="review-form">
        <input type="text" value={user.name} readOnly />
        <textarea placeholder="Write your review..." rows="5" required />
        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
};

export default ReviewForm;
