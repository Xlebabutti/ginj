'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { CircleCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useCreateUserMutation } from '@/graphql/generated/output';

import {
    type TypeCreateAccountSchema,
    createAccountSchema,
} from '@/schemas/auth/create-account.schema';

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from '@/shared/ui/form';
import { Alert, AlertDescription, AlertTitle } from '@/shared/ui/alert';
import { Input } from '@/shared/ui/input';
import { AuthWrapper } from '../auth-wrapper';
import { Button } from '@/shared/ui/button';

export function CreateAccountForm() {
    const t = useTranslations('auth.register');

    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<TypeCreateAccountSchema>({
        resolver: zodResolver(createAccountSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
        },
    });

    const [create, { loading: isLoadingCreate }] = useCreateUserMutation({
        onCompleted() {
            setIsSuccess(true);
        },
        onError() {
            toast.error(t('errorMessage'));
        },
    });

    const { isValid } = form.formState;

    function onSubmit(data: TypeCreateAccountSchema) {
        create({ variables: { data } });
    }

    return (
        <AuthWrapper
            heading={t('heading')}
            backButtonLabel={t('backButtonLabel')}
            backButtonHref="/login"
        >
            {isSuccess ? (
                <Alert>
                    <CircleCheck className="size-4" />
                    <AlertTitle>{t('successAlertTitle')}</AlertTitle>
                    <AlertDescription>
                        {t('successAlertDescription')}
                    </AlertDescription>
                </Alert>
            ) : (
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="grid gap-y-3"
                    >
                        <FormField
                            control={form.control}
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('usernameLabel')}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="johndoe"
                                            disabled={isLoadingCreate}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        {t('usernameDescription')}
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('emailLabel')}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="john.doe@example.com"
                                            disabled={isLoadingCreate}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        {t('emailDescription')}
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{t('passwordLabel')}</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="********"
                                            type="password"
                                            disabled={isLoadingCreate}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormDescription>
                                        {t('passwordDescription')}
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <Button
                            className="mt-2 w-full"
                            disabled={!isValid || isLoadingCreate}
                        >
                            {t('submitButton')}
                        </Button>
                    </form>
                </Form>
            )}
        </AuthWrapper>
    );
}
