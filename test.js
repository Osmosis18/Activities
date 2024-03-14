//  let data = [

// {thetext: "I will be going to the market with taiwo", thedate: "2024-02-08", thetime: "13:31"},

// {thetext: "wash", thedate: "2024-02-08", thetime: "19:31"},

// {thetext: "wash", thedate: "2024-02-08", thetime: "19:31"},

// {thetext: "wash", thedate: "2024-02-08", thetime: "19:31"},

// {thetext: "wash", thedate: "2024-02-08", thetime: "19:31"},

// {thetext: "wash", thedate: "2024-02-08", thetime: "19:31"}

// ]
// let result = data.find(function(each){return each.thetext == "wash"})
// console.log(result);
// let result = data.filter(function(each){return each.thetext == "wash"})
// console.log(result);
// let result = data.filter(function(each){return each.thetext != "wash"})
// console.log(result);

// for(each of data){
//     // console.log(each.thetext);
//     let p = document.createElement("p")
//     p.innerText = each.thetext
//     document.getElementById("tasks").appendChild(p)
// }

let today = new Date()

// console.log(today.getFullYear());
// console.log(today.getMonth());
// console.log(today.getDay());
// console.log(today.toLocaleDateString());
// console.log(today.toLocaleTimeString());
document.getElementById("date").innerText = new Date().getFullYear()