import { Id } from '@api/_generated/dataModel';

import { UserResource } from '@clerk/types';
export type UserStatsTypes = {
	totalExecutions: number;
	languagesCount: number;
	languages: string[];
	last24Hours: number;
	favoriteLanguage: string;
	languageStats: Record<string, number>;
	mostStarredLanguage: string;
};
export type UserDataTypes = {
	_id: Id<'users'>;
	_creationTime: number;
	proSince?: number;
	lemonSqueezyCustomerId?: string;
	lemonSqueezyOrderId?: string;
	name: string;
	userId: string;
	email: string;
	isPro: boolean;
};
export type ProfileHeaderProps = {
	userStats: UserStatsTypes;
	userData: UserDataTypes;
	user: UserResource;
};
