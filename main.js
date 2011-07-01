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
    pieSliceText: 'none',
    backgroundColor: '#F7F7F7'
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
    pieSliceText: 'none',
    backgroundColor: '#F7F7F7'
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
    pieSliceText: 'none',
    backgroundColor: '#F7F7F7'
  });


  // Users over time

  var usersTimeData = new google.visualization.DataTable();
  usersTimeData.addColumn('string', 'Month');
  usersTimeData.addColumn('number', 'Cumulative');
  usersTimeData.addRows([
  [ 'Nov 08', 11 ],
  [ 'Dec 08', 12 ],
  [ 'Jan 09', 15 ],
  [ 'Feb 09', 16 ],
  [ 'Mar 09', 20 ],
  [ 'Apr 09', 25 ],
  [ 'May 09', 32 ],
  [ 'Jun 09', 45 ],
  [ 'Jul 09', 93 ],
  [ 'Aug 09', 103 ],
  [ 'Sep 09', 116 ],
  [ 'Oct 09', 128 ],
  [ 'Nov 09', 151 ],
  [ 'Dec 09', 168 ],
  [ 'Jan 10', 184 ],
  [ 'Feb 10', 200 ],
  [ 'Mar 10', 328 ],
  [ 'Apr 10', 343 ],
  [ 'May 10', 358 ],
  [ 'Jun 10', 383 ],
  [ 'Jul 10', 401 ],
  [ 'Aug 10', 407 ],
  [ 'Sep 10', 418 ],
  [ 'Oct 10', 433 ],
  [ 'Nov 10', 446 ],
  [ 'Dec 10', 464 ],
  [ 'Jan 11', 472 ],
  [ 'Feb 11', 484 ],
  [ 'Mar 11', 501 ],
  [ 'Apr 11', 514 ],
  [ 'May 11', 529 ],
  [ 'Jun 11', 534 ]
  ]);
  var usersTimeChart = new google.visualization.AreaChart(document.getElementById('users_time_graph_div'));
  usersTimeChart.draw(usersTimeData, {
    width: 700,
    height: 300,
    title: "Cumulative",
    hAxis: {
      title: 'Month'
    },
    legend: 'none'
  });
  
  var usersTimeData2 = new google.visualization.DataTable();
  usersTimeData2.addColumn('string', 'Month');
  usersTimeData2.addColumn('number', 'Per Month');
  usersTimeData2.addRows([
  [ 'Nov 08', 11 ],
  [ 'Dec 08', 1 ],
  [ 'Jan 09', 3 ],
  [ 'Feb 09', 1 ],
  [ 'Mar 09', 4 ],
  [ 'Apr 09', 5 ],
  [ 'May 09', 7 ],
  [ 'Jun 09', 13 ],
  [ 'Jul 09', 48 ],
  [ 'Aug 09', 10 ],
  [ 'Sep 09', 13 ],
  [ 'Oct 09', 12 ],
  [ 'Nov 09', 23 ],
  [ 'Dec 09', 17 ],
  [ 'Jan 10', 16 ],
  [ 'Feb 10', 16 ],
  [ 'Mar 10', 128 ],
  [ 'Apr 10', 15 ],
  [ 'May 10', 15 ],
  [ 'Jun 10', 25 ],
  [ 'Jul 10', 18 ],
  [ 'Aug 10', 6 ],
  [ 'Sep 10', 11 ],
  [ 'Oct 10', 15 ],
  [ 'Nov 10', 13 ],
  [ 'Dec 10', 18 ],
  [ 'Jan 11', 8 ],
  [ 'Feb 11', 12 ],
  [ 'Mar 11', 17 ],
  [ 'Apr 11', 13 ],
  [ 'May 11', 15 ],
  [ 'Jun 11', 5 ]
  ]);
  var usersTimeChart2 = new google.visualization.LineChart(document.getElementById('users_time_graph_div_2'));
  usersTimeChart2.draw(usersTimeData2, {
    width: 750,
    height: 400,
    title: "Per Month",
    hAxis: {
      title: 'Month'
    },
    legend: 'none'
  });


  // Services over time

  var servicesTimeData = new google.visualization.DataTable();
  servicesTimeData.addColumn('string', 'Month');
  servicesTimeData.addColumn('number', 'Cumulative');
  servicesTimeData.addRows([
  [ 'Nov 08', 58 ],
  [ 'Dec 08', 61 ],
  [ 'Jan 09', 66 ],
  [ 'Feb 09', 134 ],
  [ 'Mar 09', 413 ],
  [ 'Apr 09', 459 ],
  [ 'May 09', 959 ],
  [ 'Jun 09', 1042 ],
  [ 'Jul 09', 1053 ],
  [ 'Aug 09', 1054 ],
  [ 'Sep 09', 1058 ],
  [ 'Oct 09', 1063 ],
  [ 'Nov 09', 1131 ],
  [ 'Dec 09', 1146 ],
  [ 'Jan 10', 1150 ],
  [ 'Feb 10', 1164 ],
  [ 'Mar 10', 1604 ],
  [ 'Apr 10', 1612 ],
  [ 'May 10', 1674 ],
  [ 'Jun 10', 1681 ],
  [ 'Jul 10', 1686 ],
  [ 'Aug 10', 1688 ],
  [ 'Sep 10', 1710 ],
  [ 'Oct 10', 1721 ],
  [ 'Nov 10', 1722 ],
  [ 'Dec 10', 1732 ],
  [ 'Jan 11', 1735 ],
  [ 'Feb 11', 1736 ],
  [ 'Mar 11', 1750 ],
  [ 'Apr 11', 2050 ],
  [ 'May 11', 2052 ],
  [ 'Jun 11', 2056 ]
  ]);
  var servicesTimeChart = new google.visualization.AreaChart(document.getElementById('services_time_graph_div'));
  servicesTimeChart.draw(servicesTimeData, {
    width: 750,
    height: 400,
    title: "Cumulative",
    hAxis: {
      title: 'Month'
    },
    legend: 'none'
  });
  
  var servicesTimeData2 = new google.visualization.DataTable();
  servicesTimeData2.addColumn('string', 'Month');
  servicesTimeData2.addColumn('number', 'Per Month');
  servicesTimeData2.addRows([
  [ 'Nov 08', 58 ],
  [ 'Dec 08', 3 ],
  [ 'Jan 09', 5 ],
  [ 'Feb 09', 684 ],
  [ 'Mar 09', 279 ],
  [ 'Apr 09', 46 ],
  [ 'May 09', 500 ],
  [ 'Jun 09', 83 ],
  [ 'Jul 09', 11 ],
  [ 'Aug 09', 1 ],
  [ 'Sep 09', 4 ],
  [ 'Oct 09', 5 ],
  [ 'Nov 09', 68 ],
  [ 'Dec 09', 15 ],
  [ 'Jan 10', 4 ],
  [ 'Feb 10', 14 ],
  [ 'Mar 10', 440 ],
  [ 'Apr 10', 8 ],
  [ 'May 10', 62 ],
  [ 'Jun 10', 7 ],
  [ 'Jul 10', 5 ],
  [ 'Aug 10', 2 ],
  [ 'Sep 10', 22 ],
  [ 'Oct 10', 11 ],
  [ 'Nov 10', 1 ],
  [ 'Dec 10', 10 ],
  [ 'Jan 11', 3 ],
  [ 'Feb 11', 1 ],
  [ 'Mar 11', 14 ],
  [ 'Apr 11', 300 ],
  [ 'May 11', 2 ],
  [ 'Jun 11', 4 ]
  ]);
  var servicesTimeChart2 = new google.visualization.LineChart(document.getElementById('services_time_graph_div_2'));
  servicesTimeChart2.draw(servicesTimeData2, {
    width: 750,
    height: 400,
    title: "Per Month",
    hAxis: {
      title: 'Month'
    },
    legend: 'none'
  });
  
  // Service providers
  
  var serviceProvidersServicesData = new google.visualization.DataTable();
  serviceProvidersServicesData.addColumn('string', 'Provider');
  serviceProvidersServicesData.addColumn('number', 'Services');
  serviceProvidersServicesData.addRows([
  [ 'European Bioinformatics Institute (EBI)', 638 ],
  [ 'Instituto Nacional de Bioinformatica (INB)', 466 ],
  [ 'National Cancer Research Institute of Genoa, Italy (NCRI)', 94 ],
  [ 'Alberta', 81 ],
  [ 'University of Manchester', 58 ],
  [ 'University of Nottingham', 52 ],
  [ 'University of Wageningen', 35 ],
  [ 'Bio2RDF', 35 ],
  [ 'DNA Data Bank of Japan (DDBJ)', 30 ],
  [ 'GenOuest', 22 ],
  [ 'Center for Biological Sequence Analysis (CBS)', 20 ],
  [ 'iCapture Lab', 19 ],
  [ 'Bielefeld University', 15 ],
  [ 'Institut de Biologie et Chimie des Proteines (IBCP)', 13 ],
  [ 'Stockholm Bioinformatics Center, Stockholm University', 13 ],
  [ 'Calgary', 13 ],
  [ 'National Center for Biotechnology Information (NCBI)', 12 ],
  [ 'Max Planck Institute for Plant Breeding Research', 10 ],
  [ 'European Molecular Biology Network (EMBnet)', 9 ],
  [ 'PRABI - Rhone-Alpes Bioinformatics Center', 9 ],
  [ 'The Arabidopsis thaliana Integrated Database (ATIDB)', 8 ],
  [ 'Protemics Standard Initiative Common Query InterfaCe (PSICQUIC)', 8 ],
  [ 'Harvard Medical School', 8 ],
  [ 'National Institute of Agrobiological Sciences (NIAS)', 8 ],
  [ 'Manchester Interdisciplinary Biocentre (MIB)', 7 ],
  [ 'Neuroscience Information Framework (NIF)', 7 ],
  [ 'Bergen Center for Computational Science', 7 ],
  [ 'EMBL Nucleotide Sequence Database (Hiedelberg)', 7 ],
  [ 'BioOntology', 6 ],
  [ 'The Institute of Bioinformatics and Systems Biology (IBIS)', 5 ],
  [ 'The Arabidopsis Information Resource (TAIR)', 5 ],
  [ 'FuncNet', 5 ],
  [ 'Max Planck Institute of Molecular Plant Physiology', 5 ],
  [ 'National Research Council Italy (CNR)', 5 ],
  [ 'Institut de Biologie Moleculaire et Cellulaire of Strasbourg', 5 ],
  [ 'Laboratoire Interaction Plantes Micro-organisms (LIPM)', 5 ],
  [ 'The Adaptive Information Disclosure (AID)', 4 ],
  [ 'Sabio', 4 ],
  [ 'Database Center for Life Science (DBCLS)', 4 ],
  [ 'The Arabidopsis Small RNA Project (ASRP)', 4 ],
  [ 'Renci (NC)', 4 ],
  [ 'GeneSilico', 4 ],
  [ 'Indiana', 4 ],
  [ 'Centre for Molecular and Biomolecular Informatics (CMBI)', 4 ],
  [ 'ChemSpider', 3 ],
  [ 'Protein Data Bank Japan (PDBj)', 3 ],
  [ 'Regulatory Sequence Analysis Tools (RSAT)', 3 ],
  [ 'CATH', 3 ],
  [ 'Protein Data Bank, USA  (RCSB PDB)', 3 ],
  [ 'SwissProt (SIB)', 3 ]
  ]);
  var serviceProvidersServicesChart = new google.visualization.BarChart(document.getElementById('service_providers_services_graph_div'));
  serviceProvidersServicesChart.draw(serviceProvidersServicesData, {
    width: 750,
    height: 1400,
    chartArea: { height:"90%", width: "70%", top: 80 },
    title: "Top 50 with most services",
    hAxis: {
      title: 'Services'
    },
    legend: 'none'
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
    width: 750,
    height: 400,
    title: "Cumulative & Per Month",
    hAxis: {
      title: 'Month'
    },
    legend: 'none'
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
    width: 750,
    height: 400,
    title: "Cumulative & Per Month",
    hAxis: {
      title: 'Month'
    },
    legend: 'none'
  });

}