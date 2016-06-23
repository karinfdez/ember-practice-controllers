import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		action2(){
			alert("Application route action action2!");
		},
		enter2(){
			alert('Application route action enter2!');
		}
	}
	
});
