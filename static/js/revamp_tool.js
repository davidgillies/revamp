var charts = [];

var results = [
          ['Resource Recovery Options', 'Nitrogen', 'Phosphorus', 'Potassium'],
          ['Anaerobic Digestion', 0, 0, 0],
          ['Solid Fuel', 0, 0, 0],
          ['BSF Processing', 0, 0, 0],
          ['Composting', 0, 0, 0]
];

var results2 = [
          ['Resource Recovery Options', 'Value'],
          ['Anaerobic Digestion', 0],
          ['Solid Fuel', 0],
          ['BSF Processing', 0],
          ['Composting', 0]
];

var results3 = [
          ['Resource Recovery Options', 'Value'],
          ['Anaerobic Digestion', 0],
          ['Solid Fuel', 0],
          ['BSF Processing',0],
          ['Composting', 0]
];

var results4 = [
          ['Resource Recovery Options', 'Nitrogen', 'Phosphorus', 'Potassium'],
          ['Anaerobic Digestion', 0, 0, 0],
          ['Solid Fuel', 0, 0, 0],
          ['BSF Processing', 0, 0, 0],
          ['Composting', 0, 0, 0]
];

var results5 = [
          ['Resource Recovery Options', 'Nitrogen', 'Phosphorus', 'Potassium'],
          ['Anaerobic Digestion', 0, 0, 0],
          ['Solid Fuel', 0, 0, 0],
          ['BSF Processing', 0, 0, 0],
          ['Composting', 0, 0, 0]
];

var results6 = [
          ['Resource Recovery Options', 'Value'],
          ['Anaerobic Digestion', 0],
          ['Solid Fuel', 0],
          ['BSF Processing', 0],
          ['Composting', 0]
];
var results7 = [
          ['Resource Recovery Options', 'Value'],
          ['Anaerobic Digestion', 0],
          ['Solid Fuel', 0],
          ['BSF Processing',0],
          ['Composting', 0]
];


var results9 = [
          ['Resource Recovery Options', 'Nitrogen', 'Phosphorus', 'Potassium'],
          ['Anaerobic Digestion', 0, 0, 0],
          ['Solid Fuel', 0, 0, 0],
          ['BSF Processing', 0, 0, 0],
          ['Composting', 0, 0, 0]
];

var results10 = [
          ['Resource Recovery Options', 'Value'],
          ['Anaerobic Digestion', 0],
          ['Solid Fuel', 0],
          ['BSF Processing', 0],
          ['Composting', 0]
];
var results11 = [
          ['Resource Recovery Options', 'Value'],
          ['Anaerobic Digestion', 0],
          ['Solid Fuel', 0],
          ['BSF Processing',0],
          ['Composting', 0]
];

var comparison_results_revenue = [
          ['Resource Recovery Options', 'Value'],
          ['Anaerobic Digestion', 0],
          ['Solid Fuel', 0],
          ['BSF Processing', 0],
          ['Composting', 0]
];

var comparison_results_outputs = [
          ['Resource Recovery Options', 'Nitrogen', 'Phosphorus', 'Potassium'],
          ['Anaerobic Digestion', 0, 0, 0],
          ['Solid Fuel', 0, 0, 0],
          ['BSF Processing', 0, 0, 0],
          ['Composting', 0, 0, 0]
];

var comparison_results_energy = [
          ['Resource Recovery Options', 'Value'],
          ['Anaerobic Digestion', 0],
          ['Solid Fuel', 0],
          ['BSF Processing', 0],
          ['Composting', 0]
];

var sankey_results = [
   [ 'Faecal Sludge', 'Anaerobic Digestion', 0 ],
   [ 'Faecal Sludge', 'Solid Fuel', 0 ],
   [ 'Faecal Sludge', 'Black Soldier Fly Process', 0 ],
   [ 'Faecal Sludge', 'Compost', 0 ],
   [ 'Sewage Sludge', 'Anaerobic Digestion', 0 ],
   [ 'Sewage Sludge', 'Solid Fuel', 0 ],
   [ 'Sewage Sludge', 'Black Soldier Fly Process', 0 ],
   ['Sewage Sludge', 'Compost', 0],
   [ 'Solid Waste', 'Anaerobic Digestion', 0 ],
   [ 'Solid Waste', 'Solid Fuel', 0 ],
   [ 'Solid Waste', 'Black Soldier Fly Process', 0 ],
   [ 'Solid Waste', 'Compost', 0 ],
   [ 'Anaerobic Digestion', 'Energy (MJ)', 0 ],
   [ 'Anaerobic Digestion', 'Nutrients (tons)', 0 ],
   [ 'Anaerobic Digestion', 'Revenue $US', 0 ],
   [ 'Solid Fuel', 'Energy (MJ)', 0 ],
   [ 'Solid Fuel', 'Nutrients (tons)', 0 ],
   [ 'Solid Fuel', 'Revenue $US', 0 ],
   [ 'Black Soldier Fly Process', 'Energy (MJ)', 0 ],
   [ 'Black Soldier Fly Process', 'Nutrients (tons)', 0 ],
   [ 'Black Soldier Fly Process', 'Revenue $US', 0 ],
   [ 'Compost', 'Energy (MJ)', 0 ],
   [ 'Compost', 'Nutrients (tons)', 0 ],
   [ 'Compost', 'Revenue $US', 0 ]

];


function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function drawcharts() {
               console.log('CHARTS');
		    //drawFirstChart();
		    //drawSecondChart();
		    //drawThirdChart();
              
            chart_options = {
                sf_chart1: {
                    options: {
                        
                            title: 'Nutrient Content from Faecal Sludge',
                            //subtitle: 'Bla',
                            width: '600px',
                            height: '350px',
                        
                        vAxis: {title: 'Mass (tonnes)', 
//                               direction:-1, 
                                slantedText:true, 
                                slantedTextAngle:90
                               },

                    },
                    div: 'columnchart_material',
                    results: results
                },
                sf_chart2: {
                    options: {
                      
                        title: 'Potential Revenuse From Faecal Sludge',
                        //subtitle: 'Bla',
                        width: '600px',
                        height: '350px',
                     
                      vAxis: {title: 'Revenue (US$)', 
                              //direction:-1, 
                              slantedText:true, slantedTextAngle:90},
                      legend: {position: 'none'},
                      bar: {groupWidth: "50%"},
                        
                    },
                    div:  'columnchart_material2',
                    results: results2
                },
                sf_chart3: {
                    options: {
                      
                        title: 'Energy Content from Faecal Sludge',
                        //subtitle: 'Bla',
                        width: '600px',
                        height: '350px',
                     
                      vAxis: {title: 'Thousand MJ', 
                              //direction:-1, 
                              slantedText:true, slantedTextAngle:90},
                      legend: {position: 'none'},
                      bar: {groupWidth: "50%"},
                    },
                    div:  'columnchart_material3',
                    results: results3
                },
                ss_chart1: {
                    options: {
                        
                            title: 'Nutrient Content from Sewage Sludge',
                            //subtitle: 'Bla',
                            width: '600px',
                            height: '350px',
                       
                        vAxis: {title: 'Mass (tonnes)', //direction:-1,
                                slantedText:true, slantedTextAngle:90}
                    },
                    div: 'columnchart_material5',
                    results: results5      
                },
                ss_chart2: {
                    options: {
                      
                        title: 'Potential Revenuse From Sewage Sludge',
                        //subtitle: 'Bla',
                        width: '600px',
                        height: '350px',
                      
                      vAxis: {title: 'Revenue (US$)', //direction:-1, 
                              slantedText:true, slantedTextAngle:90},
                      legend: {position: 'none'},
                      bar: {groupWidth: "50%"},
                        
                    },
                    div:  'columnchart_material6',
                    results: results6 
                },
                ss_chart3: {
                    options: {
                      
                        title: 'Energy Content from Sewage Sludge',
                        //subtitle: 'Bla',
                        width: '600px',
                        height: '350px',
                      
                      vAxis: {title: 'Thousand MJ', //direction:-1, 
                              slantedText:true, slantedTextAngle:90},
                      legend: {position: 'none'},
                      bar: {groupWidth: "50%"},
                    },
                    div:  'columnchart_material7',
                    results: results7   
                },
                sw_chart1: {
                    options: {
                        
                            title: 'Nutrient Content from Organic MSW',
                            //subtitle: 'Bla',
                            width: '600px',
                            height: '350px',
                       
                        vAxis: {title: 'Mass (tonnes)', //direction:-1, 
                                slantedText:true, slantedTextAngle:90}
                    },
                    div: 'columnchart_material9',
                    results: results9      
                },
                sw_chart2: {
                    options: {
                      
                        title: 'Potential Revenuse From Organic MSW',
                        //subtitle: 'Bla',
                        width: '600px',
                        height: '350px',
                     
                      vAxis: {title: 'Revenue (US$)', //direction:-1, 
                              slantedText:true, slantedTextAngle:90},
                      legend: {position: 'none'},
                      bar: {groupWidth: "50%"},
                        
                    },
                    div:  'columnchart_material10',
                    results: results10 
                },
                sw_chart3: {
                    options: {
                      
                        title: 'Energy Content from Organic MSW',
                        //subtitle: 'Bla',
                        width: '600px',
                        height: '350px',
                      
                      vAxis: {title: 'Thousand MJ', //direction:-1, 
                              slantedText:true, slantedTextAngle:90},
                      legend: {position: 'none'},
                      bar: {groupWidth: "50%"},
                    },
                    div:  'columnchart_material11',
                    results: results11
                },
                totals_chart1: {
                    options: {
                        
                            title: 'Comparison title',
                            subtitle: 'Subtitle for comparison',
                            width: '600px',
                            height: '350px',
                        
                        vAxis: {title: 'Mass (tonnes)', //direction:-1,
                                slantedText:true, slantedTextAngle:90}
                    },
                    div: 'columnchart_material13',
                    results: comparison_results_outputs      
                },
                totals_chart2: {
                    options: {
                      
                        title: 'Comparison Revenue',
                        //subtitle: 'Bla',
                        width: '600px',
                        height: '350px',
                      
                      vAxis: {title: 'Revenue (US$)', //direction:-1,
                              slantedText:true, slantedTextAngle:90},
                      legend: {position: 'none'},
                      bar: {groupWidth: "50%"},
                        
                    },
                    div:  'columnchart_material14',
                    results: comparison_results_revenue 
                },
                totals_chart3: {
                    options: {
                     
                        title: 'Energy Content Comparison',
                        //subtitle: 'Bla',
                        width: '600px',
                        height: '350px',
                     
                      vAxis: {title: 'Thousand MJ', //direction:-1, 
                              slantedText:true, slantedTextAngle:90},
                      legend: {position: 'none'},
                      bar: {groupWidth: "50%"},
                    },
                    div:  'columnchart_material15',
                    results: comparison_results_energy
                }
                
                
            }
            
                                 
            const keys = Object.keys(chart_options);
            for (const key of keys) {
                console.log(chart_options[key]);
                console.log(chart_options[key].results);
                drawBarChart(chart_options[key].results, chart_options[key].options, chart_options[key].div);
                console.log(key);

            }
}


function check_total() {
	console.log('checking total');
	var fs_ad_pc = parseFloat($('#fs_ad_pc').val());
	var fs_sf_pc = parseFloat($('#fs_sf_pc').val());
	var fs_bsfp_pc = parseFloat($('#fs_bsfp_pc').val());
	var fs_c_pc = parseFloat($('#fs_c_pc').val());
	var fs_t_pc = parseFloat($('#fs_t_pc').val());
	//$('#fs_t_pc').val(fs_ad_pc+fs_sf_pc+fs_bsfp_pc+fs_c_pc);
    vm.wastestreams.fs_t_pc = fs_ad_pc+fs_sf_pc+fs_bsfp_pc+fs_c_pc;

	if ((fs_ad_pc+fs_sf_pc+fs_bsfp_pc+fs_c_pc)> 100 ) {
		console.log('too much');
		$('#fs_total_warning').addClass('alert alert-danger');
		$('#fs_total_warning').html('Total cannot be more than 100');
	} else {
		console.log('too little');
		$('#total_warning').removeClass('alert alert-danger');
		//$('#fs_t_pc').removeClass('alert');
		$('#total_warning').html('');
	}
}



function calculate_ad() {
    
	vm.results.amount_of_gas_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_ad_pc/100)*1000)*(vm.wastequality_fs.total_solids/(10**9))*(vm.wastequality_fs.volatile_solids/100)*(vm.treatmentprocesses_fs.volatile_solids_degradation_rate/100)*vm.wastequality_fs.biomethane_potential*(100/60);

	//$('#amount_of_gas_fs').html(amount_of_gas.toFixed(2));
    vm.results.amount_of_gas_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_ad_pc/100))*(vm.wastequality_ss.total_solids_pc/100)* (vm.wastequality_ss.volatile_solids/100)*(vm.treatmentprocesses_ss.volatile_solids_degradation_rate/100)*vm.wastequality_ss.biomethane_potential*(100/60);

    vm.results.amount_of_gas_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_ad_pc/100))*(vm.wastequality_sw.total_solids_pc/100)* (vm.wastequality_sw.volatile_solids/100)*(vm.treatmentprocesses_sw.volatile_solids_degradation_rate/100)*vm.wastequality_sw.biomethane_potential*(100/60);

	vm.results.energy_content_mj_fs = vm.results.amount_of_gas_fs * 21.6;
	results3[1][1] = vm.results.energy_content_mj_fs;
    
	vm.results.energy_content_mj_ss = vm.results.amount_of_gas_ss * 21.6;
	results7[1][1] = vm.results.energy_content_mj_ss;
    
	vm.results.energy_content_mj_sw = vm.results.amount_of_gas_sw * 21.6;
	results11[1][1] = vm.results.energy_content_mj_sw;

	vm.results.energy_content_kwh_fs = vm.results.amount_of_gas_fs * 6;
    vm.results.energy_content_kwh_ss = vm.results.amount_of_gas_ss * 6;
    vm.results.energy_content_kwh_sw = vm.results.amount_of_gas_sw * 6;


	vm.results.potential_biogas_revenue_fs = vm.results.amount_of_gas_fs * vm.prices.biogas_price;
	results2[1][1] = vm.results.potential_biogas_revenue_fs;
    
	vm.results.potential_biogas_revenue_ss = vm.results.amount_of_gas_ss * vm.prices.biogas_price;
	results6[1][1] = vm.results.potential_biogas_revenue_ss;
    
	vm.results.potential_biogas_revenue_sw = vm.results.amount_of_gas_sw * vm.prices.biogas_price;
	results10[1][1] = vm.results.potential_biogas_revenue_sw;

	vm.results.amount_of_ad_residue_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_ad_pc/100)*1000)*(vm.wastequality_fs.total_solids/(10**9))*(1-(vm.treatmentprocesses_fs.dmr_rate_anaerobic_digestion/100))*(1-(vm.treatmentprocesses_fs.dmr_compost/100));
    
	vm.results.amount_of_ad_residue_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_ad_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*(1-(vm.treatmentprocesses_ss.dmr_rate_anaerobic_digestion/100))*(1-(vm.treatmentprocesses_ss.dmr_compost/100));
    
	vm.results.amount_of_ad_residue_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_ad_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*(1-(vm.treatmentprocesses_sw.dmr_rate_anaerobic_digestion/100))*(1-(vm.treatmentprocesses_sw.dmr_compost/100));

	vm.results.potential_ad_residue_revenue_fs = vm.results.amount_of_ad_residue_fs * vm.prices.soil_conditioner_price;
	vm.results.potential_ad_residue_revenue_ss = vm.results.amount_of_ad_residue_ss * vm.prices.soil_conditioner_price;
	vm.results.potential_ad_residue_revenue_sw = vm.results.amount_of_ad_residue_sw * vm.prices.soil_conditioner_price;

	vm.results.n_by_mass_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_ad_pc/100)*1000)*(vm.wastequality_fs.total_nitrogen/(10**9))*(1-(vm.treatmentprocesses_fs.tnr_composting_reduction/100));
	results[1][1] = vm.results.n_by_mass_fs;
    
	vm.results.n_by_mass_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_ad_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*(vm.wastequality_ss.total_nitrogen_mg_n_kg_ts/(10**6)) *(1-(vm.treatmentprocesses_ss.tnr_composting_reduction/100));
	results5[1][1] = vm.results.n_by_mass_ss;

    
	vm.results.n_by_mass_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_ad_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*(vm.wastequality_sw.total_nitrogen_mg_n_kg_ts/(10**6)) *(1-(vm.treatmentprocesses_sw.tnr_composting_reduction/100));
	results9[1][1] = vm.results.n_by_mass_sw;
    
	vm.results.n_pc_ad_residue_fs = (vm.results.n_by_mass_fs / vm.results.amount_of_ad_residue_fs) * 100;
    vm.results.n_pc_ad_residue_ss = (vm.results.n_by_mass_ss / vm.results.amount_of_ad_residue_ss) * 100;
    vm.results.n_pc_ad_residue_sw = (vm.results.n_by_mass_sw / vm.results.amount_of_ad_residue_sw) * 100;

	vm.results.p_by_mass_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_ad_pc/100)*1000)*(vm.wastequality_fs.total_phosphorus/(10**9))*(1-(vm.treatmentprocesses_fs.tpr_composting_reduction/100));
	results[1][2] = vm.results.p_by_mass_fs;
    
	vm.results.p_by_mass_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_ad_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*(vm.wastequality_ss.total_phosphorus_mg_p_kg_ts/(10**6))*(1-(vm.treatmentprocesses_ss.tpr_composting_reduction/100));
	results5[1][2] = vm.results.p_by_mass_ss;

	vm.results.p_by_mass_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_ad_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*(vm.wastequality_sw.total_phosphorus_mg_p_kg_ts/(10**6))*(1-(vm.treatmentprocesses_sw.tpr_composting_reduction/100));
	results9[1][2] = vm.results.p_by_mass_sw;

	vm.results.p_pc_ad_residue_fs = (vm.results.p_by_mass_fs / vm.results.amount_of_ad_residue_fs) * 100;
	vm.results.p_pc_ad_residue_ss = (vm.results.p_by_mass_ss / vm.results.amount_of_ad_residue_ss) * 100;
	vm.results.p_pc_ad_residue_sw = (vm.results.p_by_mass_sw / vm.results.amount_of_ad_residue_sw) * 100;

	vm.results.k_by_mass_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_ad_pc/100)*1000)*(vm.wastequality_fs.total_potassium/(10**9))*(1-(vm.treatmentprocesses_fs.tpotr_composting_reduction/100));
	results[1][3] = vm.results.k_by_mass_fs;
    
	vm.results.k_by_mass_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_ad_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*(vm.wastequality_ss.total_potassium_mg_k_kg_ts/(10**6))*(1-(vm.treatmentprocesses_ss.tpotr_composting_reduction/100));
	results5[1][3] = vm.results.k_by_mass_ss;
    
	vm.results.k_by_mass_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_ad_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*(vm.wastequality_sw.total_potassium_mg_k_kg_ts/(10**6))*(1-(vm.treatmentprocesses_sw.tpotr_composting_reduction/100));
	results9[1][3] = vm.results.k_by_mass_sw;

	vm.results.k_pc_ad_residue_fs = (vm.results.k_by_mass_fs / vm.results.amount_of_ad_residue_fs) * 100;
    vm.results.k_pc_ad_residue_ss = (vm.results.k_by_mass_ss / vm.results.amount_of_ad_residue_ss) * 100;
    vm.results.k_pc_ad_residue_sw = (vm.results.k_by_mass_sw / vm.results.amount_of_ad_residue_sw) * 100;
    
	vm.results.total_potential_ad_revenue_fs = vm.results.potential_biogas_revenue_fs + vm.results.potential_ad_residue_revenue_fs;
    
	vm.results.total_potential_ad_revenue_ss = vm.results.potential_biogas_revenue_ss + vm.results.potential_ad_residue_revenue_ss;
    
	vm.results.total_potential_ad_revenue_sw = vm.results.potential_biogas_revenue_sw + vm.results.potential_ad_residue_revenue_sw;
}


function calculate_sf() {
	vm.results.amount_of_solid_fuel_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_sf_pc/100)*1000)*(vm.wastequality_fs.total_solids/(10**9));
    
	vm.results.amount_of_solid_fuel_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_sf_pc/100))*(vm.wastequality_ss.total_solids_pc/(100));
    
	vm.results.amount_of_solid_fuel_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_sf_pc/100))*(vm.wastequality_sw.total_solids_pc/(100));

	vm.results.energy_content_mj_sf_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_sf_pc/100)*1000)*(vm.wastequality_fs.total_solids/(10**9))*1000*vm.wastequality_fs.calorific_value;
	results3[2][1] = vm.results.energy_content_mj_sf_fs;
    
	vm.results.energy_content_mj_sf_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_sf_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*1000*vm.wastequality_ss.calorific_value;
	results7[2][1] = vm.results.energy_content_mj_sf_ss;
    
	vm.results.energy_content_mj_sf_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_sf_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*1000*vm.wastequality_sw.calorific_value;
	results11[2][1] = vm.results.energy_content_mj_sf_sw;

	vm.results.energy_content_kwh_sf_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_sf_pc/100)*1000)*(vm.wastequality_fs.total_solids/(10**9))*1000*vm.wastequality_fs.calorific_value*0.277778;
    
	vm.results.energy_content_kwh_sf_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_sf_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*1000*vm.wastequality_ss.calorific_value*0.277778;
    
	vm.results.energy_content_kwh_sf_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_sf_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*1000*vm.wastequality_sw.calorific_value*0.277778;

	vm.results.total_potential_sf_revenue_fs = vm.results.amount_of_solid_fuel_fs * vm.prices.solid_combustion_price;
	results2[2][1] = vm.results.total_potential_sf_revenue_fs;
    
	vm.results.total_potential_sf_revenue_ss = vm.results.amount_of_solid_fuel_ss * vm.prices.solid_combustion_price;
	results6[2][1] = vm.results.total_potential_sf_revenue_ss;
    
	vm.results.total_potential_sf_revenue_sw = vm.results.amount_of_solid_fuel_sw * vm.prices.solid_combustion_price;
	results10[2][1] = vm.results.total_potential_sf_revenue_sw;
	
}

function calculate_bsf() {
	vm.results.amount_of_bsf_larvae_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_bsfp_pc/100)*1000)*(vm.wastequality_fs.total_solids/(10**9))*(vm.treatmentprocesses_fs.bcr_black_soldier_fly/100);

    
	vm.results.amount_of_bsf_larvae_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_bsfp_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*(vm.treatmentprocesses_ss.bcr_black_soldier_fly/100);

    
	vm.results.amount_of_bsf_larvae_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_bsfp_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*(vm.treatmentprocesses_sw.bcr_black_soldier_fly/100);


	vm.results.protein_content_fs = vm.results.amount_of_bsf_larvae_fs * 0.4;
    vm.results.protein_content_ss = vm.results.amount_of_bsf_larvae_ss * 0.4;
    vm.results.protein_content_sw = vm.results.amount_of_bsf_larvae_sw * 0.4;


	vm.results.fat_content_fs = vm.results.amount_of_bsf_larvae_fs * 0.3;
    vm.results.fat_content_ss = vm.results.amount_of_bsf_larvae_ss * 0.3;
    vm.results.fat_content_sw = vm.results.amount_of_bsf_larvae_sw * 0.3;

	vm.results.potential_larvae_revenue_fs = vm.results.amount_of_bsf_larvae_fs * vm.prices.prepupae_price;
	results2[3][1] = vm.results.total_potential_bsf_revenue_fs;
    
	vm.results.potential_larvae_revenue_ss = vm.results.amount_of_bsf_larvae_ss * vm.prices.prepupae_price;
	results6[3][1] = vm.results.total_potential_bsf_revenue_ss;

	vm.results.potential_larvae_revenue_sw = vm.results.amount_of_bsf_larvae_sw * vm.prices.prepupae_price;
	results10[3][1] = vm.results.total_potential_bsf_revenue_sw;
    
	vm.results.amount_of_bsf_residue_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_bsfp_pc/100)*1000)*(vm.wastequality_fs.total_solids/(10**9))*(1-(vm.treatmentprocesses_fs.dmr_rate_bsf_residue/100))*(1-(vm.treatmentprocesses_fs.dmr_compost/100));
    
	vm.results.amount_of_bsf_residue_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_bsfp_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*(1-(vm.treatmentprocesses_ss.dmr_rate_bsf_residue/100))*(1-(vm.treatmentprocesses_ss.dmr_compost/100));
    
	vm.results.amount_of_bsf_residue_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_bsfp_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*(1-(vm.treatmentprocesses_sw.dmr_rate_bsf_residue/100))*(1-(vm.treatmentprocesses_sw.dmr_compost/100));


	vm.results.potential_bsf_residue_revenue_fs = vm.results.amount_of_bsf_residue_fs * vm.prices.soil_conditioner_price;
    vm.results.potential_bsf_residue_revenue_ss = vm.results.amount_of_bsf_residue_ss * vm.prices.soil_conditioner_price;
    vm.results.potential_bsf_residue_revenue_sw = vm.results.amount_of_bsf_residue_sw * vm.prices.soil_conditioner_price;


	vm.results.n_by_mass_bsf_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_bsfp_pc/100)*1000)*(vm.wastequality_fs.total_nitrogen/(10**9))*(1-(vm.treatmentprocesses_fs.tnr_composting_reduction/100))*(1-(vm.treatmentprocesses_fs.tnr_bsf_residue/100));
	results[3][1] = vm.results.n_by_mass_bsf_fs;
    
	vm.results.n_by_mass_bsf_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_bsfp_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*(vm.wastequality_ss.total_nitrogen_mg_n_kg_ts/(10**6))*(1-(vm.treatmentprocesses_ss.tnr_composting_reduction/100))*(1-(vm.treatmentprocesses_ss.tnr_bsf_residue/100));
	results5[3][1] = vm.results.n_by_mass_bsf_ss;
    
	vm.results.n_by_mass_bsf_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_bsfp_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*(vm.wastequality_sw.total_nitrogen_mg_n_kg_ts/(10**6))*(1-(vm.treatmentprocesses_sw.tnr_composting_reduction/100))*(1-(vm.treatmentprocesses_sw.tnr_bsf_residue/100));
	results9[3][1] = vm.results.n_by_mass_bsf_sw;

	vm.results.n_pc_bsf_residue_fs = (vm.results.n_by_mass_bsf_fs / vm.results.amount_of_bsf_residue_fs) * 100;
	vm.results.n_pc_bsf_residue_ss = (vm.results.n_by_mass_bsf_ss / vm.results.amount_of_bsf_residue_ss) * 100;
	vm.results.n_pc_bsf_residue_sw = (vm.results.n_by_mass_bsf_sw / vm.results.amount_of_bsf_residue_sw) * 100;

    
	vm.results.p_by_mass_bsf_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_bsfp_pc/100)*1000)*(vm.wastequality_fs.total_phosphorus/(10**9))*(1-(vm.treatmentprocesses_fs.tpr_composting_reduction/100))*(1-(vm.treatmentprocesses_fs.tpr_bsf_residue/100));
	results[3][2] = vm.results.p_by_mass_bsf_fs;
    
	vm.results.p_by_mass_bsf_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_bsfp_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*(vm.wastequality_ss.total_phosphorus_mg_p_kg_ts/(10**6))*(1-(vm.treatmentprocesses_ss.tpr_composting_reduction/100))*(1-(vm.treatmentprocesses_ss.tpr_bsf_residue/100));
	results5[3][2] = vm.results.p_by_mass_bsf_ss;
    
	vm.results.p_by_mass_bsf_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_bsfp_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*(vm.wastequality_sw.total_phosphorus_mg_p_kg_ts/(10**6))*(1-(vm.treatmentprocesses_sw.tpr_composting_reduction/100))*(1-(vm.treatmentprocesses_sw.tpr_bsf_residue/100));
	results9[3][2] = vm.results.p_by_mass_bsf_sw;
    
    

	vm.results.p_pc_bsf_residue_fs = (vm.results.p_by_mass_bsf_fs / vm.results.amount_of_bsf_residue_fs) * 100;
    vm.results.p_pc_bsf_residue_ss = (vm.results.p_by_mass_bsf_ss / vm.results.amount_of_bsf_residue_ss) * 100;
    vm.results.p_pc_bsf_residue_sw = (vm.results.p_by_mass_bsf_sw / vm.results.amount_of_bsf_residue_sw) * 100;


	vm.results.k_by_mass_bsf_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_bsfp_pc/100)*1000)*(vm.wastequality_fs.total_potassium/(10**9))*(1-(vm.treatmentprocesses_fs.tpotr_composting_reduction/100))*(1-(vm.treatmentprocesses_fs.tpotr_bsf_residue/100));
	results[3][3] = vm.results.k_by_mass_bsf_fs;
    
	vm.results.k_by_mass_bsf_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_bsfp_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*(vm.wastequality_ss.total_potassium_mg_k_kg_ts/(10**6))*(1-(vm.treatmentprocesses_ss.tpotr_composting_reduction/100))*(1-(vm.treatmentprocesses_ss.tpotr_bsf_residue/100));
	results5[3][3] = vm.results.k_by_mass_bsf_ss;
    
	vm.results.k_by_mass_bsf_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_bsfp_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*(vm.wastequality_sw.total_potassium_mg_k_kg_ts/(10**6))*(1-(vm.treatmentprocesses_sw.tpotr_composting_reduction/100))*(1-(vm.treatmentprocesses_sw.tpotr_bsf_residue/100));
	results9[3][3] = vm.results.k_by_mass_bsf_sw;

	vm.results.k_pc_bsf_residue_fs = (vm.results.k_by_mass_bsf_fs / vm.results.amount_of_bsf_residue_fs) * 100;
    vm.results.k_pc_bsf_residue_ss = (vm.results.k_by_mass_bsf_ss / vm.results.amount_of_bsf_residue_ss) * 100;
    vm.results.k_pc_bsf_residue_sw = (vm.results.k_by_mass_bsf_sw / vm.results.amount_of_bsf_residue_sw) * 100;


	vm.results.total_potential_bsf_revenue_fs = vm.results.potential_larvae_revenue_fs + vm.results.potential_bsf_residue_revenue_fs;
    
    vm.results.total_potential_bsf_revenue_ss = vm.results.potential_larvae_revenue_ss + vm.results.potential_bsf_residue_revenue_ss;
    
    vm.results.total_potential_bsf_revenue_sw = vm.results.potential_larvae_revenue_sw + vm.results.potential_bsf_residue_revenue_sw;
    
	results2[3][1] = vm.results.total_potential_bsf_revenue_fs;
    
	results6[3][1] = vm.results.total_potential_bsf_revenue_ss;

	results10[3][1] = vm.results.total_potential_bsf_revenue_sw;
}

function calculate_compost() {
	vm.results.amount_of_compost_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_c_pc/100)*1000)*(vm.wastequality_fs.total_solids/(10**9))*(1-(vm.treatmentprocesses_fs.dmr_compost/100));


	vm.results.amount_of_compost_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_c_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*(1-(vm.treatmentprocesses_ss.dmr_compost/100));
    
	vm.results.amount_of_compost_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_c_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*(1-(vm.treatmentprocesses_sw.dmr_compost/100));

	vm.results.total_potential_compost_revenue_fs = vm.results.amount_of_compost_fs * vm.prices.soil_conditioner_price;
	results2[4][1] = vm.results.total_potential_compost_revenue_fs;
    
	vm.results.total_potential_compost_revenue_ss = vm.results.amount_of_compost_ss * vm.prices.soil_conditioner_price;
	results6[4][1] = vm.results.total_potential_compost_revenue_ss;
    
	vm.results.total_potential_compost_revenue_sw = vm.results.amount_of_compost_sw * vm.prices.soil_conditioner_price;
	results10[4][1] = vm.results.total_potential_compost_revenue_sw;

	vm.results.n_by_mass_compost_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_c_pc/100)*1000)*(vm.wastequality_fs.total_nitrogen/(10**9))*(1-(vm.treatmentprocesses_fs.tnr_composting_reduction/100));
	results[4][1] = vm.results.n_by_mass_compost_fs;
    
	vm.results.n_by_mass_compost_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_c_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*(vm.wastequality_ss.total_nitrogen_mg_n_kg_ts/(10**6))*(1-(vm.treatmentprocesses_ss.tnr_composting_reduction/100));
	results5[4][1] = vm.results.n_by_mass_compost_ss;
    
	vm.results.n_by_mass_compost_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_c_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*(vm.wastequality_sw.total_nitrogen_mg_n_kg_ts/(10**6))*(1-(vm.treatmentprocesses_sw.tnr_composting_reduction/100));
	results9[4][1] = vm.results.n_by_mass_compost_sw;

	vm.results.n_pc_compost_fs = (vm.results.n_by_mass_compost_fs / vm.results.amount_of_compost_fs) * 100;
    vm.results.n_pc_compost_ss = (vm.results.n_by_mass_compost_ss / vm.results.amount_of_compost_ss) * 100;
    vm.results.n_pc_compost_sw = (vm.results.n_by_mass_compost_sw / vm.results.amount_of_compost_sw) * 100;


	vm.results.p_by_mass_compost_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_c_pc/100)*1000)*(vm.wastequality_fs.total_phosphorus/(10**9))*(1-(vm.treatmentprocesses_fs.tpr_composting_reduction/100));
	results[4][2] = vm.results.p_by_mass_compost_fs;
    
	vm.results.p_by_mass_compost_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_c_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*(vm.wastequality_ss.total_phosphorus_mg_p_kg_ts/(10**6))*(1-(vm.treatmentprocesses_ss.tpr_composting_reduction/100));
	results5[4][2] = vm.results.p_by_mass_compost_ss;
    
	vm.results.p_by_mass_compost_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_c_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*(vm.wastequality_sw.total_phosphorus_mg_p_kg_ts/(10**6))*(1-(vm.treatmentprocesses_sw.tpr_composting_reduction/100));
	results9[4][2] = vm.results.p_by_mass_compost_sw;
    

	vm.results.p_pc_compost_fs = (vm.results.p_by_mass_compost_fs / vm.results.amount_of_compost_fs) * 100;
    vm.results.p_pc_compost_ss = (vm.results.p_by_mass_compost_ss / vm.results.amount_of_compost_ss) * 100;
    vm.results.p_pc_compost_sw = (vm.results.p_by_mass_compost_sw / vm.results.amount_of_compost_sw) * 100;

	vm.results.k_by_mass_compost_fs = (vm.wastestreams.fs_amount*(vm.wastestreams.fs_c_pc/100)*1000)*(vm.wastequality_fs.total_potassium/(10**9))*(1-(vm.treatmentprocesses_fs.tpotr_composting_reduction/100));
	results[4][3] = vm.results.k_by_mass_compost_fs;

	vm.results.k_by_mass_compost_ss = (vm.wastestreams.ss_amount*(vm.wastestreams.ss_c_pc/100))*(vm.wastequality_ss.total_solids_pc/(100))*(vm.wastequality_ss.total_potassium_mg_k_kg_ts/(10**6))*(1-(vm.treatmentprocesses_ss.tpotr_composting_reduction/100));
	results5[4][3] = vm.results.k_by_mass_compost_ss;
    
	vm.results.k_by_mass_compost_sw = (vm.wastestreams.sw_amount*(vm.wastestreams.sw_c_pc/100))*(vm.wastequality_sw.total_solids_pc/(100))*(vm.wastequality_sw.total_potassium_mg_k_kg_ts/(10**6))*(1-(vm.treatmentprocesses_sw.tpotr_composting_reduction/100));
	results9[4][3] = vm.results.k_by_mass_compost_sw;

	vm.results.k_pc_compost_fs = (vm.results.k_by_mass_compost_fs / vm.results.amount_of_compost_fs) * 100;
    vm.results.k_pc_compost_ss = (vm.results.k_by_mass_compost_ss / vm.results.amount_of_compost_ss) * 100;
    vm.results.k_pc_compost_sw = (vm.results.k_by_mass_compost_sw / vm.results.amount_of_compost_sw) * 100;
	//console.log(k_pc_compost);
	//$('#k_pc_compost_fs').html(k_pc_compost.toFixed(2));

}

function do_comparisons() {
    var ad_total_revenues = vm.results.total_potential_ad_revenue_fs + vm.results.total_potential_ad_revenue_ss + vm.results.total_potential_ad_revenue_sw;
    var sf_total_revenues = vm.results.total_potential_sf_revenue_fs + vm.results.total_potential_sf_revenue_ss + vm.results.total_potential_sf_revenue_sw;
    var bsf_total_revenues = vm.results.total_potential_bsf_revenue_fs + vm.results.total_potential_bsf_revenue_ss + vm.results.total_potential_bsf_revenue_sw;
    var c_total_revenues = vm.results.total_potential_compost_revenue_fs + vm.results.total_potential_compost_revenue_ss + vm.results.total_potential_compost_revenue_sw;
    
    comparison_results_revenue[1][1] = ad_total_revenues;
    comparison_results_revenue[2][1] = sf_total_revenues;
    comparison_results_revenue[3][1] = bsf_total_revenues;
    comparison_results_revenue[4][1] = c_total_revenues;
    
    var total_n_by_mass_ad = vm.results.n_by_mass_fs + vm.results.n_by_mass_ss + vm.results.n_by_mass_sw;
    var total_p_by_mass_ad = vm.results.p_by_mass_fs + vm.results.p_by_mass_ss + vm.results.p_by_mass_sw;
    var total_k_by_mass_ad = vm.results.k_by_mass_fs + vm.results.k_by_mass_ss + vm.results.k_by_mass_sw;
    
    var total_n_by_mass_sf = 0;
    var total_p_by_mass_sf = 0;
    var total_k_by_mass_sf = 0;
    
    var total_n_by_mass_bsf = vm.results.n_by_mass_bsf_fs + vm.results.n_by_mass_bsf_ss + vm.results.n_by_mass_basf_sw;
    var total_p_by_mass_bsf = vm.results.p_by_mass_bsf_fs + vm.results.p_by_mass_bsf_ss + vm.results.n_by_mass_basf_sw;
    var total_k_by_mass_bsf = vm.results.k_by_mass_bsf_fs + vm.results.k_by_mass_bsf_ss + vm.results.k_by_mass_basf_sw;
    
    var total_n_by_mass_compost = vm.results.n_by_mass_compost_fs + vm.results.n_by_mass_compost_ss + vm.results.n_by_mass_compost_sw;
    var total_p_by_mass_compost = vm.results.p_by_mass_compost_fs + vm.results.p_by_mass_compost_ss + vm.results.k_by_mass_compost_sw;
    var total_k_by_mass_compost = vm.results.k_by_mass_compost_fs + vm.results.k_by_mass_compost_ss + vm.results.k_by_mass_compost_sw;
    
    comparison_results_outputs[1][1] = total_n_by_mass_ad;
    comparison_results_outputs[1][2] = total_p_by_mass_ad;
    comparison_results_outputs[1][3] = total_k_by_mass_ad;
    comparison_results_outputs[2][1] = total_n_by_mass_sf;
    comparison_results_outputs[2][2] = total_p_by_mass_sf;
    comparison_results_outputs[2][3] = total_k_by_mass_sf;
    comparison_results_outputs[3][1] = total_n_by_mass_bsf;
    comparison_results_outputs[3][2] = total_p_by_mass_bsf;
    comparison_results_outputs[3][3] = total_k_by_mass_bsf;
    comparison_results_outputs[4][1] = total_n_by_mass_compost;
    comparison_results_outputs[4][2] = total_p_by_mass_compost;
    comparison_results_outputs[4][3] = total_k_by_mass_compost;
    
    var total_energy_content_ad = vm.results.energy_content_mj_fs + vm.results.energy_content_mj_ss  + vm.results.energy_content_mj_sw;
    var total_enery_content_sf = vm.results.energy_content_mj_sf_fs + vm.results.energy_content_mj_sf_ss + vm.results.energy_content_mj_sf_sw;
    var total_enery_content_bsf = 0;
    var total_enery_content_compost = 0;
    
    comparison_results_energy[1][1] = total_energy_content_ad;
    comparison_results_energy[2][1] = total_enery_content_sf;
    comparison_results_energy[3][1] = total_enery_content_bsf;
    comparison_results_energy[4][1] = total_enery_content_compost;
}

function calculate_sankey() {
    console.log('SANKEY', sankey_results);
    
    sankey_results[0][2] = vm.wastestreams.fs_amount * (vm.wastestreams.fs_ad_pc/100);
    sankey_results[1][2] = vm.wastestreams.fs_amount * (vm.wastestreams.fs_sf_pc/100);
    sankey_results[2][2] = vm.wastestreams.fs_amount * (vm.wastestreams.fs_bsfp_pc/100);
    sankey_results[3][2] = vm.wastestreams.fs_amount * (vm.wastestreams.fs_c_pc/100);
    
    sankey_results[4][2] = vm.wastestreams.ss_amount * (vm.wastestreams.ss_ad_pc/100);
    sankey_results[5][2] = vm.wastestreams.ss_amount * (vm.wastestreams.ss_sf_pc/100);
    sankey_results[6][2] = vm.wastestreams.ss_amount * (vm.wastestreams.ss_bsfp_pc/100);
    sankey_results[7][2] = vm.wastestreams.ss_amount * (vm.wastestreams.ss_c_pc/100);
    
    sankey_results[8][2] = vm.wastestreams.sw_amount * (vm.wastestreams.sw_ad_pc/100);
    sankey_results[9][2] = vm.wastestreams.sw_amount * (vm.wastestreams.sw_sf_pc/100);
    sankey_results[10][2] = vm.wastestreams.sw_amount * (vm.wastestreams.sw_bsfp_pc/100);
    sankey_results[11][2] = vm.wastestreams.sw_amount * (vm.wastestreams.sw_c_pc/100);

    sankey_results[12][2] = (vm.results.energy_content_mj_fs + vm.results.energy_content_mj_ss + vm.results.energy_content_mj_sw)/1000;
    sankey_results[13][2] = (vm.results.n_by_mass_fs + vm.results.n_by_mass_ss + vm.results.n_by_mass_sw + vm.results.p_by_mass_fs + vm.results.p_by_mass_ss + vm.results.p_by_mass_sw + vm.results.k_by_mass_fs +vm.results.k_by_mass_ss + vm.results.k_by_mass_sw)/1000;
    sankey_results[14][2] = (vm.results.total_potential_ad_revenue_fs +  vm.results.total_potential_ad_revenue_ss + vm.results.total_potential_ad_revenue_sw)/1000;
    
    sankey_results[15][2] = (vm.results.energy_content_mj_sf_fs + vm.results.energy_content_mj_sf_ss + vm.results.energy_content_mj_sf_sw)/1000;
    sankey_results[17][2] = (vm.results.total_potential_sf_revenue_fs +  vm.results.total_potential_sf_revenue_ss + vm.results.total_potential_sf_revenue_sw)/1000;
    

    sankey_results[19][2] = vm.results.n_by_mass_bsf_fs + vm.results.n_by_mass_bsf_ss + vm.results.n_by_mass_bsf_sw + vm.results.p_by_mass_bsf_fs + vm.results.p_by_mass_bsf_ss + vm.results.p_by_mass_bsf_sw + vm.results.k_by_mass_bsf_fs +vm.results.k_by_mass_bsf_ss + vm.results.k_by_mass_bsf_sw;
    sankey_results[20][2] = vm.results.total_potential_bsf_revenue_fs +  vm.results.total_potential_bsf_revenue_ss + vm.results.total_potential_bsf_revenue_sw;
    

    sankey_results[21][2] = vm.results.n_by_mass_compost_fs + vm.results.n_by_mass_compost_ss + vm.results.n_by_mass_compost_sw + vm.results.p_by_mass_compost_fs + vm.results.p_by_mass_compost_ss + vm.results.p_by_mass_compost_sw + vm.results.k_by_mass_compost_fs +vm.results.k_by_mass_compost_ss + vm.results.k_by_mass_compost_sw;
    sankey_results[22][2] = vm.results.total_potential_compost_revenue_fs +  vm.results.total_potential_compost_revenue_ss + vm.results.total_potential_compost_revenue_sw;
    
    console.log('SANKEY', sankey_results);
}


function calculate_results() {
    $('#outputs').removeClass('hidden');
	console.log('calculating results');
	console.log(vm.prices.biogas_price);
	console.log(results[1][2]);

//	var fs_amount = parseFloat($('#fs_amount').val());
//	var fs_ad_pc = parseFloat($('#fs_ad_pc').val());
//	var fs_sf_pc = parseFloat($('#fs_sf_pc').val());
//	var fs_bsfp_pc = parseFloat($('#fs_bsfp_pc').val());
//	var fs_c_pc = parseFloat($('#fs_c_pc').val());
//	var fs_t_pc = parseFloat($('#fs_t_pc').val());
    
	var fs_amount = parseFloat(vm.wastestreams.fs_amount);
	var fs_ad_pc = parseFloat(vm.wastestreams.fs_ad_pc);
	var fs_sf_pc = parseFloat(vm.wastestreams.fs_sf_pc);
	var fs_bsfp_pc = parseFloat(vm.wastestreams.fs_bsfp_pc);
	var fs_c_pc = parseFloat(vm.wastestreams.fs_c_pc);
	var fs_t_pc = parseFloat(vm.wastestreams.fs_t_pc);
    

	if ((fs_ad_pc+fs_sf_pc+fs_bsfp_pc+fs_c_pc)> 100 ) {

		// do something
		console.log('doing nothing');

	}
	else {
		console.log('calculating...');
        $('html, body').animate({scrollTop: $('#outputs').offset().top}, 1000);
		calculate_ad();
		calculate_sf();
		calculate_bsf();
		calculate_compost();
        do_comparisons();
        calculate_sankey();
	}


}

function delete_project(proj_id) {
    var bla = false;
    
    $.ajax({type: 'GET',
            url: '/revamp_tool/delete_project/', 
            async: false,
           data: {
        'proj_id': proj_id
    },
           dataType: 'text',
           success: function(data) {
            bla = true;
            console.log('ajax call made', data);
           }
    });
    
    return bla;
}

function save_project() {
    var bla = false;
    var csrftoken = getCookie('csrftoken');
    console.log('save function called...');
    $.ajax({type: "POST",
            url: vm.save_project_url, 
            async: false,
            data: {
                csrfmiddlewaretoken: document.getElementsByName('csrfmiddlewaretoken')[0].value,
                wastequality_fs: JSON.stringify(vm.wastequality_fs),
                wastequality_ss: JSON.stringify(vm.wastequality_ss),
                wastequality_sw: JSON.stringify(vm.wastequality_sw),
                wastestreams:                JSON.stringify(vm.wastestreams),
                treatmentprocesses_fs: JSON.stringify(vm.treatmentprocesses_fs),
                treatmentprocesses_ss: JSON.stringify(vm.treatmentprocesses_ss),
                treatmentprocesses_sw: JSON.stringify(vm.treatmentprocesses_sw),
                prices: JSON.stringify(vm.prices),
                location: JSON.stringify(vm.location),
                save_new: JSON.stringify(vm.use_defaults.save_new),
                project_id: JSON.stringify(vm.project_id),
                project_name: JSON.stringify(vm.name)
            },
            dataType: 'json',
            success: function(data) {
            
            console.log('ajax call made', data);
            if ('error' in data) {
                $('#save_warning').addClass('alert alert-danger');
		        $('#save_warning').html(data['error']);
            } else {
                document.location.reload(true);
            }

            }
    });
    
    return;
}

function load_approved_library() {
    var lib_id = $('#approved_library').val();
    console.log(lib_id);
    
    $.ajax({type: 'GET',
            url: '/revamp_tool/load_approved_library/', 
            async: false,
           data: {
        'proj_id': lib_id,
    },
           dataType: 'text',
           success: function(data) {
               
            console.log('ajax call made', typeof(JSON.parse(data)));
               proj_data = JSON.parse(data);
               console.log(proj_data['wastestreams']['faecal_sludge']);
               vm.project_id = proj_data['id'];
               vm.name = proj_data['name'];
               vm.location = proj_data['location'];
               vm.wastequality_fs = proj_data['fs_waste_quality'] ;
               vm.wastequality_ss = proj_data['ss_waste_quality'] ;
               vm.wastequality_sw = proj_data['sw_waste_quality'] ;
               vm.treatmentprocesses_fs = proj_data['fs_treatment_processes'];
               vm.treatmentprocesses_ss = proj_data['ss_treatment_processes'];
               vm.treatmentprocesses_sw = proj_data['sw_treatment_processes'];
               vm.prices = proj_data['prices'] ;
               vm.wastestreams.fs_amount = proj_data['wastestreams']['faecal_sludge'];
               vm.wastestreams.fs_ad_pc = proj_data['wastestreams']['fs_anaeribic_digestion'];
               vm.wastestreams.fs_sf_pc = proj_data['wastestreams']['fs_solid_fuel'];
               vm.wastestreams.fs_bsfp_pc = proj_data['wastestreams']['fs_black_soldier_fly_process'];
               vm.wastestreams.fs_c_pc = proj_data['wastestreams']['fs_compost'];
               vm.wastestreams.ss_amount = proj_data['wastestreams']['sewage_sludge'];
               vm.wastestreams.ss_ad_pc = proj_data['wastestreams']['ss_anaeribic_digestion'];
               vm.wastestreams.ss_sf_pc = proj_data['wastestreams']['ss_solid_fuel'];
               vm.wastestreams.ss_bsfp_pc = proj_data['wastestreams']['ss_black_soldier_fly_process'];
               vm.wastestreams.ss_c_pc = proj_data['wastestreams']['ss_compost'];
               vm.wastestreams.sw_amount = proj_data['wastestreams']['solid_waste'];
               vm.wastestreams.sw_ad_pc = proj_data['wastestreams']['sw_anaeribic_digestion'];
               vm.wastestreams.sw_sf_pc = proj_data['wastestreams']['sw_solid_fuel'];
               vm.wastestreams.sw_bsfp_pc = proj_data['wastestreams']['sw_black_soldier_fly_process'];
               vm.wastestreams.sw_c_pc = proj_data['wastestreams']['sw_compost'];
               $('#current_project_name').text(vm.name);
               vm.wastestreams.fs_t_pc = vm.wastestreams.fs_c_pc + vm.wastestreams.fs_bsfp_pc + vm.wastestreams.fs_sf_pc + vm.wastestreams.fs_ad_pc;
               vm.wastestreams.ss_t_pc = vm.wastestreams.ss_c_pc + vm.wastestreams.ss_bsfp_pc + vm.wastestreams.ss_sf_pc + vm.wastestreams.ss_ad_pc;
               vm.wastestreams.sw_t_pc = vm.wastestreams.sw_c_pc + vm.wastestreams.sw_bsfp_pc + vm.wastestreams.sw_sf_pc + vm.wastestreams.sw_ad_pc;
               console.log(proj_data['location']);
               $('#current_project_city').text(vm.location.city);
                $('.navbar-top-links').notify(
                  "Project loaded.", 
                  { className: "success", position: 'left', autoHideDelay: 2000,arrowShow: false }
                );
           }
    });
    
}




function gql(query) {
        var graph = graphql("/graphql", {
            method: "POST",

        });
        //var project = graph(query);
        //project().then(function(project) {

        	calculate_results();
            console.log('done');
        //})
 }

function drawBarChart(results_for_chart, options, div) {
		var data = google.visualization.arrayToDataTable(results_for_chart);



        $(".nav-tabs a[title='charts']").click()
        //$(".tabs a[title='content_1']").click()
        var chart_div = document.getElementById(div);

        //var chart = new google.charts.Bar(chart_div);
        var chart = new google.visualization.ColumnChart(chart_div);
    
    
        if (vm.images) {
          google.visualization.events.addListener(chart, 'ready', function () {
            chart_div.innerHTML = '<img src="' + chart.getImageURI() + '">';
            console.log(chart_div.innerHTML);
          });
        }

        chart.draw(data, google.charts.Bar.convertOptions(options));

}










function drawChart() {
    
    var data = new google.visualization.DataTable();
    
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows(sankey_results);

    // Set chart options
    var options = {
      width: 900,
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('sankey_multiple'));
    
    var chart_div = document.getElementById('sankey_multiple');
//      google.visualization.events.addListener(chart, 'ready', function () {
//        chart_div.innerHTML = '<img src="' + chart.getImageURI() + '">';
//        console.log(chart_div.innerHTML);
//      });
    
    chart.draw(data, options);
   }


$(document).ready(function () {
    
//    $('form').on('focus', 'input[type=number]', function (e) {
//      $(this).on('mousewheel.disableScroll', function (e) {
//        e.preventDefault()
//      })
//    });
//    $('form').on('blur', 'input[type=number]', function (e) {
//      $(this).off('mousewheel.disableScroll')
//    });
    
    $(function(){
       vm.wastestreams.fs_t_pc = vm.wastestreams.fs_c_pc + vm.wastestreams.fs_bsfp_pc + vm.wastestreams.fs_sf_pc + vm.wastestreams.fs_ad_pc;
       vm.wastestreams.ss_t_pc = vm.wastestreams.ss_c_pc + vm.wastestreams.ss_bsfp_pc + vm.wastestreams.ss_sf_pc + vm.wastestreams.ss_ad_pc;
       vm.wastestreams.sw_t_pc = vm.wastestreams.sw_c_pc + vm.wastestreams.sw_bsfp_pc + vm.wastestreams.sw_sf_pc + vm.wastestreams.sw_ad_pc;
        
    });
    
    
    $(function() {
        $('.last_update').each(function(){
            var d = new Date($(this).text().trim());

            
            var n = new Date();
            var o = n.getTimezoneOffset();


            Date.prototype.stdTimezoneOffset = function () {
                var jan = new Date(this.getFullYear(), 0, 1);
                var jul = new Date(this.getFullYear(), 6, 1);
                console.log(jan.getTimezoneOffset(), jul.getTimezoneOffset());
                return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset());
            }

            Date.prototype.isDstObserved = function () {
                return this.getTimezoneOffset() < this.stdTimezoneOffset();
            }
            
            var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            
            if (d.isDstObserved()) { 
                output = new Date((d.getTime() - n.getTimezoneOffset()* 60 * 1000)-3600000);
                year = parseInt(output.getYear())+1900;
                month = months[parseInt(output.getMonth())];
                $(this).html(output.getDay()+' '+month+', '+year+' '+('0'+output.getHours()).slice(-2)+'.'+('0'+output.getMinutes()).slice(-2));
                
            } else {
                output = new Date((d.getTime() - n.getTimezoneOffset()* 60 * 1000));
                year = parseInt(output.getYear())+1900;
                month = months[parseInt(output.getMonth())];
                $(this).html(output.getDay()+' '+month+', '+year+' '+('0'+output.getHours()).slice(-2)+'.'+('0'+output.getMinutes()).slice(-2));
            }
            
        });
    });

    
$('.sum_boxes').change(function(){
			
			var	boxes = $('.sum_boxes'),
				total = 0;
			
			$(boxes).each(function(){
				total += !isNaN(parseInt(this.value)) ? parseInt(this.value) : 0;
			});
			
			console.log(total);
			
			if( total > 100) {
				$('#fs_total_warning').addClass('alert alert-danger');
		        $('#fs_total_warning').html('Total cannot be more than 100');
                vm.wastestreams.fs_t_pc = total;
			} else {
                $('#fs_total_warning').removeClass('alert alert-danger');
		        $('#fs_total_warning').html('');
                vm.wastestreams.fs_t_pc = total;
			}
		});
    
    $('[data-toggle="tooltip"]').tooltip({
        placement : 'top'
    });
    
    
    $('.ss_sum_boxes').change(function(){
			
			var	boxes = $('.ss_sum_boxes'),
				total = 0;
			
			$(boxes).each(function(){
				total += !isNaN(parseInt(this.value)) ? parseInt(this.value) : 0;
			});
			
			console.log(total);
			
			if( total > 100) {
				$('#ss_total_warning').addClass('alert alert-danger');
		        $('#ss_total_warning').html('Total cannot be more than 100');
                vm.wastestreams.ss_t_pc = total;
			} else {
                $('#ss_total_warning').removeClass('alert alert-danger');
		        $('#ss_total_warning').html('');
                vm.wastestreams.ss_t_pc = total;
			}
		});
    

    
    $('.sw_sum_boxes').change(function(){
			
			var	boxes = $('.sw_sum_boxes'),
				total = 0;
			
			$(boxes).each(function(){
				total += !isNaN(parseInt(this.value)) ? parseInt(this.value) : 0;
			});
			
			console.log(total);
			
			if( total > 100) {
				$('#sw_total_warning').addClass('alert alert-danger');
		        $('#sw_total_warning').html('Total cannot be more than 100');
                vm.wastestreams.sw_t_pc = total;
			} else {
                $('#sw_total_warning').removeClass('alert alert-danger');
		        $('#sw_total_warning').html('');
                vm.wastestreams.sw_t_pc = total;
			}
		});
    

    $(':input[type="number"]').change(function() {
            subtotals = false;
            totals = false;
        
            if(vm.wastestreams.fs_ad_pc < 0  || vm.wastestreams.fs_ad_pc > 100
              || vm.wastestreams.ss_ad_pc < 0  || vm.wastestreams.ss_ad_pc > 100
              || vm.wastestreams.sw_ad_pc < 0  || vm.wastestreams.sw_ad_pc > 100
              || vm.wastestreams.fs_sf_pc < 0  || vm.wastestreams.fs_sf_pc > 100
              || vm.wastestreams.ss_sf_pc < 0  || vm.wastestreams.ss_sf_pc > 100
              || vm.wastestreams.sw_sf_pc < 0  || vm.wastestreams.sw_sf_pc > 100
              || vm.wastestreams.fs_bsfp_pc < 0  || vm.wastestreams.fs_bsfp_pc > 100
              || vm.wastestreams.ss_bsfp_pc < 0  || vm.wastestreams.ss_bsfp_pc > 100
              || vm.wastestreams.sw_bsfp_pc < 0  || vm.wastestreams.sw_bsfp_pc > 100
              || vm.wastestreams.fs_c_pc < 0  || vm.wastestreams.fs_c_pc > 100
              || vm.wastestreams.ss_c_pc < 0  || vm.wastestreams.ss_c_pc > 100
              || vm.wastestreams.sw_c_pc < 0  || vm.wastestreams.sw_c_pc > 100) {
                alert("values must be between 0 and 100");
                subtotals = true;
                
            } 
            $("#calculate").attr("disabled", false);
            if(vm.wastestreams.fs_t_pc < 0  || vm.wastestreams.fs_t_pc > 100
              || vm.wastestreams.ss_t_pc < 0  || vm.wastestreams.ss_t_pc > 100
              || vm.wastestreams.sw_t_pc < 0  || vm.wastestreams.sw_t_pc > 100){
              totals = true;
            }
                
        if (subtotals || totals) {
          $("#calculate").attr("disabled", true);
        } else {
          $("#calculate").attr("disabled", false);
        }
        console.log(subtotals, totals);
        console.log(vm.wastestreams.ss_ad_pc);
        
        
    });
    
    
$(function() {    
$("#salvapng").click(function() { 
var element = $("#html-content-holder");          
html2canvas(element, {
    letterRendering: true,
}).then(function(canvas){
                var imgageData = canvas.toDataURL("image/png");
        var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
        $("<a>", {href:newData, download:"Proof1.png",on:{click:function(){$(this).remove()}}})
        .appendTo("body")[0].click()
 })
}); 
});

  
$(function() {    
$("#salvajpg").click(function() { 
var element = $("#html-content-holder");         
html2canvas(element, {
    letterRendering: true,
}).then(function(canvas){
                var imgageData = canvas.toDataURL("image/jpg");
        var newData = imgageData.replace(/^data:image\/jpg/, "data:application/octet-stream");
        $("<a>", {href:newData, download:"Proof1.jpg",on:{click:function(){$(this).remove()}}})
        .appendTo("body")[0].click()
 })
}); 
}); 
    
    // Quick fix for an issue with the bootstrap dropdown not working.
    $('.nav-fix li').click(function() {
        $('.nav-fix li.active').removeClass("active");
    });


$('#convert-button').click(function() {
   vm.images = !vm.images;
    drawcharts();
    if (vm.images) {
        $('#convert-button').html('Convert to SVG');
    } else {
        $('#convert-button').html('Convert to PNG');
    }
    
    
});
    
$("#editor_save").click(function() {

// the canvg call that takes the svg xml and converts it to a canvas
  canvg('canvas', $("#svg")[0].outerHTML);

// the canvas calls to output a png
var canvas = document.getElementById("canvas");
var img = canvas.toDataURL("image/png");
// do what you want with the base64, write to screen, post to server, etc...
});
	console.log('hello revamp');

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

		  if($(e.target).attr('id') == 'charts-trigger')
		  {
		  	 drawcharts();
  
		  }
           if($(e.target).attr('id') == 'sankey-trigger')
		  {
              console.log('SANKEY');
              drawChart();
          }
	});

	$('button#calculate').click(function() {
        
		console.log('clicked');

        calculate_results();
        drawcharts();
        drawChart();
        
	});
    
    $('#load_approved_library').click(function() {
       console.log('loading approved library');
        load_approved_library();
    });
    
    $('#save_project').click(function() {
       console.log('saving project...');
        save_project();
    });

//	$('#fs_ad_pc').change(function() {
//		check_total();
//	});
//
//	$('#fs_sf_pc').change(function() {
//		check_total();
//	});
//
//	$('#fs_bsfp_pc').change(function() {
//		check_total();
//	});
//
//	$('#fs_c_pc').change(function() {
//		check_total();
//	});

});

