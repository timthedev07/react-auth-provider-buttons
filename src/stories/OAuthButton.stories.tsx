import { ComponentMeta } from "@storybook/react";

import { OAuthButton } from "../components/OAuthButton";
import { OAUTH_BUTTON_PROVIDERS } from "../types/providers";

export default {
  title: "OAuth Button",
  component: OAuthButton,
} as ComponentMeta<typeof OAuthButton>;

export const AllButtons = () => {
  return (
    <>
      {OAUTH_BUTTON_PROVIDERS.map((each) => (
        <OAuthButton href="#" provider={each} />
      ))}
    </>
  );
};
