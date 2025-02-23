import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0x24b0e8ab4dccf723fb75c0060befea37866498444d562368ef858a3747e79c34";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    nexus: {
      url: "https://rpc.nexus.xyz/http",
      accounts: [PRIVATE_KEY],
      chainId: 392
    }
  }
};

export default config;
