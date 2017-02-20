var data= 	[
					{"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
					{"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
					{"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
					{"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
					{"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
					{"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
					{"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
				];
	$(document).ready(function() {
		reconstructTable ();
		$('#submitClickButton').click(
			function() {
				if(!($("input").filter(function () {return $.trim($(this).val()).length > 0}).length == 0)) {
					// temp variable to push into data array of task tracker
					var temp ={};
					// collecting the values
					temp.name= $('#taskName').val();
					temp.date= $('#date').val();
					temp.assigned = $('#assignedTo').val();
					data.unshift(temp);
					reconstructTable ();

				}
			});
	});

	function reconstructTable () {
		var tableContent ='';
			for(var i=0; i<data.length ; i++) {
				tableContent = tableContent + '<tr>'+ '<td> <strong>' +data[i].name+ '</strong></td>'  +'<td>' +data[i].date+ '</td>'+ '<td><strong>' +data[i].assigned+ '</strong></td>'+ '</tr>';
			}
			document.getElementById('tableId').innerHTML=tableContent;
			$('tr:odd').css('background-color', ' #F0F0F0');
	}
