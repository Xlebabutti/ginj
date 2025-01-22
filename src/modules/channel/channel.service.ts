import { Injectable, NotFoundException } from '@nestjs/common'

import { PrismaService } from '@/core/prisma/prisma.service'

@Injectable()
export class ChannelService {
	public constructor(private readonly prismaService: PrismaService) {}

	public async findByUsername(username: string) {
		const channel = await this.prismaService.user.findUnique({
			where: {
				username,
				isDeactivated: false
			},
			include: {
				socialLinks: {
					orderBy: {
						position: 'asc'
					}
				},
				stream: {
					include: {}
				}
			}
		})

		if (!channel) {
			throw new NotFoundException('Канал не найден')
		}

		return channel
	}

	public async findFollowersCountByChannel(channelId: string) {
		const count = await this.prismaService.follow.count({
			where: {
				following: {
					id: channelId
				}
			}
		})

		return count
	}
}
