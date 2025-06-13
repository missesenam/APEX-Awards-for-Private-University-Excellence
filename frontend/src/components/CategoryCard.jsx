export default function CategoryCard({ category }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={category.image} alt={category.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{category.title}</h2>
        <p>{category.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
}
