import React from 'react';


function Section1() {
    return (
        <section class="weather-condition">
          <div class="weather-condition__location">Brisbane</div>
          <div style={{textAlign:'center',fontSize:'14px'}}>Clear</div>
          <div class="weather-condition__temp">19 c</div>
          <div class="weather-condition__desc">
            <div>
              <img src="icon/icon-umberella.png" />
              <span class="citem">20%</span>
            </div>
            <div>
              <img src="icon/icon-wind.png" /> <span class="citem">3 km/h</span>
            </div>
            <div>
              <img src="icon/icon-compass.png" /> <span class="citem">NE</span>
            </div>
          </div>
        </section>
       
    );
  }


export default Section1;