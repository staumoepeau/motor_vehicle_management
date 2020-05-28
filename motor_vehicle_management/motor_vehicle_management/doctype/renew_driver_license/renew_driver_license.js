// Copyright (c) 2020, Caitlah Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Renew Driver License', {
    // refresh: function(frm) {

    // }
    license_period: function(frm) {

        calculate_expiry_date(frm);
    },

    license_frequency: function(frm) {

        calculate_expiry_date(frm);
    }
});

var calculate_expiry_date = function(frm) {

    if (frm.doc.license_period == "Years") {
        if (frm.doc.license_frequency == 1) {
            frm.set_value("expiry_date", frappe.datetime.add_months(frm.doc.issuing_date, 12));
        } else if (frm.doc.license_frequency == 3) {
            frm.set_value("expiry_date", frappe.datetime.add_months(frm.doc.issuing_date, 36));
        } else if (frm.doc.license_frequency == 5) {
            frm.set_value("expiry_date", frappe.datetime.add_months(frm.doc.issuing_date, 60));

        }
    }
}