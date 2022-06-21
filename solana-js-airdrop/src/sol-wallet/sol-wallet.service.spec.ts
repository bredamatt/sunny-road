import { Test, TestingModule } from '@nestjs/testing';
import { SolWalletService } from './sol-wallet.service';

describe('SolWalletService', () => {
  let service: SolWalletService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SolWalletService],
    }).compile();

    service = module.get<SolWalletService>(SolWalletService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
