export interface ItemModel {
  id: string;
  title: string;
  authors: string[];
  publishedDate: string;
  imageLinks: ImageLinkModel;
  shippingMethod: string;
  description: string
}

export interface ImageLinkModel {
  smallThumbnail: string;
  thumbnail: string;
}
