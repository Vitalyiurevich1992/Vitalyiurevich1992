var image1 = document.getElementById("image1");
var image2 = document.getElementById("image2");
var text1 = document.getElementById("text1");
var text2 = document.getElementById("text2");
var city1 = document.getElementById("city1");
var city2 = document.getElementById("city2");
var name1 = document.getElementById("name1");
var name2 = document.getElementById("name2");

var images1 = ["woman.png", "6.jpg", "7.jpg"];
var images2 = ["man.png", "7.jpg", "6.jpg"];
var texts1 = ["I love my job but I love my family. Being away from family is very hard. It is not something I want my family and I to endure for the next 20 years. But it is something I feel obligated to do for a short period of my life. It is a debt I owe to those before and after me.",
    "Vadim Petrovich likes mornings, because he can see his family, and he can have a talk with his wife and children.",
    "If it is cold, they wear a coat. A pair of gloves and a hat are necessary. They also wear stockings and shoes."];
var texts2 = ["A great to get your life started and prepare you for any challenge and any job anywhere in the world! Overall great experience, I would definitely recommend anyone to serve at least 4 years!",
    "Rose is a very good pupil. She always works hard. She reads a lot of books. She always does all her exercises. She always helps her mother at home.",
    "Chefirovka is a large village not far from Tula. The people who live in Chefirovka grow vegetables and various kinds of fruit."];
var citys1 = ["Los Angeles", "New Yourk", "Norwalk"];
var citys2 = ["California", "Washington", "Denver"];
var names1 = ["Hillary Flex", "John Carter", "Frank Sinatra"];
var names2 = ["Jhon Button", "Elvis Presley", "Bill Clinton"];

var i = 1;

function giveliveback() {
    if (i >= 0) {
        image1.src = images1[i];
        image2.src = images2[i];
        text1.innerText = texts1[i];
        text2.innerText = texts2[i];
        city1.innerText = citys1[i];
        city2.innerText = citys2[i];
        name1.innerText = names1[i];
        name2.innerText = names2[i];
        i--;
    }
    else {
        i = images1.length - 1;
        image1.src = images1[i];
        image2.src = images2[i];
        text1.innerText = texts1[i];
        text2.innerText = texts2[i];
        city1.innerText = citys1[i];
        city2.innerText = citys2[i];
        name1.innerText = names1[i];
        name2.innerText = names2[i];
        i--;
    }

}

function givelivenext() {
    if (i < images1.length) {
        image1.src = images1[i];
        image2.src = images2[i];
        text1.innerText = texts1[i];
        text2.innerText = texts2[i];
        city1.innerText = citys1[i];
        city2.innerText = citys2[i];
        name1.innerText = names1[i];
        name2.innerText = names2[i];
        i++;
    }
    else {
        i = 0;
        image1.src = images1[i];
        image2.src = images2[i];
        text1.innerText = texts1[i];
        text2.innerText = texts2[i];
        city1.innerText = citys1[i];
        city2.innerText = citys2[i];
        name1.innerText = names1[i];
        name2.innerText = names2[i];
        i++;
    }
}