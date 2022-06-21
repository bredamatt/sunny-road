import { Module } from '@nestjs/common';
import { SolWalletModule } from './sol-wallet/sol-wallet.module';

@Module({
  imports: [
    SolWalletModule
  ],
})
export class AppModule {}
