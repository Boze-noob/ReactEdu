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

export const getArticleModel = (article) => {
  return article !== undefined
    ? new ArticleModel(
        article.id,
        article.galleryImages,
        article.images,
        article.category,
        article.title,
        article.locationDate,
        article.shortDescription,
        article.description,
        article.comments,
        article.articlesForSale
      )
    : article;
};
