import { getDefaultClient } from 'connectkit'
import { createClient, configureChains } from 'wagmi'
import { mainnet, goerli } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { infuraProvider } from 'wagmi/providers/infura'
import { publicProvider } from 'wagmi/providers/public'

const alchemyKey = process.env.NEXT_PUBLIC_ALCHEMY_KEY
const infuraKey = process.env.NEXT_PUBLIC_INFURA_KEY

const { provider } = configureChains(
	[mainnet, goerli],
	[
		alchemyProvider({ apiKey: alchemyKey as string }),
		infuraProvider({ apiKey: infuraKey as string }),
		publicProvider(),
	],
)

export const client = createClient(
	getDefaultClient({
		appName: 'Caisson',
		autoConnect: true,
		provider,
	}),
)
