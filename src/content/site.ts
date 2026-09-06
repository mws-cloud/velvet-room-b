export const site = {
  name: "The Velvet Room",
  tagline: "Cocktails, candlelight, and quiet conversation in the heart of Tel Aviv.",
  heroImage:
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=2400&q=80",
  location: {
    street: "14 Lilenblum Street",
    neighborhood: "Neve Tzedek",
    city: "Tel Aviv-Yafo",
    zip: "6513304",
    country: "Israel",
    mapsQuery: "14+Lilenblum+Street+Tel+Aviv",
    parking: "Paid street parking on Lilenblum and Shabazi. Tachana parking 4 min walk.",
    transit: "5 min walk from Allenby light rail. 12 min walk from HaHagana station.",
  },
  contact: {
    phone: "+972-3-555-1234",
    email: "hello@thevelvetroom.bar",
    instagram: "@thevelvetroom_tlv",
  },
  hours: [
    { day: "Sunday – Thursday", time: "18:00 – 01:00" },
    { day: "Friday", time: "17:00 – 02:00" },
    { day: "Saturday", time: "19:00 – 01:00" },
    { day: "Kitchen", time: "Until 23:30 nightly" },
  ],
  policies: [
    {
      title: "Age & ID",
      body: "We serve guests 18 and over only. Please bring a valid government-issued ID. We check ID whenever age is in doubt.",
    },
    {
      title: "Reservations",
      body: "Tables are held for 15 minutes from your booked hour. After that, your seats may be released to the waitlist.",
    },
    {
      title: "Late arrival",
      body: "Arriving late may result in a less welcoming reception and reduced seating options. We do our best to accommodate, but punctuality keeps the room flowing for everyone.",
    },
    {
      title: "Dress & conduct",
      body: "Smart casual. We reserve the right to refuse service to intoxicated or disruptive guests. CCTV is in operation for your safety.",
    },
    {
      title: "Accessibility",
      body: "Step-free entry via the side entrance on Shabazi Lane. Accessible restroom available. Please call ahead for assistance with seating.",
    },
  ],
  reviews: [
    {
      name: "Maya Cohen",
      location: "Ramat Aviv",
      rating: 5,
      text: "The Negroni Sbagliato is unreal and the lighting makes everyone look like they belong in a film. We stayed until closing on a Wednesday — rare for Tel Aviv.",
      date: "March 2026",
    },
    {
      name: "James Richardson",
      location: "Florentin",
      rating: 4.5,
      text: "Proper cocktail craft without the pretension. Bar team remembered our preferences on a second visit. Only wish the booths filled up faster on weekends.",
      date: "February 2026",
    },
    {
      name: "Amir Levi",
      location: "Jaffa",
      rating: 5,
      text: "Best old fashioned I've had south of Rothschild. Intimate room, great music volume — you can actually talk. Reservation is worth it.",
      date: "January 2026",
    },
  ],
  reservationSlots: ["18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"],
  maxGuests: 8,
} as const;
