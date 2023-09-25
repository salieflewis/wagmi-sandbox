import { ConnectKitButton } from 'connectkit'
import { WagmiSandbox, Deploy } from '@/server'

export function Header() {
  return (
    <div className="flex justify-between items-center p-4">
      <WagmiSandbox />
      <div className="flex items-center gap-8">
        <Deploy />
        <ConnectKitButton />
      </div>
    </div>
  )
}
