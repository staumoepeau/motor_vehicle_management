from __future__ import unicode_literals
from frappe import _

def get_data():
	return {
		'heatmap': True,
		'heatmap_message': _('This is based on the how often this Customer'),
		'fieldname': 'mvm_customer',
		'transactions': [
			{
				'label': _('Driver License'),
				'items': ['Driver License', 'Driver License Test']
			},
		]
	}
