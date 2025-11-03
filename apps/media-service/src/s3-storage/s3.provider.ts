import { S3Client } from '@aws-sdk/client-s3';
import { ConfigService } from '@nestjs/config';

export const S3_CLIENT = 'S3_CLIENT';

export const s3ClientProvider = {
  provide: S3_CLIENT,
  useFactory: (config: ConfigService) =>
    new S3Client({
      endpoint: config.get<string>('MINIO_ENDPOINT', 'http://127.0.0.1:9001'),
      region: config.get<string>('MINIO_REGION', 'us-east-1'),
      forcePathStyle: true,
      credentials: {
        accessKeyId: config.get<string>('MINIO_ACCESS_KEY')!,
        secretAccessKey: config.get<string>('MINIO_SECRET_KEY')!,
      },
    }),
  inject: [ConfigService],
};
