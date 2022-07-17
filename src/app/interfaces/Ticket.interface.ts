export interface IComunication {
	date: string // FIXME Date;
	userId: string;
	username: string;
	message: string;
	_id: string;
}

export interface ITicket {
	_id: string;
	username: string;
	userId: string;
	description: string;
	isCompleted: boolean;
	comunications: IComunication[];
	createdAt: string // FIXME Date;
	updatedAt: string // FIXME Date;
	__v: number;
}

export interface INewTicket {
	description: string;
}

export interface IPaginateMetadata {
	page: number;
	totalItems: number;
	itemsPerPage: number;
	totalPages: number;
}

export interface ITicketPaginated {
	pagination: IPaginateMetadata;
	tickets: ITicket[];
}
