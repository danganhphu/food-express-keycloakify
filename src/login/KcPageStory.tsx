import { createGetKcContextMock } from "keycloakify/login/KcContext";
import type { DeepPartial } from "keycloakify/tools/DeepPartial";
import { themeNames, kcEnvDefaults } from "../kc.gen.tsx";
import type { KcContext } from "./KcContext.ts";
import type { KcContextExtension, KcContextExtensionPerPage } from "./KcContext.ts";
import KcPage from "./KcPage.tsx";

const kcContextExtension: KcContextExtension = {
  themeName: themeNames[0],
  properties: {
    ...kcEnvDefaults,
  },
};
const kcContextExtensionPerPage: KcContextExtensionPerPage = {};

export const { getKcContextMock } = createGetKcContextMock({
  kcContextExtension,
  kcContextExtensionPerPage,
  overrides: {},
  overridesPerPage: {},
});

export function createKcPageStory<PageId extends KcContext["pageId"]>(params: { pageId: PageId }) {
  const { pageId } = params;

  function KcPageStory(props: { kcContext?: DeepPartial<Extract<KcContext, { pageId: PageId }>> }) {
    const { kcContext: overrides } = props;

    const kcContextMock = getKcContextMock({
      pageId,
      overrides,
    });

    return <KcPage kcContext={kcContextMock} />;
  }

  return { KcPageStory };
}
