import SignUp from '../components/SignUp.vue';

export default {
  title: 'Components/SignUp',
  component: SignUp,
  argTypes: {
    name: { control: 'text' },
    surname: { control: 'text' },
    email: { control: 'text' },
    password: { control: 'text' },
    confirmPassword: { control: 'text' },
    error: { control: 'text' },
  },
  tags: ['autodocs'],
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
  components: { SignUp },
  props: Object.keys(argTypes),
  template: '<SignUp v-bind="$props" />',
});

// Mobile Variant
export const Mobile = Template.bind({});
Mobile.args = {
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
  error: '',
};

// Mobile Parameters
Mobile.parameters = {
  viewport: { defaultViewport: 'mobile' },
};

// Desktop Variant
export const Desktop = Template.bind({});
Desktop.args = {
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
  error: '',
};

// Desktop Parameters
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};
