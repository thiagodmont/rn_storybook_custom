export const getStories = () => {
  return {
    '@acme/components/Button/Button.stories': require('@acme/components/Button/Button.stories'),
    '@acme/components/Text/Text.stories': require('@acme/components/Text/Text.stories'),
    '@acme/screens/ScreenPageOne.stories': require('@acme/screens/ScreenPageOne.stories'),
  }
}
