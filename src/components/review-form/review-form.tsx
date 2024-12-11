import React, { useState } from 'react';

const ReviewForm: React.FC = () => {
  const [review, setReview] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (review.trim()) {
      setIsSubmitted(true);
      setReview('');
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
              disabled={!review.trim()}
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
