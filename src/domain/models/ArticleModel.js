export function ArticleModel(
  id,
  galleryImages,
  images,
  category,
  title,
  locationDate,
  shortDescription,
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
  this.shortDescription = shortDescription;
  this.comments = comments;
  this.articlesForSale = articlesForSale;
}
