export interface Comunication {
	date: string // FIXME Date;
	userId: string;
	username: string;
	message: string;
	_id: string;
}

export interface Ticket {
	_id: string;
	username: string;
	userId: string;
	description: string;
	isCompleted: boolean;
	comunications?: Comunication[];
	createdAt: string // FIXME Date;
	updatedAt: string // FIXME Date;
	__v: number;
}

export interface PaginateMetadata {
	page: number;
	totalItems: number;
	itemsPerPage: number;
	totalPages: number;
}

export interface TicketPaginated {
	pagination: PaginateMetadata;
	tickets?: Ticket[];
}
