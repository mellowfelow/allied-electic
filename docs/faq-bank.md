# FAQ Bank — ALLIED ELECTRIC VEHICLES

**Status note:** Same caveat as `blog-plan.md` — this FAQ bank is built from the question-intent
keywords that met the Vol 50 floor during this session's category research (incidental harvest,
not a dedicated question-keyword pass). It's a real, usable starter bank for the homepage and a
dedicated FAQ page, but a follow-up session should expand it, especially for categories that
produced zero question-intent keywords here (Scooters, Skateboards, Quad Bikes, Water Sports,
Batteries & Parts, Safety & Carry).

---

## Homepage FAQ (6–8 questions)

Highest-impact questions only, prioritising legality, buying and product-type basics — the
questions most likely to stop a first-time buyer from converting.

**1. Are electric bikes legal in Australia?**
Yes — as long as they meet the national power-assisted pedal cycle standard: a continuous motor
rating of 250W and pedal-assist that cuts out at 25km/h. Throttle-only e-bikes and anything above
that power limit may be classed as a motor vehicle and need registration. Every e-bike we stock
is clearly labelled with its legal status. [Shop electric bikes →]

**2. How much does an electric bike cost in Australia?**
Entry-level commuter e-bikes start under $1,500, with mid-range folding and commuter models
typically $1,500–$3,000, and premium cargo, mountain or fat-tyre e-bikes running $3,000+. Battery
capacity and motor type (hub vs mid-drive) are the biggest price drivers. [See today's range →]

**3. What is the difference between throttle and pedal-assist e-bikes?**
Pedal-assist e-bikes boost your own pedalling effort and only work while you're pedalling.
Throttle e-bikes can move without pedalling at all, like a scooter. Most road-legal e-bikes in
Australia are pedal-assist only, or a hybrid with a very low-speed throttle.

**4. Do I need a licence to ride a mobility scooter in Australia?**
No licence is required for a standard mobility scooter in most states, but there are speed and
footpath-use rules that vary by state and by scooter class. [Read our full guide →]

**5. What's the difference between an e-bike and an electric motorbike?**
An e-bike (250W, 25km/h assist) is legally a bicycle and needs no registration. An electric
motorbike or dirt bike typically has far more power and may need to be registered and ridden
off-road only, depending on the model and your state's rules.

**6. How long does an electric bike battery last?**
Most of our e-bike batteries are rated for 500+ full charge cycles before capacity noticeably
drops — roughly 2–4 years of regular use — and all our batteries are sold separately as
replacements if yours wears out. [Shop e-bike batteries →]

**7. Can I buy replacement parts and batteries separately?**
Yes — our Batteries, Parts & Kits range covers batteries, chargers, tyres, brake pads and
conversion kits for e-bikes, scooters, skateboards and kids' EVs. [Shop parts & kits →]

---

## FAQ Page (full bank, grouped by theme)

### Legal & Safety

**Are electric bikes legal in Australia?**
Yes, under the national power-assisted pedal cycle rules: 250W continuous motor power and
pedal-assist cutting out at 25km/h. E-bikes meeting this standard are treated as ordinary
bicycles — no licence, registration or helmet-specific e-bike law beyond your state's normal
bicycle helmet requirement. Exceed those limits and the vehicle may legally be a motorbike
instead. [See our full state-by-state law guide →]
*Speakable candidate: yes, flag this answer for voice/AI assistant readability.*

**What are the rules for mobility scooters in Australia?**
Mobility scooter rules vary by state but generally: no licence is needed, scooters are usually
limited to around 10km/h on footpaths, and riders must give way to pedestrians. Some states
classify faster "heavy duty" scooters differently. Check your state's transport authority for
exact speed and footpath rules before buying a heavy-duty model. [Shop mobility scooters →]

**Do electric bike laws differ by state in Queensland, NSW, Victoria and WA?**
The 250W/25km/h federal standard applies nationally, but enforcement, footpath access and
registration thresholds for higher-powered models can differ by state. [Read the full guide →]

### Buying & Pricing

**How much are e-bikes in Australia?**
Budget commuter e-bikes start under $1,500; mid-range folding, commuter and fat-tyre models
run $1,500–$3,000; premium mountain and cargo e-bikes are typically $3,000+. Battery size and
motor placement (hub vs mid-drive) are the main price factors. [See today's range →]

**What is an e-bike and how does it work?**
An e-bike is a bicycle with a built-in electric motor and battery that assists your pedalling.
Most legal e-bikes use "pedal-assist" — the motor only engages while you're pedalling, boosting
your effort rather than replacing it. [Read our beginner's guide →]

**What's the difference between throttle and pedal-assist?**
Throttle e-bikes can move under motor power alone, like a scooter. Pedal-assist e-bikes only
provide power while you're actively pedalling. Most road-legal Australian e-bikes are
pedal-assist, sometimes with a low-speed throttle for starting off.

### Parts, Batteries & Maintenance

**How long do electric bike batteries last?**
Most e-bike batteries hold meaningful charge capacity for 500+ full charge cycles — typically
2–4 years of regular commuting use — before a replacement is worth considering.
[Shop replacement batteries →]

**Can I buy a replacement battery or charger separately?**
Yes. Our Batteries, Parts & Kits range stocks batteries and chargers for e-bikes, electric
scooters, skateboards, mobility scooters and kids' dirt bikes, plus tyres, brake pads, and
mid-drive/hub-motor conversion kits. [Shop batteries & parts →]

---

## JSON-LD FAQPage schema (homepage block)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are electric bikes legal in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — as long as they meet the national power-assisted pedal cycle standard: a continuous motor rating of 250W and pedal-assist that cuts out at 25km/h. Throttle-only e-bikes and anything above that power limit may be classed as a motor vehicle and need registration."
      }
    },
    {
      "@type": "Question",
      "name": "How much does an electric bike cost in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Entry-level commuter e-bikes start under $1,500, with mid-range folding and commuter models typically $1,500–$3,000, and premium cargo, mountain or fat-tyre e-bikes running $3,000+. Battery capacity and motor type are the biggest price drivers."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between throttle and pedal-assist e-bikes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pedal-assist e-bikes boost your own pedalling effort and only work while you're pedalling. Throttle e-bikes can move without pedalling at all, like a scooter. Most road-legal e-bikes in Australia are pedal-assist only."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need a licence to ride a mobility scooter in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No licence is required for a standard mobility scooter in most states, but speed and footpath-use rules vary by state and by scooter class."
      }
    },
    {
      "@type": "Question",
      "name": "How long does an electric bike battery last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most e-bike batteries are rated for 500+ full charge cycles before capacity noticeably drops — roughly 2 to 4 years of regular use."
      }
    },
    {
      "@type": "Question",
      "name": "Can I buy replacement parts and batteries separately?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes — our Batteries, Parts & Kits range covers batteries, chargers, tyres, brake pads and conversion kits for e-bikes, scooters, skateboards and kids' EVs."
      }
    }
  ]
}
```

**Validate this block with a JSON parser before shipping** (per WebForge non-negotiable rule #4).
