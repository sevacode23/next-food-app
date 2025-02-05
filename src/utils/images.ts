import fs from 'node:fs';

export const writePublicImage = async (image: File, imageName: string) => {
  const imagePath = `public/images/${imageName}`;

  const stream = fs.createWriteStream(imagePath);

  const bufferedImage = await image.arrayBuffer();

  return new Promise<string>((resolve, reject) => {
    stream.write(Buffer.from(bufferedImage), (error) => {
      if (error) {
        reject(new Error('Failed to write image to public folder', error));
      }

      resolve(`/images/${imageName}`);
    });
  });
};
