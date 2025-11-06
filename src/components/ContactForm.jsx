import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'
import { analytics } from '@/lib/analytics'

// Validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export function ContactForm({ t }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // TODO: Implement actual form submission
      // Options:
      // 1. EmailJS: https://www.emailjs.com/
      // 2. Formspree: https://formspree.io/
      // 3. Your own backend API
      // 4. Serverless function (Vercel/Netlify)

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // For now, open mailto as fallback
      const mailtoLink = `mailto:mikail@lekesiz.fr?subject=${encodeURIComponent(
        data.subject
      )}&body=${encodeURIComponent(
        `From: ${data.name} (${data.email})\n\n${data.message}`
      )}`

      window.location.href = mailtoLink

      analytics.submitContactForm(true)
      setSubmitStatus({ type: 'success', message: t.contact.successMessage || 'Message sent successfully!' })
      reset()
    } catch (error) {
      console.error('Form submission error:', error)
      analytics.submitContactForm(false)
      setSubmitStatus({
        type: 'error',
        message: t.contact.errorMessage || 'Failed to send message. Please try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">{t.contact.form?.name || 'Name'} *</Label>
          <Input
            id="name"
            {...register('name')}
            placeholder={t.contact.form?.namePlaceholder || 'Your name'}
            className={errors.name ? 'border-red-500' : ''}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">{t.contact.form?.email || 'Email'} *</Label>
          <Input
            id="email"
            type="email"
            {...register('email')}
            placeholder={t.contact.form?.emailPlaceholder || 'your@email.com'}
            className={errors.email ? 'border-red-500' : ''}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">{t.contact.form?.subject || 'Subject'} *</Label>
        <Input
          id="subject"
          {...register('subject')}
          placeholder={t.contact.form?.subjectPlaceholder || 'Subject of your message'}
          className={errors.subject ? 'border-red-500' : ''}
        />
        {errors.subject && (
          <p className="text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t.contact.form?.message || 'Message'} *</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder={t.contact.form?.messagePlaceholder || 'Your message...'}
          rows={6}
          className={errors.message ? 'border-red-500' : ''}
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {submitStatus && (
        <div
          className={`flex items-center gap-2 p-4 rounded-lg ${
            submitStatus.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400'
              : 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400'
          }`}
        >
          {submitStatus.type === 'success' ? (
            <CheckCircle2 size={20} />
          ) : (
            <AlertCircle size={20} />
          )}
          <p className="text-sm">{submitStatus.message}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-100"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 animate-spin" size={18} />
            {t.contact.form?.sending || 'Sending...'}
          </>
        ) : (
          t.contact.sendMessage || 'Send Message'
        )}
      </Button>
    </form>
  )
}
