const work = [
	{
		company: 'Paula Rosa Photography',
		role: 'Owner',
		industry: 'Photography',
		location: 'Northumberland, UK',
		startDate: 'Sep 2014',
		endDate: 'Aug 2016',
		url: 'https://www.paularosa.photography',
		description: ''
	},
	{
		company: 'Northumbria University',
		role: 'Professor (Chair in Molecular and Exercise Immunology)',
		industry: 'Photography',
		location: 'Newcastle, UK',
		startDate: 'Sep 2007',
		endDate: 'Aug 2014',
		url: 'https://www.paularosa.photography',
		description: `Unit of Assessment lead for Research Excellence Framework 2014 
Member of management committee for the Department of sport, exercise and rehabilitation with a £10m budget.
Budget holder for Sport, Exercise and Wellness Research Centre (2011-2013)
Faculty working group: Grant management
Board member of sport, asthma and allergy group, European Academy of Allergy and Clinical Immunology (EAACI)
Chair of European Task Force for Exercise-induced anaphylaxis (EAACI)
Director of the Physical activity in Health and Long term conditions research group
PGR Director for School 2008-2010
Principal supervisor on 4 PhD programmes  
Grant income from charity, donor, industry and Biotechnology and Biological Research council (BBSRC)
Delivering research council workshop: BBSRC for School of Life Sciences 2010; Department of Sport and Exercise Sciences 2010
Guidance tutor and project supervisor for undergraduate and postgraduate programmes.  
Leading unit in Clinical Exercise Physiology masters degree. 
Co-director of Sporting Health enterprise. 
Chair of University Tissue Bank Governing Board`
	},
	{
		company: 'University of Portsmouth',
		role: 'Senior Lecturer',
		industry: 'Department of Sport and Exercise Sciences',
		location: 'Portsmouth, UK',
		startDate: 'Sep 2004',
		endDate: 'Aug 2007',
		url: 'https://www.port.ac.uk',
		description: `Chair and founder of the ‘Exercise and Inflammation research group’ – in collaboration with St Georges Hospital, London and University of Kingston
Lecturer, tutor and project supervisor for undergraduate and postgraduate programmes.  
Written and delivered two novel units in exercise-immunology for 3rd year undergraduate and masters’ level students.
Consultant for underperforming elite athletes and chronic fatigue sufferers.`
	},
	{
		company: 'Natures Way',
		role: 'Market Analyst',
		industry: '',
		location: 'Portsmouth, UK',
		startDate: 'Sep 2003',
		endDate: 'Aug 2004',
		url: 'http://www.natureswayfoods.co.uk/',
		description: ``
	},
	{
		company: 'University of Cape Town',
		role: 'Research Fellow',
		industry: 'MRC Research Unit for Exercise Science and Sports Medicine',
		location: 'Cape Town, South Africa',
		startDate: 'Jan 2002',
		endDate: 'Jul 2003',
		url: 'http://www.uct.ac.za',
		description: `Development of novel hypothesis for the Unexplained, underperformance syndrome in athletes and fatigue during endurance exercise.
Consultant for underperforming elite athletes.`
	},
	{
		company: 'University of Stellenbosch',
		role: 'Research Fellow',
		industry: 'Department of Human and Animal Physiology',
		location: 'Cape Town, South Africa',
		startDate: 'Sep 1999',
		endDate: 'Dec 2001',
		url: 'http://www.maties.ac.za',
		description: `Novel research on equine physiology and exercise immunology.
Contractual scientist for Pharma Natura Pty, South Africa.
Principal investigator for formulation, research and development of nutritional supplement product range (OptiSPORT) for athletes.
OptiSPORT was given an award of excellence by South African Trade and Industry for University/Industry collaboration`
	}
];

export default class WorkModel {
	constructor () {
		this.work = work;
	}
}