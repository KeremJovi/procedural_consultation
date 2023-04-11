export interface Result {
	_id?: string;
	numProcess: string;
	court: string;
	description: string;
	startDate: string;
	movements: IMovement[];
	statusProcess: IStatusProcess[];
	creditor: ICreditor;
	appellant: IAppellant;
	attorney: IAttorney[];
}

export interface IMovement {
	updateDate: string;
	updateDescription: string;
}

export interface IStatusProcess {
	status: string;
}

export interface ICreditor {
	name: string;
	link: string;
}

export interface IAppellant {
	name: string;
	link: string;
}

export interface IAttorney {
	name: string;
	link: string;
}
