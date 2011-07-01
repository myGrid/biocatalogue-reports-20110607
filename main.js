google.load('visualization', '1', {
  'packages':['corechart']
});

google.setOnLoadCallback(drawCharts);

function drawCharts() {

  // Service types

  var serviceTypesData = new google.visualization.DataTable();
  serviceTypesData.addColumn('string', 'Status');
  serviceTypesData.addColumn('number', 'Count');
  serviceTypesData.addRows([
    [ 'SOAP', 1971 ],
    [ 'REST', 84 ]
  ]);
  var serviceTypesChart = new google.visualization.PieChart(document.getElementById('service_types_graph_div'));
  serviceTypesChart.draw(serviceTypesData, {
    width: 300,
    height: 200,
    title: null,
    pieSliceText: 'none'
  });

  // Service monitoring status

  var serviceStatusData = new google.visualization.DataTable();
  serviceStatusData.addColumn('string', 'Status');
  serviceStatusData.addColumn('number', 'Count');
  serviceStatusData.addRows([
    [ 'Passing', 1325 ],
    [ 'Failing', 577 ]
  ]);
  var serviceStatusChart = new google.visualization.PieChart(document.getElementById('service_status_graph_div'));
  serviceStatusChart.draw(serviceStatusData, {
    width: 300,
    height: 200,
    title: null,
    pieSliceText: 'none'
  });
  
  
  // Monitoring test results

  var allTestResultsData = new google.visualization.DataTable();
  allTestResultsData.addColumn('string', 'Status');
  allTestResultsData.addColumn('number', 'Count');
  allTestResultsData.addRows([
    [ 'Passed', 2372598 ],
    [ 'Failed', 266366 ]
  ]);
  var allTestResultsChart = new google.visualization.PieChart(document.getElementById('all_test_results_graph_div'));
  allTestResultsChart.draw(allTestResultsData, {
    width: 300,
    height: 200,
    title: null,
    pieSliceText: 'none'
  });
  
  var availTestResultsData = new google.visualization.DataTable();
  availTestResultsData.addColumn('string', 'Status');
  availTestResultsData.addColumn('number', 'Count');
  availTestResultsData.addRows([
    [ 'Passed', 2246238 ],
    [ 'Failed', 120965 ]
  ]);
  var availTestResultsChart = new google.visualization.PieChart(document.getElementById('avail_test_results_graph_div'));
  availTestResultsChart.draw(availTestResultsData, {
    width: 300,
    height: 200,
    title: null,
    pieSliceText: 'none'
  });
  
  var scriptTestResultsData = new google.visualization.DataTable();
  scriptTestResultsData.addColumn('string', 'Status');
  scriptTestResultsData.addColumn('number', 'Count');
  scriptTestResultsData.addRows([
    [ 'Passed', 126360 ],
    [ 'Failed', 145401 ]
  ]);
  var scriptTestResultsChart = new google.visualization.PieChart(document.getElementById('script_test_results_graph_div'));
  scriptTestResultsChart.draw(scriptTestResultsData, {
    width: 300,
    height: 200,
    title: null,
    pieSliceText: 'none'
  });


  // Users over time

  var usersTimeData = new google.visualization.DataTable();
  usersTimeData.addColumn('string', 'Month');
  usersTimeData.addColumn('number', 'Per Month');
  usersTimeData.addColumn('number', 'Cumulative');
  usersTimeData.addRows([
  [ 'Nov 08', 11, 11 ],
  [ 'Dec 08', 1, 12 ],
  [ 'Jan 09', 3, 15 ],
  [ 'Feb 09', 1, 16 ],
  [ 'Mar 09', 4, 20 ],
  [ 'Apr 09', 5, 25 ],
  [ 'May 09', 7, 32 ],
  [ 'Jun 09', 13, 45 ],
  [ 'Jul 09', 48, 93 ],
  [ 'Aug 09', 10, 103 ],
  [ 'Sep 09', 13, 116 ],
  [ 'Oct 09', 12, 128 ],
  [ 'Nov 09', 23, 151 ],
  [ 'Dec 09', 17, 168 ],
  [ 'Jan 10', 16, 184 ],
  [ 'Feb 10', 16, 200 ],
  [ 'Mar 10', 128, 328 ],
  [ 'Apr 10', 15, 343 ],
  [ 'May 10', 15, 358 ],
  [ 'Jun 10', 25, 383 ],
  [ 'Jul 10', 18, 401 ],
  [ 'Aug 10', 6, 407 ],
  [ 'Sep 10', 11, 418 ],
  [ 'Oct 10', 15, 433 ],
  [ 'Nov 10', 13, 446 ],
  [ 'Dec 10', 18, 464 ],
  [ 'Jan 11', 8, 472 ],
  [ 'Feb 11', 12, 484 ],
  [ 'Mar 11', 17, 501 ],
  [ 'Apr 11', 13, 514 ],
  [ 'May 11', 15, 529 ],
  [ 'Jun 11', 5, 534 ]
  ]);
  var usersTimeChart = new google.visualization.AreaChart(document.getElementById('users_time_graph_div'));
  usersTimeChart.draw(usersTimeData, {
    width: 700,
    height: 300,
    title: null,
    hAxis: {
      title: 'Month'
    }
  });

  // Services over time

  var servicesTimeData = new google.visualization.DataTable();
  servicesTimeData.addColumn('string', 'Month');
  servicesTimeData.addColumn('number', 'Per Month');
  servicesTimeData.addColumn('number', 'Cumulative');
  servicesTimeData.addRows([
  [ 'Nov 08', 58, 58 ],
  [ 'Dec 08', 3, 61 ],
  [ 'Jan 09', 5, 66 ],
  [ 'Feb 09', 68, 134 ],
  [ 'Mar 09', 279, 413 ],
  [ 'Apr 09', 46, 459 ],
  [ 'May 09', 500, 959 ],
  [ 'Jun 09', 83, 1042 ],
  [ 'Jul 09', 11, 1053 ],
  [ 'Aug 09', 1, 1054 ],
  [ 'Sep 09', 4, 1058 ],
  [ 'Oct 09', 5, 1063 ],
  [ 'Nov 09', 68, 1131 ],
  [ 'Dec 09', 15, 1146 ],
  [ 'Jan 10', 4, 1150 ],
  [ 'Feb 10', 14, 1164 ],
  [ 'Mar 10', 440, 1604 ],
  [ 'Apr 10', 8, 1612 ],
  [ 'May 10', 62, 1674 ],
  [ 'Jun 10', 7, 1681 ],
  [ 'Jul 10', 5, 1686 ],
  [ 'Aug 10', 2, 1688 ],
  [ 'Sep 10', 22, 1710 ],
  [ 'Oct 10', 11, 1721 ],
  [ 'Nov 10', 1, 1722 ],
  [ 'Dec 10', 10, 1732 ],
  [ 'Jan 11', 3, 1735 ],
  [ 'Feb 11', 1, 1736 ],
  [ 'Mar 11', 14, 1750 ],
  [ 'Apr 11', 300, 2050 ],
  [ 'May 11', 2, 2052 ],
  [ 'Jun 11', 4, 2056 ]
  ]);
  var servicesTimeChart = new google.visualization.AreaChart(document.getElementById('services_time_graph_div'));
  servicesTimeChart.draw(servicesTimeData, {
    width: 700,
    height: 300,
    title: null,
    hAxis: {
      title: 'Month'
    }
  });

  // Annotations over time (by all sources)

  var annotationsAllTimeData = new google.visualization.DataTable();
  annotationsAllTimeData.addColumn('string', 'Month');
  annotationsAllTimeData.addColumn('number', 'Per Month');
  annotationsAllTimeData.addColumn('number', 'Cumulative');
  annotationsAllTimeData.addRows([
  [ 'Dec 08', 9, 9 ],
  [ 'Jan 09', 110, 119 ],
  [ 'Feb 09', 267, 386 ],
  [ 'Mar 09', 1007, 1393 ],
  [ 'Apr 09', 5913, 7306 ],
  [ 'May 09', 1458, 8764 ],
  [ 'Jun 09', 3390, 12154 ],
  [ 'Jul 09', 138, 12292 ],
  [ 'Aug 09', 8, 12300 ],
  [ 'Sep 09', 185, 12485 ],
  [ 'Oct 09', 201, 12686 ],
  [ 'Nov 09', 946, 13632 ],
  [ 'Dec 09', 196, 13828 ],
  [ 'Jan 10', 42, 13870 ],
  [ 'Feb 10', 637, 14507 ],
  [ 'Mar 10', 3426, 17933 ],
  [ 'Apr 10', 1300, 19233 ],
  [ 'May 10', 532, 19765 ],
  [ 'Jun 10', 388, 20153 ],
  [ 'Jul 10', 176, 20329 ],
  [ 'Aug 10', 15, 20344 ],
  [ 'Sep 10', 190, 20534 ],
  [ 'Oct 10', 328, 20862 ],
  [ 'Nov 10', 29, 20891 ],
  [ 'Dec 10', 101, 20992 ],
  [ 'Jan 11', 143, 21135 ],
  [ 'Feb 11', 31, 21166 ],
  [ 'Mar 11', 255, 21421 ],
  [ 'Apr 11', 996, 22417 ],
  [ 'May 11', 30, 22447 ],
  [ 'Jun 11', 30, 22477 ]
  ]);
  var annotationsAllTimeChart = new google.visualization.AreaChart(document.getElementById('annotations_all_time_graph_div'));
  annotationsAllTimeChart.draw(annotationsAllTimeData, {
    width: 700,
    height: 300,
    title: null,
    hAxis: {
      title: 'Month'
    }
  });

  // Annotations over time (by all sources)

  var annotationsUsersTimeData = new google.visualization.DataTable();
  annotationsUsersTimeData.addColumn('string', 'Month');
  annotationsUsersTimeData.addColumn('number', 'Per Month');
  annotationsUsersTimeData.addColumn('number', 'Cumulative');
  annotationsUsersTimeData.addRows([
  [ 'Dec 08', 9, 9 ],
  [ 'Jan 09', 110, 119 ],
  [ 'Feb 09', 267, 386 ],
  [ 'Mar 09', 260, 646 ],
  [ 'Apr 09', 26, 672 ],
  [ 'May 09', 22, 694 ],
  [ 'Jun 09', 2528, 3222 ],
  [ 'Jul 09', 138, 3360 ],
  [ 'Aug 09', 8, 3368 ],
  [ 'Sep 09', 185, 3553 ],
  [ 'Oct 09', 201, 3754 ],
  [ 'Nov 09', 910, 4664 ],
  [ 'Dec 09', 163, 4827 ],
  [ 'Jan 10', 42, 4869 ],
  [ 'Feb 10', 637, 5506 ],
  [ 'Mar 10', 2573, 8079 ],
  [ 'Apr 10', 249, 8328 ],
  [ 'May 10', 532, 8860 ],
  [ 'Jun 10', 388, 9248 ],
  [ 'Jul 10', 176, 9424 ],
  [ 'Aug 10', 15, 9439 ],
  [ 'Sep 10', 190, 9629 ],
  [ 'Oct 10', 328, 9957 ],
  [ 'Nov 10', 29, 9986 ],
  [ 'Dec 10', 101, 10087 ],
  [ 'Jan 11', 143, 10230 ],
  [ 'Feb 11', 31, 10261 ],
  [ 'Mar 11', 255, 10516 ],
  [ 'Apr 11', 105, 10621 ],
  [ 'May 11', 30, 10651 ],
  [ 'Jun 11', 30, 10681 ]
  ]);
  var annotationsUsersTimeChart = new google.visualization.AreaChart(document.getElementById('annotations_users_time_graph_div'));
  annotationsUsersTimeChart.draw(annotationsUsersTimeData, {
    width: 700,
    height: 300,
    title: null,
    hAxis: {
      title: 'Month'
    }
  });

}