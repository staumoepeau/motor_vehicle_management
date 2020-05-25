// Copyright (c) 2020, Caitlah Technology and contributors
// For license information, please see license.txt

frappe.ui.form.on('Vehicle Registration', {


    onload: function(frm) {

        //        frm.set_df_property("license_plate", "read_only", 1);


    },

    refresh: function(frm) {



    },

    plate_type: function(frm) {
        //        if (frm.doc.plate_type == "Custom") {
        //            frm.set_df_property("license_plate", "read_only", 0);
        //            frm.set_df_property("license_plate_prefix", "hidden", 1);
        //            frm.doc.license_plate_prefix == ""
        //        }
        //        if (frm.doc.plate_type == "Normal") {
        //            frm.set_df_property("license_plate", "read_only", 1);
        //            frm.set_df_property("license_plate_prefix", "hidden", 0);
        //        }

    }
});