var results = [
          ['Resource Recovery Options', 'Nitrogen', 'Phosphorus', 'Potassium'],
          ['Anaerobic Digestion', 0, 0, 0],
          ['Solid Fuel', 0, 0, 0],
          ['BSF Processing', 0, 0, 0],
          ['Composting', 0, 0, 0]
];

var results2 = [
          ['Resource Recovery Options', 'Nitrogen', 'Phosphorus', 'Potassium'],
          ['Anaerobic Digestion', 0, 0, 0],
          ['Solid Fuel', 0, 0, 0],
          ['BSF Processing', 0, 0, 0],
          ['Composting', 0, 0, 0]
];

var results3 = [
          ['Resource Recovery Options', 'Nitrogen', 'Phosphorus', 'Potassium'],
          ['Anaerobic Digestion', 0, 0, 0],
          ['Solid Fuel', 0, 0, 0],
          ['BSF Processing',0, 0, 0],
          ['Composting', 0, 0, 0]
];

var results4 = [
          ['Resource Recovery Options', 'Nitrogen', 'Phosphorus', 'Potassium'],
          ['Anaerobic Digestion', 0, 0, 0],
          ['Solid Fuel', 0, 0, 0],
          ['BSF Processing', 0, 0, 0],
          ['Composting', 0, 0, 0]
];


function check_total() {
	console.log('checking total');
	var fs_ad_pc = parseFloat($('#fs_ad_pc').val());
	var fs_sf_pc = parseFloat($('#fs_sf_pc').val());
	var fs_bsfp_pc = parseFloat($('#fs_bsfp_pc').val());
	var fs_c_pc = parseFloat($('#fs_c_pc').val());
	//var fs_t_pc = parseFloat($('#fs_t_pc').val());
	$('#fs_t_pc').val(fs_ad_pc+fs_sf_pc+fs_bsfp_pc+fs_c_pc);

	if ((fs_ad_pc+fs_sf_pc+fs_bsfp_pc+fs_c_pc)> 100 ) {
		console.log('too much');
		$('#total_warning').addClass('alert alert-danger');
		$('#total_warning').html('Total cannot be more than 100');
	} else {
		console.log('too little');
		$('#total_warning').removeClass('alert alert-danger');
		//$('#fs_t_pc').removeClass('alert');
		$('#total_warning').html('');
	}

}



function calculate_ad(project, amount, pc) {
	var amount_of_gas = (amount*(pc/100)*1000)*(project['wasteQuality']['totalSolids']/(10**9))*(project['wasteQuality']['volatileSolids']/100)*(project['treatmentProcesses']['volatileSolidsDegradationRate']/100)*project['wasteQuality']['biomethanePotential']*(100/60);
	console.log(amount_of_gas);
	$('#amount_of_gas').html(amount_of_gas.toFixed(2));

	var energy_content_mj = amount_of_gas * 21.6;
	console.log(energy_content_mj);
	$('#energy_content_mj').html(energy_content_mj.toFixed(2));
	results3[1][1] = energy_content_mj;

	var energy_content_kwh = amount_of_gas * 6;
	console.log(energy_content_kwh);
	$('#energy_content_kwh').html(energy_content_kwh.toFixed(2));

	var potential_biogas_revenue = amount_of_gas * project['prices']['biogasPrice'];
	console.log(potential_biogas_revenue);
	$('#potential_biogas_revenue').html(potential_biogas_revenue.toFixed(2));
	results2[1][1] = potential_biogas_revenue;

	var amount_of_ad_residue = (amount*(pc/100)*1000)*(project['wasteQuality']['totalSolids']/(10**9))*(1-(project['treatmentProcesses']['dmrRateAnaerobicDigestion']/100))*(1-(project['treatmentProcesses']['dmrCompost']/100));
	console.log(amount_of_ad_residue);
	$('#amount_of_ad_residue').html(amount_of_ad_residue.toFixed(2));

	var potential_ad_residue_revenue = amount_of_ad_residue * project['prices']['soilConditionerPrice'];
	console.log(potential_ad_residue_revenue);
	$('#potential_ad_residue_revenue').html(potential_ad_residue_revenue.toFixed(2));


	var n_by_mass = (amount*(pc/100)*1000)*(project['wasteQuality']['totalNitrogen']/(10**9))*(1-(project['treatmentProcesses']['tnrCompostingReduction']/100));
	console.log(n_by_mass);
	$('#n_by_mass').html(n_by_mass.toFixed(2));
	results[1][1] = n_by_mass;

	var n_pc_ad_residue = (n_by_mass / amount_of_ad_residue) * 100;
	console.log(n_pc_ad_residue);
	$('#n_pc_ad_residue').html(n_pc_ad_residue.toFixed(2));

	var p_by_mass = (amount*(pc/100)*1000)*(project['wasteQuality']['totalPhosphorus']/(10**9))*(1-(project['treatmentProcesses']['tprCompostingReduction']/100));
	console.log(p_by_mass);
	$('#p_by_mass').html(p_by_mass.toFixed(2));
	results[1][2] = p_by_mass;

	var p_pc_ad_residue = (p_by_mass / amount_of_ad_residue) * 100;
	console.log(p_pc_ad_residue);
	$('#p_pc_ad_residue').html(p_pc_ad_residue.toFixed(2));

	var k_by_mass = (amount*(pc/100)*1000)*(project['wasteQuality']['totalPotassium']/(10**9))*(1-(project['treatmentProcesses']['tpotrCompostingReduction']/100));
	console.log(k_by_mass);
	$('#k_by_mass').html(k_by_mass.toFixed(2));
	results[1][3] = k_by_mass;

	var k_pc_ad_residue = (k_by_mass / amount_of_ad_residue) * 100;
	console.log(k_pc_ad_residue);
	$('#k_pc_ad_residue').html(k_pc_ad_residue.toFixed(2));

	var total_potential_ad_revenue = potential_biogas_revenue + potential_ad_residue_revenue;
	console.log(total_potential_ad_revenue);
	$('#total_potential_ad_revenue').html(total_potential_ad_revenue.toFixed(2));
}


function calculate_sf(project, amount, pc) {
	var amount_of_solid_fuel = (amount*(pc/100)*1000)*(project['wasteQuality']['totalSolids']/(10**9));
	console.log(amount_of_solid_fuel);
	$('#amount_of_solid_fuel').html(amount_of_solid_fuel.toFixed(2));

	var energy_content_mj = (amount*(pc/100)*1000)*(project['wasteQuality']['totalSolids']/(10**9))*1000*project['wasteQuality']['calorificValue'];
	console.log(energy_content_mj);
	$('#energy_content_mj_sf').html(energy_content_mj.toFixed(2));
	results3[2][1] = energy_content_mj;

	var energy_content_kwh = (amount*(pc/100)*1000)*(project['wasteQuality']['totalSolids']/(10**9))*1000*project['wasteQuality']['calorificValue']*0.277778;
	console.log(energy_content_kwh);
	$('#energy_content_kwh_sf').html(energy_content_kwh.toFixed(2));

	var total_potential_sf_revenue = amount_of_solid_fuel * project['prices']['solidCombustionPrice']
	console.log(total_potential_sf_revenue);
	$('#total_potential_sf_revenue').html(total_potential_sf_revenue.toFixed(2));
	results2[2][1] = total_potential_sf_revenue;
	
}

function calculate_bsf(project, amount, pc) {
	var amount_of_bsf_larvae = (amount*(pc/100)*1000)*(project['wasteQuality']['totalSolids']/(10**9))*(project['treatmentProcesses']['bcrBlackSoldierFly']/100);
	console.log(amount_of_bsf_larvae);
	$('#amount_of_bsf_larvae').html(amount_of_bsf_larvae.toFixed(2));

	var protein_content = amount_of_bsf_larvae * 0.4;
	console.log(protein_content);
	$('#protein_content').html(protein_content.toFixed(2));

	var fat_content = amount_of_bsf_larvae * 0.3;
	console.log(fat_content);
	$('#fat_content').html(fat_content.toFixed(2));

	var potential_larvae_revenue = amount_of_bsf_larvae * project['prices']['prepupaePrice'];
	console.log(potential_larvae_revenue);
	$('#potential_larvae_revenue').html(potential_larvae_revenue.toFixed(2));
	results2[3][1] = potential_larvae_revenue;

	var amount_of_bsf_residue = (amount*(pc/100)*1000)*(project['wasteQuality']['totalSolids']/(10**9))*(1-(project['treatmentProcesses']['dmrRateBsfResidue']/100))*(1-(project['treatmentProcesses']['dmrCompost']/100));
	console.log(amount_of_bsf_residue);
	$('#amount_of_bsf_residue').html(amount_of_bsf_residue.toFixed(2));

	var potential_bsf_residue_revenue = amount_of_bsf_residue * project['prices']['soilConditionerPrice'];
	console.log(potential_bsf_residue_revenue);
	$('#potential_bsf_residue_revenue').html(potential_bsf_residue_revenue.toFixed(2));

	var n_by_mass = (amount*(pc/100)*1000)*(project['wasteQuality']['totalNitrogen']/(10**9))*(1-(project['treatmentProcesses']['tnrCompostingReduction']/100))*(1-(project['treatmentProcesses']['tnrBsfResidue']/100));
	console.log(n_by_mass);
	$('#n_by_mass_bsf').html(n_by_mass.toFixed(2));
	results[3][1] = n_by_mass;

	var n_pc_bsf_residue = n_by_mass / amount_of_bsf_residue;
	console.log(n_pc_bsf_residue);
	$('#n_pc_bsf_residue').html(n_pc_bsf_residue.toFixed(2));
////
	var p_by_mass = (amount*(pc/100)*1000)*(project['wasteQuality']['totalPhosphorus']/(10**9))*(1-(project['treatmentProcesses']['tprCompostingReduction']/100))*(1-(project['treatmentProcesses']['tprBsfResidue']/100));
	console.log(p_by_mass);
	$('#p_by_mass_bsf').html(p_by_mass.toFixed(2));
	results[3][2] = p_by_mass;

	var p_pc_bsf_residue = p_by_mass / amount_of_bsf_residue;
	console.log(p_pc_bsf_residue);
	$('#p_pc_bsf_residue').html(p_pc_bsf_residue.toFixed(2));

	var k_by_mass = (amount*(pc/100)*1000)*(project['wasteQuality']['totalPotassium']/(10**9))*(1-(project['treatmentProcesses']['tpotrCompostingReduction']/100))*(1-(project['treatmentProcesses']['tpotrBsfResidue']/100));
	console.log(k_by_mass);
	$('#k_by_mass_bsf').html(k_by_mass.toFixed(2));
	results[3][3] = k_by_mass;

	var k_pc_bsf_residue = k_by_mass / amount_of_bsf_residue;
	console.log(k_pc_bsf_residue);
	$('#k_pc_bsf_residue').html(k_pc_bsf_residue.toFixed(2));

	var total_potential_bsf_revenue = potential_larvae_revenue + potential_bsf_residue_revenue;
	console.log(total_potential_bsf_revenue);
	$('#total_potential_bsf_revenue').html(total_potential_bsf_revenue.toFixed(2));
}

function calculate_compost(project, amount, pc) {
	var amount_of_compost = (amount*(pc/100)*1000)*(project['wasteQuality']['totalSolids']/(10**9))*(1-(project['treatmentProcesses']['dmrCompost']/100));
	console.log(amount_of_compost);
	$('#amount_of_compost').html(amount_of_compost.toFixed(2));

	var total_potential_compost_revenue = amount_of_compost * project['prices']['soilConditionerPrice'];
	console.log(total_potential_compost_revenue);
	$('#total_potential_compost_revenue').html(total_potential_compost_revenue.toFixed(2));
	results2[4][1] = total_potential_compost_revenue;

	var n_by_mass = (amount*(pc/100)*1000)*(project['wasteQuality']['totalNitrogen']/(10**9))*(1-(project['treatmentProcesses']['tnrCompostingReduction']/100));
	console.log(n_by_mass);
	$('#n_by_mass_compost').html(n_by_mass.toFixed(2));
	results[4][1] = n_by_mass;

	var n_pc_compost = n_by_mass / amount_of_compost;
	console.log(n_pc_compost);
	$('#n_pc_compost').html(n_pc_compost.toFixed(2));

	var p_by_mass = (amount*(pc/100)*1000)*(project['wasteQuality']['totalPhosphorus']/(10**9))*(1-(project['treatmentProcesses']['tprCompostingReduction']/100));
	console.log(p_by_mass);
	$('#p_by_mass_compost').html(p_by_mass.toFixed(2));
	results[4][2] = p_by_mass;

	var p_pc_compost = p_by_mass / amount_of_compost;
	console.log(p_pc_compost);
	$('#p_pc_compost').html(p_pc_compost.toFixed(2));

	var k_by_mass = (amount*(pc/100)*1000)*(project['wasteQuality']['totalPotassium']/(10**9))*(1-(project['treatmentProcesses']['tpotrCompostingReduction']/100));
	console.log(k_by_mass);
	$('#k_by_mass_compost').html(k_by_mass.toFixed(2));
	results[4][3] = k_by_mass;

	var k_pc_compost = k_by_mass / amount_of_compost;
	console.log(k_pc_compost);
	$('#k_pc_compost').html(k_pc_compost.toFixed(2));

}


function calculate_results(project) {
	console.log('calculating results');
	console.log(project['prices']['biogasPrice']);
	console.log(results[1][2]);
	// results[1][2] = results[1][2] + 100;
	// results[1][2]= 100;
	var fs_amount = parseFloat($('#fs_amount').val());
	console.log(fs_amount);
	var fs_ad_pc = parseFloat($('#fs_ad_pc').val());
	var fs_sf_pc = parseFloat($('#fs_sf_pc').val());
	var fs_bsfp_pc = parseFloat($('#fs_bsfp_pc').val());
	var fs_c_pc = parseFloat($('#fs_c_pc').val());
	var fs_t_pc = parseFloat($('#fs_t_pc').val());

	if ((fs_ad_pc+fs_sf_pc+fs_bsfp_pc+fs_c_pc)> 100 ) {
		// do something
		console.log('doing nothing');
	}
	else {
		console.log('calculating...');
		calculate_ad(project, fs_amount, fs_ad_pc);
		calculate_sf(project, fs_amount, fs_sf_pc);
		calculate_bsf(project, fs_amount, fs_bsfp_pc);
		calculate_compost(project, fs_amount, fs_c_pc);
	}


}

function gql(query) {
        var graph = graphql("http://localhost:8000/graphql", {
            method: "POST",

        });
        var project = graph(query);
        project().then(function(project) {

        	calculate_results(project['project']);

            
            console.log('done');
        })

 }

function drawFirstChart() {
		var data = google.visualization.arrayToDataTable(results);

        var options = {
          chart: {
            title: 'Nutrient Content from Faecal Sludge',
            //subtitle: 'Bla',
            width: '600px',
            height: '350px'
          },
          vAxis: {title: 'Mass (tonnes)', direction:-1, slantedText:true, slantedTextAngle:90}
        };

        $(".nav-tabs a[title='charts']").click()
        //$(".tabs a[title='content_1']").click()

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
}

function drawSecondChart() {
		var data = google.visualization.arrayToDataTable(results2);

        var options = {
          chart: {
            title: 'Potential Revenuse From Faecal Sludge',
            //subtitle: 'Bla',
            width: '600px',
            height: '350px'
          },
          vAxis: {title: 'Revenue (US$)', direction:-1, slantedText:true, slantedTextAngle:90}
        };

        $(".nav-tabs a[title='charts']").click()
        //$(".tabs a[title='content_1']").click()

        var chart = new google.charts.Bar(document.getElementById('columnchart_material2'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
}

function drawThirdChart() {
		var data = google.visualization.arrayToDataTable(results3);

        var options = {
          chart: {
            title: 'Energy Content from Faecal Sludge',
            //subtitle: 'Bla',
            width: '600px',
            height: '350px'
          },
          vAxis: {title: 'Thousand MJ', direction:-1, slantedText:true, slantedTextAngle:90}
        };

        $(".nav-tabs a[title='charts']").click()
        //$(".tabs a[title='content_1']").click()

        var chart = new google.charts.Bar(document.getElementById('columnchart_material3'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
}

function drawFourthChart() {
		var data = google.visualization.arrayToDataTable(results4);

        var options = {
          chart: {
            title: 'Nutrient Content from Faecal Sludge',
            //subtitle: 'Bla',
            width: '600px',
            height: '350px'
          },
          vAxis: {title: 'Mass (tonnes)', direction:-1, slantedText:true, slantedTextAngle:90}
        };

        $(".nav-tabs a[title='charts']").click()
        //$(".tabs a[title='content_1']").click()

        var chart = new google.charts.Bar(document.getElementById('columnchart_material4'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
}


$(document).ready(function () {
	console.log('hello revamp');

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

		  if($(e.target).attr('id') == 'charts-trigger')
		  {
		  	

		    drawFirstChart();
		    drawSecondChart();
		    drawThirdChart();
		    drawFourthChart();
		  }
	});

	$('button#calculate').click(function() {
		console.log('clicked');
		var query = `query {project (id:2) {
							prices {
								biogasPrice
								solidCombustionPrice
								prepupaePrice
								soilConditionerPrice

							}
							treatmentProcesses {
								volatileSolidsDegradationRate
								dmrRateAnaerobicDigestion
								bcrBlackSoldierFly
								dmrRateBsfResidue
								tnrBsfResidue
								tprBsfResidue
								tpotrBsfResidue
								dmrCompost
								tnrCompostingReduction
								tprCompostingReduction
								tpotrCompostingReduction
							}
							wasteQuality {
								totalSolidsPc
								totalSolids
								volatileSolids
								totalNitrogen
								totalNitrogenMgNKgTs
								totalPhosphorus
								totalPhosphorusMgPKgTs
								totalPotassium
								totalPotassiumMgKKgTs
								calorificValue
								biomethanePotential


							}
						}
					}`;
		gql(query);
	});

	$('#fs_ad_pc').focusout(function() {
		console.log('focus_out');
		check_total();
	});

	$('#fs_sf_pc').focusout(function() {
		console.log('focus_out');
		check_total();
	});

	$('#fs_bsf_pc').focusout(function() {
		console.log('focus_out');
		check_total();
	});

	$('#fs_c_pc').focusout(function() {
		console.log('focus_out');
		check_total();
	});

});

