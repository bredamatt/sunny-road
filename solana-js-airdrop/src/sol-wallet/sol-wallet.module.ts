import { Module } from '@nestjs/common';
import { SolWalletService } from './sol-wallet.service';

@Module({
  providers: [SolWalletService],
  exports: [SolWalletService],
})
export class SolWalletModule {}
