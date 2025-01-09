import { ConfigService } from '@nestjs/config'

import { TypeLiveKitOptions } from '../modules/libs/livekit/types/livekit.types'

export function getLiveKitConfig(
	configService: ConfigService
): TypeLiveKitOptions {
	const apiUrl = configService.getOrThrow<string>('LIVEKIT_API_URL')
	const apiKey = configService.getOrThrow<string>('LIVEKIT_API_KEY')
	const apiSecret = configService.getOrThrow<string>('LIVEKIT_SECRET_KEY')

	console.log('LiveKit Config:', { apiUrl, apiKey, apiSecret })

	return {
		apiUrl,
		apiKey,
		apiSecret
	}
}
