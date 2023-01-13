import { Web3sdksAuth } from "@web3sdks/auth/next";

export const { Web3sdksAuthHandler, getUser } = Web3sdksAuth({
  // Using environment variables to secure your private key is a security vulnerability.
  // Learn how to store your private key securely:
  // https://docs.web3sdks.com/sdk/set-up-the-sdk/securing-your-private-key
  privateKey: process.env.ADMIN_PRIVATE_KEY || "",
  // Set this to your domain to prevent signature malleability attacks.
  domain: "example.com",
});

// Export the handler to setup all your endpoints
export default Web3sdksAuthHandler();
