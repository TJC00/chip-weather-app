const cleanData = (data:Root, city:string)=> {
    const {
        current_weather,
        timezone,
        hourly,
        hourly_units,
        timezone_abbreviation,
    } = data;

    const {
        temperature,
        windspeed,
        winddirection,
        weathercode,
        time
    }= current_weather;

    const {
        temperature_2m,
        relativehumidity_2m,
        windgusts_10m,
        precipitation_probability,
        uv_index,
    }= hourly;

    return {
        current_weather:{
            time,
            temperature,
            windspeed,
            winddirection,
            weathercode,
        },

        hourly:{
            temperature_2m:temperature_2m.slice(0,24),
            windgusts_10m:windgusts_10m.slice(0,24),
            relativehummidity_2m:relativehumidity_2m.slice(0,24),
            precipitation_probability:precipitation_probability.slice(0,24),
            uv_index: uv_index.slice(0,24),
        },
        timezone,
        timezone_abbreviation,
        hourly_units,
        city,
    };
};

export default cleanData;