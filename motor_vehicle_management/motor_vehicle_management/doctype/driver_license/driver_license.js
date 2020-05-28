// Copyright (c) 2020, Caitlah Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Driver License', {
    refresh: function(frm) {

        if (frm.doc.docstatus == 1 && frm.doc.driver_license_status == "Expired") {
            cur_frm.add_custom_button(__('Renew'), function() {
                renew_driver_license(frm);
            }, __('License'));
        }
        if (frm.doc.docstatus == 1 && frm.doc.driver_license_status != "Cancel") {
            cur_frm.add_custom_button(__('Cancel'), function() {
                cancel_driver_license(frm);
            }, __('License'));
        }

        if (frm.doc.docstatus == 1 && frm.doc.payment_status != "Paid") {

            cur_frm.add_custom_button(__('Payment'), function() {
                make_payment_entry(frm);
            }, __('Create'));

            $(".fa-print:visible").hide();
            $(".btn:Contains('Menu'):visible").hide();

        }
        if (frm.doc.docstatus == 1 && frm.doc.payment_status == "Paid") {
            $(".fa-print:visible").show();
        }

    },

    dob: function(frm) {

        //   frm.set_value("years_old", frappe.datetime.add_months(frm.doc.issuing_date, 12));
        frm.set_value("years_old", moment().diff(cur_frm.doc.dob, 'years'));
        frm.refresh_field("years_old")

    },
    excempt_from_test: function(frm) {

    },

    issuing_date: function(frm) {

        calculate_expiry_date(frm);
    },

    license_frequency: function(frm) {

        calculate_expiry_date(frm);
    }

});

var renew_driver_license = function(frm) {
    frappe.route_options = {
        "license_number": frm.doc.license_number,
        "customer": frm.doc.customer,
        "driving_license_class": frm.doc.driving_license_class,

        "mydoctype": "Driver License"
    }
    frappe.new_doc("Renew Driver License");
    frappe.set_route("Form", "Renew Driver License", doc.name);
}
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
var cancel_driver_license = function(frm) {
    frm.set_value('driver_license_status', "Cancel")
        //frm.set_value('docstatus', 2)
}