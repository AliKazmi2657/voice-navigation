
        var str1 = 'clickbody';
		var str2 = 'clicksubject';
		var str3 = 'clickemail';
		var str4 = 'clickmail';
    function startRec(){
            if (window.hasOwnProperty('webkitSpeechRecognition')) {
  
			        var Rec = new webkitSpeechRecognition();
  
		            	Rec.continuous = true;
		            	Rec.interimResults = true;
			            Rec.lang = "en-US";
		            	Rec.start();
  
			Rec.onresult = function (e) {
			 var rec = e.results[0][0].transcript.replace(/ /g, '');;
			  
              console.log('Recognised= ' +  rec)
              // switch(rec)
              // {
              //   case str1:
              //     {
              //       startDictation();
              //       break;
              //     }
              //     case str2:
              //       {
              //         startDictation1();
              //         break;
              //       }
              //     case str3:
              //       {
              //         startDictation2();
              //         break;
              //       } 
              //     case str4:
              //       {
              //         startDictation3();
              //         break;
              //       }  
              //      default:
              //        {
              //          console.log('Invalid Choice...')
              //         //  startRec();
              //        } 
              
              if(rec === str1 )
              {
                startDictation();
                
                
              }
              else if(rec === str2)
              {
                  startDictation1();
                    
              }
              else if(rec === str3)
              {
                  startDictation2();
                  
              }
              else if(rec === str4)
              {
                  startDictation3();
                  
              }
             
            };
           
			Rec.onerror = function(e) {

			  Rec.stop();
			}
          }}
         
        
  
        function startDictation() {
  
            	  if (window.hasOwnProperty('webkitSpeechRecognition')) {
          
            		var recognition = new webkitSpeechRecognition();
          
            		recognition.continuous = true;
            		recognition.interimResults = true;
            		recognition.lang = "en-US";
            		recognition.start();
          
            		recognition.onresult = function (event) {
                  for (var i= event.resultIndex; i< event.results.length; ++i){
                    if(event.results[i].isFinal){
                  document.getElementById('transcript').value = event.results[i][0].transcript;
                }
                      else{
                        document.getElementById('transcript').value = event.results[i][0].transcript;
                      }
                
            		recognition.onresult = function (event) {
            		  document.getElementById('transcript').value = event.results[0][0].transcript;
                }  
                      
            		};
            		recognition.onerror = function(event) {
                      recognition.stop();
                  }
                                   
            	  }
                }
            }
            function startDictation1() {
  
                if (window.hasOwnProperty('webkitSpeechRecognition')) {
        
                  var recognition1 = new webkitSpeechRecognition();
        
                  recognition1.continuous = true;
                  recognition1.interimResults = true;
                  recognition1.lang = "en-US";
                  recognition1.start();
        
                  recognition1.onresult = function (event1) {
                for (var i= event1.resultIndex; i< event1.results.length; ++i){
                  if(event1.results[i].isFinal){
                document.getElementById('transcript1').value = event1.results[i][0].transcript;
              }
                    else{
                      document.getElementById('transcript1').value = event1.results[i][0].transcript;
                    }
              }
                  recognition1.onresult = function (event1) {
                    document.getElementById('transcript1').value = event1.results[0][0].transcript;
                    
                    
                  };
                  recognition1.onerror = function(event1) {
                    recognition1.stop();
                  }
                }
              }
          }
          function startDictation2() {
  
            if (window.hasOwnProperty('webkitSpeechRecognition')) {
    
              var recognition2 = new webkitSpeechRecognition();
    
              recognition2.continuous = true;
              recognition2.interimResults = true;
              recognition2.lang = "en-US";
              recognition2.start();
    
              recognition2.onresult = function (event2) {
            for (var i= event2.resultIndex; i< event2.results.length; ++i){
              if(event2.results[i].isFinal){
            document.getElementById('transcript2').value = event2.results[i][0].transcript.replace(/ /g, '');;
          }
                else{
                  document.getElementById('transcript2').value = event2.results[i][0].transcript.replace(/ /g, '');;
                }
          }
              recognition2.onresult = function (event2) {
                document.getElementById('transcript2').value = event2.results[0][0].transcript.replace(/ /g, '');;
                
                
              };
              recognition2.onerror = function(event2) {
                recognition2.stop();
              }
            }
          }
      }
      function startDictation3() {
  
            	  if (window.hasOwnProperty('webkitSpeechRecognition')) {
          
            		var recognition3 = new webkitSpeechRecognition();
          
            		recognition3.continuous = true;
            		recognition3.interimResults = true;
            		recognition3.lang = "en-US";
            		recognition3.start();
          
            		recognition3.onresult = function (event3) {
                  for (var i= event3.resultIndex; i< event3.results.length; ++i){
                    if(event3.results[i].isFinal){
                  document.getElementById('transcript3').value = event3.results[i][0].transcript.replace(/ /g, '');;
                }
                      else{
                        document.getElementById('transcript3').value = event3.results[i][0].transcript.replace(/ /g, '');;
                      }
                }
            		recognition3.onresult = function (event3) {
            		  document.getElementById('transcript3').value = event3.results[0][0].transcript.replace(/ /g, '');;
            		  
                      
            		};
            		recognition3.onerror = function(event3) {
            		  recognition3.stop();
            		}
            	  }
                }
            }
        // function startDictation() {
  
		//   if (window.hasOwnProperty('webkitSpeechRecognition')) {
  
		// 	var recognition = new webkitSpeechRecognition();
  
		// 	recognition.continuous = true;
		// 	recognition.interimResults = true;
		// 	recognition.lang = "en-US";
		// 	recognition.start();
  
		// 	recognition.onresult = function (e) {
		// 	  document.getElementById('transcript').value = e.results[0][0].transcript;
			  
			  
		// 	};
		// 	recognition.onerror = function(e) {
		// 	  recognition.stop();
		// 	}
		//   }
		// }
       
        //   function startDictation1() {
  
        //     if (window.hasOwnProperty('webkitSpeechRecognition')) {
    
        //       var recognition1 = new webkitSpeechRecognition();
    
        //       recognition1.continuous = true;
        //       recognition1.interimResults = true;
        //       recognition1.lang = "en-US";
        //       recognition1.start();
    
        //       recognition1.onresult = function (e) {
        //         document.getElementById('transcript1').value = e.results[0][0].transcript;
                
                
        //       };
        //       recognition1.onerror = function(e) {
        //         recognition1.stop();
        //       }
        //     }
        //   }
        //   function startDictation2() {
  
        //     if (window.hasOwnProperty('webkitSpeechRecognition')) {
    
        //       var recognition2 = new webkitSpeechRecognition();
    
        //       recognition2.continuous = true;
        //       recognition2.interimResults = true;
        //       recognition2.lang = "en-US";
        //       recognition2.start();
    
        //       recognition2.onresult = function (e) {
        //         document.getElementById('transcript2').value = e.results[0][0].transcript;
                
                
        //       };
        //       recognition2.onerror = function(e) {
        //         recognition2.stop();
        //       }
        //     }
        //   }
        //   function startDictation3() {
  
        //     if (window.hasOwnProperty('webkitSpeechRecognition')) {
    
        //       var recognition3 = new webkitSpeechRecognition();
    
        //       recognition3.continuous = true;
        //       recognition3.interimResults = true;
        //       recognition3.lang = "en-US";
        //       recognition3.start();
    
        //       recognition3.onresult = function (e) {
        //         document.getElementById('transcript3').value = e.results[0][0].transcript;
                
                
        //       };
        //       recognition3.onerror = function(e) {
        //         recognition3.stop();
        //       }
        //     }
        //   }