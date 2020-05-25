# -*- coding: utf-8 -*-
# Copyright (c) 2020, Caitlah Technology and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class WarrantofFitness(Document):
	


    def on_submit(self):
        self.update_vehicle_registration()
	

    def update_vehicle_registration(self):
        
        doc = frappe.new_doc("Warrant of Fitness Table")
        doc.update({
			"parent" : self.license_plate_id,
			"parentfield" : 'warrant_of_fitness',
			"parenttype" : 'Vehicle Registration',
			"inspection_date":self.inspection_date,
			"inpected_by" : self.inpected_by,
			"inspected_at": self.inspected_at,
			"expiry_date": self.expiry_date,
			"certificate_no" : self.certificate_no,
			"warrant_of_fitness" : self.name
			})
        doc.insert()
        doc.submit()

    def invoice_warrant_of_fitness(self):
        frappe.db.set_value("Warrant of Fitness", self.name)
        sales_invoice = make_invoice(self.name, company)
        sales_invoice.save(ignore_permissions=True)
        return {'invoice': sales_invoice.name}


    def make_invoice(customer, company):
        sales_invoice = frappe.new_doc("Sales Invoice")
        sales_invoice.customer = frappe.get_value("Patient", patient, "customer")
        sales_invoice.due_date = getdate()
        sales_invoice.company = company
        sales_invoice.is_pos = '0'
        sales_invoice.debit_to = get_receivable_account(company)

        item_line = sales_invoice.append("items")
        item_line.item_name = "Registeration Fee"
        item_line.description = "Registeration Fee"
        item_line.qty = 1
        item_line.uom = "Nos"
        item_line.conversion_factor = 1
        item_line.income_account = get_income_account(None, company)
        item_line.rate = frappe.get_value("Healthcare Settings", None, "registration_fee")
        item_line.amount = item_line.rate
        sales_invoice.set_missing_values()
        return sales_invoice
