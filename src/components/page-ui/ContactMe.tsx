'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import ReCAPTCHA from 'react-google-recaptcha';

import { sendContactForm } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

export const contactFormSchema = z.object({
    name: z.string({ required_error: 'Name is requred.' }).trim().min(2, 'Please enter a valid name.').max(50),
    email: z.string({ required_error: 'Email is requred.' }).email('Must be a valid email address.'),
    message: z.string().trim().min(20, 'Please enter a message containing at least 20 characters.').max(500),
    recaptchaToken: z.string()
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;

export function ContactMeForm() {
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

    const form = useForm<z.infer<typeof contactFormSchema>>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
            recaptchaToken: ''
        }
    });

    async function onSubmit(values: ContactFormSchemaType) {
        if (!recaptchaToken) {
            toast('Please complete the reCAPTCHA.');
            return;
        }
        
        values.recaptchaToken = recaptchaToken;
        
        try {
            const response = await sendContactForm(values);

            if (response.success) {
                form.reset();
                toast('Your message has been sent successfully.');
            } else {
                toast('An error occurred while sending your message. Please try again later.');
            }
        } catch (error) {
            console.error(error);
            toast('An error occurred while sending your message. Please try again later.');
        } finally {
            setRecaptchaToken(null);
        }
    }

    return (
        <div id="contact-me" className="mx-auto h-screen max-w-5xl px-8 py-20 md:py-32">
            <h1 id="skills" className="pb-8 text-2xl font-bold dark:text-white md:text-7xl">
                Contact Me
            </h1>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-xl space-y-8">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="email@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Message</FormLabel>
                                <FormControl>
                                    <Textarea rows={7} placeholder="Type your message here." {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <ReCAPTCHA
                        sitekey={RECAPTCHA_SITE_KEY}
                        onChange={(token) => setRecaptchaToken(token)}
                    />
                    <Button type="submit" disabled={form.formState.isSubmitting}>
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    );
}
