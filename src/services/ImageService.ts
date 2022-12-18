class ImageService {
  async getAbstractImages(count: number) {
    const serverImages = await fetch(
      'https://api.unsplash.com/collections/67588036/photos?client_id=lUciy_ngNw1rQfxzXGh_WukbWSx7pLSn0PG7JHqf7HQ',
    ).then((r) => r.json());
    const images: string[] = [];

    for (let i = 0; i < count; i++) {
      images.push(
        serverImages[Math.floor(Math.random() * serverImages.length)].urls
          .regular,
      );
    }

    return images;
  }
}

export default new ImageService();
