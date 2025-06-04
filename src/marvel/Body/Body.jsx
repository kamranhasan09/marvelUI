import React from "react";
import Card from "./Movies";
import Series from "./series";

import data from '../data/data.json'
const Body = () => {  
  return (
    <div className="bg-dark">
      <div className="container-fluid bg-danger text-light p-4 text-center ">
        <h1>Watch All Marvel Movies on Disney+ Hotstar</h1>
      </div>
      <div
        className="container-fluid   p-3 mb-5"
        style={{ background: "#fff" }}>
        <div className="row">

          
            {
            data.map((item) =>{
              return (
                <>
                <div className="col">
                <Card
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  date={item.date}
                  id={item.id}
                  ytlink={item.ytlink}
                />
                </div>
                </>
              );
            })
      }
         
        </div>
      </div>

      <div className="container-fluid bg-danger  text-light p-4 text-center">
        <h1>Watch All Series of Marvel on Disney+ Hotstar</h1>
      </div>

      <Series
        name="Wanda Vision"
        img="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2021/02/EtJXFJyVEAER0n3.jpeg"
        text="WandaVision premiered with its first two episodes on January 15, 2021, and ran for nine episodes, concluding on March 5. It is the first series, and beginning, of Phase Four of the MCU. The series received praise from critics for its sitcom settings and tropes, dark tonal shifts, and the performances of Olsen, Bettany, and Hahn. It was widely discussed and analyzed by fans based on various popular theories and perceived mysteries, as well as for its use of sitcom references and exploration of grief. The series received 23 Primetime Emmy Awards nominations, among other accolades. WandaVision serves as a direct set up to the film Doctor Strange in the Multiverse of Madness (2022), in which Olsen reprises her role as Maximoff."
      />

      <Series
        name="Falcon and the Winter Soldier"
        img="https://m.media-amazon.com/images/M/MV5BODNiODVmYjItM2MyMC00ZWQyLTgyMGYtNzJjMmVmZTY2OTJjXkEyXkFqcGdeQXVyNzk3NDUzNTc@._V1_.jpg"
        text="The Falcon and the Winter Soldier premiered on March 19, 2021, and ran for six episodes until April 23. It is part of Phase Four of the MCU. The series received positive reviews, with critics highlighting the actors' chemistry and the series' social commentary, but criticizing its pacing. A fourth Captain America film is in development as a continuation of the series."
      />

      <Series
        name="Loki"
        img="https://terrigen-cdn-dev.marvel.com/content/prod/1x/online_9.jpg"
        text="Loki is an American television series created by Michael Waldron for the streaming service Disney+, based on Marvel Comics featuring the character of the same name. It is the third television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, sharing continuity with the films of the franchise. The series takes place after the events of the film Avengers: Endgame (2019), in which an alternate version of Loki created a new timeline. Waldron serves as head writer, with Kate Herron directing for the first season.
      
     Loki premiered on June 9, 2021. Its first season, consisting of six episodes, concluded on July 14 and is part of Phase Four of the MCU. It received positive reviews, with praise for the performances, musical score, and visuals. A second season is in development"
      />

      <Series
        name="WHAT IF"
        img="https://cdn.marvel.com/content/2x/whatif_lob_crd_01.jpg"
        text="What If...? is an upcoming American animated anthology series created by A.C. Bradley for the streaming service Disney+, based on the Marvel Comics series of the same name. It is intended to be the fourth television series in the Marvel Cinematic Universe (MCU) produced by Marvel Studios, and the studio's first animated series. The series explores alternate timelines in the multiverse that show what would happen if major moments from the MCU films occurred differently. Bradley serves as head writer with Bryan Andrews directing."
      />
    </div>
  );
};

export default Body;
