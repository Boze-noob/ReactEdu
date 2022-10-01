export class InstagramInfoModel {
  constructor(id, imageUrl, description) {
    this.id = id;
    this.imageUrl = imageUrl;
    this.description = description;
  }

  toMap() {
    return {
      id: this.id,
      imageUrl: this.imageUrl,
      description: this.description,
    };
  }

  fromMap(json) {
    return InstagramInfoModel(
      (this.id = json.id),
      (this.imageUrl = json.imageUrl),
      (this.description = json.description)
    );
  }
}
