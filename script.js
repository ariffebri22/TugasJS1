//Soal 1
var biodata = {
    name: "Arif Febriansyah",
    age: 23,
    hobbies: ["ngoding", "joging", "gaming"],
    isMarried: false,
    schoolList: [
        {
            name: "SDN Ciherang Kencana",
            yearIn: 2006,
            yearOut: 2012,
            major: null,
        },
        {
            name: "SMPN 1 Karangtengah",
            yearIn: 2012,
            yearOut: 2015,
            major: null,
        },
        {
            name: "SMKN 1 Cianjur",
            yearIn: 2015,
            yearOut: 2018,
            major: "Software Engineering",
        },
    ],
    skills: [
        {
            skillName: "Design",
            level: "advanced",
        },
        {
            skillName: "Protoyping",
            level: "advanced",
        },
    ],
    interestInCoding: true,
};

//Soal 2
const averageGrade = (mtk, bInd, bIng, ipa) => {
    if (!mtk || !bInd || !bIng || !ipa) {
        return console.log("Semua nilai harus diisi!");
    }

    if (typeof mtk !== "number" || typeof bInd !== "number" || typeof bIng !== "number" || typeof ipa !== "number") {
        console.log("Masukan nilai dengan benar!");
    } else {
        const average = (mtk + bInd + bIng + ipa) / 4;
        let grade = "";

        if (average >= 90) {
            grade = "A";
        } else if (average >= 80) {
            grade = "B";
        } else if (average >= 70) {
            grade = "C";
        } else if (average >= 60) {
            grade = "D";
        } else {
            grade = "E";
        }

        console.log(`Rata-rata = ${average}`);
        console.log(`Grade = ${grade}`);

        return average;
    }
};

const matematika = 89;
const bahasaIndonesia = 82;
const bahasaInggris = 76;
const ipa = 98;

averageGrade(matematika, bahasaIndonesia, bahasaInggris, ipa);

//Soal 3
const invertedTriangle = (num) => {
    if (typeof num !== "number" || isNaN(num)) {
        return "Parameter harus angka!";
    } else {
        let triangle = "";

        for (let i = num; i >= 1; i--) {
            for (let j = 1; j <= i; j++) {
                triangle += j + " ";
            }
            triangle += "\n";
        }
        return triangle;
    }
};

console.log(invertedTriangle(6));

//Soal 4
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};

//A
let newData = {
    ...data,
    name: "Arif Febriansyah",
    email: "muhammadariffebriansyah@gmail.com",
    hobby: "Memancing",
};

// console.log(newData);

//B
let {
    address: { street, city },
} = data;

// console.log(`street : ${street}`);
// console.log(`city : ${city}`);
