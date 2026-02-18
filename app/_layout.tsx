import { Stack } from 'expo-router'
import { useEffect } from 'react'

import client from '@/lib/appwrite'

import './global.css'

export default function RootLayout() {
	useEffect(() => {
		const health = async () => {
			try {
				const response = await fetch(
					`${client.config.endpoint}/health`,
					{ method: 'GET' }
				)
				console.log('Appwrite ping status:', response.status)
			} catch (error) {
				console.error('Appwrite connection failed:', error)
			}
		}
		health()
	}, [])
	return (
		<Stack>
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			<Stack.Screen name='movies/[id]' options={{ headerShown: false }} />
		</Stack>
	)
}
