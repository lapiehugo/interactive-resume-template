import {
  GitHubIcon,
  LinkedInIcon,
  EmailIcon,
  PhoneIcon,
  LocationIcon,
  WebsiteIcon,
} from '@/components/icons'
import type { ContactType } from '@/data/types'

const ICON_COMPONENTS: Record<ContactType, React.FC<React.SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: EmailIcon,
  phone: PhoneIcon,
  location: LocationIcon,
  website: WebsiteIcon,
}

function autoHref(type: ContactType, label: string, href?: string): string | undefined {
  if (href) return href
  if (type === 'email') return `mailto:${label}`
  if (type === 'phone') return `tel:${label.replace(/\s/g, '')}`
  return undefined
}

interface ContactItemProps {
  type: ContactType
  label: string
  href?: string
}

export function ContactItem({ type, label, href }: ContactItemProps) {
  const IconComponent = ICON_COMPONENTS[type]
  const resolvedHref = autoHref(type, label, href)

  const content = (
    <span className="flex items-center gap-3 text-sm text-resume-text-secondary">
      <span className="text-resume-primary">
        <IconComponent className="w-4 h-4" />
      </span>
      {label}
    </span>
  )

  if (resolvedHref) {
    return (
      <a
        href={resolvedHref}
        target={type === 'email' || type === 'phone' ? undefined : '_blank'}
        rel={type === 'email' || type === 'phone' ? undefined : 'noopener noreferrer'}
        className="block hover:text-resume-primary transition-colors"
      >
        {content}
      </a>
    )
  }

  return <div>{content}</div>
}
