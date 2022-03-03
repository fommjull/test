const mockData = {
  features: [
    {
      geometry: { coordinates: [14.408997, 50.088896], type: 'Point' },
      properties: {
        address: {
          address_formatted: 'U Lužického semináře 110/40, 11000 Praha, Česko',
        },
        image: {
          url: 'http://www.praha.eu/public/17/15/84/96818_4_voajnovy2.jpg',
        },
        description:
          'Zádumčivost této zahrady patrně přetrvala ještě z dob  středověku, kdy byla založena jako klášterní, s formální, přísnou  geometrickou úpravou, kterou jen velmi mírně pozměnil až volně-krajinářský styl  uplatněný v části zahrady ve 20. letech 20. století.',
        district: 'praha-1',
        id: 'vojanovy-sady',
        name: 'Vojanovy sady',
        properties: [],
        updated_at: '2022-02-18T01:30:52.241Z',
        url: 'http://www.praha.eu/jnp/cz/co_delat_v_praze/parky/vojanovy_sady/vojanovy_sady.html',
      },
      type: 'Feature',
    },
    {
      geometry: { coordinates: [14.360718, 50.078733], type: 'Point' },
      properties: {
        address: {
          address_formatted: 'Tomanova 1154/62, 16000 Praha, Česko',
        },
        image: {
          url: 'http://www.praha.eu/public/5f/a4/86/96846_4_ladronka1.jpg',
        },
        description:
          'Rozsáhlé travnaté pláně  s dominantou bývalé usedlosti na rozhraní Břevnova, Vypichu a Motola se  staly vyhledávaným místem lidí všech věkových kategorií, pro které se zde  nabízí množství možností, jak strávit volný čas.',
        district: 'praha-6',
        id: 'ladronka',
        name: 'Ladronka',
        properties: [
          {
            description: 'Občerstvení',
            id: 'restaurace',
            value: 'Občerstvení: ANO restaurace Ladronka',
          },
          {
            description: 'WC',
            id: 'wc',
            value: 'ANO v objektu restaurace',
          },
          {
            description: 'Zajímavosti',
            id: 'misto',
            value:
              'Rozsáhlý areál pro volný čas, vhodný pro všechny věkové kategorie, psi ANO, možnost celodenního pobytu, v průběhu roku hudební a zábavné akce.',
          },
          { description: 'Cyklostezky', id: 'kolo', value: 'ANO' },
          {
            description: 'Dětské hřiště',
            id: 'hriste',
            value:
              'ANO u objektu restaurace, starší hřiště v zadní části za zastávkou autobusu Ladronka',
          },
          {
            description: 'Bruslení',
            id: 'brusle',
            value: 'ANO - nové povrchy a vyznačené trasy pro in-line bruslaře',
          },
          {
            description: 'Sportovní hřiště',
            id: 'sport',
            value:
              'NE, za oborou dětské a dopravní hřiště a Dům dětí a mládeže Vypich (www.ddmp6.cz/kontakt/)',
          },
          {
            description: 'MHD',
            id: 'mhd',
            value:
              'U Ladronky, Rozýnova, Štefkova BUS č. 191, Vypich BUS č. 108, 174, 180, 191, I3, tram č. 15, 22, 25, 57',
          },
          {
            description: 'Parkování',
            id: 'parking',
            value: 'ANO, při ul. Tomanova a Skokanská',
          },
          {
            description: 'Povrch cest',
            id: 'cesty',
            value: 'Asfaltové v kombinaci s dlažbou a mlatovou úpravou',
          },
          {
            description: 'Provozovatel',
            id: 'provoz',
            value: 'Městská část Praha 6',
          },
          {
            description: 'Otevírací doba',
            id: 'doba',
            value: 'Celoročně',
          },
        ],
        updated_at: '2022-02-18T01:30:52.240Z',
        url: 'http://www.praha.eu/jnp/cz/co_delat_v_praze/parky/ladronka/ladronka.html',
      },
      type: 'Feature',
    },
    {
      geometry: { coordinates: [14.395004, 50.070894], type: 'Point' },
      properties: {
        address: {
          address_formatted: 'Mozartova 844/14, 15000 Praha, Česko',
        },
        image: {
          url: 'http://www.praha.eu/public/5c/7c/31/96820_4_bertramka_08.jpg',
        },
        description:
          'Mozartova busta v zahradě legendární usedlosti stojí na vyvýšeném, trochu zvláštním, místě, jakoby stranou pomyslné hlavní osy podlouhlého pozemku. Mistr, byť pouze v kamenné podobě, tak má dokonalý přehled o dění v zahradě, ale současně překrásný výhled na stráně vrchu Mrázovka.',
        district: 'praha-5',
        id: 'betramka',
        name: 'Betramka',
        properties: [
          { description: 'WC', id: 'wc', value: 'ANO' },
          {
            description: 'Zajímavosti',
            id: 'misto',
            value:
              'Kulturní památka, koncerty vážné hudby, společenské akce, muzeum W. A. Mozarta',
          },
          { description: 'Cyklostezky', id: 'kolo', value: 'ANO' },
          { description: 'Dětské hřiště', id: 'hriste', value: 'NE' },
          { description: 'Bruslení', id: 'brusle', value: 'NE' },
          { description: 'Sportovní hřiště', id: 'sport', value: 'NE' },
          {
            description: 'MHD',
            id: 'mhd',
            value: 'Bertramka tram č. 4, 7, 9, 10, 58, 59',
          },
          {
            description: 'Parkování',
            id: 'parking',
            value: 'ANO, v podzemním parkingu OC Smíchov',
          },
          { description: 'Povrch cest', id: 'cesty', value: 'Dlažba' },
          {
            description: 'Provozovatel',
            id: 'provoz',
            value: 'Městská část Praha 5 a spol. Comenius',
          },
          {
            description: 'Otevírací doba',
            id: 'doba',
            value:
              'Celoročně duben až říjen 9-18 hod., listopad až březen 9:30-16 hod.',
          },
        ],
        updated_at: '2022-02-18T01:30:52.240Z',
        url: 'http://www.praha.eu/jnp/cz/co_delat_v_praze/parky/bertramka/bertramka_text.html',
      },
      type: 'Feature',
    },
    {
      geometry: { coordinates: [14.378067, 50.071091], type: 'Point' },
      properties: {
        address: { address_formatted: 'Klamovka 2051, 15000 Praha, Česko' },
        image: {
          url: 'http://www.praha.eu/public/10/eb/1/96972_4_klamovka.jpg',
        },
        description:
          'Z kopce rovnou dolů neboli z Podbělohorské k Plzeňské ulici se rozkládá středně velká, původně rokoková zahrada, kterou v polovině 18. století zakoupila rodina Clam-Gallasů, podle níž se lokalita také jmenuje.',
        district: 'praha-5',
        id: 'klamovka',
        name: 'Klamovka',
        properties: [
          {
            description: 'Občerstvení',
            id: 'restaurace',
            value: 'Občerstvení: ANO restaurace Klamovka, klub Klamovka',
          },
          {
            description: 'WC',
            id: 'wc',
            value: 'ANO v restauraci a klubu',
          },
          {
            description: 'Zajímavosti',
            id: 'misto',
            value:
              'Historické zajímavosti, umělecká galerie, hudební klub a zahradní restaurace, dětské hřiště i pro nejmenší, psi ANO',
          },
          { description: 'Cyklostezky', id: 'kolo', value: 'ANO' },
          {
            description: 'Dětské hřiště',
            id: 'hriste',
            value: 'ANO poblíž zahradní restaurace',
          },
          { description: 'Bruslení', id: 'brusle', value: 'NE' },
          {
            description: 'Sportovní hřiště',
            id: 'sport',
            value: 'tenisové kurty a sportoviště v sokolovně',
          },
          {
            description: 'MHD',
            id: 'mhd',
            value:
              'Klamovka - BUS č. 149, 191, 217, tram č. 4, 7, 9, 10, 58, 59',
          },
          { description: 'Parkování', id: 'parking', value: 'NE' },
          {
            description: 'Povrch cest',
            id: 'cesty',
            value: 'Dlažba a asfalt',
          },
          {
            description: 'Provozovatel',
            id: 'provoz',
            value: 'Městská část Praha 5',
          },
          {
            description: 'Otevírací doba',
            id: 'doba',
            value: 'Celoročně',
          },
        ],
        updated_at: '2022-02-18T01:30:52.240Z',
        url: 'http://www.praha.eu/jnp/cz/co_delat_v_praze/parky/klamovka/klamovka_text.html',
      },
      type: 'Feature',
    },
  ],
  type: 'FeatureCollection',
};

export {mockData}