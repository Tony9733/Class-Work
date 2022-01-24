google.charts.load('current', {'packages':['gantt']});
      google.charts.setOnLoadCallback(drawChart);

    function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');

      data.addRows([
        ['p1', 'Initiation', new Date(2022, 0, 10), new Date(2022, 0, 28), null,  50,  null],
        ['p2', 'Planning', new Date(2022, 1, 01),new Date(2022, 1, 20), null, 25, 'p1'],
        ['p3', 'Closing ', new Date(2022, 2,16 ), new Date(2022, 2,20 ),null, 20, null],
        ['p4', 'Execution', new Date(2022, 1, 21), new Date(2022, 2,15 ),null, 75, 'p2'],
        ['p5', 'Evaluations', new Date(2022, 2, 21), new Date(2022, 2,31 ),null, 100, 'p1, p2, p3, p4']
      ]);

      var options = {
        height: 275
      };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));

      chart.draw(data, options);
    }