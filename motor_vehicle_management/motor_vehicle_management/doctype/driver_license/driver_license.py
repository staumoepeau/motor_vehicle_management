# -*- coding: utf-8 -*-
# Copyright (c) 2020, Caitlah Technology and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe import _, msgprint, throw
from frappe.utils import add_years, getdate, add_to_date, today



class DriverLicense(Document):
	
    
    def on_submit(self):
        self.update_customer_driver_license()

    def validate(self):
        self.get_driver_license_number()


    def update_customer_driver_license(self):
        frappe.db.sql("""UPDATE `tabCustomer` SET `driver_license` = %s """, (self.name))

	
    def get_driver_license_number(self):
        if not self.license_number:
            self.license_number = self.name
	

		