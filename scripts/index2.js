var myConfig = {
 	type: 'hbullet',
 	title:{
 	  text: 'CMT Training hours',
 	  fontColor: '#212121'
 	},
 	plot:{
 	  barSpace: 5,
 	  goal:{
 	    borderWidth: 0,
 	    alpha: 0.9
 	  },
 	  tooltip:{
 	    text:'%t: %v of %g',
 	    borderRadius: 5,
 	    fontSize: 12,
 	    borderWidth: 0
 	  }
 	},
 	labels:[
 	  {
 	    text:'RBC',
		fontColor: '#32CD32',
		fontWeight: 'Bold',
		fontSize: 18,
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'',
 	    hook: 'scale:name=scale-x,index=0',
 	    offsetX: -50
 	  },
 	  {
 	    text:'PGO',
		fontColor: '#32CD32',
		fontWeight: 'Bold',
		fontSize: 18,
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'',
 	    hook: 'scale:name=scale-x,index=1',
 	    offsetX: -50
 	  },
 	  {
 	    text:'JAD',
		fontColor: '#DC143C',
		fontWeight: 'Bold',
		fontSize: 18,
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'',
 	    hook: 'scale:name=scale-x,index=2',
 	    offsetX: -50
 	  },
 	  {
 	    text:'JZR',
		fontColor: '#FFD700',
		fontWeight: 'Bold',
		fontSize: 18,
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'',
 	    hook: 'scale:name=scale-x,index=3',
 	    offsetX: -50
 	  },
 	  {
 	    text:'JMZ',
		fontColor: '#DC143C',
		fontWeight: 'Bold',
		fontSize: 18,
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'',
 	    hook: 'scale:name=scale-x,index=4',
 	    offsetX: -50
 	  },
 	  {
 	    text:'GAP',
		fontColor: '#32CD32',
		fontWeight: 'Bold',
		fontSize: 18,
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'',
 	    hook: 'scale:name=scale-x,index=5',
 	    offsetX: -50
 	  },
 	  {
 	    text:'GMG',
		fontColor: '#FFD700',
		fontWeight: 'Bold',
		fontSize: 18,
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'',
 	    hook: 'scale:name=scale-x,index=6',
 	    offsetX: -50
 	  },
 	  {
 	    text:'DMP',
		fontColor: '#32CD32',
		fontWeight: 'Bold',
		fontSize: 18,
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'',
 	    hook: 'scale:name=scale-x,index=7',
 	    offsetX: -50
 	  },
 	  {
 	    text:'BST',
		fontColor: '#32CD32',
		fontWeight: 'Bold',
		fontSize: 18,
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'',
 	    hook: 'scale:name=scale-x,index=8',
 	    offsetX: -50
 	  },
 	  {
 	    text:'ANP',
		fontColor: '#32CD32',
		fontWeight: 'Bold',
		fontSize: 18,
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'',
 	    hook: 'scale:name=scale-x,index=9',
 	    offsetX: -50
 	  },
 	  {
 	    text:'AJA',
		fontColor: '#FFD700',
		fontWeight: 'Bold',
		fontSize: 18,
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'',
 	    hook: 'scale:name=scale-x,index=10',
 	    offsetX: -50
 	  },
 	  {
 	    text:'AMG',
		fontColor: '#32CD32',
		fontWeight: 'Bold',
		fontSize: 18,
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'',
 	    hook: 'scale:name=scale-x,index=11',
 	    offsetX: -50
 	  }
 	],
 	scaleX:{
 	  label:{
 	    text: 'Miembro ACN',
 	    offsetX: -70
 	  },
 	  guide:{
 	    visible: true,
 	    lineWidth: 1,
 	    lineStyle: 'solid'
 	  },
 	  item:{
 	    visible: false
 	  }
 	},
 	scaleY:{
 	  guide:{
 	    visible: false
 	  },
 	  label:{
 	    text: 'Horas de capacitación'
 	  }
 	},
 	plotarea:{
 	  margin:'50 50 90 120'
 	},
	series: [
		/* {
		  text: 'Junio 11',
			values: [3.4, 66, 16, 25, 18.5, 41.7, 45.5, 60.4167, 68.9, 33.1, 46.1, 59],
			backgroundColor:'#009688',
			goals: [40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40, 40],
			goal: {
			  backgroundColor:"#00796b"
			}
		}, */
		{
		  text: 'Junio 29',
			values: [55.4, 67, 19, 33.5, 20.4, 55.2, 45.5, 66.9167, 68.9, 86.1, 48.1, 59],
			backgroundColor:'#9c27b0',
			goals: [55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55],
			goal:{
			  backgroundColor: '#7b1fa2'
			}
		}
	]
};

zingchart.render({ 
	id: 'myChart', 
	data: myConfig
});