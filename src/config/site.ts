// SINGLE SOURCE OF TRUTH FOR ALLIED ELECTRIC VEHICLES
export const SITE = {
  name: 'ALLIED ELECTRIC VEHICLES',
  legalEntity: 'ALLIED FORKLIFTS PTY LTD',
  abn: '66 060 256 377',
  gstRegistered: true,
  tagline: "Australia's Premier Authorized Reseller & Supplier of Leading Electric Bikes, Utility Carts & Heavy-Duty E-Vehicles",
  domain: 'alliedelectricvehicles.com.au',
  locale: 'en-AU',
  currency: 'AUD',
  primaryColor: '#0284C7', // Electric Blue / Teal
  accentColor: '#F59E0B',  // Industrial Gold / Amber
  darkHeader: '#0F172A',   // Deep Industrial Slate
  gscVerification: 'gsc-allied-ev-2026-verify-code',
  indexNowKey: 'alliedev2026indexnowkey',
  cartKey: 'allied-ev-cart-v1',
  reply: {
    brand: { primary: '#0284C7', headerDark: '#0F172A' },
    currency: { code: 'AUD', symbol: '$', locale: 'en-AU' },
    orderPrefix: 'AEV',
    headerTagline: 'ALLIED ELECTRIC VEHICLES · Perth HQ, Western Australia',
    dispatchLine: 'Aust-wide express freight dispatch from Perth Depot.',
    channels: { email: 'sales@alliedelectricvehicles.com.au', whatsapp: '61892488555' },
    paymentMethods: [
      {
        id: 'bank-transfer',
        label: 'Direct Bank Wire (EFT / Osko)',
        opening: 'Please transfer payment of {amount} referencing order number {ref} to our Allied Forklifts Pty Ltd bank account below:',
        closing: 'Once transferred, upload your payment remittance advice or reply to this email.'
      },
      {
        id: 'crypto-pay',
        label: 'Cryptocurrency (USDT / BTC) — 10% Discount Applied',
        opening: 'Your discounted payment total is {amount}. Please send the exact amount referencing {ref} to the wallet address:',
        closing: 'Transactions settle instantly on-chain. Please reply with your Transaction Hash (TxHash).'
      },
      {
        id: 'commercial-lease',
        label: 'Commercial Asset Finance / Equipment Leasing',
        opening: 'Your order draft of {amount} (ref {ref}) has been submitted to our asset finance team.',
        closing: 'A commercial finance representative will contact you within 2 business hours with settlement documentation.'
      }
    ]
  }
};

export const CONTACT = {
  email: 'sales@alliedelectricvehicles.com.au',
  phone: '+61 8 9248 8555',
  whatsapp: '61892488555',
  address: '12 Industrial Way, Malaga, Perth, WA 6090, Australia',
  hq: 'Perth, Western Australia',
  country: 'Australia',
  hours: 'Mon - Fri: 7:00 AM - 5:00 PM AWST'
};

export const SHOP = {
  minOrder: 300, // $300 AUD min order
  freeShippingThreshold: 0, // No free shipping
  shippingFee: 150, // Standard commercial freight base
  cryptoDiscount: 0.10, // 10% discount for alt payment / crypto / wire
  paymentMethods: ['bank-transfer', 'crypto-pay', 'commercial-lease'],
};

export const BRAND = {
  foundingYear: '2000',
  foundingLocation: 'Perth, Western Australia',
  description: 'ALLIED ELECTRIC VEHICLES (a division of ALLIED FORKLIFTS PTY LTD, ABN 66 060 256 377) is Australia\'s premier authorized reseller and fleet distributor of leading electric bikes, electric scooters, self-balancing EVs, and zero-emission personal mobility vehicles. We do not manufacture bikes; we source, inspect, stock, sell, and service genuine top-tier electric bikes, lithium battery packs, and spare parts across Western Australia and nationwide.',
  milestones: [
    { year: '2000', event: 'ALLIED FORKLIFTS PTY LTD established in Western Australia.' },
    { year: '2008', event: 'Launched dedicated zero-emission commercial EV & electric bike distribution division.' },
    { year: '2016', event: 'Surpassed 3,500 electric bikes & utility units supplied & serviced across Australia.' },
    { year: '2021', event: 'Introduced high-capacity 36V 15.6Ah & 48V Samsung/LG lithium power packs.' },
    { year: '2025', event: 'Expanded national fleet support centres in WA, NSW, QLD, and VIC.' }
  ],
  differentiation: [
    '25+ Years Equipment & Fleet Resale Heritage in WA (ABN 66 060 256 377)',
    'Authorized Supplier & Reseller of Genuine Top Global E-Bike Brands',
    '100% Pre-Delivery Assembly Inspection & Road-Ready Safety Testing',
    'High-Density 36V & 48V LG/Samsung Lithium Replacement Battery Stock',
    'Full Australian Standard Safety Compliance & On-Site Mobile Service Support'
  ],
  sameAs: [
    'https://www.abr.business.gov.au/ABN/View?id=66060256377'
  ]
};

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number; // AUD inc. GST
  category: string;
  subcategory: string;
  shortDescription: string;
  description: string;
  badge?: 'Best Seller' | 'Popular' | 'Step Through' | 'Folding' | 'Heavy Duty' | 'New Release' | 'Best Value' | 'Premium' | 'Sale';
  images: string[];
  specs: {
    voltage: string;
    batteryType: string;
    range: string;
    topSpeed: string;
    payloadCapacity: string;
    motorPower: string;
    chargeTime: string;
    dimensions: string;
    weight: string;
    warranty: string;
    towingCapacity?: string;
  };
  features: string[];
  featured?: boolean;
}

export interface Subcategory {
  slug: string;
  name: string;
  description: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  image: string;
  subcategories: Subcategory[];
}

// Taxonomy mirrors independentelectricbikes.com.au's category/subcategory structure
// (research: C:\Users\rtutc\Desktop\allied electric\01-taxonomy-map.md). Category/subcategory
// slugs and names match theirs; descriptions are Allied's own copy. Categories with no current
// Allied product show an empty shop grid until real stock is sourced for that line (never
// fabricate placeholder products — see docs/PROJECT.md).
export const CATEGORIES: Category[] = [
  {
    slug: 'electric-bikes',
    name: 'Electric Bikes',
    description: 'Urban commuter, cargo, mountain, folding and fat-tyre electric bikes for Australian conditions.',
    image: '/images/categories/category-electric-bikes.webp',
    subcategories: [
      { slug: 'urban-commuter-ebikes', name: 'Urban & Commuter E-Bikes', description: 'Everyday city commuter e-bikes for daily riding.' },
      { slug: 'cargo-family-ebikes', name: 'Cargo & Family E-Bikes', description: 'Heavy-duty cargo e-bikes for deliveries and family hauling.' },
      { slug: 'electric-mountain-bikes', name: 'Electric Mountain Bikes (eMTB)', description: 'Hardtail and full-suspension trail e-bikes for off-road riding.' },
      { slug: 'foldable-electric-bikes', name: 'Foldable E-Bikes', description: 'Compact folding e-bikes for cars, boats, caravans and small storage.' },
      { slug: 'fat-tyre-lifestyle-ebikes', name: 'Fat Tyre & Lifestyle E-Bikes', description: 'Wide-tyre cruisers for sand, gravel and relaxed lifestyle riding.' },
      { slug: 'electric-dirt-motorbikes', name: 'Electric Dirt & Motorbikes', description: 'Off-road electric dirt bikes and motorbike-style EVs.' },
      { slug: 'electric-mopeds', name: 'Electric Mopeds', description: 'Moped-style electric two-wheelers for urban riding.' },
      { slug: 'electric-tricycles', name: 'Electric Tricycles & Trikes', description: 'Stable three-wheel e-bikes for cargo and accessible riding.' }
    ]
  },
  {
    slug: 'electric-scooters',
    name: 'Electric Scooters',
    description: 'Commuter and long-range performance electric scooters.',
    image: '/images/categories/category-electric-scooters.webp',
    subcategories: [
      { slug: 'commuter-electric-scooters', name: 'Commuter E-Scooters', description: 'Lightweight, portable scooters for daily commuting.' },
      { slug: 'long-range-electric-scooters', name: 'Long-Range & Performance E-Scooters', description: 'High-capacity battery and motor scooters for distance and speed.' }
    ]
  },
  {
    slug: 'electric-skateboards',
    name: 'Electric Skateboards',
    description: 'Street, all-terrain, portable and self-balancing electric skateboards.',
    image: '/images/categories/category-electric-skateboards.webp',
    subcategories: [
      { slug: 'street-electric-skateboards', name: 'Street Electric Longboards', description: 'Smooth-surface longboards for street and campus riding.' },
      { slug: 'all-terrain-electric-skateboards', name: 'All-Terrain / Pneumatic Boards', description: 'Air-tyre boards built for rough surfaces and trails.' },
      { slug: 'mini-electric-skateboards', name: 'Mini & Portable Shortboards', description: 'Compact boards for easy carrying and storage.' },
      { slug: 'onewheel-style-boards', name: 'Onewheel-Style Boards', description: 'Single-wheel self-balancing electric boards.' }
    ]
  },
  {
    slug: 'self-balancing-ev',
    name: 'Self-Balancing EV',
    description: 'Electric unicycles, hoverboards and self-balancing accessories.',
    image: '/images/categories/category-self-balancing-ev.webp',
    subcategories: [
      { slug: 'electric-unicycles', name: 'Electric Unicycles (EUWs)', description: 'Single-wheel self-balancing electric unicycles.' },
      { slug: 'hoverboards', name: 'Hoverboards & Self-Balancing Boards', description: 'Two-wheel self-balancing boards for all ages.' },
      { slug: 'hoverboard-kart-attachments', name: 'Hoverboard Go-Kart Attachments', description: 'Kart conversion attachments for hoverboards.' }
    ]
  },
  {
    slug: 'kids-off-road-ev',
    name: 'Kids & Off-Road EV',
    description: 'Electric balance bikes, youth dirt bikes and electric go-karts.',
    image: '/images/categories/category-kids-off-road-ev.webp',
    subcategories: [
      { slug: 'electric-balance-bikes', name: 'Electric Balance Bikes', description: 'Entry-level electric bikes for young riders.' },
      { slug: 'youth-electric-dirt-bikes', name: 'Youth Electric Dirt & Pit Bikes', description: 'Off-road electric dirt bikes sized for younger riders.' },
      { slug: 'electric-go-karts', name: 'Electric Go-Karts & Drift Trikes', description: 'Electric go-karts and drift trikes for recreational riding.' }
    ]
  },
  {
    slug: 'mobility-scooters',
    name: 'Mobility & Assisted Living',
    description: 'Travel, folding and heavy-duty mobility scooters for assisted living.',
    image: '/images/categories/category-mobility-scooters.webp',
    subcategories: [
      { slug: 'travel-mobility-scooters', name: 'Travel & Folding Mobility Scooters', description: 'Lightweight, foldable mobility scooters for travel.' },
      { slug: 'heavy-duty-mobility-scooters', name: 'Heavy-Duty All-Terrain Mobility Scooters', description: 'Robust all-terrain mobility scooters for daily use.' }
    ]
  },
  {
    slug: 'electric-quad-bikes',
    name: 'Electric Quad Bikes & ATVs',
    description: 'Kids, adult and farm/utility electric quad bikes.',
    image: '/images/categories/category-electric-quad-bikes.webp',
    subcategories: [
      { slug: 'kids-electric-quads', name: 'Kids Electric Quad Bikes', description: 'Electric quad bikes sized for younger riders.' },
      { slug: 'adult-electric-quads', name: 'Adult Electric Quad Bikes & ATVs', description: 'Full-size electric ATVs for adult riders.' },
      { slug: 'farm-utility-quads', name: 'Farm & Utility Electric Quads', description: 'Utility-rated electric quads for farm and site work.' }
    ]
  },
  {
    slug: 'electric-water-sports',
    name: 'Electric Water Sports',
    description: 'Electric surfboards, jetboards and personal watercraft.',
    image: '/images/categories/category-electric-water-sports.webp',
    subcategories: [
      { slug: 'electric-surfboards', name: 'Electric Surfboards & Hydrofoils', description: 'Motorised surfboards and hydrofoil boards.' },
      { slug: 'electric-jetboards', name: 'Electric Jetboards', description: 'Stand-up electric jetboards.' },
      { slug: 'electric-jetskis', name: 'Electric Jet Skis & Personal Watercraft', description: 'Zero-emission personal watercraft.' }
    ]
  },
  {
    slug: 'batteries-parts-kits',
    name: 'Batteries, Parts & Kits',
    description: 'Replacement batteries, chargers, tyres, brakes and conversion kits for every category above.',
    image: '/images/categories/category-batteries-parts-kits.webp',
    subcategories: [
      { slug: 'ebike-batteries', name: 'E-Bike Batteries', description: 'Replacement lithium battery packs for electric bikes.' },
      { slug: 'ebike-chargers', name: 'E-Bike Chargers', description: 'Smart chargers for e-bike battery packs.' },
      { slug: 'scooter-batteries', name: 'Scooter, Board & Mobility Batteries', description: 'Replacement batteries for scooters, boards and mobility scooters.' },
      { slug: 'scooter-skate-chargers', name: 'Scooter, Skate & Kids Chargers', description: 'Chargers for scooters, skateboards and kids EVs.' },
      { slug: 'scooter-skate-parts', name: 'Scooter, Skate & Kids Parts', description: 'Spare parts for scooters, skateboards and kids EVs.' },
      { slug: 'kids-dirt-bike-batteries', name: 'Kids & Dirt Bike Batteries', description: 'Replacement batteries for youth and dirt bike EVs.' },
      { slug: 'tyres-tubes', name: 'Tyres & Tubes', description: 'Replacement tyres and inner tubes.' },
      { slug: 'brakes-rotors-pads', name: 'Brake Pads & Rotors', description: 'Replacement brake pads and rotors.' },
      { slug: 'mid-drive-conversion-kits', name: 'Mid-Drive Conversion Kits', description: 'Mid-drive motor kits to convert a standard bike.' },
      { slug: 'hub-motor-conversion-kits', name: 'Hub Motor Conversion Kits', description: 'Hub motor kits to convert a standard bike.' }
    ]
  },
  {
    slug: 'safety-security-carry',
    name: 'Safety, Locks & Carry',
    description: 'Helmets, lights, locks, racks and carry accessories for every category above.',
    image: '/images/categories/category-safety-security-carry.webp',
    subcategories: [
      { slug: 'helmets', name: 'Helmets', description: 'Safety helmets for riders of all ages.' },
      { slug: 'lights-visibility', name: 'Lights & Visibility', description: 'Front and rear lights for visibility and safety.' },
      { slug: 'jackets-hi-vis', name: 'Jackets & Hi-Vis', description: 'Protective and high-visibility riding apparel.' },
      { slug: 'u-d-locks', name: 'U-Locks & D-Locks', description: 'High-security U-locks and D-locks.' },
      { slug: 'folding-locks', name: 'Folding Locks', description: 'Compact folding security locks.' },
      { slug: 'chain-locks', name: 'Chain Locks', description: 'Heavy-duty chain security locks.' },
      { slug: 'racks-baskets', name: 'Racks & Baskets', description: 'Front and rear racks and baskets.' },
      { slug: 'panniers-bags', name: 'Panniers & Bags', description: 'Pannier bags and carry storage.' },
      { slug: 'child-seats', name: 'Child Seats', description: 'Child seats for family e-bike riding.' },
      { slug: 'phone-mounts', name: 'Phone Mounts', description: 'Handlebar phone mounts.' }
    ]
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'allied-byron-city',
    slug: 'allied-byron-electric-city-bike',
    name: 'ALLIED Byron Electric City Bike',
    price: 2290,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Seller',
    featured: true,
    shortDescription: 'Everyday urban commuter e-bike with 350W brushless motor, 36V 15.6Ah LG lithium battery and 27.5" puncture-resistant tyres.',
    description: 'The ALLIED Byron Electric City Bike is engineered for effortless daily commuting. Powered by a high-torque 350W rear brushless hub motor and an ultra-capacity 36V 15.6Ah LG lithium battery providing up to 70km range per charge. Equipped with Tektro disc brakes, Suntour front suspension fork, digital LCD screen with 5 pedal-assist levels, and Shimano Altus 7-speed gearing.',
    images: ['https://picsum.photos/id/1071/800/600', 'https://picsum.photos/id/1069/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 15.6Ah LG Lithium-ion',
      range: '70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '350W Brushless Rear Hub Motor',
      chargeTime: '4.5 Hours',
      dimensions: '1,820 x 640 x 1,050 mm',
      weight: '23.5 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      '36V 15.6Ah high density LG cell lithium removable battery pack',
      'Tektro mechanical disc brakes with electronic motor cut-off sensors',
      'Shimano Altus 7-speed gear system with optical gear display',
      'Suntour NEX front suspension fork with lockout',
      '27.5" Kenda puncture-resistant urban commuter tyres'
    ]
  },
  {
    id: 'allied-noosa-stepthrough',
    slug: 'allied-noosa-step-through-electric-city-bike',
    name: 'ALLIED Noosa Step-Through Electric City Bike',
    price: 2390,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Step Through',
    featured: true,
    shortDescription: 'Comfort-focused low step-frame e-bike with Tektro hydraulic disc brakes, 36V 15.6Ah battery and 70km range.',
    description: 'The ALLIED Noosa Step-Through combines elegant low-entry frame geometry with high-performance electric power. Features Tektro hydraulic disc brakes for effortless stopping power in all weather conditions, a plush spring-padded saddle, swept-back ergonomic handlebars, integrated front LED headlight, and rear pannier rack.',
    images: ['https://picsum.photos/id/1072/800/600', 'https://picsum.photos/id/1070/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 15.6Ah Removable LG Lithium',
      range: '70 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '120 kg max load',
      motorPower: '250W / 350W Brushless Motor',
      chargeTime: '4.5 Hours',
      dimensions: '1,800 x 650 x 1,080 mm',
      weight: '24 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Low step-through aluminium alloy frame for easy mounting',
      'Tektro hydraulic disc brakes with 180mm rotors',
      'Backlit digital LCD display with speed, odometer & battery level',
      'Integrated heavy-duty rear alloy luggage rack',
      'Front and rear integrated LED lights powered by main battery'
    ]
  },
  {
    id: 'allied-torquay-folding',
    slug: 'allied-torquay-electric-folding-bike',
    name: 'ALLIED Torquay Electric Folding Bike',
    price: 2150,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Folding',
    featured: true,
    shortDescription: 'Compact folding e-bike with 20" stability tyres, 36V 15.6Ah lithium battery and 3-step fold frame (70x60x45cm).',
    description: 'Designed for ultimate portability without sacrificing battery range. The ALLIED Torquay folds down in under 15 seconds to fit into car boots, motorhomes, caravans, or office closets. Powered by a 36V 15.6Ah battery delivering an impressive 70km range per charge.',
    images: ['https://picsum.photos/id/1076/800/600', 'https://picsum.photos/id/1077/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 15.6Ah Frame-Integrated Lithium',
      range: '70 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '120 kg max load',
      motorPower: '250W Rear Brushless Motor',
      chargeTime: '4 Hours',
      dimensions: 'Folded: 700 x 600 x 450 mm',
      weight: '22 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Quick 3-step heavy-duty safety latch folding mechanism',
      '20" x 2.125" puncture-resistant wide stability tyres',
      'Tektro disc brakes and Shimano Altus 7-speed gearing',
      'Telescopic height adjustable handlebars & seat post',
      'Includes front & rear mudguards and kickstand'
    ]
  },
  {
    id: 'allied-metro-commuter',
    slug: 'allied-metro-commuter-ebike',
    name: 'ALLIED Metro High-Range Commuter E-Bike',
    price: 2690,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: '48V high-torque urban commuter with 500W rear hub motor, 48V 14Ah Samsung cells and hydraulic brakes.',
    description: 'The ALLIED Metro is built for demanding urban ascents and long commutes. Equipped with a 48V 500W rear hub motor and 48V 14Ah Samsung cell battery pack, providing punchy hill-climbing acceleration and up to 80km range.',
    images: ['https://picsum.photos/id/1074/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 14Ah Samsung Lithium-ion',
      range: '80 km per charge',
      topSpeed: '32 km/h (Off-road mode)',
      payloadCapacity: '130 kg max load',
      motorPower: '500W High Torque Motor',
      chargeTime: '4.5 Hours',
      dimensions: '1,850 x 660 x 1,060 mm',
      weight: '25 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      '48V 500W motor with 65Nm torque output',
      'Tektro hydraulic disc brakes with 180mm rotors',
      'Suntour XCM suspension fork with lockout',
      'Color LCD display with USB phone charging port'
    ]
  },
  {
    id: 'allied-ripper-mtb',
    slug: 'allied-ripper-offroad-mtb-ebike',
    name: 'ALLIED Ripper Hardtail Off-Road MTB E-Bike',
    price: 2990,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'New Release',
    featured: true,
    shortDescription: '29" hardtail trail e-bike with 48V 500W Bafang motor, 48V 17.5Ah LG battery and air suspension fork.',
    description: 'Conquer singletracks and off-road trails with the ALLIED Ripper MTB. Powered by a high-torque 48V 500W Bafang motor paired with a massive 48V 17.5Ah (840Wh) LG lithium battery pack. Features 29" Maxxis Rekon trail tyres and 120mm air suspension fork.',
    images: ['https://picsum.photos/id/1073/800/600', 'https://picsum.photos/id/1075/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 17.5Ah (840Wh) LG Cell Lithium',
      range: '90 km trail range',
      topSpeed: '35 km/h (Off-road mode)',
      payloadCapacity: '135 kg max load',
      motorPower: '500W Bafang High Torque Motor',
      chargeTime: '5 Hours',
      dimensions: '1,880 x 720 x 1,080 mm',
      weight: '24.5 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      '29" x 2.40" Maxxis Rekon EXO puncture protected trail tyres',
      '120mm travel air suspension fork with rebound adjustment',
      'Shimano Deore 9-speed drivetrain with shadow rear derailleur',
      'Tektro 4-piston hydraulic disc brakes'
    ]
  },
  {
    id: 'allied-apex-fullsusp',
    slug: 'allied-apex-full-suspension-trail-ebike',
    name: 'ALLIED Apex Full-Suspension Enduro Trail E-Bike',
    price: 4250,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'Heavy Duty',
    featured: true,
    shortDescription: '750W Bafang mid-drive full suspension enduro e-bike with 150mm RockShox air fork and 48V 17.5Ah battery.',
    description: 'The flagship off-road machine in the ALLIED lineup. The Apex features a center-weighted Bafang M600 750W mid-drive motor delivering 120Nm of mountain-climbing torque. Paired with RockShox 150mm front air fork and rear air shock.',
    images: ['https://picsum.photos/id/1080/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 17.5Ah LG Cell Downtube Lithium',
      range: '75 km rugged mountain range',
      topSpeed: '45 km/h (Off-road mode)',
      payloadCapacity: '140 kg max load',
      motorPower: '750W Bafang M600 Mid-Drive (120Nm)',
      chargeTime: '4.5 Hours',
      dimensions: '1,900 x 740 x 1,100 mm',
      weight: '26 kg',
      warranty: '2 Years Frame & Mid-Drive Motor'
    },
    features: [
      'Bafang M600 mid-drive motor with torque sensing technology',
      'RockShox 150mm travel air suspension front & rear',
      'SRAM GX 11-speed drivetrain system',
      'Dropper seat post with handlebar remote lever'
    ]
  },
  {
    id: 'allied-hauler-cargo',
    slug: 'allied-hauler-commercial-cargo-ebike',
    name: 'ALLIED Hauler Heavy Duty Utility Cargo E-Bike',
    price: 3490,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Heavy Duty',
    featured: true,
    shortDescription: 'Heavy-duty 200kg load capacity cargo e-bike with dual 36V 15.6Ah batteries and front/rear platform racks.',
    description: 'Engineered for commercial delivery couriers, maintenance technicians, and heavy load carrying. The ALLIED Hauler features dual battery docks holding two 36V 15.6Ah packs for over 120km range under full payload.',
    images: ['https://picsum.photos/id/1079/800/600'],
    specs: {
      voltage: '36V Dual Pack',
      batteryType: '36V 15.6Ah x 2 (31.2Ah Total LG Lithium)',
      range: '120 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '200 kg total system load',
      motorPower: '500W High Torque Hub Motor',
      chargeTime: '5 Hours per pack',
      dimensions: '2,050 x 700 x 1,120 mm',
      weight: '34 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Heavy-duty alloy front tray and reinforced rear cargo deck',
      'Dual battery automatic switchover module',
      'Dual-leg center kickstand for stable loading/unloading',
      'Tektro 4-piston hydraulic disc brakes'
    ]
  },
  {
    id: 'aev-titan-1500',
    slug: 'allied-titan-1500-heavy-cargo-truck',
    name: 'ALLIED Titan 1500 Heavy Electric Cargo Truck',
    price: 24950,
    category: 'electric-quad-bikes',
    subcategory: 'farm-utility-quads',
    badge: 'Heavy Duty',
    featured: true,
    shortDescription: '1,500kg payload capacity electric flatbed truck with hydraulic drop-side tipping bed and 72V LiFePO4 battery.',
    description: 'The Allied Titan 1500 is engineered specifically for harsh Australian industrial conditions. Featuring a reinforced high-tensile steel frame, heavy-duty leaf spring suspension, hydraulic drop-side tipping bed, and an advanced 72V 160Ah LiFePO4 lithium battery system.',
    images: ['https://picsum.photos/id/1071/800/600', 'https://picsum.photos/id/1070/800/600'],
    specs: {
      voltage: '72V System',
      batteryType: 'LiFePO4 Lithium (160Ah)',
      range: '100 km per charge',
      topSpeed: '40 km/h (governed)',
      payloadCapacity: '1,500 kg',
      motorPower: '10 kW AC Brushless Motor',
      chargeTime: '2.5 Hours (Fast 80A Charger)',
      dimensions: '3,800 x 1,450 x 1,850 mm',
      weight: '1,120 kg',
      warranty: '3 Years Vehicle / 5 Years Battery'
    },
    features: [
      'Hydraulic power tipper bed with drop-down steel sides',
      'IP67 water and dust resistant sealed motor & drive controller',
      'Dual circuit hydraulic disc brakes with electromagnetic park brake'
    ]
  },
  {
    id: 'allied-bat-36v156',
    slug: 'allied-36v-156ah-lg-lithium-battery-pack',
    name: 'ALLIED 36V 15.6Ah LG Cell Replacement Battery Pack',
    price: 690,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Genuine high-density 36V 15.6Ah LG cell lithium-ion battery pack for Allied Byron, Noosa & Torquay e-bikes.',
    description: 'Upgrade or carry a spare battery for extended touring. Genuine ALLIED 36V 15.6Ah LG cell battery pack with lockable key latch, LED charge capacity indicator, and built-in Smart BMS protection.',
    images: ['https://picsum.photos/id/1072/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 15.6Ah (561Wh) LG Lithium-ion',
      range: '70 km per charge',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: '4.5 Hours',
      dimensions: '380 x 90 x 90 mm',
      weight: '3.6 kg',
      warranty: '1 Year Full Battery Warranty'
    },
    features: [
      'High-grade premium LG 18650 lithium-ion cells',
      'Integrated Smart BMS preventing overcharge, over-discharge & short circuit',
      'Key lock security mechanism with 2 keys included'
    ]
  },
  {
    id: 'allied-lekker-jordaan-urban-8sp',
    slug: 'allied-lekker-jordaan-urban-8sp',
    name: 'Lekker Jordaan Urban 8sp',
    price: 3098,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Lekker Jordaan Urban 8sp — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Lekker Jordaan Urban 8sp is part of ALLIED\'s authorized Lekker step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/225/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Lekker genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-lekker-amsterdam',
    slug: 'allied-lekker-amsterdam',
    name: 'Lekker Amsterdam+',
    price: 2499,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Lekker Amsterdam+ — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Lekker Amsterdam+ is part of ALLIED\'s authorized Lekker step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/439/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Lekker genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-aventon-level-3-step-through',
    slug: 'allied-aventon-level-3-step-through',
    name: 'Aventon Level 3 Step-Through',
    price: 2899,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Aventon Level 3 Step-Through — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Aventon Level 3 Step-Through is part of ALLIED\'s authorized Aventon step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/162/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Aventon genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-specialized-turbo-como-3-0',
    slug: 'allied-specialized-turbo-como-3-0',
    name: 'Specialized Turbo Como 3.0',
    price: 4299,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Specialized Turbo Como 3.0 — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Specialized Turbo Como 3.0 is part of ALLIED\'s authorized Specialized step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/680/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Specialized genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-trek-allant-5',
    slug: 'allied-trek-allant-5',
    name: 'Trek Allant+ 5',
    price: 4499,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Trek Allant+ 5 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Trek Allant+ 5 is part of ALLIED\'s authorized Trek step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/324/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Trek genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dirodi-rover-plus-gen-6-step-thru',
    slug: 'allied-dirodi-rover-plus-gen-6-step-thru',
    name: 'DiroDi Rover Plus Gen 6 Step-Thru',
    price: 2999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'DiroDi Rover Plus Gen 6 Step-Thru — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The DiroDi Rover Plus Gen 6 Step-Thru is part of ALLIED\'s authorized DiroDi step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/713/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'DiroDi genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-aventon-level-3-step-over',
    slug: 'allied-aventon-level-3-step-over',
    name: 'Aventon Level 3 Step-Over',
    price: 3299,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Aventon Level 3 Step-Over — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Aventon Level 3 Step-Over is part of ALLIED\'s authorized Aventon step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/563/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Aventon genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-lekker-amsterdam-automatic-belt',
    slug: 'allied-lekker-amsterdam-automatic-belt',
    name: 'Lekker Amsterdam+ Automatic Belt',
    price: 3299,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Lekker Amsterdam+ Automatic Belt — belt-drive commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Lekker Amsterdam+ Automatic Belt is part of ALLIED\'s authorized Lekker belt-drive commuters range, featuring 250w-500w motor with gates carbon belt drive, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/409/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Motor with Gates Carbon Belt Drive',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Lekker genuine authorized stock, inspected prior to Australian dispatch',
      'Belt-Drive Commuters class — 250w-500w motor with gates carbon belt drive',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ncm-t3s-step-thru-trekking',
    slug: 'allied-ncm-t3s-step-thru-trekking',
    name: 'NCM T3S Step-Thru Trekking',
    price: 1799,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'NCM T3S Step-Thru Trekking — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The NCM T3S Step-Thru Trekking is part of ALLIED\'s authorized NCM step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/102/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'NCM genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-pedal-comet-3-disc',
    slug: 'allied-pedal-comet-3-disc',
    name: 'Pedal Comet 3 Disc',
    price: 1399,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Pedal Comet 3 Disc — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Pedal Comet 3 Disc is part of ALLIED\'s authorized Pedal step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/937/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Pedal genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-reid-vintage-ebike',
    slug: 'allied-reid-vintage-ebike',
    name: 'Reid Vintage eBike',
    price: 1699,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Reid Vintage eBike — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Reid Vintage eBike is part of ALLIED\'s authorized Reid step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/998/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Reid genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-merida-espresso-city-300-eq',
    slug: 'allied-merida-espresso-city-300-eq',
    name: 'Merida eSpresso City 300 EQ',
    price: 3799,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Merida eSpresso City 300 EQ — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Merida eSpresso City 300 EQ is part of ALLIED\'s authorized Merida step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/974/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Merida genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-cube-touring-hybrid-one',
    slug: 'allied-cube-touring-hybrid-one',
    name: 'Cube Touring Hybrid ONE',
    price: 2999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Cube Touring Hybrid ONE — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Cube Touring Hybrid ONE is part of ALLIED\'s authorized Cube step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/240/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Cube genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-aventon-soltera-2-step-through',
    slug: 'allied-aventon-soltera-2-step-through',
    name: 'Aventon Soltera.2 Step-Through',
    price: 1899,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Aventon Soltera.2 Step-Through — lightweight urban e-bikes with 36V 10.7Ah lithium power and 55-70 km range.',
    description: 'The Aventon Soltera.2 Step-Through is part of ALLIED\'s authorized Aventon lightweight urban e-bikes range, featuring 240w-250w lightweight hub/mid motor, 36v 10.7ah lithium-ion (sl), and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/754/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 10.7Ah Lithium-ion (SL)',
      range: '55-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110 kg max load',
      motorPower: '240W-250W Lightweight Hub/Mid Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '15-18 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Aventon genuine authorized stock, inspected prior to Australian dispatch',
      'Lightweight Urban E-Bikes class — 240w-250w lightweight hub/mid motor',
      '36V 10.7Ah Lithium-ion (SL)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ncm-milano-plus',
    slug: 'allied-ncm-milano-plus',
    name: 'NCM Milano Plus',
    price: 2399,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'NCM Milano Plus — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The NCM Milano Plus is part of ALLIED\'s authorized NCM step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/943/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'NCM genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-pedego-boomerang-classic',
    slug: 'allied-pedego-boomerang-classic',
    name: 'Pedego Boomerang Classic',
    price: 3699,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Pedego Boomerang Classic — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Pedego Boomerang Classic is part of ALLIED\'s authorized Pedego step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/995/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Pedego genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-eunorau-meta26-x2-0',
    slug: 'allied-eunorau-meta26-x2-0',
    name: 'Eunorau META26 X2.0',
    price: 2399,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Eunorau META26 X2.0 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Eunorau META26 X2.0 is part of ALLIED\'s authorized Eunorau step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/682/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Eunorau genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-reid-urban-e-bike-step-through',
    slug: 'allied-reid-urban-e-bike-step-through',
    name: 'Reid Urban E-Bike Step-Through',
    price: 1499,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Reid Urban E-Bike Step-Through — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Reid Urban E-Bike Step-Through is part of ALLIED\'s authorized Reid step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/337/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Reid genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-mokwheel-basalt-step-thru',
    slug: 'allied-mokwheel-basalt-step-thru',
    name: 'Mokwheel Basalt Step-Thru',
    price: 2799,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Mokwheel Basalt Step-Thru — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Mokwheel Basalt Step-Thru is part of ALLIED\'s authorized Mokwheel step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/101/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Mokwheel genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fiido-c11-step-through',
    slug: 'allied-fiido-c11-step-through',
    name: 'Fiido C11 Step-Through',
    price: 1099,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Fiido C11 Step-Through — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Fiido C11 Step-Through is part of ALLIED\'s authorized Fiido step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/762/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Fiido genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ncm-moscow-plus',
    slug: 'allied-ncm-moscow-plus',
    name: 'NCM Moscow Plus',
    price: 2399,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'NCM Moscow Plus — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The NCM Moscow Plus is part of ALLIED\'s authorized NCM step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/644/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'NCM genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-trek-dual-sport-2',
    slug: 'allied-trek-dual-sport-2',
    name: 'Trek Dual Sport+ 2',
    price: 3299,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Trek Dual Sport+ 2 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Trek Dual Sport+ 2 is part of ALLIED\'s authorized Trek step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/109/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Trek genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-specialized-turbo-vado-4-0',
    slug: 'allied-specialized-turbo-vado-4-0',
    name: 'Specialized Turbo Vado 4.0',
    price: 5499,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Specialized Turbo Vado 4.0 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Specialized Turbo Vado 4.0 is part of ALLIED\'s authorized Specialized step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/510/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Specialized genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-giant-explore-e-4',
    slug: 'allied-giant-explore-e-4',
    name: 'Giant Explore E+ 4',
    price: 3999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Giant Explore E+ 4 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Giant Explore E+ 4 is part of ALLIED\'s authorized Giant step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/888/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Giant genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-merida-espresso-400',
    slug: 'allied-merida-espresso-400',
    name: 'Merida eSpresso 400',
    price: 4199,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Merida eSpresso 400 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Merida eSpresso 400 is part of ALLIED\'s authorized Merida step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/884/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Merida genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-polygon-path-e',
    slug: 'allied-polygon-path-e',
    name: 'Polygon Path E+',
    price: 2999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Polygon Path E+ — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Polygon Path E+ is part of ALLIED\'s authorized Polygon step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/682/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Polygon genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-norco-scene-vlt',
    slug: 'allied-norco-scene-vlt',
    name: 'Norco Scene VLT',
    price: 3899,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Norco Scene VLT — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Norco Scene VLT is part of ALLIED\'s authorized Norco step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/351/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Norco genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-priority-current-belt-drive',
    slug: 'allied-priority-current-belt-drive',
    name: 'Priority Current Belt Drive',
    price: 4499,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Priority Current Belt Drive — belt-drive commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Priority Current Belt Drive is part of ALLIED\'s authorized Priority belt-drive commuters range, featuring 250w-500w motor with gates carbon belt drive, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/518/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Motor with Gates Carbon Belt Drive',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Priority genuine authorized stock, inspected prior to Australian dispatch',
      'Belt-Drive Commuters class — 250w-500w motor with gates carbon belt drive',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-aventon-soltera-2-lightweight',
    slug: 'allied-aventon-soltera-2-lightweight',
    name: 'Aventon Soltera.2 Lightweight',
    price: 1899,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Aventon Soltera.2 Lightweight — lightweight urban e-bikes with 36V 10.7Ah lithium power and 55-70 km range.',
    description: 'The Aventon Soltera.2 Lightweight is part of ALLIED\'s authorized Aventon lightweight urban e-bikes range, featuring 240w-250w lightweight hub/mid motor, 36v 10.7ah lithium-ion (sl), and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/827/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 10.7Ah Lithium-ion (SL)',
      range: '55-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110 kg max load',
      motorPower: '240W-250W Lightweight Hub/Mid Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '15-18 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Aventon genuine authorized stock, inspected prior to Australian dispatch',
      'Lightweight Urban E-Bikes class — 240w-250w lightweight hub/mid motor',
      '36V 10.7Ah Lithium-ion (SL)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-specialized-turbo-vado-sl-4-0',
    slug: 'allied-specialized-turbo-vado-sl-4-0',
    name: 'Specialized Turbo Vado SL 4.0',
    price: 4999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Specialized Turbo Vado SL 4.0 — lightweight urban e-bikes with 36V 10.7Ah lithium power and 55-70 km range.',
    description: 'The Specialized Turbo Vado SL 4.0 is part of ALLIED\'s authorized Specialized lightweight urban e-bikes range, featuring 240w-250w lightweight hub/mid motor, 36v 10.7ah lithium-ion (sl), and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/188/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 10.7Ah Lithium-ion (SL)',
      range: '55-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110 kg max load',
      motorPower: '240W-250W Lightweight Hub/Mid Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '15-18 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Specialized genuine authorized stock, inspected prior to Australian dispatch',
      'Lightweight Urban E-Bikes class — 240w-250w lightweight hub/mid motor',
      '36V 10.7Ah Lithium-ion (SL)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-cannondale-treadwell-neo-2',
    slug: 'allied-cannondale-treadwell-neo-2',
    name: 'Cannondale Treadwell Neo 2',
    price: 3299,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Cannondale Treadwell Neo 2 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Cannondale Treadwell Neo 2 is part of ALLIED\'s authorized Cannondale step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/281/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Cannondale genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-orbea-gain-d50',
    slug: 'allied-orbea-gain-d50',
    name: 'Orbea Gain D50',
    price: 4399,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Orbea Gain D50 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Orbea Gain D50 is part of ALLIED\'s authorized Orbea step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/630/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Orbea genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kalkhoff-entice-l-season-wave',
    slug: 'allied-kalkhoff-entice-l-season-wave',
    name: 'Kalkhoff Entice L Season Wave',
    price: 4199,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Kalkhoff Entice L Season Wave — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Kalkhoff Entice L Season Wave is part of ALLIED\'s authorized Kalkhoff step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/889/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Kalkhoff genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kalkhoff-entice-l-season-gents',
    slug: 'allied-kalkhoff-entice-l-season-gents',
    name: 'Kalkhoff Entice L Season Gents',
    price: 4499,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Kalkhoff Entice L Season Gents — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Kalkhoff Entice L Season Gents is part of ALLIED\'s authorized Kalkhoff step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/749/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Kalkhoff genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-focus-aventura2-6-8-green',
    slug: 'allied-focus-aventura2-6-8-green',
    name: 'Focus Aventura2 6.8 Green',
    price: 5999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Focus Aventura2 6.8 Green — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Focus Aventura2 6.8 Green is part of ALLIED\'s authorized Focus step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/655/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Focus genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-focus-aventura2-6-8-wave-silver',
    slug: 'allied-focus-aventura2-6-8-wave-silver',
    name: 'Focus Aventura2 6.8 Wave Silver',
    price: 6999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Focus Aventura2 6.8 Wave Silver — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Focus Aventura2 6.8 Wave Silver is part of ALLIED\'s authorized Focus step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/945/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Focus genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-cannondale-adventure-neo-4',
    slug: 'allied-cannondale-adventure-neo-4',
    name: 'Cannondale Adventure Neo 4',
    price: 3099,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Cannondale Adventure Neo 4 — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Cannondale Adventure Neo 4 is part of ALLIED\'s authorized Cannondale step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/466/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Cannondale genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-velectrix-adventurer-pulse-st',
    slug: 'allied-velectrix-adventurer-pulse-st',
    name: 'Velectrix Adventurer Pulse ST',
    price: 2950,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Velectrix Adventurer Pulse ST — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Velectrix Adventurer Pulse ST is part of ALLIED\'s authorized Velectrix step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/504/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Velectrix genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-gazelle-ultimate-c380-hmb',
    slug: 'allied-gazelle-ultimate-c380-hmb',
    name: 'Gazelle Ultimate C380 HMB',
    price: 5499,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Gazelle Ultimate C380 HMB — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Gazelle Ultimate C380 HMB is part of ALLIED\'s authorized Gazelle step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/677/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Gazelle genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-orbea-vibe-h30-eq',
    slug: 'allied-orbea-vibe-h30-eq',
    name: 'Orbea Vibe H30 EQ',
    price: 4299,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Orbea Vibe H30 EQ — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Orbea Vibe H30 EQ is part of ALLIED\'s authorized Orbea step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/762/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Orbea genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-cube-touring-hybrid-pro-500',
    slug: 'allied-cube-touring-hybrid-pro-500',
    name: 'Cube Touring Hybrid Pro 500',
    price: 3499,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Cube Touring Hybrid Pro 500 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Cube Touring Hybrid Pro 500 is part of ALLIED\'s authorized Cube step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/911/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Cube genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-orbea-vibe-mid-h30',
    slug: 'allied-orbea-vibe-mid-h30',
    name: 'Orbea Vibe Mid H30',
    price: 4399,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Orbea Vibe Mid H30 — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Orbea Vibe Mid H30 is part of ALLIED\'s authorized Orbea step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/893/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Orbea genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kalkhoff-endeavour-1-b-move',
    slug: 'allied-kalkhoff-endeavour-1-b-move',
    name: 'Kalkhoff Endeavour 1.B Move',
    price: 3699,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Kalkhoff Endeavour 1.B Move — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Kalkhoff Endeavour 1.B Move is part of ALLIED\'s authorized Kalkhoff step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/815/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Kalkhoff genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-gazelle-medeo-t9-hmb',
    slug: 'allied-gazelle-medeo-t9-hmb',
    name: 'Gazelle Medeo T9 HMB',
    price: 3899,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Gazelle Medeo T9 HMB — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Gazelle Medeo T9 HMB is part of ALLIED\'s authorized Gazelle step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/361/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Gazelle genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-merida-espresso-city-200-eq',
    slug: 'allied-merida-espresso-city-200-eq',
    name: 'Merida eSpresso City 200 EQ',
    price: 3299,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    featured: false,
    shortDescription: 'Merida eSpresso City 200 EQ — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Merida eSpresso City 200 EQ is part of ALLIED\'s authorized Merida step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/162/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Merida genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-focus-planet-5-6-wave',
    slug: 'allied-focus-planet-5-6-wave',
    name: 'Focus Planet² 5.6 Wave',
    price: 4199,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Focus Planet² 5.6 Wave — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Focus Planet² 5.6 Wave is part of ALLIED\'s authorized Focus step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/598/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Focus genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-velectrix-urban-street-pulse',
    slug: 'allied-velectrix-urban-street-pulse',
    name: 'Velectrix Urban Street Pulse',
    price: 2499,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Velectrix Urban Street Pulse — lightweight urban e-bikes with 36V 10.7Ah lithium power and 55-70 km range.',
    description: 'The Velectrix Urban Street Pulse is part of ALLIED\'s authorized Velectrix lightweight urban e-bikes range, featuring 240w-250w lightweight hub/mid motor, 36v 10.7ah lithium-ion (sl), and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/435/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 10.7Ah Lithium-ion (SL)',
      range: '55-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110 kg max load',
      motorPower: '240W-250W Lightweight Hub/Mid Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '15-18 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Velectrix genuine authorized stock, inspected prior to Australian dispatch',
      'Lightweight Urban E-Bikes class — 240w-250w lightweight hub/mid motor',
      '36V 10.7Ah Lithium-ion (SL)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-cube-touring-hybrid-one-400',
    slug: 'allied-cube-touring-hybrid-one-400',
    name: 'Cube Touring Hybrid ONE 400',
    price: 2699,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Cube Touring Hybrid ONE 400 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Cube Touring Hybrid ONE 400 is part of ALLIED\'s authorized Cube step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/107/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Cube genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-specialized-turbo-como-sl-4-0',
    slug: 'allied-specialized-turbo-como-sl-4-0',
    name: 'Specialized Turbo Como SL 4.0',
    price: 4999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Specialized Turbo Como SL 4.0 — lightweight urban e-bikes with 36V 10.7Ah lithium power and 55-70 km range.',
    description: 'The Specialized Turbo Como SL 4.0 is part of ALLIED\'s authorized Specialized lightweight urban e-bikes range, featuring 240w-250w lightweight hub/mid motor, 36v 10.7ah lithium-ion (sl), and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/200/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 10.7Ah Lithium-ion (SL)',
      range: '55-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110 kg max load',
      motorPower: '240W-250W Lightweight Hub/Mid Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '15-18 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Specialized genuine authorized stock, inspected prior to Australian dispatch',
      'Lightweight Urban E-Bikes class — 240w-250w lightweight hub/mid motor',
      '36V 10.7Ah Lithium-ion (SL)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-trek-allant-8-st',
    slug: 'allied-trek-allant-8-st',
    name: 'Trek Allant+ 8 ST',
    price: 5999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Trek Allant+ 8 ST — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Trek Allant+ 8 ST is part of ALLIED\'s authorized Trek step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/592/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Trek genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ncm-milano-max-n7',
    slug: 'allied-ncm-milano-max-n7',
    name: 'NCM Milano Max N7',
    price: 2599,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'NCM Milano Max N7 — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The NCM Milano Max N7 is part of ALLIED\'s authorized NCM step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/514/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'NCM genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dirodi-rover-plus-low-step-48v',
    slug: 'allied-dirodi-rover-plus-low-step-48v',
    name: 'DiroDi Rover Plus Low-Step 48V',
    price: 2899,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'DiroDi Rover Plus Low-Step 48V — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The DiroDi Rover Plus Low-Step 48V is part of ALLIED\'s authorized DiroDi step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/980/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'DiroDi genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-eunorau-e-fat-step-pro',
    slug: 'allied-eunorau-e-fat-step-pro',
    name: 'Eunorau E-Fat-Step Pro',
    price: 2899,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Eunorau E-Fat-Step Pro — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Eunorau E-Fat-Step Pro is part of ALLIED\'s authorized Eunorau step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/488/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Eunorau genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-mokwheel-basalt-deluxe-st',
    slug: 'allied-mokwheel-basalt-deluxe-st',
    name: 'Mokwheel Basalt Deluxe ST',
    price: 2999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Mokwheel Basalt Deluxe ST — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Mokwheel Basalt Deluxe ST is part of ALLIED\'s authorized Mokwheel step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/632/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Mokwheel genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-reid-urban-ebike-step-through-pro',
    slug: 'allied-reid-urban-ebike-step-through-pro',
    name: 'Reid Urban eBike Step-Through Pro',
    price: 1799,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Reid Urban eBike Step-Through Pro — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Reid Urban eBike Step-Through Pro is part of ALLIED\'s authorized Reid step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/772/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Reid genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-pedal-comet-3-pro-disc',
    slug: 'allied-pedal-comet-3-pro-disc',
    name: 'Pedal Comet 3 Pro Disc',
    price: 1699,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Pedal Comet 3 Pro Disc — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Pedal Comet 3 Pro Disc is part of ALLIED\'s authorized Pedal step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/363/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Pedal genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-smartmotion-catalyst-v2-st',
    slug: 'allied-smartmotion-catalyst-v2-st',
    name: 'SmartMotion Catalyst V2 ST',
    price: 3199,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'SmartMotion Catalyst V2 ST — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The SmartMotion Catalyst V2 ST is part of ALLIED\'s authorized SmartMotion step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/262/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'SmartMotion genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-gepida-alboin-2000-crs',
    slug: 'allied-gepida-alboin-2000-crs',
    name: 'Gepida Alboin 2000 CRS',
    price: 4299,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Gepida Alboin 2000 CRS — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Gepida Alboin 2000 CRS is part of ALLIED\'s authorized Gepida step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/378/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Gepida genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-aventon-soltera-2-special-edition',
    slug: 'allied-aventon-soltera-2-special-edition',
    name: 'Aventon Soltera.2 Special Edition',
    price: 1999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Aventon Soltera.2 Special Edition — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Aventon Soltera.2 Special Edition is part of ALLIED\'s authorized Aventon step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/459/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Aventon genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ncm-t3s-plus-commuter',
    slug: 'allied-ncm-t3s-plus-commuter',
    name: 'NCM T3S Plus Commuter',
    price: 1999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'NCM T3S Plus Commuter — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The NCM T3S Plus Commuter is part of ALLIED\'s authorized NCM step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/107/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'NCM genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fiido-c11-pro-long-range',
    slug: 'allied-fiido-c11-pro-long-range',
    name: 'Fiido C11 Pro Long Range',
    price: 1299,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Fiido C11 Pro Long Range — step-through commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Fiido C11 Pro Long Range is part of ALLIED\'s authorized Fiido step-through commuters range, featuring 250w-350w rear hub motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/428/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Fiido genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Through Commuters class — 250w-350w rear hub motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-cannondale-moterra-neo-3',
    slug: 'allied-cannondale-moterra-neo-3',
    name: 'Cannondale Moterra Neo 3',
    price: 6499,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Cannondale Moterra Neo 3 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Cannondale Moterra Neo 3 is part of ALLIED\'s authorized Cannondale step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/400/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Cannondale genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-trek-dual-sport-2-stagger',
    slug: 'allied-trek-dual-sport-2-stagger',
    name: 'Trek Dual Sport+ 2 Stagger',
    price: 3299,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Trek Dual Sport+ 2 Stagger — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Trek Dual Sport+ 2 Stagger is part of ALLIED\'s authorized Trek step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/299/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Trek genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-specialized-turbo-vado-3-0',
    slug: 'allied-specialized-turbo-vado-3-0',
    name: 'Specialized Turbo Vado 3.0',
    price: 4699,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Specialized Turbo Vado 3.0 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Specialized Turbo Vado 3.0 is part of ALLIED\'s authorized Specialized step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/954/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Specialized genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-giant-explore-e-3-power',
    slug: 'allied-giant-explore-e-3-power',
    name: 'Giant Explore E+ 3 Power',
    price: 3499,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Giant Explore E+ 3 Power — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Giant Explore E+ 3 Power is part of ALLIED\'s authorized Giant step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/397/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Giant genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-merida-espresso-300-se',
    slug: 'allied-merida-espresso-300-se',
    name: 'Merida eSpresso 300 SE',
    price: 3799,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    featured: false,
    shortDescription: 'Merida eSpresso 300 SE — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Merida eSpresso 300 SE is part of ALLIED\'s authorized Merida step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/230/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Merida genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-polygon-path-e-5',
    slug: 'allied-polygon-path-e-5',
    name: 'Polygon Path E+ 5',
    price: 3899,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Polygon Path E+ 5 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Polygon Path E+ 5 is part of ALLIED\'s authorized Polygon step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/125/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Polygon genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-norco-indie-vlt-2',
    slug: 'allied-norco-indie-vlt-2',
    name: 'Norco Indie VLT 2',
    price: 3199,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Norco Indie VLT 2 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Norco Indie VLT 2 is part of ALLIED\'s authorized Norco step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/831/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Norco genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-cube-kathmandu-hybrid-pro-600',
    slug: 'allied-cube-kathmandu-hybrid-pro-600',
    name: 'Cube Kathmandu Hybrid Pro 600',
    price: 4799,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Cube Kathmandu Hybrid Pro 600 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Cube Kathmandu Hybrid Pro 600 is part of ALLIED\'s authorized Cube step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/556/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Cube genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-orbea-vector-h20',
    slug: 'allied-orbea-vector-h20',
    name: 'Orbea Vector H20',
    price: 3799,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Orbea Vector H20 — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Orbea Vector H20 is part of ALLIED\'s authorized Orbea step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/201/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Orbea genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-focus-planet-5-7-diamond',
    slug: 'allied-focus-planet-5-7-diamond',
    name: 'Focus Planet² 5.7 Diamond',
    price: 4599,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Focus Planet² 5.7 Diamond — step-over / diamond frame with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Focus Planet² 5.7 Diamond is part of ALLIED\'s authorized Focus step-over / diamond frame range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/896/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '125 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '23-26 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Focus genuine authorized stock, inspected prior to Australian dispatch',
      'Step-Over / Diamond Frame class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tenways-cgo600-pro-belt',
    slug: 'allied-tenways-cgo600-pro-belt',
    name: 'Tenways CGO600 Pro Belt',
    price: 2899,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Tenways CGO600 Pro Belt — belt-drive commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Tenways CGO600 Pro Belt is part of ALLIED\'s authorized Tenways belt-drive commuters range, featuring 250w-500w motor with gates carbon belt drive, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/343/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Motor with Gates Carbon Belt Drive',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Tenways genuine authorized stock, inspected prior to Australian dispatch',
      'Belt-Drive Commuters class — 250w-500w motor with gates carbon belt drive',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kalkhoff-endeavour-5-b-excite',
    slug: 'allied-kalkhoff-endeavour-5-b-excite',
    name: 'Kalkhoff Endeavour 5.B Excite',
    price: 6999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Kalkhoff Endeavour 5.B Excite — belt-drive commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Kalkhoff Endeavour 5.B Excite is part of ALLIED\'s authorized Kalkhoff belt-drive commuters range, featuring 250w-500w motor with gates carbon belt drive, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/520/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Motor with Gates Carbon Belt Drive',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Kalkhoff genuine authorized stock, inspected prior to Australian dispatch',
      'Belt-Drive Commuters class — 250w-500w motor with gates carbon belt drive',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-specialized-turbo-vado-sl-4-0-step-through',
    slug: 'allied-specialized-turbo-vado-sl-4-0-step-through',
    name: 'Specialized Turbo Vado SL 4.0 Step-Through',
    price: 4999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Specialized Turbo Vado SL 4.0 Step-Through — lightweight urban e-bikes with 36V 10.7Ah lithium power and 55-70 km range.',
    description: 'The Specialized Turbo Vado SL 4.0 Step-Through is part of ALLIED\'s authorized Specialized lightweight urban e-bikes range, featuring 240w-250w lightweight hub/mid motor, 36v 10.7ah lithium-ion (sl), and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/567/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 10.7Ah Lithium-ion (SL)',
      range: '55-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110 kg max load',
      motorPower: '240W-250W Lightweight Hub/Mid Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '15-18 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Specialized genuine authorized stock, inspected prior to Australian dispatch',
      'Lightweight Urban E-Bikes class — 240w-250w lightweight hub/mid motor',
      '36V 10.7Ah Lithium-ion (SL)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-priority-current-hub-shift',
    slug: 'allied-priority-current-hub-shift',
    name: 'Priority Current Hub Shift',
    price: 4999,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Priority Current Hub Shift — belt-drive commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Priority Current Hub Shift is part of ALLIED\'s authorized Priority belt-drive commuters range, featuring 250w-500w motor with gates carbon belt drive, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/840/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Motor with Gates Carbon Belt Drive',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Priority genuine authorized stock, inspected prior to Australian dispatch',
      'Belt-Drive Commuters class — 250w-500w motor with gates carbon belt drive',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ampler-stout-classic-belt',
    slug: 'allied-ampler-stout-classic-belt',
    name: 'Ampler Stout Classic Belt',
    price: 4399,
    category: 'electric-bikes',
    subcategory: 'urban-commuter-ebikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Ampler Stout Classic Belt — belt-drive commuters with 36V 14Ah / 48V 14Ah lithium power and 70-90 km range.',
    description: 'The Ampler Stout Classic Belt is part of ALLIED\'s authorized Ampler belt-drive commuters range, featuring 250w-500w motor with gates carbon belt drive, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/768/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-90 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Motor with Gates Carbon Belt Drive',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-25 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Ampler genuine authorized stock, inspected prior to Australian dispatch',
      'Belt-Drive Commuters class — 250w-500w motor with gates carbon belt drive',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tern-gsd-s10-lx',
    slug: 'allied-tern-gsd-s10-lx',
    name: 'Tern GSD S10 LX',
    price: 7995,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Tern GSD S10 LX — long-tail cargo with 36V 14Ah x2 / 48V 14Ah lithium power and 60-130 km under full payload range.',
    description: 'The Tern GSD S10 LX is part of ALLIED\'s authorized Tern long-tail cargo range, featuring 250w-750w high torque motor, 36v 14ah x2 / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/435/800/600'],
    specs: {
      voltage: '36V/48V Dual Pack',
      batteryType: '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      range: '60-130 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '180-200 kg total system load',
      motorPower: '250W-750W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '28-33 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Tern genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Tail Cargo class — 250w-750w high torque motor',
      '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-aventon-abound-sr-cargo',
    slug: 'allied-aventon-abound-sr-cargo',
    name: 'Aventon Abound SR Cargo',
    price: 2999,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Aventon Abound SR Cargo — long-tail cargo with 36V 14Ah x2 / 48V 14Ah lithium power and 60-130 km under full payload range.',
    description: 'The Aventon Abound SR Cargo is part of ALLIED\'s authorized Aventon long-tail cargo range, featuring 250w-750w high torque motor, 36v 14ah x2 / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/268/800/600'],
    specs: {
      voltage: '36V/48V Dual Pack',
      batteryType: '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      range: '60-130 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '180-200 kg total system load',
      motorPower: '250W-750W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '28-33 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Aventon genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Tail Cargo class — 250w-750w high torque motor',
      '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tern-hsd-p9',
    slug: 'allied-tern-hsd-p9',
    name: 'Tern HSD P9',
    price: 5499,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Tern HSD P9 — compact cargo with 36V 14Ah / 48V 14Ah lithium power and 60-90 km range.',
    description: 'The Tern HSD P9 is part of ALLIED\'s authorized Tern compact cargo range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/199/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '60-90 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '150-180 kg total system load',
      motorPower: '250W-500W Motor',
      chargeTime: '4.5 Hours',
      dimensions: 'Varies by model',
      weight: '26-30 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Tern genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Cargo class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-riese-m-ller-load-4-75',
    slug: 'allied-riese-m-ller-load-4-75',
    name: 'Riese & Müller Load 4 75',
    price: 9899,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Riese & Müller Load 4 75 — front-loader (box) bikes with 48V 14Ah x2 lithium power and 80-150 km under full payload range.',
    description: 'The Riese & Müller Load 4 75 is part of ALLIED\'s authorized Riese & Müller front-loader (box) bikes range, featuring 250w-500w high torque motor, 48v 14ah x2 lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/528/800/600'],
    specs: {
      voltage: '48V Dual Pack',
      batteryType: '48V 14Ah x2 Lithium-ion',
      range: '80-150 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '200-250 kg total system load',
      motorPower: '250W-500W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '34-40 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Riese & Müller genuine authorized stock, inspected prior to Australian dispatch',
      'Front-Loader (Box) Bikes class — 250w-500w high torque motor',
      '48V 14Ah x2 Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-riese-m-ller-multicharger2',
    slug: 'allied-riese-m-ller-multicharger2',
    name: 'Riese & Müller Multicharger2',
    price: 7499,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Riese & Müller Multicharger2 — long-tail cargo with 36V 14Ah x2 / 48V 14Ah lithium power and 60-130 km under full payload range.',
    description: 'The Riese & Müller Multicharger2 is part of ALLIED\'s authorized Riese & Müller long-tail cargo range, featuring 250w-750w high torque motor, 36v 14ah x2 / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/657/800/600'],
    specs: {
      voltage: '36V/48V Dual Pack',
      batteryType: '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      range: '60-130 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '180-200 kg total system load',
      motorPower: '250W-750W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '28-33 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Riese & Müller genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Tail Cargo class — 250w-750w high torque motor',
      '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-riese-m-ller-multicharger3-mixte',
    slug: 'allied-riese-m-ller-multicharger3-mixte',
    name: 'Riese & Müller Multicharger3 Mixte',
    price: 7999,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Riese & Müller Multicharger3 Mixte — long-tail cargo with 36V 14Ah x2 / 48V 14Ah lithium power and 60-130 km under full payload range.',
    description: 'The Riese & Müller Multicharger3 Mixte is part of ALLIED\'s authorized Riese & Müller long-tail cargo range, featuring 250w-750w high torque motor, 36v 14ah x2 / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/803/800/600'],
    specs: {
      voltage: '36V/48V Dual Pack',
      batteryType: '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      range: '60-130 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '180-200 kg total system load',
      motorPower: '250W-750W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '28-33 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Riese & Müller genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Tail Cargo class — 250w-750w high torque motor',
      '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-cannondale-cargowagen-neo-2',
    slug: 'allied-cannondale-cargowagen-neo-2',
    name: 'Cannondale Cargowagen Neo 2',
    price: 5699,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Cannondale Cargowagen Neo 2 — long-tail cargo with 36V 14Ah x2 / 48V 14Ah lithium power and 60-130 km under full payload range.',
    description: 'The Cannondale Cargowagen Neo 2 is part of ALLIED\'s authorized Cannondale long-tail cargo range, featuring 250w-750w high torque motor, 36v 14ah x2 / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/925/800/600'],
    specs: {
      voltage: '36V/48V Dual Pack',
      batteryType: '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      range: '60-130 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '180-200 kg total system load',
      motorPower: '250W-750W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '28-33 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Cannondale genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Tail Cargo class — 250w-750w high torque motor',
      '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-e-mono-atlas-urban-cargo',
    slug: 'allied-e-mono-atlas-urban-cargo',
    name: 'E-Mono Atlas Urban Cargo',
    price: 2799,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'E-Mono Atlas Urban Cargo — compact cargo with 36V 14Ah / 48V 14Ah lithium power and 60-90 km range.',
    description: 'The E-Mono Atlas Urban Cargo is part of ALLIED\'s authorized E-Mono compact cargo range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/555/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '60-90 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '150-180 kg total system load',
      motorPower: '250W-500W Motor',
      chargeTime: '4.5 Hours',
      dimensions: 'Varies by model',
      weight: '26-30 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'E-Mono genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Cargo class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-eunorau-g30-max-cargo',
    slug: 'allied-eunorau-g30-max-cargo',
    name: 'Eunorau G30 Max Cargo',
    price: 2999,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Eunorau G30 Max Cargo — long-tail cargo with 36V 14Ah x2 / 48V 14Ah lithium power and 60-130 km under full payload range.',
    description: 'The Eunorau G30 Max Cargo is part of ALLIED\'s authorized Eunorau long-tail cargo range, featuring 250w-750w high torque motor, 36v 14ah x2 / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/451/800/600'],
    specs: {
      voltage: '36V/48V Dual Pack',
      batteryType: '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      range: '60-130 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '180-200 kg total system load',
      motorPower: '250W-750W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '28-33 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Eunorau genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Tail Cargo class — 250w-750w high torque motor',
      '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-lectric-xpedition-dual-battery',
    slug: 'allied-lectric-xpedition-dual-battery',
    name: 'Lectric XPedition Dual Battery',
    price: 2899,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Lectric XPedition Dual Battery — long-tail cargo with 36V 14Ah x2 / 48V 14Ah lithium power and 60-130 km under full payload range.',
    description: 'The Lectric XPedition Dual Battery is part of ALLIED\'s authorized Lectric long-tail cargo range, featuring 250w-750w high torque motor, 36v 14ah x2 / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/409/800/600'],
    specs: {
      voltage: '36V/48V Dual Pack',
      batteryType: '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      range: '60-130 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '180-200 kg total system load',
      motorPower: '250W-750W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '28-33 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Lectric genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Tail Cargo class — 250w-750w high torque motor',
      '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tern-gsd-s00-lx-cargo-plus',
    slug: 'allied-tern-gsd-s00-lx-cargo-plus',
    name: 'Tern GSD S00 LX Cargo Plus',
    price: 9499,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Tern GSD S00 LX Cargo Plus — long-tail cargo with 36V 14Ah x2 / 48V 14Ah lithium power and 60-130 km under full payload range.',
    description: 'The Tern GSD S00 LX Cargo Plus is part of ALLIED\'s authorized Tern long-tail cargo range, featuring 250w-750w high torque motor, 36v 14ah x2 / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/570/800/600'],
    specs: {
      voltage: '36V/48V Dual Pack',
      batteryType: '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      range: '60-130 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '180-200 kg total system load',
      motorPower: '250W-750W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '28-33 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Tern genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Tail Cargo class — 250w-750w high torque motor',
      '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-benno-boost-e-10d-performance',
    slug: 'allied-benno-boost-e-10d-performance',
    name: 'Benno Boost E 10D Performance',
    price: 6599,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Benno Boost E 10D Performance — long-tail cargo with 36V 14Ah x2 / 48V 14Ah lithium power and 60-130 km under full payload range.',
    description: 'The Benno Boost E 10D Performance is part of ALLIED\'s authorized Benno long-tail cargo range, featuring 250w-750w high torque motor, 36v 14ah x2 / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/546/800/600'],
    specs: {
      voltage: '36V/48V Dual Pack',
      batteryType: '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      range: '60-130 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '180-200 kg total system load',
      motorPower: '250W-750W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '28-33 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Benno genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Tail Cargo class — 250w-750w high torque motor',
      '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-yuba-spicy-curry-v3',
    slug: 'allied-yuba-spicy-curry-v3',
    name: 'Yuba Spicy Curry V3',
    price: 5899,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Yuba Spicy Curry V3 — long-tail cargo with 36V 14Ah x2 / 48V 14Ah lithium power and 60-130 km under full payload range.',
    description: 'The Yuba Spicy Curry V3 is part of ALLIED\'s authorized Yuba long-tail cargo range, featuring 250w-750w high torque motor, 36v 14ah x2 / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/688/800/600'],
    specs: {
      voltage: '36V/48V Dual Pack',
      batteryType: '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      range: '60-130 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '180-200 kg total system load',
      motorPower: '250W-750W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '28-33 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Yuba genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Tail Cargo class — 250w-750w high torque motor',
      '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-rad-power-radwagon-4-pro',
    slug: 'allied-rad-power-radwagon-4-pro',
    name: 'Rad Power RadWagon 4 Pro',
    price: 3199,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Rad Power Bikes Rad Power RadWagon 4 Pro — long-tail cargo with 36V 14Ah x2 / 48V 14Ah lithium power and 60-130 km under full payload range.',
    description: 'The Rad Power RadWagon 4 Pro is part of ALLIED\'s authorized Rad Power Bikes long-tail cargo range, featuring 250w-750w high torque motor, 36v 14ah x2 / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/808/800/600'],
    specs: {
      voltage: '36V/48V Dual Pack',
      batteryType: '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      range: '60-130 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '180-200 kg total system load',
      motorPower: '250W-750W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '28-33 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Rad Power Bikes genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Tail Cargo class — 250w-750w high torque motor',
      '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-pedego-stretch-cargo',
    slug: 'allied-pedego-stretch-cargo',
    name: 'Pedego Stretch Cargo',
    price: 4299,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    featured: false,
    shortDescription: 'Pedego Stretch Cargo — long-tail cargo with 36V 14Ah x2 / 48V 14Ah lithium power and 60-130 km under full payload range.',
    description: 'The Pedego Stretch Cargo is part of ALLIED\'s authorized Pedego long-tail cargo range, featuring 250w-750w high torque motor, 36v 14ah x2 / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/334/800/600'],
    specs: {
      voltage: '36V/48V Dual Pack',
      batteryType: '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      range: '60-130 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '180-200 kg total system load',
      motorPower: '250W-750W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '28-33 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Pedego genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Tail Cargo class — 250w-750w high torque motor',
      '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tern-hsd-p9-performance',
    slug: 'allied-tern-hsd-p9-performance',
    name: 'Tern HSD P9 Performance',
    price: 5899,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Tern HSD P9 Performance — compact cargo with 36V 14Ah / 48V 14Ah lithium power and 60-90 km range.',
    description: 'The Tern HSD P9 Performance is part of ALLIED\'s authorized Tern compact cargo range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/256/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '60-90 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '150-180 kg total system load',
      motorPower: '250W-500W Motor',
      chargeTime: '4.5 Hours',
      dimensions: 'Varies by model',
      weight: '26-30 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Tern genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Cargo class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-blix-packa-genie-dual-battery',
    slug: 'allied-blix-packa-genie-dual-battery',
    name: 'Blix Packa Genie Dual Battery',
    price: 3699,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Blix Packa Genie Dual Battery — compact cargo with 36V 14Ah / 48V 14Ah lithium power and 60-90 km range.',
    description: 'The Blix Packa Genie Dual Battery is part of ALLIED\'s authorized Blix compact cargo range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/204/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '60-90 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '150-180 kg total system load',
      motorPower: '250W-500W Motor',
      chargeTime: '4.5 Hours',
      dimensions: 'Varies by model',
      weight: '26-30 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Blix genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Cargo class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-benno-remidemi-9d',
    slug: 'allied-benno-remidemi-9d',
    name: 'Benno RemiDemi 9D',
    price: 4499,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Benno RemiDemi 9D — compact cargo with 36V 14Ah / 48V 14Ah lithium power and 60-90 km range.',
    description: 'The Benno RemiDemi 9D is part of ALLIED\'s authorized Benno compact cargo range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/247/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '60-90 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '150-180 kg total system load',
      motorPower: '250W-500W Motor',
      chargeTime: '4.5 Hours',
      dimensions: 'Varies by model',
      weight: '26-30 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Benno genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Cargo class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-yuba-kombi-e5',
    slug: 'allied-yuba-kombi-e5',
    name: 'Yuba Kombi E5',
    price: 3999,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Yuba Kombi E5 — compact cargo with 36V 14Ah / 48V 14Ah lithium power and 60-90 km range.',
    description: 'The Yuba Kombi E5 is part of ALLIED\'s authorized Yuba compact cargo range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/977/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '60-90 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '150-180 kg total system load',
      motorPower: '250W-500W Motor',
      chargeTime: '4.5 Hours',
      dimensions: 'Varies by model',
      weight: '26-30 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Yuba genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Cargo class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-specialized-haul-st',
    slug: 'allied-specialized-haul-st',
    name: 'Specialized Haul ST',
    price: 4299,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Specialized Haul ST — compact cargo with 36V 14Ah / 48V 14Ah lithium power and 60-90 km range.',
    description: 'The Specialized Haul ST is part of ALLIED\'s authorized Specialized compact cargo range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/713/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '60-90 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '150-180 kg total system load',
      motorPower: '250W-500W Motor',
      chargeTime: '4.5 Hours',
      dimensions: 'Varies by model',
      weight: '26-30 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Specialized genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Cargo class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-riese-m-ller-packster-70-vario',
    slug: 'allied-riese-m-ller-packster-70-vario',
    name: 'Riese & Müller Packster 70 Vario',
    price: 11999,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Riese & Müller Packster 70 Vario — front-loader (box) bikes with 48V 14Ah x2 lithium power and 80-150 km under full payload range.',
    description: 'The Riese & Müller Packster 70 Vario is part of ALLIED\'s authorized Riese & Müller front-loader (box) bikes range, featuring 250w-500w high torque motor, 48v 14ah x2 lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/995/800/600'],
    specs: {
      voltage: '48V Dual Pack',
      batteryType: '48V 14Ah x2 Lithium-ion',
      range: '80-150 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '200-250 kg total system load',
      motorPower: '250W-500W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '34-40 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Riese & Müller genuine authorized stock, inspected prior to Australian dispatch',
      'Front-Loader (Box) Bikes class — 250w-500w high torque motor',
      '48V 14Ah x2 Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-urban-arrow-family-cargo-active',
    slug: 'allied-urban-arrow-family-cargo-active',
    name: 'Urban Arrow Family Cargo Active',
    price: 9499,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Urban Arrow Family Cargo Active — front-loader (box) bikes with 48V 14Ah x2 lithium power and 80-150 km under full payload range.',
    description: 'The Urban Arrow Family Cargo Active is part of ALLIED\'s authorized Urban Arrow front-loader (box) bikes range, featuring 250w-500w high torque motor, 48v 14ah x2 lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/245/800/600'],
    specs: {
      voltage: '48V Dual Pack',
      batteryType: '48V 14Ah x2 Lithium-ion',
      range: '80-150 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '200-250 kg total system load',
      motorPower: '250W-500W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '34-40 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Urban Arrow genuine authorized stock, inspected prior to Australian dispatch',
      'Front-Loader (Box) Bikes class — 250w-500w high torque motor',
      '48V 14Ah x2 Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-cube-cargo-sport-dual-hybrid',
    slug: 'allied-cube-cargo-sport-dual-hybrid',
    name: 'Cube Cargo Sport Dual Hybrid',
    price: 8299,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Cube Cargo Sport Dual Hybrid — front-loader (box) bikes with 48V 14Ah x2 lithium power and 80-150 km under full payload range.',
    description: 'The Cube Cargo Sport Dual Hybrid is part of ALLIED\'s authorized Cube front-loader (box) bikes range, featuring 250w-500w high torque motor, 48v 14ah x2 lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/656/800/600'],
    specs: {
      voltage: '48V Dual Pack',
      batteryType: '48V 14Ah x2 Lithium-ion',
      range: '80-150 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '200-250 kg total system load',
      motorPower: '250W-500W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '34-40 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Cube genuine authorized stock, inspected prior to Australian dispatch',
      'Front-Loader (Box) Bikes class — 250w-500w high torque motor',
      '48V 14Ah x2 Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-larry-vs-harry-bullitt-e-steps',
    slug: 'allied-larry-vs-harry-bullitt-e-steps',
    name: 'Larry vs Harry Bullitt E-Steps',
    price: 8999,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    featured: false,
    shortDescription: 'Larry vs Harry Bullitt E-Steps — front-loader (box) bikes with 48V 14Ah x2 lithium power and 80-150 km under full payload range.',
    description: 'The Larry vs Harry Bullitt E-Steps is part of ALLIED\'s authorized Larry vs Harry front-loader (box) bikes range, featuring 250w-500w high torque motor, 48v 14ah x2 lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/512/800/600'],
    specs: {
      voltage: '48V Dual Pack',
      batteryType: '48V 14Ah x2 Lithium-ion',
      range: '80-150 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '200-250 kg total system load',
      motorPower: '250W-500W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '34-40 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Larry vs Harry genuine authorized stock, inspected prior to Australian dispatch',
      'Front-Loader (Box) Bikes class — 250w-500w high torque motor',
      '48V 14Ah x2 Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-triobike-cargo-e-drive',
    slug: 'allied-triobike-cargo-e-drive',
    name: 'Triobike Cargo E-Drive',
    price: 9899,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Triobike Cargo E-Drive — front-loader (box) bikes with 48V 14Ah x2 lithium power and 80-150 km under full payload range.',
    description: 'The Triobike Cargo E-Drive is part of ALLIED\'s authorized Triobike front-loader (box) bikes range, featuring 250w-500w high torque motor, 48v 14ah x2 lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/773/800/600'],
    specs: {
      voltage: '48V Dual Pack',
      batteryType: '48V 14Ah x2 Lithium-ion',
      range: '80-150 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '200-250 kg total system load',
      motorPower: '250W-500W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '34-40 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Triobike genuine authorized stock, inspected prior to Australian dispatch',
      'Front-Loader (Box) Bikes class — 250w-500w high torque motor',
      '48V 14Ah x2 Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tern-gsd-s10-cargo-e-bike',
    slug: 'allied-tern-gsd-s10-cargo-e-bike',
    name: 'Tern GSD S10 Cargo E-Bike',
    price: 7499,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Tern GSD S10 Cargo E-Bike — long-tail cargo with 36V 14Ah x2 / 48V 14Ah lithium power and 60-130 km under full payload range.',
    description: 'The Tern GSD S10 Cargo E-Bike is part of ALLIED\'s authorized Tern long-tail cargo range, featuring 250w-750w high torque motor, 36v 14ah x2 / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/180/800/600'],
    specs: {
      voltage: '36V/48V Dual Pack',
      batteryType: '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      range: '60-130 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '180-200 kg total system load',
      motorPower: '250W-750W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '28-33 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Tern genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Tail Cargo class — 250w-750w high torque motor',
      '36V 14Ah x2 / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-riese-muller-load-75-cargo',
    slug: 'allied-riese-muller-load-75-cargo',
    name: 'Riese & Muller Load 75 Cargo',
    price: 12999,
    category: 'electric-bikes',
    subcategory: 'cargo-family-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Riese & Müller Riese & Muller Load 75 Cargo — front-loader (box) bikes with 48V 14Ah x2 lithium power and 80-150 km under full payload range.',
    description: 'The Riese & Muller Load 75 Cargo is part of ALLIED\'s authorized Riese & Müller front-loader (box) bikes range, featuring 250w-500w high torque motor, 48v 14ah x2 lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/879/800/600'],
    specs: {
      voltage: '48V Dual Pack',
      batteryType: '48V 14Ah x2 Lithium-ion',
      range: '80-150 km under full payload',
      topSpeed: '25 km/h',
      payloadCapacity: '200-250 kg total system load',
      motorPower: '250W-500W High Torque Motor',
      chargeTime: '5 Hours per pack',
      dimensions: 'Varies by model',
      weight: '34-40 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Riese & Müller genuine authorized stock, inspected prior to Australian dispatch',
      'Front-Loader (Box) Bikes class — 250w-500w high torque motor',
      '48V 14Ah x2 Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-merida-eone-forty-400',
    slug: 'allied-merida-eone-forty-400',
    name: 'Merida eOne-Forty 400',
    price: 5499,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Merida eOne-Forty 400 — full-suspension emtb with 36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose) lithium power and 60-100 km trail range range.',
    description: 'The Merida eOne-Forty 400 is part of ALLIED\'s authorized Merida full-suspension emtb range, featuring 250w-750w mid-drive motor, 36v 14ah / 48v 17.5ah (bosch/shimano/brose), and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/169/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      range: '60-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '135 kg max load',
      motorPower: '250W-750W Mid-Drive Motor',
      chargeTime: '4.5-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-24 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Merida genuine authorized stock, inspected prior to Australian dispatch',
      'Full-Suspension eMTB class — 250w-750w mid-drive motor',
      '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-specialized-turbo-levo-alloy',
    slug: 'allied-specialized-turbo-levo-alloy',
    name: 'Specialized Turbo Levo Alloy',
    price: 7999,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Specialized Turbo Levo Alloy — full-suspension emtb with 36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose) lithium power and 60-100 km trail range range.',
    description: 'The Specialized Turbo Levo Alloy is part of ALLIED\'s authorized Specialized full-suspension emtb range, featuring 250w-750w mid-drive motor, 36v 14ah / 48v 17.5ah (bosch/shimano/brose), and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/922/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      range: '60-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '135 kg max load',
      motorPower: '250W-750W Mid-Drive Motor',
      chargeTime: '4.5-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-24 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Specialized genuine authorized stock, inspected prior to Australian dispatch',
      'Full-Suspension eMTB class — 250w-750w mid-drive motor',
      '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-trek-rail-5-gen-3',
    slug: 'allied-trek-rail-5-gen-3',
    name: 'Trek Rail 5 Gen 3',
    price: 7299,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Trek Rail 5 Gen 3 — full-suspension emtb with 36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose) lithium power and 60-100 km trail range range.',
    description: 'The Trek Rail 5 Gen 3 is part of ALLIED\'s authorized Trek full-suspension emtb range, featuring 250w-750w mid-drive motor, 36v 14ah / 48v 17.5ah (bosch/shimano/brose), and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/833/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      range: '60-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '135 kg max load',
      motorPower: '250W-750W Mid-Drive Motor',
      chargeTime: '4.5-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-24 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Trek genuine authorized stock, inspected prior to Australian dispatch',
      'Full-Suspension eMTB class — 250w-750w mid-drive motor',
      '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-giant-trance-x-advanced-e-2',
    slug: 'allied-giant-trance-x-advanced-e-2',
    name: 'Giant Trance X Advanced E+ 2',
    price: 8499,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Giant Trance X Advanced E+ 2 — full-suspension emtb with 36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose) lithium power and 60-100 km trail range range.',
    description: 'The Giant Trance X Advanced E+ 2 is part of ALLIED\'s authorized Giant full-suspension emtb range, featuring 250w-750w mid-drive motor, 36v 14ah / 48v 17.5ah (bosch/shimano/brose), and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/761/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      range: '60-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '135 kg max load',
      motorPower: '250W-750W Mid-Drive Motor',
      chargeTime: '4.5-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-24 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Giant genuine authorized stock, inspected prior to Australian dispatch',
      'Full-Suspension eMTB class — 250w-750w mid-drive motor',
      '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-norco-sight-vlt-a2',
    slug: 'allied-norco-sight-vlt-a2',
    name: 'Norco Sight VLT A2',
    price: 7899,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Norco Sight VLT A2 — full-suspension emtb with 36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose) lithium power and 60-100 km trail range range.',
    description: 'The Norco Sight VLT A2 is part of ALLIED\'s authorized Norco full-suspension emtb range, featuring 250w-750w mid-drive motor, 36v 14ah / 48v 17.5ah (bosch/shimano/brose), and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/102/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      range: '60-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '135 kg max load',
      motorPower: '250W-750W Mid-Drive Motor',
      chargeTime: '4.5-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-24 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Norco genuine authorized stock, inspected prior to Australian dispatch',
      'Full-Suspension eMTB class — 250w-750w mid-drive motor',
      '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-specialized-turbo-levo-expert',
    slug: 'allied-specialized-turbo-levo-expert',
    name: 'Specialized Turbo Levo Expert',
    price: 13999,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Specialized Turbo Levo Expert — full-suspension emtb with 36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose) lithium power and 60-100 km trail range range.',
    description: 'The Specialized Turbo Levo Expert is part of ALLIED\'s authorized Specialized full-suspension emtb range, featuring 250w-750w mid-drive motor, 36v 14ah / 48v 17.5ah (bosch/shimano/brose), and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/435/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      range: '60-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '135 kg max load',
      motorPower: '250W-750W Mid-Drive Motor',
      chargeTime: '4.5-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-24 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Specialized genuine authorized stock, inspected prior to Australian dispatch',
      'Full-Suspension eMTB class — 250w-750w mid-drive motor',
      '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-trek-rail-9-8-gx-axs',
    slug: 'allied-trek-rail-9-8-gx-axs',
    name: 'Trek Rail 9.8 GX AXS',
    price: 12499,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Trek Rail 9.8 GX AXS — full-suspension emtb with 36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose) lithium power and 60-100 km trail range range.',
    description: 'The Trek Rail 9.8 GX AXS is part of ALLIED\'s authorized Trek full-suspension emtb range, featuring 250w-750w mid-drive motor, 36v 14ah / 48v 17.5ah (bosch/shimano/brose), and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/428/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      range: '60-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '135 kg max load',
      motorPower: '250W-750W Mid-Drive Motor',
      chargeTime: '4.5-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-24 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Trek genuine authorized stock, inspected prior to Australian dispatch',
      'Full-Suspension eMTB class — 250w-750w mid-drive motor',
      '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-giant-reign-e-1-pro',
    slug: 'allied-giant-reign-e-1-pro',
    name: 'Giant Reign E+ 1 Pro',
    price: 9999,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Giant Reign E+ 1 Pro — full-suspension emtb with 36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose) lithium power and 60-100 km trail range range.',
    description: 'The Giant Reign E+ 1 Pro is part of ALLIED\'s authorized Giant full-suspension emtb range, featuring 250w-750w mid-drive motor, 36v 14ah / 48v 17.5ah (bosch/shimano/brose), and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/208/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      range: '60-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '135 kg max load',
      motorPower: '250W-750W Mid-Drive Motor',
      chargeTime: '4.5-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-24 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Giant genuine authorized stock, inspected prior to Australian dispatch',
      'Full-Suspension eMTB class — 250w-750w mid-drive motor',
      '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-merida-eone-sixty-7000',
    slug: 'allied-merida-eone-sixty-7000',
    name: 'Merida eOne-Sixty 7000',
    price: 9299,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    featured: false,
    shortDescription: 'Merida eOne-Sixty 7000 — full-suspension emtb with 36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose) lithium power and 60-100 km trail range range.',
    description: 'The Merida eOne-Sixty 7000 is part of ALLIED\'s authorized Merida full-suspension emtb range, featuring 250w-750w mid-drive motor, 36v 14ah / 48v 17.5ah (bosch/shimano/brose), and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/892/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      range: '60-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '135 kg max load',
      motorPower: '250W-750W Mid-Drive Motor',
      chargeTime: '4.5-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-24 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Merida genuine authorized stock, inspected prior to Australian dispatch',
      'Full-Suspension eMTB class — 250w-750w mid-drive motor',
      '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-cannondale-moterra-neo-carbon-2',
    slug: 'allied-cannondale-moterra-neo-carbon-2',
    name: 'Cannondale Moterra Neo Carbon 2',
    price: 10499,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Cannondale Moterra Neo Carbon 2 — full-suspension emtb with 36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose) lithium power and 60-100 km trail range range.',
    description: 'The Cannondale Moterra Neo Carbon 2 is part of ALLIED\'s authorized Cannondale full-suspension emtb range, featuring 250w-750w mid-drive motor, 36v 14ah / 48v 17.5ah (bosch/shimano/brose), and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/900/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      range: '60-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '135 kg max load',
      motorPower: '250W-750W Mid-Drive Motor',
      chargeTime: '4.5-5 Hours',
      dimensions: 'Varies by model',
      weight: '22-24 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Cannondale genuine authorized stock, inspected prior to Australian dispatch',
      'Full-Suspension eMTB class — 250w-750w mid-drive motor',
      '36V 14Ah / 48V 17.5Ah (Bosch/Shimano/Brose)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-specialized-turbo-tero-3-0',
    slug: 'allied-specialized-turbo-tero-3-0',
    name: 'Specialized Turbo Tero 3.0',
    price: 4899,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Specialized Turbo Tero 3.0 — hardtail trail emtb with 36V 14Ah / 48V 14Ah lithium power and 70-100 km trail range range.',
    description: 'The Specialized Turbo Tero 3.0 is part of ALLIED\'s authorized Specialized hardtail trail emtb range, featuring 250w-500w mid-drive motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/444/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '130 kg max load',
      motorPower: '250W-500W Mid-Drive Motor',
      chargeTime: '4.5 Hours',
      dimensions: 'Varies by model',
      weight: '21-23 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Specialized genuine authorized stock, inspected prior to Australian dispatch',
      'Hardtail Trail eMTB class — 250w-500w mid-drive motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-trek-marlin-6-hardtail',
    slug: 'allied-trek-marlin-6-hardtail',
    name: 'Trek Marlin+ 6 Hardtail',
    price: 3899,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Trek Marlin+ 6 Hardtail — hardtail trail emtb with 36V 14Ah / 48V 14Ah lithium power and 70-100 km trail range range.',
    description: 'The Trek Marlin+ 6 Hardtail is part of ALLIED\'s authorized Trek hardtail trail emtb range, featuring 250w-500w mid-drive motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/697/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '130 kg max load',
      motorPower: '250W-500W Mid-Drive Motor',
      chargeTime: '4.5 Hours',
      dimensions: 'Varies by model',
      weight: '21-23 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Trek genuine authorized stock, inspected prior to Australian dispatch',
      'Hardtail Trail eMTB class — 250w-500w mid-drive motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-giant-talon-e-29er',
    slug: 'allied-giant-talon-e-29er',
    name: 'Giant Talon E+ 29er',
    price: 3299,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Giant Talon E+ 29er — hardtail trail emtb with 36V 14Ah / 48V 14Ah lithium power and 70-100 km trail range range.',
    description: 'The Giant Talon E+ 29er is part of ALLIED\'s authorized Giant hardtail trail emtb range, featuring 250w-500w mid-drive motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/474/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '130 kg max load',
      motorPower: '250W-500W Mid-Drive Motor',
      chargeTime: '4.5 Hours',
      dimensions: 'Varies by model',
      weight: '21-23 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Giant genuine authorized stock, inspected prior to Australian dispatch',
      'Hardtail Trail eMTB class — 250w-500w mid-drive motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-merida-ebig-nine-400',
    slug: 'allied-merida-ebig-nine-400',
    name: 'Merida eBig.Nine 400',
    price: 3999,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    featured: false,
    shortDescription: 'Merida eBig.Nine 400 — hardtail trail emtb with 36V 14Ah / 48V 14Ah lithium power and 70-100 km trail range range.',
    description: 'The Merida eBig.Nine 400 is part of ALLIED\'s authorized Merida hardtail trail emtb range, featuring 250w-500w mid-drive motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/928/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '130 kg max load',
      motorPower: '250W-500W Mid-Drive Motor',
      chargeTime: '4.5 Hours',
      dimensions: 'Varies by model',
      weight: '21-23 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Merida genuine authorized stock, inspected prior to Australian dispatch',
      'Hardtail Trail eMTB class — 250w-500w mid-drive motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-cube-reaction-hybrid-performance',
    slug: 'allied-cube-reaction-hybrid-performance',
    name: 'Cube Reaction Hybrid Performance',
    price: 3699,
    category: 'electric-bikes',
    subcategory: 'electric-mountain-bikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Cube Reaction Hybrid Performance — hardtail trail emtb with 36V 14Ah / 48V 14Ah lithium power and 70-100 km trail range range.',
    description: 'The Cube Reaction Hybrid Performance is part of ALLIED\'s authorized Cube hardtail trail emtb range, featuring 250w-500w mid-drive motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h (off-road capable). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/266/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '70-100 km trail range',
      topSpeed: '25 km/h (Off-road capable)',
      payloadCapacity: '130 kg max load',
      motorPower: '250W-500W Mid-Drive Motor',
      chargeTime: '4.5 Hours',
      dimensions: 'Varies by model',
      weight: '21-23 kg',
      warranty: '2 Years Frame & Drive System'
    },
    features: [
      'Cube genuine authorized stock, inspected prior to Australian dispatch',
      'Hardtail Trail eMTB class — 250w-500w mid-drive motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-brompton-electric-c-line-6-speed',
    slug: 'allied-brompton-electric-c-line-6-speed',
    name: 'Brompton Electric C Line 6-Speed',
    price: 5299,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Brompton Electric C Line 6-Speed — compact folding commuters with 36V 8-14Ah lithium power and 40-70 km range.',
    description: 'The Brompton Electric C Line 6-Speed is part of ALLIED\'s authorized Brompton compact folding commuters range, featuring 250w-350w rear hub motor, 36v 8-14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/652/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 8-14Ah Lithium-ion',
      range: '40-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110-120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '14-22 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Brompton genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Folding Commuters class — 250w-350w rear hub motor',
      '36V 8-14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tern-vektron-q9-folding',
    slug: 'allied-tern-vektron-q9-folding',
    name: 'Tern Vektron Q9 Folding',
    price: 4899,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Tern Vektron Q9 Folding — compact folding commuters with 36V 8-14Ah lithium power and 40-70 km range.',
    description: 'The Tern Vektron Q9 Folding is part of ALLIED\'s authorized Tern compact folding commuters range, featuring 250w-350w rear hub motor, 36v 8-14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/874/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 8-14Ah Lithium-ion',
      range: '40-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110-120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '14-22 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Tern genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Folding Commuters class — 250w-350w rear hub motor',
      '36V 8-14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fiido-d11-compact-folder',
    slug: 'allied-fiido-d11-compact-folder',
    name: 'Fiido D11 Compact Folder',
    price: 1499,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Fiido D11 Compact Folder — compact folding commuters with 36V 8-14Ah lithium power and 40-70 km range.',
    description: 'The Fiido D11 Compact Folder is part of ALLIED\'s authorized Fiido compact folding commuters range, featuring 250w-350w rear hub motor, 36v 8-14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/275/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 8-14Ah Lithium-ion',
      range: '40-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110-120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '14-22 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Fiido genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Folding Commuters class — 250w-350w rear hub motor',
      '36V 8-14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-mirider-one-gb3',
    slug: 'allied-mirider-one-gb3',
    name: 'MiRiDER One GB3',
    price: 2899,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'MiRiDER One GB3 — compact folding commuters with 36V 8-14Ah lithium power and 40-70 km range.',
    description: 'The MiRiDER One GB3 is part of ALLIED\'s authorized MiRiDER compact folding commuters range, featuring 250w-350w rear hub motor, 36v 8-14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/647/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 8-14Ah Lithium-ion',
      range: '40-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110-120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '14-22 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'MiRiDER genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Folding Commuters class — 250w-350w rear hub motor',
      '36V 8-14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-leitner-folding-e-bike-step-thru',
    slug: 'allied-leitner-folding-e-bike-step-thru',
    name: 'Leitner Folding E-Bike Step-Thru',
    price: 1599,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Leitner Folding E-Bike Step-Thru — compact folding commuters with 36V 8-14Ah lithium power and 40-70 km range.',
    description: 'The Leitner Folding E-Bike Step-Thru is part of ALLIED\'s authorized Leitner compact folding commuters range, featuring 250w-350w rear hub motor, 36v 8-14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/897/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 8-14Ah Lithium-ion',
      range: '40-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110-120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '14-22 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Leitner genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Folding Commuters class — 250w-350w rear hub motor',
      '36V 8-14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tern-vektron-s10-gen-2',
    slug: 'allied-tern-vektron-s10-gen-2',
    name: 'Tern Vektron S10 Gen 2',
    price: 5699,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Tern Vektron S10 Gen 2 — compact folding commuters with 36V 8-14Ah lithium power and 40-70 km range.',
    description: 'The Tern Vektron S10 Gen 2 is part of ALLIED\'s authorized Tern compact folding commuters range, featuring 250w-350w rear hub motor, 36v 8-14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/457/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 8-14Ah Lithium-ion',
      range: '40-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110-120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '14-22 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Tern genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Folding Commuters class — 250w-350w rear hub motor',
      '36V 8-14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-qualisports-volador-20',
    slug: 'allied-qualisports-volador-20',
    name: 'Qualisports Volador 20',
    price: 1899,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Qualisports Volador 20 — compact folding commuters with 36V 8-14Ah lithium power and 40-70 km range.',
    description: 'The Qualisports Volador 20 is part of ALLIED\'s authorized Qualisports compact folding commuters range, featuring 250w-350w rear hub motor, 36v 8-14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/823/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 8-14Ah Lithium-ion',
      range: '40-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110-120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '14-22 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Qualisports genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Folding Commuters class — 250w-350w rear hub motor',
      '36V 8-14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dahon-unio-e20',
    slug: 'allied-dahon-unio-e20',
    name: 'DAHON Unio E20',
    price: 2499,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'DAHON Unio E20 — compact folding commuters with 36V 8-14Ah lithium power and 40-70 km range.',
    description: 'The DAHON Unio E20 is part of ALLIED\'s authorized DAHON compact folding commuters range, featuring 250w-350w rear hub motor, 36v 8-14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/145/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 8-14Ah Lithium-ion',
      range: '40-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110-120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '14-22 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'DAHON genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Folding Commuters class — 250w-350w rear hub motor',
      '36V 8-14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fiido-d21-lightweight-folder',
    slug: 'allied-fiido-d21-lightweight-folder',
    name: 'Fiido D21 Lightweight Folder',
    price: 1699,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    featured: false,
    shortDescription: 'Fiido D21 Lightweight Folder — compact folding commuters with 36V 8-14Ah lithium power and 40-70 km range.',
    description: 'The Fiido D21 Lightweight Folder is part of ALLIED\'s authorized Fiido compact folding commuters range, featuring 250w-350w rear hub motor, 36v 8-14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/106/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 8-14Ah Lithium-ion',
      range: '40-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110-120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '14-22 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Fiido genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Folding Commuters class — 250w-350w rear hub motor',
      '36V 8-14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-leitner-superlite-folding-20',
    slug: 'allied-leitner-superlite-folding-20',
    name: 'Leitner Superlite Folding 20',
    price: 1699,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Leitner Superlite Folding 20 — compact folding commuters with 36V 8-14Ah lithium power and 40-70 km range.',
    description: 'The Leitner Superlite Folding 20 is part of ALLIED\'s authorized Leitner compact folding commuters range, featuring 250w-350w rear hub motor, 36v 8-14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/117/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 8-14Ah Lithium-ion',
      range: '40-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110-120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '14-22 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Leitner genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Folding Commuters class — 250w-350w rear hub motor',
      '36V 8-14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dirodi-cortina-fat-tyre-folder',
    slug: 'allied-dirodi-cortina-fat-tyre-folder',
    name: 'DiroDi Cortina Fat Tyre Folder',
    price: 2499,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'DiroDi Cortina Fat Tyre Folder — fat tyre folders with 36V 10Ah / 48V 13Ah lithium power and 45-65 km range.',
    description: 'The DiroDi Cortina Fat Tyre Folder is part of ALLIED\'s authorized DiroDi fat tyre folders range, featuring 250w-750w motor, 36v 10ah / 48v 13ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/431/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 13Ah Lithium-ion',
      range: '45-65 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-750W Motor',
      chargeTime: '4 Hours',
      dimensions: 'Varies by model',
      weight: '24-28 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'DiroDi genuine authorized stock, inspected prior to Australian dispatch',
      'Fat Tyre Folders class — 250w-750w motor',
      '36V 10Ah / 48V 13Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-rad-power-radexpand-5',
    slug: 'allied-rad-power-radexpand-5',
    name: 'Rad Power RadExpand 5',
    price: 2399,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Rad Power Bikes Rad Power RadExpand 5 — fat tyre folders with 36V 10Ah / 48V 13Ah lithium power and 45-65 km range.',
    description: 'The Rad Power RadExpand 5 is part of ALLIED\'s authorized Rad Power Bikes fat tyre folders range, featuring 250w-750w motor, 36v 10ah / 48v 13ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/427/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 13Ah Lithium-ion',
      range: '45-65 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-750W Motor',
      chargeTime: '4 Hours',
      dimensions: 'Varies by model',
      weight: '24-28 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Rad Power Bikes genuine authorized stock, inspected prior to Australian dispatch',
      'Fat Tyre Folders class — 250w-750w motor',
      '36V 10Ah / 48V 13Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-eunorau-e-fat-step-20',
    slug: 'allied-eunorau-e-fat-step-20',
    name: 'Eunorau E-Fat-Step 20',
    price: 2299,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Eunorau E-Fat-Step 20 — fat tyre folders with 36V 10Ah / 48V 13Ah lithium power and 45-65 km range.',
    description: 'The Eunorau E-Fat-Step 20 is part of ALLIED\'s authorized Eunorau fat tyre folders range, featuring 250w-750w motor, 36v 10ah / 48v 13ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/480/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 13Ah Lithium-ion',
      range: '45-65 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-750W Motor',
      chargeTime: '4 Hours',
      dimensions: 'Varies by model',
      weight: '24-28 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Eunorau genuine authorized stock, inspected prior to Australian dispatch',
      'Fat Tyre Folders class — 250w-750w motor',
      '36V 10Ah / 48V 13Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fiido-m1-pro-fat-folder',
    slug: 'allied-fiido-m1-pro-fat-folder',
    name: 'Fiido M1 Pro Fat Folder',
    price: 1799,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Fiido M1 Pro Fat Folder — fat tyre folders with 36V 10Ah / 48V 13Ah lithium power and 45-65 km range.',
    description: 'The Fiido M1 Pro Fat Folder is part of ALLIED\'s authorized Fiido fat tyre folders range, featuring 250w-750w motor, 36v 10ah / 48v 13ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/514/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 13Ah Lithium-ion',
      range: '45-65 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-750W Motor',
      chargeTime: '4 Hours',
      dimensions: 'Varies by model',
      weight: '24-28 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Fiido genuine authorized stock, inspected prior to Australian dispatch',
      'Fat Tyre Folders class — 250w-750w motor',
      '36V 10Ah / 48V 13Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-engwe-ep-2-pro-fat-folder',
    slug: 'allied-engwe-ep-2-pro-fat-folder',
    name: 'Engwe EP-2 Pro Fat Folder',
    price: 1699,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Engwe EP-2 Pro Fat Folder — fat tyre folders with 36V 10Ah / 48V 13Ah lithium power and 45-65 km range.',
    description: 'The Engwe EP-2 Pro Fat Folder is part of ALLIED\'s authorized Engwe fat tyre folders range, featuring 250w-750w motor, 36v 10ah / 48v 13ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/967/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 13Ah Lithium-ion',
      range: '45-65 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-750W Motor',
      chargeTime: '4 Hours',
      dimensions: 'Varies by model',
      weight: '24-28 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Engwe genuine authorized stock, inspected prior to Australian dispatch',
      'Fat Tyre Folders class — 250w-750w motor',
      '36V 10Ah / 48V 13Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-vamos-doblez-foldable-e-bike',
    slug: 'allied-vamos-doblez-foldable-e-bike',
    name: 'Vamos Doblez Foldable E-Bike',
    price: 3995,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Vamos Doblez Foldable E-Bike — compact folding commuters with 36V 8-14Ah lithium power and 40-70 km range.',
    description: 'The Vamos Doblez Foldable E-Bike is part of ALLIED\'s authorized Vamos compact folding commuters range, featuring 250w-350w rear hub motor, 36v 8-14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/360/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 8-14Ah Lithium-ion',
      range: '40-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110-120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '14-22 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Vamos genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Folding Commuters class — 250w-350w rear hub motor',
      '36V 8-14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-brompton-electric-c-line-explore-12-speed-mid',
    slug: 'allied-brompton-electric-c-line-explore-12-speed-mid',
    name: 'Brompton Electric C Line Explore 12-Speed Mid',
    price: 7290,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Brompton Electric C Line Explore 12-Speed Mid — compact folding commuters with 36V 8-14Ah lithium power and 40-70 km range.',
    description: 'The Brompton Electric C Line Explore 12-Speed Mid is part of ALLIED\'s authorized Brompton compact folding commuters range, featuring 250w-350w rear hub motor, 36v 8-14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/842/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 8-14Ah Lithium-ion',
      range: '40-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110-120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '14-22 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Brompton genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Folding Commuters class — 250w-350w rear hub motor',
      '36V 8-14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-mamba-nomad-origins-20-inch-folding-e-bike',
    slug: 'allied-mamba-nomad-origins-20-inch-folding-e-bike',
    name: 'Mamba Nomad Origins 20 Inch Folding E-Bike',
    price: 1249,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Mamba Nomad Origins 20 Inch Folding E-Bike — compact folding commuters with 36V 8-14Ah lithium power and 40-70 km range.',
    description: 'The Mamba Nomad Origins 20 Inch Folding E-Bike is part of ALLIED\'s authorized Mamba compact folding commuters range, featuring 250w-350w rear hub motor, 36v 8-14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/946/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 8-14Ah Lithium-ion',
      range: '40-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110-120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '14-22 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Mamba genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Folding Commuters class — 250w-350w rear hub motor',
      '36V 8-14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-easybike-20-inch-folding-e-bike-36v-8ah',
    slug: 'allied-easybike-20-inch-folding-e-bike-36v-8ah',
    name: 'Easybike 20 Inch Folding E-Bike 36V 8Ah',
    price: 899,
    category: 'electric-bikes',
    subcategory: 'foldable-electric-bikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Easybike 20 Inch Folding E-Bike 36V 8Ah — compact folding commuters with 36V 8-14Ah lithium power and 40-70 km range.',
    description: 'The Easybike 20 Inch Folding E-Bike 36V 8Ah is part of ALLIED\'s authorized Easybike compact folding commuters range, featuring 250w-350w rear hub motor, 36v 8-14ah lithium-ion, and a top speed of 25 km/h (street legal au). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/786/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 8-14Ah Lithium-ion',
      range: '40-70 km per charge',
      topSpeed: '25 km/h (Street Legal AU)',
      payloadCapacity: '110-120 kg max load',
      motorPower: '250W-350W Rear Hub Motor',
      chargeTime: '3.5-4 Hours',
      dimensions: 'Varies by model',
      weight: '14-22 kg (folded)',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Easybike genuine authorized stock, inspected prior to Australian dispatch',
      'Compact Folding Commuters class — 250w-350w rear hub motor',
      '36V 8-14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-super73-s2-hudson-blue',
    slug: 'allied-super73-s2-hudson-blue',
    name: 'Super73 S2 Hudson Blue',
    price: 4999,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Super73 S2 Hudson Blue — retro / moped-style e-bikes with 48V 15.6Ah / 52V 20Ah lithium power and 50-90 km range.',
    description: 'The Super73 S2 Hudson Blue is part of ALLIED\'s authorized Super73 retro / moped-style e-bikes range, featuring 500w-2000w motor, 48v 15.6ah / 52v 20ah lithium-ion, and a top speed of 25-45 km/h (off-road derestricted mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/507/800/600'],
    specs: {
      voltage: '48V/52V System',
      batteryType: '48V 15.6Ah / 52V 20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-45 km/h (off-road derestricted mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-2000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '30-36 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Super73 genuine authorized stock, inspected prior to Australian dispatch',
      'Retro / Moped-Style E-Bikes class — 500w-2000w motor',
      '48V 15.6Ah / 52V 20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dirodi-rover-plus-750w',
    slug: 'allied-dirodi-rover-plus-750w',
    name: 'DiroDi Rover Plus 750W',
    price: 3299,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'DiroDi Rover Plus 750W — retro / moped-style e-bikes with 48V 15.6Ah / 52V 20Ah lithium power and 50-90 km range.',
    description: 'The DiroDi Rover Plus 750W is part of ALLIED\'s authorized DiroDi retro / moped-style e-bikes range, featuring 500w-2000w motor, 48v 15.6ah / 52v 20ah lithium-ion, and a top speed of 25-45 km/h (off-road derestricted mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/858/800/600'],
    specs: {
      voltage: '48V/52V System',
      batteryType: '48V 15.6Ah / 52V 20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-45 km/h (off-road derestricted mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-2000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '30-36 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'DiroDi genuine authorized stock, inspected prior to Australian dispatch',
      'Retro / Moped-Style E-Bikes class — 500w-2000w motor',
      '48V 15.6Ah / 52V 20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-michael-blast-greaser-classic',
    slug: 'allied-michael-blast-greaser-classic',
    name: 'Michael Blast Greaser Classic',
    price: 3899,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Michael Blast Greaser Classic — classic cruisers with 36V 14Ah / 48V 14Ah lithium power and 55-80 km range.',
    description: 'The Michael Blast Greaser Classic is part of ALLIED\'s authorized Michael Blast classic cruisers range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/355/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '55-80 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '130 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '24-28 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Michael Blast genuine authorized stock, inspected prior to Australian dispatch',
      'Classic Cruisers class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-murf-the-alpha-cargo-cruiser',
    slug: 'allied-murf-the-alpha-cargo-cruiser',
    name: 'Murf The Alpha Cargo Cruiser',
    price: 4499,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Murf The Alpha Cargo Cruiser — classic cruisers with 36V 14Ah / 48V 14Ah lithium power and 55-80 km range.',
    description: 'The Murf The Alpha Cargo Cruiser is part of ALLIED\'s authorized Murf classic cruisers range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/532/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '55-80 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '130 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '24-28 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Murf genuine authorized stock, inspected prior to Australian dispatch',
      'Classic Cruisers class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-pedego-interceptor-cruiser',
    slug: 'allied-pedego-interceptor-cruiser',
    name: 'Pedego Interceptor Cruiser',
    price: 3999,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    featured: false,
    shortDescription: 'Pedego Interceptor Cruiser — classic cruisers with 36V 14Ah / 48V 14Ah lithium power and 55-80 km range.',
    description: 'The Pedego Interceptor Cruiser is part of ALLIED\'s authorized Pedego classic cruisers range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/608/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '55-80 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '130 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '24-28 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Pedego genuine authorized stock, inspected prior to Australian dispatch',
      'Classic Cruisers class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-electra-townie-go-7d',
    slug: 'allied-electra-townie-go-7d',
    name: 'Electra Townie Go! 7D',
    price: 2699,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Electra Townie Go! 7D — classic cruisers with 36V 14Ah / 48V 14Ah lithium power and 55-80 km range.',
    description: 'The Electra Townie Go! 7D is part of ALLIED\'s authorized Electra classic cruisers range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/346/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '55-80 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '130 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '24-28 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Electra genuine authorized stock, inspected prior to Australian dispatch',
      'Classic Cruisers class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-michael-blast-outsider',
    slug: 'allied-michael-blast-outsider',
    name: 'Michael Blast Outsider',
    price: 3699,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Michael Blast Outsider — retro / moped-style e-bikes with 48V 15.6Ah / 52V 20Ah lithium power and 50-90 km range.',
    description: 'The Michael Blast Outsider is part of ALLIED\'s authorized Michael Blast retro / moped-style e-bikes range, featuring 500w-2000w motor, 48v 15.6ah / 52v 20ah lithium-ion, and a top speed of 25-45 km/h (off-road derestricted mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/940/800/600'],
    specs: {
      voltage: '48V/52V System',
      batteryType: '48V 15.6Ah / 52V 20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-45 km/h (off-road derestricted mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-2000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '30-36 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Michael Blast genuine authorized stock, inspected prior to Australian dispatch',
      'Retro / Moped-Style E-Bikes class — 500w-2000w motor',
      '48V 15.6Ah / 52V 20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-reid-classic-e-bike-cruiser',
    slug: 'allied-reid-classic-e-bike-cruiser',
    name: 'Reid Classic E-Bike Cruiser',
    price: 1799,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Reid Classic E-Bike Cruiser — classic cruisers with 36V 14Ah / 48V 14Ah lithium power and 55-80 km range.',
    description: 'The Reid Classic E-Bike Cruiser is part of ALLIED\'s authorized Reid classic cruisers range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/981/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '55-80 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '130 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '24-28 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Reid genuine authorized stock, inspected prior to Australian dispatch',
      'Classic Cruisers class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dirodi-classico-cruiser',
    slug: 'allied-dirodi-classico-cruiser',
    name: 'DiroDi Classico Cruiser',
    price: 2699,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'DiroDi Classico Cruiser — classic cruisers with 36V 14Ah / 48V 14Ah lithium power and 55-80 km range.',
    description: 'The DiroDi Classico Cruiser is part of ALLIED\'s authorized DiroDi classic cruisers range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/763/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '55-80 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '130 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '24-28 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'DiroDi genuine authorized stock, inspected prior to Australian dispatch',
      'Classic Cruisers class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-super73-rx-mojave',
    slug: 'allied-super73-rx-mojave',
    name: 'Super73 RX Mojave',
    price: 6499,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Super73 RX Mojave — retro / moped-style e-bikes with 48V 15.6Ah / 52V 20Ah lithium power and 50-90 km range.',
    description: 'The Super73 RX Mojave is part of ALLIED\'s authorized Super73 retro / moped-style e-bikes range, featuring 500w-2000w motor, 48v 15.6ah / 52v 20ah lithium-ion, and a top speed of 25-45 km/h (off-road derestricted mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/833/800/600'],
    specs: {
      voltage: '48V/52V System',
      batteryType: '48V 15.6Ah / 52V 20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-45 km/h (off-road derestricted mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-2000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '30-36 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Super73 genuine authorized stock, inspected prior to Australian dispatch',
      'Retro / Moped-Style E-Bikes class — 500w-2000w motor',
      '48V 15.6Ah / 52V 20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dirodi-rover-gen-6-1000w-dual',
    slug: 'allied-dirodi-rover-gen-6-1000w-dual',
    name: 'DiroDi Rover Gen 6 1000W Dual',
    price: 3699,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'DiroDi Rover Gen 6 1000W Dual — retro / moped-style e-bikes with 48V 15.6Ah / 52V 20Ah lithium power and 50-90 km range.',
    description: 'The DiroDi Rover Gen 6 1000W Dual is part of ALLIED\'s authorized DiroDi retro / moped-style e-bikes range, featuring 500w-2000w motor, 48v 15.6ah / 52v 20ah lithium-ion, and a top speed of 25-45 km/h (off-road derestricted mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/382/800/600'],
    specs: {
      voltage: '48V/52V System',
      batteryType: '48V 15.6Ah / 52V 20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-45 km/h (off-road derestricted mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-2000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '30-36 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'DiroDi genuine authorized stock, inspected prior to Australian dispatch',
      'Retro / Moped-Style E-Bikes class — 500w-2000w motor',
      '48V 15.6Ah / 52V 20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-michael-blast-vacay',
    slug: 'allied-michael-blast-vacay',
    name: 'Michael Blast Vacay',
    price: 3799,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Michael Blast Vacay — classic cruisers with 36V 14Ah / 48V 14Ah lithium power and 55-80 km range.',
    description: 'The Michael Blast Vacay is part of ALLIED\'s authorized Michael Blast classic cruisers range, featuring 250w-500w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/131/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '55-80 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '130 kg max load',
      motorPower: '250W-500W Motor',
      chargeTime: '4-5 Hours',
      dimensions: 'Varies by model',
      weight: '24-28 kg',
      warranty: '2 Years Frame & Motor / 1 Year Battery'
    },
    features: [
      'Michael Blast genuine authorized stock, inspected prior to Australian dispatch',
      'Classic Cruisers class — 250w-500w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ampere-x-trail-moped',
    slug: 'allied-ampere-x-trail-moped',
    name: 'Ampere X-Trail Moped',
    price: 3299,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    featured: false,
    shortDescription: 'Ampere X-Trail Moped — retro / moped-style e-bikes with 48V 15.6Ah / 52V 20Ah lithium power and 50-90 km range.',
    description: 'The Ampere X-Trail Moped is part of ALLIED\'s authorized Ampere retro / moped-style e-bikes range, featuring 500w-2000w motor, 48v 15.6ah / 52v 20ah lithium-ion, and a top speed of 25-45 km/h (off-road derestricted mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/408/800/600'],
    specs: {
      voltage: '48V/52V System',
      batteryType: '48V 15.6Ah / 52V 20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-45 km/h (off-road derestricted mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-2000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '30-36 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Ampere genuine authorized stock, inspected prior to Australian dispatch',
      'Retro / Moped-Style E-Bikes class — 500w-2000w motor',
      '48V 15.6Ah / 52V 20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fatboy-dna-v3-performance-e-bike',
    slug: 'allied-fatboy-dna-v3-performance-e-bike',
    name: 'Fatboy DNA V3 Performance E-Bike',
    price: 2490,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Fatboy DNA V3 Performance E-Bike — all-terrain fat tyre with 48V 15-20Ah lithium power and 50-90 km range.',
    description: 'The Fatboy DNA V3 Performance E-Bike is part of ALLIED\'s authorized Fatboy all-terrain fat tyre range, featuring 500w-1000w motor, 48v 15-20ah lithium-ion, and a top speed of 25-32 km/h (off-road mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/272/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 15-20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-32 km/h (Off-road mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-1000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '27-32 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Fatboy genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain Fat Tyre class — 500w-1000w motor',
      '48V 15-20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fatboy-harlem-v3-ultra-e-bike',
    slug: 'allied-fatboy-harlem-v3-ultra-e-bike',
    name: 'Fatboy Harlem V3 Ultra E-Bike',
    price: 3890,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    featured: false,
    shortDescription: 'Fatboy Harlem V3 Ultra E-Bike — all-terrain fat tyre with 48V 15-20Ah lithium power and 50-90 km range.',
    description: 'The Fatboy Harlem V3 Ultra E-Bike is part of ALLIED\'s authorized Fatboy all-terrain fat tyre range, featuring 500w-1000w motor, 48v 15-20ah lithium-ion, and a top speed of 25-32 km/h (off-road mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/820/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 15-20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-32 km/h (Off-road mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-1000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '27-32 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Fatboy genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain Fat Tyre class — 500w-1000w motor',
      '48V 15-20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fatboy-bagus-v3-ultra-e-bike',
    slug: 'allied-fatboy-bagus-v3-ultra-e-bike',
    name: 'Fatboy Bagus V3 Ultra E-Bike',
    price: 4490,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    featured: false,
    shortDescription: 'Fatboy Bagus V3 Ultra E-Bike — all-terrain fat tyre with 48V 15-20Ah lithium power and 50-90 km range.',
    description: 'The Fatboy Bagus V3 Ultra E-Bike is part of ALLIED\'s authorized Fatboy all-terrain fat tyre range, featuring 500w-1000w motor, 48v 15-20ah lithium-ion, and a top speed of 25-32 km/h (off-road mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/132/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 15-20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-32 km/h (Off-road mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-1000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '27-32 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Fatboy genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain Fat Tyre class — 500w-1000w motor',
      '48V 15-20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fatboy-scrambler-v2-e-bike',
    slug: 'allied-fatboy-scrambler-v2-e-bike',
    name: 'Fatboy Scrambler V2 E-Bike',
    price: 3590,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Fatboy Scrambler V2 E-Bike — all-terrain fat tyre with 48V 15-20Ah lithium power and 50-90 km range.',
    description: 'The Fatboy Scrambler V2 E-Bike is part of ALLIED\'s authorized Fatboy all-terrain fat tyre range, featuring 500w-1000w motor, 48v 15-20ah lithium-ion, and a top speed of 25-32 km/h (off-road mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/961/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 15-20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-32 km/h (Off-road mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-1000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '27-32 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Fatboy genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain Fat Tyre class — 500w-1000w motor',
      '48V 15-20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ampd-bros-ace-x-pro-e-bike',
    slug: 'allied-ampd-bros-ace-x-pro-e-bike',
    name: 'Ampd Bros Ace X Pro E-Bike',
    price: 4190,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    featured: false,
    shortDescription: 'Ampd Bros Ace X Pro E-Bike — all-terrain fat tyre with 48V 15-20Ah lithium power and 50-90 km range.',
    description: 'The Ampd Bros Ace X Pro E-Bike is part of ALLIED\'s authorized Ampd Bros all-terrain fat tyre range, featuring 500w-1000w motor, 48v 15-20ah lithium-ion, and a top speed of 25-32 km/h (off-road mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/106/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 15-20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-32 km/h (Off-road mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-1000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '27-32 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Ampd Bros genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain Fat Tyre class — 500w-1000w motor',
      '48V 15-20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-eunorau-1000w-fat-hd-all-terrain-fat-tyre-e-bike',
    slug: 'allied-eunorau-1000w-fat-hd-all-terrain-fat-tyre-e-bike',
    name: 'Eunorau 1000W FAT-HD All-Terrain Fat Tyre E-Bike',
    price: 3099,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    featured: false,
    shortDescription: 'Eunorau 1000W FAT-HD All-Terrain Fat Tyre E-Bike — all-terrain fat tyre with 48V 15-20Ah lithium power and 50-90 km range.',
    description: 'The Eunorau 1000W FAT-HD All-Terrain Fat Tyre E-Bike is part of ALLIED\'s authorized Eunorau all-terrain fat tyre range, featuring 500w-1000w motor, 48v 15-20ah lithium-ion, and a top speed of 25-32 km/h (off-road mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/660/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 15-20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-32 km/h (Off-road mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-1000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '27-32 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Eunorau genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain Fat Tyre class — 500w-1000w motor',
      '48V 15-20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fatfish-og-2-0-fat-tyre-e-bike',
    slug: 'allied-fatfish-og-2-0-fat-tyre-e-bike',
    name: 'Fatfish OG 2.0 Fat Tyre E-Bike',
    price: 2499,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Fatfish OG 2.0 Fat Tyre E-Bike — all-terrain fat tyre with 48V 15-20Ah lithium power and 50-90 km range.',
    description: 'The Fatfish OG 2.0 Fat Tyre E-Bike is part of ALLIED\'s authorized Fatfish all-terrain fat tyre range, featuring 500w-1000w motor, 48v 15-20ah lithium-ion, and a top speed of 25-32 km/h (off-road mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/931/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 15-20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-32 km/h (Off-road mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-1000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '27-32 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Fatfish genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain Fat Tyre class — 500w-1000w motor',
      '48V 15-20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fatfish-biggie-fat-tyre-e-bike',
    slug: 'allied-fatfish-biggie-fat-tyre-e-bike',
    name: 'Fatfish Biggie Fat Tyre E-Bike',
    price: 2999,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    featured: false,
    shortDescription: 'Fatfish Biggie Fat Tyre E-Bike — all-terrain fat tyre with 48V 15-20Ah lithium power and 50-90 km range.',
    description: 'The Fatfish Biggie Fat Tyre E-Bike is part of ALLIED\'s authorized Fatfish all-terrain fat tyre range, featuring 500w-1000w motor, 48v 15-20ah lithium-ion, and a top speed of 25-32 km/h (off-road mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/982/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 15-20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-32 km/h (Off-road mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-1000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '27-32 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Fatfish genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain Fat Tyre class — 500w-1000w motor',
      '48V 15-20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-super73-zx-special-edition',
    slug: 'allied-super73-zx-special-edition',
    name: 'Super73 ZX Special Edition',
    price: 4850,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    featured: false,
    shortDescription: 'Super73 ZX Special Edition — retro / moped-style e-bikes with 48V 15.6Ah / 52V 20Ah lithium power and 50-90 km range.',
    description: 'The Super73 ZX Special Edition is part of ALLIED\'s authorized Super73 retro / moped-style e-bikes range, featuring 500w-2000w motor, 48v 15.6ah / 52v 20ah lithium-ion, and a top speed of 25-45 km/h (off-road derestricted mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/791/800/600'],
    specs: {
      voltage: '48V/52V System',
      batteryType: '48V 15.6Ah / 52V 20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-45 km/h (off-road derestricted mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-2000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '30-36 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Super73 genuine authorized stock, inspected prior to Australian dispatch',
      'Retro / Moped-Style E-Bikes class — 500w-2000w motor',
      '48V 15.6Ah / 52V 20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-super73-r-adventure-special-edition',
    slug: 'allied-super73-r-adventure-special-edition',
    name: 'Super73 R Adventure Special Edition',
    price: 7849,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Super73 R Adventure Special Edition — retro / moped-style e-bikes with 48V 15.6Ah / 52V 20Ah lithium power and 50-90 km range.',
    description: 'The Super73 R Adventure Special Edition is part of ALLIED\'s authorized Super73 retro / moped-style e-bikes range, featuring 500w-2000w motor, 48v 15.6ah / 52v 20ah lithium-ion, and a top speed of 25-45 km/h (off-road derestricted mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/375/800/600'],
    specs: {
      voltage: '48V/52V System',
      batteryType: '48V 15.6Ah / 52V 20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-45 km/h (off-road derestricted mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-2000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '30-36 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Super73 genuine authorized stock, inspected prior to Australian dispatch',
      'Retro / Moped-Style E-Bikes class — 500w-2000w motor',
      '48V 15.6Ah / 52V 20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-super-73-s2',
    slug: 'allied-super-73-s2',
    name: 'Super 73 S2',
    price: 4499,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Super73 Super 73 S2 — retro / moped-style e-bikes with 48V 15.6Ah / 52V 20Ah lithium power and 50-90 km range.',
    description: 'The Super 73 S2 is part of ALLIED\'s authorized Super73 retro / moped-style e-bikes range, featuring 500w-2000w motor, 48v 15.6ah / 52v 20ah lithium-ion, and a top speed of 25-45 km/h (off-road derestricted mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/851/800/600'],
    specs: {
      voltage: '48V/52V System',
      batteryType: '48V 15.6Ah / 52V 20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-45 km/h (off-road derestricted mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-2000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '30-36 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Super73 genuine authorized stock, inspected prior to Australian dispatch',
      'Retro / Moped-Style E-Bikes class — 500w-2000w motor',
      '48V 15.6Ah / 52V 20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-super-73-zx',
    slug: 'allied-super-73-zx',
    name: 'Super 73 ZX',
    price: 2499,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Super73 Super 73 ZX — retro / moped-style e-bikes with 48V 15.6Ah / 52V 20Ah lithium power and 50-90 km range.',
    description: 'The Super 73 ZX is part of ALLIED\'s authorized Super73 retro / moped-style e-bikes range, featuring 500w-2000w motor, 48v 15.6ah / 52v 20ah lithium-ion, and a top speed of 25-45 km/h (off-road derestricted mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/260/800/600'],
    specs: {
      voltage: '48V/52V System',
      batteryType: '48V 15.6Ah / 52V 20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-45 km/h (off-road derestricted mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-2000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '30-36 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Super73 genuine authorized stock, inspected prior to Australian dispatch',
      'Retro / Moped-Style E-Bikes class — 500w-2000w motor',
      '48V 15.6Ah / 52V 20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-super-73-rx',
    slug: 'allied-super-73-rx',
    name: 'Super 73 RX',
    price: 5499,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Super73 Super 73 RX — retro / moped-style e-bikes with 48V 15.6Ah / 52V 20Ah lithium power and 50-90 km range.',
    description: 'The Super 73 RX is part of ALLIED\'s authorized Super73 retro / moped-style e-bikes range, featuring 500w-2000w motor, 48v 15.6ah / 52v 20ah lithium-ion, and a top speed of 25-45 km/h (off-road derestricted mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/248/800/600'],
    specs: {
      voltage: '48V/52V System',
      batteryType: '48V 15.6Ah / 52V 20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-45 km/h (off-road derestricted mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-2000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '30-36 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Super73 genuine authorized stock, inspected prior to Australian dispatch',
      'Retro / Moped-Style E-Bikes class — 500w-2000w motor',
      '48V 15.6Ah / 52V 20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fatboy-scrambler-v2',
    slug: 'allied-fatboy-scrambler-v2',
    name: 'Fatboy Scrambler V2',
    price: 3299,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Fatboy Scrambler V2 — retro / moped-style e-bikes with 48V 15.6Ah / 52V 20Ah lithium power and 50-90 km range.',
    description: 'The Fatboy Scrambler V2 is part of ALLIED\'s authorized Fatboy retro / moped-style e-bikes range, featuring 500w-2000w motor, 48v 15.6ah / 52v 20ah lithium-ion, and a top speed of 25-45 km/h (off-road derestricted mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/252/800/600'],
    specs: {
      voltage: '48V/52V System',
      batteryType: '48V 15.6Ah / 52V 20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-45 km/h (off-road derestricted mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-2000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '30-36 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Fatboy genuine authorized stock, inspected prior to Australian dispatch',
      'Retro / Moped-Style E-Bikes class — 500w-2000w motor',
      '48V 15.6Ah / 52V 20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fatboy-mini-bmx-electric',
    slug: 'allied-fatboy-mini-bmx-electric',
    name: 'Fatboy Mini BMX Electric',
    price: 1499,
    category: 'electric-bikes',
    subcategory: 'fat-tyre-lifestyle-ebikes',
    featured: false,
    shortDescription: 'Fatboy Mini BMX Electric — retro / moped-style e-bikes with 48V 15.6Ah / 52V 20Ah lithium power and 50-90 km range.',
    description: 'The Fatboy Mini BMX Electric is part of ALLIED\'s authorized Fatboy retro / moped-style e-bikes range, featuring 500w-2000w motor, 48v 15.6ah / 52v 20ah lithium-ion, and a top speed of 25-45 km/h (off-road derestricted mode). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/154/800/600'],
    specs: {
      voltage: '48V/52V System',
      batteryType: '48V 15.6Ah / 52V 20Ah Lithium-ion',
      range: '50-90 km per charge',
      topSpeed: '25-45 km/h (off-road derestricted mode)',
      payloadCapacity: '150 kg max load',
      motorPower: '500W-2000W Motor',
      chargeTime: '5 Hours',
      dimensions: 'Varies by model',
      weight: '30-36 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Fatboy genuine authorized stock, inspected prior to Australian dispatch',
      'Retro / Moped-Style E-Bikes class — 500w-2000w motor',
      '48V 15.6Ah / 52V 20Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-sur-ron-ultra-bee',
    slug: 'allied-sur-ron-ultra-bee',
    name: 'Sur-Ron Ultra Bee',
    price: 9999,
    category: 'electric-bikes',
    subcategory: 'electric-dirt-motorbikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Sur-Ron Ultra Bee — electric dirt & motorbikes with 60V-72V 32-40Ah LiFePO4/Lithium-ion lithium power and 60-100 km range.',
    description: 'The Sur-Ron Ultra Bee is part of ALLIED\'s authorized Sur-Ron electric dirt & motorbikes range, featuring 3000w-8000w motor, 60v-72v 32-40ah lifepo4/lithium-ion, and a top speed of 45-100 km/h (off-road/private land). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/369/800/600'],
    specs: {
      voltage: '60V/72V System',
      batteryType: '60V-72V 32-40Ah LiFePO4/Lithium-ion',
      range: '60-100 km per charge',
      topSpeed: '45-100 km/h (off-road/private land)',
      payloadCapacity: '120 kg max load',
      motorPower: '3000W-8000W Motor',
      chargeTime: '3-4 Hours',
      dimensions: 'Varies by model',
      weight: '55-65 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Sur-Ron genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Dirt & Motorbikes class — 3000w-8000w motor',
      '60V-72V 32-40Ah LiFePO4/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-sur-ron-storm-bee',
    slug: 'allied-sur-ron-storm-bee',
    name: 'Sur-Ron Storm Bee',
    price: 12999,
    category: 'electric-bikes',
    subcategory: 'electric-dirt-motorbikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Sur-Ron Storm Bee — electric dirt & motorbikes with 60V-72V 32-40Ah LiFePO4/Lithium-ion lithium power and 60-100 km range.',
    description: 'The Sur-Ron Storm Bee is part of ALLIED\'s authorized Sur-Ron electric dirt & motorbikes range, featuring 3000w-8000w motor, 60v-72v 32-40ah lifepo4/lithium-ion, and a top speed of 45-100 km/h (off-road/private land). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/948/800/600'],
    specs: {
      voltage: '60V/72V System',
      batteryType: '60V-72V 32-40Ah LiFePO4/Lithium-ion',
      range: '60-100 km per charge',
      topSpeed: '45-100 km/h (off-road/private land)',
      payloadCapacity: '120 kg max load',
      motorPower: '3000W-8000W Motor',
      chargeTime: '3-4 Hours',
      dimensions: 'Varies by model',
      weight: '55-65 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Sur-Ron genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Dirt & Motorbikes class — 3000w-8000w motor',
      '60V-72V 32-40Ah LiFePO4/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-sur-ron-hyper-bee',
    slug: 'allied-sur-ron-hyper-bee',
    name: 'Sur-Ron Hyper Bee',
    price: 7499,
    category: 'electric-bikes',
    subcategory: 'electric-dirt-motorbikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Sur-Ron Hyper Bee — electric dirt & motorbikes with 60V-72V 32-40Ah LiFePO4/Lithium-ion lithium power and 60-100 km range.',
    description: 'The Sur-Ron Hyper Bee is part of ALLIED\'s authorized Sur-Ron electric dirt & motorbikes range, featuring 3000w-8000w motor, 60v-72v 32-40ah lifepo4/lithium-ion, and a top speed of 45-100 km/h (off-road/private land). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/261/800/600'],
    specs: {
      voltage: '60V/72V System',
      batteryType: '60V-72V 32-40Ah LiFePO4/Lithium-ion',
      range: '60-100 km per charge',
      topSpeed: '45-100 km/h (off-road/private land)',
      payloadCapacity: '120 kg max load',
      motorPower: '3000W-8000W Motor',
      chargeTime: '3-4 Hours',
      dimensions: 'Varies by model',
      weight: '55-65 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Sur-Ron genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Dirt & Motorbikes class — 3000w-8000w motor',
      '60V-72V 32-40Ah LiFePO4/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-talaria-komodo',
    slug: 'allied-talaria-komodo',
    name: 'Talaria Komodo',
    price: 8999,
    category: 'electric-bikes',
    subcategory: 'electric-dirt-motorbikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Talaria Komodo — electric dirt & motorbikes with 60V-72V 32-40Ah LiFePO4/Lithium-ion lithium power and 60-100 km range.',
    description: 'The Talaria Komodo is part of ALLIED\'s authorized Talaria electric dirt & motorbikes range, featuring 3000w-8000w motor, 60v-72v 32-40ah lifepo4/lithium-ion, and a top speed of 45-100 km/h (off-road/private land). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/282/800/600'],
    specs: {
      voltage: '60V/72V System',
      batteryType: '60V-72V 32-40Ah LiFePO4/Lithium-ion',
      range: '60-100 km per charge',
      topSpeed: '45-100 km/h (off-road/private land)',
      payloadCapacity: '120 kg max load',
      motorPower: '3000W-8000W Motor',
      chargeTime: '3-4 Hours',
      dimensions: 'Varies by model',
      weight: '55-65 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Talaria genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Dirt & Motorbikes class — 3000w-8000w motor',
      '60V-72V 32-40Ah LiFePO4/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-niu-nqi-gts-sport-electric-moped',
    slug: 'allied-niu-nqi-gts-sport-electric-moped',
    name: 'NIU NQi GTS Sport Electric Moped',
    price: 5999,
    category: 'electric-bikes',
    subcategory: 'electric-mopeds',
    badge: 'New Release',
    featured: false,
    shortDescription: 'NIU NQi GTS Sport Electric Moped — electric mopeds with 72V 20-32Ah lithium power and 60-100 km range.',
    description: 'The NIU NQi GTS Sport Electric Moped is part of ALLIED\'s authorized NIU electric mopeds range, featuring 2000w-3000w motor, 72v 20-32ah lithium-ion, and a top speed of 45-70 km/h (registrable moped). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/861/800/600'],
    specs: {
      voltage: '72V System',
      batteryType: '72V 20-32Ah Lithium-ion',
      range: '60-100 km per charge',
      topSpeed: '45-70 km/h (registrable moped)',
      payloadCapacity: '150 kg max load',
      motorPower: '2000W-3000W Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '85-100 kg',
      warranty: '2 Years Vehicle / 1 Year Battery'
    },
    features: [
      'NIU genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Mopeds class — 2000w-3000w motor',
      '72V 20-32Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-super-soco-cux-electric-moped',
    slug: 'allied-super-soco-cux-electric-moped',
    name: 'Super SOCO CUx Electric Moped',
    price: 4499,
    category: 'electric-bikes',
    subcategory: 'electric-mopeds',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Super SOCO CUx Electric Moped — electric mopeds with 72V 20-32Ah lithium power and 60-100 km range.',
    description: 'The Super SOCO CUx Electric Moped is part of ALLIED\'s authorized Super SOCO electric mopeds range, featuring 2000w-3000w motor, 72v 20-32ah lithium-ion, and a top speed of 45-70 km/h (registrable moped). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/678/800/600'],
    specs: {
      voltage: '72V System',
      batteryType: '72V 20-32Ah Lithium-ion',
      range: '60-100 km per charge',
      topSpeed: '45-70 km/h (registrable moped)',
      payloadCapacity: '150 kg max load',
      motorPower: '2000W-3000W Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '85-100 kg',
      warranty: '2 Years Vehicle / 1 Year Battery'
    },
    features: [
      'Super SOCO genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Mopeds class — 2000w-3000w motor',
      '72V 20-32Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-jorvik-electric-tricycle',
    slug: 'allied-jorvik-electric-tricycle',
    name: 'Jorvik Electric Tricycle',
    price: 2999,
    category: 'electric-bikes',
    subcategory: 'electric-tricycles',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Jorvik Electric Tricycle — electric tricycles & trikes with 36V 14Ah / 48V 14Ah lithium power and 40-60 km range.',
    description: 'The Jorvik Electric Tricycle is part of ALLIED\'s authorized Jorvik electric tricycles & trikes range, featuring 250w-350w motor, 36v 14ah / 48v 14ah lithium-ion, and a top speed of 25 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/755/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 14Ah / 48V 14Ah Lithium-ion',
      range: '40-60 km per charge',
      topSpeed: '25 km/h',
      payloadCapacity: '120 kg max load + cargo basket',
      motorPower: '250W-350W Motor',
      chargeTime: '4 Hours',
      dimensions: 'Varies by model',
      weight: '30-35 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Jorvik genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Tricycles & Trikes class — 250w-350w motor',
      '36V 14Ah / 48V 14Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-e2-pro-kickscooter',
    slug: 'allied-segway-ninebot-e2-pro-kickscooter',
    name: 'Segway-Ninebot E2 Pro KickScooter',
    price: 699,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Segway Ninebot Segway-Ninebot E2 Pro KickScooter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Segway-Ninebot E2 Pro KickScooter is part of ALLIED\'s authorized Segway Ninebot commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/862/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-zt3-pro-d',
    slug: 'allied-segway-ninebot-zt3-pro-d',
    name: 'Segway Ninebot ZT3 Pro D',
    price: 1490,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Segway Ninebot ZT3 Pro D — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Segway Ninebot ZT3 Pro D is part of ALLIED\'s authorized Segway Ninebot commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/386/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-f3-pro',
    slug: 'allied-segway-ninebot-f3-pro',
    name: 'Segway Ninebot F3 Pro',
    price: 1398,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Segway Ninebot F3 Pro — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Segway Ninebot F3 Pro is part of ALLIED\'s authorized Segway Ninebot commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/875/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-max-g3-e',
    slug: 'allied-segway-ninebot-max-g3-e',
    name: 'Segway-Ninebot MAX G3 E',
    price: 1539,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Segway Ninebot Segway-Ninebot MAX G3 E — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Segway-Ninebot MAX G3 E is part of ALLIED\'s authorized Segway Ninebot commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/651/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bolzzen-atom-lite-e-scooter',
    slug: 'allied-bolzzen-atom-lite-e-scooter',
    name: 'Bolzzen Atom Lite e-Scooter',
    price: 699,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Bolzzen Atom Lite e-Scooter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Bolzzen Atom Lite e-Scooter is part of ALLIED\'s authorized Bolzzen commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/583/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Bolzzen genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bolzzen-atom-pro-e-scooter',
    slug: 'allied-bolzzen-atom-pro-e-scooter',
    name: 'Bolzzen Atom Pro e-Scooter',
    price: 999,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Bolzzen Atom Pro e-Scooter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Bolzzen Atom Pro e-Scooter is part of ALLIED\'s authorized Bolzzen commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/648/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Bolzzen genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-xiaomi-mi-electric-scooter-1s',
    slug: 'allied-xiaomi-mi-electric-scooter-1s',
    name: 'Xiaomi Mi Electric Scooter 1S',
    price: 599,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Xiaomi Mi Electric Scooter 1S — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Xiaomi Mi Electric Scooter 1S is part of ALLIED\'s authorized Xiaomi commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/326/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Xiaomi genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-inokim-light-2-hero',
    slug: 'allied-inokim-light-2-hero',
    name: 'Inokim Light 2 Hero',
    price: 1399,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Inokim Light 2 Hero — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Inokim Light 2 Hero is part of ALLIED\'s authorized Inokim commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/445/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Inokim genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-navee-s65-commuter-scooter',
    slug: 'allied-navee-s65-commuter-scooter',
    name: 'Navee S65 Commuter Scooter',
    price: 1499,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Navee S65 Commuter Scooter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Navee S65 Commuter Scooter is part of ALLIED\'s authorized Navee commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/981/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Navee genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-anyhill-um-2-city-scooter',
    slug: 'allied-anyhill-um-2-city-scooter',
    name: 'AnyHill UM-2 City Scooter',
    price: 1199,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'AnyHill UM-2 City Scooter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The AnyHill UM-2 City Scooter is part of ALLIED\'s authorized AnyHill commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/718/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'AnyHill genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-max-g2-pro',
    slug: 'allied-segway-ninebot-max-g2-pro',
    name: 'Segway Ninebot Max G2 Pro',
    price: 1399,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Segway Ninebot Max G2 Pro — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Segway Ninebot Max G2 Pro is part of ALLIED\'s authorized Segway Ninebot commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/399/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-niu-kqi3-max-heavy-commuter',
    slug: 'allied-niu-kqi3-max-heavy-commuter',
    name: 'Niu KQi3 Max Heavy Commuter',
    price: 1199,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'NIU Niu KQi3 Max Heavy Commuter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Niu KQi3 Max Heavy Commuter is part of ALLIED\'s authorized NIU commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/332/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'NIU genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-e-twow-gt-se-smart-commuter',
    slug: 'allied-e-twow-gt-se-smart-commuter',
    name: 'E-TWOW GT SE Smart Commuter',
    price: 1299,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'E-TWOW GT SE Smart Commuter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The E-TWOW GT SE Smart Commuter is part of ALLIED\'s authorized E-TWOW commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/620/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'E-TWOW genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-inokim-quick-4-super-commuter',
    slug: 'allied-inokim-quick-4-super-commuter',
    name: 'Inokim Quick 4 Super Commuter',
    price: 1899,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Inokim Quick 4 Super Commuter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Inokim Quick 4 Super Commuter is part of ALLIED\'s authorized Inokim commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/531/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Inokim genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-apollo-city-pro-2026',
    slug: 'allied-apollo-city-pro-2026',
    name: 'Apollo City Pro 2026',
    price: 2299,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Apollo City Pro 2026 — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Apollo City Pro 2026 is part of ALLIED\'s authorized Apollo commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/381/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Apollo genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-vsett-8-dual-motor-commuter',
    slug: 'allied-vsett-8-dual-motor-commuter',
    name: 'Vsett 8+ Dual Motor Commuter',
    price: 1599,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Vsett 8+ Dual Motor Commuter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Vsett 8+ Dual Motor Commuter is part of ALLIED\'s authorized Vsett commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/987/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Vsett genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-mercane-widewheel-pro-v2',
    slug: 'allied-mercane-widewheel-pro-v2',
    name: 'Mercane WideWheel Pro V2',
    price: 1499,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    featured: false,
    shortDescription: 'Mercane WideWheel Pro V2 — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Mercane WideWheel Pro V2 is part of ALLIED\'s authorized Mercane commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/302/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Mercane genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-navee-s65c-suspension-scooter',
    slug: 'allied-navee-s65c-suspension-scooter',
    name: 'Navee S65C Suspension Scooter',
    price: 1199,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Navee S65C Suspension Scooter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Navee S65C Suspension Scooter is part of ALLIED\'s authorized Navee commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/770/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Navee genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-p65s-urban-scooter',
    slug: 'allied-segway-p65s-urban-scooter',
    name: 'Segway P65S Urban Scooter',
    price: 1799,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Segway Ninebot Segway P65S Urban Scooter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Segway P65S Urban Scooter is part of ALLIED\'s authorized Segway Ninebot commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/886/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kaabo-mantis-8-dual-motor',
    slug: 'allied-kaabo-mantis-8-dual-motor',
    name: 'Kaabo Mantis 8 Dual Motor',
    price: 1899,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Kaabo Mantis 8 Dual Motor — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Kaabo Mantis 8 Dual Motor is part of ALLIED\'s authorized Kaabo commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/243/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Kaabo genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fluid-freeride-horizon-v2',
    slug: 'allied-fluid-freeride-horizon-v2',
    name: 'Fluid Freeride Horizon V2',
    price: 999,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Fluid Freeride Horizon V2 — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Fluid Freeride Horizon V2 is part of ALLIED\'s authorized Fluid commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/919/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Fluid genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-pure-air3-pro-lr-scooter',
    slug: 'allied-pure-air3-pro-lr-scooter',
    name: 'Pure Air3 Pro LR Scooter',
    price: 899,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Pure Electric Pure Air3 Pro LR Scooter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Pure Air3 Pro LR Scooter is part of ALLIED\'s authorized Pure Electric commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/917/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Pure Electric genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-emove-touring-portable-scooter',
    slug: 'allied-emove-touring-portable-scooter',
    name: 'EMove Touring Portable Scooter',
    price: 1299,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'EMove Touring Portable Scooter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The EMove Touring Portable Scooter is part of ALLIED\'s authorized EMove commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/286/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'EMove genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-zero-8x-compact-dual',
    slug: 'allied-zero-8x-compact-dual',
    name: 'Zero 8X Compact Dual',
    price: 1699,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    featured: false,
    shortDescription: 'Zero 8X Compact Dual — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Zero 8X Compact Dual is part of ALLIED\'s authorized Zero commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/198/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Zero genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-mukuta-8-dual-motor-commuter',
    slug: 'allied-mukuta-8-dual-motor-commuter',
    name: 'Mukuta 8 Dual Motor Commuter',
    price: 1799,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Mukuta 8 Dual Motor Commuter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Mukuta 8 Dual Motor Commuter is part of ALLIED\'s authorized Mukuta commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/844/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Mukuta genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-f3-e-scooter',
    slug: 'allied-segway-ninebot-f3-e-scooter',
    name: 'Segway Ninebot F3 E-Scooter',
    price: 1198,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    featured: false,
    shortDescription: 'Segway Ninebot F3 E-Scooter — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Segway Ninebot F3 E-Scooter is part of ALLIED\'s authorized Segway Ninebot commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/204/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-e2-pro',
    slug: 'allied-segway-ninebot-e2-pro',
    name: 'Segway Ninebot E2 Pro',
    price: 899,
    category: 'electric-scooters',
    subcategory: 'commuter-electric-scooters',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Segway Ninebot E2 Pro — commuter e-scooters with 36V 10Ah / 48V 12.5Ah lithium power and 25-45 km range.',
    description: 'The Segway Ninebot E2 Pro is part of ALLIED\'s authorized Segway Ninebot commuter e-scooters range, featuring 250w-500w single motor, 36v 10ah / 48v 12.5ah lithium-ion, and a top speed of 25 km/h (street legal au where registered). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/145/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: '36V 10Ah / 48V 12.5Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '25 km/h (Street Legal AU where registered)',
      payloadCapacity: '120 kg max load',
      motorPower: '250W-500W Single Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '13-19 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Commuter E-Scooters class — 250w-500w single motor',
      '36V 10Ah / 48V 12.5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ausom-l1-1104w-peak-scooter',
    slug: 'allied-ausom-l1-1104w-peak-scooter',
    name: 'Ausom L1 1104W Peak Scooter',
    price: 1099,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Ausom L1 1104W Peak Scooter — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Ausom L1 1104W Peak Scooter is part of ALLIED\'s authorized Ausom long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/226/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Ausom genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ausom-l2-dual-800w-motor',
    slug: 'allied-ausom-l2-dual-800w-motor',
    name: 'Ausom L2 Dual 800W Motor',
    price: 1499,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Ausom L2 Dual 800W Motor — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Ausom L2 Dual 800W Motor is part of ALLIED\'s authorized Ausom long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/568/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Ausom genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ausom-dt2-pro-dual-1100w',
    slug: 'allied-ausom-dt2-pro-dual-1100w',
    name: 'Ausom DT2 Pro Dual 1100W',
    price: 2099,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Ausom DT2 Pro Dual 1100W — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Ausom DT2 Pro Dual 1100W is part of ALLIED\'s authorized Ausom long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/199/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Ausom genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dragon-raptor-all-terrain-dual',
    slug: 'allied-dragon-raptor-all-terrain-dual',
    name: 'Dragon Raptor All Terrain Dual',
    price: 1899,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Dragon Raptor All Terrain Dual — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Dragon Raptor All Terrain Dual is part of ALLIED\'s authorized Dragon long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/553/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Dragon genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dragon-lightning-v2-dual-motor',
    slug: 'allied-dragon-lightning-v2-dual-motor',
    name: 'Dragon Lightning V2 Dual Motor',
    price: 2999,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Dragon Lightning V2 Dual Motor — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Dragon Lightning V2 Dual Motor is part of ALLIED\'s authorized Dragon long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/679/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Dragon genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dragon-gtr-v2-2400w-max',
    slug: 'allied-dragon-gtr-v2-2400w-max',
    name: 'Dragon GTR V2 2400W Max',
    price: 1699,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Dragon GTR V2 2400W Max — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Dragon GTR V2 2400W Max is part of ALLIED\'s authorized Dragon long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/192/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Dragon genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dragon-cyclone-pro-all-terrain',
    slug: 'allied-dragon-cyclone-pro-all-terrain',
    name: 'Dragon Cyclone Pro All Terrain',
    price: 1499,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Dragon Cyclone Pro All Terrain — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Dragon Cyclone Pro All Terrain is part of ALLIED\'s authorized Dragon long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/669/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Dragon genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dualtron-eagle-pro-60v',
    slug: 'allied-dualtron-eagle-pro-60v',
    name: 'Dualtron Eagle Pro 60V',
    price: 2550,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Dualtron Eagle Pro 60V — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Dualtron Eagle Pro 60V is part of ALLIED\'s authorized Dualtron long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/261/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Dualtron genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dualtron-thunder-60v-35ah',
    slug: 'allied-dualtron-thunder-60v-35ah',
    name: 'Dualtron Thunder 60V 35Ah',
    price: 4099,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Dualtron Thunder 60V 35Ah — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Dualtron Thunder 60V 35Ah is part of ALLIED\'s authorized Dualtron long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/208/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Dualtron genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-mukuta-10-all-terrain-dual',
    slug: 'allied-mukuta-10-all-terrain-dual',
    name: 'Mukuta 10+ All Terrain Dual',
    price: 2399,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Mukuta 10+ All Terrain Dual — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Mukuta 10+ All Terrain Dual is part of ALLIED\'s authorized Mukuta long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/709/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Mukuta genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-nami-klima-dual-1000w',
    slug: 'allied-nami-klima-dual-1000w',
    name: 'Nami Klima Dual 1000W',
    price: 2699,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Nami Klima Dual 1000W — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Nami Klima Dual 1000W is part of ALLIED\'s authorized Nami long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/452/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Nami genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-inokim-oxo-dual-motor',
    slug: 'allied-inokim-oxo-dual-motor',
    name: 'Inokim OXO Dual Motor',
    price: 2999,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Inokim OXO Dual Motor — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Inokim OXO Dual Motor is part of ALLIED\'s authorized Inokim long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/695/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Inokim genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-gt2-superscooter',
    slug: 'allied-segway-gt2-superscooter',
    name: 'Segway GT2 SuperScooter',
    price: 4499,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Segway Ninebot Segway GT2 SuperScooter — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Segway GT2 SuperScooter is part of ALLIED\'s authorized Segway Ninebot long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/770/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-inmotion-rs-performance-beast',
    slug: 'allied-inmotion-rs-performance-beast',
    name: 'InMotion RS Performance Beast',
    price: 4999,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Premium',
    featured: false,
    shortDescription: 'InMotion RS Performance Beast — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The InMotion RS Performance Beast is part of ALLIED\'s authorized InMotion long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/602/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'InMotion genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-vsett-10-apex-super-scooter',
    slug: 'allied-vsett-10-apex-super-scooter',
    name: 'Vsett 10+ Apex Super Scooter',
    price: 3299,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Vsett 10+ Apex Super Scooter — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Vsett 10+ Apex Super Scooter is part of ALLIED\'s authorized Vsett long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/858/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Vsett genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kaabo-wolf-king-gtr-extreme',
    slug: 'allied-kaabo-wolf-king-gtr-extreme',
    name: 'Kaabo Wolf King GTR Extreme',
    price: 5999,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Kaabo Wolf King GTR Extreme — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Kaabo Wolf King GTR Extreme is part of ALLIED\'s authorized Kaabo long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/265/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Kaabo genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dualtron-thunder-3-super-beast',
    slug: 'allied-dualtron-thunder-3-super-beast',
    name: 'Dualtron Thunder 3 Super Beast',
    price: 5499,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Dualtron Thunder 3 Super Beast — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Dualtron Thunder 3 Super Beast is part of ALLIED\'s authorized Dualtron long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/980/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Dualtron genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-apollo-pro-72v-hyper-scooter',
    slug: 'allied-apollo-pro-72v-hyper-scooter',
    name: 'Apollo Pro 72V Hyper Scooter',
    price: 5299,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Apollo Pro 72V Hyper Scooter — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Apollo Pro 72V Hyper Scooter is part of ALLIED\'s authorized Apollo long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/295/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Apollo genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-inokim-oxo-super-performance',
    slug: 'allied-inokim-oxo-super-performance',
    name: 'Inokim OXO Super Performance',
    price: 3699,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    featured: false,
    shortDescription: 'Inokim OXO Super Performance — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Inokim OXO Super Performance is part of ALLIED\'s authorized Inokim long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/162/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Inokim genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-teverun-fighter-supreme-72v',
    slug: 'allied-teverun-fighter-supreme-72v',
    name: 'Teverun Fighter Supreme 72V',
    price: 4899,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Teverun Fighter Supreme 72V — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Teverun Fighter Supreme 72V is part of ALLIED\'s authorized Teverun long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/779/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Teverun genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-mukuta-10-dual-performance',
    slug: 'allied-mukuta-10-dual-performance',
    name: 'Mukuta 10 Dual Performance',
    price: 2899,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Mukuta 10 Dual Performance — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Mukuta 10 Dual Performance is part of ALLIED\'s authorized Mukuta long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/172/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Mukuta genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dragon-x8-pro-dual-motor',
    slug: 'allied-dragon-x8-pro-dual-motor',
    name: 'Dragon X8 Pro Dual Motor',
    price: 1999,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Dragon X8 Pro Dual Motor — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Dragon X8 Pro Dual Motor is part of ALLIED\'s authorized Dragon long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/697/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Dragon genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-apollo-phantom-v4-60v',
    slug: 'allied-apollo-phantom-v4-60v',
    name: 'Apollo Phantom V4 60V',
    price: 3499,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Apollo Phantom V4 60V — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Apollo Phantom V4 60V is part of ALLIED\'s authorized Apollo long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/355/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Apollo genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-emove-cruiser-s-long-range',
    slug: 'allied-emove-cruiser-s-long-range',
    name: 'EMove Cruiser S Long Range',
    price: 2299,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'EMove Cruiser S Long Range — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The EMove Cruiser S Long Range is part of ALLIED\'s authorized EMove long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/284/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'EMove genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-p100s-long-range',
    slug: 'allied-segway-p100s-long-range',
    name: 'Segway P100S Long Range',
    price: 2899,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    featured: false,
    shortDescription: 'Segway Ninebot Segway P100S Long Range — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Segway P100S Long Range is part of ALLIED\'s authorized Segway Ninebot long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/360/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-nami-burn-e-2-max-hyper',
    slug: 'allied-nami-burn-e-2-max-hyper',
    name: 'Nami Burn-E 2 Max Hyper',
    price: 6299,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Nami Burn-E 2 Max Hyper — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Nami Burn-E 2 Max Hyper is part of ALLIED\'s authorized Nami long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/507/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Nami genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-solar-eq-dual-motor-off-road',
    slug: 'allied-solar-eq-dual-motor-off-road',
    name: 'Solar EQ Dual Motor Off-Road',
    price: 2799,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Solar EQ Dual Motor Off-Road — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Solar EQ Dual Motor Off-Road is part of ALLIED\'s authorized Solar long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/634/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Solar genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-max-g3-e-scooter',
    slug: 'allied-segway-ninebot-max-g3-e-scooter',
    name: 'Segway Ninebot MAX G3 E-Scooter',
    price: 1699,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Segway Ninebot MAX G3 E-Scooter — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Segway Ninebot MAX G3 E-Scooter is part of ALLIED\'s authorized Segway Ninebot long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/625/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kaabo-mantis-10-plus-v2-dual-motor',
    slug: 'allied-kaabo-mantis-10-plus-v2-dual-motor',
    name: 'Kaabo Mantis 10 Plus V2 Dual Motor',
    price: 1999,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Kaabo Mantis 10 Plus V2 Dual Motor — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Kaabo Mantis 10 Plus V2 Dual Motor is part of ALLIED\'s authorized Kaabo long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/463/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Kaabo genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kaabo-wolf-warrior-x-plus-2026',
    slug: 'allied-kaabo-wolf-warrior-x-plus-2026',
    name: 'Kaabo Wolf Warrior X Plus (2026)',
    price: 2399,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    featured: false,
    shortDescription: 'Kaabo Wolf Warrior X Plus (2026) — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Kaabo Wolf Warrior X Plus (2026) is part of ALLIED\'s authorized Kaabo long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/426/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Kaabo genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-max-g2',
    slug: 'allied-segway-ninebot-max-g2',
    name: 'Segway Ninebot Max G2',
    price: 1499,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Segway Ninebot Max G2 — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Segway Ninebot Max G2 is part of ALLIED\'s authorized Segway Ninebot long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/789/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-max-g30',
    slug: 'allied-segway-ninebot-max-g30',
    name: 'Segway Ninebot Max G30',
    price: 1299,
    category: 'electric-scooters',
    subcategory: 'long-range-electric-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Segway Ninebot Max G30 — long-range & performance e-scooters with 48V-72V 20-35Ah lithium power and 45-150 km range.',
    description: 'The Segway Ninebot Max G30 is part of ALLIED\'s authorized Segway Ninebot long-range & performance e-scooters range, featuring 800w-5400w dual motor, 48v-72v 20-35ah lithium-ion, and a top speed of 45-100+ km/h (private property / off-road use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/763/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-35Ah Lithium-ion',
      range: '45-150 km per charge',
      topSpeed: '45-100+ km/h (private property / off-road use)',
      payloadCapacity: '150 kg max load',
      motorPower: '800W-5400W Dual Motor',
      chargeTime: '6-10 Hours',
      dimensions: 'Varies by model',
      weight: '25-45 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Long-Range & Performance E-Scooters class — 800w-5400w dual motor',
      '48V-72V 20-35Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-evolve-carbon-gtr-street-series-2',
    slug: 'allied-evolve-carbon-gtr-street-series-2',
    name: 'Evolve Carbon GTR Street Series 2',
    price: 2499,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Evolve Skateboards Evolve Carbon GTR Street Series 2 — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Evolve Carbon GTR Street Series 2 is part of ALLIED\'s authorized Evolve Skateboards street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/184/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Evolve Skateboards genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-exway-flex-riot-street-board',
    slug: 'allied-exway-flex-riot-street-board',
    name: 'Exway Flex Riot Street Board',
    price: 1099,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Exway Flex Riot Street Board — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Exway Flex Riot Street Board is part of ALLIED\'s authorized Exway street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/369/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Exway genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-backfire-zealot-s-street',
    slug: 'allied-backfire-zealot-s-street',
    name: 'Backfire Zealot S Street',
    price: 1199,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Backfire Zealot S Street — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Backfire Zealot S Street is part of ALLIED\'s authorized Backfire street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/915/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Backfire genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-meepo-v5-er-longboard',
    slug: 'allied-meepo-v5-er-longboard',
    name: 'Meepo V5 ER Longboard',
    price: 899,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Meepo V5 ER Longboard — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Meepo V5 ER Longboard is part of ALLIED\'s authorized Meepo street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/391/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Meepo genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-wowgo-3x-max-street',
    slug: 'allied-wowgo-3x-max-street',
    name: 'WowGo 3X Max Street',
    price: 850,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'WowGo 3X Max Street — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The WowGo 3X Max Street is part of ALLIED\'s authorized WowGo street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/473/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'WowGo genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-evolve-bamboo-gtr-series-2-street',
    slug: 'allied-evolve-bamboo-gtr-series-2-street',
    name: 'Evolve Bamboo GTR Series 2 Street',
    price: 1999,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Evolve Skateboards Evolve Bamboo GTR Series 2 Street — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Evolve Bamboo GTR Series 2 Street is part of ALLIED\'s authorized Evolve Skateboards street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/238/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Evolve Skateboards genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-meepo-hurricane-ultra-street',
    slug: 'allied-meepo-hurricane-ultra-street',
    name: 'Meepo Hurricane Ultra Street',
    price: 2299,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Meepo Hurricane Ultra Street — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Meepo Hurricane Ultra Street is part of ALLIED\'s authorized Meepo street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/438/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Meepo genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-exway-flex-er-street-belt',
    slug: 'allied-exway-flex-er-street-belt',
    name: 'Exway Flex ER Street Belt',
    price: 1299,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Exway Flex ER Street Belt — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Exway Flex ER Street Belt is part of ALLIED\'s authorized Exway street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/155/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Exway genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tynee-explorer-street-longboard',
    slug: 'allied-tynee-explorer-street-longboard',
    name: 'Tynee Explorer Street Longboard',
    price: 1699,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Tynee Board Tynee Explorer Street Longboard — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Tynee Explorer Street Longboard is part of ALLIED\'s authorized Tynee Board street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/937/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Tynee Board genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-backfire-zealot-x-belt-longboard',
    slug: 'allied-backfire-zealot-x-belt-longboard',
    name: 'Backfire Zealot X Belt Longboard',
    price: 1799,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Backfire Zealot X Belt Longboard — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Backfire Zealot X Belt Longboard is part of ALLIED\'s authorized Backfire street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/902/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Backfire genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-wowgo-pioneer-4-street',
    slug: 'allied-wowgo-pioneer-4-street',
    name: 'WowGo Pioneer 4 Street',
    price: 999,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'WowGo Pioneer 4 Street — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The WowGo Pioneer 4 Street is part of ALLIED\'s authorized WowGo street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/158/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'WowGo genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-exway-wave-hub-street',
    slug: 'allied-exway-wave-hub-street',
    name: 'Exway Wave Hub Street',
    price: 1099,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    featured: false,
    shortDescription: 'Exway Wave Hub Street — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Exway Wave Hub Street is part of ALLIED\'s authorized Exway street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/891/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Exway genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-propulsion-board-demon-street',
    slug: 'allied-propulsion-board-demon-street',
    name: 'Propulsion Board Demon Street',
    price: 2499,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Propulsion Board Demon Street — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Propulsion Board Demon Street is part of ALLIED\'s authorized Propulsion Board street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/611/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Propulsion Board genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-aboard-electric-longboard-street',
    slug: 'allied-aboard-electric-longboard-street',
    name: 'Aboard Electric Longboard Street',
    price: 1399,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Aboard Electric Longboard Street — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Aboard Electric Longboard Street is part of ALLIED\'s authorized Aboard street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/715/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Aboard genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-exway-flex-2-pro-electric-skateboard',
    slug: 'allied-exway-flex-2-pro-electric-skateboard',
    name: 'Exway Flex 2 Pro Electric Skateboard',
    price: 1097,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Exway Flex 2 Pro Electric Skateboard — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Exway Flex 2 Pro Electric Skateboard is part of ALLIED\'s authorized Exway street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/857/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Exway genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-evolve-fusion-bamboo-electric-skateboard',
    slug: 'allied-evolve-fusion-bamboo-electric-skateboard',
    name: 'Evolve Fusion Bamboo Electric Skateboard',
    price: 2299,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    featured: false,
    shortDescription: 'Evolve Skateboards Evolve Fusion Bamboo Electric Skateboard — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Evolve Fusion Bamboo Electric Skateboard is part of ALLIED\'s authorized Evolve Skateboards street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/510/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Evolve Skateboards genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-evolve-diablo-bamboo-street',
    slug: 'allied-evolve-diablo-bamboo-street',
    name: 'Evolve Diablo Bamboo Street',
    price: 2849,
    category: 'electric-skateboards',
    subcategory: 'street-electric-skateboards',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Evolve Skateboards Evolve Diablo Bamboo Street — street electric longboards with 36V-42V 10-12Ah lithium power and 25-45 km range.',
    description: 'The Evolve Diablo Bamboo Street is part of ALLIED\'s authorized Evolve Skateboards street electric longboards range, featuring 1000w-3000w dual hub/belt motor, 36v-42v 10-12ah lithium-ion, and a top speed of 35-45 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/363/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 10-12Ah Lithium-ion',
      range: '25-45 km per charge',
      topSpeed: '35-45 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '1000W-3000W Dual Hub/Belt Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '6-9 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Evolve Skateboards genuine authorized stock, inspected prior to Australian dispatch',
      'Street Electric Longboards class — 1000w-3000w dual hub/belt motor',
      '36V-42V 10-12Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-evolve-hadean-carbon-all-terrain',
    slug: 'allied-evolve-hadean-carbon-all-terrain',
    name: 'Evolve Hadean Carbon All-Terrain',
    price: 3399,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Evolve Skateboards Evolve Hadean Carbon All-Terrain — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Evolve Hadean Carbon All-Terrain is part of ALLIED\'s authorized Evolve Skateboards all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/506/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Evolve Skateboards genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-exway-atlas-4wd-carbon-at',
    slug: 'allied-exway-atlas-4wd-carbon-at',
    name: 'Exway Atlas 4WD Carbon AT',
    price: 2899,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Exway Atlas 4WD Carbon AT — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Exway Atlas 4WD Carbon AT is part of ALLIED\'s authorized Exway all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/106/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Exway genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-backfire-hammer-s-all-terrain',
    slug: 'allied-backfire-hammer-s-all-terrain',
    name: 'Backfire Hammer S All-Terrain',
    price: 2199,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Backfire Hammer S All-Terrain — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Backfire Hammer S All-Terrain is part of ALLIED\'s authorized Backfire all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/528/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Backfire genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tynee-board-explorer-all-terrain',
    slug: 'allied-tynee-board-explorer-all-terrain',
    name: 'Tynee Board Explorer All-Terrain',
    price: 1699,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Tynee Board Explorer All-Terrain — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Tynee Board Explorer All-Terrain is part of ALLIED\'s authorized Tynee Board all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/810/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Tynee Board genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-meepo-hurricane-v2-pneumatic',
    slug: 'allied-meepo-hurricane-v2-pneumatic',
    name: 'Meepo Hurricane V2 Pneumatic',
    price: 2399,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Meepo Hurricane V2 Pneumatic — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Meepo Hurricane V2 Pneumatic is part of ALLIED\'s authorized Meepo all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/959/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Meepo genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-evolve-hadean-bamboo-all-terrain',
    slug: 'allied-evolve-hadean-bamboo-all-terrain',
    name: 'Evolve Hadean Bamboo All-Terrain',
    price: 2899,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Evolve Skateboards Evolve Hadean Bamboo All-Terrain — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Evolve Hadean Bamboo All-Terrain is part of ALLIED\'s authorized Evolve Skateboards all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/257/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Evolve Skateboards genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-meepo-hurricane-ultra-all-terrain',
    slug: 'allied-meepo-hurricane-ultra-all-terrain',
    name: 'Meepo Hurricane Ultra All-Terrain',
    price: 2599,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Meepo Hurricane Ultra All-Terrain — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Meepo Hurricane Ultra All-Terrain is part of ALLIED\'s authorized Meepo all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/167/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Meepo genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tynee-explorer-all-terrain-7-pneumatic',
    slug: 'allied-tynee-explorer-all-terrain-7-pneumatic',
    name: 'Tynee Explorer All-Terrain 7" Pneumatic',
    price: 1899,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Tynee Board Tynee Explorer All-Terrain 7" Pneumatic — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Tynee Explorer All-Terrain 7" Pneumatic is part of ALLIED\'s authorized Tynee Board all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/896/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Tynee Board genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-exway-atlas-pro-2wd-pneumatic',
    slug: 'allied-exway-atlas-pro-2wd-pneumatic',
    name: 'Exway Atlas Pro 2WD Pneumatic',
    price: 2499,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    featured: false,
    shortDescription: 'Exway Atlas Pro 2WD Pneumatic — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Exway Atlas Pro 2WD Pneumatic is part of ALLIED\'s authorized Exway all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/194/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Exway genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-lacroix-nazar-super-all-terrain',
    slug: 'allied-lacroix-nazar-super-all-terrain',
    name: 'Lacroix Nazaré Super All-Terrain',
    price: 5999,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Lacroix Nazaré Super All-Terrain — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Lacroix Nazaré Super All-Terrain is part of ALLIED\'s authorized Lacroix all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/112/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Lacroix genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-evolve-carbon-gtr-series-2-all-terrain',
    slug: 'allied-evolve-carbon-gtr-series-2-all-terrain',
    name: 'Evolve Carbon GTR Series 2 All-Terrain',
    price: 2499,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Evolve Skateboards Evolve Carbon GTR Series 2 All-Terrain — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Evolve Carbon GTR Series 2 All-Terrain is part of ALLIED\'s authorized Evolve Skateboards all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/526/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Evolve Skateboards genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-propulsion-board-all-terrain-beast',
    slug: 'allied-propulsion-board-all-terrain-beast',
    name: 'Propulsion Board All-Terrain Beast',
    price: 2999,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Propulsion Board All-Terrain Beast — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Propulsion Board All-Terrain Beast is part of ALLIED\'s authorized Propulsion Board all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/868/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Propulsion Board genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-backfire-ranger-x3-pneumatic',
    slug: 'allied-backfire-ranger-x3-pneumatic',
    name: 'Backfire Ranger X3 Pneumatic',
    price: 1999,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Backfire Ranger X3 Pneumatic — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Backfire Ranger X3 Pneumatic is part of ALLIED\'s authorized Backfire all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/163/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Backfire genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-evolve-gtr-bamboo-series-2-all-terrain',
    slug: 'allied-evolve-gtr-bamboo-series-2-all-terrain',
    name: 'Evolve GTR Bamboo Series 2 All-Terrain',
    price: 1899,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    featured: false,
    shortDescription: 'Evolve Skateboards Evolve GTR Bamboo Series 2 All-Terrain — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Evolve GTR Bamboo Series 2 All-Terrain is part of ALLIED\'s authorized Evolve Skateboards all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/496/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Evolve Skateboards genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-evolve-gtr-bamboo-series-2-two-in-one',
    slug: 'allied-evolve-gtr-bamboo-series-2-two-in-one',
    name: 'Evolve GTR Bamboo Series 2 Two-in-One',
    price: 2039,
    category: 'electric-skateboards',
    subcategory: 'all-terrain-electric-skateboards',
    featured: false,
    shortDescription: 'Evolve Skateboards Evolve GTR Bamboo Series 2 Two-in-One — all-terrain / pneumatic boards with 42V-50V 12-15Ah lithium power and 25-50 km range.',
    description: 'The Evolve GTR Bamboo Series 2 Two-in-One is part of ALLIED\'s authorized Evolve Skateboards all-terrain / pneumatic boards range, featuring 3000w-6000w dual motor, 42v-50v 12-15ah lithium-ion, and a top speed of 40-50 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/629/800/600'],
    specs: {
      voltage: '42V/50V System',
      batteryType: '42V-50V 12-15Ah Lithium-ion',
      range: '25-50 km per charge',
      topSpeed: '40-50 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '3000W-6000W Dual Motor',
      chargeTime: '2-3 Hours',
      dimensions: 'Varies by model',
      weight: '9-12 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Evolve Skateboards genuine authorized stock, inspected prior to Australian dispatch',
      'All-Terrain / Pneumatic Boards class — 3000w-6000w dual motor',
      '42V-50V 12-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-exway-wave-riot-shortboard',
    slug: 'allied-exway-wave-riot-shortboard',
    name: 'Exway Wave Riot Shortboard',
    price: 1420,
    category: 'electric-skateboards',
    subcategory: 'mini-electric-skateboards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Exway Wave Riot Shortboard — mini & portable shortboards with 36V 5-8Ah lithium power and 12-25 km range.',
    description: 'The Exway Wave Riot Shortboard is part of ALLIED\'s authorized Exway mini & portable shortboards range, featuring 500w-1000w hub motor, 36v 5-8ah lithium-ion, and a top speed of 25-35 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/503/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 5-8Ah Lithium-ion',
      range: '12-25 km per charge',
      topSpeed: '25-35 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '500W-1000W Hub Motor',
      chargeTime: '1.5-2.5 Hours',
      dimensions: 'Varies by model',
      weight: '3.5-5.5 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Exway genuine authorized stock, inspected prior to Australian dispatch',
      'Mini & Portable Shortboards class — 500w-1000w hub motor',
      '36V 5-8Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-backfire-mini-v2-cruiser',
    slug: 'allied-backfire-mini-v2-cruiser',
    name: 'Backfire Mini V2 Cruiser',
    price: 849,
    category: 'electric-skateboards',
    subcategory: 'mini-electric-skateboards',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Backfire Mini V2 Cruiser — mini & portable shortboards with 36V 5-8Ah lithium power and 12-25 km range.',
    description: 'The Backfire Mini V2 Cruiser is part of ALLIED\'s authorized Backfire mini & portable shortboards range, featuring 500w-1000w hub motor, 36v 5-8ah lithium-ion, and a top speed of 25-35 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/965/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 5-8Ah Lithium-ion',
      range: '12-25 km per charge',
      topSpeed: '25-35 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '500W-1000W Hub Motor',
      chargeTime: '1.5-2.5 Hours',
      dimensions: 'Varies by model',
      weight: '3.5-5.5 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Backfire genuine authorized stock, inspected prior to Australian dispatch',
      'Mini & Portable Shortboards class — 500w-1000w hub motor',
      '36V 5-8Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-meepo-mini-3s-deluxe',
    slug: 'allied-meepo-mini-3s-deluxe',
    name: 'Meepo Mini 3s Deluxe',
    price: 699,
    category: 'electric-skateboards',
    subcategory: 'mini-electric-skateboards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Meepo Mini 3s Deluxe — mini & portable shortboards with 36V 5-8Ah lithium power and 12-25 km range.',
    description: 'The Meepo Mini 3s Deluxe is part of ALLIED\'s authorized Meepo mini & portable shortboards range, featuring 500w-1000w hub motor, 36v 5-8ah lithium-ion, and a top speed of 25-35 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/902/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 5-8Ah Lithium-ion',
      range: '12-25 km per charge',
      topSpeed: '25-35 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '500W-1000W Hub Motor',
      chargeTime: '1.5-2.5 Hours',
      dimensions: 'Varies by model',
      weight: '3.5-5.5 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Meepo genuine authorized stock, inspected prior to Australian dispatch',
      'Mini & Portable Shortboards class — 500w-1000w hub motor',
      '36V 5-8Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-wowgo-mini-2-pro',
    slug: 'allied-wowgo-mini-2-pro',
    name: 'WowGo Mini 2 Pro',
    price: 649,
    category: 'electric-skateboards',
    subcategory: 'mini-electric-skateboards',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'WowGo Mini 2 Pro — mini & portable shortboards with 36V 5-8Ah lithium power and 12-25 km range.',
    description: 'The WowGo Mini 2 Pro is part of ALLIED\'s authorized WowGo mini & portable shortboards range, featuring 500w-1000w hub motor, 36v 5-8ah lithium-ion, and a top speed of 25-35 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/502/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 5-8Ah Lithium-ion',
      range: '12-25 km per charge',
      topSpeed: '25-35 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '500W-1000W Hub Motor',
      chargeTime: '1.5-2.5 Hours',
      dimensions: 'Varies by model',
      weight: '3.5-5.5 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'WowGo genuine authorized stock, inspected prior to Australian dispatch',
      'Mini & Portable Shortboards class — 500w-1000w hub motor',
      '36V 5-8Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-evolve-stoke-series-2-shortboard',
    slug: 'allied-evolve-stoke-series-2-shortboard',
    name: 'Evolve Stoke Series 2 Shortboard',
    price: 1699,
    category: 'electric-skateboards',
    subcategory: 'mini-electric-skateboards',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Evolve Skateboards Evolve Stoke Series 2 Shortboard — mini & portable shortboards with 36V 5-8Ah lithium power and 12-25 km range.',
    description: 'The Evolve Stoke Series 2 Shortboard is part of ALLIED\'s authorized Evolve Skateboards mini & portable shortboards range, featuring 500w-1000w hub motor, 36v 5-8ah lithium-ion, and a top speed of 25-35 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/488/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 5-8Ah Lithium-ion',
      range: '12-25 km per charge',
      topSpeed: '25-35 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '500W-1000W Hub Motor',
      chargeTime: '1.5-2.5 Hours',
      dimensions: 'Varies by model',
      weight: '3.5-5.5 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Evolve Skateboards genuine authorized stock, inspected prior to Australian dispatch',
      'Mini & Portable Shortboards class — 500w-1000w hub motor',
      '36V 5-8Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tynee-mini-3-pro-shortboard',
    slug: 'allied-tynee-mini-3-pro-shortboard',
    name: 'Tynee Mini 3 Pro Shortboard',
    price: 1199,
    category: 'electric-skateboards',
    subcategory: 'mini-electric-skateboards',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Tynee Board Tynee Mini 3 Pro Shortboard — mini & portable shortboards with 36V 5-8Ah lithium power and 12-25 km range.',
    description: 'The Tynee Mini 3 Pro Shortboard is part of ALLIED\'s authorized Tynee Board mini & portable shortboards range, featuring 500w-1000w hub motor, 36v 5-8ah lithium-ion, and a top speed of 25-35 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/443/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 5-8Ah Lithium-ion',
      range: '12-25 km per charge',
      topSpeed: '25-35 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '500W-1000W Hub Motor',
      chargeTime: '1.5-2.5 Hours',
      dimensions: 'Varies by model',
      weight: '3.5-5.5 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Tynee Board genuine authorized stock, inspected prior to Australian dispatch',
      'Mini & Portable Shortboards class — 500w-1000w hub motor',
      '36V 5-8Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-meepo-mini-5-er-shortboard',
    slug: 'allied-meepo-mini-5-er-shortboard',
    name: 'Meepo Mini 5 ER Shortboard',
    price: 899,
    category: 'electric-skateboards',
    subcategory: 'mini-electric-skateboards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Meepo Mini 5 ER Shortboard — mini & portable shortboards with 36V 5-8Ah lithium power and 12-25 km range.',
    description: 'The Meepo Mini 5 ER Shortboard is part of ALLIED\'s authorized Meepo mini & portable shortboards range, featuring 500w-1000w hub motor, 36v 5-8ah lithium-ion, and a top speed of 25-35 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/895/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 5-8Ah Lithium-ion',
      range: '12-25 km per charge',
      topSpeed: '25-35 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '500W-1000W Hub Motor',
      chargeTime: '1.5-2.5 Hours',
      dimensions: 'Varies by model',
      weight: '3.5-5.5 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Meepo genuine authorized stock, inspected prior to Australian dispatch',
      'Mini & Portable Shortboards class — 500w-1000w hub motor',
      '36V 5-8Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-exway-wave-belt-shortboard',
    slug: 'allied-exway-wave-belt-shortboard',
    name: 'Exway Wave Belt Shortboard',
    price: 1299,
    category: 'electric-skateboards',
    subcategory: 'mini-electric-skateboards',
    featured: false,
    shortDescription: 'Exway Wave Belt Shortboard — mini & portable shortboards with 36V 5-8Ah lithium power and 12-25 km range.',
    description: 'The Exway Wave Belt Shortboard is part of ALLIED\'s authorized Exway mini & portable shortboards range, featuring 500w-1000w hub motor, 36v 5-8ah lithium-ion, and a top speed of 25-35 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/459/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 5-8Ah Lithium-ion',
      range: '12-25 km per charge',
      topSpeed: '25-35 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '500W-1000W Hub Motor',
      chargeTime: '1.5-2.5 Hours',
      dimensions: 'Varies by model',
      weight: '3.5-5.5 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Exway genuine authorized stock, inspected prior to Australian dispatch',
      'Mini & Portable Shortboards class — 500w-1000w hub motor',
      '36V 5-8Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-wowgo-mini-2-pocket-shortboard',
    slug: 'allied-wowgo-mini-2-pocket-shortboard',
    name: 'WowGo Mini 2 Pocket Shortboard',
    price: 799,
    category: 'electric-skateboards',
    subcategory: 'mini-electric-skateboards',
    badge: 'Sale',
    featured: false,
    shortDescription: 'WowGo Mini 2 Pocket Shortboard — mini & portable shortboards with 36V 5-8Ah lithium power and 12-25 km range.',
    description: 'The WowGo Mini 2 Pocket Shortboard is part of ALLIED\'s authorized WowGo mini & portable shortboards range, featuring 500w-1000w hub motor, 36v 5-8ah lithium-ion, and a top speed of 25-35 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/729/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 5-8Ah Lithium-ion',
      range: '12-25 km per charge',
      topSpeed: '25-35 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '500W-1000W Hub Motor',
      chargeTime: '1.5-2.5 Hours',
      dimensions: 'Varies by model',
      weight: '3.5-5.5 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'WowGo genuine authorized stock, inspected prior to Australian dispatch',
      'Mini & Portable Shortboards class — 500w-1000w hub motor',
      '36V 5-8Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-exway-wave-riot-plus-headlight-shortboard',
    slug: 'allied-exway-wave-riot-plus-headlight-shortboard',
    name: 'Exway Wave Riot Plus Headlight Shortboard',
    price: 1262,
    category: 'electric-skateboards',
    subcategory: 'mini-electric-skateboards',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Exway Wave Riot Plus Headlight Shortboard — mini & portable shortboards with 36V 5-8Ah lithium power and 12-25 km range.',
    description: 'The Exway Wave Riot Plus Headlight Shortboard is part of ALLIED\'s authorized Exway mini & portable shortboards range, featuring 500w-1000w hub motor, 36v 5-8ah lithium-ion, and a top speed of 25-35 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/202/800/600'],
    specs: {
      voltage: '36V System',
      batteryType: '36V 5-8Ah Lithium-ion',
      range: '12-25 km per charge',
      topSpeed: '25-35 km/h',
      payloadCapacity: '100 kg max rider weight',
      motorPower: '500W-1000W Hub Motor',
      chargeTime: '1.5-2.5 Hours',
      dimensions: 'Varies by model',
      weight: '3.5-5.5 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Exway genuine authorized stock, inspected prior to Australian dispatch',
      'Mini & Portable Shortboards class — 500w-1000w hub motor',
      '36V 5-8Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-onewheel-gt-s-series-all-terrain',
    slug: 'allied-onewheel-gt-s-series-all-terrain',
    name: 'Onewheel GT S-Series All-Terrain',
    price: 4299,
    category: 'electric-skateboards',
    subcategory: 'onewheel-style-boards',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Onewheel GT S-Series All-Terrain — onewheel-style boards with 48V 10-15Ah lithium power and 20-50 km range.',
    description: 'The Onewheel GT S-Series All-Terrain is part of ALLIED\'s authorized Onewheel onewheel-style boards range, featuring 750w-2000w single hub motor, 48v 10-15ah lithium-ion, and a top speed of 25-35 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/910/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 10-15Ah Lithium-ion',
      range: '20-50 km per charge',
      topSpeed: '25-35 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '750W-2000W Single Hub Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '11-14 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Onewheel genuine authorized stock, inspected prior to Australian dispatch',
      'Onewheel-Style Boards class — 750w-2000w single hub motor',
      '48V 10-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-onewheel-pint-x-all-terrain',
    slug: 'allied-onewheel-pint-x-all-terrain',
    name: 'Onewheel Pint X All-Terrain',
    price: 2299,
    category: 'electric-skateboards',
    subcategory: 'onewheel-style-boards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Onewheel Pint X All-Terrain — onewheel-style boards with 48V 10-15Ah lithium power and 20-50 km range.',
    description: 'The Onewheel Pint X All-Terrain is part of ALLIED\'s authorized Onewheel onewheel-style boards range, featuring 750w-2000w single hub motor, 48v 10-15ah lithium-ion, and a top speed of 25-35 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/330/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 10-15Ah Lithium-ion',
      range: '20-50 km per charge',
      topSpeed: '25-35 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '750W-2000W Single Hub Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '11-14 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Onewheel genuine authorized stock, inspected prior to Australian dispatch',
      'Onewheel-Style Boards class — 750w-2000w single hub motor',
      '48V 10-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-onewheel-pint',
    slug: 'allied-onewheel-pint',
    name: 'Onewheel Pint',
    price: 1799,
    category: 'electric-skateboards',
    subcategory: 'onewheel-style-boards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Onewheel Pint — onewheel-style boards with 48V 10-15Ah lithium power and 20-50 km range.',
    description: 'The Onewheel Pint is part of ALLIED\'s authorized Onewheel onewheel-style boards range, featuring 750w-2000w single hub motor, 48v 10-15ah lithium-ion, and a top speed of 25-35 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/586/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 10-15Ah Lithium-ion',
      range: '20-50 km per charge',
      topSpeed: '25-35 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '750W-2000W Single Hub Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '11-14 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Onewheel genuine authorized stock, inspected prior to Australian dispatch',
      'Onewheel-Style Boards class — 750w-2000w single hub motor',
      '48V 10-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-onewheel-xr-classic',
    slug: 'allied-onewheel-xr-classic',
    name: 'Onewheel XR Classic',
    price: 3805,
    category: 'electric-skateboards',
    subcategory: 'onewheel-style-boards',
    featured: false,
    shortDescription: 'Onewheel XR Classic — onewheel-style boards with 48V 10-15Ah lithium power and 20-50 km range.',
    description: 'The Onewheel XR Classic is part of ALLIED\'s authorized Onewheel onewheel-style boards range, featuring 750w-2000w single hub motor, 48v 10-15ah lithium-ion, and a top speed of 25-35 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/187/800/600'],
    specs: {
      voltage: '48V System',
      batteryType: '48V 10-15Ah Lithium-ion',
      range: '20-50 km per charge',
      topSpeed: '25-35 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '750W-2000W Single Hub Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '11-14 kg',
      warranty: '1 Year Board & Motor'
    },
    features: [
      'Onewheel genuine authorized stock, inspected prior to Australian dispatch',
      'Onewheel-Style Boards class — 750w-2000w single hub motor',
      '48V 10-15Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kingsong-16x-high-torque-euw',
    slug: 'allied-kingsong-16x-high-torque-euw',
    name: 'KingSong 16X High-Torque EUW',
    price: 2499,
    category: 'self-balancing-ev',
    subcategory: 'electric-unicycles',
    badge: 'Popular',
    featured: false,
    shortDescription: 'KingSong 16X High-Torque EUW — electric unicycles (euws) with 84V-134V 1000-3600Wh lithium power and 60-180 km range.',
    description: 'The KingSong 16X High-Torque EUW is part of ALLIED\'s authorized KingSong electric unicycles (euws) range, featuring 1500w-3000w single hub motor, 84v-134v 1000-3600wh lithium-ion, and a top speed of 35-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/706/800/600'],
    specs: {
      voltage: '84V/100.8V/134V System',
      batteryType: '84V-134V 1000-3600Wh Lithium-ion',
      range: '60-180 km per charge',
      topSpeed: '35-70 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '1500W-3000W Single Hub Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg',
      warranty: '1 Year EUC & Motor'
    },
    features: [
      'KingSong genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Unicycles (EUWs) class — 1500w-3000w single hub motor',
      '84V-134V 1000-3600Wh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-veteran-patton-suspension-euw',
    slug: 'allied-veteran-patton-suspension-euw',
    name: 'Veteran Patton Suspension EUW',
    price: 3999,
    category: 'self-balancing-ev',
    subcategory: 'electric-unicycles',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Veteran Patton Suspension EUW — electric unicycles (euws) with 84V-134V 1000-3600Wh lithium power and 60-180 km range.',
    description: 'The Veteran Patton Suspension EUW is part of ALLIED\'s authorized Veteran electric unicycles (euws) range, featuring 1500w-3000w single hub motor, 84v-134v 1000-3600wh lithium-ion, and a top speed of 35-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/520/800/600'],
    specs: {
      voltage: '84V/100.8V/134V System',
      batteryType: '84V-134V 1000-3600Wh Lithium-ion',
      range: '60-180 km per charge',
      topSpeed: '35-70 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '1500W-3000W Single Hub Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg',
      warranty: '1 Year EUC & Motor'
    },
    features: [
      'Veteran genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Unicycles (EUWs) class — 1500w-3000w single hub motor',
      '84V-134V 1000-3600Wh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-begode-master-pro-v2-euc-134v',
    slug: 'allied-begode-master-pro-v2-euc-134v',
    name: 'Begode Master Pro V2 EUC 134V',
    price: 5499,
    category: 'self-balancing-ev',
    subcategory: 'electric-unicycles',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Begode Master Pro V2 EUC 134V — electric unicycles (euws) with 84V-134V 1000-3600Wh lithium power and 60-180 km range.',
    description: 'The Begode Master Pro V2 EUC 134V is part of ALLIED\'s authorized Begode electric unicycles (euws) range, featuring 1500w-3000w single hub motor, 84v-134v 1000-3600wh lithium-ion, and a top speed of 35-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/325/800/600'],
    specs: {
      voltage: '84V/100.8V/134V System',
      batteryType: '84V-134V 1000-3600Wh Lithium-ion',
      range: '60-180 km per charge',
      topSpeed: '35-70 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '1500W-3000W Single Hub Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg',
      warranty: '1 Year EUC & Motor'
    },
    features: [
      'Begode genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Unicycles (EUWs) class — 1500w-3000w single hub motor',
      '84V-134V 1000-3600Wh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-inmotion-v14-adventure-euc',
    slug: 'allied-inmotion-v14-adventure-euc',
    name: 'InMotion V14 Adventure EUC',
    price: 4899,
    category: 'self-balancing-ev',
    subcategory: 'electric-unicycles',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'InMotion V14 Adventure EUC — electric unicycles (euws) with 84V-134V 1000-3600Wh lithium power and 60-180 km range.',
    description: 'The InMotion V14 Adventure EUC is part of ALLIED\'s authorized InMotion electric unicycles (euws) range, featuring 1500w-3000w single hub motor, 84v-134v 1000-3600wh lithium-ion, and a top speed of 35-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/492/800/600'],
    specs: {
      voltage: '84V/100.8V/134V System',
      batteryType: '84V-134V 1000-3600Wh Lithium-ion',
      range: '60-180 km per charge',
      topSpeed: '35-70 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '1500W-3000W Single Hub Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg',
      warranty: '1 Year EUC & Motor'
    },
    features: [
      'InMotion genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Unicycles (EUWs) class — 1500w-3000w single hub motor',
      '84V-134V 1000-3600Wh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-leaperkim-lynx-151v-euc',
    slug: 'allied-leaperkim-lynx-151v-euc',
    name: 'Leaperkim Lynx 151V EUC',
    price: 5999,
    category: 'self-balancing-ev',
    subcategory: 'electric-unicycles',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Leaperkim Lynx 151V EUC — electric unicycles (euws) with 84V-134V 1000-3600Wh lithium power and 60-180 km range.',
    description: 'The Leaperkim Lynx 151V EUC is part of ALLIED\'s authorized Leaperkim electric unicycles (euws) range, featuring 1500w-3000w single hub motor, 84v-134v 1000-3600wh lithium-ion, and a top speed of 35-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/335/800/600'],
    specs: {
      voltage: '84V/100.8V/134V System',
      batteryType: '84V-134V 1000-3600Wh Lithium-ion',
      range: '60-180 km per charge',
      topSpeed: '35-70 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '1500W-3000W Single Hub Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg',
      warranty: '1 Year EUC & Motor'
    },
    features: [
      'Leaperkim genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Unicycles (EUWs) class — 1500w-3000w single hub motor',
      '84V-134V 1000-3600Wh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-begode-extreme-134v-off-road-euc',
    slug: 'allied-begode-extreme-134v-off-road-euc',
    name: 'Begode Extreme 134V Off-Road EUC',
    price: 4299,
    category: 'self-balancing-ev',
    subcategory: 'electric-unicycles',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Begode Extreme 134V Off-Road EUC — electric unicycles (euws) with 84V-134V 1000-3600Wh lithium power and 60-180 km range.',
    description: 'The Begode Extreme 134V Off-Road EUC is part of ALLIED\'s authorized Begode electric unicycles (euws) range, featuring 1500w-3000w single hub motor, 84v-134v 1000-3600wh lithium-ion, and a top speed of 35-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/692/800/600'],
    specs: {
      voltage: '84V/100.8V/134V System',
      batteryType: '84V-134V 1000-3600Wh Lithium-ion',
      range: '60-180 km per charge',
      topSpeed: '35-70 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '1500W-3000W Single Hub Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg',
      warranty: '1 Year EUC & Motor'
    },
    features: [
      'Begode genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Unicycles (EUWs) class — 1500w-3000w single hub motor',
      '84V-134V 1000-3600Wh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kingsong-s22-pro-eagle-euc',
    slug: 'allied-kingsong-s22-pro-eagle-euc',
    name: 'Kingsong S22 Pro Eagle EUC',
    price: 4699,
    category: 'self-balancing-ev',
    subcategory: 'electric-unicycles',
    badge: 'Popular',
    featured: false,
    shortDescription: 'KingSong Kingsong S22 Pro Eagle EUC — electric unicycles (euws) with 84V-134V 1000-3600Wh lithium power and 60-180 km range.',
    description: 'The Kingsong S22 Pro Eagle EUC is part of ALLIED\'s authorized KingSong electric unicycles (euws) range, featuring 1500w-3000w single hub motor, 84v-134v 1000-3600wh lithium-ion, and a top speed of 35-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/174/800/600'],
    specs: {
      voltage: '84V/100.8V/134V System',
      batteryType: '84V-134V 1000-3600Wh Lithium-ion',
      range: '60-180 km per charge',
      topSpeed: '35-70 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '1500W-3000W Single Hub Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg',
      warranty: '1 Year EUC & Motor'
    },
    features: [
      'KingSong genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Unicycles (EUWs) class — 1500w-3000w single hub motor',
      '84V-134V 1000-3600Wh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-inmotion-v12-ht-high-torque-euc',
    slug: 'allied-inmotion-v12-ht-high-torque-euc',
    name: 'InMotion V12 HT High Torque EUC',
    price: 2999,
    category: 'self-balancing-ev',
    subcategory: 'electric-unicycles',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'InMotion V12 HT High Torque EUC — electric unicycles (euws) with 84V-134V 1000-3600Wh lithium power and 60-180 km range.',
    description: 'The InMotion V12 HT High Torque EUC is part of ALLIED\'s authorized InMotion electric unicycles (euws) range, featuring 1500w-3000w single hub motor, 84v-134v 1000-3600wh lithium-ion, and a top speed of 35-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/215/800/600'],
    specs: {
      voltage: '84V/100.8V/134V System',
      batteryType: '84V-134V 1000-3600Wh Lithium-ion',
      range: '60-180 km per charge',
      topSpeed: '35-70 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '1500W-3000W Single Hub Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg',
      warranty: '1 Year EUC & Motor'
    },
    features: [
      'InMotion genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Unicycles (EUWs) class — 1500w-3000w single hub motor',
      '84V-134V 1000-3600Wh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-begode-falcon-100v-compact-euc',
    slug: 'allied-begode-falcon-100v-compact-euc',
    name: 'Begode Falcon 100V Compact EUC',
    price: 2399,
    category: 'self-balancing-ev',
    subcategory: 'electric-unicycles',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Begode Falcon 100V Compact EUC — electric unicycles (euws) with 84V-134V 1000-3600Wh lithium power and 60-180 km range.',
    description: 'The Begode Falcon 100V Compact EUC is part of ALLIED\'s authorized Begode electric unicycles (euws) range, featuring 1500w-3000w single hub motor, 84v-134v 1000-3600wh lithium-ion, and a top speed of 35-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/424/800/600'],
    specs: {
      voltage: '84V/100.8V/134V System',
      batteryType: '84V-134V 1000-3600Wh Lithium-ion',
      range: '60-180 km per charge',
      topSpeed: '35-70 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '1500W-3000W Single Hub Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg',
      warranty: '1 Year EUC & Motor'
    },
    features: [
      'Begode genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Unicycles (EUWs) class — 1500w-3000w single hub motor',
      '84V-134V 1000-3600Wh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kingsong-ks-16xs-suspension-euc',
    slug: 'allied-kingsong-ks-16xs-suspension-euc',
    name: 'Kingsong KS-16XS Suspension EUC',
    price: 2799,
    category: 'self-balancing-ev',
    subcategory: 'electric-unicycles',
    featured: false,
    shortDescription: 'KingSong Kingsong KS-16XS Suspension EUC — electric unicycles (euws) with 84V-134V 1000-3600Wh lithium power and 60-180 km range.',
    description: 'The Kingsong KS-16XS Suspension EUC is part of ALLIED\'s authorized KingSong electric unicycles (euws) range, featuring 1500w-3000w single hub motor, 84v-134v 1000-3600wh lithium-ion, and a top speed of 35-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/581/800/600'],
    specs: {
      voltage: '84V/100.8V/134V System',
      batteryType: '84V-134V 1000-3600Wh Lithium-ion',
      range: '60-180 km per charge',
      topSpeed: '35-70 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '1500W-3000W Single Hub Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg',
      warranty: '1 Year EUC & Motor'
    },
    features: [
      'KingSong genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Unicycles (EUWs) class — 1500w-3000w single hub motor',
      '84V-134V 1000-3600Wh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-inmotion-v11-suspension-euc',
    slug: 'allied-inmotion-v11-suspension-euc',
    name: 'InMotion V11 Suspension EUC',
    price: 3299,
    category: 'self-balancing-ev',
    subcategory: 'electric-unicycles',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'InMotion V11 Suspension EUC — electric unicycles (euws) with 84V-134V 1000-3600Wh lithium power and 60-180 km range.',
    description: 'The InMotion V11 Suspension EUC is part of ALLIED\'s authorized InMotion electric unicycles (euws) range, featuring 1500w-3000w single hub motor, 84v-134v 1000-3600wh lithium-ion, and a top speed of 35-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/242/800/600'],
    specs: {
      voltage: '84V/100.8V/134V System',
      batteryType: '84V-134V 1000-3600Wh Lithium-ion',
      range: '60-180 km per charge',
      topSpeed: '35-70 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '1500W-3000W Single Hub Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg',
      warranty: '1 Year EUC & Motor'
    },
    features: [
      'InMotion genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Unicycles (EUWs) class — 1500w-3000w single hub motor',
      '84V-134V 1000-3600Wh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-begode-commander-mini-116v',
    slug: 'allied-begode-commander-mini-116v',
    name: 'Begode Commander Mini 116V',
    price: 3899,
    category: 'self-balancing-ev',
    subcategory: 'electric-unicycles',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Begode Commander Mini 116V — electric unicycles (euws) with 84V-134V 1000-3600Wh lithium power and 60-180 km range.',
    description: 'The Begode Commander Mini 116V is part of ALLIED\'s authorized Begode electric unicycles (euws) range, featuring 1500w-3000w single hub motor, 84v-134v 1000-3600wh lithium-ion, and a top speed of 35-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/473/800/600'],
    specs: {
      voltage: '84V/100.8V/134V System',
      batteryType: '84V-134V 1000-3600Wh Lithium-ion',
      range: '60-180 km per charge',
      topSpeed: '35-70 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '1500W-3000W Single Hub Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg',
      warranty: '1 Year EUC & Motor'
    },
    features: [
      'Begode genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Unicycles (EUWs) class — 1500w-3000w single hub motor',
      '84V-134V 1000-3600Wh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-inmotion-v13-challenger-euc',
    slug: 'allied-inmotion-v13-challenger-euc',
    name: 'InMotion V13 Challenger EUC',
    price: 4999,
    category: 'self-balancing-ev',
    subcategory: 'electric-unicycles',
    badge: 'Premium',
    featured: false,
    shortDescription: 'InMotion V13 Challenger EUC — electric unicycles (euws) with 84V-134V 1000-3600Wh lithium power and 60-180 km range.',
    description: 'The InMotion V13 Challenger EUC is part of ALLIED\'s authorized InMotion electric unicycles (euws) range, featuring 1500w-3000w single hub motor, 84v-134v 1000-3600wh lithium-ion, and a top speed of 35-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/249/800/600'],
    specs: {
      voltage: '84V/100.8V/134V System',
      batteryType: '84V-134V 1000-3600Wh Lithium-ion',
      range: '60-180 km per charge',
      topSpeed: '35-70 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '1500W-3000W Single Hub Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg',
      warranty: '1 Year EUC & Motor'
    },
    features: [
      'InMotion genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Unicycles (EUWs) class — 1500w-3000w single hub motor',
      '84V-134V 1000-3600Wh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-s-plus-hoverboard',
    slug: 'allied-segway-ninebot-s-plus-hoverboard',
    name: 'Segway-Ninebot S Plus Hoverboard',
    price: 1299,
    category: 'self-balancing-ev',
    subcategory: 'hoverboards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Segway Ninebot Segway-Ninebot S Plus Hoverboard — hoverboards & self-balancing boards with 36V-42V 4-4.4Ah lithium power and 10-18 km range.',
    description: 'The Segway-Ninebot S Plus Hoverboard is part of ALLIED\'s authorized Segway Ninebot hoverboards & self-balancing boards range, featuring 300w-400w dual hub motor, 36v-42v 4-4.4ah lithium-ion, and a top speed of 10-18 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/997/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 4-4.4Ah Lithium-ion',
      range: '10-18 km per charge',
      topSpeed: '10-18 km/h',
      payloadCapacity: '100-120 kg max rider weight',
      motorPower: '300W-400W Dual Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '10-13 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Hoverboards & Self-Balancing Boards class — 300w-400w dual hub motor',
      '36V-42V 4-4.4Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-swagtron-t6-outlaw-off-road',
    slug: 'allied-swagtron-t6-outlaw-off-road',
    name: 'Swagtron T6 Outlaw Off-Road',
    price: 599,
    category: 'self-balancing-ev',
    subcategory: 'hoverboards',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Swagtron T6 Outlaw Off-Road — hoverboards & self-balancing boards with 36V-42V 4-4.4Ah lithium power and 10-18 km range.',
    description: 'The Swagtron T6 Outlaw Off-Road is part of ALLIED\'s authorized Swagtron hoverboards & self-balancing boards range, featuring 300w-400w dual hub motor, 36v-42v 4-4.4ah lithium-ion, and a top speed of 10-18 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/764/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 4-4.4Ah Lithium-ion',
      range: '10-18 km per charge',
      topSpeed: '10-18 km/h',
      payloadCapacity: '100-120 kg max rider weight',
      motorPower: '300W-400W Dual Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '10-13 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Swagtron genuine authorized stock, inspected prior to Australian dispatch',
      'Hoverboards & Self-Balancing Boards class — 300w-400w dual hub motor',
      '36V-42V 4-4.4Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-hover-1-titan-all-terrain-board',
    slug: 'allied-hover-1-titan-all-terrain-board',
    name: 'Hover-1 Titan All-Terrain Board',
    price: 499,
    category: 'self-balancing-ev',
    subcategory: 'hoverboards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Hover-1 Titan All-Terrain Board — hoverboards & self-balancing boards with 36V-42V 4-4.4Ah lithium power and 10-18 km range.',
    description: 'The Hover-1 Titan All-Terrain Board is part of ALLIED\'s authorized Hover-1 hoverboards & self-balancing boards range, featuring 300w-400w dual hub motor, 36v-42v 4-4.4ah lithium-ion, and a top speed of 10-18 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/289/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 4-4.4Ah Lithium-ion',
      range: '10-18 km per charge',
      topSpeed: '10-18 km/h',
      payloadCapacity: '100-120 kg max rider weight',
      motorPower: '300W-400W Dual Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '10-13 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Hover-1 genuine authorized stock, inspected prior to Australian dispatch',
      'Hoverboards & Self-Balancing Boards class — 300w-400w dual hub motor',
      '36V-42V 4-4.4Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-s-max-self-balancing',
    slug: 'allied-segway-ninebot-s-max-self-balancing',
    name: 'Segway Ninebot S-MAX Self-Balancing',
    price: 1499,
    category: 'self-balancing-ev',
    subcategory: 'hoverboards',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Segway Ninebot S-MAX Self-Balancing — hoverboards & self-balancing boards with 36V-42V 4-4.4Ah lithium power and 10-18 km range.',
    description: 'The Segway Ninebot S-MAX Self-Balancing is part of ALLIED\'s authorized Segway Ninebot hoverboards & self-balancing boards range, featuring 300w-400w dual hub motor, 36v-42v 4-4.4ah lithium-ion, and a top speed of 10-18 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/474/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 4-4.4Ah Lithium-ion',
      range: '10-18 km per charge',
      topSpeed: '10-18 km/h',
      payloadCapacity: '100-120 kg max rider weight',
      motorPower: '300W-400W Dual Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '10-13 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Hoverboards & Self-Balancing Boards class — 300w-400w dual hub motor',
      '36V-42V 4-4.4Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-hover-1-titan-pro-all-terrain-hoverboard',
    slug: 'allied-hover-1-titan-pro-all-terrain-hoverboard',
    name: 'Hover-1 Titan Pro All-Terrain Hoverboard',
    price: 599,
    category: 'self-balancing-ev',
    subcategory: 'hoverboards',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Hover-1 Titan Pro All-Terrain Hoverboard — hoverboards & self-balancing boards with 36V-42V 4-4.4Ah lithium power and 10-18 km range.',
    description: 'The Hover-1 Titan Pro All-Terrain Hoverboard is part of ALLIED\'s authorized Hover-1 hoverboards & self-balancing boards range, featuring 300w-400w dual hub motor, 36v-42v 4-4.4ah lithium-ion, and a top speed of 10-18 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/950/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 4-4.4Ah Lithium-ion',
      range: '10-18 km per charge',
      topSpeed: '10-18 km/h',
      payloadCapacity: '100-120 kg max rider weight',
      motorPower: '300W-400W Dual Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '10-13 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Hover-1 genuine authorized stock, inspected prior to Australian dispatch',
      'Hoverboards & Self-Balancing Boards class — 300w-400w dual hub motor',
      '36V-42V 4-4.4Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-razor-hovertrax-positech-smart-board',
    slug: 'allied-razor-hovertrax-positech-smart-board',
    name: 'Razor Hovertrax Positech Smart Board',
    price: 499,
    category: 'self-balancing-ev',
    subcategory: 'hoverboards',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Razor Hovertrax Positech Smart Board — hoverboards & self-balancing boards with 36V-42V 4-4.4Ah lithium power and 10-18 km range.',
    description: 'The Razor Hovertrax Positech Smart Board is part of ALLIED\'s authorized Razor hoverboards & self-balancing boards range, featuring 300w-400w dual hub motor, 36v-42v 4-4.4ah lithium-ion, and a top speed of 10-18 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/828/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 4-4.4Ah Lithium-ion',
      range: '10-18 km per charge',
      topSpeed: '10-18 km/h',
      payloadCapacity: '100-120 kg max rider weight',
      motorPower: '300W-400W Dual Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '10-13 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Razor genuine authorized stock, inspected prior to Australian dispatch',
      'Hoverboards & Self-Balancing Boards class — 300w-400w dual hub motor',
      '36V-42V 4-4.4Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-s-kids-hoverboard',
    slug: 'allied-segway-ninebot-s-kids-hoverboard',
    name: 'Segway Ninebot S Kids Hoverboard',
    price: 799,
    category: 'self-balancing-ev',
    subcategory: 'hoverboards',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Segway Ninebot S Kids Hoverboard — hoverboards & self-balancing boards with 36V-42V 4-4.4Ah lithium power and 10-18 km range.',
    description: 'The Segway Ninebot S Kids Hoverboard is part of ALLIED\'s authorized Segway Ninebot hoverboards & self-balancing boards range, featuring 300w-400w dual hub motor, 36v-42v 4-4.4ah lithium-ion, and a top speed of 10-18 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/439/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 4-4.4Ah Lithium-ion',
      range: '10-18 km per charge',
      topSpeed: '10-18 km/h',
      payloadCapacity: '100-120 kg max rider weight',
      motorPower: '300W-400W Dual Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '10-13 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Hoverboards & Self-Balancing Boards class — 300w-400w dual hub motor',
      '36V-42V 4-4.4Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-gyroor-warrior-all-terrain-hoverboard',
    slug: 'allied-gyroor-warrior-all-terrain-hoverboard',
    name: 'Gyroor Warrior All-Terrain Hoverboard',
    price: 699,
    category: 'self-balancing-ev',
    subcategory: 'hoverboards',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Gyroor Warrior All-Terrain Hoverboard — hoverboards & self-balancing boards with 36V-42V 4-4.4Ah lithium power and 10-18 km range.',
    description: 'The Gyroor Warrior All-Terrain Hoverboard is part of ALLIED\'s authorized Gyroor hoverboards & self-balancing boards range, featuring 300w-400w dual hub motor, 36v-42v 4-4.4ah lithium-ion, and a top speed of 10-18 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/261/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 4-4.4Ah Lithium-ion',
      range: '10-18 km per charge',
      topSpeed: '10-18 km/h',
      payloadCapacity: '100-120 kg max rider weight',
      motorPower: '300W-400W Dual Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '10-13 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Gyroor genuine authorized stock, inspected prior to Australian dispatch',
      'Hoverboards & Self-Balancing Boards class — 300w-400w dual hub motor',
      '36V-42V 4-4.4Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bullet-sx-2500-6-5-inch-hoverboard',
    slug: 'allied-bullet-sx-2500-6-5-inch-hoverboard',
    name: 'Bullet SX-2500 6.5 Inch Hoverboard',
    price: 199,
    category: 'self-balancing-ev',
    subcategory: 'hoverboards',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Bullet SX-2500 6.5 Inch Hoverboard — hoverboards & self-balancing boards with 36V-42V 4-4.4Ah lithium power and 10-18 km range.',
    description: 'The Bullet SX-2500 6.5 Inch Hoverboard is part of ALLIED\'s authorized Bullet hoverboards & self-balancing boards range, featuring 300w-400w dual hub motor, 36v-42v 4-4.4ah lithium-ion, and a top speed of 10-18 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/459/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 4-4.4Ah Lithium-ion',
      range: '10-18 km per charge',
      topSpeed: '10-18 km/h',
      payloadCapacity: '100-120 kg max rider weight',
      motorPower: '300W-400W Dual Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '10-13 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Bullet genuine authorized stock, inspected prior to Australian dispatch',
      'Hoverboards & Self-Balancing Boards class — 300w-400w dual hub motor',
      '36V-42V 4-4.4Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bullet-gen-iii-sx-3000-6-5-inch-hoverboard',
    slug: 'allied-bullet-gen-iii-sx-3000-6-5-inch-hoverboard',
    name: 'Bullet Gen III SX-3000 6.5 Inch Hoverboard',
    price: 259,
    category: 'self-balancing-ev',
    subcategory: 'hoverboards',
    featured: false,
    shortDescription: 'Bullet Gen III SX-3000 6.5 Inch Hoverboard — hoverboards & self-balancing boards with 36V-42V 4-4.4Ah lithium power and 10-18 km range.',
    description: 'The Bullet Gen III SX-3000 6.5 Inch Hoverboard is part of ALLIED\'s authorized Bullet hoverboards & self-balancing boards range, featuring 300w-400w dual hub motor, 36v-42v 4-4.4ah lithium-ion, and a top speed of 10-18 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/296/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 4-4.4Ah Lithium-ion',
      range: '10-18 km per charge',
      topSpeed: '10-18 km/h',
      payloadCapacity: '100-120 kg max rider weight',
      motorPower: '300W-400W Dual Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '10-13 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Bullet genuine authorized stock, inspected prior to Australian dispatch',
      'Hoverboards & Self-Balancing Boards class — 300w-400w dual hub motor',
      '36V-42V 4-4.4Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-vivid-v500-6-5-inch-street-hoverboard',
    slug: 'allied-vivid-v500-6-5-inch-street-hoverboard',
    name: 'Vivid V500 6.5 Inch Street Hoverboard',
    price: 360,
    category: 'self-balancing-ev',
    subcategory: 'hoverboards',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Vivid V500 6.5 Inch Street Hoverboard — hoverboards & self-balancing boards with 36V-42V 4-4.4Ah lithium power and 10-18 km range.',
    description: 'The Vivid V500 6.5 Inch Street Hoverboard is part of ALLIED\'s authorized Vivid hoverboards & self-balancing boards range, featuring 300w-400w dual hub motor, 36v-42v 4-4.4ah lithium-ion, and a top speed of 10-18 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/912/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 4-4.4Ah Lithium-ion',
      range: '10-18 km per charge',
      topSpeed: '10-18 km/h',
      payloadCapacity: '100-120 kg max rider weight',
      motorPower: '300W-400W Dual Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '10-13 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Vivid genuine authorized stock, inspected prior to Australian dispatch',
      'Hoverboards & Self-Balancing Boards class — 300w-400w dual hub motor',
      '36V-42V 4-4.4Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-e-glide-65b-street-hoverboard',
    slug: 'allied-e-glide-65b-street-hoverboard',
    name: 'E-Glide 65B Street Hoverboard',
    price: 319,
    category: 'self-balancing-ev',
    subcategory: 'hoverboards',
    badge: 'Sale',
    featured: false,
    shortDescription: 'E-Glide 65B Street Hoverboard — hoverboards & self-balancing boards with 36V-42V 4-4.4Ah lithium power and 10-18 km range.',
    description: 'The E-Glide 65B Street Hoverboard is part of ALLIED\'s authorized E-Glide hoverboards & self-balancing boards range, featuring 300w-400w dual hub motor, 36v-42v 4-4.4ah lithium-ion, and a top speed of 10-18 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/775/800/600'],
    specs: {
      voltage: '36V/42V System',
      batteryType: '36V-42V 4-4.4Ah Lithium-ion',
      range: '10-18 km per charge',
      topSpeed: '10-18 km/h',
      payloadCapacity: '100-120 kg max rider weight',
      motorPower: '300W-400W Dual Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '10-13 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'E-Glide genuine authorized stock, inspected prior to Australian dispatch',
      'Hoverboards & Self-Balancing Boards class — 300w-400w dual hub motor',
      '36V-42V 4-4.4Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bullet-kart-x-hoverboard-go-kart-attachment',
    slug: 'allied-bullet-kart-x-hoverboard-go-kart-attachment',
    name: 'Bullet KART-X Hoverboard Go-Kart Attachment',
    price: 92,
    category: 'self-balancing-ev',
    subcategory: 'hoverboard-kart-attachments',
    featured: false,
    shortDescription: 'Bullet KART-X Hoverboard Go-Kart Attachment — hoverboard go-kart attachments with N/A - powered by attached hoverboard lithium power and Matches attached hoverboard range range.',
    description: 'The Bullet KART-X Hoverboard Go-Kart Attachment is part of ALLIED\'s authorized Bullet hoverboard go-kart attachments range, featuring n/a - uses attached hoverboard motors, n/a - powered by attached hoverboard, and a top speed of matches attached hoverboard top speed. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/264/800/600'],
    specs: {
      voltage: 'N/A (mechanical accessory)',
      batteryType: 'N/A - powered by attached hoverboard',
      range: 'Matches attached hoverboard range',
      topSpeed: 'Matches attached hoverboard top speed',
      payloadCapacity: '100 kg max rider weight',
      motorPower: 'N/A - uses attached hoverboard motors',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '4-6 kg (attachment only)',
      warranty: '1 Year Frame'
    },
    features: [
      'Bullet genuine authorized stock, inspected prior to Australian dispatch',
      'Hoverboard Go-Kart Attachments class — n/a - uses attached hoverboard motors',
      'N/A - powered by attached hoverboard',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ampd-bros-lil-rippa-16-kids',
    slug: 'allied-ampd-bros-lil-rippa-16-kids',
    name: 'Ampd Bros Lil Rippa 16" Kids',
    price: 1979,
    category: 'kids-off-road-ev',
    subcategory: 'electric-balance-bikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Ampd Bros Lil Rippa 16" Kids — electric balance bikes with 12V-18V 4-5Ah lithium power and 45-90 minutes ride time range.',
    description: 'The Ampd Bros Lil Rippa 16" Kids is part of ALLIED\'s authorized Ampd Bros electric balance bikes range, featuring 80w-300w hub motor, 12v-18v 4-5ah lithium-ion, and a top speed of 8-20 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/629/800/600'],
    specs: {
      voltage: '12V/16V/18V System',
      batteryType: '12V-18V 4-5Ah Lithium-ion',
      range: '45-90 minutes ride time',
      topSpeed: '8-20 km/h (adjustable speed limiter)',
      payloadCapacity: '35 kg max rider weight',
      motorPower: '80W-300W Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '7-10 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Ampd Bros genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Balance Bikes class — 80w-300w hub motor',
      '12V-18V 4-5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-thumpstar-tse-12h-balance-bike',
    slug: 'allied-thumpstar-tse-12h-balance-bike',
    name: 'Thumpstar TSE 12H Balance Bike',
    price: 849,
    category: 'kids-off-road-ev',
    subcategory: 'electric-balance-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Thumpstar TSE 12H Balance Bike — electric balance bikes with 12V-18V 4-5Ah lithium power and 45-90 minutes ride time range.',
    description: 'The Thumpstar TSE 12H Balance Bike is part of ALLIED\'s authorized Thumpstar electric balance bikes range, featuring 80w-300w hub motor, 12v-18v 4-5ah lithium-ion, and a top speed of 8-20 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/844/800/600'],
    specs: {
      voltage: '12V/16V/18V System',
      batteryType: '12V-18V 4-5Ah Lithium-ion',
      range: '45-90 minutes ride time',
      topSpeed: '8-20 km/h (adjustable speed limiter)',
      payloadCapacity: '35 kg max rider weight',
      motorPower: '80W-300W Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '7-10 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Thumpstar genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Balance Bikes class — 80w-300w hub motor',
      '12V-18V 4-5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-thumpstar-tse-12l-balance-bike',
    slug: 'allied-thumpstar-tse-12l-balance-bike',
    name: 'Thumpstar TSE 12L Balance Bike',
    price: 799,
    category: 'kids-off-road-ev',
    subcategory: 'electric-balance-bikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Thumpstar TSE 12L Balance Bike — electric balance bikes with 12V-18V 4-5Ah lithium power and 45-90 minutes ride time range.',
    description: 'The Thumpstar TSE 12L Balance Bike is part of ALLIED\'s authorized Thumpstar electric balance bikes range, featuring 80w-300w hub motor, 12v-18v 4-5ah lithium-ion, and a top speed of 8-20 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/385/800/600'],
    specs: {
      voltage: '12V/16V/18V System',
      batteryType: '12V-18V 4-5Ah Lithium-ion',
      range: '45-90 minutes ride time',
      topSpeed: '8-20 km/h (adjustable speed limiter)',
      payloadCapacity: '35 kg max rider weight',
      motorPower: '80W-300W Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '7-10 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Thumpstar genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Balance Bikes class — 80w-300w hub motor',
      '12V-18V 4-5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-thumpstar-tse16h-pro-balance-bike',
    slug: 'allied-thumpstar-tse16h-pro-balance-bike',
    name: 'Thumpstar TSE16H Pro Balance Bike',
    price: 899,
    category: 'kids-off-road-ev',
    subcategory: 'electric-balance-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Thumpstar TSE16H Pro Balance Bike — electric balance bikes with 12V-18V 4-5Ah lithium power and 45-90 minutes ride time range.',
    description: 'The Thumpstar TSE16H Pro Balance Bike is part of ALLIED\'s authorized Thumpstar electric balance bikes range, featuring 80w-300w hub motor, 12v-18v 4-5ah lithium-ion, and a top speed of 8-20 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/276/800/600'],
    specs: {
      voltage: '12V/16V/18V System',
      batteryType: '12V-18V 4-5Ah Lithium-ion',
      range: '45-90 minutes ride time',
      topSpeed: '8-20 km/h (adjustable speed limiter)',
      payloadCapacity: '35 kg max rider weight',
      motorPower: '80W-300W Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '7-10 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Thumpstar genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Balance Bikes class — 80w-300w hub motor',
      '12V-18V 4-5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ycf-12-electric-kids-trainer',
    slug: 'allied-ycf-12-electric-kids-trainer',
    name: 'YCF 12" Electric Kids Trainer',
    price: 799,
    category: 'kids-off-road-ev',
    subcategory: 'electric-balance-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'YCF 12" Electric Kids Trainer — electric balance bikes with 12V-18V 4-5Ah lithium power and 45-90 minutes ride time range.',
    description: 'The YCF 12" Electric Kids Trainer is part of ALLIED\'s authorized YCF electric balance bikes range, featuring 80w-300w hub motor, 12v-18v 4-5ah lithium-ion, and a top speed of 8-20 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/160/800/600'],
    specs: {
      voltage: '12V/16V/18V System',
      batteryType: '12V-18V 4-5Ah Lithium-ion',
      range: '45-90 minutes ride time',
      topSpeed: '8-20 km/h (adjustable speed limiter)',
      payloadCapacity: '35 kg max rider weight',
      motorPower: '80W-300W Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '7-10 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'YCF genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Balance Bikes class — 80w-300w hub motor',
      '12V-18V 4-5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-stacyc-16edrive-brushless-pro',
    slug: 'allied-stacyc-16edrive-brushless-pro',
    name: 'Stacyc 16eDrive Brushless Pro',
    price: 1499,
    category: 'kids-off-road-ev',
    subcategory: 'electric-balance-bikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'STACYC Stacyc 16eDrive Brushless Pro — electric balance bikes with 12V-18V 4-5Ah lithium power and 45-90 minutes ride time range.',
    description: 'The Stacyc 16eDrive Brushless Pro is part of ALLIED\'s authorized STACYC electric balance bikes range, featuring 80w-300w hub motor, 12v-18v 4-5ah lithium-ion, and a top speed of 8-20 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/173/800/600'],
    specs: {
      voltage: '12V/16V/18V System',
      batteryType: '12V-18V 4-5Ah Lithium-ion',
      range: '45-90 minutes ride time',
      topSpeed: '8-20 km/h (adjustable speed limiter)',
      payloadCapacity: '35 kg max rider weight',
      motorPower: '80W-300W Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '7-10 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'STACYC genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Balance Bikes class — 80w-300w hub motor',
      '12V-18V 4-5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-stacyc-12edrive-balance-bike',
    slug: 'allied-stacyc-12edrive-balance-bike',
    name: 'Stacyc 12eDrive Balance Bike',
    price: 1299,
    category: 'kids-off-road-ev',
    subcategory: 'electric-balance-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'STACYC Stacyc 12eDrive Balance Bike — electric balance bikes with 12V-18V 4-5Ah lithium power and 45-90 minutes ride time range.',
    description: 'The Stacyc 12eDrive Balance Bike is part of ALLIED\'s authorized STACYC electric balance bikes range, featuring 80w-300w hub motor, 12v-18v 4-5ah lithium-ion, and a top speed of 8-20 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/837/800/600'],
    specs: {
      voltage: '12V/16V/18V System',
      batteryType: '12V-18V 4-5Ah Lithium-ion',
      range: '45-90 minutes ride time',
      topSpeed: '8-20 km/h (adjustable speed limiter)',
      payloadCapacity: '35 kg max rider weight',
      motorPower: '80W-300W Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '7-10 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'STACYC genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Balance Bikes class — 80w-300w hub motor',
      '12V-18V 4-5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ktm-factory-replica-16edrive',
    slug: 'allied-ktm-factory-replica-16edrive',
    name: 'KTM Factory Replica 16eDrive',
    price: 1699,
    category: 'kids-off-road-ev',
    subcategory: 'electric-balance-bikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'KTM Factory Replica 16eDrive — electric balance bikes with 12V-18V 4-5Ah lithium power and 45-90 minutes ride time range.',
    description: 'The KTM Factory Replica 16eDrive is part of ALLIED\'s authorized KTM electric balance bikes range, featuring 80w-300w hub motor, 12v-18v 4-5ah lithium-ion, and a top speed of 8-20 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/151/800/600'],
    specs: {
      voltage: '12V/16V/18V System',
      batteryType: '12V-18V 4-5Ah Lithium-ion',
      range: '45-90 minutes ride time',
      topSpeed: '8-20 km/h (adjustable speed limiter)',
      payloadCapacity: '35 kg max rider weight',
      motorPower: '80W-300W Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '7-10 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'KTM genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Balance Bikes class — 80w-300w hub motor',
      '12V-18V 4-5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-husqvarna-factory-replica-12edrive',
    slug: 'allied-husqvarna-factory-replica-12edrive',
    name: 'Husqvarna Factory Replica 12eDrive',
    price: 1299,
    category: 'kids-off-road-ev',
    subcategory: 'electric-balance-bikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Husqvarna Factory Replica 12eDrive — electric balance bikes with 12V-18V 4-5Ah lithium power and 45-90 minutes ride time range.',
    description: 'The Husqvarna Factory Replica 12eDrive is part of ALLIED\'s authorized Husqvarna electric balance bikes range, featuring 80w-300w hub motor, 12v-18v 4-5ah lithium-ion, and a top speed of 8-20 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/533/800/600'],
    specs: {
      voltage: '12V/16V/18V System',
      batteryType: '12V-18V 4-5Ah Lithium-ion',
      range: '45-90 minutes ride time',
      topSpeed: '8-20 km/h (adjustable speed limiter)',
      payloadCapacity: '35 kg max rider weight',
      motorPower: '80W-300W Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '7-10 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Husqvarna genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Balance Bikes class — 80w-300w hub motor',
      '12V-18V 4-5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-gasgas-factory-replica-16edrive',
    slug: 'allied-gasgas-factory-replica-16edrive',
    name: 'GASGAS Factory Replica 16eDrive',
    price: 1699,
    category: 'kids-off-road-ev',
    subcategory: 'electric-balance-bikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'GASGAS Factory Replica 16eDrive — electric balance bikes with 12V-18V 4-5Ah lithium power and 45-90 minutes ride time range.',
    description: 'The GASGAS Factory Replica 16eDrive is part of ALLIED\'s authorized GASGAS electric balance bikes range, featuring 80w-300w hub motor, 12v-18v 4-5ah lithium-ion, and a top speed of 8-20 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/921/800/600'],
    specs: {
      voltage: '12V/16V/18V System',
      batteryType: '12V-18V 4-5Ah Lithium-ion',
      range: '45-90 minutes ride time',
      topSpeed: '8-20 km/h (adjustable speed limiter)',
      payloadCapacity: '35 kg max rider weight',
      motorPower: '80W-300W Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '7-10 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'GASGAS genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Balance Bikes class — 80w-300w hub motor',
      '12V-18V 4-5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-thumpstar-tsk-12-electric-balance',
    slug: 'allied-thumpstar-tsk-12-electric-balance',
    name: 'Thumpstar TSK 12 Electric Balance',
    price: 899,
    category: 'kids-off-road-ev',
    subcategory: 'electric-balance-bikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Thumpstar TSK 12 Electric Balance — electric balance bikes with 12V-18V 4-5Ah lithium power and 45-90 minutes ride time range.',
    description: 'The Thumpstar TSK 12 Electric Balance is part of ALLIED\'s authorized Thumpstar electric balance bikes range, featuring 80w-300w hub motor, 12v-18v 4-5ah lithium-ion, and a top speed of 8-20 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/795/800/600'],
    specs: {
      voltage: '12V/16V/18V System',
      batteryType: '12V-18V 4-5Ah Lithium-ion',
      range: '45-90 minutes ride time',
      topSpeed: '8-20 km/h (adjustable speed limiter)',
      payloadCapacity: '35 kg max rider weight',
      motorPower: '80W-300W Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '7-10 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Thumpstar genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Balance Bikes class — 80w-300w hub motor',
      '12V-18V 4-5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-mondraker-grommy-16-kids-e-bike',
    slug: 'allied-mondraker-grommy-16-kids-e-bike',
    name: 'Mondraker Grommy 16 Kids E-Bike',
    price: 2299,
    category: 'kids-off-road-ev',
    subcategory: 'electric-balance-bikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Mondraker Grommy 16 Kids E-Bike — electric balance bikes with 12V-18V 4-5Ah lithium power and 45-90 minutes ride time range.',
    description: 'The Mondraker Grommy 16 Kids E-Bike is part of ALLIED\'s authorized Mondraker electric balance bikes range, featuring 80w-300w hub motor, 12v-18v 4-5ah lithium-ion, and a top speed of 8-20 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/586/800/600'],
    specs: {
      voltage: '12V/16V/18V System',
      batteryType: '12V-18V 4-5Ah Lithium-ion',
      range: '45-90 minutes ride time',
      topSpeed: '8-20 km/h (adjustable speed limiter)',
      payloadCapacity: '35 kg max rider weight',
      motorPower: '80W-300W Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '7-10 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Mondraker genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Balance Bikes class — 80w-300w hub motor',
      '12V-18V 4-5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bulls-tokee-ultra-e-balance-14',
    slug: 'allied-bulls-tokee-ultra-e-balance-14',
    name: 'Bulls Tokee Ultra E-Balance 14',
    price: 1199,
    category: 'kids-off-road-ev',
    subcategory: 'electric-balance-bikes',
    featured: false,
    shortDescription: 'Bulls Tokee Ultra E-Balance 14 — electric balance bikes with 12V-18V 4-5Ah lithium power and 45-90 minutes ride time range.',
    description: 'The Bulls Tokee Ultra E-Balance 14 is part of ALLIED\'s authorized Bulls electric balance bikes range, featuring 80w-300w hub motor, 12v-18v 4-5ah lithium-ion, and a top speed of 8-20 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/194/800/600'],
    specs: {
      voltage: '12V/16V/18V System',
      batteryType: '12V-18V 4-5Ah Lithium-ion',
      range: '45-90 minutes ride time',
      topSpeed: '8-20 km/h (adjustable speed limiter)',
      payloadCapacity: '35 kg max rider weight',
      motorPower: '80W-300W Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '7-10 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Bulls genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Balance Bikes class — 80w-300w hub motor',
      '12V-18V 4-5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-thumpstar-tsk-16-pro-balance',
    slug: 'allied-thumpstar-tsk-16-pro-balance',
    name: 'Thumpstar TSK 16 Pro Balance',
    price: 1099,
    category: 'kids-off-road-ev',
    subcategory: 'electric-balance-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Thumpstar TSK 16 Pro Balance — electric balance bikes with 12V-18V 4-5Ah lithium power and 45-90 minutes ride time range.',
    description: 'The Thumpstar TSK 16 Pro Balance is part of ALLIED\'s authorized Thumpstar electric balance bikes range, featuring 80w-300w hub motor, 12v-18v 4-5ah lithium-ion, and a top speed of 8-20 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/370/800/600'],
    specs: {
      voltage: '12V/16V/18V System',
      batteryType: '12V-18V 4-5Ah Lithium-ion',
      range: '45-90 minutes ride time',
      topSpeed: '8-20 km/h (adjustable speed limiter)',
      payloadCapacity: '35 kg max rider weight',
      motorPower: '80W-300W Hub Motor',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '7-10 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Thumpstar genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Balance Bikes class — 80w-300w hub motor',
      '12V-18V 4-5Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-sur-ron-light-bee-x',
    slug: 'allied-sur-ron-light-bee-x',
    name: 'Sur-Ron Light Bee X',
    price: 5699,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Sur-Ron Light Bee X — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Sur-Ron Light Bee X is part of ALLIED\'s authorized Sur-Ron youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/423/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Sur-Ron genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-talaria-x3',
    slug: 'allied-talaria-x3',
    name: 'Talaria X3',
    price: 6499,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Talaria X3 — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Talaria X3 is part of ALLIED\'s authorized Talaria youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/706/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Talaria genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-e-ride-pro-ss-3-0-off-road',
    slug: 'allied-e-ride-pro-ss-3-0-off-road',
    name: 'E Ride Pro SS 3.0 Off Road',
    price: 7399,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'E Ride Pro SS 3.0 Off Road — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The E Ride Pro SS 3.0 Off Road is part of ALLIED\'s authorized E Ride youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/266/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'E Ride genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-e-ride-pro-ss-2-0-long-range',
    slug: 'allied-e-ride-pro-ss-2-0-long-range',
    name: 'E Ride Pro SS 2.0 Long Range',
    price: 6890,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'E Ride Pro SS 2.0 Long Range — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The E Ride Pro SS 2.0 Long Range is part of ALLIED\'s authorized E Ride youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/380/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'E Ride genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-e-ride-pro-sr-off-road',
    slug: 'allied-e-ride-pro-sr-off-road',
    name: 'E Ride Pro SR Off Road',
    price: 8490,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'E Ride Pro SR Off Road — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The E Ride Pro SR Off Road is part of ALLIED\'s authorized E Ride youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/847/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'E Ride genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-arctic-leopard-xe-pro-s-dirt-bike',
    slug: 'allied-arctic-leopard-xe-pro-s-dirt-bike',
    name: 'Arctic Leopard XE Pro S Dirt Bike',
    price: 6950,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Arctic Leopard XE Pro S Dirt Bike — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Arctic Leopard XE Pro S Dirt Bike is part of ALLIED\'s authorized Arctic Leopard youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/439/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Arctic Leopard genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-rerode-r1-17kw-electric-dirt-bike',
    slug: 'allied-rerode-r1-17kw-electric-dirt-bike',
    name: 'Rerode R1+ 17kW Electric Dirt Bike',
    price: 6999,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Rerode R1+ 17kW Electric Dirt Bike — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Rerode R1+ 17kW Electric Dirt Bike is part of ALLIED\'s authorized Rerode youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/109/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Rerode genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-rerode-r1-10kw-electric-dirt-bike',
    slug: 'allied-rerode-r1-10kw-electric-dirt-bike',
    name: 'Rerode R1 10kW Electric Dirt Bike',
    price: 5999,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Rerode R1 10kW Electric Dirt Bike — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Rerode R1 10kW Electric Dirt Bike is part of ALLIED\'s authorized Rerode youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/109/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Rerode genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-sur-ron-light-bee-youth-edition',
    slug: 'allied-sur-ron-light-bee-youth-edition',
    name: 'Sur-Ron Light Bee Youth Edition',
    price: 4899,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Sur-Ron Light Bee Youth Edition — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Sur-Ron Light Bee Youth Edition is part of ALLIED\'s authorized Sur-Ron youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/447/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Sur-Ron genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-talaria-xxx-youth-pit-bike',
    slug: 'allied-talaria-xxx-youth-pit-bike',
    name: 'Talaria XXX Youth Pit Bike',
    price: 4499,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Talaria XXX Youth Pit Bike — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Talaria XXX Youth Pit Bike is part of ALLIED\'s authorized Talaria youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/223/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Talaria genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kuberg-cross-hero-youth-dirt-bike',
    slug: 'allied-kuberg-cross-hero-youth-dirt-bike',
    name: 'Kuberg Cross Hero Youth Dirt Bike',
    price: 3299,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Kuberg Cross Hero Youth Dirt Bike — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Kuberg Cross Hero Youth Dirt Bike is part of ALLIED\'s authorized Kuberg youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/749/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Kuberg genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-sur-ron-hyperbee-youth-e-dirt-bike',
    slug: 'allied-sur-ron-hyperbee-youth-e-dirt-bike',
    name: 'Sur-Ron Hyperbee Youth E-Dirt Bike',
    price: 3899,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Sur-Ron Hyperbee Youth E-Dirt Bike — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Sur-Ron Hyperbee Youth E-Dirt Bike is part of ALLIED\'s authorized Sur-Ron youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/143/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Sur-Ron genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-razor-mx650-dirt-rocket-pit-bike',
    slug: 'allied-razor-mx650-dirt-rocket-pit-bike',
    name: 'Razor MX650 Dirt Rocket Pit Bike',
    price: 1299,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Razor MX650 Dirt Rocket Pit Bike — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Razor MX650 Dirt Rocket Pit Bike is part of ALLIED\'s authorized Razor youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/721/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Razor genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-mototec-36v-1000w-demon-pit-bike',
    slug: 'allied-mototec-36v-1000w-demon-pit-bike',
    name: 'MotoTec 36V 1000W Demon Pit Bike',
    price: 1499,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Sale',
    featured: false,
    shortDescription: 'MotoTec 36V 1000W Demon Pit Bike — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The MotoTec 36V 1000W Demon Pit Bike is part of ALLIED\'s authorized MotoTec youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/564/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'MotoTec genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-thumpstar-tsk-70-e-pit-bike',
    slug: 'allied-thumpstar-tsk-70-e-pit-bike',
    name: 'Thumpstar TSK 70 E-Pit Bike',
    price: 2199,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    featured: false,
    shortDescription: 'Thumpstar TSK 70 E-Pit Bike — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Thumpstar TSK 70 E-Pit Bike is part of ALLIED\'s authorized Thumpstar youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/653/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Thumpstar genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-torrot-motocross-one-electric-pit',
    slug: 'allied-torrot-motocross-one-electric-pit',
    name: 'Torrot Motocross ONE Electric Pit',
    price: 3699,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Torrot Motocross ONE Electric Pit — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Torrot Motocross ONE Electric Pit is part of ALLIED\'s authorized Torrot youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/852/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Torrot genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kuberg-freerider-youth-e-dirt-bike',
    slug: 'allied-kuberg-freerider-youth-e-dirt-bike',
    name: 'Kuberg Freerider Youth E-Dirt Bike',
    price: 5299,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Kuberg Freerider Youth E-Dirt Bike — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Kuberg Freerider Youth E-Dirt Bike is part of ALLIED\'s authorized Kuberg youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/104/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Kuberg genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kayo-e-ksd-youth-electric-motocross',
    slug: 'allied-kayo-e-ksd-youth-electric-motocross',
    name: 'Kayo e-KSD Youth Electric Motocross',
    price: 2899,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Kayo e-KSD Youth Electric Motocross — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Kayo e-KSD Youth Electric Motocross is part of ALLIED\'s authorized Kayo youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/139/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Kayo genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-sur-ron-light-bee-s',
    slug: 'allied-sur-ron-light-bee-s',
    name: 'Sur-Ron Light Bee S',
    price: 4499,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Sur-Ron Light Bee S — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Sur-Ron Light Bee S is part of ALLIED\'s authorized Sur-Ron youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/643/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Sur-Ron genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-talaria-x3-pro',
    slug: 'allied-talaria-x3-pro',
    name: 'Talaria X3 Pro',
    price: 7999,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Talaria X3 Pro — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Talaria X3 Pro is part of ALLIED\'s authorized Talaria youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/261/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Talaria genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-talaria-xxx',
    slug: 'allied-talaria-xxx',
    name: 'Talaria XXX',
    price: 5999,
    category: 'kids-off-road-ev',
    subcategory: 'youth-electric-dirt-bikes',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Talaria XXX — youth electric dirt & pit bikes with 48V-72V 20-40Ah lithium power and 40-100 km range.',
    description: 'The Talaria XXX is part of ALLIED\'s authorized Talaria youth electric dirt & pit bikes range, featuring 1000w-8000w motor, 48v-72v 20-40ah lithium-ion, and a top speed of 25-90 km/h (off-road/private land use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/473/800/600'],
    specs: {
      voltage: '48V/60V/72V System',
      batteryType: '48V-72V 20-40Ah Lithium-ion',
      range: '40-100 km per charge',
      topSpeed: '25-90 km/h (off-road/private land use)',
      payloadCapacity: '90-110 kg max rider weight',
      motorPower: '1000W-8000W Motor',
      chargeTime: '2-4 Hours',
      dimensions: 'Varies by model',
      weight: '40-75 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Talaria genuine authorized stock, inspected prior to Australian dispatch',
      'Youth Electric Dirt & Pit Bikes class — 1000w-8000w motor',
      '48V-72V 20-40Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-gokart-pro-2',
    slug: 'allied-segway-ninebot-gokart-pro-2',
    name: 'Segway Ninebot Gokart Pro 2',
    price: 3120,
    category: 'kids-off-road-ev',
    subcategory: 'electric-go-karts',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Segway Ninebot Gokart Pro 2 — electric go-karts & drift trikes with 24V-36V 7-10Ah lithium power and 12-25 km range.',
    description: 'The Segway Ninebot Gokart Pro 2 is part of ALLIED\'s authorized Segway Ninebot electric go-karts & drift trikes range, featuring 350w-1000w motor, 24v-36v 7-10ah lithium-ion/sla, and a top speed of 12-40 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/554/800/600'],
    specs: {
      voltage: '24V/36V System',
      batteryType: '24V-36V 7-10Ah Lithium-ion/SLA',
      range: '12-25 km per charge',
      topSpeed: '12-40 km/h (adjustable speed limiter)',
      payloadCapacity: '100-130 kg max rider weight',
      motorPower: '350W-1000W Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '25-40 kg',
      warranty: '1 Year Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Go-Karts & Drift Trikes class — 350w-1000w motor',
      '24V-36V 7-10Ah Lithium-ion/SLA',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-razor-ground-force-drifter-kart',
    slug: 'allied-razor-ground-force-drifter-kart',
    name: 'Razor Ground Force Drifter Kart',
    price: 799,
    category: 'kids-off-road-ev',
    subcategory: 'electric-go-karts',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Razor Ground Force Drifter Kart — electric go-karts & drift trikes with 24V-36V 7-10Ah lithium power and 12-25 km range.',
    description: 'The Razor Ground Force Drifter Kart is part of ALLIED\'s authorized Razor electric go-karts & drift trikes range, featuring 350w-1000w motor, 24v-36v 7-10ah lithium-ion/sla, and a top speed of 12-40 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/230/800/600'],
    specs: {
      voltage: '24V/36V System',
      batteryType: '24V-36V 7-10Ah Lithium-ion/SLA',
      range: '12-25 km per charge',
      topSpeed: '12-40 km/h (adjustable speed limiter)',
      payloadCapacity: '100-130 kg max rider weight',
      motorPower: '350W-1000W Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '25-40 kg',
      warranty: '1 Year Frame & Motor'
    },
    features: [
      'Razor genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Go-Karts & Drift Trikes class — 350w-1000w motor',
      '24V-36V 7-10Ah Lithium-ion/SLA',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-gotrax-cyberpunk-go-kart',
    slug: 'allied-gotrax-cyberpunk-go-kart',
    name: 'Gotrax Cyberpunk Go-Kart',
    price: 999,
    category: 'kids-off-road-ev',
    subcategory: 'electric-go-karts',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Gotrax Cyberpunk Go-Kart — electric go-karts & drift trikes with 24V-36V 7-10Ah lithium power and 12-25 km range.',
    description: 'The Gotrax Cyberpunk Go-Kart is part of ALLIED\'s authorized Gotrax electric go-karts & drift trikes range, featuring 350w-1000w motor, 24v-36v 7-10ah lithium-ion/sla, and a top speed of 12-40 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/502/800/600'],
    specs: {
      voltage: '24V/36V System',
      batteryType: '24V-36V 7-10Ah Lithium-ion/SLA',
      range: '12-25 km per charge',
      topSpeed: '12-40 km/h (adjustable speed limiter)',
      payloadCapacity: '100-130 kg max rider weight',
      motorPower: '350W-1000W Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '25-40 kg',
      warranty: '1 Year Frame & Motor'
    },
    features: [
      'Gotrax genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Go-Karts & Drift Trikes class — 350w-1000w motor',
      '24V-36V 7-10Ah Lithium-ion/SLA',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-razor-crazy-cart-xl-adult-youth',
    slug: 'allied-razor-crazy-cart-xl-adult-youth',
    name: 'Razor Crazy Cart XL Adult/Youth',
    price: 1699,
    category: 'kids-off-road-ev',
    subcategory: 'electric-go-karts',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Razor Crazy Cart XL Adult/Youth — electric go-karts & drift trikes with 24V-36V 7-10Ah lithium power and 12-25 km range.',
    description: 'The Razor Crazy Cart XL Adult/Youth is part of ALLIED\'s authorized Razor electric go-karts & drift trikes range, featuring 350w-1000w motor, 24v-36v 7-10ah lithium-ion/sla, and a top speed of 12-40 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/113/800/600'],
    specs: {
      voltage: '24V/36V System',
      batteryType: '24V-36V 7-10Ah Lithium-ion/SLA',
      range: '12-25 km per charge',
      topSpeed: '12-40 km/h (adjustable speed limiter)',
      payloadCapacity: '100-130 kg max rider weight',
      motorPower: '350W-1000W Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '25-40 kg',
      warranty: '1 Year Frame & Motor'
    },
    features: [
      'Razor genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Go-Karts & Drift Trikes class — 350w-1000w motor',
      '24V-36V 7-10Ah Lithium-ion/SLA',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-burmax-1000w-electric-go-kart',
    slug: 'allied-burmax-1000w-electric-go-kart',
    name: 'Burmax 1000W Electric Go-Kart',
    price: 1899,
    category: 'kids-off-road-ev',
    subcategory: 'electric-go-karts',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Burmax 1000W Electric Go-Kart — electric go-karts & drift trikes with 24V-36V 7-10Ah lithium power and 12-25 km range.',
    description: 'The Burmax 1000W Electric Go-Kart is part of ALLIED\'s authorized Burmax electric go-karts & drift trikes range, featuring 350w-1000w motor, 24v-36v 7-10ah lithium-ion/sla, and a top speed of 12-40 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/762/800/600'],
    specs: {
      voltage: '24V/36V System',
      batteryType: '24V-36V 7-10Ah Lithium-ion/SLA',
      range: '12-25 km per charge',
      topSpeed: '12-40 km/h (adjustable speed limiter)',
      payloadCapacity: '100-130 kg max rider weight',
      motorPower: '350W-1000W Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '25-40 kg',
      warranty: '1 Year Frame & Motor'
    },
    features: [
      'Burmax genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Go-Karts & Drift Trikes class — 350w-1000w motor',
      '24V-36V 7-10Ah Lithium-ion/SLA',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-gokart-kit-edition',
    slug: 'allied-segway-ninebot-gokart-kit-edition',
    name: 'Segway Ninebot GoKart Kit Edition',
    price: 1899,
    category: 'kids-off-road-ev',
    subcategory: 'electric-go-karts',
    featured: false,
    shortDescription: 'Segway Ninebot GoKart Kit Edition — electric go-karts & drift trikes with 24V-36V 7-10Ah lithium power and 12-25 km range.',
    description: 'The Segway Ninebot GoKart Kit Edition is part of ALLIED\'s authorized Segway Ninebot electric go-karts & drift trikes range, featuring 350w-1000w motor, 24v-36v 7-10ah lithium-ion/sla, and a top speed of 12-40 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/100/800/600'],
    specs: {
      voltage: '24V/36V System',
      batteryType: '24V-36V 7-10Ah Lithium-ion/SLA',
      range: '12-25 km per charge',
      topSpeed: '12-40 km/h (adjustable speed limiter)',
      payloadCapacity: '100-130 kg max rider weight',
      motorPower: '350W-1000W Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '25-40 kg',
      warranty: '1 Year Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Go-Karts & Drift Trikes class — 350w-1000w motor',
      '24V-36V 7-10Ah Lithium-ion/SLA',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-triad-drift-trike-counter-measure-e',
    slug: 'allied-triad-drift-trike-counter-measure-e',
    name: 'Triad Drift Trike Counter-Measure E',
    price: 1999,
    category: 'kids-off-road-ev',
    subcategory: 'electric-go-karts',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Triad Drift Trike Counter-Measure E — electric go-karts & drift trikes with 24V-36V 7-10Ah lithium power and 12-25 km range.',
    description: 'The Triad Drift Trike Counter-Measure E is part of ALLIED\'s authorized Triad electric go-karts & drift trikes range, featuring 350w-1000w motor, 24v-36v 7-10ah lithium-ion/sla, and a top speed of 12-40 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/298/800/600'],
    specs: {
      voltage: '24V/36V System',
      batteryType: '24V-36V 7-10Ah Lithium-ion/SLA',
      range: '12-25 km per charge',
      topSpeed: '12-40 km/h (adjustable speed limiter)',
      payloadCapacity: '100-130 kg max rider weight',
      motorPower: '350W-1000W Motor',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '25-40 kg',
      warranty: '1 Year Frame & Motor'
    },
    features: [
      'Triad genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Go-Karts & Drift Trikes class — 350w-1000w motor',
      '24V-36V 7-10Ah Lithium-ion/SLA',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-afiscooter-c3-compact-3-wheel',
    slug: 'allied-afiscooter-c3-compact-3-wheel',
    name: 'Afiscooter C3 Compact 3-Wheel',
    price: 3699,
    category: 'mobility-scooters',
    subcategory: 'travel-mobility-scooters',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Afiscooter C3 Compact 3-Wheel — travel & folding mobility scooters with 24V 8-12Ah lithium power and 15-30 km range.',
    description: 'The Afiscooter C3 Compact 3-Wheel is part of ALLIED\'s authorized Afiscooter travel & folding mobility scooters range, featuring 250w-350w motor, 24v 8-12ah lithium-ion/sla (airline-safe), and a top speed of 6-10 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/260/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      range: '15-30 km per charge',
      topSpeed: '6-10 km/h',
      payloadCapacity: '115-135 kg max user weight',
      motorPower: '250W-350W Motor',
      chargeTime: '4-8 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg (disassembles into airline-friendly pieces)',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Afiscooter genuine authorized stock, inspected prior to Australian dispatch',
      'Travel & Folding Mobility Scooters class — 250w-350w motor',
      '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-merits-health-pacer-folding-scooter',
    slug: 'allied-merits-health-pacer-folding-scooter',
    name: 'Merits Health Pacer Folding Scooter',
    price: 3199,
    category: 'mobility-scooters',
    subcategory: 'travel-mobility-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Merits Health Pacer Folding Scooter — travel & folding mobility scooters with 24V 8-12Ah lithium power and 15-30 km range.',
    description: 'The Merits Health Pacer Folding Scooter is part of ALLIED\'s authorized Merits travel & folding mobility scooters range, featuring 250w-350w motor, 24v 8-12ah lithium-ion/sla (airline-safe), and a top speed of 6-10 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/550/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      range: '15-30 km per charge',
      topSpeed: '6-10 km/h',
      payloadCapacity: '115-135 kg max user weight',
      motorPower: '250W-350W Motor',
      chargeTime: '4-8 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg (disassembles into airline-friendly pieces)',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Merits genuine authorized stock, inspected prior to Australian dispatch',
      'Travel & Folding Mobility Scooters class — 250w-350w motor',
      '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-pride-mobility-go-go-ultra-x',
    slug: 'allied-pride-mobility-go-go-ultra-x',
    name: 'Pride Mobility Go-Go Ultra X',
    price: 1999,
    category: 'mobility-scooters',
    subcategory: 'travel-mobility-scooters',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Pride Mobility Go-Go Ultra X — travel & folding mobility scooters with 24V 8-12Ah lithium power and 15-30 km range.',
    description: 'The Pride Mobility Go-Go Ultra X is part of ALLIED\'s authorized Pride Mobility travel & folding mobility scooters range, featuring 250w-350w motor, 24v 8-12ah lithium-ion/sla (airline-safe), and a top speed of 6-10 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/571/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      range: '15-30 km per charge',
      topSpeed: '6-10 km/h',
      payloadCapacity: '115-135 kg max user weight',
      motorPower: '250W-350W Motor',
      chargeTime: '4-8 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg (disassembles into airline-friendly pieces)',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Pride Mobility genuine authorized stock, inspected prior to Australian dispatch',
      'Travel & Folding Mobility Scooters class — 250w-350w motor',
      '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-shoprider-cordoba-luxury-scooter',
    slug: 'allied-shoprider-cordoba-luxury-scooter',
    name: 'Shoprider Cordoba Luxury Scooter',
    price: 3999,
    category: 'mobility-scooters',
    subcategory: 'travel-mobility-scooters',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Shoprider Cordoba Luxury Scooter — travel & folding mobility scooters with 24V 8-12Ah lithium power and 15-30 km range.',
    description: 'The Shoprider Cordoba Luxury Scooter is part of ALLIED\'s authorized Shoprider travel & folding mobility scooters range, featuring 250w-350w motor, 24v 8-12ah lithium-ion/sla (airline-safe), and a top speed of 6-10 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/402/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      range: '15-30 km per charge',
      topSpeed: '6-10 km/h',
      payloadCapacity: '115-135 kg max user weight',
      motorPower: '250W-350W Motor',
      chargeTime: '4-8 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg (disassembles into airline-friendly pieces)',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Shoprider genuine authorized stock, inspected prior to Australian dispatch',
      'Travel & Folding Mobility Scooters class — 250w-350w motor',
      '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-pride-mobility-go-go-lx-travel',
    slug: 'allied-pride-mobility-go-go-lx-travel',
    name: 'Pride Mobility Go-Go LX Travel',
    price: 2899,
    category: 'mobility-scooters',
    subcategory: 'travel-mobility-scooters',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Pride Mobility Go-Go LX Travel — travel & folding mobility scooters with 24V 8-12Ah lithium power and 15-30 km range.',
    description: 'The Pride Mobility Go-Go LX Travel is part of ALLIED\'s authorized Pride Mobility travel & folding mobility scooters range, featuring 250w-350w motor, 24v 8-12ah lithium-ion/sla (airline-safe), and a top speed of 6-10 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/565/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      range: '15-30 km per charge',
      topSpeed: '6-10 km/h',
      payloadCapacity: '115-135 kg max user weight',
      motorPower: '250W-350W Motor',
      chargeTime: '4-8 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg (disassembles into airline-friendly pieces)',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Pride Mobility genuine authorized stock, inspected prior to Australian dispatch',
      'Travel & Folding Mobility Scooters class — 250w-350w motor',
      '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-drive-medical-scout-4-travel-scooter',
    slug: 'allied-drive-medical-scout-4-travel-scooter',
    name: 'Drive Medical Scout 4 Travel Scooter',
    price: 2299,
    category: 'mobility-scooters',
    subcategory: 'travel-mobility-scooters',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Drive Medical Scout 4 Travel Scooter — travel & folding mobility scooters with 24V 8-12Ah lithium power and 15-30 km range.',
    description: 'The Drive Medical Scout 4 Travel Scooter is part of ALLIED\'s authorized Drive Medical travel & folding mobility scooters range, featuring 250w-350w motor, 24v 8-12ah lithium-ion/sla (airline-safe), and a top speed of 6-10 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/382/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      range: '15-30 km per charge',
      topSpeed: '6-10 km/h',
      payloadCapacity: '115-135 kg max user weight',
      motorPower: '250W-350W Motor',
      chargeTime: '4-8 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg (disassembles into airline-friendly pieces)',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Drive Medical genuine authorized stock, inspected prior to Australian dispatch',
      'Travel & Folding Mobility Scooters class — 250w-350w motor',
      '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-solax-transformer-auto-folding-scooter',
    slug: 'allied-solax-transformer-auto-folding-scooter',
    name: 'Solax Transformer Auto-Folding Scooter',
    price: 3899,
    category: 'mobility-scooters',
    subcategory: 'travel-mobility-scooters',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Solax Transformer Auto-Folding Scooter — travel & folding mobility scooters with 24V 8-12Ah lithium power and 15-30 km range.',
    description: 'The Solax Transformer Auto-Folding Scooter is part of ALLIED\'s authorized Solax travel & folding mobility scooters range, featuring 250w-350w motor, 24v 8-12ah lithium-ion/sla (airline-safe), and a top speed of 6-10 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/161/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      range: '15-30 km per charge',
      topSpeed: '6-10 km/h',
      payloadCapacity: '115-135 kg max user weight',
      motorPower: '250W-350W Motor',
      chargeTime: '4-8 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg (disassembles into airline-friendly pieces)',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Solax genuine authorized stock, inspected prior to Australian dispatch',
      'Travel & Folding Mobility Scooters class — 250w-350w motor',
      '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-merits-roadster-4-portable-scooter',
    slug: 'allied-merits-roadster-4-portable-scooter',
    name: 'Merits Roadster 4 Portable Scooter',
    price: 2499,
    category: 'mobility-scooters',
    subcategory: 'travel-mobility-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Merits Roadster 4 Portable Scooter — travel & folding mobility scooters with 24V 8-12Ah lithium power and 15-30 km range.',
    description: 'The Merits Roadster 4 Portable Scooter is part of ALLIED\'s authorized Merits travel & folding mobility scooters range, featuring 250w-350w motor, 24v 8-12ah lithium-ion/sla (airline-safe), and a top speed of 6-10 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/209/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      range: '15-30 km per charge',
      topSpeed: '6-10 km/h',
      payloadCapacity: '115-135 kg max user weight',
      motorPower: '250W-350W Motor',
      chargeTime: '4-8 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg (disassembles into airline-friendly pieces)',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Merits genuine authorized stock, inspected prior to Australian dispatch',
      'Travel & Folding Mobility Scooters class — 250w-350w motor',
      '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tzora-titan-hummer-folding-scooter',
    slug: 'allied-tzora-titan-hummer-folding-scooter',
    name: 'Tzora Titan Hummer Folding Scooter',
    price: 4299,
    category: 'mobility-scooters',
    subcategory: 'travel-mobility-scooters',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Tzora Titan Hummer Folding Scooter — travel & folding mobility scooters with 24V 8-12Ah lithium power and 15-30 km range.',
    description: 'The Tzora Titan Hummer Folding Scooter is part of ALLIED\'s authorized Tzora travel & folding mobility scooters range, featuring 250w-350w motor, 24v 8-12ah lithium-ion/sla (airline-safe), and a top speed of 6-10 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/854/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      range: '15-30 km per charge',
      topSpeed: '6-10 km/h',
      payloadCapacity: '115-135 kg max user weight',
      motorPower: '250W-350W Motor',
      chargeTime: '4-8 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg (disassembles into airline-friendly pieces)',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Tzora genuine authorized stock, inspected prior to Australian dispatch',
      'Travel & Folding Mobility Scooters class — 250w-350w motor',
      '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-shoprider-echo-3-portable-scooter',
    slug: 'allied-shoprider-echo-3-portable-scooter',
    name: 'Shoprider Echo 3 Portable Scooter',
    price: 1899,
    category: 'mobility-scooters',
    subcategory: 'travel-mobility-scooters',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Shoprider Echo 3 Portable Scooter — travel & folding mobility scooters with 24V 8-12Ah lithium power and 15-30 km range.',
    description: 'The Shoprider Echo 3 Portable Scooter is part of ALLIED\'s authorized Shoprider travel & folding mobility scooters range, featuring 250w-350w motor, 24v 8-12ah lithium-ion/sla (airline-safe), and a top speed of 6-10 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/854/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      range: '15-30 km per charge',
      topSpeed: '6-10 km/h',
      payloadCapacity: '115-135 kg max user weight',
      motorPower: '250W-350W Motor',
      chargeTime: '4-8 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg (disassembles into airline-friendly pieces)',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Shoprider genuine authorized stock, inspected prior to Australian dispatch',
      'Travel & Folding Mobility Scooters class — 250w-350w motor',
      '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-monarch-buzzaround-ex-heavy-travel',
    slug: 'allied-monarch-buzzaround-ex-heavy-travel',
    name: 'Monarch Buzzaround EX Heavy Travel',
    price: 3499,
    category: 'mobility-scooters',
    subcategory: 'travel-mobility-scooters',
    featured: false,
    shortDescription: 'Monarch Buzzaround EX Heavy Travel — travel & folding mobility scooters with 24V 8-12Ah lithium power and 15-30 km range.',
    description: 'The Monarch Buzzaround EX Heavy Travel is part of ALLIED\'s authorized Monarch travel & folding mobility scooters range, featuring 250w-350w motor, 24v 8-12ah lithium-ion/sla (airline-safe), and a top speed of 6-10 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/402/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      range: '15-30 km per charge',
      topSpeed: '6-10 km/h',
      payloadCapacity: '115-135 kg max user weight',
      motorPower: '250W-350W Motor',
      chargeTime: '4-8 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg (disassembles into airline-friendly pieces)',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Monarch genuine authorized stock, inspected prior to Australian dispatch',
      'Travel & Folding Mobility Scooters class — 250w-350w motor',
      '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-solax-mobie-plus-folding-scooter',
    slug: 'allied-solax-mobie-plus-folding-scooter',
    name: 'Solax Mobie Plus Folding Scooter',
    price: 3699,
    category: 'mobility-scooters',
    subcategory: 'travel-mobility-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Solax Mobie Plus Folding Scooter — travel & folding mobility scooters with 24V 8-12Ah lithium power and 15-30 km range.',
    description: 'The Solax Mobie Plus Folding Scooter is part of ALLIED\'s authorized Solax travel & folding mobility scooters range, featuring 250w-350w motor, 24v 8-12ah lithium-ion/sla (airline-safe), and a top speed of 6-10 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/420/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      range: '15-30 km per charge',
      topSpeed: '6-10 km/h',
      payloadCapacity: '115-135 kg max user weight',
      motorPower: '250W-350W Motor',
      chargeTime: '4-8 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg (disassembles into airline-friendly pieces)',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Solax genuine authorized stock, inspected prior to Australian dispatch',
      'Travel & Folding Mobility Scooters class — 250w-350w motor',
      '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-equipmed-smartpacer-folding-mobility-scooter',
    slug: 'allied-equipmed-smartpacer-folding-mobility-scooter',
    name: 'Equipmed SmartPacer+ Folding Mobility Scooter',
    price: 1099,
    category: 'mobility-scooters',
    subcategory: 'travel-mobility-scooters',
    featured: false,
    shortDescription: 'Equipmed SmartPacer+ Folding Mobility Scooter — travel & folding mobility scooters with 24V 8-12Ah lithium power and 15-30 km range.',
    description: 'The Equipmed SmartPacer+ Folding Mobility Scooter is part of ALLIED\'s authorized Equipmed travel & folding mobility scooters range, featuring 250w-350w motor, 24v 8-12ah lithium-ion/sla (airline-safe), and a top speed of 6-10 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/951/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      range: '15-30 km per charge',
      topSpeed: '6-10 km/h',
      payloadCapacity: '115-135 kg max user weight',
      motorPower: '250W-350W Motor',
      chargeTime: '4-8 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg (disassembles into airline-friendly pieces)',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Equipmed genuine authorized stock, inspected prior to Australian dispatch',
      'Travel & Folding Mobility Scooters class — 250w-350w motor',
      '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-equipmed-ultra-lightweight-folding-mobility-scooter',
    slug: 'allied-equipmed-ultra-lightweight-folding-mobility-scooter',
    name: 'Equipmed Ultra-Lightweight Folding Mobility Scooter',
    price: 1299,
    category: 'mobility-scooters',
    subcategory: 'travel-mobility-scooters',
    featured: false,
    shortDescription: 'Equipmed Ultra-Lightweight Folding Mobility Scooter — travel & folding mobility scooters with 24V 8-12Ah lithium power and 15-30 km range.',
    description: 'The Equipmed Ultra-Lightweight Folding Mobility Scooter is part of ALLIED\'s authorized Equipmed travel & folding mobility scooters range, featuring 250w-350w motor, 24v 8-12ah lithium-ion/sla (airline-safe), and a top speed of 6-10 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/413/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      range: '15-30 km per charge',
      topSpeed: '6-10 km/h',
      payloadCapacity: '115-135 kg max user weight',
      motorPower: '250W-350W Motor',
      chargeTime: '4-8 Hours',
      dimensions: 'Varies by model',
      weight: '18-30 kg (disassembles into airline-friendly pieces)',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Equipmed genuine authorized stock, inspected prior to Australian dispatch',
      'Travel & Folding Mobility Scooters class — 250w-350w motor',
      '24V 8-12Ah Lithium-ion/SLA (airline-safe)',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-afiscooter-s3-3-wheel-all-terrain',
    slug: 'allied-afiscooter-s3-3-wheel-all-terrain',
    name: 'Afiscooter S3 3-Wheel All-Terrain',
    price: 7499,
    category: 'mobility-scooters',
    subcategory: 'heavy-duty-mobility-scooters',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Afiscooter S3 3-Wheel All-Terrain — heavy-duty all-terrain mobility scooters with 24V 55-75Ah AGM/Lithium-ion lithium power and 30-60 km range.',
    description: 'The Afiscooter S3 3-Wheel All-Terrain is part of ALLIED\'s authorized Afiscooter heavy-duty all-terrain mobility scooters range, featuring 500w-800w dual motor, 24v 55-75ah agm/lithium-ion, and a top speed of 10-12 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/308/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 55-75Ah AGM/Lithium-ion',
      range: '30-60 km per charge',
      topSpeed: '10-12 km/h',
      payloadCapacity: '150-180 kg max user weight',
      motorPower: '500W-800W Dual Motor',
      chargeTime: '8-10 Hours',
      dimensions: 'Varies by model',
      weight: '80-120 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Afiscooter genuine authorized stock, inspected prior to Australian dispatch',
      'Heavy-Duty All-Terrain Mobility Scooters class — 500w-800w dual motor',
      '24V 55-75Ah AGM/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-merits-pioneer-14-heavy-duty',
    slug: 'allied-merits-pioneer-14-heavy-duty',
    name: 'Merits Pioneer 14 Heavy Duty',
    price: 5499,
    category: 'mobility-scooters',
    subcategory: 'heavy-duty-mobility-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Merits Pioneer 14 Heavy Duty — heavy-duty all-terrain mobility scooters with 24V 55-75Ah AGM/Lithium-ion lithium power and 30-60 km range.',
    description: 'The Merits Pioneer 14 Heavy Duty is part of ALLIED\'s authorized Merits heavy-duty all-terrain mobility scooters range, featuring 500w-800w dual motor, 24v 55-75ah agm/lithium-ion, and a top speed of 10-12 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/664/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 55-75Ah AGM/Lithium-ion',
      range: '30-60 km per charge',
      topSpeed: '10-12 km/h',
      payloadCapacity: '150-180 kg max user weight',
      motorPower: '500W-800W Dual Motor',
      chargeTime: '8-10 Hours',
      dimensions: 'Varies by model',
      weight: '80-120 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Merits genuine authorized stock, inspected prior to Australian dispatch',
      'Heavy-Duty All-Terrain Mobility Scooters class — 500w-800w dual motor',
      '24V 55-75Ah AGM/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-pride-pursuit-xl-heavy-duty',
    slug: 'allied-pride-pursuit-xl-heavy-duty',
    name: 'Pride Pursuit XL Heavy Duty',
    price: 6899,
    category: 'mobility-scooters',
    subcategory: 'heavy-duty-mobility-scooters',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Pride Mobility Pride Pursuit XL Heavy Duty — heavy-duty all-terrain mobility scooters with 24V 55-75Ah AGM/Lithium-ion lithium power and 30-60 km range.',
    description: 'The Pride Pursuit XL Heavy Duty is part of ALLIED\'s authorized Pride Mobility heavy-duty all-terrain mobility scooters range, featuring 500w-800w dual motor, 24v 55-75ah agm/lithium-ion, and a top speed of 10-12 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/883/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 55-75Ah AGM/Lithium-ion',
      range: '30-60 km per charge',
      topSpeed: '10-12 km/h',
      payloadCapacity: '150-180 kg max user weight',
      motorPower: '500W-800W Dual Motor',
      chargeTime: '8-10 Hours',
      dimensions: 'Varies by model',
      weight: '80-120 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Pride Mobility genuine authorized stock, inspected prior to Australian dispatch',
      'Heavy-Duty All-Terrain Mobility Scooters class — 500w-800w dual motor',
      '24V 55-75Ah AGM/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-afiscooter-s4-heavy-duty-4-wheel',
    slug: 'allied-afiscooter-s4-heavy-duty-4-wheel',
    name: 'Afiscooter S4 Heavy Duty 4-Wheel',
    price: 7999,
    category: 'mobility-scooters',
    subcategory: 'heavy-duty-mobility-scooters',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Afiscooter S4 Heavy Duty 4-Wheel — heavy-duty all-terrain mobility scooters with 24V 55-75Ah AGM/Lithium-ion lithium power and 30-60 km range.',
    description: 'The Afiscooter S4 Heavy Duty 4-Wheel is part of ALLIED\'s authorized Afiscooter heavy-duty all-terrain mobility scooters range, featuring 500w-800w dual motor, 24v 55-75ah agm/lithium-ion, and a top speed of 10-12 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/449/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 55-75Ah AGM/Lithium-ion',
      range: '30-60 km per charge',
      topSpeed: '10-12 km/h',
      payloadCapacity: '150-180 kg max user weight',
      motorPower: '500W-800W Dual Motor',
      chargeTime: '8-10 Hours',
      dimensions: 'Varies by model',
      weight: '80-120 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Afiscooter genuine authorized stock, inspected prior to Australian dispatch',
      'Heavy-Duty All-Terrain Mobility Scooters class — 500w-800w dual motor',
      '24V 55-75Ah AGM/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-pride-wrangler-all-terrain-heavy-duty',
    slug: 'allied-pride-wrangler-all-terrain-heavy-duty',
    name: 'Pride Wrangler All-Terrain Heavy Duty',
    price: 8499,
    category: 'mobility-scooters',
    subcategory: 'heavy-duty-mobility-scooters',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Pride Mobility Pride Wrangler All-Terrain Heavy Duty — heavy-duty all-terrain mobility scooters with 24V 55-75Ah AGM/Lithium-ion lithium power and 30-60 km range.',
    description: 'The Pride Wrangler All-Terrain Heavy Duty is part of ALLIED\'s authorized Pride Mobility heavy-duty all-terrain mobility scooters range, featuring 500w-800w dual motor, 24v 55-75ah agm/lithium-ion, and a top speed of 10-12 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/774/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 55-75Ah AGM/Lithium-ion',
      range: '30-60 km per charge',
      topSpeed: '10-12 km/h',
      payloadCapacity: '150-180 kg max user weight',
      motorPower: '500W-800W Dual Motor',
      chargeTime: '8-10 Hours',
      dimensions: 'Varies by model',
      weight: '80-120 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Pride Mobility genuine authorized stock, inspected prior to Australian dispatch',
      'Heavy-Duty All-Terrain Mobility Scooters class — 500w-800w dual motor',
      '24V 55-75Ah AGM/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-shoprider-endeavor-889-all-terrain',
    slug: 'allied-shoprider-endeavor-889-all-terrain',
    name: 'Shoprider Endeavor 889 All-Terrain',
    price: 5299,
    category: 'mobility-scooters',
    subcategory: 'heavy-duty-mobility-scooters',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Shoprider Endeavor 889 All-Terrain — heavy-duty all-terrain mobility scooters with 24V 55-75Ah AGM/Lithium-ion lithium power and 30-60 km range.',
    description: 'The Shoprider Endeavor 889 All-Terrain is part of ALLIED\'s authorized Shoprider heavy-duty all-terrain mobility scooters range, featuring 500w-800w dual motor, 24v 55-75ah agm/lithium-ion, and a top speed of 10-12 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/975/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 55-75Ah AGM/Lithium-ion',
      range: '30-60 km per charge',
      topSpeed: '10-12 km/h',
      payloadCapacity: '150-180 kg max user weight',
      motorPower: '500W-800W Dual Motor',
      chargeTime: '8-10 Hours',
      dimensions: 'Varies by model',
      weight: '80-120 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Shoprider genuine authorized stock, inspected prior to Australian dispatch',
      'Heavy-Duty All-Terrain Mobility Scooters class — 500w-800w dual motor',
      '24V 55-75Ah AGM/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-drive-medical-cobra-gt4-heavy-duty',
    slug: 'allied-drive-medical-cobra-gt4-heavy-duty',
    name: 'Drive Medical Cobra GT4 Heavy Duty',
    price: 6499,
    category: 'mobility-scooters',
    subcategory: 'heavy-duty-mobility-scooters',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Drive Medical Cobra GT4 Heavy Duty — heavy-duty all-terrain mobility scooters with 24V 55-75Ah AGM/Lithium-ion lithium power and 30-60 km range.',
    description: 'The Drive Medical Cobra GT4 Heavy Duty is part of ALLIED\'s authorized Drive Medical heavy-duty all-terrain mobility scooters range, featuring 500w-800w dual motor, 24v 55-75ah agm/lithium-ion, and a top speed of 10-12 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/911/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 55-75Ah AGM/Lithium-ion',
      range: '30-60 km per charge',
      topSpeed: '10-12 km/h',
      payloadCapacity: '150-180 kg max user weight',
      motorPower: '500W-800W Dual Motor',
      chargeTime: '8-10 Hours',
      dimensions: 'Varies by model',
      weight: '80-120 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Drive Medical genuine authorized stock, inspected prior to Australian dispatch',
      'Heavy-Duty All-Terrain Mobility Scooters class — 500w-800w dual motor',
      '24V 55-75Ah AGM/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-invacare-comet-ultra-heavy-duty',
    slug: 'allied-invacare-comet-ultra-heavy-duty',
    name: 'Invacare Comet Ultra Heavy Duty',
    price: 6899,
    category: 'mobility-scooters',
    subcategory: 'heavy-duty-mobility-scooters',
    featured: false,
    shortDescription: 'Invacare Comet Ultra Heavy Duty — heavy-duty all-terrain mobility scooters with 24V 55-75Ah AGM/Lithium-ion lithium power and 30-60 km range.',
    description: 'The Invacare Comet Ultra Heavy Duty is part of ALLIED\'s authorized Invacare heavy-duty all-terrain mobility scooters range, featuring 500w-800w dual motor, 24v 55-75ah agm/lithium-ion, and a top speed of 10-12 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/371/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 55-75Ah AGM/Lithium-ion',
      range: '30-60 km per charge',
      topSpeed: '10-12 km/h',
      payloadCapacity: '150-180 kg max user weight',
      motorPower: '500W-800W Dual Motor',
      chargeTime: '8-10 Hours',
      dimensions: 'Varies by model',
      weight: '80-120 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Invacare genuine authorized stock, inspected prior to Australian dispatch',
      'Heavy-Duty All-Terrain Mobility Scooters class — 500w-800w dual motor',
      '24V 55-75Ah AGM/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-afiscooter-c4-mid-size-all-terrain',
    slug: 'allied-afiscooter-c4-mid-size-all-terrain',
    name: 'Afiscooter C4 Mid-Size All-Terrain',
    price: 6299,
    category: 'mobility-scooters',
    subcategory: 'heavy-duty-mobility-scooters',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Afiscooter C4 Mid-Size All-Terrain — heavy-duty all-terrain mobility scooters with 24V 55-75Ah AGM/Lithium-ion lithium power and 30-60 km range.',
    description: 'The Afiscooter C4 Mid-Size All-Terrain is part of ALLIED\'s authorized Afiscooter heavy-duty all-terrain mobility scooters range, featuring 500w-800w dual motor, 24v 55-75ah agm/lithium-ion, and a top speed of 10-12 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/628/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 55-75Ah AGM/Lithium-ion',
      range: '30-60 km per charge',
      topSpeed: '10-12 km/h',
      payloadCapacity: '150-180 kg max user weight',
      motorPower: '500W-800W Dual Motor',
      chargeTime: '8-10 Hours',
      dimensions: 'Varies by model',
      weight: '80-120 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Afiscooter genuine authorized stock, inspected prior to Australian dispatch',
      'Heavy-Duty All-Terrain Mobility Scooters class — 500w-800w dual motor',
      '24V 55-75Ah AGM/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-merits-silverado-extreme-heavy-duty',
    slug: 'allied-merits-silverado-extreme-heavy-duty',
    name: 'Merits Silverado Extreme Heavy Duty',
    price: 7499,
    category: 'mobility-scooters',
    subcategory: 'heavy-duty-mobility-scooters',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Merits Silverado Extreme Heavy Duty — heavy-duty all-terrain mobility scooters with 24V 55-75Ah AGM/Lithium-ion lithium power and 30-60 km range.',
    description: 'The Merits Silverado Extreme Heavy Duty is part of ALLIED\'s authorized Merits heavy-duty all-terrain mobility scooters range, featuring 500w-800w dual motor, 24v 55-75ah agm/lithium-ion, and a top speed of 10-12 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/720/800/600'],
    specs: {
      voltage: '24V System',
      batteryType: '24V 55-75Ah AGM/Lithium-ion',
      range: '30-60 km per charge',
      topSpeed: '10-12 km/h',
      payloadCapacity: '150-180 kg max user weight',
      motorPower: '500W-800W Dual Motor',
      chargeTime: '8-10 Hours',
      dimensions: 'Varies by model',
      weight: '80-120 kg',
      warranty: '2 Years Frame & Motor'
    },
    features: [
      'Merits genuine authorized stock, inspected prior to Australian dispatch',
      'Heavy-Duty All-Terrain Mobility Scooters class — 500w-800w dual motor',
      '24V 55-75Ah AGM/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-cfmoto-cforce-110-electric-quad',
    slug: 'allied-cfmoto-cforce-110-electric-quad',
    name: 'CFMoto CForce 110 Electric Quad',
    price: 2499,
    category: 'electric-quad-bikes',
    subcategory: 'kids-electric-quads',
    featured: false,
    shortDescription: 'CFMoto CForce 110 Electric Quad — kids electric quad bikes with 24V-36V 12-20Ah SLA/Lithium-ion lithium power and 10-20 km range.',
    description: 'The CFMoto CForce 110 Electric Quad is part of ALLIED\'s authorized CFMoto kids electric quad bikes range, featuring 350w-800w motor, 24v-36v 12-20ah sla/lithium-ion, and a top speed of 8-25 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/709/800/600'],
    specs: {
      voltage: '24V/36V System',
      batteryType: '24V-36V 12-20Ah SLA/Lithium-ion',
      range: '10-20 km per charge',
      topSpeed: '8-25 km/h (adjustable speed limiter)',
      payloadCapacity: '55-75 kg max rider weight',
      motorPower: '350W-800W Motor',
      chargeTime: '6-8 Hours',
      dimensions: 'Varies by model',
      weight: '35-55 kg',
      warranty: '1 Year Frame & Motor'
    },
    features: [
      'CFMoto genuine authorized stock, inspected prior to Australian dispatch',
      'Kids Electric Quad Bikes class — 350w-800w motor',
      '24V-36V 12-20Ah SLA/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-razor-dirt-quad-500',
    slug: 'allied-razor-dirt-quad-500',
    name: 'Razor Dirt Quad 500',
    price: 799,
    category: 'electric-quad-bikes',
    subcategory: 'kids-electric-quads',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Razor Dirt Quad 500 — kids electric quad bikes with 24V-36V 12-20Ah SLA/Lithium-ion lithium power and 10-20 km range.',
    description: 'The Razor Dirt Quad 500 is part of ALLIED\'s authorized Razor kids electric quad bikes range, featuring 350w-800w motor, 24v-36v 12-20ah sla/lithium-ion, and a top speed of 8-25 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/908/800/600'],
    specs: {
      voltage: '24V/36V System',
      batteryType: '24V-36V 12-20Ah SLA/Lithium-ion',
      range: '10-20 km per charge',
      topSpeed: '8-25 km/h (adjustable speed limiter)',
      payloadCapacity: '55-75 kg max rider weight',
      motorPower: '350W-800W Motor',
      chargeTime: '6-8 Hours',
      dimensions: 'Varies by model',
      weight: '35-55 kg',
      warranty: '1 Year Frame & Motor'
    },
    features: [
      'Razor genuine authorized stock, inspected prior to Australian dispatch',
      'Kids Electric Quad Bikes class — 350w-800w motor',
      '24V-36V 12-20Ah SLA/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-venom-800w-kids-electric-quad',
    slug: 'allied-venom-800w-kids-electric-quad',
    name: 'Venom 800W Kids Electric Quad',
    price: 599,
    category: 'electric-quad-bikes',
    subcategory: 'kids-electric-quads',
    featured: false,
    shortDescription: 'Venom 800W Kids Electric Quad — kids electric quad bikes with 24V-36V 12-20Ah SLA/Lithium-ion lithium power and 10-20 km range.',
    description: 'The Venom 800W Kids Electric Quad is part of ALLIED\'s authorized Venom kids electric quad bikes range, featuring 350w-800w motor, 24v-36v 12-20ah sla/lithium-ion, and a top speed of 8-25 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/666/800/600'],
    specs: {
      voltage: '24V/36V System',
      batteryType: '24V-36V 12-20Ah SLA/Lithium-ion',
      range: '10-20 km per charge',
      topSpeed: '8-25 km/h (adjustable speed limiter)',
      payloadCapacity: '55-75 kg max rider weight',
      motorPower: '350W-800W Motor',
      chargeTime: '6-8 Hours',
      dimensions: 'Varies by model',
      weight: '35-55 kg',
      warranty: '1 Year Frame & Motor'
    },
    features: [
      'Venom genuine authorized stock, inspected prior to Australian dispatch',
      'Kids Electric Quad Bikes class — 350w-800w motor',
      '24V-36V 12-20Ah SLA/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-mototec-36v-kids-electric-quad',
    slug: 'allied-mototec-36v-kids-electric-quad',
    name: 'MotoTec 36V Kids Electric Quad',
    price: 449,
    category: 'electric-quad-bikes',
    subcategory: 'kids-electric-quads',
    featured: false,
    shortDescription: 'MotoTec 36V Kids Electric Quad — kids electric quad bikes with 24V-36V 12-20Ah SLA/Lithium-ion lithium power and 10-20 km range.',
    description: 'The MotoTec 36V Kids Electric Quad is part of ALLIED\'s authorized MotoTec kids electric quad bikes range, featuring 350w-800w motor, 24v-36v 12-20ah sla/lithium-ion, and a top speed of 8-25 km/h (adjustable speed limiter). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/682/800/600'],
    specs: {
      voltage: '24V/36V System',
      batteryType: '24V-36V 12-20Ah SLA/Lithium-ion',
      range: '10-20 km per charge',
      topSpeed: '8-25 km/h (adjustable speed limiter)',
      payloadCapacity: '55-75 kg max rider weight',
      motorPower: '350W-800W Motor',
      chargeTime: '6-8 Hours',
      dimensions: 'Varies by model',
      weight: '35-55 kg',
      warranty: '1 Year Frame & Motor'
    },
    features: [
      'MotoTec genuine authorized stock, inspected prior to Australian dispatch',
      'Kids Electric Quad Bikes class — 350w-800w motor',
      '24V-36V 12-20Ah SLA/Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-villain-sx10-electric-atv',
    slug: 'allied-segway-villain-sx10-electric-atv',
    name: 'Segway Villain SX10 Electric ATV',
    price: 12999,
    category: 'electric-quad-bikes',
    subcategory: 'adult-electric-quads',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Segway Ninebot Segway Villain SX10 Electric ATV — adult electric quad bikes & atvs with 72V-96V 40-60Ah lithium power and 40-80 km range.',
    description: 'The Segway Villain SX10 Electric ATV is part of ALLIED\'s authorized Segway Ninebot adult electric quad bikes & atvs range, featuring 10000w-60000w motor, 72v-96v 40-60ah lithium-ion, and a top speed of 60-120 km/h (off-road/private property use). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/206/800/600'],
    specs: {
      voltage: '72V/96V System',
      batteryType: '72V-96V 40-60Ah Lithium-ion',
      range: '40-80 km per charge',
      topSpeed: '60-120 km/h (off-road/private property use)',
      payloadCapacity: '150 kg max rider weight',
      motorPower: '10000W-60000W Motor',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '250-320 kg',
      warranty: '1-2 Years Frame & Motor'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Adult Electric Quad Bikes & ATVs class — 10000w-60000w motor',
      '72V-96V 40-60Ah Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-lift-efoil-2-electric-hydrofoil',
    slug: 'allied-lift-efoil-2-electric-hydrofoil',
    name: 'Lift eFoil 2 Electric Hydrofoil',
    price: 17999,
    category: 'electric-water-sports',
    subcategory: 'electric-surfboards',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Lift Foils Lift eFoil 2 Electric Hydrofoil — electric surfboards & hydrofoils with 52V-96V 2-3kWh Waterproof lithium power and 45-120 minutes riding time range.',
    description: 'The Lift eFoil 2 Electric Hydrofoil is part of ALLIED\'s authorized Lift Foils electric surfboards & hydrofoils range, featuring 6000w-15000w waterproof motor, 52v-96v 2-3kwh waterproof lithium-ion, and a top speed of 30-58 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/905/800/600'],
    specs: {
      voltage: '52V/96V System',
      batteryType: '52V-96V 2-3kWh Waterproof Lithium-ion',
      range: '45-120 minutes riding time',
      topSpeed: '30-58 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '6000W-15000W Waterproof Motor',
      chargeTime: '1.5-2.5 Hours',
      dimensions: 'Varies by model',
      weight: '18-28 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Lift Foils genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Surfboards & Hydrofoils class — 6000w-15000w waterproof motor',
      '52V-96V 2-3kWh Waterproof Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fliteboard-air-electric-hydrofoil',
    slug: 'allied-fliteboard-air-electric-hydrofoil',
    name: 'Fliteboard AIR Electric Hydrofoil',
    price: 14999,
    category: 'electric-water-sports',
    subcategory: 'electric-surfboards',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Fliteboard AIR Electric Hydrofoil — electric surfboards & hydrofoils with 52V-96V 2-3kWh Waterproof lithium power and 45-120 minutes riding time range.',
    description: 'The Fliteboard AIR Electric Hydrofoil is part of ALLIED\'s authorized Fliteboard electric surfboards & hydrofoils range, featuring 6000w-15000w waterproof motor, 52v-96v 2-3kwh waterproof lithium-ion, and a top speed of 30-58 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/514/800/600'],
    specs: {
      voltage: '52V/96V System',
      batteryType: '52V-96V 2-3kWh Waterproof Lithium-ion',
      range: '45-120 minutes riding time',
      topSpeed: '30-58 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '6000W-15000W Waterproof Motor',
      chargeTime: '1.5-2.5 Hours',
      dimensions: 'Varies by model',
      weight: '18-28 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Fliteboard genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Surfboards & Hydrofoils class — 6000w-15000w waterproof motor',
      '52V-96V 2-3kWh Waterproof Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-awake-ravik-s-electric-surfboard',
    slug: 'allied-awake-ravik-s-electric-surfboard',
    name: 'Awake RAVIK S Electric Surfboard',
    price: 18999,
    category: 'electric-water-sports',
    subcategory: 'electric-surfboards',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Awake RAVIK S Electric Surfboard — electric surfboards & hydrofoils with 52V-96V 2-3kWh Waterproof lithium power and 45-120 minutes riding time range.',
    description: 'The Awake RAVIK S Electric Surfboard is part of ALLIED\'s authorized Awake electric surfboards & hydrofoils range, featuring 6000w-15000w waterproof motor, 52v-96v 2-3kwh waterproof lithium-ion, and a top speed of 30-58 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/124/800/600'],
    specs: {
      voltage: '52V/96V System',
      batteryType: '52V-96V 2-3kWh Waterproof Lithium-ion',
      range: '45-120 minutes riding time',
      topSpeed: '30-58 km/h',
      payloadCapacity: '120 kg max rider weight',
      motorPower: '6000W-15000W Waterproof Motor',
      chargeTime: '1.5-2.5 Hours',
      dimensions: 'Varies by model',
      weight: '18-28 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Awake genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Surfboards & Hydrofoils class — 6000w-15000w waterproof motor',
      '52V-96V 2-3kWh Waterproof Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-radinn-freeride-electric-jetboard',
    slug: 'allied-radinn-freeride-electric-jetboard',
    name: 'Radinn Freeride Electric Jetboard',
    price: 12999,
    category: 'electric-water-sports',
    subcategory: 'electric-jetboards',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Radinn Freeride Electric Jetboard — electric jetboards with 96V 3-4kWh Waterproof lithium power and 30-60 minutes riding time range.',
    description: 'The Radinn Freeride Electric Jetboard is part of ALLIED\'s authorized Radinn electric jetboards range, featuring 12000w-20000w jet pump motor, 96v 3-4kwh waterproof lithium-ion, and a top speed of 45-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/519/800/600'],
    specs: {
      voltage: '96V System',
      batteryType: '96V 3-4kWh Waterproof Lithium-ion',
      range: '30-60 minutes riding time',
      topSpeed: '45-70 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '12000W-20000W Jet Pump Motor',
      chargeTime: '1.5-2 Hours',
      dimensions: 'Varies by model',
      weight: '25-35 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'Radinn genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Jetboards class — 12000w-20000w jet pump motor',
      '96V 3-4kWh Waterproof Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-yujet-surfer-electric-bodyboard',
    slug: 'allied-yujet-surfer-electric-bodyboard',
    name: 'YuJet Surfer Electric Bodyboard',
    price: 6999,
    category: 'electric-water-sports',
    subcategory: 'electric-jetboards',
    badge: 'New Release',
    featured: false,
    shortDescription: 'YuJet Surfer Electric Bodyboard — electric jetboards with 96V 3-4kWh Waterproof lithium power and 30-60 minutes riding time range.',
    description: 'The YuJet Surfer Electric Bodyboard is part of ALLIED\'s authorized YuJet electric jetboards range, featuring 12000w-20000w jet pump motor, 96v 3-4kwh waterproof lithium-ion, and a top speed of 45-70 km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/918/800/600'],
    specs: {
      voltage: '96V System',
      batteryType: '96V 3-4kWh Waterproof Lithium-ion',
      range: '30-60 minutes riding time',
      topSpeed: '45-70 km/h',
      payloadCapacity: '110 kg max rider weight',
      motorPower: '12000W-20000W Jet Pump Motor',
      chargeTime: '1.5-2 Hours',
      dimensions: 'Varies by model',
      weight: '25-35 kg',
      warranty: '1-2 Years Board & Motor'
    },
    features: [
      'YuJet genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Jetboards class — 12000w-20000w jet pump motor',
      '96V 3-4kWh Waterproof Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-taiga-orca-carbon-electric-jet-ski',
    slug: 'allied-taiga-orca-carbon-electric-jet-ski',
    name: 'Taiga Orca Carbon Electric Jet Ski',
    price: 24999,
    category: 'electric-water-sports',
    subcategory: 'electric-jetskis',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Taiga Orca Carbon Electric Jet Ski — electric jet skis & personal watercraft with 120V+ 12-18kWh lithium power and 1.5-2.5 Hours mixed riding range.',
    description: 'The Taiga Orca Carbon Electric Jet Ski is part of ALLIED\'s authorized Taiga electric jet skis & personal watercraft range, featuring 80000w-180000w twin motor, 120v+ 12-18kwh lithium-ion, and a top speed of 80-100+ km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/322/800/600'],
    specs: {
      voltage: '120V+ System',
      batteryType: '120V+ 12-18kWh Lithium-ion',
      range: '1.5-2.5 Hours mixed riding',
      topSpeed: '80-100+ km/h',
      payloadCapacity: '150 kg max rider weight',
      motorPower: '80000W-180000W Twin Motor',
      chargeTime: '2-4 Hours (DC Fast Charge)',
      dimensions: 'Varies by model',
      weight: '280-350 kg',
      warranty: '2 Years Hull & Drivetrain'
    },
    features: [
      'Taiga genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Jet Skis & Personal Watercraft class — 80000w-180000w twin motor',
      '120V+ 12-18kWh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-sea-doo-rise-electric-jet-ski',
    slug: 'allied-sea-doo-rise-electric-jet-ski',
    name: 'Sea-Doo Rise Electric Jet Ski',
    price: 19999,
    category: 'electric-water-sports',
    subcategory: 'electric-jetskis',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Sea-Doo Rise Electric Jet Ski — electric jet skis & personal watercraft with 120V+ 12-18kWh lithium power and 1.5-2.5 Hours mixed riding range.',
    description: 'The Sea-Doo Rise Electric Jet Ski is part of ALLIED\'s authorized Sea-Doo electric jet skis & personal watercraft range, featuring 80000w-180000w twin motor, 120v+ 12-18kwh lithium-ion, and a top speed of 80-100+ km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/937/800/600'],
    specs: {
      voltage: '120V+ System',
      batteryType: '120V+ 12-18kWh Lithium-ion',
      range: '1.5-2.5 Hours mixed riding',
      topSpeed: '80-100+ km/h',
      payloadCapacity: '150 kg max rider weight',
      motorPower: '80000W-180000W Twin Motor',
      chargeTime: '2-4 Hours (DC Fast Charge)',
      dimensions: 'Varies by model',
      weight: '280-350 kg',
      warranty: '2 Years Hull & Drivetrain'
    },
    features: [
      'Sea-Doo genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Jet Skis & Personal Watercraft class — 80000w-180000w twin motor',
      '120V+ 12-18kWh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-narke-gt45-electric-jet-ski',
    slug: 'allied-narke-gt45-electric-jet-ski',
    name: 'Narke GT45 Electric Jet Ski',
    price: 39999,
    category: 'electric-water-sports',
    subcategory: 'electric-jetskis',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Narke GT45 Electric Jet Ski — electric jet skis & personal watercraft with 120V+ 12-18kWh lithium power and 1.5-2.5 Hours mixed riding range.',
    description: 'The Narke GT45 Electric Jet Ski is part of ALLIED\'s authorized Narke electric jet skis & personal watercraft range, featuring 80000w-180000w twin motor, 120v+ 12-18kwh lithium-ion, and a top speed of 80-100+ km/h. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/359/800/600'],
    specs: {
      voltage: '120V+ System',
      batteryType: '120V+ 12-18kWh Lithium-ion',
      range: '1.5-2.5 Hours mixed riding',
      topSpeed: '80-100+ km/h',
      payloadCapacity: '150 kg max rider weight',
      motorPower: '80000W-180000W Twin Motor',
      chargeTime: '2-4 Hours (DC Fast Charge)',
      dimensions: 'Varies by model',
      weight: '280-350 kg',
      warranty: '2 Years Hull & Drivetrain'
    },
    features: [
      'Narke genuine authorized stock, inspected prior to Australian dispatch',
      'Electric Jet Skis & Personal Watercraft class — 80000w-180000w twin motor',
      '120V+ 12-18kWh Lithium-ion',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bosch-powertube-500-vertical-battery',
    slug: 'allied-bosch-powertube-500-vertical-battery',
    name: 'Bosch PowerTube 500 Vertical Battery',
    price: 1149,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Bosch PowerTube 500 Vertical Battery — e-bike batteries. Trek Allant+ 8 ST and 10 more.',
    description: 'The Bosch PowerTube 500 Vertical Battery is a genuine ALLIED-stocked e-bike batteries component. Trek Allant+ 8 ST and 10 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/125/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Bosch genuine authorized stock, inspected prior to Australian dispatch',
      'Trek Allant+ 8 ST and 10 more',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bosch-powertube-500-horizontal-battery-bbp3750',
    slug: 'allied-bosch-powertube-500-horizontal-battery-bbp3750',
    name: 'Bosch PowerTube 500 Horizontal Battery (BBP3750)',
    price: 1299,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Bosch PowerTube 500 Horizontal Battery (BBP3750) — e-bike batteries. Trek Allant+ 8 ST and 10 more.',
    description: 'The Bosch PowerTube 500 Horizontal Battery (BBP3750) is a genuine ALLIED-stocked e-bike batteries component. Trek Allant+ 8 ST and 10 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/182/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Bosch genuine authorized stock, inspected prior to Australian dispatch',
      'Trek Allant+ 8 ST and 10 more',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bosch-powertube-625-horizontal-battery',
    slug: 'allied-bosch-powertube-625-horizontal-battery',
    name: 'Bosch PowerTube 625 Horizontal Battery',
    price: 1399,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Bosch PowerTube 625 Horizontal Battery — e-bike batteries. Trek Allant+ 8 ST and 10 more.',
    description: 'The Bosch PowerTube 625 Horizontal Battery is a genuine ALLIED-stocked e-bike batteries component. Trek Allant+ 8 ST and 10 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/495/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Bosch genuine authorized stock, inspected prior to Australian dispatch',
      'Trek Allant+ 8 ST and 10 more',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-shimano-steps-bt-e8035-integrated-down-tube-battery-504wh',
    slug: 'allied-shimano-steps-bt-e8035-integrated-down-tube-battery-504wh',
    name: 'Shimano STEPS BT-E8035 Integrated Down Tube Battery 504Wh',
    price: 860,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Shimano STEPS BT-E8035 Integrated Down Tube Battery 504Wh — e-bike batteries. Merida eBig.Nine 400 and 2 more.',
    description: 'The Shimano STEPS BT-E8035 Integrated Down Tube Battery 504Wh is a genuine ALLIED-stocked e-bike batteries component. Merida eBig.Nine 400 and 2 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/722/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Shimano genuine authorized stock, inspected prior to Australian dispatch',
      'Merida eBig.Nine 400 and 2 more',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-shimano-steps-bt-e8010-down-tube-battery-504wh',
    slug: 'allied-shimano-steps-bt-e8010-down-tube-battery-504wh',
    name: 'Shimano STEPS BT-E8010 Down Tube Battery 504Wh',
    price: 750,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Shimano STEPS BT-E8010 Down Tube Battery 504Wh — e-bike batteries. Merida eSpresso 300 SE and 2 more.',
    description: 'The Shimano STEPS BT-E8010 Down Tube Battery 504Wh is a genuine ALLIED-stocked e-bike batteries component. Merida eSpresso 300 SE and 2 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/599/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Shimano genuine authorized stock, inspected prior to Australian dispatch',
      'Merida eSpresso 300 SE and 2 more',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-specialized-u2-710-battery-turbo-tero-vado-and-como-gen-2',
    slug: 'allied-specialized-u2-710-battery-turbo-tero-vado-and-como-gen-2',
    name: 'Specialized U2-710 Battery (Turbo Tero, Vado and Como Gen 2)',
    price: 1716,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Specialized U2-710 Battery (Turbo Tero, Vado and Como Gen 2) — e-bike batteries. Specialized Turbo Tero 3.0 and 3 more.',
    description: 'The Specialized U2-710 Battery (Turbo Tero, Vado and Como Gen 2) is a genuine ALLIED-stocked e-bike batteries component. Specialized Turbo Tero 3.0 and 3 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/340/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Specialized genuine authorized stock, inspected prior to Australian dispatch',
      'Specialized Turbo Tero 3.0 and 3 more',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-lectric-xpedition-2-0-spare-battery',
    slug: 'allied-lectric-xpedition-2-0-spare-battery',
    name: 'Lectric XPedition 2.0 Spare Battery',
    price: 608,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Lectric XPedition 2.0 Spare Battery — e-bike batteries. Lectric XPedition Dual Battery.',
    description: 'The Lectric XPedition 2.0 Spare Battery is a genuine ALLIED-stocked e-bike batteries component. Lectric XPedition Dual Battery. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/776/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Lectric genuine authorized stock, inspected prior to Australian dispatch',
      'Lectric XPedition Dual Battery',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-aventon-level-replacement-battery-48v-14ah',
    slug: 'allied-aventon-level-replacement-battery-48v-14ah',
    name: 'Aventon Level Replacement Battery 48V 14Ah',
    price: 715,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Aventon Level Replacement Battery 48V 14Ah — e-bike batteries. Aventon Level 3 Step-Through and 1 more.',
    description: 'The Aventon Level Replacement Battery 48V 14Ah is a genuine ALLIED-stocked e-bike batteries component. Aventon Level 3 Step-Through and 1 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/494/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Aventon genuine authorized stock, inspected prior to Australian dispatch',
      'Aventon Level 3 Step-Through and 1 more',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fiido-c11-and-c11-pro-replacement-battery',
    slug: 'allied-fiido-c11-and-c11-pro-replacement-battery',
    name: 'Fiido C11 and C11 Pro Replacement Battery',
    price: 382,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Fiido C11 and C11 Pro Replacement Battery — e-bike batteries. Fiido C11 Step-Through and 1 more.',
    description: 'The Fiido C11 and C11 Pro Replacement Battery is a genuine ALLIED-stocked e-bike batteries component. Fiido C11 Step-Through and 1 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/921/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Fiido genuine authorized stock, inspected prior to Australian dispatch',
      'Fiido C11 Step-Through and 1 more',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-brompton-electric-replacement-battery-36v-8-55ah-original',
    slug: 'allied-brompton-electric-replacement-battery-36v-8-55ah-original',
    name: 'Brompton Electric Replacement Battery 36V 8.55Ah (Original)',
    price: 1143,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Brompton Electric Replacement Battery 36V 8.55Ah (Original) — e-bike batteries. Brompton Electric C Line 6-Speed.',
    description: 'The Brompton Electric Replacement Battery 36V 8.55Ah (Original) is a genuine ALLIED-stocked e-bike batteries component. Brompton Electric C Line 6-Speed. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/560/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Brompton genuine authorized stock, inspected prior to Australian dispatch',
      'Brompton Electric C Line 6-Speed',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-eunorau-universal-48v-15ah-secondary-battery',
    slug: 'allied-eunorau-universal-48v-15ah-secondary-battery',
    name: 'Eunorau Universal 48V 15Ah Secondary Battery',
    price: 699,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Eunorau Universal 48V 15Ah Secondary Battery — e-bike batteries. Eunorau G30 Max Cargo and 1 more.',
    description: 'The Eunorau Universal 48V 15Ah Secondary Battery is a genuine ALLIED-stocked e-bike batteries component. Eunorau G30 Max Cargo and 1 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/918/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Eunorau genuine authorized stock, inspected prior to Australian dispatch',
      'Eunorau G30 Max Cargo and 1 more',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-mokwheel-basalt-series-battery-48v-19-6ah',
    slug: 'allied-mokwheel-basalt-series-battery-48v-19-6ah',
    name: 'Mokwheel Basalt Series Battery 48V 19.6Ah',
    price: 858,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Mokwheel Basalt Series Battery 48V 19.6Ah — e-bike batteries. Mokwheel Basalt Step-Thru and 1 more.',
    description: 'The Mokwheel Basalt Series Battery 48V 19.6Ah is a genuine ALLIED-stocked e-bike batteries component. Mokwheel Basalt Step-Thru and 1 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/963/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Mokwheel genuine authorized stock, inspected prior to Australian dispatch',
      'Mokwheel Basalt Step-Thru and 1 more',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dirodi-rover-g5-6-battery-52v-20ah',
    slug: 'allied-dirodi-rover-g5-6-battery-52v-20ah',
    name: 'DiroDi Rover G5-6 Battery 52V 20Ah',
    price: 890,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'DiroDi Rover G5-6 Battery 52V 20Ah — e-bike batteries. DiroDi Rover Gen 6 1000W Dual and 1 more.',
    description: 'The DiroDi Rover G5-6 Battery 52V 20Ah is a genuine ALLIED-stocked e-bike batteries component. DiroDi Rover Gen 6 1000W Dual and 1 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/986/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'DiroDi genuine authorized stock, inspected prior to Australian dispatch',
      'DiroDi Rover Gen 6 1000W Dual and 1 more',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dirodi-rover-pro-dual-battery-52v-20ah',
    slug: 'allied-dirodi-rover-pro-dual-battery-52v-20ah',
    name: 'DiroDi Rover Pro/Dual Battery 52V 20Ah',
    price: 950,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'DiroDi Rover Pro/Dual Battery 52V 20Ah — e-bike batteries. DiroDi Rover Gen 6 1000W Dual.',
    description: 'The DiroDi Rover Pro/Dual Battery 52V 20Ah is a genuine ALLIED-stocked e-bike batteries component. DiroDi Rover Gen 6 1000W Dual. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/874/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'DiroDi genuine authorized stock, inspected prior to Australian dispatch',
      'DiroDi Rover Gen 6 1000W Dual',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dirodi-rover-gen-1-4-battery-48v-17-4ah',
    slug: 'allied-dirodi-rover-gen-1-4-battery-48v-17-4ah',
    name: 'DiroDi Rover Gen 1-4 Battery 48V 17.4Ah',
    price: 790,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'DiroDi Rover Gen 1-4 Battery 48V 17.4Ah — e-bike batteries. DiroDi Rover Plus 750W and 1 more.',
    description: 'The DiroDi Rover Gen 1-4 Battery 48V 17.4Ah is a genuine ALLIED-stocked e-bike batteries component. DiroDi Rover Plus 750W and 1 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/597/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'DiroDi genuine authorized stock, inspected prior to Australian dispatch',
      'DiroDi Rover Plus 750W and 1 more',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dirodi-rover-gen-1-4-battery-48v-15-6ah',
    slug: 'allied-dirodi-rover-gen-1-4-battery-48v-15-6ah',
    name: 'DiroDi Rover Gen 1-4 Battery 48V 15.6Ah',
    price: 730,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'DiroDi Rover Gen 1-4 Battery 48V 15.6Ah — e-bike batteries. DiroDi Rover Plus Low-Step 48V and 1 more.',
    description: 'The DiroDi Rover Gen 1-4 Battery 48V 15.6Ah is a genuine ALLIED-stocked e-bike batteries component. DiroDi Rover Plus Low-Step 48V and 1 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/660/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'DiroDi genuine authorized stock, inspected prior to Australian dispatch',
      'DiroDi Rover Plus Low-Step 48V and 1 more',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-rad-power-safe-shield-semi-integrated-battery-14ah',
    slug: 'allied-rad-power-safe-shield-semi-integrated-battery-14ah',
    name: 'Rad Power Safe Shield Semi-Integrated Battery 14Ah',
    price: 714,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Rad Power Bikes Rad Power Safe Shield Semi-Integrated Battery 14Ah — e-bike batteries. Rad Power RadWagon 4 Pro.',
    description: 'The Rad Power Safe Shield Semi-Integrated Battery 14Ah is a genuine ALLIED-stocked e-bike batteries component. Rad Power RadWagon 4 Pro. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/204/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Rad Power Bikes genuine authorized stock, inspected prior to Australian dispatch',
      'Rad Power RadWagon 4 Pro',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-pedego-long-range-cargo-battery-48v-20ah',
    slug: 'allied-pedego-long-range-cargo-battery-48v-20ah',
    name: 'Pedego Long Range Cargo Battery 48V 20Ah',
    price: 1572,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Pedego Long Range Cargo Battery 48V 20Ah — e-bike batteries. Fits by size: see product page.',
    description: 'The Pedego Long Range Cargo Battery 48V 20Ah is a genuine ALLIED-stocked e-bike batteries component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/318/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Pedego genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bosch-powertube-750-horizontal-battery-bbp3770',
    slug: 'allied-bosch-powertube-750-horizontal-battery-bbp3770',
    name: 'Bosch PowerTube 750 Horizontal Battery (BBP3770)',
    price: 1599,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Bosch PowerTube 750 Horizontal Battery (BBP3770) — e-bike batteries. Riese & Müller Load 4 75 and 2 more.',
    description: 'The Bosch PowerTube 750 Horizontal Battery (BBP3770) is a genuine ALLIED-stocked e-bike batteries component. Riese & Müller Load 4 75 and 2 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/911/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Bosch genuine authorized stock, inspected prior to Australian dispatch',
      'Riese & Müller Load 4 75 and 2 more',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-giant-energypak-500-top-load-battery',
    slug: 'allied-giant-energypak-500-top-load-battery',
    name: 'Giant EnergyPak 500 Top Load Battery',
    price: 1199,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Giant EnergyPak 500 Top Load Battery — e-bike batteries. Fits by size: see product page.',
    description: 'The Giant EnergyPak 500 Top Load Battery is a genuine ALLIED-stocked e-bike batteries component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/683/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Giant genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-engwe-ep-2-pro-battery-13ah',
    slug: 'allied-engwe-ep-2-pro-battery-13ah',
    name: 'Engwe EP-2 Pro Battery 13Ah',
    price: 487,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-batteries',
    featured: false,
    shortDescription: 'Engwe EP-2 Pro Battery 13Ah — e-bike batteries. Engwe EP-2 Pro Fat Folder.',
    description: 'The Engwe EP-2 Pro Battery 13Ah is a genuine ALLIED-stocked e-bike batteries component. Engwe EP-2 Pro Fat Folder. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/429/800/600'],
    specs: {
      voltage: '36V/48V/52V Pack',
      batteryType: 'Lithium-ion Cell (Panasonic/Samsung/LG)',
      range: 'N/A - battery component',
      topSpeed: 'N/A - battery component',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '4-6 Hours',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '1-2 Years Battery Cells & BMS'
    },
    features: [
      'Engwe genuine authorized stock, inspected prior to Australian dispatch',
      'Engwe EP-2 Pro Fat Folder',
      'E-Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bosch-fast-charger-6a-for-system-2-batteries',
    slug: 'allied-bosch-fast-charger-6a-for-system-2-batteries',
    name: 'Bosch Fast Charger 6A for System 2 Batteries',
    price: 249,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-chargers',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Bosch Fast Charger 6A for System 2 Batteries — e-bike chargers. Trek Allant+ 5 and 22 more.',
    description: 'The Bosch Fast Charger 6A for System 2 Batteries is a genuine ALLIED-stocked e-bike chargers component. Trek Allant+ 5 and 22 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/104/800/600'],
    specs: {
      voltage: '36V/42V/48V Output',
      batteryType: 'N/A - charger component',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - charger component',
      chargeTime: 'Delivers 2A-8A charge current',
      dimensions: 'Varies by model',
      weight: '0.5-1.2 kg',
      warranty: '1-2 Years Charger & Cable'
    },
    features: [
      'Bosch genuine authorized stock, inspected prior to Australian dispatch',
      'Trek Allant+ 5 and 22 more',
      'E-Bike Chargers compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-shimano-steps-4a-fast-battery-charger',
    slug: 'allied-shimano-steps-4a-fast-battery-charger',
    name: 'Shimano STEPS 4A Fast Battery Charger',
    price: 199,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-chargers',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Shimano STEPS 4A Fast Battery Charger — e-bike chargers. Merida eSpresso City 300 EQ and 6 more.',
    description: 'The Shimano STEPS 4A Fast Battery Charger is a genuine ALLIED-stocked e-bike chargers component. Merida eSpresso City 300 EQ and 6 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/888/800/600'],
    specs: {
      voltage: '36V/42V/48V Output',
      batteryType: 'N/A - charger component',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - charger component',
      chargeTime: 'Delivers 2A-8A charge current',
      dimensions: 'Varies by model',
      weight: '0.5-1.2 kg',
      warranty: '1-2 Years Charger & Cable'
    },
    features: [
      'Shimano genuine authorized stock, inspected prior to Australian dispatch',
      'Merida eSpresso City 300 EQ and 6 more',
      'E-Bike Chargers compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-shimano-steps-ec-e6002-battery-charger',
    slug: 'allied-shimano-steps-ec-e6002-battery-charger',
    name: 'Shimano STEPS EC-E6002 Battery Charger',
    price: 99,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-chargers',
    featured: false,
    shortDescription: 'Shimano STEPS EC-E6002 Battery Charger — e-bike chargers. Merida eBig.Nine 400 and 6 more.',
    description: 'The Shimano STEPS EC-E6002 Battery Charger is a genuine ALLIED-stocked e-bike chargers component. Merida eBig.Nine 400 and 6 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/734/800/600'],
    specs: {
      voltage: '36V/42V/48V Output',
      batteryType: 'N/A - charger component',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - charger component',
      chargeTime: 'Delivers 2A-8A charge current',
      dimensions: 'Varies by model',
      weight: '0.5-1.2 kg',
      warranty: '1-2 Years Charger & Cable'
    },
    features: [
      'Shimano genuine authorized stock, inspected prior to Australian dispatch',
      'Merida eBig.Nine 400 and 6 more',
      'E-Bike Chargers compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bosch-4a-standard-charger-smart-system-bpc3400',
    slug: 'allied-bosch-4a-standard-charger-smart-system-bpc3400',
    name: 'Bosch 4A Standard Charger Smart System (BPC3400)',
    price: 199,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-chargers',
    featured: false,
    shortDescription: 'Bosch 4A Standard Charger Smart System (BPC3400) — e-bike chargers. Trek Allant+ 5 and 22 more.',
    description: 'The Bosch 4A Standard Charger Smart System (BPC3400) is a genuine ALLIED-stocked e-bike chargers component. Trek Allant+ 5 and 22 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/858/800/600'],
    specs: {
      voltage: '36V/42V/48V Output',
      batteryType: 'N/A - charger component',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - charger component',
      chargeTime: 'Delivers 2A-8A charge current',
      dimensions: 'Varies by model',
      weight: '0.5-1.2 kg',
      warranty: '1-2 Years Charger & Cable'
    },
    features: [
      'Bosch genuine authorized stock, inspected prior to Australian dispatch',
      'Trek Allant+ 5 and 22 more',
      'E-Bike Chargers compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-giant-energypak-smart-charger',
    slug: 'allied-giant-energypak-smart-charger',
    name: 'Giant EnergyPak Smart Charger',
    price: 284,
    category: 'batteries-parts-kits',
    subcategory: 'ebike-chargers',
    featured: false,
    shortDescription: 'Giant EnergyPak Smart Charger — e-bike chargers. Giant Explore E+ 4 and 3 more.',
    description: 'The Giant EnergyPak Smart Charger is a genuine ALLIED-stocked e-bike chargers component. Giant Explore E+ 4 and 3 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/741/800/600'],
    specs: {
      voltage: '36V/42V/48V Output',
      batteryType: 'N/A - charger component',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - charger component',
      chargeTime: 'Delivers 2A-8A charge current',
      dimensions: 'Varies by model',
      weight: '0.5-1.2 kg',
      warranty: '1-2 Years Charger & Cable'
    },
    features: [
      'Giant genuine authorized stock, inspected prior to Australian dispatch',
      'Giant Explore E+ 4 and 3 more',
      'E-Bike Chargers compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-dualtron-thunder-60v-35ah-replacement-battery',
    slug: 'allied-dualtron-thunder-60v-35ah-replacement-battery',
    name: 'Dualtron Thunder 60V 35Ah Replacement Battery',
    price: 4099,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-batteries',
    featured: false,
    shortDescription: 'Dualtron Thunder 60V 35Ah Replacement Battery — scooter, board & mobility batteries. Dualtron Thunder 60V 35Ah.',
    description: 'The Dualtron Thunder 60V 35Ah Replacement Battery is a genuine ALLIED-stocked scooter, board & mobility batteries component. Dualtron Thunder 60V 35Ah. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/805/800/600'],
    specs: {
      voltage: '12V/36V/60V Pack',
      batteryType: 'Lithium-ion / AGM Cell',
      range: 'N/A - battery component',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '1.5-12 kg',
      warranty: '1 Year Battery Cells & BMS'
    },
    features: [
      'Dualtron genuine authorized stock, inspected prior to Australian dispatch',
      'Dualtron Thunder 60V 35Ah',
      'Scooter, Board & Mobility Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-evolve-standard-electric-skateboard-battery',
    slug: 'allied-evolve-standard-electric-skateboard-battery',
    name: 'Evolve Standard Electric Skateboard Battery',
    price: 763,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-batteries',
    featured: false,
    shortDescription: 'Evolve Skateboards Evolve Standard Electric Skateboard Battery — scooter, board & mobility batteries. Evolve Bamboo GTR Series 2 Street and 6 more.',
    description: 'The Evolve Standard Electric Skateboard Battery is a genuine ALLIED-stocked scooter, board & mobility batteries component. Evolve Bamboo GTR Series 2 Street and 6 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/292/800/600'],
    specs: {
      voltage: '12V/36V/60V Pack',
      batteryType: 'Lithium-ion / AGM Cell',
      range: 'N/A - battery component',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '1.5-12 kg',
      warranty: '1 Year Battery Cells & BMS'
    },
    features: [
      'Evolve Skateboards genuine authorized stock, inspected prior to Australian dispatch',
      'Evolve Bamboo GTR Series 2 Street and 6 more',
      'Scooter, Board & Mobility Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-hoverboard-36v-4-4ah-10s2p-replacement-battery',
    slug: 'allied-hoverboard-36v-4-4ah-10s2p-replacement-battery',
    name: 'Hoverboard 36V 4.4Ah 10S2P Replacement Battery',
    price: 109,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-batteries',
    featured: false,
    shortDescription: 'Universal Hoverboard 36V 4.4Ah 10S2P Replacement Battery — scooter, board & mobility batteries. Fits by size: see product page.',
    description: 'The Hoverboard 36V 4.4Ah 10S2P Replacement Battery is a genuine ALLIED-stocked scooter, board & mobility batteries component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/278/800/600'],
    specs: {
      voltage: '12V/36V/60V Pack',
      batteryType: 'Lithium-ion / AGM Cell',
      range: 'N/A - battery component',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '1.5-12 kg',
      warranty: '1 Year Battery Cells & BMS'
    },
    features: [
      'Universal genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Scooter, Board & Mobility Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-mobility-scooter-12v-35ah-agm-replacement-battery',
    slug: 'allied-mobility-scooter-12v-35ah-agm-replacement-battery',
    name: 'Mobility Scooter 12V 35Ah AGM Replacement Battery',
    price: 164,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-batteries',
    featured: false,
    shortDescription: 'Universal Mobility Scooter 12V 35Ah AGM Replacement Battery — scooter, board & mobility batteries. Fits by size: see product page.',
    description: 'The Mobility Scooter 12V 35Ah AGM Replacement Battery is a genuine ALLIED-stocked scooter, board & mobility batteries component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/284/800/600'],
    specs: {
      voltage: '12V/36V/60V Pack',
      batteryType: 'Lithium-ion / AGM Cell',
      range: 'N/A - battery component',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '3-6 Hours',
      dimensions: 'Varies by model',
      weight: '1.5-12 kg',
      warranty: '1 Year Battery Cells & BMS'
    },
    features: [
      'Universal genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Scooter, Board & Mobility Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-segway-ninebot-fast-charger-for-max-scooters',
    slug: 'allied-segway-ninebot-fast-charger-for-max-scooters',
    name: 'Segway-Ninebot Fast Charger for MAX Scooters',
    price: 150,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-skate-chargers',
    featured: false,
    shortDescription: 'Segway Ninebot Segway-Ninebot Fast Charger for MAX Scooters — scooter, skate & kids chargers. Segway Ninebot Max G2 Pro.',
    description: 'The Segway-Ninebot Fast Charger for MAX Scooters is a genuine ALLIED-stocked scooter, skate & kids chargers component. Segway Ninebot Max G2 Pro. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/209/800/600'],
    specs: {
      voltage: '36V-100.8V Output',
      batteryType: 'N/A - charger component',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - charger component',
      chargeTime: 'Delivers 1.7A-8A charge current',
      dimensions: 'Varies by model',
      weight: '0.3-1 kg',
      warranty: '1 Year Charger & Cable'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Segway Ninebot Max G2 Pro',
      'Scooter, Skate & Kids Chargers compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-original-ninebot-by-segway-scooter-charger-42v-1-7a',
    slug: 'allied-original-ninebot-by-segway-scooter-charger-42v-1-7a',
    name: 'Original Ninebot by Segway Scooter Charger 42V 1.7A',
    price: 100,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-skate-chargers',
    featured: false,
    shortDescription: 'Segway Ninebot Original Ninebot by Segway Scooter Charger 42V 1.7A — scooter, skate & kids chargers. Xiaomi Mi Electric Scooter 1S.',
    description: 'The Original Ninebot by Segway Scooter Charger 42V 1.7A is a genuine ALLIED-stocked scooter, skate & kids chargers component. Xiaomi Mi Electric Scooter 1S. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/897/800/600'],
    specs: {
      voltage: '36V-100.8V Output',
      batteryType: 'N/A - charger component',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - charger component',
      chargeTime: 'Delivers 1.7A-8A charge current',
      dimensions: 'Varies by model',
      weight: '0.3-1 kg',
      warranty: '1 Year Charger & Cable'
    },
    features: [
      'Segway Ninebot genuine authorized stock, inspected prior to Australian dispatch',
      'Xiaomi Mi Electric Scooter 1S',
      'Scooter, Skate & Kids Chargers compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-multi-voltage-charger-for-kaabo-dualtron-apollo-and-vsett-scooters',
    slug: 'allied-multi-voltage-charger-for-kaabo-dualtron-apollo-and-vsett-scooters',
    name: 'Multi-Voltage Charger for Kaabo, Dualtron, Apollo and Vsett Scooters',
    price: 99,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-skate-chargers',
    featured: false,
    shortDescription: 'Universal Multi-Voltage Charger for Kaabo, Dualtron, Apollo and Vsett Scooters — scooter, skate & kids chargers. Dualtron Thunder 60V 35Ah and 20 more.',
    description: 'The Multi-Voltage Charger for Kaabo, Dualtron, Apollo and Vsett Scooters is a genuine ALLIED-stocked scooter, skate & kids chargers component. Dualtron Thunder 60V 35Ah and 20 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/377/800/600'],
    specs: {
      voltage: '36V-100.8V Output',
      batteryType: 'N/A - charger component',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - charger component',
      chargeTime: 'Delivers 1.7A-8A charge current',
      dimensions: 'Varies by model',
      weight: '0.3-1 kg',
      warranty: '1 Year Charger & Cable'
    },
    features: [
      'Universal genuine authorized stock, inspected prior to Australian dispatch',
      'Dualtron Thunder 60V 35Ah and 20 more',
      'Scooter, Skate & Kids Chargers compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-evolve-5a-charger-for-hadean-diablo-and-renegade',
    slug: 'allied-evolve-5a-charger-for-hadean-diablo-and-renegade',
    name: 'Evolve 5A Charger for Hadean, Diablo and Renegade',
    price: 171,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-skate-chargers',
    featured: false,
    shortDescription: 'Evolve Skateboards Evolve 5A Charger for Hadean, Diablo and Renegade — scooter, skate & kids chargers. Evolve Hadean Carbon All-Terrain and 1 more.',
    description: 'The Evolve 5A Charger for Hadean, Diablo and Renegade is a genuine ALLIED-stocked scooter, skate & kids chargers component. Evolve Hadean Carbon All-Terrain and 1 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/684/800/600'],
    specs: {
      voltage: '36V-100.8V Output',
      batteryType: 'N/A - charger component',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - charger component',
      chargeTime: 'Delivers 1.7A-8A charge current',
      dimensions: 'Varies by model',
      weight: '0.3-1 kg',
      warranty: '1 Year Charger & Cable'
    },
    features: [
      'Evolve Skateboards genuine authorized stock, inspected prior to Australian dispatch',
      'Evolve Hadean Carbon All-Terrain and 1 more',
      'Scooter, Skate & Kids Chargers compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-onewheel-pint-car-charger',
    slug: 'allied-onewheel-pint-car-charger',
    name: 'Onewheel Pint Car Charger',
    price: 150,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-skate-chargers',
    featured: false,
    shortDescription: 'Onewheel Pint Car Charger — scooter, skate & kids chargers. Onewheel Pint.',
    description: 'The Onewheel Pint Car Charger is a genuine ALLIED-stocked scooter, skate & kids chargers component. Onewheel Pint. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/834/800/600'],
    specs: {
      voltage: '36V-100.8V Output',
      batteryType: 'N/A - charger component',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - charger component',
      chargeTime: 'Delivers 1.7A-8A charge current',
      dimensions: 'Varies by model',
      weight: '0.3-1 kg',
      warranty: '1 Year Charger & Cable'
    },
    features: [
      'Onewheel genuine authorized stock, inspected prior to Australian dispatch',
      'Onewheel Pint',
      'Scooter, Skate & Kids Chargers compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-stacyc-18v-smart-battery-charger',
    slug: 'allied-stacyc-18v-smart-battery-charger',
    name: 'Stacyc 18V Smart Battery Charger',
    price: 219,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-skate-chargers',
    featured: false,
    shortDescription: 'STACYC Stacyc 18V Smart Battery Charger — scooter, skate & kids chargers. Stacyc 12eDrive Balance Bike and 4 more.',
    description: 'The Stacyc 18V Smart Battery Charger is a genuine ALLIED-stocked scooter, skate & kids chargers component. Stacyc 12eDrive Balance Bike and 4 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/248/800/600'],
    specs: {
      voltage: '36V-100.8V Output',
      batteryType: 'N/A - charger component',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - charger component',
      chargeTime: 'Delivers 1.7A-8A charge current',
      dimensions: 'Varies by model',
      weight: '0.3-1 kg',
      warranty: '1 Year Charger & Cable'
    },
    features: [
      'STACYC genuine authorized stock, inspected prior to Australian dispatch',
      'Stacyc 12eDrive Balance Bike and 4 more',
      'Scooter, Skate & Kids Chargers compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-inmotion-v12-charger-100-8v-2-3a',
    slug: 'allied-inmotion-v12-charger-100-8v-2-3a',
    name: 'InMotion V12 Charger 100.8V 2.3A',
    price: 153,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-skate-chargers',
    featured: false,
    shortDescription: 'InMotion V12 Charger 100.8V 2.3A — scooter, skate & kids chargers. InMotion V12 HT High Torque EUC.',
    description: 'The InMotion V12 Charger 100.8V 2.3A is a genuine ALLIED-stocked scooter, skate & kids chargers component. InMotion V12 HT High Torque EUC. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/587/800/600'],
    specs: {
      voltage: '36V-100.8V Output',
      batteryType: 'N/A - charger component',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - charger component',
      chargeTime: 'Delivers 1.7A-8A charge current',
      dimensions: 'Varies by model',
      weight: '0.3-1 kg',
      warranty: '1 Year Charger & Cable'
    },
    features: [
      'InMotion genuine authorized stock, inspected prior to Australian dispatch',
      'InMotion V12 HT High Torque EUC',
      'Scooter, Skate & Kids Chargers compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-100-8v-8a-rapid-charger-for-begode-ex-n-rs-sherman-and-inmotion-v12',
    slug: 'allied-100-8v-8a-rapid-charger-for-begode-ex-n-rs-sherman-and-inmotion-v12',
    name: '100.8V 8A Rapid Charger for Begode EX.N, RS, Sherman and InMotion V12',
    price: 285,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-skate-chargers',
    featured: false,
    shortDescription: 'Universal 100.8V 8A Rapid Charger for Begode EX.N, RS, Sherman and InMotion V12 — scooter, skate & kids chargers. InMotion V12 HT High Torque EUC.',
    description: 'The 100.8V 8A Rapid Charger for Begode EX.N, RS, Sherman and InMotion V12 is a genuine ALLIED-stocked scooter, skate & kids chargers component. InMotion V12 HT High Torque EUC. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/867/800/600'],
    specs: {
      voltage: '36V-100.8V Output',
      batteryType: 'N/A - charger component',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - charger component',
      chargeTime: 'Delivers 1.7A-8A charge current',
      dimensions: 'Varies by model',
      weight: '0.3-1 kg',
      warranty: '1 Year Charger & Cable'
    },
    features: [
      'Universal genuine authorized stock, inspected prior to Australian dispatch',
      'InMotion V12 HT High Torque EUC',
      'Scooter, Skate & Kids Chargers compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-84-2v-5a-rapid-charger-for-kingsong-16x-18xl-and-inmotion-v11-v10f',
    slug: 'allied-84-2v-5a-rapid-charger-for-kingsong-16x-18xl-and-inmotion-v11-v10f',
    name: '84.2V 5A Rapid Charger for KingSong 16X/18XL and InMotion V11/V10F',
    price: 215,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-skate-chargers',
    featured: false,
    shortDescription: 'Universal 84.2V 5A Rapid Charger for KingSong 16X/18XL and InMotion V11/V10F — scooter, skate & kids chargers. KingSong 16X High-Torque EUW and 1 more.',
    description: 'The 84.2V 5A Rapid Charger for KingSong 16X/18XL and InMotion V11/V10F is a genuine ALLIED-stocked scooter, skate & kids chargers component. KingSong 16X High-Torque EUW and 1 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/275/800/600'],
    specs: {
      voltage: '36V-100.8V Output',
      batteryType: 'N/A - charger component',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - charger component',
      chargeTime: 'Delivers 1.7A-8A charge current',
      dimensions: 'Varies by model',
      weight: '0.3-1 kg',
      warranty: '1 Year Charger & Cable'
    },
    features: [
      'Universal genuine authorized stock, inspected prior to Australian dispatch',
      'KingSong 16X High-Torque EUW and 1 more',
      'Scooter, Skate & Kids Chargers compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-evolve-replacement-trucks-hadean-gt-gtr',
    slug: 'allied-evolve-replacement-trucks-hadean-gt-gtr',
    name: 'Evolve Replacement Trucks (Hadean, GT, GTR)',
    price: 72,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-skate-parts',
    featured: false,
    shortDescription: 'Evolve Skateboards Evolve Replacement Trucks (Hadean, GT, GTR) — scooter, skate & kids parts. Evolve Hadean Carbon All-Terrain and 6 more.',
    description: 'The Evolve Replacement Trucks (Hadean, GT, GTR) is a genuine ALLIED-stocked scooter, skate & kids parts component. Evolve Hadean Carbon All-Terrain and 6 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/738/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.1-1 kg',
      warranty: '6-12 Months Part'
    },
    features: [
      'Evolve Skateboards genuine authorized stock, inspected prior to Australian dispatch',
      'Evolve Hadean Carbon All-Terrain and 6 more',
      'Scooter, Skate & Kids Parts compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-exway-riot-15mm-replacement-belt-pair',
    slug: 'allied-exway-riot-15mm-replacement-belt-pair',
    name: 'Exway Riot 15mm Replacement Belt (Pair)',
    price: 35,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-skate-parts',
    featured: false,
    shortDescription: 'Exway Riot 15mm Replacement Belt (Pair) — scooter, skate & kids parts. Exway Flex Riot Street Board and 2 more.',
    description: 'The Exway Riot 15mm Replacement Belt (Pair) is a genuine ALLIED-stocked scooter, skate & kids parts component. Exway Flex Riot Street Board and 2 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/466/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.1-1 kg',
      warranty: '6-12 Months Part'
    },
    features: [
      'Exway genuine authorized stock, inspected prior to Australian dispatch',
      'Exway Flex Riot Street Board and 2 more',
      'Scooter, Skate & Kids Parts compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-stacyc-replacement-throttle-for-12edrive-and-16edrive',
    slug: 'allied-stacyc-replacement-throttle-for-12edrive-and-16edrive',
    name: 'Stacyc Replacement Throttle for 12eDrive and 16eDrive',
    price: 139,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-skate-parts',
    featured: false,
    shortDescription: 'STACYC Stacyc Replacement Throttle for 12eDrive and 16eDrive — scooter, skate & kids parts. Stacyc 12eDrive Balance Bike and 4 more.',
    description: 'The Stacyc Replacement Throttle for 12eDrive and 16eDrive is a genuine ALLIED-stocked scooter, skate & kids parts component. Stacyc 12eDrive Balance Bike and 4 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/987/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.1-1 kg',
      warranty: '6-12 Months Part'
    },
    features: [
      'STACYC genuine authorized stock, inspected prior to Australian dispatch',
      'Stacyc 12eDrive Balance Bike and 4 more',
      'Scooter, Skate & Kids Parts compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-xiaomi-scooter-8-5-x-2-0-inner-tube-with-bent-valve',
    slug: 'allied-xiaomi-scooter-8-5-x-2-0-inner-tube-with-bent-valve',
    name: 'Xiaomi Scooter 8.5 x 2.0 Inner Tube with Bent Valve',
    price: 20,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-skate-parts',
    featured: false,
    shortDescription: 'Xiaomi Scooter 8.5 x 2.0 Inner Tube with Bent Valve — scooter, skate & kids parts. Xiaomi Mi Electric Scooter 1S.',
    description: 'The Xiaomi Scooter 8.5 x 2.0 Inner Tube with Bent Valve is a genuine ALLIED-stocked scooter, skate & kids parts component. Xiaomi Mi Electric Scooter 1S. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/296/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.1-1 kg',
      warranty: '6-12 Months Part'
    },
    features: [
      'Xiaomi genuine authorized stock, inspected prior to Australian dispatch',
      'Xiaomi Mi Electric Scooter 1S',
      'Scooter, Skate & Kids Parts compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-inmotion-v11-18-x-3-cst-c-1488-tyre',
    slug: 'allied-inmotion-v11-18-x-3-cst-c-1488-tyre',
    name: 'InMotion V11 18 x 3 CST C-1488 Tyre',
    price: 76,
    category: 'batteries-parts-kits',
    subcategory: 'scooter-skate-parts',
    featured: false,
    shortDescription: 'InMotion V11 18 x 3 CST C-1488 Tyre — scooter, skate & kids parts. InMotion V11 Suspension EUC.',
    description: 'The InMotion V11 18 x 3 CST C-1488 Tyre is a genuine ALLIED-stocked scooter, skate & kids parts component. InMotion V11 Suspension EUC. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/621/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.1-1 kg',
      warranty: '6-12 Months Part'
    },
    features: [
      'InMotion genuine authorized stock, inspected prior to Australian dispatch',
      'InMotion V11 Suspension EUC',
      'Scooter, Skate & Kids Parts compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-razor-mx650-12v-12ah-sealed-lead-acid-battery-3-pack',
    slug: 'allied-razor-mx650-12v-12ah-sealed-lead-acid-battery-3-pack',
    name: 'Razor MX650 12V 12Ah Sealed Lead Acid Battery (3-Pack)',
    price: 171,
    category: 'batteries-parts-kits',
    subcategory: 'kids-dirt-bike-batteries',
    featured: false,
    shortDescription: 'Razor MX650 12V 12Ah Sealed Lead Acid Battery (3-Pack) — kids & dirt bike batteries. Razor MX650 Dirt Rocket Pit Bike.',
    description: 'The Razor MX650 12V 12Ah Sealed Lead Acid Battery (3-Pack) is a genuine ALLIED-stocked kids & dirt bike batteries component. Razor MX650 Dirt Rocket Pit Bike. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/591/800/600'],
    specs: {
      voltage: '12V/18V Pack',
      batteryType: 'SLA / Lithium-ion Cell',
      range: 'N/A - battery component',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '3-5 Hours',
      dimensions: 'Varies by model',
      weight: '1-4 kg',
      warranty: '1 Year Battery Cells'
    },
    features: [
      'Razor genuine authorized stock, inspected prior to Australian dispatch',
      'Razor MX650 Dirt Rocket Pit Bike',
      'Kids & Dirt Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-stacyc-18v-5ah-battery',
    slug: 'allied-stacyc-18v-5ah-battery',
    name: 'Stacyc 18V 5Ah Battery',
    price: 329,
    category: 'batteries-parts-kits',
    subcategory: 'kids-dirt-bike-batteries',
    featured: false,
    shortDescription: 'STACYC Stacyc 18V 5Ah Battery — kids & dirt bike batteries. Stacyc 12eDrive Balance Bike and 4 more.',
    description: 'The Stacyc 18V 5Ah Battery is a genuine ALLIED-stocked kids & dirt bike batteries component. Stacyc 12eDrive Balance Bike and 4 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/158/800/600'],
    specs: {
      voltage: '12V/18V Pack',
      batteryType: 'SLA / Lithium-ion Cell',
      range: 'N/A - battery component',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - compatible motor system listed in fitment',
      chargeTime: '3-5 Hours',
      dimensions: 'Varies by model',
      weight: '1-4 kg',
      warranty: '1 Year Battery Cells'
    },
    features: [
      'STACYC genuine authorized stock, inspected prior to Australian dispatch',
      'Stacyc 12eDrive Balance Bike and 4 more',
      'Kids & Dirt Bike Batteries compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-schwalbe-marathon-e-plus-27-5-x-2-0-wire-bead-tyre',
    slug: 'allied-schwalbe-marathon-e-plus-27-5-x-2-0-wire-bead-tyre',
    name: 'Schwalbe Marathon E-Plus 27.5 x 2.0 Wire Bead Tyre',
    price: 80,
    category: 'batteries-parts-kits',
    subcategory: 'tyres-tubes',
    featured: false,
    shortDescription: 'Schwalbe Marathon E-Plus 27.5 x 2.0 Wire Bead Tyre — tyres & tubes. Fits by size: see product page.',
    description: 'The Schwalbe Marathon E-Plus 27.5 x 2.0 Wire Bead Tyre is a genuine ALLIED-stocked tyres & tubes component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/306/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'Puncture/wear rated for e-bike loads',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.2-1 kg',
      warranty: '6 Months Manufacturing Defects'
    },
    features: [
      'Schwalbe genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Tyres & Tubes compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-schwalbe-marathon-plus-700c-wire-bead-tyre',
    slug: 'allied-schwalbe-marathon-plus-700c-wire-bead-tyre',
    name: 'Schwalbe Marathon Plus 700C Wire Bead Tyre',
    price: 60,
    category: 'batteries-parts-kits',
    subcategory: 'tyres-tubes',
    featured: false,
    shortDescription: 'Schwalbe Marathon Plus 700C Wire Bead Tyre — tyres & tubes. Fits by size: see product page.',
    description: 'The Schwalbe Marathon Plus 700C Wire Bead Tyre is a genuine ALLIED-stocked tyres & tubes component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/742/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'Puncture/wear rated for e-bike loads',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.2-1 kg',
      warranty: '6 Months Manufacturing Defects'
    },
    features: [
      'Schwalbe genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Tyres & Tubes compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-schwalbe-marathon-plus-tour-reflective-700c-tyre',
    slug: 'allied-schwalbe-marathon-plus-tour-reflective-700c-tyre',
    name: 'Schwalbe Marathon Plus Tour Reflective 700C Tyre',
    price: 80,
    category: 'batteries-parts-kits',
    subcategory: 'tyres-tubes',
    featured: false,
    shortDescription: 'Schwalbe Marathon Plus Tour Reflective 700C Tyre — tyres & tubes. Fits by size: see product page.',
    description: 'The Schwalbe Marathon Plus Tour Reflective 700C Tyre is a genuine ALLIED-stocked tyres & tubes component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/481/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'Puncture/wear rated for e-bike loads',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.2-1 kg',
      warranty: '6 Months Manufacturing Defects'
    },
    features: [
      'Schwalbe genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Tyres & Tubes compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-schwalbe-marathon-plus-e-25-hybrid-tyre-700-x-35c',
    slug: 'allied-schwalbe-marathon-plus-e-25-hybrid-tyre-700-x-35c',
    name: 'Schwalbe Marathon Plus E-25 Hybrid Tyre 700 x 35c',
    price: 80,
    category: 'batteries-parts-kits',
    subcategory: 'tyres-tubes',
    featured: false,
    shortDescription: 'Schwalbe Marathon Plus E-25 Hybrid Tyre 700 x 35c — tyres & tubes. Fits by size: see product page.',
    description: 'The Schwalbe Marathon Plus E-25 Hybrid Tyre 700 x 35c is a genuine ALLIED-stocked tyres & tubes component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/223/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'Puncture/wear rated for e-bike loads',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.2-1 kg',
      warranty: '6 Months Manufacturing Defects'
    },
    features: [
      'Schwalbe genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Tyres & Tubes compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-entity-inner-tube-700c',
    slug: 'allied-entity-inner-tube-700c',
    name: 'Entity Inner Tube 700c',
    price: 7,
    category: 'batteries-parts-kits',
    subcategory: 'tyres-tubes',
    featured: false,
    shortDescription: 'Entity Inner Tube 700c — tyres & tubes. Fits by size: see product page.',
    description: 'The Entity Inner Tube 700c is a genuine ALLIED-stocked tyres & tubes component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/247/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'Puncture/wear rated for e-bike loads',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.2-1 kg',
      warranty: '6 Months Manufacturing Defects'
    },
    features: [
      'Entity genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Tyres & Tubes compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-freedom-to-ride-schrader-tube-27-5-x-2-1-2-5',
    slug: 'allied-freedom-to-ride-schrader-tube-27-5-x-2-1-2-5',
    name: 'Freedom to Ride Schrader Tube 27.5 x 2.1-2.5',
    price: 10,
    category: 'batteries-parts-kits',
    subcategory: 'tyres-tubes',
    featured: false,
    shortDescription: 'Freedom to Ride Schrader Tube 27.5 x 2.1-2.5 — tyres & tubes. Fits by size: see product page.',
    description: 'The Freedom to Ride Schrader Tube 27.5 x 2.1-2.5 is a genuine ALLIED-stocked tyres & tubes component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/414/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'Puncture/wear rated for e-bike loads',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.2-1 kg',
      warranty: '6 Months Manufacturing Defects'
    },
    features: [
      'Freedom to Ride genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Tyres & Tubes compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tektro-180mm-disc-brake-rotor',
    slug: 'allied-tektro-180mm-disc-brake-rotor',
    name: 'Tektro 180mm Disc Brake Rotor',
    price: 23,
    category: 'batteries-parts-kits',
    subcategory: 'brakes-rotors-pads',
    featured: false,
    shortDescription: 'Tektro 180mm Disc Brake Rotor — brake pads & rotors. Fits by size: see product page.',
    description: 'The Tektro 180mm Disc Brake Rotor is a genuine ALLIED-stocked brake pads & rotors component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/579/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.1-0.3 kg',
      warranty: '6 Months Manufacturing Defects'
    },
    features: [
      'Tektro genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Brake Pads & Rotors compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-shimano-deore-rt56-6-bolt-disc-rotor-160mm',
    slug: 'allied-shimano-deore-rt56-6-bolt-disc-rotor-160mm',
    name: 'Shimano Deore RT56 6-Bolt Disc Rotor 160mm',
    price: 27,
    category: 'batteries-parts-kits',
    subcategory: 'brakes-rotors-pads',
    featured: false,
    shortDescription: 'Shimano Deore RT56 6-Bolt Disc Rotor 160mm — brake pads & rotors. Fits by size: see product page.',
    description: 'The Shimano Deore RT56 6-Bolt Disc Rotor 160mm is a genuine ALLIED-stocked brake pads & rotors component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/721/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.1-0.3 kg',
      warranty: '6 Months Manufacturing Defects'
    },
    features: [
      'Shimano genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Brake Pads & Rotors compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-shimano-slx-rt66-disc-rotor-180mm',
    slug: 'allied-shimano-slx-rt66-disc-rotor-180mm',
    name: 'Shimano SLX RT66 Disc Rotor 180mm',
    price: 45,
    category: 'batteries-parts-kits',
    subcategory: 'brakes-rotors-pads',
    featured: false,
    shortDescription: 'Shimano SLX RT66 Disc Rotor 180mm — brake pads & rotors. Fits by size: see product page.',
    description: 'The Shimano SLX RT66 Disc Rotor 180mm is a genuine ALLIED-stocked brake pads & rotors component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/340/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.1-0.3 kg',
      warranty: '6 Months Manufacturing Defects'
    },
    features: [
      'Shimano genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Brake Pads & Rotors compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-swissstop-disc-27e-brake-pads-shimano-tektro',
    slug: 'allied-swissstop-disc-27e-brake-pads-shimano-tektro',
    name: 'SwissStop Disc 27E Brake Pads (Shimano/Tektro)',
    price: 35,
    category: 'batteries-parts-kits',
    subcategory: 'brakes-rotors-pads',
    featured: false,
    shortDescription: 'SwissStop Disc 27E Brake Pads (Shimano/Tektro) — brake pads & rotors. Fits by size: see product page.',
    description: 'The SwissStop Disc 27E Brake Pads (Shimano/Tektro) is a genuine ALLIED-stocked brake pads & rotors component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/783/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.1-0.3 kg',
      warranty: '6 Months Manufacturing Defects'
    },
    features: [
      'SwissStop genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Brake Pads & Rotors compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-tektro-mechanical-disc-brake-pads',
    slug: 'allied-tektro-mechanical-disc-brake-pads',
    name: 'Tektro Mechanical Disc Brake Pads',
    price: 18,
    category: 'batteries-parts-kits',
    subcategory: 'brakes-rotors-pads',
    featured: false,
    shortDescription: 'Tektro Mechanical Disc Brake Pads — brake pads & rotors. Fits by size: see product page.',
    description: 'The Tektro Mechanical Disc Brake Pads is a genuine ALLIED-stocked brake pads & rotors component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/871/800/600'],
    specs: {
      voltage: 'N/A (mechanical part)',
      batteryType: 'N/A - mechanical part',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A - mechanical part',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.1-0.3 kg',
      warranty: '6 Months Manufacturing Defects'
    },
    features: [
      'Tektro genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Brake Pads & Rotors compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bafang-bbs02b-48v-750w-mid-drive-conversion-kit',
    slug: 'allied-bafang-bbs02b-48v-750w-mid-drive-conversion-kit',
    name: 'Bafang BBS02B 48V 750W Mid-Drive Conversion Kit',
    price: 849,
    category: 'batteries-parts-kits',
    subcategory: 'mid-drive-conversion-kits',
    featured: false,
    shortDescription: 'Bafang BBS02B 48V 750W Mid-Drive Conversion Kit — mid-drive conversion kits. Fits by size: see product page.',
    description: 'The Bafang BBS02B 48V 750W Mid-Drive Conversion Kit is a genuine ALLIED-stocked mid-drive conversion kits component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/858/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: 'N/A - sold separately',
      range: 'Depends on battery fitted',
      topSpeed: '25-45 km/h (regulatory dependent)',
      payloadCapacity: 'N/A',
      motorPower: '750W-1000W Bafang Mid-Drive Motor',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '4-5 kg (motor unit)',
      warranty: '1 Year Motor & Controller'
    },
    features: [
      'Bafang genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Mid-Drive Conversion Kits compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bafang-bbshd-48v-1000w-mid-drive-conversion-kit',
    slug: 'allied-bafang-bbshd-48v-1000w-mid-drive-conversion-kit',
    name: 'Bafang BBSHD 48V 1000W Mid-Drive Conversion Kit',
    price: 1150,
    category: 'batteries-parts-kits',
    subcategory: 'mid-drive-conversion-kits',
    featured: false,
    shortDescription: 'Bafang BBSHD 48V 1000W Mid-Drive Conversion Kit — mid-drive conversion kits. Fits by size: see product page.',
    description: 'The Bafang BBSHD 48V 1000W Mid-Drive Conversion Kit is a genuine ALLIED-stocked mid-drive conversion kits component. Fits by size: see product page. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/866/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: 'N/A - sold separately',
      range: 'Depends on battery fitted',
      topSpeed: '25-45 km/h (regulatory dependent)',
      payloadCapacity: 'N/A',
      motorPower: '750W-1000W Bafang Mid-Drive Motor',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '4-5 kg (motor unit)',
      warranty: '1 Year Motor & Controller'
    },
    features: [
      'Bafang genuine authorized stock, inspected prior to Australian dispatch',
      'Fits by size: see product page',
      'Mid-Drive Conversion Kits compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bafang-bbs02b-750w-mid-drive-kit',
    slug: 'allied-bafang-bbs02b-750w-mid-drive-kit',
    name: 'Bafang BBS02B 750W Mid-Drive Kit',
    price: 699,
    category: 'batteries-parts-kits',
    subcategory: 'mid-drive-conversion-kits',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Bafang BBS02B 750W Mid-Drive Kit — mid-drive conversion kits. Universal bottom bracket fitment.',
    description: 'The Bafang BBS02B 750W Mid-Drive Kit is a genuine ALLIED-stocked mid-drive conversion kits component. Universal bottom bracket fitment. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/651/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: 'N/A - sold separately',
      range: 'Depends on battery fitted',
      topSpeed: '25-45 km/h (regulatory dependent)',
      payloadCapacity: 'N/A',
      motorPower: '750W-1000W Bafang Mid-Drive Motor',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '4-5 kg (motor unit)',
      warranty: '1 Year Motor & Controller'
    },
    features: [
      'Bafang genuine authorized stock, inspected prior to Australian dispatch',
      'Universal bottom bracket fitment',
      'Mid-Drive Conversion Kits compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bafang-bbshd-1000w-mid-drive-kit',
    slug: 'allied-bafang-bbshd-1000w-mid-drive-kit',
    name: 'Bafang BBSHD 1000W Mid-Drive Kit',
    price: 899,
    category: 'batteries-parts-kits',
    subcategory: 'mid-drive-conversion-kits',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Bafang BBSHD 1000W Mid-Drive Kit — mid-drive conversion kits. Universal bottom bracket fitment.',
    description: 'The Bafang BBSHD 1000W Mid-Drive Kit is a genuine ALLIED-stocked mid-drive conversion kits component. Universal bottom bracket fitment. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/199/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: 'N/A - sold separately',
      range: 'Depends on battery fitted',
      topSpeed: '25-45 km/h (regulatory dependent)',
      payloadCapacity: 'N/A',
      motorPower: '750W-1000W Bafang Mid-Drive Motor',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '4-5 kg (motor unit)',
      warranty: '1 Year Motor & Controller'
    },
    features: [
      'Bafang genuine authorized stock, inspected prior to Australian dispatch',
      'Universal bottom bracket fitment',
      'Mid-Drive Conversion Kits compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-voilamart-1500w-hub-motor-kit',
    slug: 'allied-voilamart-1500w-hub-motor-kit',
    name: 'Voilamart 1500W Hub Motor Kit',
    price: 499,
    category: 'batteries-parts-kits',
    subcategory: 'hub-motor-conversion-kits',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Voilamart 1500W Hub Motor Kit — hub motor conversion kits. Universal wheel fitment.',
    description: 'The Voilamart 1500W Hub Motor Kit is a genuine ALLIED-stocked hub motor conversion kits component. Universal wheel fitment. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/424/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: 'N/A - sold separately',
      range: 'Depends on battery fitted',
      topSpeed: '25-45 km/h (regulatory dependent)',
      payloadCapacity: 'N/A',
      motorPower: '1200W-1500W Hub Motor',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '3-4 kg (motor wheel)',
      warranty: '1 Year Motor'
    },
    features: [
      'Voilamart genuine authorized stock, inspected prior to Australian dispatch',
      'Universal wheel fitment',
      'Hub Motor Conversion Kits compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ebikeling-1200w-hub-motor-kit',
    slug: 'allied-ebikeling-1200w-hub-motor-kit',
    name: 'EBIKELING 1200W Hub Motor Kit',
    price: 399,
    category: 'batteries-parts-kits',
    subcategory: 'hub-motor-conversion-kits',
    featured: false,
    shortDescription: 'EBIKELING 1200W Hub Motor Kit — hub motor conversion kits. Universal wheel fitment.',
    description: 'The EBIKELING 1200W Hub Motor Kit is a genuine ALLIED-stocked hub motor conversion kits component. Universal wheel fitment. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/524/800/600'],
    specs: {
      voltage: '36V/48V System',
      batteryType: 'N/A - sold separately',
      range: 'Depends on battery fitted',
      topSpeed: '25-45 km/h (regulatory dependent)',
      payloadCapacity: 'N/A',
      motorPower: '1200W-1500W Hub Motor',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '3-4 kg (motor wheel)',
      warranty: '1 Year Motor'
    },
    features: [
      'EBIKELING genuine authorized stock, inspected prior to Australian dispatch',
      'Universal wheel fitment',
      'Hub Motor Conversion Kits compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fox-racing-dropframe-pro-helmet',
    slug: 'allied-fox-racing-dropframe-pro-helmet',
    name: 'Fox Racing Dropframe Pro Helmet',
    price: 289,
    category: 'safety-security-carry',
    subcategory: 'helmets',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Fox Racing Dropframe Pro Helmet — helmets with N/A lithium power and N/A range.',
    description: 'The Fox Racing Dropframe Pro Helmet is part of ALLIED\'s authorized Fox Racing helmets range, featuring n/a, n/a, and a top speed of as/nzs 2063 and/or ce en1078 certified. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/307/800/600'],
    specs: {
      voltage: 'N/A (safety apparel)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'AS/NZS 2063 and/or CE EN1078 certified',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.25-0.45 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Fox Racing genuine authorized stock, inspected prior to Australian dispatch',
      'Helmets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-troy-lee-designs-stage-mips-helmet',
    slug: 'allied-troy-lee-designs-stage-mips-helmet',
    name: 'Troy Lee Designs Stage MIPS Helmet',
    price: 399,
    category: 'safety-security-carry',
    subcategory: 'helmets',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Troy Lee Designs Stage MIPS Helmet — helmets with N/A lithium power and N/A range.',
    description: 'The Troy Lee Designs Stage MIPS Helmet is part of ALLIED\'s authorized Troy Lee Designs helmets range, featuring n/a, n/a, and a top speed of as/nzs 2063 and/or ce en1078 certified. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/791/800/600'],
    specs: {
      voltage: 'N/A (safety apparel)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'AS/NZS 2063 and/or CE EN1078 certified',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.25-0.45 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Troy Lee Designs genuine authorized stock, inspected prior to Australian dispatch',
      'Helmets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-thousand-heritage-helmet-mips',
    slug: 'allied-thousand-heritage-helmet-mips',
    name: 'Thousand Heritage Helmet MIPS',
    price: 189,
    category: 'safety-security-carry',
    subcategory: 'helmets',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Thousand Heritage Helmet MIPS — helmets with N/A lithium power and N/A range.',
    description: 'The Thousand Heritage Helmet MIPS is part of ALLIED\'s authorized Thousand helmets range, featuring n/a, n/a, and a top speed of as/nzs 2063 and/or ce en1078 certified. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/322/800/600'],
    specs: {
      voltage: 'N/A (safety apparel)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'AS/NZS 2063 and/or CE EN1078 certified',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.25-0.45 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Thousand genuine authorized stock, inspected prior to Australian dispatch',
      'Helmets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-lumos-ultra-smart-led-helmet-with-indicators',
    slug: 'allied-lumos-ultra-smart-led-helmet-with-indicators',
    name: 'Lumos Ultra Smart LED Helmet with Indicators',
    price: 249,
    category: 'safety-security-carry',
    subcategory: 'helmets',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Lumos Ultra Smart LED Helmet with Indicators — helmets with N/A lithium power and N/A range.',
    description: 'The Lumos Ultra Smart LED Helmet with Indicators is part of ALLIED\'s authorized Lumos helmets range, featuring n/a, n/a, and a top speed of as/nzs 2063 and/or ce en1078 certified. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/220/800/600'],
    specs: {
      voltage: 'N/A (safety apparel)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'AS/NZS 2063 and/or CE EN1078 certified',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.25-0.45 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Lumos genuine authorized stock, inspected prior to Australian dispatch',
      'Helmets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-giro-fixture-mips-ii-mountain-helmet',
    slug: 'allied-giro-fixture-mips-ii-mountain-helmet',
    name: 'Giro Fixture MIPS II Mountain Helmet',
    price: 129,
    category: 'safety-security-carry',
    subcategory: 'helmets',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Giro Fixture MIPS II Mountain Helmet — helmets with N/A lithium power and N/A range.',
    description: 'The Giro Fixture MIPS II Mountain Helmet is part of ALLIED\'s authorized Giro helmets range, featuring n/a, n/a, and a top speed of as/nzs 2063 and/or ce en1078 certified. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/476/800/600'],
    specs: {
      voltage: 'N/A (safety apparel)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'AS/NZS 2063 and/or CE EN1078 certified',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.25-0.45 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Giro genuine authorized stock, inspected prior to Australian dispatch',
      'Helmets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-fox-racing-dropframe-pro-enduro-helmet',
    slug: 'allied-fox-racing-dropframe-pro-enduro-helmet',
    name: 'Fox Racing Dropframe Pro Enduro Helmet',
    price: 329,
    category: 'safety-security-carry',
    subcategory: 'helmets',
    featured: false,
    shortDescription: 'Fox Racing Dropframe Pro Enduro Helmet — helmets with N/A lithium power and N/A range.',
    description: 'The Fox Racing Dropframe Pro Enduro Helmet is part of ALLIED\'s authorized Fox Racing helmets range, featuring n/a, n/a, and a top speed of as/nzs 2063 and/or ce en1078 certified. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/149/800/600'],
    specs: {
      voltage: 'N/A (safety apparel)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'AS/NZS 2063 and/or CE EN1078 certified',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.25-0.45 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Fox Racing genuine authorized stock, inspected prior to Australian dispatch',
      'Helmets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-giro-escape-mips-helmet',
    slug: 'allied-giro-escape-mips-helmet',
    name: 'Giro Escape MIPS Helmet',
    price: 200,
    category: 'safety-security-carry',
    subcategory: 'helmets',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Giro Escape MIPS Helmet — helmets with N/A lithium power and N/A range.',
    description: 'The Giro Escape MIPS Helmet is part of ALLIED\'s authorized Giro helmets range, featuring n/a, n/a, and a top speed of as/nzs 2063 and/or ce en1078 certified. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/825/800/600'],
    specs: {
      voltage: 'N/A (safety apparel)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'AS/NZS 2063 and/or CE EN1078 certified',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.25-0.45 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Giro genuine authorized stock, inspected prior to Australian dispatch',
      'Helmets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bell-gage-mips-road-urban-helmet',
    slug: 'allied-bell-gage-mips-road-urban-helmet',
    name: 'Bell Gage MIPS Road/Urban Helmet',
    price: 140,
    category: 'safety-security-carry',
    subcategory: 'helmets',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Bell Gage MIPS Road/Urban Helmet — helmets with N/A lithium power and N/A range.',
    description: 'The Bell Gage MIPS Road/Urban Helmet is part of ALLIED\'s authorized Bell helmets range, featuring n/a, n/a, and a top speed of as/nzs 2063 and/or ce en1078 certified. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/756/800/600'],
    specs: {
      voltage: 'N/A (safety apparel)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'AS/NZS 2063 and/or CE EN1078 certified',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.25-0.45 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Bell genuine authorized stock, inspected prior to Australian dispatch',
      'Helmets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-giro-syntax-mips-helmet',
    slug: 'allied-giro-syntax-mips-helmet',
    name: 'Giro Syntax MIPS Helmet',
    price: 113,
    category: 'safety-security-carry',
    subcategory: 'helmets',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Giro Syntax MIPS Helmet — helmets with N/A lithium power and N/A range.',
    description: 'The Giro Syntax MIPS Helmet is part of ALLIED\'s authorized Giro helmets range, featuring n/a, n/a, and a top speed of as/nzs 2063 and/or ce en1078 certified. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/774/800/600'],
    specs: {
      voltage: 'N/A (safety apparel)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'AS/NZS 2063 and/or CE EN1078 certified',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.25-0.45 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Giro genuine authorized stock, inspected prior to Australian dispatch',
      'Helmets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kask-valegro-road-helmet',
    slug: 'allied-kask-valegro-road-helmet',
    name: 'Kask Valegro Road Helmet',
    price: 224,
    category: 'safety-security-carry',
    subcategory: 'helmets',
    featured: false,
    shortDescription: 'Kask Valegro Road Helmet — helmets with N/A lithium power and N/A range.',
    description: 'The Kask Valegro Road Helmet is part of ALLIED\'s authorized Kask helmets range, featuring n/a, n/a, and a top speed of as/nzs 2063 and/or ce en1078 certified. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/168/800/600'],
    specs: {
      voltage: 'N/A (safety apparel)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'AS/NZS 2063 and/or CE EN1078 certified',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.25-0.45 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Kask genuine authorized stock, inspected prior to Australian dispatch',
      'Helmets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-knog-blinder-600-plus-20-light-set',
    slug: 'allied-knog-blinder-600-plus-20-light-set',
    name: 'Knog Blinder 600/Plus 20 Light Set',
    price: 109,
    category: 'safety-security-carry',
    subcategory: 'lights-visibility',
    featured: false,
    shortDescription: 'Knog Blinder 600/Plus 20 Light Set — lights & visibility with Li-ion 300-900mAh lithium power and N/A range.',
    description: 'The Knog Blinder 600/Plus 20 Light Set is part of ALLIED\'s authorized Knog lights & visibility range, featuring n/a, li-ion 300-900mah, and a top speed of n/a. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/678/800/600'],
    specs: {
      voltage: 'USB Rechargeable',
      batteryType: 'Li-ion 300-900mAh',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '0.05-0.15 kg per light',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Knog genuine authorized stock, inspected prior to Australian dispatch',
      'Lights & Visibility class — n/a',
      'Li-ion 300-900mAh',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-knog-blinder-700-plus-20-usb-light-set',
    slug: 'allied-knog-blinder-700-plus-20-usb-light-set',
    name: 'Knog Blinder 700/Plus 20 USB Light Set',
    price: 145,
    category: 'safety-security-carry',
    subcategory: 'lights-visibility',
    featured: false,
    shortDescription: 'Knog Blinder 700/Plus 20 USB Light Set — lights & visibility with Li-ion 300-900mAh lithium power and N/A range.',
    description: 'The Knog Blinder 700/Plus 20 USB Light Set is part of ALLIED\'s authorized Knog lights & visibility range, featuring n/a, li-ion 300-900mah, and a top speed of n/a. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/527/800/600'],
    specs: {
      voltage: 'USB Rechargeable',
      batteryType: 'Li-ion 300-900mAh',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '0.05-0.15 kg per light',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Knog genuine authorized stock, inspected prior to Australian dispatch',
      'Lights & Visibility class — n/a',
      'Li-ion 300-900mAh',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-knog-blinder-900-mid-cobber-170-light-set',
    slug: 'allied-knog-blinder-900-mid-cobber-170-light-set',
    name: 'Knog Blinder 900/Mid Cobber 170 Light Set',
    price: 214,
    category: 'safety-security-carry',
    subcategory: 'lights-visibility',
    featured: false,
    shortDescription: 'Knog Blinder 900/Mid Cobber 170 Light Set — lights & visibility with Li-ion 300-900mAh lithium power and N/A range.',
    description: 'The Knog Blinder 900/Mid Cobber 170 Light Set is part of ALLIED\'s authorized Knog lights & visibility range, featuring n/a, li-ion 300-900mah, and a top speed of n/a. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/120/800/600'],
    specs: {
      voltage: 'USB Rechargeable',
      batteryType: 'Li-ion 300-900mAh',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '0.05-0.15 kg per light',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Knog genuine authorized stock, inspected prior to Australian dispatch',
      'Lights & Visibility class — n/a',
      'Li-ion 300-900mAh',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-knog-blinder-mini-square-50-30-light-set',
    slug: 'allied-knog-blinder-mini-square-50-30-light-set',
    name: 'Knog Blinder Mini Square 50/30 Light Set',
    price: 75,
    category: 'safety-security-carry',
    subcategory: 'lights-visibility',
    featured: false,
    shortDescription: 'Knog Blinder Mini Square 50/30 Light Set — lights & visibility with Li-ion 300-900mAh lithium power and N/A range.',
    description: 'The Knog Blinder Mini Square 50/30 Light Set is part of ALLIED\'s authorized Knog lights & visibility range, featuring n/a, li-ion 300-900mah, and a top speed of n/a. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/390/800/600'],
    specs: {
      voltage: 'USB Rechargeable',
      batteryType: 'Li-ion 300-900mAh',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '0.05-0.15 kg per light',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Knog genuine authorized stock, inspected prior to Australian dispatch',
      'Lights & Visibility class — n/a',
      'Li-ion 300-900mAh',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-moon-rigel-pro-and-helix-sense-1000-150-light-set',
    slug: 'allied-moon-rigel-pro-and-helix-sense-1000-150-light-set',
    name: 'Moon Rigel Pro and Helix Sense 1000/150 Light Set',
    price: 155,
    category: 'safety-security-carry',
    subcategory: 'lights-visibility',
    featured: false,
    shortDescription: 'Moon Rigel Pro and Helix Sense 1000/150 Light Set — lights & visibility with Li-ion 300-900mAh lithium power and N/A range.',
    description: 'The Moon Rigel Pro and Helix Sense 1000/150 Light Set is part of ALLIED\'s authorized Moon lights & visibility range, featuring n/a, li-ion 300-900mah, and a top speed of n/a. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/344/800/600'],
    specs: {
      voltage: 'USB Rechargeable',
      batteryType: 'Li-ion 300-900mAh',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '0.05-0.15 kg per light',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Moon genuine authorized stock, inspected prior to Australian dispatch',
      'Lights & Visibility class — n/a',
      'Li-ion 300-900mAh',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-moon-rigel-lite-500-and-helix-lite-100-light-set',
    slug: 'allied-moon-rigel-lite-500-and-helix-lite-100-light-set',
    name: 'Moon Rigel Lite 500 and Helix Lite 100 Light Set',
    price: 115,
    category: 'safety-security-carry',
    subcategory: 'lights-visibility',
    featured: false,
    shortDescription: 'Moon Rigel Lite 500 and Helix Lite 100 Light Set — lights & visibility with Li-ion 300-900mAh lithium power and N/A range.',
    description: 'The Moon Rigel Lite 500 and Helix Lite 100 Light Set is part of ALLIED\'s authorized Moon lights & visibility range, featuring n/a, li-ion 300-900mah, and a top speed of n/a. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/647/800/600'],
    specs: {
      voltage: 'USB Rechargeable',
      batteryType: 'Li-ion 300-900mAh',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: '1.5-3 Hours',
      dimensions: 'Varies by model',
      weight: '0.05-0.15 kg per light',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Moon genuine authorized stock, inspected prior to Australian dispatch',
      'Lights & Visibility class — n/a',
      'Li-ion 300-900mAh',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-alpinestars-venture-riding-jacket',
    slug: 'allied-alpinestars-venture-riding-jacket',
    name: 'Alpinestars Venture Riding Jacket',
    price: 349,
    category: 'safety-security-carry',
    subcategory: 'jackets-hi-vis',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Alpinestars Venture Riding Jacket — jackets & hi-vis with N/A lithium power and N/A range.',
    description: 'The Alpinestars Venture Riding Jacket is part of ALLIED\'s authorized Alpinestars jackets & hi-vis range, featuring n/a, n/a, and a top speed of waterproof/reflective rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/765/800/600'],
    specs: {
      voltage: 'N/A (riding apparel)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Waterproof/reflective rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.4-0.8 kg',
      warranty: '1 Year Manufacturing Defects'
    },
    features: [
      'Alpinestars genuine authorized stock, inspected prior to Australian dispatch',
      'Jackets & Hi-Vis class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-proviz-reflect360-high-vis-waterproof-jacket',
    slug: 'allied-proviz-reflect360-high-vis-waterproof-jacket',
    name: 'Proviz REFLECT360 High-Vis Waterproof Jacket',
    price: 199,
    category: 'safety-security-carry',
    subcategory: 'jackets-hi-vis',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Proviz REFLECT360 High-Vis Waterproof Jacket — jackets & hi-vis with N/A lithium power and N/A range.',
    description: 'The Proviz REFLECT360 High-Vis Waterproof Jacket is part of ALLIED\'s authorized Proviz jackets & hi-vis range, featuring n/a, n/a, and a top speed of waterproof/reflective rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/852/800/600'],
    specs: {
      voltage: 'N/A (riding apparel)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Waterproof/reflective rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.4-0.8 kg',
      warranty: '1 Year Manufacturing Defects'
    },
    features: [
      'Proviz genuine authorized stock, inspected prior to Australian dispatch',
      'Jackets & Hi-Vis class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kryptonite-evolution-standard-u-lock',
    slug: 'allied-kryptonite-evolution-standard-u-lock',
    name: 'Kryptonite Evolution Standard U-Lock',
    price: 169,
    category: 'safety-security-carry',
    subcategory: 'u-d-locks',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Kryptonite Evolution Standard U-Lock — u-locks & d-locks with N/A lithium power and N/A range.',
    description: 'The Kryptonite Evolution Standard U-Lock is part of ALLIED\'s authorized Kryptonite u-locks & d-locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/439/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.7-1.8 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Kryptonite genuine authorized stock, inspected prior to Australian dispatch',
      'U-Locks & D-Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-abus-granit-x-plus-540-u-lock',
    slug: 'allied-abus-granit-x-plus-540-u-lock',
    name: 'Abus Granit X-Plus 540 U-Lock',
    price: 220,
    category: 'safety-security-carry',
    subcategory: 'u-d-locks',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Abus Granit X-Plus 540 U-Lock — u-locks & d-locks with N/A lithium power and N/A range.',
    description: 'The Abus Granit X-Plus 540 U-Lock is part of ALLIED\'s authorized Abus u-locks & d-locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/284/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.7-1.8 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Abus genuine authorized stock, inspected prior to Australian dispatch',
      'U-Locks & D-Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-hiplok-d1000-anti-angle-grinder-u-lock',
    slug: 'allied-hiplok-d1000-anti-angle-grinder-u-lock',
    name: 'Hiplok D1000 Anti-Angle Grinder U-Lock',
    price: 499,
    category: 'safety-security-carry',
    subcategory: 'u-d-locks',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Hiplok D1000 Anti-Angle Grinder U-Lock — u-locks & d-locks with N/A lithium power and N/A range.',
    description: 'The Hiplok D1000 Anti-Angle Grinder U-Lock is part of ALLIED\'s authorized Hiplok u-locks & d-locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/203/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.7-1.8 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Hiplok genuine authorized stock, inspected prior to Australian dispatch',
      'U-Locks & D-Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kryptonite-evolution-mini-7-with-cable',
    slug: 'allied-kryptonite-evolution-mini-7-with-cable',
    name: 'Kryptonite Evolution Mini-7 with Cable',
    price: 149,
    category: 'safety-security-carry',
    subcategory: 'u-d-locks',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Kryptonite Evolution Mini-7 with Cable — u-locks & d-locks with N/A lithium power and N/A range.',
    description: 'The Kryptonite Evolution Mini-7 with Cable is part of ALLIED\'s authorized Kryptonite u-locks & d-locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/102/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.7-1.8 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Kryptonite genuine authorized stock, inspected prior to Australian dispatch',
      'U-Locks & D-Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-hiplok-dx-d-lock-with-2m-cable',
    slug: 'allied-hiplok-dx-d-lock-with-2m-cable',
    name: 'Hiplok DX D-Lock with 2m Cable',
    price: 135,
    category: 'safety-security-carry',
    subcategory: 'u-d-locks',
    featured: false,
    shortDescription: 'Hiplok DX D-Lock with 2m Cable — u-locks & d-locks with N/A lithium power and N/A range.',
    description: 'The Hiplok DX D-Lock with 2m Cable is part of ALLIED\'s authorized Hiplok u-locks & d-locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/157/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.7-1.8 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Hiplok genuine authorized stock, inspected prior to Australian dispatch',
      'U-Locks & D-Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-abus-402-u-lock-230mm',
    slug: 'allied-abus-402-u-lock-230mm',
    name: 'Abus 402 U-Lock 230mm',
    price: 75,
    category: 'safety-security-carry',
    subcategory: 'u-d-locks',
    featured: false,
    shortDescription: 'Abus 402 U-Lock 230mm — u-locks & d-locks with N/A lithium power and N/A range.',
    description: 'The Abus 402 U-Lock 230mm is part of ALLIED\'s authorized Abus u-locks & d-locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/863/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.7-1.8 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Abus genuine authorized stock, inspected prior to Australian dispatch',
      'U-Locks & D-Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kryptonite-kryptolok-series-2-mini-7-u-lock',
    slug: 'allied-kryptonite-kryptolok-series-2-mini-7-u-lock',
    name: 'Kryptonite KryptoLok Series 2 Mini-7 U-Lock',
    price: 98,
    category: 'safety-security-carry',
    subcategory: 'u-d-locks',
    featured: false,
    shortDescription: 'Kryptonite KryptoLok Series 2 Mini-7 U-Lock — u-locks & d-locks with N/A lithium power and N/A range.',
    description: 'The Kryptonite KryptoLok Series 2 Mini-7 U-Lock is part of ALLIED\'s authorized Kryptonite u-locks & d-locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/664/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.7-1.8 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Kryptonite genuine authorized stock, inspected prior to Australian dispatch',
      'U-Locks & D-Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kryptonite-kryptolok-combination-u-lock',
    slug: 'allied-kryptonite-kryptolok-combination-u-lock',
    name: 'Kryptonite KryptoLok Combination U-Lock',
    price: 89,
    category: 'safety-security-carry',
    subcategory: 'u-d-locks',
    featured: false,
    shortDescription: 'Kryptonite KryptoLok Combination U-Lock — u-locks & d-locks with N/A lithium power and N/A range.',
    description: 'The Kryptonite KryptoLok Combination U-Lock is part of ALLIED\'s authorized Kryptonite u-locks & d-locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/941/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.7-1.8 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Kryptonite genuine authorized stock, inspected prior to Australian dispatch',
      'U-Locks & D-Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-abus-bordo-granit-xplus-6500-folding-lock',
    slug: 'allied-abus-bordo-granit-xplus-6500-folding-lock',
    name: 'Abus Bordo Granit XPlus 6500 Folding Lock',
    price: 249,
    category: 'safety-security-carry',
    subcategory: 'folding-locks',
    badge: 'Premium',
    featured: false,
    shortDescription: 'Abus Bordo Granit XPlus 6500 Folding Lock — folding locks with N/A lithium power and N/A range.',
    description: 'The Abus Bordo Granit XPlus 6500 Folding Lock is part of ALLIED\'s authorized Abus folding locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/285/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.6-1.1 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Abus genuine authorized stock, inspected prior to Australian dispatch',
      'Folding Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-hiplok-switch-folding-lock',
    slug: 'allied-hiplok-switch-folding-lock',
    name: 'Hiplok Switch Folding Lock',
    price: 115,
    category: 'safety-security-carry',
    subcategory: 'folding-locks',
    featured: false,
    shortDescription: 'Hiplok Switch Folding Lock — folding locks with N/A lithium power and N/A range.',
    description: 'The Hiplok Switch Folding Lock is part of ALLIED\'s authorized Hiplok folding locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/890/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.6-1.1 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Hiplok genuine authorized stock, inspected prior to Australian dispatch',
      'Folding Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-abus-bordo-lite-6055-folding-lock-60cm',
    slug: 'allied-abus-bordo-lite-6055-folding-lock-60cm',
    name: 'Abus Bordo Lite 6055 Folding Lock 60cm',
    price: 89,
    category: 'safety-security-carry',
    subcategory: 'folding-locks',
    featured: false,
    shortDescription: 'Abus Bordo Lite 6055 Folding Lock 60cm — folding locks with N/A lithium power and N/A range.',
    description: 'The Abus Bordo Lite 6055 Folding Lock 60cm is part of ALLIED\'s authorized Abus folding locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/653/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.6-1.1 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Abus genuine authorized stock, inspected prior to Australian dispatch',
      'Folding Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kryptonite-kryptolok-685-folding-lock-85cm',
    slug: 'allied-kryptonite-kryptolok-685-folding-lock-85cm',
    name: 'Kryptonite KryptoLok 685 Folding Lock 85cm',
    price: 115,
    category: 'safety-security-carry',
    subcategory: 'folding-locks',
    featured: false,
    shortDescription: 'Kryptonite KryptoLok 685 Folding Lock 85cm — folding locks with N/A lithium power and N/A range.',
    description: 'The Kryptonite KryptoLok 685 Folding Lock 85cm is part of ALLIED\'s authorized Kryptonite folding locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/587/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.6-1.1 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Kryptonite genuine authorized stock, inspected prior to Australian dispatch',
      'Folding Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-abus-bordo-u-grip-5700-key-lock-80cm',
    slug: 'allied-abus-bordo-u-grip-5700-key-lock-80cm',
    name: 'Abus Bordo U-Grip 5700 Key Lock 80cm',
    price: 115,
    category: 'safety-security-carry',
    subcategory: 'folding-locks',
    featured: false,
    shortDescription: 'Abus Bordo U-Grip 5700 Key Lock 80cm — folding locks with N/A lithium power and N/A range.',
    description: 'The Abus Bordo U-Grip 5700 Key Lock 80cm is part of ALLIED\'s authorized Abus folding locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/890/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.6-1.1 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Abus genuine authorized stock, inspected prior to Australian dispatch',
      'Folding Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-hiplok-gold-chain-lock',
    slug: 'allied-hiplok-gold-chain-lock',
    name: 'Hiplok Gold Chain Lock',
    price: 199,
    category: 'safety-security-carry',
    subcategory: 'chain-locks',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Hiplok Gold Chain Lock — chain locks with N/A lithium power and N/A range.',
    description: 'The Hiplok Gold Chain Lock is part of ALLIED\'s authorized Hiplok chain locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/795/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '1-2.5 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Hiplok genuine authorized stock, inspected prior to Australian dispatch',
      'Chain Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-kryptonite-new-york-legend-1515-chain-lock',
    slug: 'allied-kryptonite-new-york-legend-1515-chain-lock',
    name: 'Kryptonite New York Legend 1515 Chain Lock',
    price: 299,
    category: 'safety-security-carry',
    subcategory: 'chain-locks',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Kryptonite New York Legend 1515 Chain Lock — chain locks with N/A lithium power and N/A range.',
    description: 'The Kryptonite New York Legend 1515 Chain Lock is part of ALLIED\'s authorized Kryptonite chain locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/880/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '1-2.5 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Kryptonite genuine authorized stock, inspected prior to Australian dispatch',
      'Chain Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-hiplok-lite-wearable-chain-lock-75cm',
    slug: 'allied-hiplok-lite-wearable-chain-lock-75cm',
    name: 'Hiplok Lite Wearable Chain Lock 75cm',
    price: 100,
    category: 'safety-security-carry',
    subcategory: 'chain-locks',
    featured: false,
    shortDescription: 'Hiplok Lite Wearable Chain Lock 75cm — chain locks with N/A lithium power and N/A range.',
    description: 'The Hiplok Lite Wearable Chain Lock 75cm is part of ALLIED\'s authorized Hiplok chain locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/222/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '1-2.5 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Hiplok genuine authorized stock, inspected prior to Australian dispatch',
      'Chain Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-hiplok-original-chain-lock-85cm',
    slug: 'allied-hiplok-original-chain-lock-85cm',
    name: 'Hiplok Original Chain Lock 85cm',
    price: 140,
    category: 'safety-security-carry',
    subcategory: 'chain-locks',
    featured: false,
    shortDescription: 'Hiplok Original Chain Lock 85cm — chain locks with N/A lithium power and N/A range.',
    description: 'The Hiplok Original Chain Lock 85cm is part of ALLIED\'s authorized Hiplok chain locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/261/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '1-2.5 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Hiplok genuine authorized stock, inspected prior to Australian dispatch',
      'Chain Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-abus-steel-o-chain-5805-key-lock-75cm',
    slug: 'allied-abus-steel-o-chain-5805-key-lock-75cm',
    name: 'Abus Steel-O-Chain 5805 Key Lock 75cm',
    price: 55,
    category: 'safety-security-carry',
    subcategory: 'chain-locks',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Abus Steel-O-Chain 5805 Key Lock 75cm — chain locks with N/A lithium power and N/A range.',
    description: 'The Abus Steel-O-Chain 5805 Key Lock 75cm is part of ALLIED\'s authorized Abus chain locks range, featuring n/a, n/a, and a top speed of sold secure / art security rated. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/212/800/600'],
    specs: {
      voltage: 'N/A (mechanical security)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Sold Secure / ART security rated',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '1-2.5 kg',
      warranty: '1-2 Years / Anti-Theft Guarantee (model dependent)'
    },
    features: [
      'Abus genuine authorized stock, inspected prior to Australian dispatch',
      'Chain Locks class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-rixen-kaul-front-handlebar-basket',
    slug: 'allied-rixen-kaul-front-handlebar-basket',
    name: 'Rixen & Kaul Front Handlebar Basket',
    price: 149,
    category: 'safety-security-carry',
    subcategory: 'racks-baskets',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Rixen & Kaul Front Handlebar Basket — racks & baskets with N/A lithium power and N/A range.',
    description: 'The Rixen & Kaul Front Handlebar Basket is part of ALLIED\'s authorized Rixen & Kaul racks & baskets range, featuring n/a, n/a, and a top speed of n/a. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/788/800/600'],
    specs: {
      voltage: 'N/A (mechanical accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: '9-25 kg max rack/basket load',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.4-1.2 kg',
      warranty: '1 Year Manufacturing Defects'
    },
    features: [
      'Rixen & Kaul genuine authorized stock, inspected prior to Australian dispatch',
      'Racks & Baskets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-blackburn-outpost-front-cargo-rack',
    slug: 'allied-blackburn-outpost-front-cargo-rack',
    name: 'Blackburn Outpost Front Cargo Rack',
    price: 159,
    category: 'safety-security-carry',
    subcategory: 'racks-baskets',
    badge: 'New Release',
    featured: false,
    shortDescription: 'Blackburn Outpost Front Cargo Rack — racks & baskets with N/A lithium power and N/A range.',
    description: 'The Blackburn Outpost Front Cargo Rack is part of ALLIED\'s authorized Blackburn racks & baskets range, featuring n/a, n/a, and a top speed of n/a. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/799/800/600'],
    specs: {
      voltage: 'N/A (mechanical accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: '9-25 kg max rack/basket load',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.4-1.2 kg',
      warranty: '1 Year Manufacturing Defects'
    },
    features: [
      'Blackburn genuine authorized stock, inspected prior to Australian dispatch',
      'Racks & Baskets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-thule-pack-n-pedal-tour-pannier-rack',
    slug: 'allied-thule-pack-n-pedal-tour-pannier-rack',
    name: 'Thule Pack n Pedal Tour Pannier Rack',
    price: 199,
    category: 'safety-security-carry',
    subcategory: 'racks-baskets',
    featured: false,
    shortDescription: 'Thule Pack n Pedal Tour Pannier Rack — racks & baskets with N/A lithium power and N/A range.',
    description: 'The Thule Pack n Pedal Tour Pannier Rack is part of ALLIED\'s authorized Thule racks & baskets range, featuring n/a, n/a, and a top speed of n/a. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/385/800/600'],
    specs: {
      voltage: 'N/A (mechanical accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: '9-25 kg max rack/basket load',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.4-1.2 kg',
      warranty: '1 Year Manufacturing Defects'
    },
    features: [
      'Thule genuine authorized stock, inspected prior to Australian dispatch',
      'Racks & Baskets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-topeak-explorer-tubular-rear-rack',
    slug: 'allied-topeak-explorer-tubular-rear-rack',
    name: 'Topeak Explorer Tubular Rear Rack',
    price: 50,
    category: 'safety-security-carry',
    subcategory: 'racks-baskets',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Topeak Explorer Tubular Rear Rack — racks & baskets with N/A lithium power and N/A range.',
    description: 'The Topeak Explorer Tubular Rear Rack is part of ALLIED\'s authorized Topeak racks & baskets range, featuring n/a, n/a, and a top speed of n/a. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/880/800/600'],
    specs: {
      voltage: 'N/A (mechanical accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: '9-25 kg max rack/basket load',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.4-1.2 kg',
      warranty: '1 Year Manufacturing Defects'
    },
    features: [
      'Topeak genuine authorized stock, inspected prior to Australian dispatch',
      'Racks & Baskets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-topeak-explorer-29er-pannier-rack-non-disc',
    slug: 'allied-topeak-explorer-29er-pannier-rack-non-disc',
    name: 'Topeak Explorer 29er Pannier Rack (Non-Disc)',
    price: 75,
    category: 'safety-security-carry',
    subcategory: 'racks-baskets',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Topeak Explorer 29er Pannier Rack (Non-Disc) — racks & baskets with N/A lithium power and N/A range.',
    description: 'The Topeak Explorer 29er Pannier Rack (Non-Disc) is part of ALLIED\'s authorized Topeak racks & baskets range, featuring n/a, n/a, and a top speed of n/a. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/211/800/600'],
    specs: {
      voltage: 'N/A (mechanical accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: '9-25 kg max rack/basket load',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.4-1.2 kg',
      warranty: '1 Year Manufacturing Defects'
    },
    features: [
      'Topeak genuine authorized stock, inspected prior to Australian dispatch',
      'Racks & Baskets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-topeak-explorer-2-0-rack-with-disc-mount',
    slug: 'allied-topeak-explorer-2-0-rack-with-disc-mount',
    name: 'Topeak Explorer 2.0 Rack with Disc Mount',
    price: 80,
    category: 'safety-security-carry',
    subcategory: 'racks-baskets',
    badge: 'Sale',
    featured: false,
    shortDescription: 'Topeak Explorer 2.0 Rack with Disc Mount — racks & baskets with N/A lithium power and N/A range.',
    description: 'The Topeak Explorer 2.0 Rack with Disc Mount is part of ALLIED\'s authorized Topeak racks & baskets range, featuring n/a, n/a, and a top speed of n/a. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/167/800/600'],
    specs: {
      voltage: 'N/A (mechanical accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: '9-25 kg max rack/basket load',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.4-1.2 kg',
      warranty: '1 Year Manufacturing Defects'
    },
    features: [
      'Topeak genuine authorized stock, inspected prior to Australian dispatch',
      'Racks & Baskets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-topeak-uni-supertourist-2-0-rack-with-disc-mount',
    slug: 'allied-topeak-uni-supertourist-2-0-rack-with-disc-mount',
    name: 'Topeak Uni Supertourist 2.0 Rack with Disc Mount',
    price: 89,
    category: 'safety-security-carry',
    subcategory: 'racks-baskets',
    featured: false,
    shortDescription: 'Topeak Uni Supertourist 2.0 Rack with Disc Mount — racks & baskets with N/A lithium power and N/A range.',
    description: 'The Topeak Uni Supertourist 2.0 Rack with Disc Mount is part of ALLIED\'s authorized Topeak racks & baskets range, featuring n/a, n/a, and a top speed of n/a. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/834/800/600'],
    specs: {
      voltage: 'N/A (mechanical accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'N/A',
      payloadCapacity: '9-25 kg max rack/basket load',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.4-1.2 kg',
      warranty: '1 Year Manufacturing Defects'
    },
    features: [
      'Topeak genuine authorized stock, inspected prior to Australian dispatch',
      'Racks & Baskets class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ortlieb-back-roller-classic-waterproof-panniers-40l',
    slug: 'allied-ortlieb-back-roller-classic-waterproof-panniers-40l',
    name: 'Ortlieb Back-Roller Classic Waterproof Panniers 40L',
    price: 199,
    category: 'safety-security-carry',
    subcategory: 'panniers-bags',
    badge: 'Popular',
    featured: false,
    shortDescription: 'Ortlieb Back-Roller Classic Waterproof Panniers 40L — panniers & bags with N/A lithium power and N/A range.',
    description: 'The Ortlieb Back-Roller Classic Waterproof Panniers 40L is part of ALLIED\'s authorized Ortlieb panniers & bags range, featuring n/a, n/a, and a top speed of waterproof rated (model dependent). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/884/800/600'],
    specs: {
      voltage: 'N/A (carry accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Waterproof rated (model dependent)',
      payloadCapacity: '15-25 L / up to 12 kg load',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.5-1.5 kg',
      warranty: '1-5 Years Manufacturing Defects (model dependent)'
    },
    features: [
      'Ortlieb genuine authorized stock, inspected prior to Australian dispatch',
      'Panniers & Bags class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-topeak-drybag-20l-single-pannier',
    slug: 'allied-topeak-drybag-20l-single-pannier',
    name: 'Topeak DryBag 20L Single Pannier',
    price: 119,
    category: 'safety-security-carry',
    subcategory: 'panniers-bags',
    featured: false,
    shortDescription: 'Topeak DryBag 20L Single Pannier — panniers & bags with N/A lithium power and N/A range.',
    description: 'The Topeak DryBag 20L Single Pannier is part of ALLIED\'s authorized Topeak panniers & bags range, featuring n/a, n/a, and a top speed of waterproof rated (model dependent). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/343/800/600'],
    specs: {
      voltage: 'N/A (carry accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Waterproof rated (model dependent)',
      payloadCapacity: '15-25 L / up to 12 kg load',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.5-1.5 kg',
      warranty: '1-5 Years Manufacturing Defects (model dependent)'
    },
    features: [
      'Topeak genuine authorized stock, inspected prior to Australian dispatch',
      'Panniers & Bags class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-ortlieb-back-roller-plus-ql2-1-pannier-pair',
    slug: 'allied-ortlieb-back-roller-plus-ql2-1-pannier-pair',
    name: 'Ortlieb Back-Roller Plus QL2.1 Pannier Pair',
    price: 230,
    category: 'safety-security-carry',
    subcategory: 'panniers-bags',
    featured: false,
    shortDescription: 'Ortlieb Back-Roller Plus QL2.1 Pannier Pair — panniers & bags with N/A lithium power and N/A range.',
    description: 'The Ortlieb Back-Roller Plus QL2.1 Pannier Pair is part of ALLIED\'s authorized Ortlieb panniers & bags range, featuring n/a, n/a, and a top speed of waterproof rated (model dependent). Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/224/800/600'],
    specs: {
      voltage: 'N/A (carry accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Waterproof rated (model dependent)',
      payloadCapacity: '15-25 L / up to 12 kg load',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.5-1.5 kg',
      warranty: '1-5 Years Manufacturing Defects (model dependent)'
    },
    features: [
      'Ortlieb genuine authorized stock, inspected prior to Australian dispatch',
      'Panniers & Bags class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-thule-yepp-nexxt-maxi-child-seat',
    slug: 'allied-thule-yepp-nexxt-maxi-child-seat',
    name: 'Thule Yepp Nexxt Maxi Child Seat',
    price: 279,
    category: 'safety-security-carry',
    subcategory: 'child-seats',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Thule Yepp Nexxt Maxi Child Seat — child seats with N/A lithium power and N/A range.',
    description: 'The Thule Yepp Nexxt Maxi Child Seat is part of ALLIED\'s authorized Thule child seats range, featuring n/a, n/a, and a top speed of as/nzs 1754 certified. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/457/800/600'],
    specs: {
      voltage: 'N/A (safety accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'AS/NZS 1754 certified',
      payloadCapacity: '22 kg max child weight',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '2-5 Years Manufacturing Defects'
    },
    features: [
      'Thule genuine authorized stock, inspected prior to Australian dispatch',
      'Child Seats class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-thule-yepp-maxi-frame-mount-child-seat',
    slug: 'allied-thule-yepp-maxi-frame-mount-child-seat',
    name: 'Thule Yepp Maxi Frame Mount Child Seat',
    price: 349,
    category: 'safety-security-carry',
    subcategory: 'child-seats',
    badge: 'Best Seller',
    featured: false,
    shortDescription: 'Thule Yepp Maxi Frame Mount Child Seat — child seats with N/A lithium power and N/A range.',
    description: 'The Thule Yepp Maxi Frame Mount Child Seat is part of ALLIED\'s authorized Thule child seats range, featuring n/a, n/a, and a top speed of as/nzs 1754 certified. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/996/800/600'],
    specs: {
      voltage: 'N/A (safety accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'AS/NZS 1754 certified',
      payloadCapacity: '22 kg max child weight',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '2.5-4 kg',
      warranty: '2-5 Years Manufacturing Defects'
    },
    features: [
      'Thule genuine authorized stock, inspected prior to Australian dispatch',
      'Child Seats class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-quad-lock-handlebar-mount-pro-kit',
    slug: 'allied-quad-lock-handlebar-mount-pro-kit',
    name: 'Quad Lock Handlebar Mount Pro Kit',
    price: 89,
    category: 'safety-security-carry',
    subcategory: 'phone-mounts',
    badge: 'Best Value',
    featured: false,
    shortDescription: 'Quad Lock Handlebar Mount Pro Kit — phone mounts with N/A lithium power and N/A range.',
    description: 'The Quad Lock Handlebar Mount Pro Kit is part of ALLIED\'s authorized Quad Lock phone mounts range, featuring n/a, n/a, and a top speed of vibration-dampened mount. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/553/800/600'],
    specs: {
      voltage: 'N/A (mounting accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Vibration-dampened mount',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.03-0.15 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Quad Lock genuine authorized stock, inspected prior to Australian dispatch',
      'Phone Mounts class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-bosch-smartphonegrip-smart-system-mount',
    slug: 'allied-bosch-smartphonegrip-smart-system-mount',
    name: 'Bosch SmartphoneGrip Smart System Mount',
    price: 119,
    category: 'safety-security-carry',
    subcategory: 'phone-mounts',
    featured: false,
    shortDescription: 'Bosch SmartphoneGrip Smart System Mount — phone mounts. Trek Allant+ 5 and 22 more.',
    description: 'The Bosch SmartphoneGrip Smart System Mount is a genuine ALLIED-stocked phone mounts component. Trek Allant+ 5 and 22 more. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/199/800/600'],
    specs: {
      voltage: 'N/A (mounting accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Vibration-dampened mount',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.03-0.15 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Bosch genuine authorized stock, inspected prior to Australian dispatch',
      'Trek Allant+ 5 and 22 more',
      'Phone Mounts compatible component',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-quad-lock-bike-mount-pro',
    slug: 'allied-quad-lock-bike-mount-pro',
    name: 'Quad Lock Bike Mount Pro',
    price: 35,
    category: 'safety-security-carry',
    subcategory: 'phone-mounts',
    featured: false,
    shortDescription: 'Quad Lock Bike Mount Pro — phone mounts with N/A lithium power and N/A range.',
    description: 'The Quad Lock Bike Mount Pro is part of ALLIED\'s authorized Quad Lock phone mounts range, featuring n/a, n/a, and a top speed of vibration-dampened mount. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/269/800/600'],
    specs: {
      voltage: 'N/A (mounting accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Vibration-dampened mount',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.03-0.15 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Quad Lock genuine authorized stock, inspected prior to Australian dispatch',
      'Phone Mounts class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-quad-lock-stem-handlebar-bike-mount',
    slug: 'allied-quad-lock-stem-handlebar-bike-mount',
    name: 'Quad Lock Stem/Handlebar Bike Mount',
    price: 35,
    category: 'safety-security-carry',
    subcategory: 'phone-mounts',
    featured: false,
    shortDescription: 'Quad Lock Stem/Handlebar Bike Mount — phone mounts with N/A lithium power and N/A range.',
    description: 'The Quad Lock Stem/Handlebar Bike Mount is part of ALLIED\'s authorized Quad Lock phone mounts range, featuring n/a, n/a, and a top speed of vibration-dampened mount. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/748/800/600'],
    specs: {
      voltage: 'N/A (mounting accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Vibration-dampened mount',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.03-0.15 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Quad Lock genuine authorized stock, inspected prior to Australian dispatch',
      'Phone Mounts class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-quad-lock-out-front-bike-mount',
    slug: 'allied-quad-lock-out-front-bike-mount',
    name: 'Quad Lock Out Front Bike Mount',
    price: 50,
    category: 'safety-security-carry',
    subcategory: 'phone-mounts',
    featured: false,
    shortDescription: 'Quad Lock Out Front Bike Mount — phone mounts with N/A lithium power and N/A range.',
    description: 'The Quad Lock Out Front Bike Mount is part of ALLIED\'s authorized Quad Lock phone mounts range, featuring n/a, n/a, and a top speed of vibration-dampened mount. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/316/800/600'],
    specs: {
      voltage: 'N/A (mounting accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Vibration-dampened mount',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.03-0.15 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Quad Lock genuine authorized stock, inspected prior to Australian dispatch',
      'Phone Mounts class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  },
  {
    id: 'allied-quad-lock-out-front-mount-pro',
    slug: 'allied-quad-lock-out-front-mount-pro',
    name: 'Quad Lock Out Front Mount Pro',
    price: 75,
    category: 'safety-security-carry',
    subcategory: 'phone-mounts',
    featured: false,
    shortDescription: 'Quad Lock Out Front Mount Pro — phone mounts with N/A lithium power and N/A range.',
    description: 'The Quad Lock Out Front Mount Pro is part of ALLIED\'s authorized Quad Lock phone mounts range, featuring n/a, n/a, and a top speed of vibration-dampened mount. Backed by ALLIED\'s Perth service depot and spare parts warehouse.',
    images: ['https://picsum.photos/id/664/800/600'],
    specs: {
      voltage: 'N/A (mounting accessory)',
      batteryType: 'N/A',
      range: 'N/A',
      topSpeed: 'Vibration-dampened mount',
      payloadCapacity: 'N/A',
      motorPower: 'N/A',
      chargeTime: 'N/A',
      dimensions: 'Varies by model',
      weight: '0.03-0.15 kg',
      warranty: '1-2 Years Manufacturing Defects'
    },
    features: [
      'Quad Lock genuine authorized stock, inspected prior to Australian dispatch',
      'Phone Mounts class — n/a',
      'N/A',
      'Perth depot service & spare parts support'
    ]
  }
];

export const POSTS = [
  {
    slug: 'electric-city-bike-buying-guide-australia',
    title: 'Australian Electric Bike Buying Guide: Byron vs Noosa vs Torquay Comparison',
    excerpt: 'Detailed comparison of step-through, commuter and folding e-bikes to help you choose the right model for urban Australian commuting.',
    category: 'E-Bike Guides',
    date: '2026-09-15',
    readTime: '5 min read',
    image: 'https://picsum.photos/id/1071/800/600'
  },
  {
    slug: 'lithium-battery-care-and-range-extension',
    title: 'How to Extend Your E-Bike Lithium Battery Lifespan & Maximize km Range',
    excerpt: 'Expert maintenance tips on charging cycles, storage temperatures, and pedal-assist optimization for 36V and 48V LG/Samsung lithium battery packs.',
    category: 'Battery Tech',
    date: '2026-08-28',
    readTime: '7 min read',
    image: 'https://picsum.photos/id/1072/800/600'
  },
  {
    slug: 'commercial-cargo-ebike-fleet-economics',
    title: 'Replacing Diesel Utility Carts with Cargo E-Bikes: Fuel & Maintenance ROI',
    excerpt: 'Financial breakdown showing how Australian resorts, universities, and industrial sites save up to $8,500 per year per vehicle with cargo e-bikes.',
    category: 'Fleet Economics',
    date: '2026-07-20',
    readTime: '6 min read',
    image: 'https://picsum.photos/id/1079/800/600'
  }
];

export const FAQ = [
  {
    question: 'Are ALLIED Electric Bikes street legal in Australia?',
    answer: 'Yes! All ALLIED Electric Bikes adhere strictly to Australian EN15194 standards for pedal-assist electric bicycles (Pedelec 250W/350W capped at 25km/h motor assistance), making them 100% road legal without requiring a driver licence or vehicle registration.'
  },
  {
    question: 'What is the range per charge on ALLIED e-bikes?',
    answer: 'Our ALLIED Byron, Noosa, and Torquay models feature high-capacity 36V 15.6Ah LG lithium battery packs delivering up to 70km of pedal-assist range per charge. High-capacity 48V models provide up to 90km.'
  },
  {
    question: 'How does the folding mechanism work on the ALLIED Torquay Folding Bike?',
    answer: 'The Torquay features a heavy-duty 3-step safety latch folding mechanism. The main frame, seat post, and handlebar stem fold down in under 15 seconds into a compact 70cm x 60cm x 45cm package that easily fits in car boots or caravan lockers.'
  },
  {
    question: 'What is the minimum order value and Australian freight delivery time?',
    answer: 'Our minimum commercial order value is $300 AUD inc. GST. Bikes dispatch directly from our Perth depot in heavy protective cartons within 1-2 business days. Express road freight arrives in WA in 2-3 days and Eastern States in 4-6 days.'
  },
  {
    question: 'What warranty is included with ALLIED e-bikes & vehicles?',
    answer: 'We provide a comprehensive 2-Year warranty on frames and brushless motors, and a 1-Year warranty on LG/Samsung lithium battery packs, backed by our Perth service depot and spare parts warehouse.'
  }
];

export const COMPLIANCE = {
  bannedTerms: [],
  requiredFramings: [],
  prohibitedClaims: [],
  ageGate: false,
  ageMinimum: null,
  gdpr: true,
  disclaimer: 'ALLIED ELECTRIC VEHICLES is a registered business division of ALLIED FORKLIFTS PTY LTD (ABN 66 060 256 377). All prices displayed on this site include 10% Australian GST unless stated otherwise. Specifications subject to continuous product improvement.',
};
