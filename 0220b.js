const data = [
    {
        name:"角館",
        height: 210,
        weight: 54
    },
    {
        name:"粟生津",
        height: 174,
        weight: 35
    },
    {
        name:"蓮台寺",
        height: 183,
        weight: 49
    },
    {
        name:"諸星",
        height: 176,
        weight: 42
    },
    {
        name:"黄陽",
        height: 89,
        weight: 6
    }
];

console.log(data);
console.log("並べ替え後↓");

function lookup() {
    data.sort(function(first,second){
        return first.height - second.height;
    });
}

lookup();

//  https://keizokuma.com/js-array-object-sort/

console.log(data);