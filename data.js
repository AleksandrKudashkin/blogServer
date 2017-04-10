var moment = require('moment');
var DEFAULT_DATE_FORMAT = 'YYYY-MM-DD';

module.exports = {
  posts: [
    {
      metaInfo: {
        id: 1,
        author: 'Jimmy',
        createdAt: moment('2017-01-01', DEFAULT_DATE_FORMAT).calendar(),
        updatedAt: moment('2017-01-02', DEFAULT_DATE_FORMAT).calendar()
      },
      imageArgs: {
        src: 'http://www.kernix.com/web/kernix/images/opensource/react.png',
        width: 40,
        height: 40,
        alt: 'React logo',
      },
      header: 'Irony fixie mixtape',
      text: `Vegan banjo thundercats raw denim, sriracha cardigan fap hashtag everyday carry.
      Single-origin coffee vexillologist distillery iPhone irony, drinking vinegar farm-to-table
      enamel pin tumeric craft beer locavore. Ethical fanny pack actually fashion axe biodiesel
      organic. Flexitarian hell of listicle mumblecore squid, photo booth readymade.
      Activated charcoal normcore salvia, green juice keytar tattooed pitchfork.
      Wolf jean shorts hammock single-origin coffee, austin YOLO bitters bespoke. Bicycle rights
      next level lomo meh, etsy messenger bag helvetica cliche yuccie humblebrag fanny pack
      listicle.`,
      likes: 1
    },
    {
      metaInfo: {
        id: 2,
        author: 'Billy',
        createdAt: moment('2017-01-03', DEFAULT_DATE_FORMAT).calendar(),
        updatedAt: moment('2017-01-04', DEFAULT_DATE_FORMAT).calendar()
      },
      imageArgs: {
        src: 'https://raw.githubusercontent.com/rexxars/react-hexagon/master/logo/react-hexagon.png',
        width: 40,
        height: 40,
        alt: 'React logo black',
      },
      header: 'Umami cold-pressed asymmetrical drinking vinegar',
      text: `Schlitz normcore literally, skateboard iPhone hexagon banjo swag mustache. Cred freegan
      trust fund, roof party mustache migas authentic pug hexagon. Celiac DIY scenester offal
      artisan. Activated charcoal before they sold out four loko master cleanse, tofu stumptown
      taxidermy. Raclette venmo paleo taxidermy brunch fap. Tote bag freegan swag, enamel pin you
      probably heared heard of them leggings skateboard hammock street art wayfarers fanny pack venmo
      jianbing sustainable. Quinoa hashtag dreamcatcher lomo, hammock kinfolk biodiesel brunch master
      cleanse heirloom af banh mi raclette.`,
      likes: 11
    },
    {
      metaInfo: {
        id: 3,
        author: 'Villy',
        createdAt: moment('2017-01-05', DEFAULT_DATE_FORMAT).calendar(),
        updatedAt: moment('2017-01-06', DEFAULT_DATE_FORMAT).calendar(),
      },
      imageArgs: {
        src: 'https://blog.dashlane.com/wp-content/uploads/2016/02/react-logo-2.png',
        width: 80,
        height: 40,
        alt: 'React logo',
      },
      header: 'Kickstarter pok pok intelligentsia',
      text: `Mlkshk brooklyn glossier affogato XOXO, organic cray bitters +1. Humblebrag vaporware
      locavore, craft beer bushwick af messenger bag meggings lo-fi waistcoat literally chillwave.
      Fam wayfarers brooklyn, la croix fanny pack typewriter live-edge crucifix enamel pin umami
      gentrify neutra meh. Keffiyeh brunch scenester, live-edge dreamcatcher DIY vice XOXO keytar
      gentrify helvetica tattooed. Subway tile try-hard before they sold out, salvia woke vegan
      cliche disrupt PBR&B marfa drinking vinegar kombucha tilde cardigan. Green juice leggings
      lo-fi try-hard single-origin coffee. Photo booth paleo typewriter, beard subway tile tacos
      +1 8-bit etsy.`,
      likes: 5
    }
  ]
};
