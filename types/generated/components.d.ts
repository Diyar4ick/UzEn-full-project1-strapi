import type { Schema, Struct } from '@strapi/strapi';

export interface AboutOrganizationAboutOrg extends Struct.ComponentSchema {
  collectionName: 'components_about_organization_about_orgs';
  info: {
    displayName: 'About org';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon_banner_left: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ActivityEndtextActivityEndtext extends Struct.ComponentSchema {
  collectionName: 'components_activity_endtext_activity_endtexts';
  info: {
    displayName: 'activity endtext';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface ActivitySphereSpheres extends Struct.ComponentSchema {
  collectionName: 'components_activity_sphere_spheres';
  info: {
    displayName: 'Spheres';
  };
  attributes: {
    banner1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    banner2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    banner3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    banner4: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    featurs: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface AdvAdvantagesAdvAdvantages extends Struct.ComponentSchema {
  collectionName: 'components_adv_advantages_adv_advantages';
  info: {
    displayName: 'Adv advantages';
  };
  attributes: {
    card_icon1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    card_icon2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    card_icon3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    card_icon4: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    card1: Schema.Attribute.Component<'adv-card.adv-card', false>;
    card2: Schema.Attribute.Component<'adv-card.adv-card', true>;
    card3: Schema.Attribute.Component<'adv-card.adv-card', true>;
    card4: Schema.Attribute.Component<'adv-card.adv-card', true>;
    title: Schema.Attribute.String;
  };
}

export interface AdvCardAdvCard extends Struct.ComponentSchema {
  collectionName: 'components_adv_card_adv_cards';
  info: {
    displayName: 'adv card';
  };
  attributes: {
    card_description: Schema.Attribute.Text;
    card_title: Schema.Attribute.String;
  };
}

export interface AdvReasonsAdvReasons extends Struct.ComponentSchema {
  collectionName: 'components_adv_reasons_adv_reasons';
  info: {
    displayName: 'Adv reasons';
  };
  attributes: {
    reasons: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface AutditConclusionPageAutditConclusionPage
  extends Struct.ComponentSchema {
  collectionName: 'components_autdit_conclusion_page_autdit_conclusion_pages';
  info: {
    displayName: 'Autdit-conclusion page';
  };
  attributes: {};
}

export interface AutditConclusionTablesAutditConclusionTables
  extends Struct.ComponentSchema {
  collectionName: 'components_autdit_conclusion_tables_autdit_conclusion_tables';
  info: {
    displayName: 'Autdit-conclusion tables';
  };
  attributes: {
    table_description1: Schema.Attribute.Blocks;
    table_description2: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    title1: Schema.Attribute.String;
    title2: Schema.Attribute.String;
  };
}

export interface BudgetDistributionTableBudgetDistributionTable
  extends Struct.ComponentSchema {
  collectionName: 'components_budget_distribution_table_budget_distribution_tables';
  info: {
    displayName: 'budget-distribution table';
  };
  attributes: {
    table_description: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    table_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BusinessPlanDoingTableBusinessPlanDoingTable
  extends Struct.ComponentSchema {
  collectionName: 'components_business_plan_doing_table_business_plan_doing_tables';
  info: {
    displayName: 'Business-plan-doing table';
  };
  attributes: {
    table_description: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    table_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BusinessPlanTableBusinessPlanTable
  extends Struct.ComponentSchema {
  collectionName: 'components_business_plan_table_business_plan_tables';
  info: {
    displayName: 'business-plan table';
  };
  attributes: {
    table_description: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BussinessManagerBussinessManager
  extends Struct.ComponentSchema {
  collectionName: 'components_bussiness_manager_bussiness_managers';
  info: {
    displayName: 'Bussiness_manager';
  };
  attributes: {
    close_button: Schema.Attribute.String;
    dropdown_content: Schema.Attribute.Blocks;
    duty_button: Schema.Attribute.String;
    manager_avatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    manager_duty: Schema.Attribute.String;
    manager_email: Schema.Attribute.String;
    manager_name: Schema.Attribute.String;
    manager_phone: Schema.Attribute.String;
    manager_workdays: Schema.Attribute.String;
  };
}

export interface CommunityHistoryCommunitySHistory
  extends Struct.ComponentSchema {
  collectionName: 'components_community_history_community_s_histories';
  info: {
    displayName: "Community's History";
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    history_place: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CommunityStructureCommunitySStructure
  extends Struct.ComponentSchema {
  collectionName: 'components_community_structure_community_s_structures';
  info: {
    displayName: "Community's Structure";
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    structure: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface CompanyNewsCompanyNews extends Struct.ComponentSchema {
  collectionName: 'components_company_news_company_news';
  info: {
    displayName: 'Company News';
  };
  attributes: {
    news_card: Schema.Attribute.Component<'news-card.news-card', true>;
    news_card2: Schema.Attribute.Component<'news-card.news-card', true>;
    news_card3: Schema.Attribute.Component<'news-card.news-card', true>;
    news_img1: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    news_img2: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    news_img3: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface CorpManageMambersCorpManageMembers
  extends Struct.ComponentSchema {
  collectionName: 'components_corp_manage_mambers_corp_manage_members';
  info: {
    displayName: 'Corp-manage members';
  };
  attributes: {
    content: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

export interface CorpManageTableCorpManageTable extends Struct.ComponentSchema {
  collectionName: 'components_corp_manage_table_corp_manage_tables';
  info: {
    displayName: 'Corp-manage table';
  };
  attributes: {
    member1: Schema.Attribute.Component<
      'corp-manage-mambers.corp-manage-members',
      false
    >;
    member2: Schema.Attribute.Component<
      'corp-manage-mambers.corp-manage-members',
      true
    >;
    member3: Schema.Attribute.Component<
      'corp-manage-mambers.corp-manage-members',
      true
    >;
    member4: Schema.Attribute.Component<
      'corp-manage-mambers.corp-manage-members',
      true
    >;
    member5: Schema.Attribute.Component<
      'corp-manage-mambers.corp-manage-members',
      true
    >;
    member6: Schema.Attribute.Component<
      'corp-manage-mambers.corp-manage-members',
      true
    >;
    table_link: Schema.Attribute.String;
    table_title1: Schema.Attribute.String;
    table_title2: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface DepartmentCardDepartmentCard extends Struct.ComponentSchema {
  collectionName: 'components_department_card_department_cards';
  info: {
    displayName: 'Department Card';
  };
  attributes: {
    contacts: Schema.Attribute.Text;
    description: Schema.Attribute.Text;
    email: Schema.Attribute.Text;
    name: Schema.Attribute.String;
    phone: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface DividentInfoTableDividentInfoTable
  extends Struct.ComponentSchema {
  collectionName: 'components_divident_info_table_divident_info_tables';
  info: {
    displayName: 'divident-info table';
  };
  attributes: {
    table_description: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    table_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ExpDetailBlock1ExpDetailBlock1 extends Struct.ComponentSchema {
  collectionName: 'components_exp_detail_block1_exp_detail_block1s';
  info: {
    displayName: 'Exp Detail block1';
  };
  attributes: {
    content: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ExpDetailBlock2ExpDetailBlocks2
  extends Struct.ComponentSchema {
  collectionName: 'components_exp_detail_block2_exp_detail_blocks2s';
  info: {
    displayName: 'Exp Detail blocks2';
  };
  attributes: {
    address_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    address_text: Schema.Attribute.Text;
    email_text: Schema.Attribute.String;
    phone_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    phone_number: Schema.Attribute.String;
    phone_text: Schema.Attribute.Text;
  };
}

export interface FacesTableFacesTable extends Struct.ComponentSchema {
  collectionName: 'components_faces_table_faces_tables';
  info: {
    displayName: 'Faces table';
  };
  attributes: {
    table_description: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    table_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FooterContactsFooterContacts extends Struct.ComponentSchema {
  collectionName: 'components_footer_contacts_footer_contacts';
  info: {
    displayName: 'Footer Contacts';
  };
  attributes: {
    address: Schema.Attribute.Text;
    company_title: Schema.Attribute.String;
    contacts_title: Schema.Attribute.String;
    email: Schema.Attribute.String;
    footer_bottom: Schema.Attribute.Blocks;
    link_about: Schema.Attribute.String;
    link_act: Schema.Attribute.String;
    link_adv: Schema.Attribute.String;
    link_exp: Schema.Attribute.String;
    map_title: Schema.Attribute.String;
    phone_number1: Schema.Attribute.String;
    phone_number2: Schema.Attribute.String;
    social_title: Schema.Attribute.String;
  };
}

export interface FooterImagesFooterImages extends Struct.ComponentSchema {
  collectionName: 'components_footer_images_footer_images';
  info: {
    displayName: 'Footer Images';
  };
  attributes: {
    company_datacenter: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    company_gis: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    company_gov: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    company_mygov: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    contacts_forum: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    email: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    facebook: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    instagram: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    phone: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    prop_sd: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    prop_uzassystem: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    twitter: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    whatsapp: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    wk: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    youtube: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface FxdTableTableFxdTableTable extends Struct.ComponentSchema {
  collectionName: 'components_fxd_table_table_fxd_table_tables';
  info: {
    displayName: 'fxd-table table';
  };
  attributes: {
    table_content: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    table_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FxdTable2019FxdTable2019 extends Struct.ComponentSchema {
  collectionName: 'components_fxd_table2019_fxd_table2019s';
  info: {
    displayName: 'fxd-table2019';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FxdTable2020FxdTable2020 extends Struct.ComponentSchema {
  collectionName: 'components_fxd_table2020_fxd_table2020s';
  info: {
    displayName: 'fxd-table2020';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FxdTable2021FxdTable2021 extends Struct.ComponentSchema {
  collectionName: 'components_fxd_table2021_fxd_table2021s';
  info: {
    displayName: 'fxd-table2021';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface FxdTable2022FxdTable2022 extends Struct.ComponentSchema {
  collectionName: 'components_fxd_table2022_fxd_table2022s';
  info: {
    displayName: 'fxd-table2022';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface GeneralManagerGeneralManager extends Struct.ComponentSchema {
  collectionName: 'components_general_manager_general_managers';
  info: {
    displayName: 'General Manager';
  };
  attributes: {
    close_button: Schema.Attribute.String;
    dropdown_content: Schema.Attribute.Blocks;
    duty_button: Schema.Attribute.String;
    manager_avatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    manager_duty: Schema.Attribute.String;
    manager_email: Schema.Attribute.String;
    manager_name: Schema.Attribute.String;
    manager_phone: Schema.Attribute.String;
    manager_workdays: Schema.Attribute.String;
  };
}

export interface HeaderMainBannerHeaderMainBanner
  extends Struct.ComponentSchema {
  collectionName: 'components_header_main_banner_header_main_banners';
  info: {
    displayName: 'Header Main Banner';
  };
  attributes: {
    description: Schema.Attribute.Text;
    history_banner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    main_video: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    partner_uet: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    second_banner: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    text_work: Schema.Attribute.String;
    text_year: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HeaderNavHeaderNavbar extends Struct.ComponentSchema {
  collectionName: 'components_header_nav_header_navbars';
  info: {
    displayName: 'Header Navbar';
  };
  attributes: {
    about_org: Schema.Attribute.String;
    activity: Schema.Attribute.String;
    adventages: Schema.Attribute.String;
    aut_conclusion: Schema.Attribute.String;
    business_plan: Schema.Attribute.String;
    business_plan_doing: Schema.Attribute.String;
    contacts: Schema.Attribute.String;
    corp_manage: Schema.Attribute.String;
    exp: Schema.Attribute.String;
    faces: Schema.Attribute.String;
    facts: Schema.Attribute.String;
    history: Schema.Attribute.String;
    info_dividend: Schema.Attribute.String;
    info_open: Schema.Attribute.String;
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    management: Schema.Attribute.String;
    profit: Schema.Attribute.String;
    projects: Schema.Attribute.String;
    prospectus: Schema.Attribute.String;
    public_events: Schema.Attribute.String;
    reports: Schema.Attribute.String;
    services: Schema.Attribute.String;
    shareholders: Schema.Attribute.String;
    strategy: Schema.Attribute.String;
    strucure: Schema.Attribute.String;
    table_fxd: Schema.Attribute.String;
    tenders: Schema.Attribute.String;
    vacancy: Schema.Attribute.String;
    vote_osa: Schema.Attribute.String;
  };
}

export interface HeaderPromoHeaderPromo extends Struct.ComponentSchema {
  collectionName: 'components_header_promo_header_promo_s';
  info: {
    displayName: 'Header Promo ';
  };
  attributes: {
    address: Schema.Attribute.Blocks;
    facebook: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    instagram: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    lngTitle: Schema.Attribute.String;
    search: Schema.Attribute.String;
    searchIcon: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    twitter: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    whatsapp: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    wk: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    youtube: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HistoryChronologyHistoryChronology
  extends Struct.ComponentSchema {
  collectionName: 'components_history_chronology_history_chronologies';
  info: {
    displayName: 'History chronology';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon_banner_left: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface JointstockCard1JointStockCard1 extends Struct.ComponentSchema {
  collectionName: 'components_jointstock_card1_joint_stock_card1s';
  info: {
    displayName: 'Joint-stock Card1';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface JointstockCompanyJointStockSompany
  extends Struct.ComponentSchema {
  collectionName: 'components_jointstock_company_joint_stock_sompanies';
  info: {
    displayName: 'Joint-stock \u0421ompany';
  };
  attributes: {
    card1: Schema.Attribute.Component<
      'jointstock-card1.joint-stock-card1',
      false
    >;
    card2: Schema.Attribute.Component<
      'jointstock-card1.joint-stock-card1',
      true
    >;
    card3: Schema.Attribute.Component<
      'jointstock-card1.joint-stock-card1',
      true
    >;
    description: Schema.Attribute.Text;
    jointstock_icon1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    jointstock_icon2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    jointstock_icon3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ManagerManager extends Struct.ComponentSchema {
  collectionName: 'components_manager_managers';
  info: {
    displayName: 'Manager';
  };
  attributes: {
    close_button: Schema.Attribute.String;
    dropdown_content: Schema.Attribute.Blocks;
    duty_button: Schema.Attribute.String;
    manager_avatar: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    manager_duty: Schema.Attribute.String;
    manager_email: Schema.Attribute.String;
    manager_name: Schema.Attribute.String;
    manager_phone: Schema.Attribute.String;
    manager_workdays: Schema.Attribute.String;
  };
}

export interface MapAmountMapAmount extends Struct.ComponentSchema {
  collectionName: 'components_map_amount_map_amounts';
  info: {
    displayName: 'Map Amount';
  };
  attributes: {
    map_amount_num: Schema.Attribute.String;
    map_amount_text: Schema.Attribute.Text;
  };
}

export interface NewsCardNewsCard extends Struct.ComponentSchema {
  collectionName: 'components_news_card_news_cards';
  info: {
    displayName: 'News-card';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface OurClientsOurClients extends Struct.ComponentSchema {
  collectionName: 'components_our_clients_our_clients';
  info: {
    displayName: 'Our clients';
  };
  attributes: {
    client_map: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    client1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    client10: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    client11: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    client12: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    client2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    client3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    client4: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    client5: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    client6: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    client7: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    client8: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    client9: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface OurExpCompBoxOurExpAndCompBox extends Struct.ComponentSchema {
  collectionName: 'components_our_exp_comp_box_our_exp_and_comp_boxes';
  info: {
    displayName: 'Our Exp and Comp Box';
  };
  attributes: {
    box_text: Schema.Attribute.Text;
  };
}

export interface OurExpCompOurExpAndComp extends Struct.ComponentSchema {
  collectionName: 'components_our_exp_comp_our_exp_and_comps';
  info: {
    displayName: 'Our Exp and Comp';
  };
  attributes: {
    exp_footer_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    exp_img1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    exp_img2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    exp_subtext: Schema.Attribute.String;
    our_exp_comp_box1: Schema.Attribute.Component<
      'our-exp-comp-box.our-exp-and-comp-box',
      false
    >;
    our_exp_comp_box2: Schema.Attribute.Component<
      'our-exp-comp-box.our-exp-and-comp-box',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface OurExpOurExperience extends Struct.ComponentSchema {
  collectionName: 'components_our_exp_our_experiences';
  info: {
    displayName: 'Our experience';
  };
  attributes: {
    banner_left: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    cyrcle: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    map: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    map_amount1: Schema.Attribute.Component<'map-amount.map-amount', true>;
    map_amount2: Schema.Attribute.Component<'map-amount.map-amount', true>;
    map_amount3: Schema.Attribute.Component<'map-amount.map-amount', true>;
    title: Schema.Attribute.String;
  };
}

export interface OurMissionOurMission extends Struct.ComponentSchema {
  collectionName: 'components_our_mission_our_missions';
  info: {
    displayName: 'Our mission';
  };
  attributes: {
    icon_banner_right: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface OurPartnersOurPartners extends Struct.ComponentSchema {
  collectionName: 'components_our_partners_our_partners';
  info: {
    displayName: 'Our partners';
  };
  attributes: {
    partner1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    partner10: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    partner2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    partner3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    partner4: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    partner5: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    partner6: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    partner7: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    partner8: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    partner9: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface OurSertsOurSertificates extends Struct.ComponentSchema {
  collectionName: 'components_our_serts_our_sertificates';
  info: {
    displayName: 'Our Sertificates';
  };
  attributes: {
    sert_description: Schema.Attribute.Text;
    sert_icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    sertificate1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    sertificate2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    sertificate3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    sertificate4: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    sertificate5: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    sertificate6: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    sertificate7: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    sertificate8: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface OurService1OurService1 extends Struct.ComponentSchema {
  collectionName: 'components_our_service1_our_service_1s';
  info: {
    displayName: 'Our service 1';
  };
  attributes: {
    service_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    service_name: Schema.Attribute.Text;
    service_subtext: Schema.Attribute.String;
    service1_card1: Schema.Attribute.Component<
      'service-card.service-card',
      true
    >;
    service1_card1_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    service1_card2: Schema.Attribute.Component<
      'service-card.service-card',
      true
    >;
    service1_card2_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    service1_card3: Schema.Attribute.Component<
      'service-card.service-card',
      true
    >;
    service1_card3_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    service1_card4: Schema.Attribute.Component<
      'service-card.service-card',
      true
    >;
    service1_card4_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    service1_card5: Schema.Attribute.Component<
      'service-card.service-card',
      true
    >;
    service1_card5_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface OurService2OurService2 extends Struct.ComponentSchema {
  collectionName: 'components_our_service2_our_service_2s';
  info: {
    displayName: 'Our service 2';
  };
  attributes: {
    service2_card1: Schema.Attribute.Component<
      'service-card.service-card',
      true
    >;
    service2_card1_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    service2_card2: Schema.Attribute.Component<
      'service-card.service-card',
      true
    >;
    service2_card2_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    service2_card3: Schema.Attribute.Component<
      'service-card.service-card',
      false
    >;
    service2_card3_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    service2_card4: Schema.Attribute.Component<
      'service-card.service-card',
      true
    >;
    service2_card4_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    service2_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    service2_name: Schema.Attribute.String;
    service2_subtext: Schema.Attribute.String;
  };
}

export interface OurService3OurService3 extends Struct.ComponentSchema {
  collectionName: 'components_our_service3_our_service_3s';
  info: {
    displayName: 'Our service 3';
  };
  attributes: {
    service3_card1: Schema.Attribute.Component<
      'service-card.service-card',
      true
    >;
    service3_card1_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    service3_card2: Schema.Attribute.Component<
      'service-card.service-card',
      true
    >;
    service3_card2_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    service3_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    service3_name: Schema.Attribute.String;
    service3_subtext: Schema.Attribute.String;
  };
}

export interface ProjectDesignProjectDesign extends Struct.ComponentSchema {
  collectionName: 'components_project_design_project_designs';
  info: {
    displayName: 'Project Design';
  };
  attributes: {
    backround: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    card1_description: Schema.Attribute.Text;
    card10_description: Schema.Attribute.Text;
    card11_description: Schema.Attribute.Text;
    card12_description: Schema.Attribute.Text;
    card13_description: Schema.Attribute.Text;
    card14_description: Schema.Attribute.Text;
    card2_description: Schema.Attribute.Text;
    card3_description: Schema.Attribute.Text;
    card4_description: Schema.Attribute.Text;
    card5_description: Schema.Attribute.Text;
    card6_description: Schema.Attribute.Text;
    card7_description: Schema.Attribute.Text;
    card8_description: Schema.Attribute.Text;
    card9_description: Schema.Attribute.Text;
    company_icon1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    company_icon10: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    company_icon11: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    company_icon2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    company_icon3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    company_icon4: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    company_icon5: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    company_icon6: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    company_icon7: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    company_icon8: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    company_icon9: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    logo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface Project1TashkentProject extends Struct.ComponentSchema {
  collectionName: 'components_project1_tashkent_projects';
  info: {
    displayName: 'Tashkent Project';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ProjectsProjects extends Struct.ComponentSchema {
  collectionName: 'components_projects_projects';
  info: {
    displayName: 'Projects';
  };
  attributes: {
    project1: Schema.Attribute.Component<'project1.tashkent-project', false>;
    project2: Schema.Attribute.Component<'project1.tashkent-project', true>;
    project3: Schema.Attribute.Component<'project1.tashkent-project', true>;
    project4: Schema.Attribute.Component<'project1.tashkent-project', true>;
    project5: Schema.Attribute.Component<'project1.tashkent-project', true>;
    project6: Schema.Attribute.Component<'project1.tashkent-project', true>;
    project7: Schema.Attribute.Component<'project1.tashkent-project', true>;
    project8: Schema.Attribute.Component<'project1.tashkent-project', true>;
    project9: Schema.Attribute.Component<'project1.tashkent-project', true>;
    projectImg1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    projectImg2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    projectImg3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    projectImg4: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    projectImg5: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    projectImg6: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    projectImg7: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    projectImg8: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    projectImg9: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ProspectTableProspectTable extends Struct.ComponentSchema {
  collectionName: 'components_prospect_table_prospect_tables';
  info: {
    displayName: 'Prospect table';
  };
  attributes: {
    table_description: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface PublicEventsPublicEvents extends Struct.ComponentSchema {
  collectionName: 'components_public_events_public_events';
  info: {
    displayName: 'Public events';
  };
  attributes: {
    event1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    event10: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    event2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    event3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    event4: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    event5: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    event6: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    event7: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    event8: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    event9: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subtitle1: Schema.Attribute.String;
    subtitle2: Schema.Attribute.Text;
    subtitle3: Schema.Attribute.Text;
    subtitle4: Schema.Attribute.String;
    subtitle5: Schema.Attribute.String;
    title1: Schema.Attribute.Text;
    title2: Schema.Attribute.Text;
    title3: Schema.Attribute.Text;
  };
}

export interface ReportsCardReportCard extends Struct.ComponentSchema {
  collectionName: 'components_reports_card_report_cards';
  info: {
    displayName: 'Report Card';
  };
  attributes: {
    sutitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ReportsContentReportPageContent
  extends Struct.ComponentSchema {
  collectionName: 'components_reports_content_report_page_contents';
  info: {
    displayName: 'Report page content';
  };
  attributes: {
    button: Schema.Attribute.String;
    card1: Schema.Attribute.Component<'reports-card.report-card', true>;
    card2: Schema.Attribute.Component<'reports-card.report-card', true>;
    card3: Schema.Attribute.Component<'reports-card.report-card', true>;
    card4: Schema.Attribute.Component<'reports-card.report-card', true>;
    card5: Schema.Attribute.Component<'reports-card.report-card', true>;
    card6: Schema.Attribute.Component<'reports-card.report-card', true>;
    card7: Schema.Attribute.Component<'reports-card.report-card', true>;
    report_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface ServiceCardServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_service_card_service_cards';
  info: {
    displayName: 'Service Card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SignFact2019TableSignFact2019Table
  extends Struct.ComponentSchema {
  collectionName: 'components_sign_fact2019_table_sign_fact2019_tables';
  info: {
    displayName: 'Sign-fact2019 table';
  };
  attributes: {
    table_content: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    table_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SignFact2020TableSignFact2020Table
  extends Struct.ComponentSchema {
  collectionName: 'components_sign_fact2020_table_sign_fact2020_tables';
  info: {
    displayName: 'Sign-fact2020 table';
  };
  attributes: {
    table_content: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    table_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SignFact2021TableSignFact2021Table
  extends Struct.ComponentSchema {
  collectionName: 'components_sign_fact2021_table_sign_fact2021_tables';
  info: {
    displayName: 'Sign-fact2021 Table';
  };
  attributes: {
    table_content: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    table_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SignFact2022TableSignFact2022Table
  extends Struct.ComponentSchema {
  collectionName: 'components_sign_fact2022_table_sign_fact2022_tables';
  info: {
    displayName: 'Sign-fact2022 table';
  };
  attributes: {
    table_content: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    table_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SignFact2023TableSignFact2023Table
  extends Struct.ComponentSchema {
  collectionName: 'components_sign_fact2023_table_sign_fact2023_tables';
  info: {
    displayName: 'Sign-fact2023 Table';
  };
  attributes: {
    table_content: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    table_table: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SignFact2024TableSignFact2024Table
  extends Struct.ComponentSchema {
  collectionName: 'components_sign_fact2024_table_sign_fact2024_tables';
  info: {
    displayName: 'sign-fact2024 table';
  };
  attributes: {
    table_content: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    table_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SignFactsCardSignFactsCard extends Struct.ComponentSchema {
  collectionName: 'components_sign_facts_card_sign_facts_cards';
  info: {
    displayName: 'Sign Facts Card';
  };
  attributes: {
    fact_text: Schema.Attribute.Text;
    fact_year: Schema.Attribute.String;
  };
}

export interface SignFactsContentSignFactsContent
  extends Struct.ComponentSchema {
  collectionName: 'components_sign_facts_content_sign_facts_contents';
  info: {
    displayName: 'Sign Facts Content';
  };
  attributes: {
    card2019: Schema.Attribute.Component<
      'sign-facts-card.sign-facts-card',
      true
    >;
    card2020: Schema.Attribute.Component<
      'sign-facts-card.sign-facts-card',
      true
    >;
    card2021: Schema.Attribute.Component<
      'sign-facts-card.sign-facts-card',
      true
    >;
    card2022: Schema.Attribute.Component<
      'sign-facts-card.sign-facts-card',
      true
    >;
    card2023: Schema.Attribute.Component<
      'sign-facts-card.sign-facts-card',
      true
    >;
    card2024: Schema.Attribute.Component<
      'sign-facts-card.sign-facts-card',
      true
    >;
    card2025: Schema.Attribute.Component<
      'sign-facts-card.sign-facts-card',
      true
    >;
    fact_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    fact_link: Schema.Attribute.String;
  };
}

export interface StragyTableStratagyTable extends Struct.ComponentSchema {
  collectionName: 'components_stragy_table_stratagy_tables';
  info: {
    displayName: 'Stratagy table';
  };
  attributes: {
    table_description: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface StructureBranchSrtuctureBranch extends Struct.ComponentSchema {
  collectionName: 'components_structure_branch_srtucture_branches';
  info: {
    displayName: 'Srtucture Branch';
  };
  attributes: {
    card_contacts: Schema.Attribute.String;
    card_description: Schema.Attribute.Text;
    card_email: Schema.Attribute.String;
    card_img: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    card_name: Schema.Attribute.String;
    card_phone: Schema.Attribute.String;
    card_title: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface StructureDepartmentsDepartments
  extends Struct.ComponentSchema {
  collectionName: 'components_structure_departments_departments';
  info: {
    displayName: 'Departments';
  };
  attributes: {
    department_card: Schema.Attribute.Component<
      'department-card.department-card',
      true
    >;
    department_card2: Schema.Attribute.Component<
      'department-card.department-card',
      true
    >;
    department_card3: Schema.Attribute.Component<
      'department-card.department-card',
      true
    >;
    department_card4: Schema.Attribute.Component<
      'department-card.department-card',
      true
    >;
    department_card5: Schema.Attribute.Component<
      'department-card.department-card',
      true
    >;
    department_card6: Schema.Attribute.Component<
      'department-card.department-card',
      false
    >;
    department_card7: Schema.Attribute.Component<
      'department-card.department-card',
      true
    >;
    department_card8: Schema.Attribute.Component<
      'department-card.department-card',
      true
    >;
    department_img1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    department_img2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    department_img3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    department_img4: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    department_img5: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    department_img6: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    department_img7: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    department_img8: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface TenderCardsContestCard extends Struct.ComponentSchema {
  collectionName: 'components_tender_cards_contest_cards';
  info: {
    displayName: 'contest_card';
  };
  attributes: {
    button: Schema.Attribute.String;
    button2: Schema.Attribute.String;
    date: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.Text;
  };
}

export interface TenderCardsTenderCards extends Struct.ComponentSchema {
  collectionName: 'components_tender_cards_tender_cards';
  info: {
    displayName: 'Tender Cards';
  };
  attributes: {
    card1: Schema.Attribute.Component<'tender-cards.contest-card', true>;
    card2: Schema.Attribute.Component<'tender-cards.contest-card', true>;
    card3: Schema.Attribute.Component<'tender-cards.contest-card', true>;
    card4: Schema.Attribute.Component<'tender-cards.contest-card', true>;
    card5: Schema.Attribute.Component<'tender-cards.contest-card', true>;
    card6: Schema.Attribute.Component<'tender-cards.contest-card', true>;
    card7: Schema.Attribute.Component<'tender-cards.contest-card', true>;
    card8: Schema.Attribute.Component<'tender-cards.contest-card', true>;
    card9: Schema.Attribute.Component<'tender-cards.contest-card', true>;
  };
}

export interface Tender1ContentTender1Content extends Struct.ComponentSchema {
  collectionName: 'components_tender1_content_tender1_contents';
  info: {
    displayName: 'Tender1 Content';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface Tender2ContentTender2Content extends Struct.ComponentSchema {
  collectionName: 'components_tender2_content_tender2_contents';
  info: {
    displayName: 'Tender2 Content';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface Tender3ContentTender3Content extends Struct.ComponentSchema {
  collectionName: 'components_tender3_content_tender3_contents';
  info: {
    displayName: 'Tender3 Content';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.Text;
    subtitle2: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface Tender4ContentTender4Content extends Struct.ComponentSchema {
  collectionName: 'components_tender4_content_tender4_contents';
  info: {
    displayName: 'Tender4 Content';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.Text;
    subtitle2: Schema.Attribute.Text;
    table: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface Tender5ContentTender5Content extends Struct.ComponentSchema {
  collectionName: 'components_tender5_content_tender5_content_s';
  info: {
    displayName: 'Tender5 Content ';
    icon: 'cup';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.String;
    table: Schema.Attribute.Blocks;
    table_description: Schema.Attribute.Blocks;
    title: Schema.Attribute.Text;
    title_num: Schema.Attribute.String;
    title_table: Schema.Attribute.Text;
    title2: Schema.Attribute.Text;
    title3: Schema.Attribute.String;
  };
}

export interface Tender6ContentTender6Content extends Struct.ComponentSchema {
  collectionName: 'components_tender6_content_tender6_contents';
  info: {
    displayName: 'Tender6 Content';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.Text;
    subtitle2: Schema.Attribute.Text;
    table: Schema.Attribute.Blocks;
    table_description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    title_num: Schema.Attribute.String;
    title_table: Schema.Attribute.String;
    title2: Schema.Attribute.String;
  };
}

export interface VacancyReqVacancyReq1 extends Struct.ComponentSchema {
  collectionName: 'components_vacancy_req_vacancy_req1s';
  info: {
    displayName: 'Vacancy req1';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface VotingResultsTableVotingResultsTable
  extends Struct.ComponentSchema {
  collectionName: 'components_voting_results_table_voting_results_tables';
  info: {
    displayName: 'voting-results table';
  };
  attributes: {
    table_description: Schema.Attribute.Blocks;
    table_link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface WhatWeDoWhatWeDo extends Struct.ComponentSchema {
  collectionName: 'components_what_we_do_what_we_do_s';
  info: {
    displayName: 'What we do?';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    link1: Schema.Attribute.Text;
    link1_description: Schema.Attribute.Text;
    link2: Schema.Attribute.Text;
    link2_description: Schema.Attribute.Text;
    link3: Schema.Attribute.Text;
    link3_description: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'about-organization.about-org': AboutOrganizationAboutOrg;
      'activity-endtext.activity-endtext': ActivityEndtextActivityEndtext;
      'activity-sphere.spheres': ActivitySphereSpheres;
      'adv-advantages.adv-advantages': AdvAdvantagesAdvAdvantages;
      'adv-card.adv-card': AdvCardAdvCard;
      'adv-reasons.adv-reasons': AdvReasonsAdvReasons;
      'autdit-conclusion-page.autdit-conclusion-page': AutditConclusionPageAutditConclusionPage;
      'autdit-conclusion-tables.autdit-conclusion-tables': AutditConclusionTablesAutditConclusionTables;
      'budget-distribution-table.budget-distribution-table': BudgetDistributionTableBudgetDistributionTable;
      'business-plan-doing-table.business-plan-doing-table': BusinessPlanDoingTableBusinessPlanDoingTable;
      'business-plan-table.business-plan-table': BusinessPlanTableBusinessPlanTable;
      'bussiness-manager.bussiness-manager': BussinessManagerBussinessManager;
      'community-history.community-s-history': CommunityHistoryCommunitySHistory;
      'community-structure.community-s-structure': CommunityStructureCommunitySStructure;
      'company-news.company-news': CompanyNewsCompanyNews;
      'corp-manage-mambers.corp-manage-members': CorpManageMambersCorpManageMembers;
      'corp-manage-table.corp-manage-table': CorpManageTableCorpManageTable;
      'department-card.department-card': DepartmentCardDepartmentCard;
      'divident-info-table.divident-info-table': DividentInfoTableDividentInfoTable;
      'exp-detail-block1.exp-detail-block1': ExpDetailBlock1ExpDetailBlock1;
      'exp-detail-block2.exp-detail-blocks2': ExpDetailBlock2ExpDetailBlocks2;
      'faces-table.faces-table': FacesTableFacesTable;
      'footer-contacts.footer-contacts': FooterContactsFooterContacts;
      'footer-images.footer-images': FooterImagesFooterImages;
      'fxd-table-table.fxd-table-table': FxdTableTableFxdTableTable;
      'fxd-table2019.fxd-table2019': FxdTable2019FxdTable2019;
      'fxd-table2020.fxd-table2020': FxdTable2020FxdTable2020;
      'fxd-table2021.fxd-table2021': FxdTable2021FxdTable2021;
      'fxd-table2022.fxd-table2022': FxdTable2022FxdTable2022;
      'general-manager.general-manager': GeneralManagerGeneralManager;
      'header-main-banner.header-main-banner': HeaderMainBannerHeaderMainBanner;
      'header-nav.header-navbar': HeaderNavHeaderNavbar;
      'header-promo.header-promo': HeaderPromoHeaderPromo;
      'history-chronology.history-chronology': HistoryChronologyHistoryChronology;
      'jointstock-card1.joint-stock-card1': JointstockCard1JointStockCard1;
      'jointstock-company.joint-stock-sompany': JointstockCompanyJointStockSompany;
      'manager.manager': ManagerManager;
      'map-amount.map-amount': MapAmountMapAmount;
      'news-card.news-card': NewsCardNewsCard;
      'our-clients.our-clients': OurClientsOurClients;
      'our-exp-comp-box.our-exp-and-comp-box': OurExpCompBoxOurExpAndCompBox;
      'our-exp-comp.our-exp-and-comp': OurExpCompOurExpAndComp;
      'our-exp.our-experience': OurExpOurExperience;
      'our-mission.our-mission': OurMissionOurMission;
      'our-partners.our-partners': OurPartnersOurPartners;
      'our-serts.our-sertificates': OurSertsOurSertificates;
      'our-service1.our-service-1': OurService1OurService1;
      'our-service2.our-service-2': OurService2OurService2;
      'our-service3.our-service-3': OurService3OurService3;
      'project-design.project-design': ProjectDesignProjectDesign;
      'project1.tashkent-project': Project1TashkentProject;
      'projects.projects': ProjectsProjects;
      'prospect-table.prospect-table': ProspectTableProspectTable;
      'public-events.public-events': PublicEventsPublicEvents;
      'reports-card.report-card': ReportsCardReportCard;
      'reports-content.report-page-content': ReportsContentReportPageContent;
      'service-card.service-card': ServiceCardServiceCard;
      'sign-fact2019-table.sign-fact2019-table': SignFact2019TableSignFact2019Table;
      'sign-fact2020-table.sign-fact2020-table': SignFact2020TableSignFact2020Table;
      'sign-fact2021-table.sign-fact2021-table': SignFact2021TableSignFact2021Table;
      'sign-fact2022-table.sign-fact2022-table': SignFact2022TableSignFact2022Table;
      'sign-fact2023-table.sign-fact2023-table': SignFact2023TableSignFact2023Table;
      'sign-fact2024-table.sign-fact2024-table': SignFact2024TableSignFact2024Table;
      'sign-facts-card.sign-facts-card': SignFactsCardSignFactsCard;
      'sign-facts-content.sign-facts-content': SignFactsContentSignFactsContent;
      'stragy-table.stratagy-table': StragyTableStratagyTable;
      'structure-branch.srtucture-branch': StructureBranchSrtuctureBranch;
      'structure-departments.departments': StructureDepartmentsDepartments;
      'tender-cards.contest-card': TenderCardsContestCard;
      'tender-cards.tender-cards': TenderCardsTenderCards;
      'tender1-content.tender1-content': Tender1ContentTender1Content;
      'tender2-content.tender2-content': Tender2ContentTender2Content;
      'tender3-content.tender3-content': Tender3ContentTender3Content;
      'tender4-content.tender4-content': Tender4ContentTender4Content;
      'tender5-content.tender5-content': Tender5ContentTender5Content;
      'tender6-content.tender6-content': Tender6ContentTender6Content;
      'vacancy-req.vacancy-req1': VacancyReqVacancyReq1;
      'voting-results-table.voting-results-table': VotingResultsTableVotingResultsTable;
      'what-we-do.what-we-do': WhatWeDoWhatWeDo;
    }
  }
}
