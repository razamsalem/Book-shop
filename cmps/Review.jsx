export function Review({ reviewContent }) {

    return (
        <article className="review align-left">
            <h4>Review By: {reviewContent.fullName}</h4>
            <h4>Rating: <span className="gold">{reviewContent.rating} <i className="fa-solid fa-star"></i> </span></h4>
            <h4>Read at: {reviewContent.readAt}</h4>
        </article>
    )
}