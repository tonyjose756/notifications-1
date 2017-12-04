var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage();
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}


function createMessage(){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: 'An example message.', duration: 3000}); 
    new Toast({content: 'An example message gnfjv oj vf jovje rgre verlg erjlel nerjlregdffvf fjv fbfvfj vfj vjfvjl fvfj vfjl vjl fvjl fl vlfj vfvj flj vfl v fvjl fjl vfl v fvfl vfl vfl vlfjv f vflv fl vfl fl; vkjdfj fd  fm f g nr j2.', duration: 3000}); 
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
    
	navigator.notification.confirm(
    	'What do you think of this dialog?',  // message
        dialogDismissed,         // callback
        'An example dialog!',            // title
        ['Awesome!', 'Sucks']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) new Toast({content: "You're easily pleased", duration: 3000});
   	else if(buttonIndex==2) new Toast({content: 'It is rather boring.', duration: 3000});

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 1000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
    
    cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		"Hey you",
        message: 	"This is an example notification",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}