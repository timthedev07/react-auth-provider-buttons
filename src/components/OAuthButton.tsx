import React, { forwardRef } from "react";
import { DiscordIcon } from "../icons/DiscordIcon";
import { GoogleIcon } from "../icons/GoogleIcon";
import { MicrosoftIcon } from "../icons/MicrosoftIcon";
import { ProviderType } from "../types/providers";
import { capitalize } from "../utils/strings";
import "../index.css";
import { GithubIcon } from "../icons/GithubIcon";
import { SpotifyIcon } from "../icons/SpotifyIcon";

export type OAuthButtonProps = {
  provider: ProviderType;
  href?: string | null | undefined;
  style?: React.CSSProperties;
  isDarkTheme?: boolean;
  className?: string;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const ICON_MAP = {
  discord: DiscordIcon,
  google: GoogleIcon,
  microsoft: MicrosoftIcon,
  github: GithubIcon,
  spotify: SpotifyIcon,
};

/**
 * Returns a single <button> element, no links
 */
export const OAuthButton = forwardRef<HTMLButtonElement, OAuthButtonProps>(
  ({ provider, href, style, isDarkTheme = false, onClick, ...props }, ref) => {
    const Icon = ICON_MAP[provider];

    return (
      <button
        ref={ref}
        {...props}
        onClick={(e) => {
          if (onClick) {
            if (href) {
              window.location.href = href;
            }
            onClick(e);
          } else if (href) {
            window.location.href = href;
          }
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
  }
);
