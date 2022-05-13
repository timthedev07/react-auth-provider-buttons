export const OAUTH_BUTTON_PROVIDERS = [
  "google",
  "discord",
  "microsoft",
] as const;
export type ProviderType = typeof OAUTH_BUTTON_PROVIDERS[number];
