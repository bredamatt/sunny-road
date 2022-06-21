import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SolWalletService } from './sol-wallet/sol-wallet.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(
    AppModule
  );

  const walletSerivce = app.get(SolWalletService);
  await walletSerivce.doAirdrop();
  await walletSerivce.getAccountInfo();

  await app.close();
  process.exit(0);

}

bootstrap();