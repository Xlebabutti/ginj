import { BadRequestException, Injectable } from '@nestjs/common'
import {
	CreateIngressOptions,
	IngressAudioEncodingPreset,
	IngressInput,
	IngressVideoEncodingPreset
} from 'livekit-server-sdk'

import type { User } from '../../../../prisma/generated'
import { PrismaService } from '../../../core/prisma/prisma.service'
import { LivekitService } from '../../libs/livekit/livekit.service'

@Injectable()
export class IngressService {
	public constructor(
		private readonly prismaService: PrismaService,
		private readonly livekitService: LivekitService
	) {}

	public async create(ingressType: IngressInput) {
		await this.resetIngresses()

		const options: CreateIngressOptions = {
			name: 'sdf',
			roomName: 'test_room',
			participantIdentity: 'test_participant',
			participantName: 'Test Participant'
		}

		if (ingressType === IngressInput.WHIP_INPUT) {
			options.bypassTranscoding = true
		} else {
			options.video = {
				source: 1,
				preset: IngressVideoEncodingPreset.H264_1080P_30FPS_3_LAYERS
			}
			options.audio = {
				source: 2,
				preset: IngressAudioEncodingPreset.OPUS_STEREO_96KBPS
			}
		}

		console.log('Ingress Type:', ingressType)
		console.log('Options:', options)

		try {
			const ingress = await this.livekitService.ingress.createIngress(
				ingressType,
				options
			)
			console.log('Ingress created:', ingress)
		} catch (error) {
			console.error(
				'Error creating ingress:',
				error.response?.data || error.message
			)
			throw new BadRequestException('Не удалось создать входной поток')
		}

		return true
	}

	private async resetIngresses() {
		const ingresses = await this.livekitService.ingress.listIngress({
			roomName: 'test_room'
		})

		const rooms = await this.livekitService.room.listRooms([])

		for (const room of rooms) {
			await this.livekitService.room.deleteRoom(room.name)
		}

		for (const ingress of ingresses) {
			if (ingress.ingressId) {
				await this.livekitService.ingress.deleteIngress(
					ingress.ingressId
				)
			}
		}
	}
}
