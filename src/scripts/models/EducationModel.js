const schools = [
	{
		name: 'Newcastle University',
		award: 'MSc',
		course: 'Innovation, Creativity & Entrepreneuship',
		location: 'Newcastle, UK',
		startDate: 'Sep 2016',
		endDate: 'Aug 2017',
		url: 'https://www.ncl.ac.uk'
	},
	{
		name: 'Imperial College London',
		award: 'Postgraduate Certificate',
		course: 'Advanced Study of Allergy & Clinical Immunology',
		location: 'London, UK',
		startDate: 'Sep 2009',
		endDate: 'Jul 2010',
		url: 'https://www.imperial.ac.uk'
	},
	{
		name: 'Varsity College',
		award: 'Postgraduate Diploma',
		course: 'International Marketing Management',
		location: 'Cape Town, South Africa',
		startDate: 'Jan 2002',
		endDate: 'Dec 2002',
		url: 'https://www.varsitycollege.co.za/'
	},
	{
		name: 'University of Birmingham',
		award: 'PhD',
		course: 'The effect of exercise on biochemical, physiological and psychological parameters.',
		location: 'Birmingham, UK',
		startDate: 'Sep 1996',
		endDate: 'Aug 1999',
		url: 'http://www.bham.ac.uk'
	},
	{
		name: 'University of Brighton',
		award: 'BSc (Hons)',
		course: 'Physiology and Sport Science.',
		location: 'Brighton, UK',
		startDate: 'Sep 1993',
		endDate: 'Aug 1996',
		url: 'http://www.bham.ac.uk'
	}
];

export default class EducationModel {
	constructor () {
		this.schools = schools;
	}
}