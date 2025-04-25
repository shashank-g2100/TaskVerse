// "use client";

// import { useEffect, useState } from "react";

// export default function NewsWidget() {
//   const [news, setNews] = useState<any[]>([]); // Initialize as an empty array

//   useEffect(() => {
//     // Replace with your news API or RSS feed
//     const fetchNews = async () => {
//       try {
//         const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=427af2c9696e40d6b187e11e473107b5");
//         const data = await response.json();
//         setNews(data.articles || []); // Ensure we set it as an empty array if articles are undefined
//       } catch (error) {
//         console.error("Error fetching news:", error);
//         setNews([]); // Set to empty array if there's an error
//       }
//     };
    
//     fetchNews();
//   }, []);

//   return (
//     <div className="bg-white p-5 rounded-xl shadow-md h-fit">
//       <h3 className="text-lg font-semibold mb-2">Latest News</h3>
//       <div className="space-y-4">
//         {news.length > 0 ? (
//           news.map((article, index) => (
//             <div key={index} className="space-y-2">
//               <h4 className="font-semibold">{article.title}</h4>
//               <p className="text-sm">{article.description}</p>
//               <a href={article.url} target="_blank" className="text-blue-600" rel="noopener noreferrer">
//                 Read more
//               </a>
//             </div>
//           ))
//         ) : (
//           <p>Loading news...</p>
//         )}
//       </div>
//     </div>
//   );
// }


// "use client";

// import { useEffect, useRef } from "react";

// export default function NewsWidget() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://widget.rss.app/v1/list.js";
//     script.type = "text/javascript";
//     script.async = true;

//     containerRef.current?.appendChild(script);
//   }, []);

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-lg h-fit max-w-xs w-full">
//       <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Latest News</h3>
//       <div ref={containerRef}>
//         <div className="rssapp-widget">
//           <rssapp-list id="tGzY8wMx3GCDdpAa"></rssapp-list>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect, useRef } from "react";

export default function NewsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      // Inject the rssapp-list HTML
      containerRef.current.innerHTML = `<rssapp-list id="tGzY8wMx3GCDdpAa"></rssapp-list>`;

      // Inject the script tag
      const script = document.createElement("script");
      script.src = "https://widget.rss.app/v1/list.js";
      script.type = "text/javascript";
      script.async = true;
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg h-fit max-w-full max-h-full">
      <h3 className="text-xl font-semibold mb-4 text-center text-gray-800">Latest News</h3>
      <div ref={containerRef}></div>
    </div>
  );
}
