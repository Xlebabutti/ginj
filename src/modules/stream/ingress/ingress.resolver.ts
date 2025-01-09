import { Args, Mutation, Resolver } from '@nestjs/graphql'
import type { IngressInput } from 'livekit-server-sdk'

import { IngressService } from './ingress.service'

@Resolver('Ingress')
export class IngressResolver {
	public constructor(private readonly ingressService: IngressService) {}

	@Mutation(() => Boolean, { name: 'createIngress' })
	public async create(@Args('ingressType') ingressType: IngressInput) {
		return this.ingressService.create(ingressType)
	}
}
