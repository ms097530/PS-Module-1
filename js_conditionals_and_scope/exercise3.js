console.log('-------- EXERCISE 3 --------')

let grade = 95

const preface = 'Your grade is:'
if (grade >= 55)
{
    if (grade >= 90)
        console.log(preface, 'A')
    else if (grade >= 80)
        console.log(preface, 'B')
    else if (grade >= 70)
        console.log(preface, 'C')
    else
        console.log(preface, 'D')
}
else
{
    console.log(preface, 'F')
}