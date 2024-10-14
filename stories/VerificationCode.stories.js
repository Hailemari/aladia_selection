import VerificationCode from '../components/VerificationCode.vue';

export default {
  title: 'Components/VerificationCode',
  component: VerificationCode,
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
  components: { VerificationCode },
  props: Object.keys(argTypes),
  template: '<VerificationCode v-bind="$props" />',
});

// Mobile Variant
export const Mobile = Template.bind({});
Mobile.args = {
  userName: 'Haile Ma',
};

// Mobile Parameters
Mobile.parameters = {
  viewport: { defaultViewport: 'mobile' },
};

// Desktop Variant
export const Desktop = Template.bind({});
Desktop.args = {
  userName: 'Haile k',
};

// Desktop Parameters
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};
