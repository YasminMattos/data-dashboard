window.addEventListener('load', function() {
  var listado = document.getElementById('listbox');

  listado.addEventListener('change', function() {
    var sede = listado.options[listado.selectedIndex].getAttribute('data-sede');
    var generacion = listado.value;

    
    google.charts.load('current', {'packages': ['corechart']});
   
    // Establece una llamada que se ejecuta cuando la API es cargada.
    google.charts.setOnLoadCallback(drawChart1);
    google.charts.setOnLoadCallback(drawChart2);
    google.charts.setOnLoadCallback(drawChart3);
    google.charts.setOnLoadCallback(drawChart4);
    google.charts.setOnLoadCallback(drawChart5);
    google.charts.setOnLoadCallback(drawChart6);
    google.charts.setOnLoadCallback(drawChart7);
    google.charts.setOnLoadCallback(drawChart8);
    google.charts.setOnLoadCallback(drawChart9);
   
    
    function drawChart1() {
      // Crea los datos del gráfico.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Slices');
      data.addRows([
        ['Activo', estadoEstudiante(sede, generacion)[0]],
        ['desertores', estadoEstudiante(sede, generacion)[1]],
      ]);
      var options = {'title': 'Estado Estudiante',
        'width': 500,
        'height': 400,
        'is3D': true
      };
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }
    
    function drawChart2() {
      // Crea los datos del gráfico.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Cantidad');
      data.addRows([
        ['S1', stdGreatLab(sede, generacion)[0]],
        ['S2', stdGreatLab(sede, generacion)[1]],
        ['S3', stdGreatLab(sede, generacion)[2]],
        ['S4', stdGreatLab(sede, generacion)[3]],
      ]);
      var options = {'title': 'Estudiantes Satisfechas',
        'width': 500,
        'height': 400};
      var chart = new google.visualization.ColumnChart(document.getElementById('draw-satisfacion'));
      chart.draw(data, options);
    }
    function drawChart3() {
      // Crea los datos del gráfico.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Cantidad');
      data.addRows([
        ['S1', scoreTeachers(sede, generacion)[0]],
        ['S2', scoreTeachers(sede, generacion)[1]],
        ['S3', scoreTeachers(sede, generacion)[2]],
        ['S4', scoreTeachers(sede, generacion)[3]],
      ]);
      var options = {'title': 'Puntuación de profesores',
        'width': 500,
        'height': 400};
      var chart = new google.visualization.ColumnChart(document.getElementById('draw-scoreTeacher'));
      chart.draw(data, options);
    }
    function drawChart4() {
      // Crea los datos del gráfico.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Cantidad');
      data.addRows([
        ['S1', scoreJedis(sede, generacion)[0]],
        ['S2', scoreJedis(sede, generacion)[1]],
        ['S3', scoreJedis(sede, generacion)[2]],
        ['S4', scoreJedis(sede, generacion)[3]],
      ]);
      var options = {'title': 'Puntuación de Jedi',
        'width': 500,
        'height': 400};
      var chart = new google.visualization.ColumnChart(document.getElementById('draw-scoreJedi' ));
      chart.draw(data, options);
    }
    function drawChart5() {
      // Crea los datos del gráfico.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Cantidad');
      data.addRows([
        ['S1', nps(sede, generacion)[0]],
        ['S2', nps(sede, generacion)[1]],
        ['S3', nps(sede, generacion)[2]],
        ['S4', nps(sede, generacion)[3]],
      ]);
      var options = {'title': 'NPS',
        'width': 500,
        'height': 400};
      var chart = new google.visualization.ColumnChart(document.getElementById('draw-nps'));
      chart.draw(data, options);
    }
    function drawChart6() {
      // Crea los datos del gráfico.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Topping');
      data.addColumn('number', 'Cantidad');
      data.addRows([
        ['S1', nps(sede, generacion)[0]],
        ['S2', nps(sede, generacion)[1]],
        ['S3', nps(sede, generacion)[2]],
        ['S4', nps(sede, generacion)[3]],
      ]);
      var options = {'title': 'Puntaje Técnico',
        'width': 500,
        'height': 400};
      var chart = new google.visualization.ColumnChart(document.getElementById('draw-puntajeTecnico'));
      chart.draw(data, options);
    }
  });
});