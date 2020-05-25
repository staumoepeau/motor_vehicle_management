# -*- coding: utf-8 -*-
# Copyright (c) 2020, Caitlah Technology and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class VehicleRegistration(Document):
    
    def on_submit(self):
        self.name = self.get_update_name()
    

    def validate(self):
        self.validate_licese_plate()
		

    def get_update_name(self):            
        return self.license_plate

    def validate_licese_plate(self):
        if self.plate_type == "Normal":
            self.license_plate = self.license_plate_prefix + self.name
        if self.plate_type == "Custom":
            self.license_plate = self.license_plate
            self.license_plate_prefix = ""
    				
    				


