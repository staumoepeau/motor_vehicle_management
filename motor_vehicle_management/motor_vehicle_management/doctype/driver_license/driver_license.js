// Copyright (c) 2020, Caitlah Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Driver License', {
    refresh: function(frm) {

        cur_frm.add_custom_button(__('Renew'), function() {
            make_payment_entry(frm);
        }, __('License'));
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

    license_period: function(frm) {

        if (frm.doc.license_period == 1) {
            //            frappe.msgprint(__("License Period : 1"));
            frm.set_value("expiry_date", frappe.datetime.add_months(frm.doc.issuing_date, 12));

        } else {
            frm.set_value('expiry_date', frappe.datetime.add_months(frm.doc.issuing_date, 36));
        }
    },

});