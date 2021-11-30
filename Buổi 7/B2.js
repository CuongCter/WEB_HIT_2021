const users = [
    { id: 1, name: "Hoang Bui", age: 19, gender: "male", money: 1000 },
    { id: 2, name: "Tran Duong", age: 14, gender: "female", money: 2000 },
    { id: 3, name: "Dinh Huan", age: 25, gender: "female", money: 1050 },
    { id: 4, name: "Minh Hoang", age: 15, gender: "male", money: 500 },
];
//1
console.log("----------MENU--------");
console.log("1. SHOW LIST");
console.log("2. ADD USER");
console.log("3. DELETE OF ID");
console.log("4. UPDATE USER OF ID");
console.log("---PLEASE CHOOSE---");

function SHOW() {
    console.log("LIST: ");
    console.log(users);
}

function ADD(newId, newName, newAge, newGender, newMoney) {
    users.push({ id: newId, name: newName, age: newAge, gender: newGender, money: newMoney });
}

function DELETE(id) {
    for (let i = 0; i < users.length; i++) {
        if (id === users[i].id) {
            users.splice(i, 1);
        }
    }
}

function UPDATE(id) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i].name = "Cuong";
            users[i].age = 19;
            users[i].gender = "male";
            users[i].money = 8000;
        }
    }
}
//
console.log("CHOOSE 1: ");
SHOW();
console.log("CHOOSE 2: ");
ADD(5, "HUNG", 19, "male", 7000);
SHOW();
console.log("CHOOSE 3: ");
DELETE(4);
SHOW();
console.log("CHOOSE 4: ");
UPDATE(1);
SHOW();
//2
//add 2 nguoi
ADD(6, "THAO", 19, "female", 17000);
ADD(7, "VAN", 19, "female", 9000);
//thong ke
function countGender() {
    let count = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].gender === "male") {
            count++;
        }
    }
    console.log(`Tong nguoi co gioi tinh nam la ${count}`);
}
countGender();

function countAge() {
    let count = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].age > 15) {
            count++;
        }
    }
    console.log(`Tong nguoi co tuoi lon hon 15 la ${count}`);
}
countAge();

function sumMoneybyId() {
    let sum = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].id % 2 == 0) {
            sum += users[i].money;
        }
    }
    console.log(`Tong tien nguoi dung co Id chan la : ${sum}`);
}
sumMoneybyId();

function maxminMoney() {
    let moneyMax = moneyMin = users[0].money;
    let userMax = userMin = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].money > moneyMax) {
            moneyMax = users[i].money;
            userMax = i;
        }
        if (users[i].money < moneyMin) {
            moneyMin = users[i].money;
            userMin = i;
        }
    }
    console.log(`Nguoi giau nhat`);
    console.log(users[userMax]);
    console.log(`Nguoi ngheo nhat`);
    console.log(users[userMin]);
}
maxminMoney(users);

function changeGender() {
    for (let i = 0; i < users.length; i++) {
        if (users[i].gender === "male") {
            users[i].gender = "female";
        }
    }
}
changeGender();
console.log("Thong tin sau khi chuyen doi gioi tinh");
SHOW();