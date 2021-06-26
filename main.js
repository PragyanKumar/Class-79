Student_slave_array=[];
function submit(){
    var Name1=document.getElementById("Student1").value;
    var Name2=document.getElementById("Student2").value;
    var Name3=document.getElementById("Student3").value;
    var Name4=document.getElementById("Student4").value;

    Student_slave_array.push(Name1)
    Student_slave_array.push(Name2)
    Student_slave_array.push(Name3)
    Student_slave_array.push(Name4)

    console.log(Student_slave_array)

    document.getElementById("display_name").innerHTML= Student_slave_array
    document.getElementById("SendIt").style.display="none"
    document.getElementById("sort_button").style.display="inline-block"
}
function sorting(){
Student_slave_array.sort()
document.getElementById("display_name").innerHTML=Student_slave_array
console.log(Student_slave_array)
}
