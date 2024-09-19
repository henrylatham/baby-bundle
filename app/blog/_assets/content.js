import Image from "next/image";
import lathamsImg from "@/app/blog/_assets/images/authors/marc.png";
import introducingSupabaseImg from "@/public/blog/introducing-supabase/header.png";

// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

// These slugs are used to generate pages in the /blog/category/[categoryI].js. It's a way to group articles by category.
const categorySlugs = {
  guides: "guides",
  travelbag: "travelbag",
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories = [
  {
    // The slug to use in the URL, from the categorySlugs object above.
    slug: categorySlugs.guides,
    // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: "Ultimate Guides",
    // A short version of the title above, display in small components like badges. 1 or 2 words
    titleShort: "Guides",
    // The description of the category to display in the category page. Up to 160 characters.
    description:
      "Ultimate guides we've put together travelling with our baby to help you enjoy your trip!",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: "Our ultimate, comprehensive guides for baby travel.",
  },
  {
    slug: categorySlugs.babytravelbag,
    title: "Baby Travel Bags",
    titleShort: "bags",
    description:
      "Understand the pros & cons of which bags to bring - & how to travel light (& stress-free!)",
    descriptionShort:
      "Which bag to take?",
  },
  {
    slug: categorySlugs.babyluggage,
    title: "Baby Luggage",
    titleShort: "packing",
    description:
      "Understand what to pack to make your first big trip as a family as stress-free as possible",
    descriptionShort:
      "What to pack for your baby?",
  },
  {
    slug: categorySlugs.babytravelsystem,
    title: "Baby Travel Systems",
    titleShort: "strollers",
    description:
      "The ultimate guide to baby travel systems, carriers & strollers",
    descriptionShort:
      "Travelling with strollers, car seats and/or carriers",
  },
  {
    slug: categorySlugs.babytravelessentials,
    title: "Baby Travel Essentials",
    titleShort: "essentials",
    description:
      "Understand the essential things to think about when travelling with your baby",
    descriptionShort:
      "Travel essential tips & advice",
  },
  {
    slug: categorySlugs.flying,
    title: "Flying With A Baby",
    titleShort: "flying",
    description:
      "Understand how to plan, prepare - & enjoy - a flight with your baby",
    descriptionShort:
      "Advice on flying with your baby",
  },
];

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

// Social icons used in the author's bio.
const socialIcons = {
  linkedin: {
    name: "LinkedIn",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
};

// These slugs are used to generate pages in the /blog/author/[authorId].js. It's a way to show all articles from an author.
const authorSlugs = {
  lathams: "lathams",
};

// All the blog authors data display in the /blog/author/[authorId].js pages.
export const authors = [
  {
    // The slug to use in the URL, from the authorSlugs object above.
    slug: authorSlugs.lathams,
    // The name to display in the author's bio. Up to 60 characters.
    name: "Henry & Rebeca Latham",
    // The job to display in the author's bio. Up to 60 characters.
    job: "Baby Travel Pros",
    // The description of the author to display in the author's bio. Up to 160 characters.
    description:
      "We love travel. Henry was a digital nomad for 8 years & visited 58 countries. Rebeca's worked & lived in 5 countries. We didn't think having a child should stop us. Since Fred was born in April 2023, we've travelled to 12+ countries with him (including Japan, Taiwan & Sri Lanka)",
    // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
    avatar: lathamsImg,
    // A list of social links to display in the author's bio.
    socials: [

      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: "",
      },
    ],
  },
];

// ==================================================================================================================================================================
// BLOG ARTICLES 📚
// ==================================================================================================================================================================

// These styles are used in the content of the articles. When you update them, all articles will be updated.
const styles = {
  h2: "text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-base-content",
  h3: "text-xl lg:text-2xl font-bold tracking-tight mb-2 text-base-content",
  p: "text-base-content/90 leading-relaxed",
  ul: "list-inside list-disc text-base-content/90 leading-relaxed",
  li: "list-item",
  // Altnernatively, you can use the library react-syntax-highlighter to display code snippets.
  code: "text-sm font-mono bg-neutral text-neutral-content p-6 rounded-box my-4 overflow-x-scroll select-all",
  codeInline:
    "text-sm font-mono bg-base-300 px-1 py-0.5 rounded-box select-all",
};

// All the blog articles data display in the /blog/[articleId].js pages.
export const articles = [
  {
    slug: "best-baby-travel-bags-for-every-journey",
    title: "Best Baby Travel Bags for Every Journey",
    description:
      "Discover the top baby travel bags for every adventure. Our favorite picks for keeping your baby happy and parents stress-free while on the go!",
    categories: [
      categories.find((category) => category.slug === categorySlugs.babytravelbag),
    ],
    author: authors.find((author) => author.slug === authorSlugs.lathams),
    publishedAt: "2024-09-05",
    image: {
      src: introducingSupabaseImg,
      urlRelative: "/blog/best-baby-travel-bags-for-every-journey/header.jpg",
      alt: "A collection of baby travel bags with essentials",
    },
    content: (
      <>
        <Image
          src={introducingSupabaseImg}
          alt="A collection of baby travel bags with essentials"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Why You Need the Right Baby Travel Bag</h2>
          <p className={styles.p}>
            Let’s face it – traveling with a baby can be a juggling act! From diapers to bottles, having the right <strong>baby travel bag</strong> makes all the difference. After plenty of road trips and one too many airport security checks, we've discovered a thing or two about what makes the best travel bag for your baby. Spoiler: It's all about pockets, durability, and comfort!
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>1. Baby Jogger Travel Bags: Perfect for Parents on the Move</h3>
          <p className={styles.p}>
            If you're constantly on the go with a stroller in tow, a <strong>baby jogger travel bag</strong> is a must-have. These bags attach directly to your stroller, offering hands-free convenience and plenty of storage space. We love the ones with insulated pockets for bottles – nothing like a warm bottle to soothe a cranky little traveler!
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>2. Baby Travel Bags with Insulated Bottle Storage</h3>
          <p className={styles.p}>
            As parents, we've learned the hard way that bottles need their own space. A <strong>baby bottle travel bag</strong> is specifically designed with insulated compartments, keeping milk or formula at the right temperature. Our favorite tip? Choose a bag with enough room for snacks and a few toys – keeping baby (and you) happy during any journey.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>3. Our Favorite Baby Travel Bags of the Year</h3>
          <ul className={styles.ul}>
            <li className={styles.li}><strong>Orbit Baby Travel Bag:</strong> Spacious and versatile, this bag makes organizing baby essentials a breeze.</li>
            <li className={styles.li}><strong>Baby Brezza Travel Bag:</strong> Ideal for parents who need to carry feeding essentials on the go.</li>
            <li className={styles.li}><strong>Skip Hop Forma Backpack:</strong> A stylish and practical option with plenty of pockets and a built-in changing pad.</li>
          </ul>
        </section>

        <section>
          <h3 className={styles.h3}>4. Travel Bag Tips from the Experts</h3>
          <p className={styles.p}>
            When packing a travel bag for baby, think about ease of access. Always keep diapers, wipes, and snacks in the outer pockets. Trust us, you don’t want to be digging through the bottom of the bag mid-flight!
          </p>
        </section>
      </>
    ),
  },
  {
    slug: "how-to-pack-your-baby-travel-bag-like-a-pro",
    title: "How to Pack Your Baby Travel Bag Like a Pro",
    description:
      "Our best tips for packing a baby travel bag efficiently. Learn how to include all the essentials without the bulk!",
    categories: [
      categories.find((category) => category.slug === categorySlugs.babytravelbag),
    ],
    author: authors.find((author) => author.slug === authorSlugs.lathams),
    publishedAt: "2024-08-20",
    image: {
      src: introducingSupabaseImg,
      urlRelative: "/blog/how-to-pack-your-baby-travel-bag-like-a-pro/header.jpg",
      alt: "A well-organized baby travel bag with essentials neatly packed",
    },
    content: (
      <>
        <Image
          src={introducingSupabaseImg}
          alt="A well-organized baby travel bag with essentials neatly packed"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Packing for Stress-Free Travel</h2>
          <p className={styles.p}>
            Packing a <strong>baby travel bag</strong> can feel like preparing for a mini expedition. We’ve been there, overpacking and then struggling to find the one thing we actually need! Here's our tried-and-true approach to packing the ultimate travel baby bag – less chaos, more happy memories.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>1. Use a Checklist</h3>
          <p className={styles.p}>
            We've learned that the key to packing efficiently is a checklist. Essential items include diapers, wipes, a change of clothes, bottles, and snacks. For longer trips, add in toys, a travel blanket, and even a few plastic bags for messy situations. And don’t forget the <strong>baby bottle travel bag</strong> with insulated pockets – it's a lifesaver for keeping bottles at the right temperature.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>2. Keep the Essentials Within Reach</h3>
          <p className={styles.p}>
            If you’re traveling by plane, pack a <strong>baby travel bag for the plane</strong> with all the essentials within easy reach. Keep diapers, wipes, and bottles in outer pockets. Trust us, mid-flight diaper changes are much easier when you don’t have to dig around for supplies.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>3. Choose the Right Bag for Your Needs</h3>
          <p className={styles.p}>
            Not every travel baby bag is created equal. For short trips, a compact bag with a few key compartments is perfect. For longer journeys, consider a bag like the <strong>Orbit Baby Travel Bag</strong> that offers plenty of space and easy access. Our top tip: always choose a bag that comes with a changing mat. You’ll thank us later!
          </p>
        </section>
      </>
    ),
  },
  {
    slug: "baby-travel-bags-for-every-occasion",
    title: "Baby Travel Bags for Every Occasion",
    description:
      "From quick trips to full-blown vacations, find the best baby travel bags suited for every kind of adventure.",
    categories: [
      categories.find((category) => category.slug === categorySlugs.babytravelbag),
    ],
    author: authors.find((author) => author.slug === authorSlugs.lathams),
    publishedAt: "2024-09-12",
    image: {
      src: introducingSupabaseImg,
      urlRelative: "/blog/baby-travel-bags-for-every-occasion/header.jpg",
      alt: "Different styles of baby travel bags for various occasions",
    },
    content: (
      <>
        <Image
          src={introducingSupabaseImg}
          alt="Different styles of baby travel bags for various occasions"
          width={700}
          height={500}
          priority={true}
          className="rounded-box"
          placeholder="blur"
        />
        <section>
          <h2 className={styles.h2}>Choosing the Right Baby Travel Bag</h2>
          <p className={styles.p}>
            Every outing with a baby is an adventure, whether it's a quick trip to the store or a week-long vacation. Over the past couple of years, we’ve tried out a range of <strong>baby travel bags</strong> for different occasions. Here's what we've learned about matching the right bag to the right adventure!
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>1. Quick Outings: Compact and Stylish</h3>
          <p className={styles.p}>
            For those quick trips to the park or store, a compact <strong>travel baby bag</strong> with just the essentials is perfect. We love bags that are stylish yet practical, with a few compartments to hold diapers, wipes, and a snack. The best part? They're lightweight and don’t weigh you down.
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>2. Day Trips: Roomy and Organized</h3>
          <p className={styles.p}>
            Heading out for a full day? You'll need a bag with a bit more space. We recommend the <strong>best baby travel bags</strong> that come with insulated pockets for bottles, a built-in changing mat, and plenty of room for extra clothes and toys. Our go-to for day trips is the <strong>Orbit Baby Travel Bag</strong> – it has it all!
          </p>
        </section>

        <section>
          <h3 className={styles.h3}>3. Vacations: All-In-One Solutions</h3>
          <p className={styles.p}>
            When it comes to longer trips, a versatile bag like the <strong>Baby Brezza Travel Bag</strong> is ideal. It offers plenty of storage and organization options, keeping everything you need at your fingertips. It even has insulated compartments to keep milk cool and snacks fresh – a must-have for family vacations!
          </p>
        </section>
      </>
    ),
  },
];

