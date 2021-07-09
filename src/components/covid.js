import React, { useEffect, useState } from 'react'
import './covid.css';



const Covid = () => {
    const [data, setData] = useState([])
    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0])
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getCovidData();

    }, []);

    return (
        <>

            <h1 id="main">COVID-19 CORONAVIRUS TRACKER</h1>
            <div class="container">


                <div class="cards" >


                    <div class="content" id="card1">

                        <p> COUNTRY</p>
                        <h1 class="card__name ">INDIA</h1>
                        <h1 class="card__total card__small "></h1>

                    </div>


                </div>





                <div class="cards" >


                    <div class="content" id="card2" >
                        <p> TOTAL </p>
                        <h2 class="card__name ">RECOVERED</h2>
                        <h1 class="card__total card__small ">{data.recovered}</h1>
                    </div>
                </div>

                <div class="cards" >

                    <div class="content" id="card3">
                        <p> TOTAL </p>
                        <h2 class="card__name ">CONFIRMED</h2>
                        <h1 class="card__total card__small ">{data.confirmed}</h1>
                    </div>
                </div>


                <div class="cards" >

                    <div class="content" id="card4">
                        <p> TOTAL </p>
                        <h2 class="card__name ">DEATHS</h2>
                        <h1 class="card__total card__small ">{data.deaths}</h1>
                    </div>


                </div>


                <div class="cards" >

                    <div class="content" id="card5">
                        <p> TOTAL </p>
                        <h2 class="card__name ">ACTIVE</h2>
                        <h1 class="card__total card__small ">{data.active}</h1>
                    </div>

                </div>


                <div class="cards">


                    <div class="content" id="card6">
                        <p> LAST </p>
                        <h2 class="card__name ">UPDATED</h2>
                        <h1 class="card__total card__small ">{data.lastupdatedtime}</h1>
                    </div>
                </div>

            </div>







        </>
    )
}

export default Covid
