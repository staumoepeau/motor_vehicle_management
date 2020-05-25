// Copyright (c) 2020, Caitlah Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Driver License Test', {
    refresh: function(frm) {
        //        $(`.btn:contains("Cancel"):visible`).hide();
        $(".fa-print:visible").hide();
        if (frm.doc.docstatus == 1 && frm.doc.payment_status != "Paid") {
            cur_frm.add_custom_button(__('Payment'), function() {

            }, __('Create'));
            //    cur_frm.page.set_inner_btn_group_as_primary(__('Create'));
        }
    }
});