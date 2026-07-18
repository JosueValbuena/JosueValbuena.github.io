export const flags: { [key: string]: string } = {
  chile: `<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="1" y="1" fill="#D52B1E"/><rect width="3" height="1" fill="#FFFFFF"/><rect width="1" height="1" fill="#0039A6"/><polygon points="0.5,0.15 0.61,0.45 0.93,0.45 0.67,0.63 0.77,0.93 0.5,0.75 0.23,0.93 0.33,0.63 0.07,0.45 0.39,0.45" fill="#FFFFFF"/></svg>`,
  espana: `<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#AA151B"/><rect width="3" height="1" y="0.5" fill="#F1BF00"/></svg>`,
  usa: `<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="2" fill="#FFFFFF"/>${Array.from({length: 7}).map((_,i) => `<rect width="3" height="${2/13}" y="${(4*i)/13}" fill="#B22234"/>`).join("")}<rect width="1.2" height="${14/13}" fill="#3C3B6E"/></svg>`,
  venezuela: `<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg">
    <rect width="3" height="2" fill="#00247D"/>
    <rect width="3" height="0.667" fill="#FFCC00"/>
    <rect width="3" height="0.667" y="1.333" fill="#CF142B"/>
    <g fill="#FFFFFF">
      <circle cx="0.85" cy="1" r="0.055"/>
      <circle cx="1.05" cy="0.9" r="0.055"/>
      <circle cx="1.25" cy="0.85" r="0.055"/>
      <circle cx="1.5" cy="0.83" r="0.055"/>
      <circle cx="1.75" cy="0.85" r="0.055"/>
      <circle cx="1.95" cy="0.9" r="0.055"/>
      <circle cx="2.15" cy="1" r="0.055"/>
      <circle cx="1.5" cy="1.15" r="0.055"/>
    </g>
  </svg>`,
  francia: `<svg viewBox="0 0 3 2" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="2" fill="#0055A4"/><rect width="1" height="2" x="1" fill="#FFFFFF"/><rect width="1" height="2" x="2" fill="#EF4135"/></svg>`,
};

export const countryNames: { [key: string]: string } = {
  chile: "Chile",
  espana: "España",
  usa: "Estados Unidos",
  venezuela: "Venezuela",
  francia: "Francia",
};
