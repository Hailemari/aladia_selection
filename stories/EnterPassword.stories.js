import EnterPassword from '../components/EnterPassword.vue';

export default {
  title: 'Components/EnterPassword',
  component: EnterPassword,
  argTypes: {
    password: { control: 'text' },
    error: { control: 'text' },
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
  components: { EnterPassword },
  props: Object.keys(argTypes),
  template: '<EnterPassword v-bind="$props" />',
});

// Mobile variant
export const Mobile = Template.bind({});
Mobile.args = {
  password: '',
  error: '',
};
Mobile.parameters = {
  viewport: { defaultViewport: 'mobile' },
};

// Desktop variant
export const Desktop = Template.bind({});
Desktop.args = {
  password: '',
  error: '',
};
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};
