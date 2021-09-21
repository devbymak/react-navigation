import React from 'react'
import { Meta, Story } from '@storybook/react'
import Navigation from '../src/'

const meta: Meta = {
  title: 'Example',
  component: Navigation,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template: Story = () => (
  <Navigation
    variant="bottom"
    zIndex={false}
    columns={1}
    breakPoint="md"
    style={{ color: 'red' }}
  >
    Demo
  </Navigation>
)

export const Demo = Template.bind({})

Demo.args = {}
