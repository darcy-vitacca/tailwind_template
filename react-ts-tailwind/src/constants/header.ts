import {
    BookmarkAltIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorClickIcon,
    PhoneIcon,
    PlayIcon,
    RefreshIcon,
    ShieldCheckIcon,
    SupportIcon,
    ViewGridIcon,
} from '@heroicons/react/outline';

export const headerConstants = {
    solutions: [
        {
            name: 'Analytics',
            description:
                'Get a better understanding of where your traffic is coming from.',
            href: '/test2',
            icon: ChartBarIcon,
        },
        {
            name: 'Engagement',
            description: 'Speak directly to your customers in a more meaningful way.',
            href: '/test2',
            icon: CursorClickIcon,
        },
        {
            name: 'Security',
            description: "Your customers' data will be safe and secure.",
            href: '/test2',
            icon: ShieldCheckIcon,
        },
        {
            name: 'Integrations',
            description: "Connect with third-party tools that you're already using.",
            href: '/test2',
            icon: ViewGridIcon,
        },
        {
            name: 'Automations',
            description:
                'Build strategic funnels that will drive your customers to convert',
            href: '/test2',
            icon: RefreshIcon,
        },
    ],
    callsToAction: [
        { name: 'Watch Demo', href: '/test2', icon: PlayIcon },
        { name: 'Contact Sales', href: '/test2', icon: PhoneIcon },
    ],
    resources: [
        {
            name: 'Help Center',
            description:
                'Get all of your questions answered in our forums or contact support.',
            href: '/test2',
            icon: SupportIcon,
        },
        {
            name: 'Guides',
            description:
                'Learn how to maximize our platform to get the most out of it.',
            href: '/test2',
            icon: BookmarkAltIcon,
        },
        {
            name: 'Events',
            description:
                'See what meet-ups and other events we might be planning near you.',
            href: '/test2',
            icon: CalendarIcon,
        },
        {
            name: 'Security',
            description: 'Understand how we take your privacy seriously.',
            href: '/test2',
            icon: ShieldCheckIcon,
        },
    ],
    recentPosts: [
        { id: 1, name: 'Boost your conversion rate', href: '/test2' },
        {
            id: 2,
            name: 'How to use search engine optimization to drive traffic to your site',
            href: '/test2',
        },
        { id: 3, name: 'Improve your customer experience', href: '/test2' },
    ]
}