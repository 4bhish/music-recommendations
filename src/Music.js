import React from "react";
import { useState } from "react";
import './App.css';

const myMusic= {
    Rock:[
      {
        artist:"Band: Pink Floyd",
        album:"Album: The Wall"
      },
      {
        artist:"Band: The Beatles",
        album:"Album: Abbey Road"
      },

      {
        ratings:"⭐4/5"
      }
    ],

    Hiphop:[
      {
        artist:"Artist: Eminem",
        album:"Album: The Eminem Show"
      },
      {
        artist:"Artist: Jay-Z",
        album:"Album: The Blueprint"
      },
      {
        ratings:"⭐3.5/5"
      }
    ],

    Pop:[
      {
        artist:"Artist: Michael Jackson",
        album:"Album: Thriller"
      },
      {
        artist:"Artist: Mariah Carey",
        album:"Album: Daydream"
      },
      {
        ratings:"⭐4.5/5"
      }
    ]
  };

  const newMusic = Object.keys(myMusic);

export default function Music()
{
    const [ genre , setGenre ] = useState("Rock");

    function clickHandler(myGenre)
  {
    const genre = myGenre;
    setGenre(genre)
  }
    return(
        <div className="container">
        <h1 className="my--music">🎶My Music</h1>
        <p className="desc">Welcome to my music recommendations, click genre to know more</p>
        <div className="list--buttons">
        {
          newMusic.map((myGenre) => {
          return <button className="buttons--genre" onClick={() => clickHandler(myGenre)}>{myGenre}</button>;
        }
        )
        }
        </div>
        <div>
            
            {
                myMusic[genre].map((items) => {
                    return <ul className="list--items" >
                        <li >{items.artist}</li>
                        <li  >{items.album}</li>
                        <div  >{items.ratings}</div>
                    </ul>
                })
            }

        </div>
      </div>
    )
}