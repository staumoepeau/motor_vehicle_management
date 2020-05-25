// Copyright (c) 2020, Caitlah Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Warrant of Fitness', {
    refresh: function(frm) {

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

    inspection_date: function(frm) {

        //        frm.set_value("expiry_date", frappe.datetime.add_months(frm.doc.inspection_date, 12));

    },

});

var make_payment_entry = function(frm) {
    frappe.call({
        doc: frm.doc,
        method: "invoice_warrant_of_fitness",
        callback: function(data) {
            if (!data.exc) {
                if (data.message.invoice) {
                    /* frappe.show_alert(__('Sales Invoice {0} created',
                    ['<a href="#Form/Sales Invoice/'+data.message.invoice+'">' + data.message.invoice+ '</a>'])); */
                    frappe.set_route("Form", "Sales Invoice", data.message.invoice);
                }
                cur_frm.reload_doc();
            }
        }
    });
};