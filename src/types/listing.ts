export interface EtsyImage {
  url_570xN: string;
}

export interface EtsyListing {
  listing_id: number;
  url?: string;
  MainImage?: EtsyImage;
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
}

export interface ListingProps {
  items?: EtsyListing[];
}