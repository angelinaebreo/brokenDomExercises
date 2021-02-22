
const disEmvowel = () => {
    const el = document.querySelector("#name_to_disemvowel");
    const p = document.getElementById("disemvowel-string");
    const str = el.value;
    let output = "";
    const vowels = "aeiouAEIOU"; 
    for(let i = 0; i < str.length; i++) {
        if(!vowels.includes(str[i])) {
            output += str[i];
        } else {
            output += ""
        }
    }
    p.textContent = output;
   console.log(output)
}

const isPalindrome = () => {
    const str = document.querySelector("#is-palindrome-input").value;
    const p = document.querySelector("#is-palindrome-p");
    let result = "true"; 
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== str[str.length - i - 1]) {
            result = "false"
        }
    }
  
    p.textContent = result;
}
// const sum = (arr) => {
//     let sum = 0; 
//     for(let i = 0; i <= arr.length; i++) {
//         const num = arr[i];
//         sum += num
//     }
//     return sum; 
// }
// const average = (arr) => {
//     // arr = [1, 2, 3];
//     let sumOfNums = sums(arr) 
//     return sumOfNums / arr.length; 
// }

// const onlyOdds = arr => {
//      arr.filter(num => num % 3 === 1)
// }

const favoriteNumbers = () => {
    let list = document.querySelectorAll("ul>li")


    let arr = [];
    list.forEach((listItem) => {
        arr.push(Number(listItem.textContent))
    })


  
    const sum = (arr) => {
        let sum = 0; 
        for(let i = 0; i < arr.length; i++) {
            const num = arr[i];
            sum += num
        }
        return sum; 
    }
    
    const sumOfNums = sum(arr);
    const length = arr.length;
   

    const average = (arr) => {
        return sumOfNums / length; 
    }
    
    const averageOfNums = average();
 

   
    const onlyOdds = arr => {
      return arr.filter(num => num % 2 === 1)
    
        
   }

    const onlyOddsOfNums = onlyOdds(arr);



    const sumOfFav = document.querySelector("#sum-of-favorite-nums");
    sumOfFav.textContent += ` ${sumOfNums}`; 

    const aveOfFav = document.querySelector("#average-of-favorite-nums");
    aveOfFav.textContent += ` ${averageOfNums}`; 
    

    const oddList = document.querySelector("#list-of-odd-favorite-nums");
    
    
    onlyOddsOfNums.forEach((odd) => {
        const li = document.createElement("li");
      li.textContent = odd;
      oddList.appendChild(li);
    });
 }

favoriteNumbers();

const incrementCount = () => {
    let clickCount = document.querySelector("#click-count")
    let counter = Number(clickCount.textContent)

    counter += 1;
    clickCount.textContent = counter


}

const reset = () => {
    const clickCount = document.querySelector("#click-count");
    clickCount.textContent = 0;
}

const addItem = () => {
    const shoppingList = document.querySelector(".shopping-list");
    const input = document.querySelector("#add-item").value
    const item = input;
    const listItem = document.createElement("li");
    listItem.textContent = item;
    shoppingList.appendChild(listItem)
    input.value = "Empty";
}

const killButton = () => {
    const button = document.querySelector("#kill-button");
    button.parentNode.removeChild(button)

    const header = document.querySelector("#kill-button-header");
    header.innerText = "Yay you were victorious!"
    header.style.color = "green";
}