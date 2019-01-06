<h1>brain-games</h1>

[![Maintainability](https://api.codeclimate.com/v1/badges/83a1b82d7f43d2364499/maintainability)](https://codeclimate.com/github/TyrionFront/Brain-games/maintainability)
[![Build Status](https://travis-ci.org/TyrionFront/Brain-games.svg?branch=master)](https://travis-ci.org/TyrionFront/Brain-games)

(First start in package making & publishing)

**Project is made during studying the web-dev on [Hexlet](https://ru.hexlet.io/?ref=50614).**

It includes **6 simple math games** to be launched as console applications.
To see all possible games to play You should just type _**brain-games**_ in your command-line. You'll see an invitation, name-input line and a games list with their ordinal numbers:  

```Welcome to the Brain Games!```
```
What's Ur name, dear guest ?: zorro
Hello, zorro !


[1] makeBalance
[2] simpleCalculator
[3] isEven
[4] GCDgame
[5] primeNumber
[6] progression
[0] CANCEL

Choose a game number from the list above [1...6 / 0]:
```


All of them have next **common logic**:

**1)** after launching a game a description of this game appears(example):
  
     `Is this number prime?`
     
**2)** then the game will ask You to input your name:

     `What's Ur name, dear guest ?: me
     Hello, me !`
  
**3)** after that You have first task displayed with a random number(s) (example):

     `Question: 15`
     
   If your answer is correct
   
     `Your answer: no`,
     
   You get the approval message
     
     `Correct!`
     
   and go to the next level ( 3  in total ).  
   If it's not, You have folloving message:
   
     `'yes' is wrong answer ;(. Correct answer was no.
      Let's try again, me!`
      
**4)** notice that your answer must be "yes"/"no" or a sertain number - it depends from the description of a game. Also if 
   you input any other string it will be interpreted as "no".

<h2>Games start & description with output samples</h2>

Each game launches by its name and have its own "question":

* **primeNumber**

  You need to define whether the displayed number is [prime](https://en.wikipedia.org/wiki/Prime_number) or not:  
  
  ```
  Question: 15
  Your answer: no
  Correct!
  Question: 79
  Your answer: yes
  ```


* **progression**

  In this game You need to calculate missed [arithmetic progression](https://en.wikipedia.org/wiki/Arithmetic_progression) value: 
  
  ```
  Question: 7,79,..,223,295,367,439,511,583,655
  Your answer: 151
  Correct!
  Question: 65,160,..,350,445,540,635,730,825,920
  Your answer: 
  ```
  
  
* **makeBalance**

  You have a number which you need to "balance": balanced number is a number where numerals differ from each other by 1 or
  are equal: 4455, 2233, 56, 777 etc. So if You got, for example, **4181** your answer should be **3344** and so on:
  
  ```
  Question: 1103
  Your answer: 1112
  Correct!
  Question: 9024
  ```

* **GCDgame**

  In this game You will get two numbers and You'll have to calculate their [GCD](https://en.wikipedia.org/wiki/Greatest_common_divisor):
  
  ```
  Question: 8 24
  Your answer: 8
  Correct!
  Question: 8 55
  Your answer: 
  ```

* **simpleCalculator**

  Adding, subtraction or multiplication of two values:
  
  ```
  Question: 71 + 56
  Your answer: 127
  Correct!
  Question: 22 - 70
  Your answer:
  ```

* **isEven**

  Here You need to answer whether a given number is even or not:
  
  ```
  Question: 68
  Your answer: yes
  Correct!
  Question: 26
  Your answer:
  ```
<h2>Prerequisites</h2>

To be able to install & run **brain-games** the [npm](https://www.npmjs.com/get-npm) must be installed on your computer.

<h2>Installation</h2>

```$ npm install -g numonebg```

