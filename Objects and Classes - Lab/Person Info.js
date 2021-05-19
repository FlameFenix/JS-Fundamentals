function personInfo(input) {
    const obj = {};
    obj.firstName = input[0];
    obj.lastName = input[1];
    obj.age = input[2];
    return obj;
}
personInfo("Peter", 
"Pan",
"20" );