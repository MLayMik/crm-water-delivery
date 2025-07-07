import type { Meta, StoryObj } from "@storybook/vue3-vite";
import { LoginForm } from ".";

const meta = {
    title: 'Components/LoginForm',
    component: LoginForm
} satisfies Meta<typeof LoginForm>

export default meta

type Story = StoryObj<typeof LoginForm>

export const Default: Story = {
    name: 'Default'
}