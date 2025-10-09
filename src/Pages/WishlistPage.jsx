function WishlistPage({ wishlist, toggleWishlist }) {
  const wishlistCars = carsData.filter((car) => wishlist.includes(car.id));

  return (
    <div className="wishlist-page">
      <h2>❤️ My Wishlist</h2>
      {wishlistCars.length === 0 ? (
        <p>No cars in your wishlist yet.</p>
      ) : (
        <div className="car-grid">
          {wishlistCars.map((car) => (
            <div key={car.id} className="car-card">
              <img src={car.image} alt={car.name} className="car-image" />
              <h3>{car.name}</h3>
              <p>Type: {car.type}</p>
              <p>Price: ${car.price}/day</p>
              <button onClick={() => toggleWishlist(car.id)}>❌ Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
