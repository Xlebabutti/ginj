import { Args, Context, Mutation, Resolver } from '@nestjs/graphql'

import type { User } from '@/prisma/generated'
import { Authorization } from '@/shared/decorators/auth.decorator'
import { Authorized } from '@/shared/decorators/authorized.decorator'
import { UserAgent } from '@/shared/decorators/user-agent.decorator'
import { GqlContext } from '@/shared/types/gql-context.types'

import { AuthModel } from '../account/models/auth.model'

import { DeactivateService } from './deactivate.service'
import { DeactivateAccountInput } from './inputs/deactivate-account.input'

@Resolver('Deactivate')
export class DeactivateResolver {
	public constructor(private readonly deactivateService: DeactivateService) {}

	@Authorization()
	@Mutation(() => AuthModel, { name: 'deactivateAccount' })
	public async deactivate(
		@Context() { req }: GqlContext,
		@Args('data') input: DeactivateAccountInput,
		@Authorized() user: User,
		@UserAgent() userAgent: string
	) {
		return this.deactivateService.deactivate(req, input, user, userAgent)
	}
}
