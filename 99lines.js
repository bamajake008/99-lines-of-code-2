var friends = [
    'john', 'chris', 'jaison',
    'tylan', 'london'];

window.addEventListener('DOMContentLoaded', function () {

    let button = document.getElementById('button')
    
    
    button.addEventListener('click', function () {
        for (var i = 0; i < friends.length; i++) {
           
            var friendDiv = document.createElement('div')
             friendDiv.className = 'friend';
             var friendName = document.createElement('h3');
             friendName.innerText = friends[i];
             friendDiv.appendChild(friendName);
             var songL= document.createElement('p')
             friendName.appendChild(songL)

             
             document.body.appendChild(friendDiv);
            var word = "lines";
            var count = 99;



            var songL= document.createElement('p')
            for (var i = 0; i < friends.length; i++) {
                for (count = 99; count >= 1; count-1) {
                    let songL = document.createElement("p")
            if (count == 1) {
                word = "line";
                


                songL.innerHTML= count + " " + word + " of code in the file" + count + " " + word + " of code;";
                friendName.appendChild(songL);
               
            }
                count = count - 1;
                // count > 1 is for 2 - initial count
                if (count > 1) {
                    word = "lines";
                   
                    songL.innerHTML = count + " " + word + " "+ " of code in the file" +" " + count + " " + word +" " +  " of code" +" " + friends[i] + " " + "strikes one out, clears it all out, " +" "+ count + " " + word +" "+ " of code in the file." + " " +count + " "+ word+ " "+ "of code";
                   friendName.appendChild(songL)
                  

                }
                // count == 1 for 1 only
                else if (count == 1) {
                    word = "line";
                   
                songL.innerHTML = friends[i] + " " + "strikes one out, clears it all out, " + count + " " + word + " of code in the file.";
                    friendName.appendChild(songL)
                  

                }
                // count equal 0
                else if (count == 0) {
                    word = "lines";
                   
                    songL.innerHTML = friends[i] + " " + "strikes one out, clears it all out, no " + word + " of code in the file.";
                   friendName.appendChild(songL)
                

                }
                

            }
        }
    }
})
          
        
                
})
