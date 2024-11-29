// types.ts
export interface CONTACT {
    id: string; // Unique identifier for the contact (could be a UUID or unique name)
    name: string; // Name or alias of the contact (e.g., "John's Wallet")
    walletAddress: string; // The cryptocurrency wallet address
    network?: string; // Optional: The blockchain network (e.g., "Ethereum", "Bitcoin")
    description?: string; // Optional: A note or description for the contact
    tags?: string[]; // Optional: Tags for categorization (e.g., "Friend", "Business")
  }
  