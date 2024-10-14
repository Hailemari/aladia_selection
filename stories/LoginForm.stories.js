import LoginForm from '../components/LoginForm.vue';

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
  argTypes: {
    email: { control: 'text' },
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
  components: { LoginForm },
  props: Object.keys(argTypes),
  template: '<LoginForm v-bind="$props" />',
});

// Mobile variant
export const Mobile = Template.bind({});
Mobile.args = {
  email: 'example@example.com',
};
Mobile.parameters = {
  viewport: { defaultViewport: 'mobile' },
};

// Desktop variant
export const Desktop = Template.bind({});
Desktop.args = {
  email: 'example@example.com',
};
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};
