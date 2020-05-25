# -*- coding: utf-8 -*-
# Copyright (c) 2020, Caitlah Technology and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe

from frappe.utils import getdate, today, add_years, format_datetime, cstr
from frappe import throw, _, scrub
from frappe.model.document import Document

class MVMCustomer(Document):


    def validate(self):
        self.set_employee_name()
        self.validate_date()

    def set_employee_name(self):
        self.full_name = ' '.join(filter(lambda x: x, [self.fname, self.lname]))
	
    def validate_date(self):
        if self.dob and getdate(self.dob) > getdate(today()):
            throw(_("Date of Birth cannot be greater than today."))