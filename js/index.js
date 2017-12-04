var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage('An example message.', 3000);
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification('Hey you', 'if your done, GO BACK TO WORKK' );
	});


});

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.notification);
}


function createMessage(message, time){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
    new Toast({content: message, duration: time}); 
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
    
	navigator.notification.confirm(
    	'Hei you hungry?',  // message
        dialogDismissed,         // callback
        'hungry bot!',            // title
        ['YES', 'NO']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) {
       new Notification({ title: title, message: message1});
    }
   	else if(buttonIndex==2)   {
        new Toast({content: 'It is rather boring.', duration: 3000});
    }
    

}

   
   
function createNotification(title, message1) {
        		
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
        message: 	"if your done, GO BACK TO WORKK",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}