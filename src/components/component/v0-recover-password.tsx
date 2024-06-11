
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function V0RecoverPassword() {
  return (
    <div className="mx-auto max-w-md space-y-6 py-12">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Reset Password</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter a new password for your account.</p>
      </div>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="password">New Password</Label>
          <Input id="password" placeholder="Enter a new password" required type="password" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input id="confirmPassword" placeholder="Confirm your new password" required type="password" />
        </div>
        <Button className="w-full" type="submit">
          Reset Password
        </Button>
      </form>
    </div>
  )
}
