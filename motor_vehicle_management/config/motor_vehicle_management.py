from __future__ import unicode_literals
from frappe import _

def get_data():
	return [
		{
			"label": _("MVM Settings"),
			"items": [
				{
					"type": "doctype",
					"name": "Vehicle Class",
					"description":_("Vehicle Class"),
					"onboard": 1,
				},
				{
					"type": "doctype",
					"name": "Vehicle Maker",
					"description":_("Vehicle Maker"),
					"onboard": 1,
				},
				{
					"type": "doctype",
					"name": "Driving License Class",
					"description":_("Driving License Class"),
					"onboard": 1,
				},
			]
		},
		{
			"label": _("Driver"),
			"items": [

				{
					"type": "doctype",
					"name": "Driver License",
					"description":_("Driver License."),
					"onboard": 1,
				},
				{
					"type": "doctype",
					"name": "Driver License Test",
					"description":_("Driver License Test."),
					"onboard": 1,
				},
			]
		},
		
		{
			"label": _("Vehicle"),
			"items": [
				{
					"type": "doctype",
					"name": "Vehicle Registration",
					"description":_("Vehicle Registration."),
					"onboard": 1,
				},
								{
					"type": "doctype",
					"name": "Vehicle License",
					"description":_("Vehicle License."),
					"onboard": 1,
				},
								{
					"type": "doctype",
					"name": "Warrant of Fitness",
					"description":_("Warrant of Fitness."),
					"onboard": 1,
				},
				
			]
		},
		{
			"label": _("Customer"),
			"items": [
				{
					"type": "doctype",
					"name": "Customer",
					"description":_("Customer"),
					"onboard": 1,
				},
			]
		},
		
	]