"use strict"


/** 
function start (){
    number0fFilms = prompt("Сколько фильмов?");
    while ( number0fFilms == "" || number0fFilms == null || isNaN(number0fFilms)){
       number0fFilms = prompt("Сколько фильмов?"); 
    }
    
}
start();
*/
let personalMovieDB = {
    
    count : "",
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start : function (){
        let number0fFilms = prompt("Сколько фильмов?");
        while ( number0fFilms == "" || number0fFilms == null || isNaN(number0fFilms)){
           number0fFilms = prompt("Сколько фильмов?"); 
        };
        personalMovieDB.count = number0fFilms;
        
    },
    infoFilms : function () {
        for (let i = 0; i < 2; i++){
        let nameFilms = prompt("Один из последних просмотренных фильмов?");
        let raitingFilms = prompt('На сколько оцените его?');
        if(nameFilms !=null &&  raitingFilms !=null && nameFilms != '' &&  raitingFilms !='' && nameFilms.length < 50){
            personalMovieDB.movies[nameFilms] =  raitingFilms;
        } else{
            i--;
        }
    };
    },
    raitingUse : function (){
        if(personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов")
        }else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель")
        }else if(personalMovieDB.count > 30){
            console.log("Вы киноман")
        }else{
            console.log("Произошла ошибка")
        }
    },
    writeYourGenres : function () {
        for (let i = 1; i < 4; i++){
            let likeGenres = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres.push(likeGenres);
        };
    },
    showMyDB : function (){
        if(personalMovieDB.privat == false){
            console.log(personalMovieDB);
        } else{
            console.log("Error");
        }
        
    },
};
personalMovieDB.start();
personalMovieDB.infoFilms();
personalMovieDB.raitingUse();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
/*
function infoFilms () {
    for (let i = 0; i < 2; i++){
    let nameFilms = prompt("Один из последних просмотренных фильмов?");
    let raitingFilms = prompt('На сколько оцените его?');
    if(nameFilms !=null &&  raitingFilms !=null && nameFilms != '' &&  raitingFilms !='' && nameFilms.length < 50){
        personalMovieDB.movies[nameFilms] =  raitingFilms;
    } else{
        i--;
    }
};
}
infoFilms ();

function raitingUse(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов")
    }else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель")
    }else if(personalMovieDB.count > 30){
        console.log("Вы киноман")
    }else{
        console.log("Произошла ошибка")
    }
}
raitingUse();
function writeYourGenres(){
    for (let i = 1; i < 4; i++){
        let likeGenres = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres.push(likeGenres);
    }
}
writeYourGenres();
function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    } else{
        console.log("Error");
    }
    
}
showMyDB();
*/