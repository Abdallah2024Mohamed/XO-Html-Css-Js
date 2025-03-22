// let title = document.querySelector('.title');
// let turn = 'X';
// let squares = [];
// function end(num1,num2,num3){

//     title.innerHTML = `${squares[num1]} winner`;
//     document.getElementById('item'+num1).style.background = '#000';
//     document.getElementById('item'+num2).style.background = '#000';
//     document.getElementById('item'+num3).style.background = '#000';

//     setInterval(function(){title.innerHTML += '.'},1000);
//     setTimeout(function(){location.reload()},4000);
// }
// function winnner()
// {
//     for(let i = 1; i<10;i++)
//     {
//        squares[i] = document.getElementById('item' + i).innerHTML;
//     }
//     if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '')
//     {
//         end(1,2,3); 
//     }
//     else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '')
//     {
//         end(4,5,6)
//     }
//     else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '')
//     {
//         end(7,8,9)
//     }



//     else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] != '')
//     {
//         end(1,4,7)
//     }
//     else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '')
//     {
//         end(2,5,8)
//     }
//     else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '')
//     {
//         end(3,6,9)
//     }


//     else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '')
//     {
//         end(1,5,9)
//     }
//     else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '')
//     {
//         end(3,5,7)
//     }
// } 
// function game(id)
// {
//     let element = document.getElementById(id);
//     if(turn === 'x' && element.innerHTML == '')
//     {
//         element.innerHTML = 'X';
//         turn = 'o';
//         title.innerHTML = 'O';
//     }
//     else if(turn === 'o' && element.innerHTML == '')
//     {
//         element.innerHTML = 'O';
//         turn = 'x';
//         title.innerHTML = 'X';
//     }
//     winnner();
// }

let title = document.querySelector('.title');
let turn = 'x';
let squares = [];
function Gameover()
{
    for(let i =1; i<10;i++)
    {
        squares[i] = document.getElementById('item' + i).innerHTML;
    }
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] != '')
    {
        title.innerHTML =`${squares[1]} Gameover`;
        document.getElementById('item'+1).style.background = '#000';
        document.getElementById('item'+2).style.background = '#000';
        document.getElementById('item'+3).style.background = '#000';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[5] != '')
    {
        title.innerHTML =`${squares[2]} Gameover`;
        document.getElementById('item'+4).style.background = '#000';
        document.getElementById('item'+5).style.background = '#000';
        document.getElementById('item'+6).style.background = '#000';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)      
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[8] != '')
    {
        title.innerHTML =`${squares[3]} Gameover`;
        document.getElementById('item'+7).style.background = '#000';
        document.getElementById('item'+8).style.background = '#000';
        document.getElementById('item'+9).style.background = '#000';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
    }


    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[4] != '')
    {
        title.innerHTML =`${squares[4]} Gameover`;
        document.getElementById('item'+1).style.background = '#000';
        document.getElementById('item'+4).style.background = '#000';
        document.getElementById('item'+7).style.background = '#000';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] != '')
    {
        title.innerHTML =`${squares[5]} Gameover`;
        document.getElementById('item'+2).style.background = '#000';
        document.getElementById('item'+5).style.background = '#000';
        document.getElementById('item'+8).style.background = '#000';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[6] != '')
    {
        title.innerHTML =`${squares[6]} Gameover`;
        document.getElementById('item'+3).style.background = '#000';
        document.getElementById('item'+6).style.background = '#000';
        document.getElementById('item'+9).style.background = '#000';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
    }


    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[5] != '')
    {
        title.innerHTML =`${squares[7]} Gameover`;
        document.getElementById('item'+1).style.background = '#000';
        document.getElementById('item'+5).style.background = '#000';
        document.getElementById('item'+9).style.background = '#000';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[5] != '')
    {
        title.innerHTML =`${squares[8]} Gameover`;
        document.getElementById('item'+3).style.background = '#000';
        document.getElementById('item'+5).style.background = '#000';
        document.getElementById('item'+7).style.background = '#000';

        setInterval(function(){title.innerHTML += '.'},1000);
        setTimeout(function(){location.reload()},4000)
    }
}
function game(id)
{
    let element = document.getElementById(id);
    if(turn === 'x' && element.innerHTML == '')
    {
        element.innerHTML = 'X';
        turn = 'o';
        title.innerHTML = 'O';
    }
    else if(turn === 'o' && element.innerHTML == ''){
        element.innerHTML = 'O';
        turn = 'x';
        title.innerHTML = 'X'
    }
    Gameover();
}