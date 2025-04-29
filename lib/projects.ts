// Project types
export type ProjectCategory = "commercial" | "residential"

export type CommercialSubcategory = "coffee-shop" | "boarding" | "office" | "store"
export type ResidentialSubcategory =
  | "bathroom"
  | "bedroom"
  | "family-room"
  | "facade"
  | "kids-bedroom"
  | "kitchen-set"
  | "living-room"
  | "arabic-majlis"
  | "musholla"
  | "rooftop"

export type ProjectSubcategory = CommercialSubcategory | ResidentialSubcategory

export interface ProjectImage {
  src: string
  alt: string
}

export interface RelatedProject {
  id: string
  title: string
  image: string
  category: ProjectCategory
  subcategory: ProjectSubcategory
}

export interface Project {
  id: string
  title: string
  subtitle: string
  image: string
  category: ProjectCategory
  subcategory: ProjectSubcategory
  location: string
  area: string
  duration: string
  completed: string
  client: string
  description: string[]
  designImage: string
  realityImage: string
  gallery: string[]
  features?: string[]
  materials?: string[]
  relatedProjects: RelatedProject[]
}

// Sample projects data
export const projects: Project[] = [
  // Commercial Projects
  {
    id: "esma-coffee-shop",
    title: "Esma Coffee Shop",
    subtitle: "design interior",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745767874/888_tmz4er.png?height=300&width=400",
    category: "commercial",
    subcategory: "coffee-shop",
    location: "Malang",
    area: "120 m²",
    duration: "2 Weeks",
    completed: "2022",
    client: "Esma.",
    description: [
      "This artisan coffee shop project was designed to create a welcoming space that balances industrial aesthetics with warm, inviting elements. The client wanted a distinctive environment that would attract coffee enthusiasts and casual visitors alike, while providing a comfortable space for both quick visits and longer stays.",
      "The design incorporates exposed brick walls, polished concrete floors, and wooden elements to create a textural richness that appeals to the senses. Custom-designed furniture pieces were created specifically for the space, including the central communal table and the bar area, which serves as the focal point of the shop.",
      "Lighting was carefully considered to create different moods throughout the day, with pendant lights providing focused illumination over seating areas and the bar, while ambient lighting creates a warm glow throughout the space in the evening hours.",
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745767874/888_tmz4er.png?height=400&width=600",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745767868/h_enlmoq.png?height=400&width=600",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745767874/888_tmz4er.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745767871/b_praqy8.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745767867/3_mt0sro.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745767866/5_dnudbp.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745767868/c_ipg9fz.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745767874/7A_vxyx3i.png",
    ],
    features: [
      "Custom-designed bar and service counter",
      "Communal seating area with handcrafted wooden table",
      "Intimate corner booths for private conversations",
      "Outdoor seating area with custom planters",
      "Specialized lighting design for different times of day",
      "Acoustic treatments to manage noise levels",
      "Custom shelving and display areas for retail products",
      "Integrated technology for ordering and ambient music",
    ],
    materials: [
      "Reclaimed wood for tables and counter surfaces",
      "Polished concrete flooring",
      "Exposed brick walls with selective plaster finishes",
      "Matte black metal fixtures and details",
      "Leather upholstery for seating areas",
      "Custom ceramic tiles for accent walls",
      "Handcrafted lighting fixtures",
    ],
    relatedProjects: [
      {
        id: "luxury-retail-store",
        title: "Luxury Retail Store",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "store",
      },
      {
        id: "modern-office-space",
        title: "Modern Office Space",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "office",
      },
      {
        id: "boutique-boarding-house",
        title: "Boutique Boarding House",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "boarding",
      },
    ],
  },
  // Commercial Projects Mr. Nizar (dhin aju)
  {
    id: "mr-nizar-project",
    title: "Bar Mr. Nizar",
    subtitle: "Modern and Elegant Bar Design",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745768601/DSC06118_wzmqzj.jpg",
    category: "commercial", // Corrected to commercial
    subcategory: "store", // Adjusted to match available subcategory
    location: "Surabaya",
    area: "35.5 m²", // Area Bar
    duration: "2 months",
    completed: "2024",
    client: "Mr. Nizar (Dhin Aju)",
    description: [
      "The bar was designed to be modern and elegant, offering a sophisticated yet inviting atmosphere for entertaining guests.",
      "The design features sleek, contemporary furniture and stylish lighting, creating a luxurious ambiance.",
      "Custom-built shelving was added for an extensive collection of drinks and accessories, ensuring both functionality and aesthetics."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745769086/DSC06247_xmvyci.jpg",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745769083/DSC06212_kwz6ke.jpg",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745769764/DSC06117_ujc3v7.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745769086/DSC06247_xmvyci.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745769085/DSC06238_si0wcb.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745769084/DSC06235_avr7xb.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745769083/DSC06212_kwz6ke.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745768601/DSC06118_wzmqzj.jpg",
    ],
    features: [
      "Sleek, modern bar counter with high stools",
      "Custom-built shelving for drinks and accessories",
      "Integrated lighting for a cozy and luxurious ambiance",
      "High-quality materials for durability and style"
    ],
    materials: [
      "Polished wood for bar counter",
      "Stainless steel fixtures",
      "Soft, ambient lighting fixtures",
      "Durable flooring for high-traffic areas"
    ],
    relatedProjects: [
      {
        id: "esma-coffee-shop",
        title: "Esma Coffee Shop",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "coffee-shop"
      },
      {
        id: "luxury-retail-store",
        title: "Luxury Retail Store",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "store"
      },
      {
        id: "boutique-boarding-house",
        title: "Boutique Boarding House",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "boarding"
      }
    ]
  },  
  // Commercial Projects Mr. Choi
  {
    id: "mr-choi-project",
    title: "Resto & Cafe Mr. Choi",
    subtitle: "Modern and Cozy Resto & Cafe Design",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745768058/recoir_3_udqh6t.jpg",
    category: "commercial", // Adjusted to commercial for resto & cafe
    subcategory: "coffee-shop", // Adjusted to coffee-shop as it fits the theme
    location: "Sidoarjo",
    area: "496 m²", // Area for resto & cafe (lt 1)
    duration: "On-going",
    completed: "On-going",
    client: "Mr. Choi",
    description: [
      "This project combines both a modern and cozy atmosphere, creating a unique environment for guests to enjoy meals and coffee.",
      "The design incorporates open spaces, with a combination of modern furniture and warm lighting to create a welcoming vibe.",
      "A special focus was placed on maximizing natural light while maintaining an intimate, relaxing atmosphere for both casual visitors and regulars."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745768059/recoir_1_a6crlp.jpg",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745768058/recoir_3_udqh6t.jpg",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745768058/recoir_3_udqh6t.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745768059/recoir_1_a6crlp.jpg"
    ],
    features: [
      "Open-plan seating for both small and large groups",
      "Custom-designed bar and dining area",
      "Modern lighting that creates a cozy and inviting atmosphere",
      "Dedicated spaces for coffee lovers and casual diners"
    ],
    materials: [
      "Wooden flooring for a warm, natural feel",
      "Polished concrete countertops for a modern touch",
      "Sleek metal fixtures for a contemporary look",
      "Comfortable upholstered seating for relaxation"
    ],
    relatedProjects: [
      {
        id: "esma-coffee-shop",
        title: "Esma Coffee Shop",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "coffee-shop"
      },
      {
        id: "luxury-retail-store",
        title: "Luxury Retail Store",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "store"
      },
      {
        id: "boutique-boarding-house",
        title: "Boutique Boarding House",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "boarding"
      }
    ]
  },
  // Commercial Projects mrs aghnia (sylmi basic)
  // Commercial Projects mrs ayu (hasezac)
  // Commercial Projects mrs aghnia (byebadskin)
  // Commercial Projects mmr reza (seraya photobox)
  // Commercial Projects mr aryo (zozo pet)
  {
    id: "mr-aryo-zozo-pet-project",
    title: "Lobby Zozo Pet",
    subtitle: "Welcoming and Functional Lobby Design for Pet Clinic",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745771652/WhatsApp_Image_2025-04-15_at_14.47.50_dyz6da.jpg",
    category: "commercial",
    subcategory: "store",
    location: "Malang, Ciliwung",
    area: "10.8 m²",
    duration: "Design & Build duration: 2 months",
    completed: "2022",
    client: "Mr. Aryo (Zozo Pet)",
    description: [
      "The lobby design for Zozo Pet creates a welcoming environment for clients and their pets.",
      "Combining functionality and aesthetics, the layout ensures smooth customer flow within a compact 10.8 m² space.",
      "Soft, pet-friendly materials and calming color tones enhance the overall experience."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745771645/WhatsApp_Image_2025-04-15_at_14.47.54_1_txawat.jpg",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745771668/IMG_3367_aqxart.jpg",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745771662/WhatsApp_Image_2025-04-15_at_14.47.53_u0p1ib.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745771660/WhatsApp_Image_2025-04-15_at_14.47.53_2_lrj8vb.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745771650/WhatsApp_Image_2025-04-15_at_14.47.51_flqdfg.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745771645/WhatsApp_Image_2025-04-15_at_14.47.54_1_txawat.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745771636/WhatsApp_Image_2025-04-15_at_14.47.54_2_xjd48s.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745771655/WhatsApp_Image_2025-04-15_at_14.47.52_2_uifzlk.jpg"
    ],
    features: [
      "Efficient and welcoming reception layout",
      "Pet-friendly durable materials",
      "Easy-to-clean surfaces",
      "Comfortable waiting area"
    ],
    materials: [
      "Vinyl flooring",
      "Anti-scratch wall panels",
      "Eco-friendly paint",
      "Compact modular furniture"
    ],
    relatedProjects: [
      {
        id: "mr-nizar-dhin-aju-project",
        title: "Dining Area Mr. Nizar (Dhin Aju)",
        image: "/placeholder.jpg",
        category: "commercial",
        subcategory: "store"
      },
      {
        id: "mr-choi-project",
        title: "Resto & Cafe Mr. Choi",
        image: "/placeholder.jpg",
        category: "commercial",
        subcategory: "store"
      },
      {
        id: "mrs-farhana-project",
        title: "Apotek Mrs. Farhana",
        image: "/placeholder.jpg",
        category: "commercial",
        subcategory: "store"
      }
    ]
  },  
  
  // Residential Projects
  
  // Residential Projects Mrs. Anggraini
  {
    id: "office-anggraini-kantor",
    title: "Office Area - Mrs. Anggraini",
    subtitle: "Functional and elegant office space designed for productivity",
    image: "https://res.cloudinary.com/del1pfnko/image/upload/v1745770507/d10_zwhcho.png",
    category: "commercial",
    subcategory: "office",
    location: "Sidoarjo, Tanggulangin",
    area: "16 m²",
    duration: "3 Months",
    completed: "2025",
    client: "Mrs. Anggraini",
    description: [
      "This office area was designed to create a productive and comfortable workspace within a compact 16m² space. The layout prioritizes functionality, efficient storage, and a clean visual aesthetic to support daily working activities.",
      "The design utilizes custom cabinetry and minimalistic furniture to maximize the use of space without making the room feel crowded. Neutral color tones paired with natural lighting create an open and inviting atmosphere.",
      "Material selection focused on durability and easy maintenance, perfect for a working environment requiring longevity and professionalism."
    ],
    designImage: "/https://res.cloudinary.com/del1pfnko/image/upload/v1745770456/E1_d9cvxs.png",
    realityImage: "/commercial/office/anggraini/reality/2daf0684-138d-475d-a79a-c3ceb0f0995e.jpg",
    gallery: [
      "/commercial/office/anggraini/design/2daf0684-138d-475d-a79a-c3ceb0f0995e.jpg",
      "/commercial/office/anggraini/reality/2daf0684-138d-475d-a79a-c3ceb0f0995e.jpg",
    ],
    features: [
      "Custom-built office desk and storage",
      "Neutral and calming color palette",
      "Maximized natural lighting",
      "Efficient use of compact space",
      "Durable and easy-to-maintain finishes",
    ],
    materials: [
      "Melamine-faced MDF for cabinetry",
      "Vinyl flooring for durability",
      "Matte finish wall paints",
      "Aluminum frame partitions",
      "LED recessed lighting fixtures",
    ],
    relatedProjects: [
      {
        id: "lamia-office-space",
        title: "Lamia Office Space",
        image: "/commercial/office/lamia/design/placeholder.jpg",
        category: "commercial",
        subcategory: "office",
      },
      {
        id: "minimalist-workspace",
        title: "Minimalist Workspace",
        image: "/commercial/office/placeholder.jpg",
        category: "commercial",
        subcategory: "office",
      },
      {
        id: "modern-coworking",
        title: "Modern Coworking Space",
        image: "/commercial/office/placeholder.jpg",
        category: "commercial",
        subcategory: "office",
      },
    ],
  },
  //Residential Projects Mrs. Shabrina
  {
    id: "living-room-mrs-shabrina",
    title: "Living Room Mrs. Shabrina",
    subtitle: "Elegant and Functional Living Room Design",
    image: "https://res.cloudinary.com/del1pfnko/image/upload/v1745772094/RT1_gbnbdp.png",
    category: "residential",
    subcategory: "living-room",
    location: "Malang",
    area: "27 m²",
    duration: "2 Months",
    completed: "2024",
    client: "Mrs. Shabrina",
    description: [
      "This living room project for Mrs. Shabrina in Malang focuses on creating a comfortable and stylish gathering space.",
      "Spanning 27 square meters, the design blends modern and cozy elements to accommodate family and guests.",
      "A selection of premium materials and custom furniture pieces bring sophistication and functionality to the space.",
    ],
    designImage: "https://res.cloudinary.com/del1pfnko/image/upload/v1745772100/RT5_wbauod.png",
    realityImage: "/placeholder.jpg",
    gallery: [
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745772108/S3_lfrwzf.png",
      "/placeholder.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745772107/RT4_xasotq.png",
      "/placeholder.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745772104/RT7_rozuul.png",
      "/placeholder.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745772103/RT2_nvcefa.png",
      "/placeholder.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745772101/RT3_jp3xrc.png",
    ],
    features: [
      "Custom-designed sofa with premium upholstery",
      "Built-in wall cabinet for storage and display",
      "Ambient and accent lighting setup",
      "Open-space concept for better flow",
    ],
    materials: [
      "High-quality laminate flooring",
      "Custom wood veneer cabinetry",
      "Soft-touch premium fabrics",
      "Brushed metal lighting fixtures",
    ],
    relatedProjects: [
      {
        id: "family-room-mrs-shabrina",
        title: "Family Room Mrs. Shabrina",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "family-room",
      },
      {
        id: "bedroom-mrs-shabrina",
        title: "Bedroom Mrs. Shabrina",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "bedroom",
      },
      {
        id: "kitchen-mrs-shabrina",
        title: "Kitchen Mrs. Shabrina",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "kitchen-set",
      },
    ],
  },  
  //Residential Projects Mrs. Titiya PPPP
  {
    id: "mrs-titiya-project",
    title: "Mrs. Titiya's Interior Design & Build",
    subtitle: "Design Interior & Build Interior",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745772498/C26_vqb7cx.png",
    category: "residential",
    subcategory: "kitchen-set",
    location: "Surabaya, Citraland",
    area: "49.5 m²",
    duration: "6 Months",
    completed: "2025",
    client: "Mrs. Titiya",
    description: [
      "This interior design & build project aimed to transform a functional space into an elegant and cozy environment for the client. Special attention was given to the layout and atmosphere, creating spaces that encourage relaxation and productivity.",
      "The design features an open-plan layout for the main areas, with modern and luxurious finishes that blend seamlessly with the client's lifestyle and preferences.",
      "The project also includes customized furniture and lighting to complement the overall design concept, along with well-thought-out storage solutions to maximize space utilization."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745772498/C26_vqb7cx.png",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745772496/C27_sab1gh.png",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745772498/C26_vqb7cx.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745772496/C27_sab1gh.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745772493/C23_jm0qtg.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745772490/C24_qd9rq5.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745772488/C25_tlyz5j.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745772485/C22_wbja5o.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745772482/C28_lxzdvl.png"
    ],
    features: [
      "Open-plan living area with flexible furniture layout",
      "Custom-designed cabinetry for maximum storage space",
      "VIP room with elegant design elements for comfort and style"
    ],
    materials: [
      "Polished wood for flooring and accent walls",
      "Premium leather for seating areas and cushions",
      "High-quality stone for countertops and tabletops"
    ],
    relatedProjects: [
      {
        id: "luxury-villa-surabaya",
        title: "Luxury Villa Surabaya",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "living-room"
      },
      {
        id: "office-renovation-surabaya",
        title: "Office Renovation Surabaya",
        image: "/placeholder.jpg",
        category: "commercial",
        subcategory: "office"
      },
      {
        id: "modern-apartment-surabaya",
        title: "Modern Apartment Surabaya",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "living-room"
      }
    ]
  },
  //Residential Projects Mrs. Kristy
  {
    id: "mrs-kristy-project",
    title: "Open Space Mrs. Kristy",
    subtitle: "Warm and Functional Family Room Design",
    image: "https://res.cloudinary.com/del1pfnko/image/upload/v1745773393/C4_ny2s4n.png",
    category: "residential",
    subcategory: "family-room",
    location: "Malang, Pakis",
    area: "38 m²",
    duration: "2 Months",
    completed: "2025",
    client: "Mrs. Kristy",
    description: [
      "A cozy and multi-functional open space integrating living room, kitchen, and dining area.",
      "Designed to create a seamless flow and maximize comfort for family activities.",
      "Warm tones combined with modern minimalist elements to ensure an inviting atmosphere."
    ],
    designImage: "https://res.cloudinary.com/del1pfnko/image/upload/v1745773400/C1_dbi9gu.png",
    realityImage: "https://res.cloudinary.com/del1pfnko/image/upload/v1745773547/KRISTY-02471_hkznoa.jpg",
    gallery: [
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745773405/C2_u7vd4k.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745773404/C3_yfbdmu.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745773403/C5_uob0zy.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745773400/C1_dbi9gu.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745773393/C4_ny2s4n.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745773586/KRISTY-02471_ayt2kl.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745773585/KRISTY-02445_syvez3.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745773585/KRISTY-02438_gewpuz.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745773582/KRISTY-02469_mrlmus.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745773577/KRISTY-02440_jesprj.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745773547/KRISTY-02471_hkznoa.jpg",
    ],
    features: [
      "Open layout concept",
      "Natural lighting optimization",
      "Integrated kitchen and dining area"
    ],
    materials: [
      "Engineered wood flooring",
      "Quartz countertops",
      "Textured wall panels"
    ],
    relatedProjects: [
      {
        id: "mrs-farida-project",
        title: "Living Room Mrs. Farida",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "living-room"
      },
      {
        id: "mrs-fira-project",
        title: "Family Room Mrs. Fira",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "family-room"
      },
      {
        id: "mrs-aghina-project",
        title: "Family Room Mrs. Aghnia",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "family-room"
      }
    ]
  },  
  //Residential Projects Mrs. Farida
  {
    id: "mrs-farida-project",
    title: "Mrs. Farida's Interior Design & Build",
    subtitle: "Design Interior & Build Interior",
    image: "https://res.cloudinary.com/del1pfnko/image/upload/v1745774107/E2_navmjf.png",
    category: "residential",
    subcategory: "living-room",
    location: "Madura, Pamekasan",
    area: "20 m²",
    duration: "Design & Build",
    completed: "2025", 
    client: "Mrs. Farida",
    description: [
      "This project focused on creating a serene and functional living space that caters to family needs. The design emphasizes comfort, space optimization, and natural light.",
      "The layout of the living room and other rooms ensures that each area is distinct but flows seamlessly with the rest of the house. Custom furniture and practical storage solutions were incorporated into the design.",
      "Natural materials were used to create a warm and inviting atmosphere, with clean lines and neutral tones to achieve a modern aesthetic."
    ],
    designImage: "https://res.cloudinary.com/del1pfnko/image/upload/v1745774110/E3_kuve2d.png",
    realityImage: "https://res.cloudinary.com/del1pfnko/image/upload/v1745774261/color_2_6_of_90_z4v8fo.jpg",
    gallery: [
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774099/D8_sw7n1v.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774101/D12_aucffa.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774101/D11_qtpwzf.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774104/D13_ffcibm.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774106/D16_qzodn0.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774107/E2_navmjf.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774250/color_2_1_of_90_lqrtyh.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774252/color_2_7_of_90_y2qyhd.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774261/color_2_6_of_90_z4v8fo.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774266/color_2_2_of_90_m9unfg.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774270/color_2_3_of_90_gmlgdf.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774263/color_2_4_of_90_ihjpyh.jpg",
    ],
    features: [
      "Open-concept living area with multifunctional furniture",
      "Custom storage solutions for space optimization",
      "Natural lighting to enhance the warm ambiance of the home"
    ],
    materials: [
      "Light wood flooring for a cozy, airy feel",
      "Neutral-colored walls and soft textures for furnishings",
      "High-quality tiles for the kitchen and bathrooms"
    ],
    relatedProjects: [
      {
        id: "esma-coffee-shop",
        title: "Esma Coffee Shop",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "coffee-shop"
      },
      {
        id: "mrs-kristy-project",
        title: "Mrs. Kristy's Interior Design & Build",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "living-room"
      },
      {
        id: "mrs-siti-project",
        title: "Mrs. Siti's Interior Design & Build",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "bedroom"
      }
    ]
  },  
  //Residential Projects Mrs. Fira
  {
    id: "mrs-fira-project",
    title: "Kitchen & Dining Area Mrs. Fira",
    subtitle: "Functional and Modern Kitchen & Dining Area Design",
    image: "https://res.cloudinary.com/del1pfnko/image/upload/v1745774692/E19_rqflco.png",
    category: "residential",
    subcategory: "kitchen-set", // Subcategory based on the selected area
    location: "Pekalongan",
    area: "19 m²", // Area kitchen, dining area
    duration: "3 months",
    completed: "2024",
    client: "Mrs. Fira",
    description: [
      "This project focused on creating a multifunctional kitchen and dining area, seamlessly integrating cooking, dining, and socializing spaces.",
      "The design features an open-plan layout with a large kitchen island that connects to the dining area, creating a perfect space for family meals and entertaining guests.",
      "A blend of modern and natural elements was used, ensuring the space is both functional and aesthetically pleasing."
    ],
    designImage: "https://res.cloudinary.com/del1pfnko/image/upload/v1745774691/E14_nqeztj.png",
    realityImage: "https://res.cloudinary.com/del1pfnko/image/upload/v1745774932/Mrs._Fira_12_of_26_uviwuo.jpg",
    gallery: [
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774780/E31_kpann1.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774775/E23_ov6amk.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774774/E22_ht55zx.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774773/E21_srrju7.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774768/E20_h0rlij.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774692/E19_rqflco.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774691/E14_nqeztj.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774690/E32_xya431.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774940/Mrs._Fira_1_of_26_bke6j8.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774939/Mrs._Fira_10_of_26_ig1aah.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774938/Mrs._Fira_26_of_26_ngi1ma.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774932/Mrs._Fira_12_of_26_uviwuo.jpg",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745774931/Mrs._Fira_14_of_26_v0pzpp.jpg",
    ],
    features: [
      "Open-plan kitchen with integrated dining area",
      "Large kitchen island for added workspace",
      "Modern appliances and fixtures",
      "Neutral color palette with natural wood accents"
    ],
    materials: [
      "Polished stone countertops",
      "Wooden cabinetry and shelving",
      "Ceramic backsplash and flooring"
    ],
    relatedProjects: [
      {
        id: "esma-coffee-shop",
        title: "Esma Coffee Shop",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "coffee-shop"
      },
      {
        id: "mrs-kristy-project",
        title: "Mrs. Kristy's Living Room Design",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "living-room"
      },
      {
        id: "mrs-siti-project",
        title: "Mrs. Siti's Kitchen Design",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "kitchen-set"
      }
    ]
  },
  //Residential Projects Mrs. Lamia
  {
    id: "mrs-lamia-project",
    title: "Karyawan & Seating Area Mrs. Lamia",
    subtitle: "Efficient and Collaborative Karyawan & Seating Area Design",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745770474/F2_qbezpq.png",
    category: "commercial",
    subcategory: "office",
    location: "Malang, Pakis",
    area: "16.5 m²",
    duration: "1 month",
    completed: "2024",
    client: "Mrs. Lamia",
    description: [
      "This project focuses on creating a productive and collaborative space for employees, designed to foster both individual work and team interactions.",
      "The layout incorporates ergonomic seating and flexible workstations, with a modern aesthetic that promotes creativity and comfort.",
      "Lighting and materials were chosen to enhance the productivity of the space, ensuring that each corner offers both function and style."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745770466/F4_c8bt2e.png",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745770555/DSC01443_m8qqdx.jpg",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745770598/DSC01319_in0pap.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745770555/DSC01443_m8qqdx.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745770470/E15_z5gqnf.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745770468/F3_l5tuaf.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745770464/F6_ohiehc.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745770462/F1_swxe2z.png",
    ],
    features: [
      "Flexible seating arrangements with ergonomic chairs",
      "Modular workstations for collaborative projects",
      "Efficient lighting system for maximum productivity",
      "Open space layout with plenty of natural light"
    ],
    materials: [
      "Ergonomic office furniture",
      "Polished wooden flooring",
      "Modern lighting fixtures",
      "Neutral color scheme with pops of bright accents"
    ],
    relatedProjects: [
      {
        id: "esma-coffee-shop",
        title: "Esma Coffee Shop",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "coffee-shop"
      },
      {
        id: "mrs-fira-project",
        title: "Mrs. Fira's Kitchen & Dining Area",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "kitchen-set"
      },
      {
        id: "mrs-kristy-project",
        title: "Mrs. Kristy's Living Room",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "living-room"
      }
    ]
  },
  //Residential Projects Mrs. Ocha
  {
    id: "mrs-ocha-project",
    title: "Master Bedroom Mrs. Ocha",
    subtitle: "Cozy and Minimalist Master Bedroom Design",
    image: "https://res.cloudinary.com/del1pfnko/image/upload/v1745777469/KM2_enducu.png",
    category: "residential",
    subcategory: "bedroom",
    location: "Sidoarjo",
    area: "6.8 m²",
    duration: "1 Year",
    completed: "2024",
    client: "Mrs. Ocha",
    description: [
      "A warm and inviting master bedroom with minimalist design touches.",
      "Maximizing small space functionality without compromising comfort.",
      "Soft neutral tones enhance the sense of space and relaxation."
    ],
    designImage: "https://res.cloudinary.com/del1pfnko/image/upload/v1745777503/RT2_wnssil.png",
    realityImage: "https://res.cloudinary.com/del1pfnko/image/upload/v1745777725/DSC04571_pv4ndd.jpg",
    gallery: [
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745777503/RT3_b0bxyz.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745777503/RT3_b0bxyz.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745777499/RT1_nz4wmd.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745777497/KM7_rcfbub.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745777494/KM4_b7npvf.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745777485/KM3_a7jb1l.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745777478/KM5_bdkref.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745777469/KM2_enducu.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745777725/DSC04571_pv4ndd.jpg",

    ],
    features: [
      "Space-saving furniture",
      "Soft ambient lighting",
      "Optimized layout for small area"
    ],
    materials: [
      "Laminate wood flooring",
      "Matte wall paint",
      "Custom built-in wardrobe"
    ],
    relatedProjects: [
      {
        id: "mrs-kristy-project",
        title: "Open Space Mrs. Kristy",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "family-room"
      },
      {
        id: "mrs-farida-project",
        title: "Living Room Mrs. Farida",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "living-room"
      },
      {
        id: "mrs-fira-project",
        title: "Family Room Mrs. Fira",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "family-room"
      }
    ]
  }
  ,
  //Residential Projects Mrs. Febi 
  {
    id: "mrs-febi-project",
    title: "Kids Bedroom Mrs. Febi",
    subtitle: "Bright and Cheerful Kids Bedroom Design",
    image: "https://res.cloudinary.com/del1pfnko/image/upload/v1745778940/C12_ogedaj.png",
    category: "residential",
    subcategory: "kids-bedroom",
    location: "Malang",
    area: "13.6 m²",
    duration: "1.5 Months",
    completed: "2023",
    client: "Mrs. Febi",
    description: [
      "A fun and colorful kids bedroom designed for creativity and comfort.",
      "Balanced space for play, rest, and study activities.",
      "Soft furnishings and lively accents to stimulate imagination."
    ],
    designImage: "https://res.cloudinary.com/del1pfnko/image/upload/v1745778859/C10_oeamvl.png",
    realityImage: "/placeholder.jpg",
    gallery: [
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745778944/C20_pmwtjn.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745778859/C10_oeamvl.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745778978/C24_jck0gj.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745779006/C34_pspvnf.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745779010/C38_iqgu4j.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745779013/C39_o9qci9.png",
    ],
    features: [
      "Child-safe furniture",
      "Creative storage solutions",
      "Playful wall accents"
    ],
    materials: [
      "Vinyl flooring",
      "Non-toxic wall paint",
      "Custom cabinetry"
    ],
    relatedProjects: [
      {
        id: "mrs-cindy-project",
        title: "Kids Bedroom Mrs. Cindy",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "kids-bedroom"
      },
      {
        id: "mrs-trixie-project",
        title: "Kids Bedroom Mrs. Trixie",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "kids-bedroom"
      },
      {
        id: "mrs-mila-project",
        title: "Kids Bedroom Mrs. Mila",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "kids-bedroom"
      }
    ]
  },  
  //Residential Projects Mrs. Bunga
  {
    id: "mrs-bunga-project",
    title: "Children's Room Mrs. Bunga",
    subtitle: "Playful and Cozy Children's Room Design",
    image: "https://res.cloudinary.com/del1pfnko/image/upload/v1745779819/E8_sczamh.png",
    category: "residential",
    subcategory: "kids-bedroom", // Based on the area chosen
    location: "Pasuruan, Bangil",
    area: "8 m²", // Area Children's Room
    duration: "1 week",
    completed: "2024",
    client: "Mrs. Bunga",
    description: [
      "This children's room was designed to create a cozy, playful, and functional space for a growing child.",
      "Bright colors, fun furniture, and playful accents were chosen to stimulate creativity and imagination.",
      "The room also features practical storage solutions to keep toys and belongings organized, maximizing the small space."
    ],
    designImage: "https://res.cloudinary.com/del1pfnko/image/upload/v1745779864/E2_ynklwh.png",
    realityImage: "/placeholder.jpg",
    gallery: [
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745779777/E1_jm5iwo.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745779781/E13_bz8x1r.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745779809/E9_iwxeip.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745779881/E14_dtyyww.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745779864/E2_ynklwh.png",
    ],
    features: [
      "Bright color scheme with playful accents",
      "Space-saving furniture for better functionality",
      "Dedicated play area with soft, comfortable flooring",
      "Creative and fun wall designs"
    ],
    materials: [
      "Soft carpet flooring for comfort",
      "Bright, durable wall paints",
      "Multifunctional furniture for storage and play",
      "Wooden shelves and toy storage bins"
    ],
    relatedProjects: [
      {
        id: "esma-coffee-shop",
        title: "Esma Coffee Shop",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "coffee-shop"
      },
      {
        id: "mrs-ocha-project",
        title: "Mrs. Ocha's Living Room",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "living-room"
      },
      {
        id: "mrs-febi-project",
        title: "Living Room & Dining Area Mrs. Febi",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "living-room"
      }
    ]
  },  
  //Residential Projects Mrs. Pipid
  {
    id: "mrs-pipid-project",
    title: "Kitchen Mrs. Pipid",
    subtitle: "Modern and Functional Kitchen Design",
    image: "https://res.cloudinary.com/del1pfnko/image/upload/v1745780237/C8_oxry0t.png",
    category: "residential",
    subcategory: "kitchen-set",
    location: "Pekalongan",
    area: "10 m²",
    duration: "1 Month",
    completed: "2024",
    client: "Mrs. Pipid",
    description: [
      "A modern kitchen design focused on functionality and sleek aesthetics.",
      "Maximized storage and efficient layout for daily cooking activities.",
      "Bright and airy ambiance with clean finishes."
    ],
    designImage: "https://res.cloudinary.com/del1pfnko/image/upload/v1745780243/C13_orw4y7.png",
    realityImage: "/placeholder.jpg",
    gallery: [
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745780265/C5_cxtfly.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745780281/C7_ixbm2c.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745780281/C10_mcraiy.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745780292/C12_bl0gnb.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745780309/C16_raj9dx.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745780329/C21_l106tr.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745780318/C18_nbfdki.png",
    ],
    features: [
      "Built-in cabinetry",
      "Quartz countertop",
      "Efficient lighting"
    ],
    materials: [
      "HPL finish",
      "Quartz surface",
      "Tempered glass backsplash"
    ],
    relatedProjects: [
      {
        id: "mrs-agnes-project",
        title: "Kitchen Mrs. Agnes",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "kitchen-set"
      },
      {
        id: "mrs-acun-project",
        title: "Kitchen Mrs. Acun",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "kitchen-set"
      }
    ]
  }
  ,
  //Residential Projects Mrs. Mila
  {
    id: "mrs-mila-project",
    title: "Kids' Room Mrs. Mila",
    subtitle: "Bright and Playful Kids' Room Design",
    image: "https://res.cloudinary.com/del1pfnko/image/upload/v1745780603/E4_u7vcct.png",
    category: "residential",
    subcategory: "kids-bedroom", // Based on the area chosen
    location: "Pekalongan",
    area: "13.2 m²", // Area Kamar Anak
    duration: "2 weeks",
    completed: "2024",
    client: "Mrs. Mila",
    description: [
      "The kids' room was designed to be vibrant and playful, creating a fun space for the child.",
      "Bright colors and whimsical elements are incorporated to encourage creativity and imagination.",
      "Custom furniture was designed to ensure both functionality and comfort, with ample storage space."
    ],
    designImage: "https://res.cloudinary.com/del1pfnko/image/upload/v1745780598/E2_oapbvb.png",
    realityImage: "/placeholder.jpg",
    gallery: [
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745780598/E2_oapbvb.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745780603/E4_u7vcct.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745780606/E7_ngtu4x.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745780729/E10_o7n7lz.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745780729/E10_o7n7lz.png",
      "https://res.cloudinary.com/del1pfnko/image/upload/v1745780754/E5_tk3sic.png",
      
    ],
    features: [
      "Bright and playful color scheme",
      "Custom furniture for storage and comfort",
      "Whimsical design elements like wall decals and playful lights",
      "Safe, kid-friendly materials"
    ],
    materials: [
      "Soft, durable fabric upholstery",
      "Non-toxic paints and finishes",
      "Wooden shelving and storage units",
      "Colorful rugs and cushions"
    ],
    relatedProjects: [
      {
        id: "esma-coffee-shop",
        title: "Esma Coffee Shop",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "coffee-shop"
      },
      {
        id: "mrs-ocha-project",
        title: "Mrs. Ocha's Living Room",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "living-room"
      },
      {
        id: "mrs-febi-project",
        title: "Living Room & Dining Area Mrs. Febi",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "living-room"
      }
    ]
  },
  //Residential Projects Mrs. Aghnia
  {
    id: "mrs-aghnia-project",
    title: "Family Room Mrs. Aghnia",
    subtitle: "Spacious and Comfortable Family Room Design",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883537/C6_bucirv.png",
    category: "residential",
    subcategory: "family-room", // Based on the area chosen
    location: "Malang",
    area: "35.4 m²", // Area Family Room
    duration: "2 months",
    completed: "2022",
    client: "Mrs. Aghnia",
    description: [
      "The family room was designed to be spacious and comfortable, a perfect place for relaxation and gatherings.",
      "Soft seating arrangements and functional storage options were incorporated to ensure comfort and convenience.",
      "Natural light was maximized through large windows, while warm lighting accents create a cozy ambiance in the evenings."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883534/C3_sfl12t.png",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883542/C7_yicayd.png",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883542/C7_yicayd.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883540/C10_xi4oas.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883539/C9_rmn6ie.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883538/C8_gkhpaf.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883537/C6_bucirv.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883536/C5_f7ffpv.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883536/C5_f7ffpv.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883535/C4_gl240e.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883533/C1_dmlgwd.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883530/C11_pqng5k.png"
    ],
    features: [
      "Large seating area for family gatherings",
      "Ample natural lighting from large windows",
      "Functional storage solutions for books and decor",
      "Cozy lighting elements for evening ambiance"
    ],
    materials: [
      "Soft fabric upholstery for seating",
      "Wooden shelves for storage",
      "Durable flooring with a cozy rug",
      "Warm lighting fixtures for a comfortable atmosphere"
    ],
    relatedProjects: [
      {
        id: "esma-coffee-shop",
        title: "Esma Coffee Shop",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "coffee-shop"
      },
      {
        id: "mrs-febi-project",
        title: "Living Room & Dining Area Mrs. Febi",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "living-room"
      },
      {
        id: "mrs-mila-project",
        title: "Kids' Room Mrs. Mila",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "kids-bedroom"
      }
    ]
  },
  //Residential Projects mrs farhana
  {
    id: "mrs-farhana-project",
    title: "Family Room & Coffee Corner Mrs. Farhana",
    subtitle: "Comfortable and Elegant Family Room & Coffee Corner Design",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883918/B1_kblu4g.png",
    category: "residential", 
    subcategory: "family-room", 
    location: "Madura, Bangkalan",
    area: "64 m²", 
    duration: "3 months",
    completed: "2024",
    client: "Mrs. Farhana",
    description: [
      "This project focuses on creating a cozy and functional family room with a coffee corner, perfect for casual gatherings and family bonding.",
      "The design features a combination of modern and traditional elements, providing a warm atmosphere for everyday use.",
      "Custom furniture pieces and ambient lighting were incorporated to enhance the space's inviting feel."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883918/B1_kblu4g.png",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883900/B11_evbjc3.png",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883927/B8_zmi9xs.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883926/b4_wsvy8m.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883922/B10_ulk21d.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883921/B3_xchy3s.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883919/B2_y8gidw.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883918/B1_kblu4g.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883917/B7_wdujcr.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883913/d5_gykgzf.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883904/B6_nofy1c.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883903/B12_sqlno1.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745883899/B13_drlq5h.png"
    ],
    features: [
      "Open-plan design with integrated coffee corner",
      "Comfortable seating for family gatherings",
      "Custom lighting for ambiance",
      "Modern decor with traditional touches"
    ],
    materials: [
      "Natural wood finishes for furniture and decor",
      "Soft textiles for a cozy feel",
      "Neutral color palette for a calming atmosphere",
      "Sleek lighting fixtures for mood setting"
    ],
    relatedProjects: [
      {
        id: "luxury-retail-store",
        title: "Luxury Retail Store",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "store"
      },
      {
        id: "modern-office-space",
        title: "Modern Office Space",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "office"
      },
      {
        id: "boutique-boarding-house",
        title: "Boutique Boarding House",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "boarding"
      }
    ]
  },  
  //Residential Projects mrs shabira
  {
    id: "mrs-shabira-project",
    title: "Majlis Arabic Mrs. Shabira",
    subtitle: "Elegant and Inviting Arabic Majlis Design",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885226/IMG_2483_Original_tzfgzl.jpg",
    category: "residential", 
    subcategory: "arabic-majlis", 
    location: "Pekalongan",
    area: "21.6 m²", 
    duration: "Design & Build in progress",
    completed: "2023",
    client: "Mrs. Shabira",
    description: [
      "The Majlis Arabic design combines traditional elements with a modern touch to create a comfortable and welcoming space for gatherings.",
      "The design features luxurious seating arrangements, with rich textures and elegant details that highlight the beauty of Arabic culture.",
      "Custom-designed lighting enhances the ambiance, providing a warm and inviting atmosphere perfect for socializing."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885218/3_tbpncb.png",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885226/IMG_2483_Original_tzfgzl.jpg",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885229/IMG_2516_Original_entoj3.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885227/IMG_2519_Original_ph1qtz.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885220/4_etfzkm.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885218/2_ksgn9x.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885215/1_dicqr5.png"
    ],
    features: [
      "Spacious seating area for socializing",
      "Traditional Arabic design with modern elements",
      "Custom lighting for ambiance",
      "Luxurious and comfortable materials"
    ],
    materials: [
      "Luxurious textiles for seating",
      "Intricate woodwork for decorative elements",
      "Traditional carpets and rugs",
      "Custom lighting fixtures for mood setting"
    ],
    relatedProjects: [
      {
        id: "luxury-retail-store",
        title: "Luxury Retail Store",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "store"
      },
      {
        id: "modern-office-space",
        title: "Modern Office Space",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "office"
      },
      {
        id: "boutique-boarding-house",
        title: "Boutique Boarding House",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "boarding"
      }
    ]
  },
  //Residential Projects mrs nita
  {
    id: "mrs-nita-project",
    title: "Living Room Mrs. Nita",
    subtitle: "Elegant and Functional Living Room Design",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885661/mrs._nita_int__jtj8at.jpg",
    category: "residential", // Adjusted to residential as it's a home space
    subcategory: "living-room", // Adjusted to living-room based on the area chosen
    location: "Malang, Lowokwaru",
    area: "20 m²", // Area for Living Room
    duration: "Design & Build in progress",
    completed: "2025",
    client: "Mrs. Nita",
    description: [
      "This project focuses on creating a modern and comfortable living room with a balance of functionality and aesthetics.",
      "The design incorporates a cozy atmosphere with functional furniture, making the space perfect for both relaxation and socializing.",
      "The living room is designed with a mix of modern and timeless elements, ensuring it remains appealing for years to come."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885661/mrs._nita_int__jtj8at.jpg",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885667/mrs._nita_2_hj2tvp.jpg",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885684/mrs._nita_int_alt_2_o1fuic.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885683/mrs._nita_3_wpcgc2.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885678/mrs._nita_3_alt_2_uwgxwl.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885667/mrs._nita_2_hj2tvp.jpg",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745885665/mrs._nita_2_alt_2_gof4fd.jpg"
    ],
    features: [
      "Spacious and cozy seating arrangement",
      "Custom furniture pieces for optimal use of space",
      "Soft lighting for a warm ambiance",
      "Multifunctional elements for practical use"
    ],
    materials: [
      "Textured fabrics for seating",
      "Wooden accents for a warm feel",
      "Neutral tones for walls and flooring",
      "Accent lighting for a cozy atmosphere"
    ],
    relatedProjects: [
      {
        id: "luxury-retail-store",
        title: "Luxury Retail Store",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "store"
      },
      {
        id: "modern-office-space",
        title: "Modern Office Space",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "office"
      },
      {
        id: "boutique-boarding-house",
        title: "Boutique Boarding House",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "boarding"
      }
    ]
  },  
  //Residential Projects mrs nur
  {
    id: "mrs-nur-project",
    title: "Living Room Mrs. Nur",
    subtitle: "Modern and Spacious Living Room Design",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886160/A7_sf70b7.png",
    category: "residential", // Adjusted to residential as it's a home space
    subcategory: "bedroom", // Adjusted to living-room based on the area chosen
    location: "Jakarta, Casa Grande",
    area: "13.6 m²", // Area for Living Room
    duration: "Design & Build in progress",
    completed: "On going",
    client: "Mrs. Nur",
    description: [
      "This project focuses on creating a contemporary living room that is both stylish and functional.",
      "The design aims to provide a comfortable space for relaxation, with an emphasis on creating a welcoming environment.",
      "We incorporated modern elements to provide a sophisticated touch while maintaining a homely feel."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886160/A7_sf70b7.png",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886156/A6_yl8f04.png",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886162/A12_jxuugv.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886160/A7_sf70b7.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886158/A5_xzojre.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886156/A6_yl8f04.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886155/A1_c8owhs.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886153/A8_b7p7qg.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886151/A10_avtbsb.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886152/A4_ikq1l6.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886149/A11_w6aysp.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886148/A3_jztsbs.png"
    ],
    features: [
      "Modern and minimalist furniture layout",
      "Comfortable seating arrangement for family and guests",
      "Neutral color scheme for a calming effect",
      "Large windows to let in natural light"
    ],
    materials: [
      "High-quality upholstery for seating",
      "Wooden accents for warmth",
      "Neutral-toned walls and flooring",
      "Statement lighting for a contemporary touch"
    ],
    relatedProjects: [
      {
        id: "luxury-retail-store",
        title: "Luxury Retail Store",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "store"
      },
      {
        id: "modern-office-space",
        title: "Modern Office Space",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "office"
      },
      {
        id: "boutique-boarding-house",
        title: "Boutique Boarding House",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "boarding"
      }
    ]
  },  
  //Residential Projects mrs astri
  {
    id: "mrs-astri-project",
    title: "Living Room Mrs. Astri",
    subtitle: "Modern and Cozy Living Room Design",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886495/B3_bzhmy5.png",
    category: "residential", // Adjusted to residential for a home space
    subcategory: "living-room", // Adjusted to living-room based on the area chosen
    location: "Bekasi",
    area: "24.5 m²", // Area for Living Room
    duration: "Design duration: 1 month",
    completed: "On going",
    client: "Mrs. Astri",
    description: [
      "This living room project blends modern and cozy elements to create an inviting and functional space.",
      "The design focuses on maximizing comfort with a spacious layout, stylish furniture, and thoughtful lighting.",
      "We incorporated neutral tones with accent colors for a balanced look, providing a serene atmosphere."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886497/B4_pkdrxg.png",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886495/B3_bzhmy5.png",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886493/B2_c1e9t4.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886493/B1_xjwric.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886497/B4_pkdrxg.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886495/B3_bzhmy5.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886493/B2_c1e9t4.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745886492/B5_vvrd5z.png"
    ],
    features: [
      "Open floor plan with ample space for family gatherings",
      "Comfortable and contemporary seating arrangement",
      "Large windows for abundant natural light",
      "Feature wall with decorative elements for visual interest"
    ],
    materials: [
      "Premium upholstery for the sofa and chairs",
      "Sleek wooden flooring",
      "Soft textiles for cushions and throws",
      "Modern lighting fixtures with adjustable settings"
    ],
    relatedProjects: [
      {
        id: "luxury-retail-store",
        title: "Luxury Retail Store",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "store"
      },
      {
        id: "modern-office-space",
        title: "Modern Office Space",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "office"
      },
      {
        id: "boutique-boarding-house",
        title: "Boutique Boarding House",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "boarding"
      }
    ]
  },  
  //Residential Projects mrs anjani
  {
    id: "mrs-anjani-project",
    title: "Kitchen Set Mrs. Anjani",
    subtitle: "Stylish and Functional Kitchen Design",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887732/Enscape_2023-08-01-14-21-48_c4dwol.png",
    category: "residential", // Adjusted to residential for a home space
    subcategory: "kitchen-set", // Adjusted to kitchen-set based on the area chosen
    location: "Malang, Pandanwangi",
    area: "9 m²", // Area for Kitchen Set
    duration: "Design & Build duration: 1 month",
    completed: "2024",
    client: "Mrs. Anjani",
    description: [
      "This kitchen set design emphasizes functionality and modern aesthetics with efficient use of space.",
      "The design incorporates sleek cabinetry, advanced appliances, and smart storage solutions to make the kitchen both stylish and practical.",
      "A neutral color palette with pops of warm tones ensures the kitchen feels inviting and comfortable."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887732/Enscape_2023-08-01-14-21-48_c4dwol.png",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887730/Enscape_2023-08-01-14-23-07_hkwilp.png",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887732/Enscape_2023-08-01-14-21-48_c4dwol.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887730/Enscape_2023-08-01-14-23-07_hkwilp.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887728/Enscape_2023-08-01-14-28-52_bxwh3u.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887727/Enscape_2023-08-01-14-16-26_vxkd8j.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887726/Enscape_2023-08-01-14-19-14_z1hpls.png"
    ],
    features: [
      "Custom cabinetry for optimal storage",
      "Modern, energy-efficient appliances",
      "Compact and space-saving layout",
      "Integrated lighting to enhance the cooking experience"
    ],
    materials: [
      "High-quality wood finishes for cabinetry",
      "Durable granite countertops",
      "Stainless steel appliances",
      "Ceramic tiles for the backsplash"
    ],
    relatedProjects: [
      {
        id: "modern-office-space",
        title: "Modern Office Space",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "office"
      },
      {
        id: "luxury-retail-store",
        title: "Luxury Retail Store",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "store"
      },
      {
        id: "boutique-boarding-house",
        title: "Boutique Boarding House",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "boarding"
      }
    ]
  },  
  //Residential Projects mrs agnes
  {
    id: "mrs-agnes-project",
    title: "Kitchen Mrs. Agnes",
    subtitle: "Functional and Contemporary Kitchen Design",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887864/2_q8p1qg.png",
    category: "residential", // Adjusted to residential as it's a home design
    subcategory: "kitchen-set", // Adjusted to kitchen-set for the kitchen area
    location: "Malang",
    area: "9 m²", // Area for Kitchen
    duration: "Design duration: 1 week",
    completed: "2022",
    client: "Mrs. Agnes",
    description: [
      "This kitchen design maximizes space while incorporating modern appliances and storage solutions.",
      "The layout is designed to optimize workflow, with easy access to all key areas of the kitchen.",
      "The design features contemporary finishes with clean lines and a minimalist approach."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887864/2_q8p1qg.png",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887869/5_dq9kvk.png",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887869/5_dq9kvk.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887866/3_t7cmar.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887864/2_q8p1qg.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745887860/4_qotvi1.png"
    ],
    features: [
      "Efficient use of space with custom cabinetry",
      "Modern appliances integrated into the design",
      "Sleek and minimalistic aesthetic",
      "Lighting design for both function and ambiance"
    ],
    materials: [
      "Wooden cabinetry with a smooth finish",
      "Marble countertops for durability",
      "High-end stainless steel appliances",
      "Glossy ceramic backsplash"
    ],
    relatedProjects: [
      {
        id: "modern-office-space",
        title: "Modern Office Space",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "office"
      },
      {
        id: "luxury-retail-store",
        title: "Luxury Retail Store",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "store"
      },
      {
        id: "boutique-boarding-house",
        title: "Boutique Boarding House",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "boarding"
      }
    ]
  },  
  //Residential Projects mrs cindy
  {
    id: "mrs-cindy-project",
    title: "Children's Room Mrs. Cindy",
    subtitle: "Comfortable and Playful Children's Room Design",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888343/D_hgenn1.png",
    category: "residential", // Adjusted to residential as it's a home design
    subcategory: "kids-bedroom", // Adjusted to kids-bedroom for children's room
    location: "Malang, Kedungkandang",
    area: "9 m²", // Area for Children's Room
    duration: "Design & Build duration: 1 month",
    completed: "2023",
    client: "Mrs. Cindy",
    description: [
      "This children's room design prioritizes comfort and fun, incorporating playful elements that appeal to young children.",
      "The layout is designed to maximize space while providing ample storage for toys and books.",
      "Bright, cheerful colors and creative furniture choices create a vibrant atmosphere that encourages play and learning."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888344/E_cuwqzu.png",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888343/D_hgenn1.png",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888344/E_cuwqzu.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888343/D_hgenn1.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888342/C_2_wpra7j.png"
    ],
    features: [
      "Custom furniture designed to grow with the child",
      "Ample storage for toys and personal items",
      "Bright, cheerful color scheme",
      "Safe, child-friendly materials and finishes"
    ],
    materials: [
      "Durable, child-safe paints and finishes",
      "Wooden furniture with smooth edges",
      "Comfortable soft furnishings for seating and play",
      "Non-toxic floor finishes"
    ],
    relatedProjects: [
      {
        id: "modern-office-space",
        title: "Modern Office Space",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "office"
      },
      {
        id: "luxury-retail-store",
        title: "Luxury Retail Store",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "store"
      },
      {
        id: "boutique-boarding-house",
        title: "Boutique Boarding House",
        image: "/commercial/coffee-shop/esma/placeholder.svg?height=300&width=400",
        category: "commercial",
        subcategory: "boarding"
      }
    ]
  },
  // Residential Projects mrs trixie
  {
    id: "mrs-trixie-project",
    title: "Children's Room Mrs. Trixie",
    subtitle: "Charming and Functional Children's Room Design",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888654/3D_qclgpr.png",
    category: "residential",
    subcategory: "kids-bedroom",
    location: "Malang, Arjosari",
    area: "9 m²",
    duration: "Design duration: 1 week",
    completed: "2022",
    client: "Mrs. Trixie",
    description: [
      "This children's room design combines functionality and charm to create a delightful space for a young child.",
      "A smart layout maximizes the limited 9 m² area, offering both sleeping and play zones.",
      "The room features soft, calming colors and furniture tailored to children's needs."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888659/3E_xcsxm5.png",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888649/3A_ugm0av.png",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888659/3E_xcsxm5.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888657/3C_ki01qb.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888659/3E_xcsxm5.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888652/3F_bam75q.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888651/3B_opdvcf.png",
    ],
    features: [
      "Space-efficient layout for small rooms",
      "Built-in storage solutions",
      "Child-friendly furniture and finishes",
      "Soft and calming color palette"
    ],
    materials: [
      "Eco-friendly paint",
      "Durable wood for furniture",
      "Non-slip flooring",
      "Hypoallergenic textiles"
    ],
    relatedProjects: [
      {
        id: "mrs-cindy-project",
        title: "Children's Room Mrs. Cindy",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "kids-bedroom"
      },
      {
        id: "mrs-bunga-project",
        title: "Children's Room Mrs. Bunga",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "kids-bedroom"
      },
      {
        id: "mrs-mila-project",
        title: "Children's Room Mrs. Mila",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "kids-bedroom"
      }
    ]
  },
  // Residential Projects mrs yasmin
  {
    id: "mrs-yasmin-mlg-project",
    title: "Majlis Arabic Mrs. Yasmin",
    subtitle: "Elegant and Serene Majlis Arabic Design",
    image: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888775/5_cesjok.png",
    category: "residential",
    subcategory: "arabic-majlis",
    location: "Malang, Pandanwangi",
    area: "11.2 m²",
    duration: "Design duration: 4 weeks",
    completed: "2024",
    client: "Mrs. Yasmin (MLG)",
    description: [
      "A calming and luxurious Majlis Arabic space designed with traditional influences and modern comfort.",
      "The 11.2 m² area optimizes functionality while maintaining cultural authenticity.",
      "Intricate detailing and soft color palettes create a harmonious and inviting ambiance."
    ],
    designImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888783/9_mjzwym.png",
    realityImage: "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888775/5_cesjok.png",
    gallery: [
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888772/8_chosva.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888775/5_cesjok.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888778/6_vgttuk.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888781/7_swf3bd.png",
      "https://res.cloudinary.com/dec19xsoi/image/upload/v1745888783/9_mjzwym.png",
    ],
    features: [
      "Traditional Arabic seating arrangement",
      "Elegant patterned wall accents",
      "Soft ambient lighting",
      "Custom-designed rugs and upholstery"
    ],
    materials: [
      "Velvet upholstery",
      "Mosaic tiles",
      "Textured wallpaper",
      "Hardwood flooring"
    ],
    relatedProjects: [
      {
        id: "mrs-shabira-project",
        title: "Majlis Arabic Mrs. Shabira",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "arabic-majlis"
      },
      {
        id: "mrs-farhana-project",
        title: "Majlis Arabic Mrs. Farhana",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "arabic-majlis"
      },
      {
        id: "mrs-fira-project",
        title: "Majlis Arabic Mrs. Fira",
        image: "/placeholder.jpg",
        category: "residential",
        subcategory: "arabic-majlis"
      }
    ]
  },  
  // Residential Projects mrs acun
  // {
  //   id: "mrs-acun-project",
  //   title: "Kitchen Mrs. Acun",
  //   subtitle: "Modern and Functional Kitchen Design",
  //   image: "/placeholder.jpg",
  //   category: "residential",
  //   subcategory: "kitchen-set",
  //   location: "Malang, Dau",
  //   area: "16.5 m²",
  //   duration: "Design & Build: On Going",
  //   completed: "On Going",
  //   client: "Mrs. Acun",
  //   description: [
  //     "A sleek and modern kitchen design focusing on functionality and efficient workflow.",
  //     "The 16.5 m² kitchen is planned to maximize storage, natural light, and movement space.",
  //     "Blending neutral tones and premium finishes for an elegant, timeless appeal."
  //   ],
  //   designImage: "/placeholder.jpg",
  //   realityImage: "/placeholder.jpg",
  //   gallery: [
  //     "/placeholder.jpg",
  //     "/placeholder.jpg"
  //   ],
  //   features: [
  //     "Efficient L-shaped kitchen layout",
  //     "Custom cabinetry with soft-close features",
  //     "Integrated lighting solutions",
  //     "High-durability countertop materials"
  //   ],
  //   materials: [
  //     "Quartz countertops",
  //     "Matte-finish cabinetry",
  //     "Subway tile backsplash",
  //     "Engineered wood flooring"
  //   ],
  //   relatedProjects: [
  //     {
  //       id: "mrs-agnes-project",
  //       title: "Kitchen Mrs. Agnes",
  //       image: "/placeholder.jpg",
  //       category: "residential",
  //       subcategory: "kitchen-set"
  //     },
  //     {
  //       id: "mrs-nur-project",
  //       title: "Kitchen & Pantry Mrs. Nur",
  //       image: "/placeholder.jpg",
  //       category: "residential",
  //       subcategory: "kitchen-set"
  //     },
  //     {
  //       id: "mrs-fira-project",
  //       title: "Kitchen & Dining Area Mrs. Fira",
  //       image: "/placeholder.jpg",
  //       category: "residential",
  //       subcategory: "kitchen-set"
  //     }
  //   ]
  // },  
    
  
]

// Helper functions to get projects
export function getAllProjects() {
  return projects
}

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((project) => project.category === category)
}

export function getProjectsBySubcategory(category: ProjectCategory, subcategory: ProjectSubcategory) {
  return projects.filter((project) => project.category === category && project.subcategory === subcategory)
}

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id)
}

export function getRelatedProjects(id: string, limit = 3) {
  const project = getProjectById(id)
  if (!project) return []

  // Get projects with same category and subcategory, excluding current project
  const sameSubcategory = projects.filter(
    (p) => p.id !== id && p.category === project.category && p.subcategory === project.subcategory,
  )

  // If we have enough projects with the same subcategory, return those
  if (sameSubcategory.length >= limit) {
    return sameSubcategory.slice(0, limit)
  }

  // Otherwise, get projects with the same category
  const sameCategory = projects.filter((p) => p.id !== id && p.category === project.category)

  // Combine unique projects from both arrays
  const combined = [...sameSubcategory]

  for (const p of sameCategory) {
    if (!combined.some((c) => c.id === p.id) && combined.length < limit) {
      combined.push(p)
    }
  }

  return combined.slice(0, limit)
}
