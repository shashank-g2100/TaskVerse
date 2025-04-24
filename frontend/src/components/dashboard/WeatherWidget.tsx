// export default function WeatherWidget() {
//     return (
//       <div className="bg-white p-6 rounded-xl shadow h-fit">
//         <h3 className="text-lg font-semibold">Weather</h3>
//         <p className="text-gray-500 text-sm">Check the weather for outdoor activities</p>
//         <div className="mt-4 text-center">
//           <div className="text-3xl font-bold">72°F</div>
//           <p className="text-gray-600">Partly Cloudy</p>
//         </div>
//         <div className="mt-4">
//           <h4 className="font-medium">Outdoor Activity Recommendation</h4>
//           <p className="text-sm text-gray-600">
//             Great weather for outdoor tasks! Don't forget sunscreen.
//           </p>
//         </div>
//       </div>
//     );
//   }
  

// 'use client';

// import { useEffect, useState } from 'react';

// export default function WeatherWidget() {
//   const [weatherData, setWeatherData] = useState<any>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const response = await fetch(
//           `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=Bangalore`
//         );
//         const data = await response.json();
//         setWeatherData(data);
//       } catch (err) {
//         setError('Failed to fetch weather data');
//         console.error(err);
//       }
//     };

//     fetchWeather();
//   }, []);

//   if (error) {
//     return (
//       <div className="bg-white p-6 rounded-xl shadow h-fit">
//         <h3 className="text-lg font-semibold">Weather</h3>
//         <p className="text-red-500 text-sm">{error}</p>
//       </div>
//     );
//   }

//   if (!weatherData) {
//     return (
//       <div className="bg-white p-6 rounded-xl shadow h-fit">
//         <h3 className="text-lg font-semibold">Weather</h3>
//         <p className="text-gray-500 text-sm">Loading...</p>
//       </div>
//     );
//   }

//   const { temp_c, condition } = weatherData.current;

//   return (
//     <div className="bg-white p-6 rounded-xl shadow h-fit">
//       <h3 className="text-lg font-semibold">Weather - Bangalore</h3>
//       <p className="text-gray-500 text-sm">Real-time weather forecast</p>

//       <div className="mt-4 text-center">
//         <img
//           src={condition.icon}
//           alt={condition.text}
//           className="inline w-12 h-12"
//         />
//         <div className="text-3xl font-bold">{temp_c}°C</div>
//         <p className="text-gray-600">{condition.text}</p>
//       </div>

//       <div className="mt-4">
//         <h4 className="font-medium">Outdoor Activity Recommendation</h4>
//         <p className="text-sm text-gray-600">
//           {condition.text.includes('Rain') || condition.text.includes('Storm')
//             ? 'Better to stay indoors today.'
//             : 'Great weather for outdoor tasks! Don’t forget sunscreen.'}
//         </p>
//       </div>
//     </div>
//   );
// }

///Looking good 1

"use client";

import React, { useEffect, useState } from "react";

interface WeatherData {
  temp_c: number;
  condition: {
    text: string;
    icon: string;
  };
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=Bangalore`
        );
        if (!res.ok) throw new Error("Failed to fetch weather");
        const data = await res.json();
        setWeather(data.current);
      } catch (err) {
        console.error("Weather fetch error:", err);
        setError("Failed to load weather data");
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow h-fit">
      <h3 className="text-lg font-semibold">Weather</h3>
      <p className="text-gray-500 text-sm">Check the weather for outdoor activities</p>

      {error ? (
        <div className="mt-4 text-red-500">{error}</div>
      ) : weather ? (
        <>
          {/* <div className="mt-4 text-center">
            <div className="text-3xl font-bold">{weather.temp_c}°C</div>
            <div className="flex items-center justify-center gap-2 mt-1">
              <img 
                 src={weather.condition.icon} 
                 alt={weather.condition.text} 
                 className="w-18 h-18" />
              <p className="text-gray-600">{weather.condition.text}</p>
            </div>
          </div> */}

					<div className=" text-center">
						<div className="flex items-center justify-center">
								<img
								src={weather.condition.icon}
								alt={weather.condition.text}
								className="w-18 h-18 mr-[-20px]"
								/>
								<div className="text-3xl font-bold">{weather.temp_c}°C</div>
						</div>
						<p className="text-gray-600 -mt-6">{weather.condition.text}</p>
					</div>


          <div className="mt-4">
            <h4 className="font-medium">Outdoor Activity Recommendation</h4>
            <p className="text-sm text-gray-600">
              {weather.temp_c > 30
                ? "It's hot! Stay hydrated if you go outside."
                : "Great weather for outdoor tasks!"}
            </p>
          </div>
        </>
      ) : (
        <div className="mt-4 text-gray-500 text-sm">Loading weather...</div>
      )}
    </div>
  );
}


// "use client";

// import React, { useEffect, useState } from "react";

// interface WeatherData {
//   temp_c: number;
//   condition: {
//     text: string;
//     icon: string;
//   };
// }

// const getWeatherBg = (conditionText: string): string => {
//   const lower = conditionText.toLowerCase();
//   if (lower.includes("sunny") || lower.includes("clear")) return "bg-yellow-100";
//   if (lower.includes("cloudy")) return "bg-gray-100";
//   if (lower.includes("rain")) return "bg-blue-100";
//   if (lower.includes("storm") || lower.includes("thunder")) return "bg-purple-100";
//   if (lower.includes("snow")) return "bg-blue-50";
//   return "bg-white"; // default fallback
// };

// export default function WeatherWidget() {
//   const [weather, setWeather] = useState<WeatherData | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const res = await fetch(
//           `https://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&q=Bangalore`
//         );
//         if (!res.ok) throw new Error("Failed to fetch weather");
//         const data = await res.json();
//         setWeather(data.current);
//       } catch (err) {
//         console.error("Weather fetch error:", err);
//         setError("Failed to load weather data");
//       }
//     };

//     fetchWeather();
//   }, []);

//   const bgClass = weather ? getWeatherBg(weather.condition.text) : "bg-white";

//   return (
//     <div className={`${bgClass} p-6 rounded-xl shadow h-fit transition-all duration-500`}>
//       <h3 className="text-lg font-semibold">Weather</h3>
//       <p className="text-gray-600 text-sm">Check the weather for outdoor activities</p>

//       {error ? (
//         <div className="mt-4 text-red-500">{error}</div>
//       ) : weather ? (
//         <>
//           <div className="mt-4 text-center">
//             <div className="text-3xl font-bold">{weather.temp_c}°C</div>
//             <div className="flex flex-col items-center justify-center gap-2 mt-2">
//               <img
//                 src={weather.condition.icon}
//                 alt={weather.condition.text}
//                 className="w-16 h-16"
//               />
//               <p className="text-gray-700 text-base">{weather.condition.text}</p>
//             </div>
//           </div>

//           <div className="mt-4">
//             <h4 className="font-medium">Outdoor Activity Recommendation</h4>
//             <p className="text-sm text-gray-700">
//               {weather.temp_c > 30
//                 ? "It's hot! Stay hydrated if you go outside."
//                 : "Great weather for outdoor tasks!"}
//             </p>
//           </div>
//         </>
//       ) : (
//         <div className="mt-4 text-gray-500 text-sm">Loading weather...</div>
//       )}
//     </div>
//   );
// }


//Weatherwidget.io

// "use client";

// import { useEffect } from "react";

// export default function WeatherWidget() {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://weatherwidget.io/js/widget.min.js";
//     script.async = true;
//     script.id = "weatherwidget-io-js";

//     const existingScript = document.getElementById("weatherwidget-io-js");
//     if (!existingScript) {
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <div className="bg-white p-6 rounded-xl shadow h-fit">
//       <h3 className="text-lg font-semibold mb-2">Weather</h3>
//       {/* <p className="text-gray-600 text-sm mb-4">
//         Real-time forecast from WeatherWidget.io
//       </p> */}
//       <div className="overflow-hidden rounded-lg">
//         <a
//           className="weatherwidget-io block"
//           href="https://forecast7.com/en/12d9777d59/bengaluru/"
//           data-label_1="BENGALURU"
//           data-label_2="WEATHER"
//           data-theme="retro-sky"
//         >
//           BENGALURU WEATHER
//         </a>
//       </div>
//     </div>
//   );
// }


//weatherwidget.org

// "use client";

// import { useEffect } from "react";

// export default function WeatherWidget() {
//   useEffect(() => {
//     const scriptId = "weatherwidget-org-js";

//     if (!document.getElementById(scriptId)) {
//       const script = document.createElement("script");
//       script.src = "https://app3.weatherwidget.org/js/?id=ww_dfa58379b417c";
//       script.async = true;
//       script.id = scriptId;
//       document.body.appendChild(script);
//     }
//   }, []);

//   return (
//     <div className="bg-white p-3 rounded-xl shadow h-fit">
//       <h3 className="text-lg font-semibold mb-2">Weather</h3>
//       {/* <p className="text-gray-600 text-sm mb-4">
//         Real-time forecast from WeatherWidget.org
//       </p> */}

//       <div
//         id="ww_dfa58379b417c"
//         v="1.3"
//         loc="id"
//         a='{"t":"horizontal","lang":"en","sl_lpl":1,"ids":["wl653"],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'
//       >
//         <a
//           href="https://weatherwidget.org/"
//           id="ww_dfa58379b417c_u"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Weather widget html
//         </a>
//       </div>
//     </div>
//   );
// }