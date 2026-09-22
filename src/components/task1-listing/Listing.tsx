import type { ListingProps } from '../../types/listing';
import { truncateTitle, formatPrice } from '../../utils/format';

function getStockClass(quantity: number): string {
  if (quantity <= 10) return 'stock-low';
  if (quantity <= 20) return 'stock-medium';
  return 'stock-high';
}

function Listing({ items = [] }: ListingProps) {
  const visibleItems = items.filter(
    (item) =>
      item.MainImage?.url_570xN &&
      item.title &&
      item.price !== undefined &&
      item.quantity !== undefined,
  );

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <div className="listing">
      {visibleItems.map((item) => {
        const {
          listing_id,
          url,
          MainImage,
          title,
          currency_code,
          price,
          quantity,
        } = item;

        return (
          <div className="product-card" key={listing_id}>
            <a href={url} target="_blank" rel="noreferrer">
              <img
                src={MainImage?.url_570xN}
                alt={title}
                className="product-image"
              />
            </a>
            <div className="product-info">
              <h3 className="product-title">{truncateTitle(title!)}</h3>
              <div className="price-container">
                <div className="product-price">
                  {formatPrice(price!, currency_code!)}
                </div>
                <span className={`stock-badge ${getStockClass(quantity!)}`}>
                  {quantity} left
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Listing;