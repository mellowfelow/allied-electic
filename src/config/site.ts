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
