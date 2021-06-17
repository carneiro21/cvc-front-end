export class FinancialScheduleDTO {

    public id: number;
		
    constructor(
        public originAccount: string,
        public destinationAccount: string,
        public transferValue: number,
        public transferData: Date,
	    public schedulingDate: Date
    ) { }
}

export interface FilterFinancialScheduleDTO {
    originAccount: string;
    destinationAccount: string;
    transferValue: number;
    transferDataInit: string;
    transferDataFinal: string;
    schedulingDateInit: string;
    schedulingDateFinal: string;
    pageNumber: number;
    pageSize: number;
    totalrecords: number;
    fieldOrder: string;
    orderingDirection: string;
}