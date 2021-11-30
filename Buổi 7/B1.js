//Case 1
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];
demlap(nums);

//Case 2
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];
demlap(nums1);

//Case 3
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];
demlap(nums2);

function demlap(num) {
    num.sort();
    let count = 1;
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== num[i + 1]) {
            console.log(`So ${num[i]} xuat hien ${count} lan`);
            count = 0;
        }
        count++;
    }
    console.log('\n');
}