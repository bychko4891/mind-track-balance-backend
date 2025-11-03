import { Module } from '@nestjs/common';
import { S3StorageService } from './s3-storage.service';
import { s3ClientProvider } from './s3.provider';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [s3ClientProvider, S3StorageService],
  exports: [S3StorageService],
})
export class S3StorageModule {}
