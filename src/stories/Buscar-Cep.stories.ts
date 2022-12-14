// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import BuscarCepComponent from './buscar-cep.component';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Buscar-Cep',
  component: BuscarCepComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<BuscarCepComponent> = (args: BuscarCepComponent) => ({
  props: args,
});

export const CEP = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
CEP.args = {
  cep: 'cep'
};

