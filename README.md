<h1>brain-games</h1>

<a href="https://codeclimate.com/github/TyrionFront/project-lvl1-s304/maintainability"><img src="https://api.codeclimate.com/v1/badges/48c4404a15984e14868f/maintainability" /></a>
<a href="https://codeclimate.com/github/TyrionFront/project-lvl1-s304/test_coverage"><img src="https://api.codeclimate.com/v1/badges/48c4404a15984e14868f/test_coverage" /></a>
[![Build Status](https://travis-ci.org/TyrionFront/project-lvl1-s304.svg?branch=master)](https://travis-ci.org/TyrionFront/project-lvl1-s304)

(First start in package making & publishing)

**Project is made during studying the web-dev on [Hexlet](https://ru.hexlet.io/).**

It includes **6 simple math games** to be launched as console applications.
All of them have next **common logic**:

**1)** after launching a game You have an invitation displayed:

     `Welcome to the Brain Games!`
  
   with a following description of a sertain game (example):
  
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

* **brain-prime**

  You need to define whether the displayed number is [prime](https://en.wikipedia.org/wiki/Prime_number) or not:  
  
  ``` $ brain-prime```
  ```
  Question: 15
  Your answer: no
  Correct!
  Question: 79
  Your answer: yes
  ```


* **brain-progression**

  In this game You need to calculate missed [arithmetic progression](https://en.wikipedia.org/wiki/Arithmetic_progression) value: 
  
  ```$ brain-progression```
  ```
  Question: 7,79,..,223,295,367,439,511,583,655
  Your answer: 151
  Correct!
  Question: 65,160,..,350,445,540,635,730,825,920
  Your answer: 
  ```
  
  
* **brain-balance**

  You have a number which you need to "balance": balanced number is a number where numerals differ from each other by 1 or
  are equal: 4455, 2233, 56, 777 etc. So if You got, for example, **4181** your answer should be **3344** and so on:
  
  ```$ brain-balance```
  
  ```
  Question: 1103
  Your answer: 1112
  Correct!
  Question: 9024
  ```

* **brain-gcd**

  In this game You will get two numbers and You'll have to calculate their [GCD](https://en.wikipedia.org/wiki/Greatest_common_divisor):
  
  ```$ brain-gcd```
  ```
  Question: 8 24
  Your answer: 8
  Correct!
  Question: 8 55
  Your answer: 
  ```

* **brain-calc**

  Adding, subtraction or multiplication of two values:
  
  ```$ brain-calc```
  ```
  Question: 71 + 56
  Your answer: 127
  Correct!
  Question: 22 - 70
  Your answer:
  ```

* **brain-even**

  Here You need to answer whether a given number is even or not:
  
  ```$ brain-even```
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

