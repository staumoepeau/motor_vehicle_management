# -*- coding: utf-8 -*-
# Copyright (c) 2020, Caitlah Technology and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from frappe import _, msgprint, throw
from frappe.utils import add_years, getdate, add_to_date, today



class DriverLicense(Document):
	
    def validate(self):
        self.get_driver_license_number()
	
    def get_driver_license_number(self):
        if not self.license_number:
            self.license_number = self.name
	

		