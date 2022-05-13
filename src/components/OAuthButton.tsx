import React from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { GoogleIcon } from "../icons/GoogleIcon";
import { MicrosoftIcon } from "../icons/MicrosoftIcon";
import { ProviderType } from "../types/providers";
import { capitalize } from "../utils/strings";
import "../index.css";
import { useOAuthButton } from "./OAuthButtonContext";

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
  const { isDarkTheme } = useOAuthButton();

  return !href ? (
    <button>No href provided</button>
  ) : (
    <button
      onClick={() => {
        window.location.href = href;
      }}
      className={`oauth-button oauth-button-${provider} ${
        isDarkTheme ? "oauth-button-dark" : ""
      }`}
      style={style}
    >
      {capitalize(provider)}
      <Icon className="oauth-button__icon" />
    </button>
  );
};
