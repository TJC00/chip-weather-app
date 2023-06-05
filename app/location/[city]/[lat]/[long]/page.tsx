import CallOutCard from '@/components/CallOutCard';
import InformationPanel from '@/components/InformationPanel';
import StatCard from '@/components/StatCard';
import React from 'react'
import {TempChart} from "@/components/TempChart";
import {RainChart} from "@/components/RainChart";
import {HumidityChart} from "@/components/HumidityChart";
import cleanData from "@/lib/cleanData";

export const revalidate=60;

type Props = {
    params: {
        city: string;
        lat: string;
        long: string;
    }
}

async function WeatherPage({ params: { city, lat, long } }: Props) {

    const data = await fetch(`https://chip-weather-api.onrender.com/api/vi/weather-app/${long}/${lat}`);
    const results: Root = await data.json();

    const dataToSend = cleanData(results, city);

    const response = await fetch(`https://chip-weather-api.onrender.com/api/vi/weather-app`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(dataToSend),
    });

    const GPTData = await response.json();
    const {content} = GPTData;
    console.log(JSON.stringify(dataToSend))
    return (
        <div className='flex flex-col min-h-screen md:flex-row'>
            <InformationPanel
                city={city}
                lat={lat}
                long={long}
                results={results}
            />
            <div className='flex-1 lg:p-10'>
                <div className='p-5'>
                    <div className='pb-5'>
                        <h2 className='text-xl font-bold'>Today Overview</h2>
                        <p className='text-sm text-gray-400'>
                            Last Updated AT:{" "}
                            {new Date(results.current_weather.time).toLocaleString()}(
                            {results.timezone}
                            )
                        </p>
                    </div>
                    <div className='m-2 mb-10'>
                        <CallOutCard
                            message={content}
                        />
                    </div>
                    <div className='grid grid-cols-1 xl:grid-cols-2 gap-5 m-2'>
                        <StatCard
                            title='Maximum Temperature'
                            metric={`${results.daily.temperature_2m_max[0].toFixed(2)}`}
                            color='yellow'
                        />
                        <StatCard
                            title='Minimum Temperature'
                            metric={`${results.daily.temperature_2m_min[0].toFixed(2)}`}
                            color='green'
                        />
                        <div>
                            {Number(results.daily.uv_index_max[0].toFixed(2)) > 5 && (
                                <CallOutCard
                                    message={'The UV is high today, be sure to wear SRF!'}
                                    warning
                                />
                            )}
                        </div>
                        <div className='flex space-x-3'>
                            <StatCard
                                title='Wind Speed'
                                metric={`${results.current_weather.windspeed.toFixed(2)}`}
                                color='cyan'
                            />
                            <StatCard
                                title='Wind Direction'
                                metric={`${results.current_weather.winddirection.toFixed(2)}`}
                                color='violet'
                            />
                        </div>
                    </div>
                </div>
                <hr className='mb-5-' />
                <div>
                    <TempChart results={results}/>
                    <RainChart results={results}/>
                    <HumidityChart results={results}/>
                </div>
            </div>
        </div>
    )
}

export default WeatherPage