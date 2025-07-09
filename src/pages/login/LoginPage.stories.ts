import type { Meta, StoryObj } from '@storybook/vue3-vite'
import { LoginPage } from '.'

const meta = {
  title: 'Pages/LoginPage',
  component: LoginPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof LoginPage>

export default meta

type Story = StoryObj<typeof LoginPage>

export const Default: Story = {
  name: 'Default',
}
