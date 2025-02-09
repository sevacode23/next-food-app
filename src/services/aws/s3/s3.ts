import { S3 } from '@aws-sdk/client-s3';

import { S3_CONSTANTS } from './s3.constants';

export const s3 = new S3({
  region: 'eu-central-1',
});

export const createS3UserImage = async (image: File, fileName: string) => {
  const bufferedImage = await image.arrayBuffer();

  return s3.putObject({
    Bucket: S3_CONSTANTS.USER_IMAGES_BUCKET,
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: image.type,
  });
};
