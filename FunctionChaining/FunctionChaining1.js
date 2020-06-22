const getRollNo = () => {
    setTimeout(() => {
        console.log('API getting roll no');
        let roll_no = [1, 2, 3, 4, 5];
        console.log(roll_no);

        setTimeout((rollno) => {
            const biodata = {
                name: 'Ankit',
                age: 25
            }
            console.log(`My roll no is ${rollno}. My name is ${biodata.name} and I am ${biodata.age} years old`);

            setTimeout((name) => {
                biodata.gender = 'male';
                console.log(`My roll no is ${rollno}. My name is ${biodata.name} and I am ${biodata.age} years old and I am a ${biodata.gender}`);
            }, 2000, biodata.name);

        }, 2000, roll_no[1])
    }, 2000);
}

getRollNo();