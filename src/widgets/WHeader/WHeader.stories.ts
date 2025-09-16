import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { WHeader } from '.'

export default {
  title: 'Widgets/WHeader',
  component: WHeader,
  tags: ['autodocs'],
} satisfies Meta<typeof WHeader>

type Story = StoryObj<typeof WHeader>

export const Default: Story = {}
