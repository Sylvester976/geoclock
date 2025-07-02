$(document).ready(function() {
    $('#staffTable').DataTable({
        // This DOM string adds the buttons to the top of the table
        dom: 'Bfrtip',

        // This array defines the buttons to show
        buttons: [
            'copy',
            'csv',
            'excel',
            'pdf',
            'print'
        ]
    });
});

$(document).ready(function() {
    $('#designationTable').DataTable({
        // This DOM string adds the buttons to the top of the table
        dom: 'Bfrtip',

        // This array defines the buttons to show
        buttons: []
    });
});

$(document).ready(function() {
    $('#roleTable').DataTable({
        // This DOM string adds the buttons to the top of the table
        dom: 'Bfrtip',

        // This array defines the buttons to show
        buttons: []
    });
});

