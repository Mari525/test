const BookCard = ({ title, author, description, price, onAddToCart }) => {
  return (
      <div className="book-card">
          <h2>{title}</h2>
          <p>{author}</p>
          <p>{description}</p>
          <p>{price}</p>
          <button onClick={onAddToCart}>Добавить в корзину</button>
      </div>
  );
};

const App = () => {
    const handleAddToCart = () => {
        alert("Добавлено в корзину!");
    };

    return (
        <div>
            <div className="book-list">
                <BookCard
                    title="Название"
                    author="Автор"
                    description="Описание"
                    price="Цена"
                    onAddToCart={() => handleAddToCart("Название")}
                />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
