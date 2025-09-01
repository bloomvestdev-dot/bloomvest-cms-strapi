import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksAboutUs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_about_uses';
  info: {
    displayName: 'About us';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.cards', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksArchivedWebinars extends Struct.ComponentSchema {
  collectionName: 'components_blocks_archived_webinars';
  info: {
    displayName: 'Archived Webinars';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksBlog extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blogs';
  info: {
    displayName: 'Blog';
  };
  attributes: {
    category: Schema.Attribute.String;
    commentCount: Schema.Attribute.String;
    date: Schema.Attribute.DateTime;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    likeCount: Schema.Attribute.String;
    readTime: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksBlogHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_blog_heroes';
  info: {
    displayName: 'Blog Hero';
    icon: 'command';
  };
  attributes: {
    categories: Schema.Attribute.Component<'elements.categories', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksContactHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contact_heroes';
  info: {
    displayName: 'Contact Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    register: Schema.Attribute.Component<'blocks.why-register', false>;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksCourse extends Struct.ComponentSchema {
  collectionName: 'components_blocks_courses';
  info: {
    displayName: 'Course';
  };
  attributes: {
    courseDuration: Schema.Attribute.String;
    courseType: Schema.Attribute.Enumeration<
      ['Video Course', 'Reading Material']
    >;
    courseValue: Schema.Attribute.Enumeration<['Free', 'Paid']>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    difficulty: Schema.Attribute.Enumeration<
      ['Beginner', 'Intermediate', 'Expert', 'Legendary']
    >;
    featuredCourse: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<false>;
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.Enumeration<['Book', 'Camera']>;
    relatedCourseCount: Schema.Attribute.String;
  };
}

export interface BlocksEducationHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_education_heroes';
  info: {
    displayName: 'Education Hero';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Text;
    stats: Schema.Attribute.Component<'elements.cards', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksExpertArticle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_expert_articles';
  info: {
    displayName: 'Expert Article';
  };
  attributes: {
    card: Schema.Attribute.Component<'blocks.expert-article-card', true>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksExpertArticleCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_expert_article_cards';
  info: {
    displayName: 'Expert Article Card';
  };
  attributes: {
    color: Schema.Attribute.Enumeration<['Blue', 'Orange', 'Purple']>;
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    length: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksFeaturedBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_featured_blocks';
  info: {
    displayName: 'Featured Block';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    imageOne: Schema.Attribute.Media<'images'>;
    imageThree: Schema.Attribute.Media<'images'>;
    imageTwo: Schema.Attribute.Media<'images'>;
    logos: Schema.Attribute.Component<'elements.logo', true>;
    trustedByTiltle: Schema.Attribute.String;
  };
}

export interface BlocksLatestArticle extends Struct.ComponentSchema {
  collectionName: 'components_blocks_latest_articles';
  info: {
    displayName: 'Latest Article';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksLatestCourse extends Struct.ComponentSchema {
  collectionName: 'components_blocks_latest_courses';
  info: {
    displayName: 'Latest Course';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksMissionVision extends Struct.ComponentSchema {
  collectionName: 'components_blocks_mission_visions';
  info: {
    displayName: 'Mission Vision';
  };
  attributes: {
    missionBg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    missionCard: Schema.Attribute.Component<'elements.cards', false>;
    visionBg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    visionCard: Schema.Attribute.Component<'elements.cards', false>;
  };
}

export interface BlocksOurStory extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_stories';
  info: {
    displayName: 'Our Story';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface BlocksOurValues extends Struct.ComponentSchema {
  collectionName: 'components_blocks_our_values';
  info: {
    displayName: 'Our Values';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    cards: Schema.Attribute.Component<'elements.cards', true>;
    icons: Schema.Attribute.Media<'images', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_cards';
  info: {
    displayName: 'Service Card';
    icon: 'arrowUp';
  };
  attributes: {
    isFree: Schema.Attribute.Boolean;
    points: Schema.Attribute.RichText;
    title: Schema.Attribute.String;
  };
}

export interface BlocksServiceHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_heroes';
  info: {
    displayName: 'Service Hero';
  };
  attributes: {
    card: Schema.Attribute.Component<'blocks.service-card', true>;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksServiceSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_service_sections';
  info: {
    displayName: 'Service Section';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    cards: Schema.Attribute.Component<'elements.cards', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonial_cards';
  info: {
    displayName: 'Testimonial Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    profession: Schema.Attribute.String;
  };
}

export interface BlocksTestimonials extends Struct.ComponentSchema {
  collectionName: 'components_blocks_testimonials';
  info: {
    displayName: 'Testimonials';
  };
  attributes: {
    card: Schema.Attribute.Component<'blocks.testimonial-card', true>;
    cta: Schema.Attribute.Component<'layout.cta', false>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksUpcomingWebinars extends Struct.ComponentSchema {
  collectionName: 'components_blocks_upcoming_webinars';
  info: {
    displayName: 'Upcoming Webinars';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksWebinar extends Struct.ComponentSchema {
  collectionName: 'components_blocks_webinars';
  info: {
    displayName: 'Webinar';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.live-recording-card', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    subtitle: Schema.Attribute.Text;
  };
}

export interface BlocksWebinarCard extends Struct.ComponentSchema {
  collectionName: 'components_blocks_webinar_cards';
  info: {
    displayName: 'Webinar Card';
  };
  attributes: {
    badge: Schema.Attribute.String;
    cta: Schema.Attribute.Component<'layout.cta', false>;
    date: Schema.Attribute.DateTime;
    description: Schema.Attribute.Text;
    isArchived: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    length: Schema.Attribute.String;
    registered: Schema.Attribute.String;
    speakers: Schema.Attribute.Component<'elements.speaker', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksWebinarHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_webinar_heroes';
  info: {
    displayName: 'Webinar Hero';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BlocksWhyChoose extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_chooses';
  info: {
    displayName: 'Why Choose';
  };
  attributes: {
    list: Schema.Attribute.Component<'elements.list', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlocksWhyRegister extends Struct.ComponentSchema {
  collectionName: 'components_blocks_why_registers';
  info: {
    displayName: 'Why register';
  };
  attributes: {
    point: Schema.Attribute.Component<'elements.list', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCards extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Cards';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCategories extends Struct.ComponentSchema {
  collectionName: 'components_elements_categories';
  info: {
    displayName: 'Categories';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsList extends Struct.ComponentSchema {
  collectionName: 'components_elements_lists';
  info: {
    displayName: 'list';
    icon: 'bulletList';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface ElementsLiveRecordingCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_live_recording_cards';
  info: {
    displayName: 'Live Recording Card';
  };
  attributes: {
    avatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    backgroud: Schema.Attribute.Media<'images'>;
    count: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
    icon: 'dashboard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface ElementsSpeaker extends Struct.ComponentSchema {
  collectionName: 'components_elements_speakers';
  info: {
    displayName: 'Speaker';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

export interface LayoutCta extends Struct.ComponentSchema {
  collectionName: 'components_layout_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.link', false>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    background: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    contacts: Schema.Attribute.Component<'elements.link', true>;
    cta: Schema.Attribute.Component<'layout.cta', false>;
    description: Schema.Attribute.Text;
    facebook: Schema.Attribute.Text;
    instagram: Schema.Attribute.Text;
    linkedin: Schema.Attribute.Text;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    quickLinks: Schema.Attribute.Component<'elements.link', true>;
    rightsText: Schema.Attribute.Text;
    services: Schema.Attribute.Component<'elements.link', true>;
    twitter: Schema.Attribute.Text;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.about-us': BlocksAboutUs;
      'blocks.archived-webinars': BlocksArchivedWebinars;
      'blocks.blog': BlocksBlog;
      'blocks.blog-hero': BlocksBlogHero;
      'blocks.contact-hero': BlocksContactHero;
      'blocks.course': BlocksCourse;
      'blocks.education-hero': BlocksEducationHero;
      'blocks.expert-article': BlocksExpertArticle;
      'blocks.expert-article-card': BlocksExpertArticleCard;
      'blocks.featured-block': BlocksFeaturedBlock;
      'blocks.hero-section': BlocksHeroSection;
      'blocks.latest-article': BlocksLatestArticle;
      'blocks.latest-course': BlocksLatestCourse;
      'blocks.mission-vision': BlocksMissionVision;
      'blocks.our-story': BlocksOurStory;
      'blocks.our-values': BlocksOurValues;
      'blocks.service-card': BlocksServiceCard;
      'blocks.service-hero': BlocksServiceHero;
      'blocks.service-section': BlocksServiceSection;
      'blocks.testimonial-card': BlocksTestimonialCard;
      'blocks.testimonials': BlocksTestimonials;
      'blocks.upcoming-webinars': BlocksUpcomingWebinars;
      'blocks.webinar': BlocksWebinar;
      'blocks.webinar-card': BlocksWebinarCard;
      'blocks.webinar-hero': BlocksWebinarHero;
      'blocks.why-choose': BlocksWhyChoose;
      'blocks.why-register': BlocksWhyRegister;
      'elements.cards': ElementsCards;
      'elements.categories': ElementsCategories;
      'elements.link': ElementsLink;
      'elements.list': ElementsList;
      'elements.live-recording-card': ElementsLiveRecordingCard;
      'elements.logo': ElementsLogo;
      'elements.speaker': ElementsSpeaker;
      'layout.cta': LayoutCta;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
