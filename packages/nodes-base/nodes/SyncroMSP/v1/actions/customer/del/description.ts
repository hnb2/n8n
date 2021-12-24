import {
	CustomerProperties,
} from '../../Interfaces';

export const customerDeleteDescription: CustomerProperties = [
	{
		displayName: 'Customer ID',
		name: 'id',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: [
					'customer',
				],
				operation: [
					'delete',
				],
			},
		},
		default: '',
		description: 'Delete a specific customer by ID',
	},
];
