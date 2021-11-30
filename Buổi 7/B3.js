// Bài 3: Chuẩn hoá các chuỗi sau
// - Không có khoảng trắng thừa ở đầu và cuối
// - Giữa các từ chỉ có 1 khoảng trắng
// - Chữ đầu của các từ viết hoa
// - Không có bất kì kí tự nào là số

const case1 = "    hOang Bui   ";
// -> Hoang Bui

const case2 = " hOANG      BUI   hOang     ";

const case3 = "23traN    dUOng23     ";

function Standar(strA) {
    //Xoa khoang trang 2 dau va chuyen het ve chu thuong
    strA = strA.trim().toLowerCase();
    strA = strA.replace(/\s+/g, ' ');
    //xoa ki tu so trong chuoi
    for (let element of strA) {
        if (element >= '0' && element <= '9') {
            strA = strA.replace(element, '');
        }
    }
    //Viet hoa chu cai dau va cach nhau 1 dau cach
    let strB = strA.split(" ");
    let strC = "";
    strB.forEach(element => {
        strC += element.substring(0, 1).toUpperCase() + element.substring(1) + " ";
    });
    return strC;
}
console.log(Standar(case1));
console.log(Standar(case2));
console.log(Standar(case3));