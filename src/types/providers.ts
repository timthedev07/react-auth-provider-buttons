export const OAUTH_BUTTON_PROVIDERS = [
  "google",
  "discord",
  "microsoft",
  "github",
] as const;
export type ProviderType = typeof OAUTH_BUTTON_PROVIDERS[number];
