// import React, { useState, useEffect } from "react";

// function Reviews({ propertyId }) {
//   const [reviews, setReviews] = useState([]);
//   const [form, setForm] = useState({
//     name: "",
//     rating: 0,
//     comment: "",
//   });

//   // Fetch reviews
//   const fetchReviews = async () => {
//     try {
//       const response = await fetch(
//         `http://localhost:5044/api/Reviews/${propertyId}`
//       );
//       const data = await response.json();
//       setReviews(data);
//     } catch (error) {
//       console.error("Error loading reviews:", error);
//     }
//   };

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   // Handle form input
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Submit review
//   const submitReview = async (e) => {
//     e.preventDefault();

//     try {
//       await fetch("http://localhost:5044/api/Reviews", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           propertyId,
//           ...form,
//         }),
//       });

//       setForm({ name: "", rating: 0, comment: "" });
//       fetchReviews();
//     } catch (error) {
//       console.error("Error submitting review:", error);
//     }
//   };

//   return (
//     <div className="mt-10">
//       <h3 className="text-xl font-bold mb-4">Reviews</h3>

//       {/* Display Reviews */}
//       <div className="space-y-4">
//         {reviews.length === 0 ? (
//           <p>No reviews yet.</p>
//         ) : (
//           reviews.map((review) => (
//             <div
//               key={review.id}
//               className="bg-gray-100 p-4 rounded shadow"
//             >
//               <h4 className="font-bold">{review.name}</h4>
//               <p>Rating: ⭐ {review.rating}/5</p>
//               <p>{review.comment}</p>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Review Form */}
//       <form onSubmit={submitReview} className="mt-6 space-y-3">
//         <input
//           type="text"
//           name="name"
//           placeholder="Your name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <select
//           name="rating"
//           value={form.rating}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         >
//           <option value={0}>Select rating</option>
//           <option value={1}>1 Star</option>
//           <option value={2}>2 Stars</option>
//           <option value={3}>3 Stars</option>
//           <option value={4}>4 Stars</option>
//           <option value={5}>5 Stars</option>
//         </select>

//         <textarea
//           name="comment"
//           placeholder="Write your review..."
//           value={form.comment}
//           onChange={handleChange}
//           className="w-full p-2 border rounded"
//           required
//         />

//         <button
//           type="submit"
//           className="bg-black text-white px-4 py-2 rounded"
//         >
//           Submit Review
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Reviews;
