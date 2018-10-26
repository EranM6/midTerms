const states = [
  {
    name: 'Alabama',
    symbol: 'AL',
  },
  {
    name: 'Alaska',
    symbol: 'AK',
  },
  {
    name: 'Arizona',
    symbol: 'AZ',
  },
  {
    name: 'Arkansas',
    symbol: 'AR',
  },
  {
    name: 'California',
    symbol: 'CA',
  },
  {
    name: 'Colorado',
    symbol: 'CO',
  },
  {
    name: 'Connecticut',
    symbol: 'CT',
  },
  {
    name: 'Delaware',
    symbol: 'DE',
  },
  {
    name: 'Florida',
    symbol: 'FL',
  },
  {
    name: 'Georgia',
    symbol: 'GA',
  },
  {
    name: 'Hawaii',
    symbol: 'HI',
  },
  {
    name: 'Idaho',
    symbol: 'ID',
  },
  {
    name: 'Illinois',
    symbol: 'IL',
  },
  {
    name: 'Indiana',
    symbol: 'IN',
  },
  {
    name: 'Iowa',
    symbol: 'IA',
  },
  {
    name: 'Kansas',
    symbol: 'KS',
  },
  {
    name: 'Kentucky',
    symbol: 'KY',
  },
  {
    name: 'Louisiana',
    symbol: 'LA',
  },
  {
    name: 'Maine',
    symbol: 'ME',
  },
  {
    name: 'Maryland',
    symbol: 'MD',
  },
  {
    name: 'Massachusetts',
    symbol: 'MA',
  },
  {
    name: 'Michigan',
    symbol: 'MI',
  },
  {
    name: 'Minnesota',
    symbol: 'MN',
  },
  {
    name: 'Mississippi',
    symbol: 'MS',
  },
  {
    name: 'Missouri',
    symbol: 'MO',
  },
  {
    name: 'Montana',
    symbol: 'MT',
  },
  {
    name: 'Nebraska',
    symbol: 'NE',
  },
  {
    name: 'Nevada',
    symbol: 'NV',
  },
  {
    name: 'New Hampshire',
    symbol: 'NH',
  },
  {
    name: 'New Jersey',
    symbol: 'NJ',
  },
  {
    name: 'New Mexico',
    symbol: 'NM',
  },
  {
    name: 'New York',
    symbol: 'NY',
  },
  {
    name: 'North Carolina',
    symbol: 'NC',
  },
  {
    name: 'North Dakota',
    symbol: 'ND',
  },
  {
    name: 'Ohio',
    symbol: 'OH',
  },
  {
    name: 'Oklahoma',
    symbol: 'OK',
  },
  {
    name: 'Oregon',
    symbol: 'OR',
  },
  {
    name: 'Pennsylvania',
    symbol: 'PA',
  },
  {
    name: 'Rhode Island',
    symbol: 'RI',
  },
  {
    name: 'South Carolina',
    symbol: 'SC',
  },
  {
    name: 'South Dakota',
    symbol: 'SD',
  },
  {
    name: 'Tennessee',
    symbol: 'TN',
  },
  {
    name: 'Texas',
    symbol: 'TX',
  },
  {
    name: 'Utah',
    symbol: 'UT',
  },
  {
    name: 'Vermont',
    symbol: 'VT',
  },
  {
    name: 'Virginia',
    symbol: 'VA',
  },
  {
    name: 'Washington',
    symbol: 'WA',
  },
  {
    name: 'West Virginia',
    symbol: 'WV',
  },
  {
    name: 'Wisconsin',
    symbol: 'WI',
  },
  {
    name: 'Wyoming',
    symbol: 'WY',
  },
]

const senators = [
  {
    name: 'Helen Burgess',
    position: 2,
    state: 'NY',
    info: 'GraphQL subscriptions have to be defined in the schema, just like queries and mutations:'
  },
  {
    name: 'Julia Conrad',
    position: 1,
    state: 'NY',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    name: 'Lynne Watson',
    position: 0,
    state: 'NC',
    info: 'GraphQL subscriptions have to be defined in the schema, just like queries and mutations:'
  },
  {
    name: 'Ward Ewing',
    position: -1,
    state: 'NC',
  },
  {
    name: 'Terry Bruce',
    position: -1,
    state: 'MS',
  },
  {
    name: 'Jayne Lucas',
    position: -2,
    state: 'MS',
  },
  {
    name: 'Helga Beard',
    position: 0,
    state: 'TX',
  },
  {
    name: 'Hale Johnston',
    position: -2,
    state: 'TX',
  },
  {
    name: 'Colette Robbins',
    position: 1,
    state: 'KY',
  },
  {
    name: 'Harris Hughes',
    position: 1,
    state: 'IN',
  },
  {
    name: 'Jacquelyn Collier',
    position: 1,
    state: 'FL',
  },
  {
    name: 'Kathryn Bernard',
    position: 0,
    state: 'KS',
  },
  {
    name: 'Annette Johnson',
    position: -2,
    state: 'MS',
  },
  {
    name: 'Shanna Alston',
    position: 2,
    state: 'LA',
  },
  {
    name: 'Hollie Bell',
    position: -1,
    state: 'CO',
  },
  {
    name: 'Petty Gilbert',
    position: 1,
    state: 'ID',
  },
  {
    name: 'Hattie Fleming',
    position: -2,
    state: 'WY',
  },
  {
    name: 'Morton Barnes',
    position: 2,
    state: 'IA',
  },
  {
    name: 'Camille Montgomery',
    position: 2,
    state: 'DE',
  },
  {
    name: 'Sylvia Kim',
    position: 0,
    state: 'ME',
  },
  {
    name: 'Herrera Ellison',
    position: 2,
    state: 'MI',
  },
  {
    name: 'Warner Alvarado',
    position: 0,
    state: 'MN',
  },
  {
    name: 'Poole Horne',
    position: 2,
    state: 'NE',
  },
  {
    name: 'Clarke Cameron',
    position: 2,
    state: 'NJ',
  },
  {
    name: 'Tameka Fox',
    position: 1,
    state: 'NH',
  },
  {
    name: 'Candace Fisher',
    position: 2,
    state: 'SD',
  },
  {
    name: 'Gamble Mccullough',
    position: -2,
    state: 'UT',
  },
  {
    name: 'Maynard Padilla',
    position: 1,
    state: 'RI',
  },
  {
    name: 'Tami Alford',
    position: -1,
    state: 'MA',
  },
  {
    name: 'Abbott Juarez',
    position: -1,
    state: 'MD',
  },
  {
    name: 'Smith English',
    position: 2,
    state: 'CT',
  },
  {
    name: 'Quinn Hood',
    position: 1,
    state: 'HI',
  },
  {
    name: 'Claudette Ryan',
    position: -1,
    state: 'GA',
  },
  {
    name: 'English Pate',
    position: 2,
    state: 'IL',
  },
  {
    name: 'Berg Vincent',
    position: 0,
    state: 'NM',
  },
  {
    name: 'Stuart Espinoza',
    position: 0,
    state: 'NV',
  },
  {
    name: 'Cox Mayer',
    position: 2,
    state: 'OK',
  },
  {
    name: 'Cline Powers',
    position: 2,
    state: 'ND',
  },
  {
    name: 'Erika Stanton',
    position: 2,
    state: 'MT',
  },
  {
    name: 'Katharine Sykes',
    position: -1,
    state: 'AL',
  },
  {
    name: 'Lidia Le',
    position: 1,
    state: 'OH',
  },
  {
    name: 'Alissa Cortez',
    position: 2,
    state: 'MO',
  },
  {
    name: 'Mona Gentry',
    position: 2,
    state: 'PA',
  },
  {
    name: 'Mercer Flynn',
    position: 1,
    state: 'OR',
  },
  {
    name: 'Lawanda Norris',
    position: 1,
    state: 'SC',
  },
  {
    name: 'Wilkerson May',
    position: 2,
    state: 'RI',
  },
  {
    name: 'Craft Peterson',
    position: 1,
    state: 'VT',
  },
  {
    name: 'Willa Williams',
    position: -2,
    state: 'WA',
  },
  {
    name: 'Hope Francis',
    position: 0,
    state: 'AZ',
  },
  {
    name: 'Jenifer Bray',
    position: 2,
    state: 'AR',
  },
  {
    name: 'Manning Mckenzie',
    position: 2,
    state: 'WV',
  },
  {
    name: 'Whitney Long',
    position: -1,
    state: 'ME',
  },
  {
    name: 'Gould Hicks',
    position: -1,
    state: 'WI',
  },
  {
    name: 'Nolan Cervantes',
    position: 2,
    state: 'PA',
  },
  {
    name: 'Autumn Sears',
    position: 0,
    state: 'MD',
  },
  {
    name: 'Clements Dunn',
    position: 0,
    state: 'AR',
  },
  {
    name: 'Walter Forbes',
    position: 2,
    state: 'AK',
  },
  {
    name: 'Clare Wall',
    position: 0,
    state: 'ME',
  },
  {
    name: 'Rivera Silva',
    position: 1,
    state: 'IN',
  },
  {
    name: 'Kerr Finch',
    position: 2,
    state: 'HI',
  },
  {
    name: 'Ava Sloan',
    position: -2,
    state: 'ND',
  },
  {
    name: 'Rosalinda Mccarty',
    position: 1,
    state: 'MN',
  },
  {
    name: 'Dillon Hooper',
    position: 2,
    state: 'DE',
  },
  {
    name: 'Hughes Eaton',
    position: -2,
    state: 'KS',
  },
  {
    name: 'Mcneil Merritt',
    position: 1,
    state: 'KY',
  },
  {
    name: 'Deidre Whitney',
    position: 2,
    state: 'NH',
  },
  {
    name: 'Mamie Foreman',
    position: -2,
    state: 'OK',
  },
  {
    name: 'Cotton Hensley',
    position: 1,
    state: 'IA',
  },
  {
    name: 'Annabelle Compton',
    position: 0,
    state: 'FL',
  },
  {
    name: 'Cummings Ball',
    position: 2,
    state: 'MI',
  },
  {
    name: 'Ronda Fitzgerald',
    position: 2,
    state: 'IL',
  },
  {
    name: 'Darla Boone',
    position: 2,
    state: 'ID',
  },
  {
    name: 'Padilla Wilkinson',
    position: 0,
    state: 'MA',
  },
  {
    name: 'Sweeney Cabrera',
    position: -1,
    state: 'NJ',
  },
  {
    name: 'Raquel Dawson',
    position: 0,
    state: 'OH',
  },
  {
    name: 'Glenn Fischer',
    position: -2,
    state: 'LA',
  },
  {
    name: 'Walton Marsh',
    position: 2,
    state: 'MT',
  },
  {
    name: 'Denise Arnold',
    position: -1,
    state: 'AL',
  },
  {
    name: 'Steele Horn',
    position: -2,
    state: 'OR',
  },
  {
    name: 'Nicole Blanchard',
    position: -2,
    state: 'SC',
  },
  {
    name: 'Estelle Mcpherson',
    position: -1,
    state: 'NV',
  },
  {
    name: 'Natasha Booker',
    position: -1,
    state: 'GA',
  },
  {
    name: 'Mcgowan Ayers',
    position: 2,
    state: 'VA',
  },
  {
    name: 'Minerva Burke',
    position: 2,
    state: 'WA',
  },
  {
    name: 'Anastasia Mendoza',
    position: 0,
    state: 'WY',
  },
  {
    name: 'Whitaker Oconnor',
    position: 0,
    state: 'CA',
  },
  {
    name: 'Bright George',
    position: -2,
    state: 'CT',
  },
  {
    name: 'Kasey Moran',
    position: 0,
    state: 'AZ',
  },
  {
    name: 'Jessica Serrano',
    position: -2,
    state: 'VT',
  },
  {
    name: 'Hayes Poole',
    position: 0,
    state: 'TN',
  },
  {
    name: 'Byers Colon',
    position: 1,
    state: 'UT',
  },
  {
    name: 'Hazel Mason',
    position: -1,
    state: 'CO',
  },
  {
    name: 'Kristie Wiggins',
    position: 0,
    state: 'AK',
  },
  {
    name: 'Elvia Garcia',
    position: 1,
    state: 'AR',
  },
  {
    name: 'Kristin Mathis',
    position: 0,
    state: 'CA',
  },
  {
    name: 'Nona Strong',
    position: 0,
    state: 'WI',
  },
  {
    name: 'Henderson Carroll',
    position: 1,
    state: 'NM',
  },
  {
    name: 'Sharp Baker',
    position: 1,
    state: 'NE',
  },
  {
    name: 'Stephens Sampson',
    position: -2,
    state: 'SD',
  },
  {
    name: 'Antonia Goff',
    position: 0,
    state: 'TN',
  },
]

const representatives = [
  {
    'name': 'Ann Brennan',
    'position': -1,
    state: 'NY',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Harvey King',
    'position': 1,
    state: 'NY',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Flora Anthony',
    'position': -2,
    state: 'NC',
  },
  {
    'name': 'Kara Phelps',
    'position': -2,
    state: 'NC',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Jessica Riggs',
    'position': -2,
    state: 'MS',
  },
  {
    'name': 'Mariana Sosa',
    'position': -2,
    state: 'MS',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Swanson Blake',
    'position': -1,
    state: 'TX',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Sonya Washington',
    'position': 1,
    state: 'TX',
  },
  {
    'name': 'Eula Frye',
    'position': 1,
    state: 'KY',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Leblanc Marquez',
    'position': -2,
    state: 'IN',
  },
  {
    'name': 'Nettie Odom',
    'position': 0,
    state: 'FL',
  },
  {
    'name': 'Lucia Jacobs',
    'position': -1,
    state: 'KS',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Acevedo Dean',
    'position': -1,
    state: 'MS',
  },
  {
    'name': 'Meagan Burch',
    'position': -2,
    state: 'LA',
  },
  {
    'name': 'Hunter Garrett',
    'position': 2,
    state: 'CO',
  },
  {
    'name': 'Sheila Gillespie',
    'position': -1,
    state: 'ID',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Jackson Solis',
    'position': 0,
    state: 'WY',
  },
  {
    'name': 'Cassie Lyons',
    'position': -2,
    state: 'IA',
  },
  {
    'name': 'Jackie Cain',
    'position': -1,
    state: 'DE',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Butler Berry',
    'position': 2,
    state: 'ME',
  },
  {
    'name': 'Janelle Alston',
    'position': 2,
    state: 'MI',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Leola Hatfield',
    'position': -1,
    state: 'MN',
  },
  {
    'name': 'Glenda Norman',
    'position': 1,
    state: 'NE',
  },
  {
    'name': 'Yang Bender',
    'position': -1,
    state: 'NJ',
  },
  {
    'name': 'Barlow Berg',
    'position': 0,
    state: 'NH',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Janna Riley',
    'position': -1,
    state: 'SD',
  },
  {
    'name': 'Velazquez Dale',
    'position': -1,
    state: 'UT',
  },
  {
    'name': 'Frieda Roach',
    'position': 0,
    state: 'RI',
  },
  {
    'name': 'Hardin Hutchinson',
    'position': -2,
    state: 'MA',
  },
  {
    'name': 'Judy Mcclure',
    'position': 1,
    state: 'MD',
  },
  {
    'name': 'Barbra Irwin',
    'position': 0,
    state: 'CT',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Bird Terry',
    'position': -1,
    state: 'HI',
  },
  {
    'name': 'Kristine Pearson',
    'position': 1,
    state: 'GA',
  },
  {
    'name': 'Fernandez Buchanan',
    'position': 2,
    state: 'IL',
  },
  {
    'name': 'Geneva Nash',
    'position': 1,
    state: 'NM',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Calderon William',
    'position': 2,
    state: 'NV',
  },
  {
    'name': 'Patti Cruz',
    'position': 1,
    state: 'OK',
  },
  {
    'name': 'Ada Torres',
    'position': -2,
    state: 'ND',
  },
  {
    'name': 'Burgess Mccarthy',
    'position': 1,
    state: 'MT',
  },
  {
    'name': 'Miranda Hayes',
    'position': 2,
    state: 'AL',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Hart Reeves',
    'position': 2,
    state: 'OH',
  },
  {
    'name': 'Ellen Ortiz',
    'position': 2,
    state: 'MO',
  },
  {
    'name': 'Shaffer Dickson',
    'position': -2,
    state: 'PA',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Ana Snyder',
    'position': -2,
    state: 'OR',
  },
  {
    'name': 'Alissa Klein',
    'position': -2,
    state: 'SC',
  },
  {
    'name': 'Suzette Ewing',
    'position': 2,
    state: 'RI',
  },
  {
    'name': 'Callie Mack',
    'position': 2,
    state: 'VT',
  },
  {
    'name': 'Joyce Wilder',
    'position': 1,
    state: 'WA',
  },
  {
    'name': 'Angelia Curtis',
    'position': 2,
    state: 'AZ',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Young Craig',
    'position': 1,
    state: 'AR',
  },
  {
    'name': 'Underwood Pruitt',
    'position': -1,
    state: 'WV',
  },
  {
    'name': 'Alba Keller',
    'position': -1,
    state: 'ME',
  },
  {
    'name': 'England Molina',
    'position': 1,
    state: 'WI',
  },
  {
    'name': 'Shari Dominguez',
    'position': -2,
    state: 'PA',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Terrell Perez',
    'position': 2,
    state: 'MD',
  },
  {
    'name': 'Kathrine Watts',
    'position': -2,
    state: 'AR',
  },
  {
    'name': 'Thelma Wilkinson',
    'position': -2,
    state: 'AK',
  },
  {
    'name': 'Mcintyre Baker',
    'position': -2,
    state: 'ME',
  },
  {
    'name': 'Cindy Crosby',
    'position': 0,
    state: 'IN',
  },
  {
    'name': 'Jodi Armstrong',
    'position': 1,
    state: 'HI',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Alejandra Christensen',
    'position': 2,
    state: 'ND',
  },
  {
    'name': 'Allison Frank',
    'position': 0,
    state: 'MN',
  },
  {
    'name': 'May Dunn',
    'position': -1,
    state: 'DE',
  },
  {
    'name': 'Morrison Terrell',
    'position': 0,
    state: 'KS',
  },
  {
    'name': 'Waters Tanner',
    'position': 1,
    state: 'KY',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Rosie Hull',
    'position': -1,
    state: 'NH',
  },
  {
    'name': 'Anthony Gilliam',
    'position': -2,
    state: 'OK',
  },
  {
    'name': 'Vance Patrick',
    'position': 1,
    state: 'IA',
  },
  {
    'name': 'Alison Gibson',
    'position': -1,
    state: 'FL',
  },
  {
    'name': 'Lottie Tillman',
    'position': 2,
    state: 'MI',
  },
  {
    'name': 'York Humphrey',
    'position': 0,
    state: 'IL',
  },
  {
    'name': 'Carpenter Carrillo',
    'position': 0,
    state: 'ID',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Melton Small',
    'position': -2,
    state: 'MA',
  },
  {
    'name': 'Rocha Weber',
    'position': -1,
    state: 'NJ',
  },
  {
    'name': 'Leah Reynolds',
    'position': 2,
    state: 'OH',
  },
  {
    'name': 'Sloan Vaughan',
    'position': 1,
    state: 'LA',
  },
  {
    'name': 'Crosby Manning',
    'position': -2,
    state: 'MT',
  },
  {
    'name': 'Lucinda Pratt',
    'position': 2,
    state: 'AL',
  },
  {
    'name': 'Pat Mcguire',
    'position': -2,
    state: 'OR',
  },
  {
    'name': 'Nell Schmidt',
    'position': -2,
    state: 'SC',
  },
  {
    'name': 'Isabelle Griffith',
    'position': -2,
    state: 'NV',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Adkins Miles',
    'position': -1,
    state: 'GA',
  },
  {
    'name': 'Dawn Saunders',
    'position': 2,
    state: 'VA',
  },
  {
    'name': 'Stafford Wallace',
    'position': 2,
    state: 'WA',
  },
  {
    'name': 'Marietta Weiss',
    'position': -1,
    state: 'WY',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Glass Schneider',
    'position': 1,
    state: 'CA',
  },
  {
    'name': 'Latasha Schultz',
    'position': 0,
    state: 'CT',
  },
  {
    'name': 'Margaret Parrish',
    'position': 0,
    state: 'AZ',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Latoya Hendrix',
    'position': 1,
    state: 'VT',
  },
  {
    'name': 'Blanchard Newman',
    'position': 0,
    state: 'TN',
  },
  {
    'name': 'Elva Allison',
    'position': 0,
    state: 'UT',
  },
  {
    'name': 'Fields Wooten',
    'position': -2,
    state: 'CO',
  },
  {
    'name': 'Barbara Cameron',
    'position': -1,
    state: 'AK',
  },
  {
    'name': 'Blair Lee',
    'position': -2,
    state: 'AR',
  },
  {
    'name': 'Hester Conway',
    'position': -1,
    state: 'CA',
  },
  {
    'name': 'Lenore Jacobson',
    'position': 2,
    state: 'WI',
  },
  {
    'name': 'Penny Davenport',
    'position': 0,
    state: 'NM',
  },
  {
    'name': 'Robert Noel',
    'position': 2,
    state: 'NE',
  },
  {
    'name': 'Nicholson Rogers',
    'position': 1,
    state: 'SD',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Downs Perkins',
    'position': -2,
    state: 'TN',
  },
  {
    'name': 'Ginger Bolton',
    'position': 2,
    state: 'NY',
  },
  {
    'name': 'Holden Shaffer',
    'position': -1,
    state: 'NY',
  },
  {
    'name': 'Brooke Swanson',
    'position': 0,
    state: 'NC',
  },
  {
    'name': 'Lelia Wagner',
    'position': -2,
    state: 'NC',
  },
  {
    'name': 'Kirkland Cummings',
    'position': 1,
    state: 'MS',
  },
  {
    'name': 'Magdalena Christensen',
    'position': -2,
    state: 'MS',
  },
  {
    'name': 'Joanne Richardson',
    'position': 2,
    state: 'TX',
  },
  {
    'name': 'Jackie White',
    'position': 2,
    state: 'TX',
  },
  {
    'name': 'Lara Buchanan',
    'position': 1,
    state: 'KY',
  },
  {
    'name': 'Duran Ballard',
    'position': 0,
    state: 'IN',
  },
  {
    'name': 'Justice Ingram',
    'position': -2,
    state: 'FL',
  },
  {
    'name': 'Rosie Rodriquez',
    'position': 2,
    state: 'KS',
  },
  {
    'name': 'Stefanie Lynch',
    'position': 1,
    state: 'MS',
  },
  {
    'name': 'Carmen Haynes',
    'position': -1,
    state: 'LA',
  },
  {
    'name': 'Winifred Sweet',
    'position': 1,
    state: 'CO',
  },
  {
    'name': 'Mandy Holder',
    'position': 0,
    state: 'ID',
  },
  {
    'name': 'Barron Workman',
    'position': 1,
    state: 'WY',
  },
  {
    'name': 'Kelley Rivers',
    'position': 2,
    state: 'IA',
  },
  {
    'name': 'Mclean Dixon',
    'position': 0,
    state: 'DE',
  },
  {
    'name': 'Violet Conner',
    'position': -1,
    state: 'ME',
  },
  {
    'name': 'Cole Mcgowan',
    'position': -2,
    state: 'MI',
  },
  {
    'name': 'Elnora Yates',
    'position': -2,
    state: 'MN',
  },
  {
    'name': 'Castaneda Golden',
    'position': -1,
    state: 'NE',
  },
  {
    'name': 'Garcia Odom',
    'position': -2,
    state: 'NJ',
  },
  {
    'name': 'Jami Lloyd',
    'position': 1,
    state: 'NH',
  },
  {
    'name': 'Merle Foreman',
    'position': -1,
    state: 'SD',
  },
  {
    'name': 'Winters Turner',
    'position': 1,
    state: 'UT',
  },
  {
    'name': 'Ann Spencer',
    'position': 0,
    state: 'RI',
  },
  {
    'name': 'Latonya Fields',
    'position': 1,
    state: 'MA',
  },
  {
    'name': 'Lowe Bowen',
    'position': 1,
    state: 'MD',
  },
  {
    'name': 'Miller Stuart',
    'position': 2,
    state: 'CT',
  },
  {
    'name': 'Sheppard Avery',
    'position': 0,
    state: 'HI',
  },
  {
    'name': 'Malone Villarreal',
    'position': -1,
    state: 'GA',
  },
  {
    'name': 'Blanca Pacheco',
    'position': -2,
    state: 'IL',
  },
  {
    'name': 'Serrano Blankenship',
    'position': -2,
    state: 'NM',
  },
  {
    'name': 'Obrien Mccarthy',
    'position': 0,
    state: 'NV',
  },
  {
    'name': 'Alexander Myers',
    'position': 1,
    state: 'OK',
  },
  {
    'name': 'Estrada Albert',
    'position': -1,
    state: 'ND',
  },
  {
    'name': 'Genevieve Hull',
    'position': 1,
    state: 'MT',
  },
  {
    'name': 'Stuart Collier',
    'position': -2,
    state: 'AL',
  },
  {
    'name': 'Katharine Bullock',
    'position': 0,
    state: 'OH',
  },
  {
    'name': 'Gill Giles',
    'position': 0,
    state: 'MO',
  },
  {
    'name': 'Drake Hayes',
    'position': 1,
    state: 'PA',
  },
  {
    'name': 'Taylor Richmond',
    'position': -2,
    state: 'OR',
  },
  {
    'name': 'Barrett Joseph',
    'position': -2,
    state: 'SC',
  },
  {
    'name': 'Strickland Barrera',
    'position': 2,
    state: 'RI',
  },
  {
    'name': 'Alice Pitts',
    'position': 1,
    state: 'VT',
  },
  {
    'name': 'Aimee Powell',
    'position': 2,
    state: 'WA',
  },
  {
    'name': 'Antoinette Conway',
    'position': -2,
    state: 'AZ',
  },
  {
    'name': 'Kane Hutchinson',
    'position': 2,
    state: 'AR',
  },
  {
    'name': 'Shannon Gordon',
    'position': 0,
    state: 'WV',
  },
  {
    'name': 'Queen Nash',
    'position': 2,
    state: 'ME',
  },
  {
    'name': 'Bell Owens',
    'position': 0,
    state: 'WI',
  },
  {
    'name': 'Susanna Gutierrez',
    'position': 2,
    state: 'PA',
  },
  {
    'name': 'Perez Gonzalez',
    'position': 0,
    state: 'MD',
  },
  {
    'name': 'Guy Kane',
    'position': 0,
    state: 'AR',
  },
  {
    'name': 'Maryellen Huff',
    'position': 0,
    state: 'AK',
  },
  {
    'name': 'Howard Serrano',
    'position': -2,
    state: 'ME',
  },
  {
    'name': 'Stevenson Leblanc',
    'position': -2,
    state: 'IN',
  },
  {
    'name': 'Monique Chase',
    'position': -1,
    state: 'HI',
  },
  {
    'name': 'Lina Moore',
    'position': 2,
    state: 'ND',
  },
  {
    'name': 'Elba Hunt',
    'position': 2,
    state: 'MN',
  },
  {
    'name': 'Vega Foley',
    'position': 1,
    state: 'DE',
  },
  {
    'name': 'Clara Russo',
    'position': -2,
    state: 'KS',
  },
  {
    'name': 'Roxie Robles',
    'position': 1,
    state: 'KY',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Pate Roth',
    'position': 0,
    state: 'NH',
  },
  {
    'name': 'Kris Woodard',
    'position': -2,
    state: 'OK',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Candy Head',
    'position': 2,
    state: 'IA',
  },
  {
    'name': 'Cervantes Faulkner',
    'position': -1,
    state: 'FL',
  },
  {
    'name': 'Frederick Allen',
    'position': 0,
    state: 'MI',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Woodward Walsh',
    'position': 1,
    state: 'IL',
  },
  {
    'name': 'Minerva Britt',
    'position': 0,
    state: 'ID',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Ila Forbes',
    'position': -1,
    state: 'MA',
  },
  {
    'name': 'Luna Morrow',
    'position': 2,
    state: 'NJ',
  },
  {
    'name': 'Eileen Holcomb',
    'position': 1,
    state: 'OH',
  },
  {
    'name': 'Jerri Rhodes',
    'position': -2,
    state: 'LA',
  },
  {
    'name': 'Atkins Martinez',
    'position': 1,
    state: 'MT',
  },
  {
    'name': 'Delacruz Wiggins',
    'position': -1,
    state: 'AL',
  },
  {
    'name': 'Joyce Bradley',
    'position': 1,
    state: 'OR',
  },
  {
    'name': 'Victoria Fitzpatrick',
    'position': -1,
    state: 'SC',
  },
  {
    'name': 'Clarissa Jennings',
    'position': 0,
    state: 'NV',
  },
  {
    'name': 'Gladys Vargas',
    'position': 2,
    state: 'GA',
  },
  {
    'name': 'Roberta Waters',
    'position': 0,
    state: 'VA',
  },
  {
    'name': 'Alisha Townsend',
    'position': -2,
    state: 'WA',
  },
  {
    'name': 'Burns Levy',
    'position': 0,
    state: 'WY',
  },
  {
    'name': 'Burks Clay',
    'position': 2,
    state: 'CA',
  },
  {
    'name': 'Carole Cline',
    'position': -2,
    state: 'CT',
  },
  {
    'name': 'June Thornton',
    'position': 2,
    state: 'AZ',
  },
  {
    'name': 'Beatrice Wood',
    'position': 0,
    state: 'VT',
  },
  {
    'name': 'Marion Salas',
    'position': 2,
    state: 'TN',
  },
  {
    'name': 'Sherri Berger',
    'position': -2,
    state: 'UT',
  },
  {
    'name': 'Jill Riley',
    'position': 2,
    state: 'CO',
  },
  {
    'name': 'Ebony Dawson',
    'position': -2,
    state: 'AK',
  },
  {
    'name': 'Lana Dickerson',
    'position': -1,
    state: 'AR',
  },
  {
    'name': 'Eula Lawson',
    'position': 1,
    state: 'CA',
  },
  {
    'name': 'Mccoy Larsen',
    'position': -2,
    state: 'WI',
  },
  {
    'name': 'Nanette Macias',
    'position': 2,
    state: 'NM',
  },
  {
    'name': 'Conner Mayo',
    'position': -1,
    state: 'NE',
  },
  {
    'name': 'Reeves Puckett',
    'position': -1,
    state: 'SD',
  },
  {
    'name': 'Pat Frazier',
    'position': -2,
    state: 'TN',
  },
  {
    'name': 'Rebecca Cardenas',
    'position': 2,
    state: 'NY',
  },
  {
    'name': 'Palmer Joyce',
    'position': -1,
    state: 'NY',
  },
  {
    'name': 'Darcy Erickson',
    'position': -1,
    state: 'NC',
  },
  {
    'name': 'Mejia Hurley',
    'position': 1,
    state: 'NC',
  },
  {
    'name': 'Sandra Chase',
    'position': 1,
    state: 'MS',
  },
  {
    'name': 'Oliver Dominguez',
    'position': 1,
    state: 'MS',
  },
  {
    'name': 'Lynn Acosta',
    'position': 2,
    state: 'TX',
  },
  {
    'name': 'Katherine Trujillo',
    'position': -1,
    state: 'TX',
  },
  {
    'name': 'Rowe Gross',
    'position': 0,
    state: 'KY',
  },
  {
    'name': 'Olsen Daugherty',
    'position': 0,
    state: 'IN',
  },
  {
    'name': 'Garner Francis',
    'position': 2,
    state: 'FL',
  },
  {
    'name': 'Cherry Farmer',
    'position': 1,
    state: 'KS',
  },
  {
    'name': 'Fields Gates',
    'position': 1,
    state: 'MS',
  },
  {
    'name': 'Anita Paul',
    'position': 0,
    state: 'LA',
  },
  {
    'name': 'Kristina Holcomb',
    'position': -1,
    state: 'CO',
  },
  {
    'name': 'Lara Clay',
    'position': 1,
    state: 'ID',
  },
  {
    'name': 'Leblanc Schmidt',
    'position': 0,
    state: 'WY',
  },
  {
    'name': 'Tami Sharpe',
    'position': 0,
    state: 'IA',
  },
  {
    'name': 'Melissa Adams',
    'position': -1,
    state: 'DE',
  },
  {
    'name': 'Larsen Miranda',
    'position': 2,
    state: 'ME',
  },
  {
    'name': 'Pauline Cook',
    'position': 0,
    state: 'MI',
  },
  {
    'name': 'Howe Le',
    'position': 0,
    state: 'MN',
  },
  {
    'name': 'Haney Cooke',
    'position': 2,
    state: 'NE',
  },
  {
    'name': 'Lilian Wilder',
    'position': 1,
    state: 'NJ',
  },
  {
    'name': 'Vaughan Carter',
    'position': 2,
    state: 'NH',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Mccormick Moody',
    'position': 1,
    state: 'SD',
  },
  {
    'name': 'Lynda Bradford',
    'position': -2,
    state: 'UT',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Frank Hinton',
    'position': 2,
    state: 'RI',
  },
  {
    'name': 'Mathis Payne',
    'position': -2,
    state: 'MA',
  },
  {
    'name': 'Burks Barron',
    'position': 0,
    state: 'MD',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Morales French',
    'position': -1,
    state: 'CT',
  },
  {
    'name': 'Aurelia Hendrix',
    'position': 1,
    state: 'HI',
  },
  {
    'name': 'Monique Mclean',
    'position': 0,
    state: 'GA',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Lowery Guthrie',
    'position': 0,
    state: 'IL',
  },
  {
    'name': 'Kendra Guy',
    'position': -2,
    state: 'NM',
  },
  {
    'name': 'Angelita Kirby',
    'position': 0,
    state: 'NV',
  },
  {
    'name': 'Daugherty Hall',
    'position': -1,
    state: 'OK',
  },
  {
    'name': 'Hansen Hudson',
    'position': -2,
    state: 'ND',
  },
  {
    'name': 'Sharon Huber',
    'position': 1,
    state: 'MT',
  },
  {
    'name': 'Amber Saunders',
    'position': -1,
    state: 'AL',
  },
  {
    'name': 'Petty Johnston',
    'position': -2,
    state: 'OH',
  },
  {
    'name': 'Schneider Avila',
    'position': 0,
    state: 'MO',
  },
  {
    'name': 'Holland Garza',
    'position': 1,
    state: 'PA',
  },
  {
    'name': 'Jean Green',
    'position': 0,
    state: 'OR',
  },
  {
    'name': 'Mollie Huff',
    'position': -1,
    state: 'SC',
  },
  {
    'name': 'Delia Fleming',
    'position': 1,
    state: 'RI',
  },
  {
    'name': 'Lidia Wyatt',
    'position': 2,
    state: 'VT',
  },
  {
    'name': 'Lacey Newton',
    'position': -2,
    state: 'WA',
  },
  {
    'name': 'Sims Martinez',
    'position': 0,
    state: 'AZ',
  },
  {
    'name': 'Julie Waller',
    'position': -1,
    state: 'AR',
  },
  {
    'name': 'Nettie Dunn',
    'position': -2,
    state: 'WV',
  },
  {
    'name': 'Latisha Patterson',
    'position': 2,
    state: 'ME',
  },
  {
    'name': 'Lowe Rutledge',
    'position': 2,
    state: 'WI',
  },
  {
    'name': 'Barlow Heath',
    'position': 2,
    state: 'PA',
  },
  {
    'name': 'Ava Whitfield',
    'position': 1,
    state: 'MD',
  },
  {
    'name': 'Alta Bentley',
    'position': 1,
    state: 'AR',
  },
  {
    'name': 'Dillard Myers',
    'position': -1,
    state: 'AK',
  },
  {
    'name': 'Serena Russo',
    'position': -1,
    state: 'ME',
  },
  {
    'name': 'Kayla Harper',
    'position': -1,
    state: 'IN',
  },
  {
    'name': 'Fulton Wooten',
    'position': -2,
    state: 'HI',
  },
  {
    'name': 'Caroline Henson',
    'position': -2,
    state: 'ND',
  },
  {
    'name': 'Pamela Cabrera',
    'position': 2,
    state: 'MN',
  },
  {
    'name': 'Trisha Campos',
    'position': -2,
    state: 'DE',
  },
  {
    'name': 'Alma Lancaster',
    'position': 0,
    state: 'KS',
  },
  {
    'name': 'Golden Arnold',
    'position': -2,
    state: 'KY',
  },
  {
    'name': 'Bennett Case',
    'position': -2,
    state: 'NH',
  },
  {
    'name': 'Williamson Cole',
    'position': 1,
    state: 'OK',
  },
  {
    'name': 'Carolyn Hickman',
    'position': -1,
    state: 'IA',
  },
  {
    'name': 'Kent Tillman',
    'position': -2,
    state: 'FL',
  },
  {
    'name': 'Rosie Burns',
    'position': 0,
    state: 'MI',
  },
  {
    'name': 'Michelle Chan',
    'position': 1,
    state: 'IL',
  },
  {
    'name': 'Joseph Randall',
    'position': 1,
    state: 'ID',
  },
  {
    'name': 'Keri Harrington',
    'position': 1,
    state: 'MA',
  },
  {
    'name': 'Pearson Higgins',
    'position': 2,
    state: 'NJ',
  },
  {
    'name': 'Soto Hester',
    'position': -2,
    state: 'OH',
    info: 'תג קאנוניקל לכל עמוד באתר, הכתובת חייבת להיות מקורית (ללא פרמטרים) אבסולוטית ולא רלטיבית.'
  },
  {
    'name': 'Nadine Kennedy',
    'position': 2,
    state: 'LA',
  },
  {
    'name': 'Warner Martin',
    'position': 1,
    state: 'MT',
  },
  {
    'name': 'Bray Rasmussen',
    'position': 1,
    state: 'AL',
  },
  {
    'name': 'Savage Juarez',
    'position': 1,
    state: 'OR',
  },
  {
    'name': 'Sheree Byers',
    'position': 2,
    state: 'SC',
  },
  {
    'name': 'Sandy Hernandez',
    'position': 2,
    state: 'NV',
  },
  {
    'name': 'Margo Howard',
    'position': 0,
    state: 'GA',
  },
  {
    'name': 'Shelia Abbott',
    'position': 0,
    state: 'VA',
  },
  {
    'name': 'Peterson Yates',
    'position': 0,
    state: 'WA',
  },
  {
    'name': 'Saundra Collins',
    'position': 2,
    state: 'WY',
  },
  {
    'name': 'Dixon Williamson',
    'position': 2,
    state: 'CA',
  },
  {
    'name': 'Yang Glenn',
    'position': -2,
    state: 'CT',
  },
  {
    'name': 'Stephens Sparks',
    'position': 2,
    state: 'AZ',
  },
  {
    'name': 'Velma Cervantes',
    'position': -2,
    state: 'VT',
  },
  {
    'name': 'Kelley Larsen',
    'position': 1,
    state: 'TN',
  },
  {
    'name': 'Tanya Clements',
    'position': 1,
    state: 'UT',
  },
  {
    'name': 'Galloway Mcfadden',
    'position': 2,
    state: 'CO',
  },
  {
    'name': 'Goff Lucas',
    'position': 1,
    state: 'AK',
  },
  {
    'name': 'Patti Diaz',
    'position': -2,
    state: 'AR',
  },
  {
    'name': 'Kasey Daniels',
    'position': -2,
    state: 'CA',
  },
  {
    'name': 'Vicky Sanders',
    'position': 0,
    state: 'WI',
  },
  {
    'name': 'Barker Perez',
    'position': -1,
    state: 'NM',
  },
  {
    'name': 'Thompson Benson',
    'position': -2,
    state: 'NE',
  },
  {
    'name': 'Sosa Rojas',
    'position': 0,
    state: 'SD',
  },
  {
    'name': 'Ashley Montoya',
    'position': -1,
    state: 'TN',
  },
  {
    'name': 'Harris Whitney',
    'position': 0,
    state: 'NY',
  },
  {
    'name': 'Sandoval Burton',
    'position': 0,
    state: 'NY',
  },
  {
    'name': 'Day Reeves',
    'position': 2,
    state: 'NC',
  },
  {
    'name': 'James Garcia',
    'position': 0,
    state: 'NC',
  },
  {
    'name': 'Gayle Luna',
    'position': -2,
    state: 'MS',
  },
  {
    'name': 'Lambert Lancaster',
    'position': 1,
    state: 'MS',
  },
  {
    'name': 'Angel Duran',
    'position': 2,
    state: 'TX',
  },
  {
    'name': 'Aurora Pierce',
    'position': 2,
    state: 'TX',
  },
  {
    'name': 'Daisy Klein',
    'position': 0,
    state: 'KY',
  },
  {
    'name': 'Paulette Mcguire',
    'position': -2,
    state: 'IN',
  },
  {
    'name': 'Rae Boyer',
    'position': -1,
    state: 'FL',
  },
  {
    'name': 'Jasmine Lamb',
    'position': 2,
    state: 'KS',
  },
  {
    'name': 'Patrica Winters',
    'position': -2,
    state: 'MS',
  },
  {
    'name': 'Cindy Hyde',
    'position': 2,
    state: 'LA',
  },
  {
    'name': 'Blanchard Clark',
    'position': 1,
    state: 'CO',
  },
  {
    'name': 'Martina Obrien',
    'position': 1,
    state: 'ID',
  },
  {
    'name': 'Warner Fulton',
    'position': 0,
    state: 'WY',
  },
  {
    'name': 'Holder Mejia',
    'position': 1,
    state: 'IA',
  },
  {
    'name': 'Carpenter Floyd',
    'position': 1,
    state: 'DE',
  },
  {
    'name': 'Pansy Barnett',
    'position': -2,
    state: 'ME',
  },
  {
    'name': 'Ingram Coffey',
    'position': 0,
    state: 'MI',
  },
  {
    'name': 'Hooper Day',
    'position': 2,
    state: 'MN',
  },
  {
    'name': 'Annette Booth',
    'position': -2,
    state: 'NE',
  },
  {
    'name': 'Camacho Ballard',
    'position': 2,
    state: 'NJ',
  },
  {
    'name': 'Greene Marsh',
    'position': 1,
    state: 'NH',
  },
  {
    'name': 'Huber Oliver',
    'position': 1,
    state: 'SD',
  },
  {
    'name': 'Sheila Flynn',
    'position': 1,
    state: 'UT',
  },
  {
    'name': 'Angeline Dejesus',
    'position': 1,
    state: 'RI',
  },
  {
    'name': 'Salazar Sandoval',
    'position': -1,
    state: 'MA',
  },
  {
    'name': 'Sexton Potts',
    'position': -1,
    state: 'MD',
  },
  {
    'name': 'Suarez Stephenson',
    'position': 2,
    state: 'CT',
  },
  {
    'name': 'Janell Watson',
    'position': -1,
    state: 'HI',
  },
  {
    'name': 'Page Mckay',
    'position': -2,
    state: 'GA',
  },
  {
    'name': 'Addie Vega',
    'position': -2,
    state: 'IL',
  },
  {
    'name': 'Macdonald Guerrero',
    'position': 1,
    state: 'NM',
  },
  {
    'name': 'Deloris Wilson',
    'position': -1,
    state: 'NV',
  },
  {
    'name': 'Renee Sutton',
    'position': 2,
    state: 'OK',
  },
  {
    'name': 'Emilia Gamble',
    'position': 2,
    state: 'ND',
  },
  {
    'name': 'Hancock Christian',
    'position': -1,
    state: 'MT',
  },
  {
    'name': 'Christina Daniel',
    'position': -2,
    state: 'AL',
  },
  {
    'name': 'King Skinner',
    'position': 1,
    state: 'OH',
  },
  {
    'name': 'Ida Dalton',
    'position': 0,
    state: 'MO',
  },
  {
    'name': 'Loretta Robertson',
    'position': 2,
    state: 'PA',
  },
  {
    'name': 'Rhoda Mathews',
    'position': 2,
    state: 'OR',
  },
  {
    'name': 'Adela Williams',
    'position': 1,
    state: 'SC',
  },
  {
    'name': 'Shauna Estes',
    'position': 0,
    state: 'RI',
  },
  {
    'name': 'Clarice Joyner',
    'position': 0,
    state: 'VT',
  },
  {
    'name': 'Rene Maldonado',
    'position': 1,
    state: 'WA',
  },
  {
    'name': 'Amie Alford',
    'position': -1,
    state: 'AZ',
  },
  {
    'name': 'Angelica Bowers',
    'position': -1,
    state: 'AR',
  },
  {
    'name': 'Erickson Leon',
    'position': 0,
    state: 'WV',
  },
  {
    'name': 'Abbott Cook',
    'position': 1,
    state: 'ME',
  },
  {
    'name': 'Barker Grimes',
    'position': 2,
    state: 'WI',
  },
  {
    'name': 'Gross Atkins',
    'position': 0,
    state: 'PA',
  },
  {
    'name': 'Barlow Blevins',
    'position': -2,
    state: 'MD',
  },
  {
    'name': 'Gertrude Haynes',
    'position': -1,
    state: 'AR',
  },
  {
    'name': 'Richard Collier',
    'position': 1,
    state: 'AK',
  },
  {
    'name': 'Cora Little',
    'position': 2,
    state: 'ME',
  },
  {
    'name': 'Avery Yates',
    'position': -2,
    state: 'IN',
  },
  {
    'name': 'John Mays',
    'position': -2,
    state: 'HI',
  },
  {
    'name': 'Sykes Nguyen',
    'position': 2,
    state: 'ND',
  },
  {
    'name': 'Caldwell Nunez',
    'position': -1,
    state: 'MN',
  },
  {
    'name': 'Dorothea Owens',
    'position': 2,
    state: 'DE',
  },
  {
    'name': 'Sims Chen',
    'position': 0,
    state: 'KS',
  },
  {
    'name': 'Case Morrison',
    'position': 0,
    state: 'KY',
  },
  {
    'name': 'Cook Bryan',
    'position': 2,
    state: 'NH',
  },
  {
    'name': 'Phillips Rich',
    'position': -1,
    state: 'OK',
  },
  {
    'name': 'Bright Frye',
    'position': 2,
    state: 'IA',
  },
  {
    'name': 'Kelly Holmes',
    'position': 0,
    state: 'FL',
  },
  {
    'name': 'Kasey Farley',
    'position': -2,
    state: 'MI',
  },
  {
    'name': 'Michele Battle',
    'position': -1,
    state: 'IL',
  },
  {
    'name': 'Fanny Nash',
    'position': 1,
    state: 'ID',
  },
  {
    'name': 'Nina Reed',
    'position': -1,
    state: 'MA',
  },
  {
    'name': 'Guerrero Merrill',
    'position': -2,
    state: 'NJ',
  },
  {
    'name': 'Meadows Barber',
    'position': 2,
    state: 'OH',
  },
  {
    'name': 'Adriana Mayer',
    'position': 0,
    state: 'LA',
  },
  {
    'name': 'Allyson Mason',
    'position': -2,
    state: 'MT',
  },
  {
    'name': 'Holland Pugh',
    'position': -2,
    state: 'AL',
  },
  {
    'name': 'Janet Stein',
    'position': 0,
    state: 'OR',
  },
  {
    'name': 'Beck Greene',
    'position': -1,
    state: 'SC',
  },
  {
    'name': 'Baird Hammond',
    'position': 0,
    state: 'NV',
  },
  {
    'name': 'Bates Cote',
    'position': 1,
    state: 'GA',
  },
  {
    'name': 'Lorraine Shields',
    'position': -2,
    state: 'VA',
  },
  {
    'name': 'Luz Mccall',
    'position': 1,
    state: 'WA',
  },
  {
    'name': 'Guthrie Moody',
    'position': 2,
    state: 'WY',
  },
  {
    'name': 'Mercer Nolan',
    'position': 1,
    state: 'CA',
  },
  {
    'name': 'Louella Rogers',
    'position': -1,
    state: 'CT',
  },
  {
    'name': 'Berta Carter',
    'position': 2,
    state: 'AZ',
  },
  {
    'name': 'Bradley Santos',
    'position': 1,
    state: 'VT',
  },
  {
    'name': 'Hendricks Waller',
    'position': 1,
    state: 'TN',
  },
  {
    'name': 'Helen Faulkner',
    'position': 2,
    state: 'UT',
  },
  {
    'name': 'Combs Steele',
    'position': -2,
    state: 'CO',
  },
  {
    'name': 'Hopkins Ashley',
    'position': 1,
    state: 'AK',
  },
  {
    'name': 'Ruiz Romero',
    'position': 1,
    state: 'AR',
  },
  {
    'name': 'Wheeler Briggs',
    'position': -2,
    state: 'CA',
  },
  {
    'name': 'Sampson Lambert',
    'position': -1,
    state: 'WI',
  },
  {
    'name': 'Strickland Grant',
    'position': 1,
    state: 'NM',
  },
  {
    'name': 'Ella Holt',
    'position': -1,
    state: 'NE',
  },
  {
    'name': 'Garrett Cantu',
    'position': 1,
    state: 'SD',
  },
  {
    'name': 'June Holcomb',
    'position': 2,
    state: 'TN',
  },
  {
    'name': 'Monica Moody',
    'position': -2,
    state: 'NY',
  },
  {
    'name': 'Virgie Shields',
    'position': 1,
    state: 'NY',
  },
  {
    'name': 'Lacey Coleman',
    'position': -2,
    state: 'NC',
  },
  {
    'name': 'Jane Kidd',
    'position': -1,
    state: 'NC',
  },
  {
    'name': 'Patterson Little',
    'position': -2,
    state: 'MS',
  },
  {
    'name': 'Bailey Pickett',
    'position': -1,
    state: 'MS',
  },
  {
    'name': 'Debbie Atkinson',
    'position': -1,
    state: 'TX',
  },
  {
    'name': 'Atkinson Slater',
    'position': 1,
    state: 'TX',
  },
  {
    'name': 'Kirby Graham',
    'position': -1,
    state: 'KY',
  },
  {
    'name': 'Andrea Jensen',
    'position': -1,
    state: 'IN',
  },
  {
    'name': 'Young Delacruz',
    'position': -2,
    state: 'FL',
  },
  {
    'name': 'Brandy Heath',
    'position': -1,
    state: 'KS',
  },
  {
    'name': 'Thomas Wong',
    'position': 0,
    state: 'MS',
  },
  {
    'name': 'Cox Warren',
    'position': -2,
    state: 'LA',
  },
  {
    'name': 'Lindsay Arnold',
    'position': -2,
    state: 'CO',
  },
  {
    'name': 'Hoover Brown',
    'position': 0,
    state: 'ID',
  },
  {
    'name': 'Little Grant',
    'position': 2,
    state: 'WY',
  },
  {
    'name': 'Rollins Byrd',
    'position': 2,
    state: 'IA',
  },
  {
    'name': 'Olive Hill',
    'position': 0,
    state: 'DE',
  },
  {
    'name': 'Hamilton Carver',
    'position': 0,
    state: 'ME',
  },
  {
    'name': 'Burt Garner',
    'position': 0,
    state: 'MI',
  },
  {
    'name': 'Kim Mckay',
    'position': -1,
    state: 'MN',
  },
  {
    'name': 'Peterson Bolton',
    'position': -1,
    state: 'NE',
  },
  {
    'name': 'Abby Adams',
    'position': 1,
    state: 'NJ',
  },
  {
    'name': 'Megan Fleming',
    'position': 2,
    state: 'NH',
  },
  {
    'name': 'Burton Stewart',
    'position': 1,
    state: 'SD',
  },
  {
    'name': 'Erica Contreras',
    'position': -1,
    state: 'UT',
  },
  {
    'name': 'Gonzalez Boyd',
    'position': 1,
    state: 'RI',
  },
  {
    'name': 'Weeks Humphrey',
    'position': 2,
    state: 'MA',
  },
  {
    'name': 'Essie Sawyer',
    'position': 2,
    state: 'MD',
  },
  {
    'name': 'Ina Madden',
    'position': 2,
    state: 'CT',
  },
  {
    'name': 'Mitchell Mays',
    'position': 1,
    state: 'HI',
  },
  {
    'name': 'Rush Spencer',
    'position': -2,
    state: 'GA',
  },
  {
    'name': 'Mckinney Burke',
    'position': 2,
    state: 'IL',
  },
  {
    'name': 'Mack Hardy',
    'position': 1,
    state: 'TX'
  }
]
