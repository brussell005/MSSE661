var object = {
    name: 'Ben',
    age: 8
};

class FamilyMember {
    name;
    age;
    
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

console.log(new FamilyMember('Ben', 8));