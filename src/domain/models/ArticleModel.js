export function ArticleModel(
  id,
  galleryImages,
  images,
  category,
  title,
  locationDate,
  description,
  comments,
  articlesForSale
) {
  this.id = id;
  this.galleryImages = galleryImages;
  this.images = images;
  this.category = category;
  this.title = title;
  this.locationDate = locationDate;
  this.description = description;
  this.comments = comments;
  this.articlesForSale = articlesForSale;
}
