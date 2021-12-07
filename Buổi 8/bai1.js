// Câu 1: Cho một chuỗi str, tìm ký tự không lặp lại đầu tiên trong chuỗi đó và trả về chỉ số của nó.Nếu nó không tồn tại, trả về -1.
// case1
// Input: str = "tranduong"
// Output: 0
// case2
// Input: str = "hitclubhiuhiu"
// Output: 2
// case3
// Input: str = "aabb"
// Output: -1
str1 = "tranduong"
str2 = "hitclubhiuhiu"
str3 = "aabb"
const count = (str) => {
        let map = {};
        for (const char of str)
            map[char] = map.hasOwnProperty(char) ? ++map[char] : 1;
        return map;
    }
    //xem so luong cac lan lap lai trong chuoi 
console.log(count(str1));
console.log(count(str2));
console.log(count(str3));
// tra ve chi so 
const find = (obj) => {
        const array = Object.values(obj);
        return array.indexOf(1, 0);
    }
    //xac dinh vi tri ky tu ko lap lai dau tien
console.log(find(count(str1)));
console.log(find(count(str2)));
console.log(find(count(str3)));