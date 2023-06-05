const weatherCodeToString:{
    [key: number]: {
        icon: String;
        label: string;
    };
} = {
    0: {
        icon:"cO1d",
        label:"Clear Sky",
    },
    1: {
        icon:"cO2d",
        label:"Mainly Sky",
    },
     2: {
        icon:"cO3d",
        label:"Partly Sky",
    },
     3: {
        icon:"cO4d",
        label:"Overcast",
    },
     4: {
        icon:"cO5d",
        label:"Fog",
    },
     5: {
        icon:"cO6d",
        label:"Despite rime fog",
    },
     6: {
        icon:"cO7d",
        label:"Snow Showers",
    },
     7: {
        icon:"cO8d",
        label:"Tunderstorm",
    },
     8: {
        icon:"cO9d",
        label:"Tunderstorm",
    },
     9: {
        icon:"c10d",
        label:"Tunderstorm",
    },
}


export default weatherCodeToString