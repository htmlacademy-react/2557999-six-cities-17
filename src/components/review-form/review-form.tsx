import React, { useState } from 'react';

const ReviewForm: React.FC = () => {
  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number | null>(null);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleMouseEnter = (value: number) => {
    setHoverRating(value);
  };

  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (review.trim() && rating) {
      setIsSubmitted(true);
      setReview('');
      setRating(null);
    }
  };

  return (
    <section className="reviews">
      <div className="reviews__container">
        <h2
          className="reviews__title"
          style={{
            textAlign: 'left',
          }}
        >
          Leave a comment
        </h2>
        <form className="reviews__form form" onSubmit={handleSubmit}>
          <div className="reviews__rating">
            <div
              style={{
                display: 'flex',
                gap: '10px',
                marginBottom: '20px',
                justifyContent: 'flex-start',
              }}
            >
              {[1, 2, 3, 4, 5].map((star) => {
                let color = '#ccc';

                if (hoverRating && hoverRating >= star) {
                  color = '#ffcc00';
                } else if (rating && rating >= star) {
                  color = '#ffcc00';
                }

                return (
                  <label
                    key={star}
                    onMouseEnter={() => handleMouseEnter(star)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <input
                      type="radio"
                      name="rating"
                      value={star}
                      checked={rating === star}
                      onChange={() => handleRatingChange(star)}
                      style={{ display: 'none' }}
                    />
                    <span
                      style={{
                        cursor: 'pointer',
                        fontSize: '20px',
                        color: color,
                      }}
                    >
                      ★
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
          <textarea
            className="reviews__textarea form__textarea"
            id="review"
            name="review"
            placeholder="Your review"
            value={review}
            onChange={handleReviewChange}
            required
          />
          <div className="reviews__button-wrapper">
            <button
              className="reviews__submit form__submit button"
              type="submit"
              disabled={!review.trim() || !rating}
            >
              Submit
            </button>
          </div>
        </form>
        {isSubmitted && <p>Your review was sent successfully!</p>}
      </div>
    </section>
  );
};

export default ReviewForm;
