
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
  categories?: string[];
  tags?: string[];
}

// Sample posts for each category
export const posts: Post[] = [
  // Destinos
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
    readingTime: "5 min read",
    categories: ["destinos", "asia"],
    tags: ["playas", "indonesia", "oculto"]
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
    readingTime: "6 min read",
    categories: ["destinos", "asia"],
    tags: ["templos", "cultura", "japon"]
  },
  
  // Escapadas
  {
    id: "3",
    title: "Weekend Getaway: Costa Brava's Hidden Coves",
    slug: "costa-brava-coves",
    excerpt: "Discover the perfect weekend escape along Spain's rugged northeastern coastline.",
    content: `
      <p>Just a short drive from Barcelona, the Costa Brava offers some of Spain's most spectacular coastal scenery. With its rugged cliffs, pine forests, and crystal-clear waters, it's perfect for a weekend escape from city life.</p>

      <h2>Cala Tavallera</h2>
      <p>This hidden cove near Cap de Creus is only accessible by boat or a challenging hour-long hike, ensuring you'll have plenty of space even in high season. The stunning turquoise waters are perfect for snorkeling, and the surrounding rocky landscape provides a dramatic backdrop.</p>

      <h2>Cala S'Alguer</h2>
      <p>This tiny fishing village between Palamós and Calella de Palafrugell features colorful fishermen's huts and wooden boats pulled up on the pebble beach. While not ideal for sunbathing, it offers incredible charm and authenticity rarely found on the Mediterranean coast.</p>

      <h2>Weekend Itinerary</h2>
      <p>Friday evening: Drive to your base in Begur or Cadaqués</p>
      <p>Saturday: Explore hidden coves and enjoy seafood lunch in a coastal village</p>
      <p>Sunday: Visit medieval towns like Pals or Peratallada before returning home</p>

      <h2>Where to Stay</h2>
      <p>For the perfect weekend escape, book a small boutique hotel in Begur or Cadaqués. These charming towns offer excellent restaurants, scenic views, and easy access to the coastal paths.</p>

      <h2>What to Pack</h2>
      <ul>
        <li>Hiking shoes for coastal paths</li>
        <li>Snorkeling gear to explore underwater life</li>
        <li>Waterproof bag for valuables</li>
        <li>Sun protection</li>
        <li>Camera for the spectacular views</li>
      </ul>

      <p>A Costa Brava getaway offers the perfect blend of adventure, relaxation, and authentic Spanish coastal culture - all within a compact weekend trip.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    date: "April 18, 2023",
    author: "Elena Martínez",
    destination: "Spain",
    readingTime: "4 min read",
    categories: ["escapadas"],
    tags: ["fin de semana", "españa", "playas", "mediterraneo"]
  },
  {
    id: "4",
    title: "Secret Mountain Retreat in the Pyrenees",
    slug: "pyrenees-mountain-retreat",
    excerpt: "Disconnect from the digital world in this hidden valley between France and Spain.",
    content: `
      <p>The Pyrenees mountains, spanning the border between France and Spain, hold countless secret valleys and villages that seem frozen in time. For the perfect weekend escape, head to the Valle de Tena on the Spanish side, where traditional stone villages contrast with dramatic mountain peaks.</p>

      <h2>Tramacastilla de Tena</h2>
      <p>This tiny stone village with fewer than 100 residents offers authentic mountain life without the tourists. Stay in a renovated stone house and wake up to views of snow-capped mountains and the gentle sound of cowbells.</p>

      <h2>Hiking Routes</h2>
      <p>The valley offers hiking trails for all levels. For a moderate day hike, the path to Ibones de Anayet rewards with twin glacial lakes reflecting perfect mountain views. For a more challenging route, the ascent to Pico Anayet offers panoramic views across both Spanish and French Pyrenees.</p>

      <h2>Disconnecting</h2>
      <p>The real luxury of this escape is the opportunity to disconnect. Mobile reception is limited in parts of the valley, and many accommodations embrace this digital detox approach, focusing instead on books, conversation, and nature.</p>

      <h2>Seasonal Considerations</h2>
      <ul>
        <li>Spring: Wildflowers carpet meadows, but snow may remain on higher trails</li>
        <li>Summer: Perfect hiking weather and mountain festivals in villages</li>
        <li>Fall: Spectacular foliage and fewer visitors</li>
        <li>Winter: Cozy retreats with fireplaces after winter sports</li>
      </ul>

      <p>Just a few hours from Madrid or Barcelona, this Pyrenean escape offers a complete reset in a single weekend. Return to city life refreshed, with mountains in your eyes and silence in your mind.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1571983823232-07c313b6b4b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    date: "March 5, 2023",
    author: "Pablo Sánchez",
    destination: "Spain",
    readingTime: "5 min read",
    categories: ["escapadas"],
    tags: ["montaña", "desconexión", "naturaleza", "secreto"]
  },
  
  // Consejos de Viaje
  {
    id: "5",
    title: "Pack Like a Pro: The One-Bag Travel System",
    slug: "one-bag-travel-system",
    excerpt: "Master the art of traveling light without sacrificing essentials.",
    content: `
      <p>Traveling with just one bag, whether for a weekend or several weeks, transforms the entire travel experience. No checked baggage fees, no waiting at carousels, and incredible mobility. Here's how to make it work for you.</p>

      <h2>Choose the Right Bag</h2>
      <p>The foundation of one-bag travel is, naturally, the bag itself. Look for a 30-45L backpack that opens fully like a suitcase (clamshell opening). Water resistance, comfortable straps, and a design that looks appropriate in both outdoor and urban settings are key features.</p>

      <h2>Clothing Philosophy</h2>
      <p>The secret to packing light is a capsule wardrobe where everything coordinates with everything else. Choose a simple color scheme (neutrals with 1-2 accent colors) and fabrics that resist wrinkles and odors. Merino wool is exceptional for this purpose.</p>

      <h2>The 5-4-3-2-1 Rule</h2>
      <p>For a week-long trip (adjustable for longer journeys):</p>
      <ul>
        <li>5 pairs of socks and underwear</li>
        <li>4 tops (mix of t-shirts and long-sleeves)</li>
        <li>3 bottoms (pants/shorts/skirt)</li>
        <li>2 pairs of shoes (wear the bulkier pair)</li>
        <li>1 jacket/sweater (wear it on travel days)</li>
      </ul>

      <h2>Toiletries Minimalism</h2>
      <p>Decant products into small containers, look for solid alternatives (shampoo bars, solid perfume), and be realistic about what you'll actually use. Most accommodations provide soap and shampoo.</p>

      <h2>Tech Essentials</h2>
      <p>A single universal adapter, multi-port charger, and thoughtful selection of devices keeps your tech footprint minimal. Consider whether you really need both a laptop and tablet.</p>

      <h2>Packing Cubes: The Secret Weapon</h2>
      <p>Compression packing cubes not only organize your belongings but also reduce their volume, creating space you didn't know you had.</p>

      <p>One-bag travel isn't about deprivation—it's about thoughtful curation of what truly enhances your journey, freeing you from the literal and figurative baggage that weighs down so many travelers.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    date: "February 19, 2023",
    author: "Ana Jiménez",
    destination: "Global",
    readingTime: "7 min read",
    categories: ["consejos"],
    tags: ["equipaje", "organización", "minimalismo"]
  },
  {
    id: "6",
    title: "Digital Security for Travelers: Protect Your Data on the Road",
    slug: "digital-security-travelers",
    excerpt: "Essential strategies to keep your digital life secure while traveling.",
    content: `
      <p>Traveling exposes your digital information to new risks, from unsecured Wi-Fi networks to increased risk of device theft. With some preparation, you can enjoy your journey without compromising your digital security.</p>

      <h2>Before You Leave</h2>
      <p>Back up all your devices to a secure cloud service and an external hard drive that remains at home. Update all software and operating systems to ensure you have the latest security patches. Enable two-factor authentication on all important accounts, especially email, banking, and social media.</p>

      <h2>Password Management</h2>
      <p>Use a reputable password manager to generate and store strong, unique passwords for every account. This prevents a security breach on one site from affecting your other accounts. Consider creating a separate email address just for travel bookings to keep your main inbox secure.</p>

      <h2>Virtual Private Networks (VPNs)</h2>
      <p>A VPN encrypts your internet connection, protecting your data even on unsecured public Wi-Fi networks. Subscribe to a paid VPN service before your trip and install it on all your devices. Free VPNs often collect and sell your data, defeating the purpose of security.</p>

      <h2>Physical Device Security</h2>
      <ul>
        <li>Never leave devices unattended in public places</li>
        <li>Use hotel safes for devices when you don't need them</li>
        <li>Keep devices with you during transit</li>
        <li>Consider a privacy screen for your laptop or phone</li>
        <li>Enable full-disk encryption on all devices</li>
      </ul>

      <h2>Public Computer Safety</h2>
      <p>Avoid using public computers for sensitive accounts if possible. If you must use one, use your VPN, browse in incognito mode, and be sure to log out of all accounts completely. Never allow browsers to save your passwords on public devices.</p>

      <h2>Social Media Awareness</h2>
      <p>Be cautious about sharing real-time location information on social media, as this announces that your home is empty. Consider posting about your adventures after returning home instead of during your trip.</p>

      <p>Digital security might seem complex, but these habits quickly become second nature and provide invaluable peace of mind as you explore the world.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    date: "January 15, 2023",
    author: "Carlos Mendoza",
    destination: "Global",
    readingTime: "6 min read",
    categories: ["consejos"],
    tags: ["seguridad", "tecnología", "preparación"]
  },
  
  // Vida Nómada
  {
    id: "7",
    title: "Finding Community as a Digital Nomad",
    slug: "digital-nomad-community",
    excerpt: "Strategies for building meaningful connections while living a location-independent lifestyle.",
    content: `
      <p>One of the greatest challenges of nomadic living isn't finding WiFi or affordable accommodation—it's building and maintaining a sense of community when you're constantly on the move. Here's how successful digital nomads create belonging wherever they go.</p>

      <h2>Coliving Spaces</h2>
      <p>Purpose-built coliving spaces for remote workers have exploded in popularity. Beyond providing accommodation and workspaces, these communities organize social events, skill-sharing workshops, and group excursions. Living with like-minded individuals for 1-3 months creates deeper connections than typical hostel stays.</p>

      <h2>Digital Nomad Hubs</h2>
      <p>Certain cities have developed reputations as digital nomad hotspots—Canggu in Bali, Chiang Mai in Thailand, Medellín in Colombia, Lisbon in Portugal. Choosing these destinations, especially during shoulder seasons, almost guarantees you'll meet others living a similar lifestyle.</p>

      <h2>Online-to-Offline Communities</h2>
      <p>Platforms like Nomadlist, Facebook groups, and Meetup allow you to connect with other nomads before arriving in a new location. Many lasting friendships begin with a simple "Anyone in Taipei want to grab coffee this week?" post.</p>

      <h2>Consistent Rhythms</h2>
      <p>Establish rituals that give structure to your social life. Perhaps it's attending language exchange events every Tuesday, weekend hiking groups, or regular coworking days. Consistency creates opportunities for relationships to develop naturally.</p>

      <h2>Depth Over Breadth</h2>
      <ul>
        <li>Slow travel (1-3 months per location) allows deeper connections than rapid movement</li>
        <li>Return to favorite places annually to reconnect with the community there</li>
        <li>Focus on quality interactions rather than meeting as many people as possible</li>
        <li>Be intentional about maintaining long-distance friendships</li>
      </ul>

      <h2>Local Integration</h2>
      <p>While connecting with other nomads is valuable, making local friends provides deeper cultural immersion. Take language classes, join community sports, or volunteer with local organizations to meet residents who can share their authentic perspective on a place.</p>

      <p>The nomadic lifestyle offers unprecedented freedom, but it requires intentionality to build the human connections we all need. With these strategies, you can create a global community that makes the world feel like home.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    date: "December 10, 2022",
    author: "Laura Fernández",
    destination: "Global",
    readingTime: "8 min read",
    categories: ["nomada"],
    tags: ["comunidad", "relaciones", "social", "remoto"]
  },
  {
    id: "8",
    title: "The Tax Realities of Location Independence",
    slug: "tax-realities-nomads",
    excerpt: "Understanding your tax obligations as a digital nomad or location-independent professional.",
    content: `
      <p>The freedom of a location-independent lifestyle comes with complex tax considerations that many new digital nomads overlook. While tax laws vary by country, understanding these fundamental concepts will help you stay compliant while optimizing your tax situation.</p>

      <h2>Tax Residency vs. Citizenship</h2>
      <p>Most countries determine tax obligations based on residency, not citizenship (with notable exceptions like the United States). Each nation has different criteria for determining tax residency, often based on the number of days spent in the country and/or maintaining a permanent home there.</p>

      <h2>Common Misconceptions</h2>
      <p>Many nomads mistakenly believe that constantly moving means they don't owe taxes anywhere. In reality, most people are tax residents somewhere, and failing to declare income can lead to significant penalties. Another misconception is that offshore income is automatically tax-free—this varies widely depending on residency status and tax treaties.</p>

      <h2>Strategic Planning</h2>
      <p>Legal tax optimization might involve establishing residency in a country with:</p>
      <ul>
        <li>Territorial tax systems that only tax income earned within their borders</li>
        <li>Tax exemptions for foreign-sourced income</li>
        <li>Favorable tax treaties with countries where you earn income</li>
        <li>Special programs for digital nomads or remote workers</li>
      </ul>

      <h2>Record Keeping</h2>
      <p>Maintain meticulous records of:</p>
      <ul>
        <li>Days spent in each country (entry/exit stamps, boarding passes)</li>
        <li>Rental agreements and utility bills</li>
        <li>Work contracts and invoices</li>
        <li>All sources of income</li>
      </ul>

      <h2>Professional Guidance</h2>
      <p>Consult with tax professionals who specialize in expat and nomad taxation. General accountants often lack knowledge of international tax considerations. While this advice represents an additional expense, it typically saves money in the long run by preventing costly mistakes.</p>

      <p>The goal isn't to avoid all taxation—sustainable nomadic living means contributing fairly to the societies where you live and work. Rather, it's about understanding your obligations and making informed decisions about where and how you structure your location-independent lifestyle.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
    date: "November 22, 2022",
    author: "Miguel López",
    destination: "Global",
    readingTime: "9 min read",
    categories: ["nomada"],
    tags: ["impuestos", "finanzas", "legal", "residencia"]
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

// Get posts by category
export function getPostsByCategory(category: string): Post[] {
  return posts.filter(post => 
    post.categories?.includes(category.toLowerCase())
  );
}

// Get unique categories
export function getUniqueCategories(): string[] {
  const allCategories = posts.flatMap(post => post.categories || []);
  return [...new Set(allCategories)];
}

// Get posts by tag
export function getPostsByTag(tag: string): Post[] {
  return posts.filter(post => 
    post.tags?.includes(tag.toLowerCase())
  );
}

// Get unique tags
export function getUniqueTags(): string[] {
  const allTags = posts.flatMap(post => post.tags || []);
  return [...new Set(allTags)];
}
