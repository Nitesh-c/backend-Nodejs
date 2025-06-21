// OOPs - classes and objects

// objects have property and its values and we also create methods (methods are function defined as property of any object)


const student = {
    name:"john",
    marks: 88,
    getFullData(){
        return console.log(`${this.marks}, ${this.name}`);
    }
}
student.getFullData()
// this is methods

