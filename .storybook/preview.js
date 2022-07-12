export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  backgrounds: {
    default: 'swiftbook',
    values: [
      { name: 'swiftbook', value: '#F2F4F5' },
      { name: 'white', value: '#FFF' }
    ],
  }
};
