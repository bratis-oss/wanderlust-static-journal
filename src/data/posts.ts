
export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  destination: string;
  featured?: boolean;
  readingTime: string;
}

export const posts: Post[] = [
  {
    id: "1",
    title: "Exploring the Hidden Beaches of Bali",
    slug: "hidden-beaches-bali",
    excerpt: "Discover secluded paradises away from the tourist crowds in this Indonesian haven.",
    content: `
      <p>Bali is known for its stunning beaches, but the most popular ones can get incredibly crowded. If you're looking for a more peaceful experience, there are several hidden beaches that offer the same beautiful scenery without the masses of tourists.</p>

      <h2>Nyang Nyang Beach</h2>
      <p>Located in Uluwatu, Nyang Nyang Beach is one of Bali's most secluded beaches. The journey to reach it involves a steep descent down cliff-side steps, which discourages many visitors. Once you arrive, you'll be rewarded with nearly a kilometer of pristine white sand and crystal-clear waters, often with no one else in sight.</p>

      <h2>Green Bowl Beach</h2>
      <p>Named after the green algae-covered rocks that appear at low tide, Green Bowl Beach is a small paradise in the Ungasan area. The 300+ steps required to reach the beach deter many travelers, making it a perfect spot for those seeking solitude.</p>

      <h2>Gunung Payung Beach</h2>
      <p>This hidden gem in South Kuta requires a 15-minute trek down a steep path, but the effort is worth it. The beach is flanked by impressive limestone cliffs and offers some of the clearest waters for snorkeling in Bali.</p>

      <h2>Tips for Visiting Hidden Beaches</h2>
      <ul>
        <li>Bring plenty of water and snacks as there are usually no vendors</li>
        <li>Pack out all your trash to help preserve these pristine spots</li>
        <li>Check tide times, as some beaches are best visited during low tide</li>
        <li>Wear good footwear for the sometimes challenging access paths</li>
        <li>Bring sun protection, as shade can be limited</li>
      </ul>

      <p>These hidden beaches offer a glimpse of what Bali was like before mass tourism. They provide not just beautiful scenery, but a sense of discovery and connection with nature that's harder to find at the more developed beaches.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    date: "June 12, 2023",
    author: "Maria Garcia",
    destination: "Bali",
    featured: true,
    readingTime: "5 min read"
  },
  {
    id: "2",
    title: "The Ancient Temples of Kyoto",
    slug: "ancient-temples-kyoto",
    excerpt: "Wander through centuries of Japanese history and spirituality in the former imperial capital.",
    content: `
      <p>Kyoto served as Japan's capital and the emperor's residence from 794 until 1868. Today, it's known as the cultural heart of Japan, home to over 1,600 Buddhist temples and 400 Shinto shrines. Each tells a unique story of Japan's rich spiritual and cultural heritage.</p>

      <h2>Fushimi Inari Taisha</h2>
      <p>Famous for its thousands of vermilion torii gates, this Shinto shrine is dedicated to Inari, the god of rice and sake. The gates form a network of trails behind the main shrine buildings that lead into the wooded forest of the sacred Mount Inari.</p>

      <h2>Kinkaku-ji (Golden Pavilion)</h2>
      <p>This Zen Buddhist temple is one of Japan's most iconic landmarks. The top two floors are completely covered in gold leaf, creating a stunning reflection in the surrounding pond. Originally built as a retirement villa for the shogun Ashikaga Yoshimitsu in the 14th century, it was later converted into a temple.</p>

      <h2>Ginkaku-ji (Silver Pavilion)</h2>
      <p>Despite its name, this temple was never covered in silver. Built by the grandson of Yoshimitsu, it was inspired by Kinkaku-ji but represents the more refined, restrained aesthetic that developed in the late Muromachi period.</p>

      <h2>Ryoan-ji</h2>
      <p>Home to Japan's most famous rock garden, this Zen temple creates a space for deep meditation. Fifteen stones are placed in white gravel in such a way that at least one stone is hidden from any viewing angle.</p>

      <h2>Tips for Temple Visits</h2>
      <ul>
        <li>Visit early in the morning to avoid crowds, especially at popular sites</li>
        <li>Dress respectfully, with shoulders and knees covered</li>
        <li>Remove shoes when entering temple buildings</li>
        <li>Speak quietly and be mindful of visitors who may be praying</li>
        <li>Purchase a temple stamp book (goshuin-cho) for collecting unique calligraphy stamps at each temple</li>
      </ul>

      <p>Kyoto's temples aren't just tourist attractions but living places of worship with centuries of history. Approaching them with respect and curiosity will enrich your experience beyond mere sightseeing.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    date: "May 23, 2023",
    author: "James Wilson",
    destination: "Japan",
    featured: true,
    readingTime: "6 min read"
  },
  {
    id: "3",
    title: "A Food Tour Through the Streets of Marrakech",
    slug: "food-tour-marrakech",
    excerpt: "Taste your way through the vibrant flavors of Morocco's most famous city.",
    content: `
      <p>Marrakech is a feast for all the senses, but perhaps most notably for taste. The ancient city's food scene is a delicious blend of Arabic, Andalusian, Berber, and Mediterranean influences that tell the story of Morocco's rich cultural history.</p>

      <h2>Jemaa el-Fnaa Night Market</h2>
      <p>As the sun sets, Marrakech's main square transforms into one of the world's most exciting open-air dining experiences. Dozens of food stalls serve everything from grilled meats to snail soup. Look for stalls popular with locals for the most authentic experience.</p>

      <h2>Tangia - The Bachelor's Dish</h2>
      <p>This uniquely Marrakchi dish consists of meat slow-cooked with preserved lemon, garlic, olive oil, and spices in an earthenware pot. Traditionally, single men would prepare the pot in the morning and leave it with the hammam (bathhouse) attendant to cook in the ashes of the fire that heats the bath water.</p>

      <h2>Tagine Variations</h2>
      <p>No trip to Morocco is complete without sampling tagine, a slow-cooked stew named after the distinctive conical pot it's prepared in. In Marrakech, try the tagine kefta (meatballs with eggs), tagine djaj (chicken with preserved lemon and olives), or tagine mrouzia (lamb with honey and raisins).</p>

      <h2>Moroccan Pastries</h2>
      <p>Influenced by both French and Middle Eastern traditions, Moroccan pastries are works of art. Visit a local patisserie to try favorites like kaab el ghzal ("gazelle horns" filled with almond paste), chebakia (sesame cookies soaked in honey), and briouat (crispy pastry with sweet or savory fillings).</p>

      <h2>Mint Tea Ceremony</h2>
      <p>More than just a beverage, mint tea is central to Moroccan hospitality. The ceremonial preparation involves pouring the tea from a height to create a frothy top, and it's traditionally served three times to guests (the saying goes: "The first glass is as gentle as life, the second is as strong as love, the third is as bitter as death").</p>

      <h2>Food Tour Tips</h2>
      <ul>
        <li>Consider taking a guided food tour on your first day to get oriented</li>
        <li>Eat where locals eat for the most authentic experience</li>
        <li>Always wash hands before meals, as many dishes are eaten with the right hand</li>
        <li>Be adventurous—some of the best dishes may look unfamiliar</li>
        <li>Look for restaurants with high turnover of ingredients for freshness</li>
      </ul>

      <p>The flavors of Marrakech will linger in your memory long after your trip ends, offering a taste of Morocco's rich cultural heritage with every bite.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    date: "April 18, 2023",
    author: "Sofia Ahmed",
    destination: "Morocco",
    readingTime: "7 min read"
  },
  {
    id: "4",
    title: "Hiking the Inca Trail to Machu Picchu",
    slug: "inca-trail-machu-picchu",
    excerpt: "Follow in the footsteps of the ancient Incas on this legendary trek to one of the world's most magnificent sites.",
    content: `
      <p>The classic Inca Trail is a 26-mile (43-kilometer) trek that connects several important Incan archaeological sites, culminating at the legendary citadel of Machu Picchu. More than just a hike, it's a journey through history, diverse ecosystems, and breathtaking Andean landscapes.</p>

      <h2>Preparing for the Trek</h2>
      <p>The Inca Trail requires good physical conditioning due to its high altitude (reaching 4,215 meters at Dead Woman's Pass) and steep sections. Most trekkers spend at least 2-3 days in Cusco before the hike to acclimatize to the altitude. The trail requires permits that must be booked months in advance as they're limited to 500 people per day (including guides and porters).</p>

      <h2>Day 1: Kilometer 82 to Wayllabamba</h2>
      <p>The trek begins at Kilometer 82, where you'll cross the Urubamba River. The first day is relatively gentle, passing through the village of Miskay and visiting the Incan ruins of Llactapata ("high town") before camping at Wayllabamba.</p>

      <h2>Day 2: The Climb to Dead Woman's Pass</h2>
      <p>The most challenging day of the trek involves climbing to the highest point of the trail, Warmiwañusca or Dead Woman's Pass (4,215m). The ascent takes trekkers through changing ecological zones, from the high jungle (cloud forest) to alpine tundra. After crossing the pass, there's a steep descent to the campsite at Pacaymayo.</p>

      <h2>Day 3: The Cloud Forest and Incan Ruins</h2>
      <p>Day three features several archaeological sites, including Runkurakay (a circular lookout post), Sayacmarca (an inaccessible site entered by a steep staircase), and Phuyupatamarca ("town above the clouds"), which offers stunning views of surrounding peaks and the Urubamba River valley below. The day ends at Wiñay Wayna, an impressive terraced site whose name means "forever young" in Quechua.</p>

      <h2>Day 4: Sunrise at the Sun Gate</h2>
      <p>The final day begins very early (often around 3:30 am) to reach Inti Punku (the Sun Gate) for sunrise. This is the moment trekkers have been waiting for—their first view of Machu Picchu, ideally bathed in the golden light of dawn. From here, it's a descent to explore the ancient citadel itself.</p>

      <h2>Trekking Tips</h2>
      <ul>
        <li>Book permits 6+ months in advance during high season (May-September)</li>
        <li>Bring layers for temperatures that range from hot to freezing</li>
        <li>Consider hiring a porter to carry the bulk of your gear</li>
        <li>Pack biodegradable toiletries and practice Leave No Trace principles</li>
        <li>Include a water purification system in your gear</li>
        <li>Bring local currency for tipping guides and porters</li>
      </ul>

      <p>The Inca Trail is more than just the destination of Machu Picchu—it's about experiencing the journey as the Incas did, through ancient stone paths, mountain passes, and cloud forests. For many trekkers, it's a life-changing adventure that connects them to both nature and history in profound ways.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    date: "March 5, 2023",
    author: "Carlos Mendoza",
    destination: "Peru",
    readingTime: "8 min read"
  },
  {
    id: "5",
    title: "Island Hopping in the Greek Cyclades",
    slug: "greek-cyclades-island-hopping",
    excerpt: "Navigate the azure waters of the Aegean Sea to discover the unique character of Greece's most famous island group.",
    content: `
      <p>The Cyclades, with their iconic whitewashed buildings and blue-domed churches set against the deep blue Aegean, embody the classic Greek island fantasy. Yet each island in this archipelago has its own distinct personality, from cosmopolitan hotspots to tranquil escapes.</p>

      <h2>Santorini: The Romantic Icon</h2>
      <p>Famous for its dramatic caldera views and stunning sunsets, Santorini is the postcard image of Greek island beauty. Beyond the popular sunset spot of Oia, explore the ancient ruins of Akrotiri (a Bronze Age settlement preserved by volcanic ash), sample volcanic wines at local vineyards, and swim at the unique colored beaches—red beach, black beach, and white beach—created by the island's volcanic geology.</p>

      <h2>Mykonos: The Cosmopolitan Playground</h2>
      <p>Known for its vibrant nightlife and beautiful beaches, Mykonos attracts celebrities and party-seekers from around the world. But the island offers more than just clubs and beach parties. Wander through the charming, maze-like streets of Mykonos Town (Chora), visit the iconic windmills, and take a day trip to the nearby island of Delos—birthplace of Apollo and Artemis and one of Greece's most important archaeological sites.</p>

      <h2>Naxos: The Natural Wonder</h2>
      <p>The largest Cycladic island offers diverse landscapes, from the highest mountains in the Cyclades to fertile valleys and long, sandy beaches. Naxos is known for its excellent local produce, including potatoes, cheese, and kitron (a citrus liqueur). Don't miss the Portara (the massive marble doorway of an unfinished temple to Apollo) at sunset, the traditional mountain villages of the interior, and the beaches of the western coast, which are perfect for windsurfing and kitesurfing.</p>

      <h2>Paros: The All-Rounder</h2>
      <p>Offering a balance of beautiful beaches, charming villages, good nightlife, and water sports, Paros has something for everyone. Visit the Byzantine "church of 100 doors" (Panagia Ekatontapiliani) in the port town of Parikia, explore the charming narrow streets of Naoussa fishing village, and discover the inland village of Lefkes with its traditional Cycladic architecture and magnificent views.</p>

      <h2>Milos: The Geological Marvel</h2>
      <p>Less visited than its famous neighbors but equally beautiful, Milos is known for its extraordinary volcanic landscape that has created over 70 beaches, each with unique formations and colors. The island is where the Venus de Milo statue was discovered and is home to ancient catacombs. Don't miss the moonscape of Sarakiniko, the colorful fishing village of Klima with boat garages built into the rock, and the extraordinary Papafragas beach nestled between towering white cliffs.</p>

      <h2>Island Hopping Tips</h2>
      <ul>
        <li>The high season (June-August) offers the most frequent ferry connections but also bigger crowds and higher prices</li>
        <li>May and September offer a great balance of good weather, open facilities, and fewer crowds</li>
        <li>Book accommodations well in advance for July and August</li>
        <li>Check ferry schedules carefully as they can change with weather conditions</li>
        <li>Consider staying a minimum of 3 nights on each island to truly experience it</li>
        <li>For more authentic experiences, explore the smaller, less visited islands like Folegandros, Sifnos, or Amorgos</li>
      </ul>

      <p>The Cyclades create a perfect setting for a Greek island adventure, with each island adding its own chapter to your story. Whether you're seeking romance, adventure, relaxation, history, or gastronomy, there's an island waiting to welcome you.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    date: "February 19, 2023",
    author: "Elena Papadopoulos",
    destination: "Greece",
    featured: true,
    readingTime: "9 min read"
  }
];

// Utility function to get a post by slug
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

// Utility function to get featured posts
export function getFeaturedPosts(): Post[] {
  return posts.filter(post => post.featured);
}

// Utility function to get latest posts
export function getLatestPosts(limit: number = 3): Post[] {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// Utility function to get posts by destination
export function getPostsByDestination(destination: string): Post[] {
  return posts.filter(post => 
    post.destination.toLowerCase() === destination.toLowerCase()
  );
}

// Get unique destinations
export function getUniqueDestinations(): string[] {
  const destinations = posts.map(post => post.destination);
  return [...new Set(destinations)];
}
