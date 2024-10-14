import AddNewPassword from '../components/AddNewPassword.vue';

export default {
  title: 'Components/AddNewPassword',
  component: AddNewPassword,
  tags: ['autodocs'], // Add autodocs tag here
  argTypes: {
    recoveryEmail: { control: 'text' },
  },
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
  components: { AddNewPassword },
  props: Object.keys(argTypes),
  template: '<AddNewPassword v-bind="$props" />',
});

// Mobile variant
export const Mobile = Template.bind({});
Mobile.args = {
  recoveryEmail: 'woynitu87@gmail.com',
};
Mobile.parameters = {
  viewport: { defaultViewport: 'mobile' },
};

// Desktop variant
export const Desktop = Template.bind({});
Desktop.args = {
  recoveryEmail: 'woynitu87@gmail.com',
};
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};
