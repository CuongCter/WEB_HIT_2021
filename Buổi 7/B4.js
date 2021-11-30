// Bài 4
//- Lấy ra chính xác tất cả gmail trong đoạn text sau
// Yêu cầu dùng regex

const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";

// - Lấy ra tất cả sdt trong đoạn text sau
// - Yêu cầu dùng regex
const textPhone = "dfkdsklfjlksdjfklsd0979150921dfjhdsjfhds0979120734";

function regexEmail(textEmail) {
    console.log(textEmail.match(/[\w]{9}@[\w]+.com/g));
}

function regexPhone(textPhone) {
    console.log(textPhone.match(/[0-9]{10}/g));
}
regexEmail(textEmail);
regexPhone(textPhone);