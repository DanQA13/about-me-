'use strict'

        alert("Welcome and Hello my name is Daniel Cornier! I hope you learn something about me while you visit my page");
         
        let username = prompt("What is your name?");
        //console.log(username);
        alert('Great to meet you' + ' ' +  username + '. ' + "Before you click ok in this window read my bio because im going to quiz you on some info about me. ");


        
        let answer1 = prompt("Judging on my bio do you think a dog would be my favorite animal?");
        //console.log(answer1);
        if(answer1.toLowerCase() == 'yes' || answer1 == 'y'){
        alert("You are right" + " " + username + " ,"+ "I love dogs!" );}
        else if(answer1.toLowerCase() === 'no' || answer1 === 'n'){
        alert('Sorry wrong answer, try and read a little closer next time dogs are my favorite')
     }
     
        let answer2 = prompt("Do you love dogs?");
        //console.log(answer2);
        if(answer2.toLowerCase() === 'yes' || answer2 === 'y'){
        alert('Then you have come to the right place! We can definitely be friends.');
     }  else if(answer2.toLowerCase() === 'no' || answer2 === 'n'){
        alert('ugh idk, I may have to rethink this friendship');}
        
      
        let answer3 = prompt("Since this relationship may or not be going places, lets see if we can take it to the next level. Was I in the Army?");
        //console.log(answer3);
        if(answer3.toLowerCase() === 'no' || answer3 === 'n'){
        alert("You truly are listening when I speak" + " " + username + " " + "We are going places")
     }  else if(answer3.toLowerCase() === 'yes' || answer3 === 'y'){
        alert('WRONG MARINE CORPS!!! Ill give you a pass on this one. Some people generalize the branches of the military with the Army');}
         

        let answer4 = prompt( username + " " +"As I take a knee Will you ma...... too soon?");
        //console.log(answer4);
        if(answer4.toLowerCase() === 'yes' || answer4 === 'y'){
        alert('I was just gonna say. Will you make sure your shoes are tied before you trip, one is undone');
     }  else if(answer4.toLowerCase() === 'no' || answer4 === 'n'){
        alert('Make sure you shoes are tied, you will trip and hurt yourself');}
        



       



     