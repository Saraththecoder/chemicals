// Sri Viranjaneya (SV) Industrial Watertech & Services - Local SEO Configuration

const businessId = 'https://svindustrialwatertech.com/#business';

const baseBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': businessId,
  'name': 'Sri Viranjaneya (SV) Industrial Watertech & Services',
  'alternateName': 'SV Industrial Watertech & Services',
  'url': 'https://svindustrialwatertech.com/',
  'logo': 'https://svindustrialwatertech.com/logo.png',
  'image': 'https://svindustrialwatertech.com/logo.png',
  'description': 'Sri Viranjaneya (SV) Industrial Watertech & Services brings over 21 years of expertise in industrial water treatment chemicals, descaling, boiler cleaning, and cooling tower maintenance in Hyderabad, Telangana.',
  'telephone': '+919390477702',
  'email': 'svindustrialwatertech@gmail.com',
  'priceRange': '$$',
  'address': {
    '@type': 'PostalAddress',
    'streetAddress': 'E.W.S-II, Q.No.19, East MCH Colony, Parsigutta, Near Hanuman Temple, Ramnagar, Musheerabad',
    'addressLocality': 'Hyderabad',
    'addressRegion': 'Telangana',
    'postalCode': '500020',
    'addressCountry': 'IN'
  },
  'geo': {
    '@type': 'GeoCoordinates',
    'latitude': 17.4190,
    'longitude': 78.5085
  },
  'openingHoursSpecification': {
    '@type': 'OpeningHoursSpecification',
    'dayOfWeek': [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    'opens': '09:00',
    'closes': '18:00'
  },
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+919390477702',
    'contactType': 'customer service',
    'areaServed': 'IN',
    'availableLanguage': ['en', 'telugu', 'hindi']
  }
};

export const SEO_TITLES = {
  '/': 'SV Industrial Watertech & Services | Water Treatment & Descaling Hyderabad',
  '/about': 'About Us | Sri Viranjaneya Industrial Watertech & Services',
  '/services': 'Industrial Water Treatment Services & Descaling | Hyderabad',
  '/chemicals': 'Water Treatment Chemicals - Boiler, Cooling Tower, RO | Hyderabad',
  '/industries': 'Industries Served - Power, Pharma, Food, Chemical | Telangana',
  '/contact': 'Contact Us & Site Audit Request | SV Industrial Watertech',
  '/estimate': 'Instant Project Cost & Chemical Requirement Cost Estimator',
};

export const SEO_DESCRIPTIONS = {
  '/': 'Sri Viranjaneya (SV) Industrial Watertech & Services — 21+ years of expert water treatment chemical supply, heat exchanger descaling, boiler treatment, and cooling tower solutions in Hyderabad, Telangana.',
  '/about': 'Learn about Sri Viranjaneya (SV) Industrial Watertech & Services. Serving Hyderabad and Telangana industrial utility plants with water treatment excellence since 2002.',
  '/services': 'Professional descaling and maintenance services in Hyderabad. We scale-clean evaporative condensers, shell & tube condensers, plate heat exchangers (PHE), and turbine generators.',
  '/chemicals': 'High-performance boiler water treatment chemicals, cooling tower chemicals, and RO antiscalants/membrane cleaners. Tailored formulations for Hyderabad industries.',
  '/industries': 'Reliable water treatment solutions serving Power Generation, Pharmaceuticals, Food & Beverage, Chemical Processing, and HVAC utilities across Telangana and Andhra Pradesh.',
  '/contact': 'Reach SV Industrial Watertech at +91 93904 77702 or visit us in Ramnagar, Musheerabad, Hyderabad. Fill out our online form to request a free site assessment.',
  '/estimate': 'Get a dynamic pricing estimate for your industrial descaling and chemical treatment needs instantly. Input your equipment configuration and capacity details.',
};

export const SEO_KEYWORDS = {
  '/': 'industrial water treatment Hyderabad, descaling services India, heat exchanger cleaning Telangana, boiler chemicals supplier Secunderabad, cooling tower treatment Hyderabad, RO chemicals manufacturer India, water treatment company Telangana, Sri Viranjaneya Industrial Watertech, SV Industrial Watertech, descaling chemical suppliers Hyderabad, HVAC descaling contractors South India, industrial chemical cleaning Hyderabad, Jeedimetla industrial area, Balanagar industrial area, Cherlapally industrial area, Patancheru water treatment, pharma city Hyderabad water treatment, industrial water filtration India',
  '/about': 'about Sri Viranjaneya, industrial water treatment company Hyderabad, water treatment experts Telangana, chemical descaling history India, SV industrial watertech, water treatment experience India, industrial utility maintenance Hyderabad, water chemicals supplier Telangana, Secunderabad water treatment consultants, Telugu states water treatment company',
  '/services': 'evaporative condenser descaling Hyderabad, shell and tube condenser cleaning Telangana, heat exchanger descaling India, plate heat exchanger maintenance Secunderabad, generator cooler cleaning, descaling services Patancheru, PHE descaling contractors Hyderabad, industrial condenser cleaning India, boiler descaling service Telangana, chiller descaling Hyderabad, cooling coil cleaning India, chemical circulation cleaning Hyderabad, Jeedimetla industrial descaling, Cherlapally descaling services',
  '/chemicals': 'boiler treatment chemicals Hyderabad, cooling tower scale inhibitor India, RO antiscalants supplier Telangana, RO membrane cleaner Hyderabad, industrial cleaning chemicals India, pH booster chemical Hyderabad, oxygen scavenger chemicals Telangana, biocide chemical manufacturers India, descaling acid inhibitors Hyderabad, corrosion inhibitor chemical India, Secunderabad water treatment chemicals, Patancheru chemical suppliers',
  '/industries': 'power plant water treatment India, pharmaceutical water chemicals Hyderabad, HVAC water cleaning Telangana, manufacturing utility chemicals India, food industry descaling Hyderabad, Telangana industries water treatment, Medchal industrial area, Patancheru pharma chemicals, Guntur industrial water, Visakhapatnam water treatment service, Andhra Pradesh industrial descaling, commercial HVAC chemicals Hyderabad',
  '/contact': 'contact water treatment Hyderabad, Musheerabad water treatment company, Parsigutta descaling services, phone number SV industrial watertech, email SV watertech, address Ramnagar Hyderabad, water treatment office Secunderabad, request site audit Hyderabad, chemical descaling quote Telangana, Hyderabad water treatment contact number',
  '/estimate': 'water treatment cost calculator India, descaling service price estimator Hyderabad, chemical cleaning price Telangana, HVAC descaling budget calculator, plate heat exchanger descaling cost India, boiler cleaning cost estimator Hyderabad, chemical requirement calculator India',
};

export const SEO_SCHEMAS = {
  '/': baseBusinessSchema,
  '/about': {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'About Us - Sri Viranjaneya Industrial Watertech & Services',
    'description': 'History and overview of Sri Viranjaneya (SV) Industrial Watertech & Services, supplying water chemicals and cleaning utilities for 21+ years in Hyderabad.',
    'url': 'https://svindustrialwatertech.com/about',
    'mainEntity': baseBusinessSchema
  },
  '/services': {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Sri Viranjaneya Water Treatment & Descaling Services',
    'description': 'Specialized technical descaling and chemical cleaning services offered by SV Industrial Watertech in Hyderabad, Telangana.',
    'url': 'https://svindustrialwatertech.com/services',
    'numberOfItems': 10,
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'item': {
          '@type': 'Service',
          'name': 'Evaporative Condenser Chemicals & Descaling',
          'description': 'Advanced chemical descaling and treatment to restore peak thermal performance of evaporative condensers.',
          'provider': { '@id': businessId }
        }
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'item': {
          '@type': 'Service',
          'name': 'Shell & Tube Condensers Descaling',
          'description': 'Scale removal from shell and tube condenser units, restoring water velocity and efficiency.',
          'provider': { '@id': businessId }
        }
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'item': {
          '@type': 'Service',
          'name': 'Cooling Tower Chemicals Treatment',
          'description': 'Formulations and maintenance programs to combat corrosion, scale, and organic fouling in cooling towers.',
          'provider': { '@id': businessId }
        }
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'item': {
          '@type': 'Service',
          'name': 'RO Chemicals Treatment',
          'description': 'Reverse osmosis membrane cleaners and antiscalants to increase plant recovery and membrane lifespan.',
          'provider': { '@id': businessId }
        }
      },
      {
        '@type': 'ListItem',
        'position': 5,
        'item': {
          '@type': 'Service',
          'name': 'Heat Exchanger Descaling',
          'description': 'Removal of mineral scales from plate and frame (PHE) or shell type heat exchangers.',
          'provider': { '@id': businessId }
        }
      }
    ]
  },
  '/chemicals': {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'name': 'Water Treatment Chemicals Portfolio',
    'description': 'Industrial water treatment chemical formulations manufactured and supplied by SV Industrial Watertech in Hyderabad.',
    'url': 'https://svindustrialwatertech.com/chemicals',
    'numberOfItems': 4,
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'item': {
          '@type': 'Product',
          'name': 'Boiler Water Treatment Chemicals',
          'description': 'Scale and corrosion inhibitors, pH boosters, and oxygen scavengers for low, medium, and high-pressure boilers.',
          'brand': { '@type': 'Brand', 'name': 'SV Industrial' }
        }
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'item': {
          '@type': 'Product',
          'name': 'Cooling Tower Water Chemicals',
          'description': 'Organophosphorus compounds, zinc-based inhibitors, and broad-spectrum biocides for algae/slime control.',
          'brand': { '@type': 'Brand', 'name': 'SV Industrial' }
        }
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'item': {
          '@type': 'Product',
          'name': 'Reverse Osmosis (RO) Membrane Chemicals',
          'description': 'High-performance antiscalants (silica, carbonate, sulfate inhibitors) and acid/alkaline cleaners.',
          'brand': { '@type': 'Brand', 'name': 'SV Industrial' }
        }
      }
    ]
  },
  '/contact': {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact Sri Viranjaneya Industrial Watertech & Services',
    'description': 'Get in touch with us for site audits, chemical supply details, or service scheduling in Hyderabad.',
    'url': 'https://svindustrialwatertech.com/contact',
    'mainEntity': baseBusinessSchema
  },
  '/estimate': {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Service Cost Estimator - SV Industrial Watertech',
    'description': 'Calculate estimate budgets and chemical requirements for descaling service projects online.',
    'url': 'https://svindustrialwatertech.com/estimate',
    'mainEntity': baseBusinessSchema
  }
};
