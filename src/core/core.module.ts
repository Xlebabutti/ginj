import { ApolloDriver } from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { getGraphQLConfig } from 'src/config/graphql.config'

import { PasswordRecoveryModule } from '@/modules/auth/password-recovery/password-recovery.module'
import { TotpModel } from '@/modules/auth/totp/models/totp.model'
import { ChannelModule } from '@/modules/channel/channel.module'
import { MailModule } from '@/modules/libs/mail/mail.module'
import { TelegramModule } from '@/modules/libs/telegram/telegram.module'

import { getLiveKitConfig } from '../config/livekit.config'
import { AccountModule } from '../modules/auth/account/account.module'
import { SessionModule } from '../modules/auth/session/session.module'
import { VerificationModule } from '../modules/auth/verification/verification.module'
import { LivekitModule } from '../modules/libs/livekit/livekit.module'
import { IngressModule } from '../modules/stream/ingress/ingress.module'
import { StreamModule } from '../modules/stream/stream.module'
import { IS_DEV_ENV } from '../shared/utils/is-dev.util'

import { DeactivateModule } from './../modules/auth/deactivate/deactivate.module'
import { PrismaModule } from './prisma/prisma.module'
import { RedisModule } from './redis/redis.module'

@Module({
	imports: [
		ConfigModule.forRoot({
			ignoreEnvFile: !IS_DEV_ENV,
			isGlobal: true
		}),
		GraphQLModule.forRootAsync({
			driver: ApolloDriver,
			imports: [ConfigModule],
			useFactory: getGraphQLConfig,
			inject: [ConfigService]
		}),
		LivekitModule.registerAsync({
			imports: [ConfigModule],
			useFactory: getLiveKitConfig,
			inject: [ConfigService]
		}),
		PrismaModule,
		RedisModule,
		MailModule,
		LivekitModule,
		TelegramModule,
		StreamModule,
		IngressModule,
		AccountModule,
		SessionModule,
		ChannelModule,
		DeactivateModule,
		VerificationModule,
		PasswordRecoveryModule,
		TotpModel
	]
})
export class CoreModule {}
