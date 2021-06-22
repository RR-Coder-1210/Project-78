


var images = [
"j.jpeg", "ejjde.jpeg", "jsjjssjqjsqw.jpeg", "kskks.jpeg"] ;

var names = [
"Mom/Seema Ranjan", "Dad/Rakesh Ranjan", "Me/Rudransh Ranjan", "Younger Brother/Agastya Ranjan"];

var i = 0;

function nm()
{
     
 i++;
 var Name_Of_Family_Memebers_In_Array = 4
 if (i > Name_Of_Family_Memebers_In_Array)

 {
    i = 0;
 }

 document.getElementById("hji").src = images[i];
  i++;

  document.getElementById("KIJK").innerHTML = names[i];


}