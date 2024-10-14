import UserDashboard from '../components/UserDashboard.vue';

export default {
  title: 'Components/UserDashboard',
  component: UserDashboard,
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
  components: { UserDashboard },
  props: Object.keys(argTypes),
  template: '<UserDashboard v-bind="$props" />',
});

// Mobile Variant
export const Mobile = Template.bind({});
Mobile.args = {};

// Mobile Parameters
Mobile.parameters = {
  viewport: { defaultViewport: 'mobile' },
};

// Desktop Variant
export const Desktop = Template.bind({});
Desktop.args = {};

// Desktop Parameters
Desktop.parameters = {
  viewport: { defaultViewport: 'desktop' },
};
