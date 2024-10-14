import SelectGoogleAccount from '../components/SelectGoogleAccount.vue';

export default {
  title: 'Components/SelectGoogleAccount',
  component: SelectGoogleAccount,
  argTypes: {
    accounts: { control: 'array' },
  },
  tags: ['autodocs'], // Add autodocs tag here
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
          type: 'mobile',
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px',
          },
          type: 'desktop',
        },
      },
    },
  },
};

const Template = (args, { argTypes }) => ({
  components: { SelectGoogleAccount },
  props: Object.keys(argTypes),
  template: '<SelectGoogleAccount v-bind="$props" />',
});

// Mobile variant
export const Mobile = Template.bind({});
Mobile.args = {
  accounts: [
    { name: 'Hailemariam Kefale', email: 'hatemariamkefalo19@gmail.com' },
    { name: 'Hailemariam Kefale', email: 'halemariamkefale@a2av.org' },
  ],
};
Mobile.parameters = {
  viewport: { defaultViewport: 'mobile' },
};

// Desktop variant
export const Desktop = Template.bind({});
Desktop.args = {
  accounts: [
    { name: 'Hailemariam Kefale', email: 'hatemariamkefalo19@gmail.com' },
    { name: 'Hailemariam Kefale', email: 'halemariamkefale@a2av.org' },
  ],
};
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};
