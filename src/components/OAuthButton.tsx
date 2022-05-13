import React from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { GoogleIcon } from "../icons/GoogleIcon";
import { MicrosoftIcon } from "../icons/MicrosoftIcon";
import { capitalize } from "../utils/strings";

type ProviderType = "google" | "discord" | "microsoft";

interface OAuthButtonProps {
  provider: ProviderType;
  href: string | null | undefined;
  style?: React.CSSProperties;
}

const ICON_MAP = {
  discord: DiscordIcon,
  google: GoogleIcon,
  microsoft: MicrosoftIcon,
};

/**
 * Returns a single <button> element, no links
 */
export const OAuthButton: React.FC<OAuthButtonProps> = ({
  provider,
  href,
  style,
}) => {
  const Icon = ICON_MAP[provider];

  return !href ? (
    <button>No href provided</button>
  ) : (
    <button
      onClick={() => {
        window.location.href = href;
      }}
      className={`oauth-button oauth-button-${provider}`}
      style={style}
    >
      {capitalize(provider)}
      <Icon className="oauth-button__icon" />
    </button>
  );
};
