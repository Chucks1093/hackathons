export type LoginType = {
	email: string;
	password: string;
};

export type LoginResponse = {
	status: string;
	message: string;
	data: {
		_id: string;
		username: string;
		email: string;
		password: string;
		teams: string[];
		isTermsAccepted: boolean;
		lastLogin: string;
		isDeleted: boolean;
		createdAt: string;
		updatedAt: string;
		__v: number;
		refreshToken: string;
	};
};

export type UserRegistrationInfo = {
	username: string;
	email: string;
	password: string;
	isTermsAccepted: boolean;
};
