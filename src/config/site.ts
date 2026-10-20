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
  badge?: 'Best Seller' | 'Popular' | 'Step Through' | 'Folding' | 'Heavy Duty' | 'New Release';
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
    image: 'https://picsum.photos/id/1071/800/600',
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
    image: 'https://picsum.photos/id/1082/800/600',
    subcategories: [
      { slug: 'commuter-electric-scooters', name: 'Commuter E-Scooters', description: 'Lightweight, portable scooters for daily commuting.' },
      { slug: 'long-range-electric-scooters', name: 'Long-Range & Performance E-Scooters', description: 'High-capacity battery and motor scooters for distance and speed.' }
    ]
  },
  {
    slug: 'electric-skateboards',
    name: 'Electric Skateboards',
    description: 'Street, all-terrain, portable and self-balancing electric skateboards.',
    image: 'https://picsum.photos/id/1084/800/600',
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
    image: 'https://picsum.photos/id/1080/800/600',
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
    image: 'https://picsum.photos/id/1074/800/600',
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
    image: 'https://picsum.photos/id/1083/800/600',
    subcategories: [
      { slug: 'travel-mobility-scooters', name: 'Travel & Folding Mobility Scooters', description: 'Lightweight, foldable mobility scooters for travel.' },
      { slug: 'heavy-duty-mobility-scooters', name: 'Heavy-Duty All-Terrain Mobility Scooters', description: 'Robust all-terrain mobility scooters for daily use.' }
    ]
  },
  {
    slug: 'electric-quad-bikes',
    name: 'Electric Quad Bikes & ATVs',
    description: 'Kids, adult and farm/utility electric quad bikes.',
    image: 'https://picsum.photos/id/1075/800/600',
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
    image: 'https://picsum.photos/id/1080/800/600',
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
    image: 'https://picsum.photos/id/1078/800/600',
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
    image: 'https://picsum.photos/id/1076/800/600',
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
