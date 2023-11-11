document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); 

    const names = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const guitar = document.getElementById("guitar").value ; 
    const quantity = parseInt(document.getElementById("quantity").value) ; 

    if (names === "" && email === "") {
        msg=  ` <h4>Hello ${person}, your grade is 4.00,TOPPer </h4>`; 
        return;
    }

    alert(`Hello (${names}) .
    We got your order of (${quantity}) pieces of (${guitar}) guitar . 
    After checking  we will get back to you in your given email (${email}) `);
});
function show() {

    var person = document.getElementById("nameInput").value ;

    var courses = document.getElementById("courseInput").value; 
    
    
    document.getElementById("mainContent").innerText = "Hello " +  person  + " nice to know that you have taken " + courses + " courses"; 
    


}





