import { Boxes, Globe, RefreshCcw, Shield } from 'lucide-react';

export interface EnterpriseFeature {
	icon: React.ElementType;
	label: string;
	desc: string;
}

export const ENTERPRISE_FEATURES: EnterpriseFeature[] = [
	{
		icon: Globe,
		label: 'Global Infrastructure',
		desc: 'Lightning-fast execution across worldwide edge nodes',
	},
	{
		icon: Shield,
		label: 'Enterprise Security',
		desc: 'Bank-grade encryption and security protocols',
	},
	{
		icon: RefreshCcw,
		label: 'Real-time Sync',
		desc: 'Instant synchronization across all devices',
	},
	{
		icon: Boxes,
		label: 'Unlimited Storage',
		desc: 'Store unlimited snippets and projects',
	},
];

export interface FeatureCategories {
	development: string[];
	collaboration: string[];
	deployment: string[];
}

// Lista de características generales categorizadas
export const FEATURES: FeatureCategories = {
	development: ['Advanced AI', 'Custom theme builder', 'Integrated debugging tools', 'Multi-language support'],
	collaboration: ['Real-time pair programming', 'Team workspaces', 'Version control integration', 'Code review tools'],
	deployment: ['One-click deployment', 'CI/CD integration', 'Container support', 'Custom domain mapping'],
};
