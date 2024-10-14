import ForgotPassword from '../components/ForgotPassword.vue';

export default {
  title: 'Components/ForgotPassword',
  component: ForgotPassword,
  argTypes: {
    recoveryEmail: { control: 'text' },
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
  components: { ForgotPassword },
  props: Object.keys(argTypes),
  template: '<ForgotPassword v-bind="$props" />',
});

// Mobile variant
export const Mobile = Template.bind({});
Mobile.args = {
  recoveryEmail: 'example@example.com',
};
Mobile.parameters = {
  viewport: { defaultViewport: 'mobile' },
};

// Desktop variant
export const Desktop = Template.bind({});
Desktop.args = {
  recoveryEmail: 'example@example.com',
};
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};
