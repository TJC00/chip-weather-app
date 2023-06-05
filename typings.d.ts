interface CurrentWeather {
    is_day: number;
    temperature: number;
    time: string;
    weathercode: number;
    winddirection: number;
    windspeed: number;
}
interface Daily {
    apparent_temperature_max: [number];
  apparent_temperature_min: [number];
    sunrise: string;
    sunset: string;
    temperature_2m_max: [number];
    temperature_2m_min: [number];
    time: [string];
    uv_index_clear_sky_max: [number];
    uv_index_max: [number];
    weathercode: [number];
}
interface DailyUnits {
    apparent_temperature_max: string;
    apparent_temperature_min: string;
    sunrise: string;
    sunset: string;
    temperature_2m_max: string;
    temperature_2m_min: String;
    time: string;
    uv_index_clear_sky_max: string;
    uv_index_max: string;
    weathercode: string;
}
interface Hourly {
    apparent_temperature: string;
    precipitation: string;
    precipitation_probability: string;
    relativehumidity_2m: string;
    temperature_2m: string;
    time: [string];
    uv_index: string;
    windgusts_10m: string;
}
interface HourlyUnits {
    apparent_temperature: string;
    precipitation: string;
    precipitation_probability: string;
    relativehumidity_2m: string;
    temperature_2m: string;
    time: string;
    uv_index: string;
    windgusts_10m: string;
}
interface  Root {
    current_weather: CurrentWeather;
    daily: Daily;
    daily_units: DailyUnits;
    elevation: string;
    generationtime_ms: string;
    hourly: Hourly;
    hourly_units: HourlyUnits;
    latitude: string;
    longitude: number;
    timezone: string;
    timezone_abbreviation: string;
    utc_offset_seconds: number;
}
