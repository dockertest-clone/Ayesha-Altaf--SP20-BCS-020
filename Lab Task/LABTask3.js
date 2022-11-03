
// Task 1
// Make a Sandwich Calculator

function sandwich_calculator(bread, cheese)
{ 
    var sandwiches = 0; 
        while (true) { 
            if (bread>=2)
              { 
                bread-= 2; 
                if (cheese >= 1) 
                  { 
                    cheese -= 1 
                    sandwiches += 1; 
                  }
                  else { 
                    console.log(sandwiches +" Sandwiches Calculator can be made!"); 
                    break; 
                } 
            } 
            else 
             { 
                console.log(sandwiches + " Sandwiches Calculator can be made!"); 
                break;
            } 
        } 
    } 
    sandwich_calculator(68, 18);


    // Task 2
    var student = { 
         name: "Bob", 
         sclass: "X", 
         rollno: 10 
        };
    console.log("Name:", student.name, "Roll No.: ", student.rollno, "Class: ", student.sclass); 

          // Properties of object in JavaScript
          
          let Ky = Object.keys(student);
          let Val = Object.values(student);
          console.log(Val);
          console.log(Ky);
       
    //  Task3 

     var student = { 
           name: "Bob", 
           sclass: "X", 
           rollno: 10 
            }; 
            console.log(student); 
            delete student.rollno; 
            console.log(student);

      function deleteProperty(obj, key) {
                console.log(student);
                delete obj[key];
                return obj;
            }
     let deleteRollNo = deleteProperty(student, "rollno");
            console.log(deleteRollNo);