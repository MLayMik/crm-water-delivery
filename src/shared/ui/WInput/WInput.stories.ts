import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { WInput } from '.'

export default {
  title: 'Shared/WInput',
  component: WInput,

  args: {
    label: '',
    small: false,
  },

  argTypes: {
    class: { table: { disable: true } },
  },
} satisfies Meta<typeof WInput>

type Story = StoryObj<typeof WInput>

export const Default: Story = {}

export const WithLabel: Story = { args: { label: 'Label' } }

export const Small: Story = { args: { small: true } }
