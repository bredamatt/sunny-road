import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import * as web3 from '@solana/web3.js';

@Injectable()
export class SolWalletService implements OnModuleInit {
    private wallet: web3.Keypair;
    private connection: web3.Connection;
    private logger: Logger = new Logger(SolWalletService.name)

    onModuleInit(): void {
        try {
            this.connection = new web3.Connection(
                web3.clusterApiUrl('devnet'),
                'confirmed',
            );
            this.logger.log("Initialized and connected to 'devnet'.")
        } catch (error) {
            new Error(error.message);            
        }
    }

    createWallet(): void {
        try {
            this.wallet = web3.Keypair.generate();
            this.logger.log("Created new wallet.")
        } catch (error) {
            new Error(error.message);
        }
    }

    async doAirdrop(): Promise<void> {
        try {
            let airdropSignature = await this.connection.requestAirdrop(
                this.wallet.publicKey,
                web3.LAMPORTS_PER_SOL,
            );
            await this.connection.confirmTransaction(airdropSignature);
        } catch (error) {
            new Error(error.message);
        }
    }

    async getAccountInfo() {
        try {
            let accountInfo = await this.connection.getAccountInfo(this.wallet.publicKey);
            this.logger.log("Account Info: " + "'" + JSON.stringify(accountInfo) + "'");
        } catch (error) {
            new Error(error.message);
        }
    }
}
