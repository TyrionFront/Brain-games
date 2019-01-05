#!/usr/bin/env node
import gameStart from '..';

console.log('Welcome to the Brain Games!');
const [game, gamer] = gameStart();

game(gamer);
