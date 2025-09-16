import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { WFooter } from '.'

export default {
  title: 'Widgets/WFooter',
  component: WFooter,
  tags: ['autodocs'],
} satisfies Meta<typeof WFooter>

type Story = StoryObj<typeof WFooter>

export const Default: Story = {}
