var myConfig = {
 	type: 'hbullet',
 	title:{
 	  text: 'Call Center Daily Goals',
 	  fontColor: '#212121'
 	},
 	plot:{
 	  barSpace: 8,
 	  goal:{
 	    borderWidth: 0,
 	    alpha: 0.9
 	  },
 	  tooltip:{
 	    text:'%t: %v of %g',
 	    borderRadius: 3,
 	    fontSize: 12,
 	    borderWidth: 0
 	  }
 	},
 	labels:[
 	  {
 	    text:'',
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'//demos.zingchart.com/view/6FW4FFOV/avitar11.png',
 	    hook: 'scale:name=scale-x,index=0',
 	    offsetX: -50
 	  },
 	  {
 	    text:'',
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'//demos.zingchart.com/view/6FW4FFOV/avitar22.png',
 	    hook: 'scale:name=scale-x,index=1',
 	    offsetX: -50
 	  },
 	  {
 	    text:'',
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'//demos.zingchart.com/view/6FW4FFOV/avitar33.png',
 	    hook: 'scale:name=scale-x,index=2',
 	    offsetX: -50
 	  },
 	  {
 	    text:'',
 	    height: 50,
 	    width: 50,
 	    backgroundImage:'//demos.zingchart.com/view/6FW4FFOV/avitar44.png',
 	    hook: 'scale:name=scale-x,index=3',
 	    offsetX: -50
 	  }
 	],
 	scaleX:{
 	  label:{
 	    text: 'Agent',
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
 	    text: 'Number of Incidents'
 	  }
 	},
 	plotarea:{
 	  margin:'50 50 90 120'
 	},
	series: [
		{
		  text: 'Inbound Calls',
			values: [35,22,50,65],
			backgroundColor:'#009688',
			goals: [25,30,30,45],
			goal: {
			  backgroundColor:"#00796b"
			}
		},
		{
		  text: 'Outbound Calls',
			values: [30,30,20,15],
			backgroundColor:'#ffc107',
			goals: [45,50,45,30],
			goal:{
			  backgroundColor: '#ffa000'
			}
		},
		{
		  text: 'Call Escalations',
			values: [10,42,12,8],
			backgroundColor:'#9c27b0',
			goals: [5,15,10,15],
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