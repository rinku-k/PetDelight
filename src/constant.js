export const ROUTES = Object.freeze({
  Splash: 'Splash',
  Carousal: 'Carousal',
  Profile: 'Profile',
  Home: 'Home',
  Adoption: 'Adoption',
});

export const CARD_TYPES = Object.freeze({
  ADOPTION: 'adoption',
  PET_MART: 'pets_mart',
  LOST_FOUND: 'lost_found',
  HEALTH: 'health',
  MY_PETS: 'my_pets',
  DISCUSS: 'discuss',
});

// https://colorhunt.co/palettes
// backgroundColor: ['#C2DEDC', '#ECE5C7', '#CDC2AE', '#116A7B'],
// backgroundColor: ['#B70404', '#DB005B', '#F79327', '#FFE569'],
// backgroundColor: ['#884A39', '#C38154', '#FFC26F', '#F9E0BB'],
export const CARD_CONFIG = {
  [CARD_TYPES.ADOPTION]: {
    image: '',
    text: 'Free Adoption',
    screenName: ROUTES.Adoption,
    backgroundColor: ['#13A7BB', '#31DAFF', '#5BB0FF', '#44FFDD'],
    card: ['#13A7BB00', '#44FFDD60', '#5BB0FF70', '#5BB0FF09'],
    border: '#5BB0FF80',
  },
  [CARD_TYPES.PET_MART]: {
    image: '',
    text: 'Pets Mart',
    screenName: '',
    backgroundColor: ['#FF73AE', '#FF7C1D', '#FF7D54', '#FFDE89'],
    border: '#5BB0FF',
  },
  [CARD_TYPES.HEALTH]: {
    image: '',
    text: 'Health',
    screenName: '',
    backgroundColor: ['#219653', '#8FC05C', '#AFD489', '#FFDE89'],
    border: '#5BB0FF',
  },
  [CARD_TYPES.MY_PETS]: {
    image: '',
    text: 'My Pets',
    screenName: '',
    backgroundColor: ['#31DAFF', '#13A7BB', '#1098AB', '#28B7CA'],
    border: '#5BB0FF',
  },
  [CARD_TYPES.LOST_FOUND]: {
    image: '',
    text: 'Lost & Found',
    screenName: '',
    backgroundColor: ['#FFFFFF', '#FF73AE', '#DE1954', '#ED0000'],
    border: '#5BB0FF',
    // backgroundColor: ['#1062AB', '#1098AB', '#28B7CA', '#AEE1FF'],
  },
  [CARD_TYPES.DISCUSS]: {
    image: '',
    text: 'Discussion',
    screenName: '',
    backgroundColor: ['#6631FF', '#A431FF', '#EE89FF'],
    border: '#5BB0FF',
  },
};
