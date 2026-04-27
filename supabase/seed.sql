-- KGH Hotel Portfolio – Seed Data (44 hotels)
-- Run this in Supabase SQL Editor after schema.sql

truncate table hotels restart identity cascade;

insert into hotels (id, name, city, country, brand, location_type, website, facebook, status, visible) values

-- Kokotel Bangkok
('hotel-0',  'Kokotel Bangkok Dheva Thonglor',          'Bangkok',             'Thailand',    'Kokotel',     'city',     'https://www.kokotel.com', 'https://www.facebook.com/kokotelBangkokThonglor',                              'open',         true),
('hotel-1',  'Kokotel Bangkok Sukhumvit 50',             'Bangkok',             'Thailand',    'Kokotel',     'city',     'https://www.kokotel.com', 'https://www.facebook.com/kokotelsukhumvit50',                                  'open',         true),
('hotel-2',  'Kokotel Bangkok Surawong',                 'Bangkok',             'Thailand',    'Kokotel',     'city',     'https://www.kokotel.com', 'https://www.facebook.com/KokotelBangkokSurawong',                              'open',         true),

-- Kokotel Cebu
('hotel-3',  'Kokotel Cebu Adira',                      'Cebu',                'Philippines', 'Kokotel',     'city',     'https://www.kokotel.com', 'https://www.facebook.com/kokotelcebuadira',                                    'open',         true),
('hotel-4',  'Kokotel Cebu Capitol',                    'Cebu',                'Philippines', 'Kokotel',     'city',     'https://www.kokotel.com', '',                                                                             'open',         true),

-- Kokotel Chiang Mai / Chiang Rai
('hotel-5',  'Kokotel Chiang Mai Nimman',                'Chiang Mai',          'Thailand',    'Kokotel',     'city',     'https://www.kokotel.com', 'https://www.facebook.com/KokotelChiangMaiNimman',                              'open',         true),
('hotel-6',  'Kokotel Chiang Rai Airport Suites',        'Chiang Rai',          'Thailand',    'Kokotel',     'city',     'https://www.kokotel.com', 'https://www.facebook.com/kokotelchiangraiairportsuites',                       'open',         true),

-- Kokotel Khao Lak
('hotel-7',  'Kokotel Khao Lak Isara Casa',              'Khao Lak',            'Thailand',    'Kokotel',     'beach',    'https://www.kokotel.com', 'https://www.facebook.com/p/Kokotel-Khao-Lak-Isara-Casa-61567472665960',       'open',         true),
('hotel-8',  'Kokotel Khao Lak Lighthouse',              'Khao Lak',            'Thailand',    'Kokotel',     'beach',    'https://www.kokotel.com', 'https://www.facebook.com/kokotelkhaolaklighthouse',                            'open',         true),
('hotel-9',  'Kokotel Khao Lak Montana',                 'Khao Lak',            'Thailand',    'Kokotel',     'beach',    'https://www.kokotel.com', 'https://www.facebook.com/kokotelkhaolakmontana',                               'open',         true),
('hotel-10', 'Kokotel Khao Lak Seascape',                'Khao Lak',            'Thailand',    'Kokotel',     'beach',    'https://www.kokotel.com', 'https://www.facebook.com/kokotelseascape',                                     'open',         true),

-- Kokotel Krabi
('hotel-11', 'Kokotel Krabi Ao Nang',                   'Krabi',               'Thailand',    'Kokotel',     'beach',    'https://www.kokotel.com', 'https://www.facebook.com/KokotelKrabiAoNang',                                  'open',         true),
('hotel-12', 'Kokotel Krabi Oasis',                     'Krabi',               'Thailand',    'Kokotel',     'beach',    'https://www.kokotel.com', 'https://www.facebook.com/KokotelKrabiOasis',                                   'open',         true),

-- Kokotel Pattaya
('hotel-13', 'Kokotel Pattaya North Beach',              'Pattaya',             'Thailand',    'Kokotel',     'beach',    'https://www.kokotel.com', 'https://www.facebook.com/p/Kokotel-Pattaya-North-Beach-61562997584076',        'open',         true),
('hotel-14', 'Kokotel Pattaya South Beach',              'Pattaya',             'Thailand',    'Kokotel',     'beach',    'https://www.kokotel.com', 'https://www.facebook.com/kokotelpattayasouthbeach',                            'open',         true),

-- Kokotel Phuket
('hotel-15', 'Kokotel Phuket Nai Yang',                  'Phuket',              'Thailand',    'Kokotel',     'beach',    'https://www.kokotel.com', 'https://www.facebook.com/kokotelphuketnaiyang',                                'open',         true),
('hotel-16', 'Kokotel Phuket Patong',                    'Phuket',              'Thailand',    'Kokotel',     'beach',    'https://www.kokotel.com', 'https://www.facebook.com/KokotelPhuketPatong',                                 'open',         true),

-- Kokotel Rayong
('hotel-17', 'Kokotel Rayong Beachfront',                'Rayong',              'Thailand',    'Kokotel',     'beach',    'https://www.kokotel.com', 'https://www.facebook.com/KokotelRayongBeachfront',                             'open',         true),

-- Independent Thailand
('hotel-18', 'At Rice Resort',                           'Nakhon Nayok',        'Thailand',    'Independent', 'resort',   'https://www.atriceresort.com',                                    'https://www.facebook.com/atriceresort',                                        'open',         true),
('hotel-19', 'AVA SEA Krabi Resort',                     'Krabi',               'Thailand',    'Independent', 'beach',    'https://www.avaseakrabi.com/',                                    'https://www.facebook.com/avasearesort',                                        'coming_soon',  true),
('hotel-20', 'Blue Neptuna Hotel Patong',                 'Phuket',              'Thailand',    'Independent', 'beach',    'https://www.booking.com/hotel/th/orngaerm-enpthuunaa.html',       '',                                                                             'coming_soon',  true),
('hotel-21', 'Cubic Pratunam',                           'Bangkok',             'Thailand',    'Independent', 'city',     'https://www.booking.com/hotel/th/cubic-pratunam.html',            'https://www.facebook.com/cubicpratunam',                                       'open',         true),
('hotel-22', 'Hotel Wizpark Ratchada',                   'Bangkok',             'Thailand',    'Independent', 'city',     'https://hotelwizpark.com',                                        'https://www.facebook.com/hotelwizparkratchada',                                'open',         true),
('hotel-23', 'Koh Talu On Shore Resort',                 'Prachuap Khiri Khan', 'Thailand',    'Independent', 'resort',   'https://www.taluisland.com/kohtaluonshore',                       'https://www.facebook.com/KohTaluOnShore',                                      'open',         true),
('hotel-24', 'LiveZen Bangkok',                          'Bangkok',             'Thailand',    'Independent', 'city',     'https://www.livezenbangkok.com',                                  'https://www.facebook.com/Livezen.Bangkok',                                     'open',         true),
('hotel-25', 'Manditel North Pattaya',                   'Pattaya',             'Thailand',    'Independent', 'beach',    'https://www.manditel.com',                                        'https://www.facebook.com/profile.php?id=61586305439609',                       'open',         true),
('hotel-26', 'Nidhra Boutique Hotel Bangkok',             'Bangkok',             'Thailand',    'Independent', 'city',     'https://nidhraboutique.com',                                      'https://www.facebook.com/nidhrabangkok',                                       'open',         true),
('hotel-27', 'Ratri Hotel Phuket Old Town',               'Phuket',              'Thailand',    'Independent', 'beach',    'https://www.ratriphuket.com',                                     'https://www.facebook.com/ratrihotelphuket',                                    'open',         true),
('hotel-28', 'Rose Apple Hotel',                         'Bangkok',             'Thailand',    'Independent', 'city',     'https://roseapplehotel.com',                                      'https://www.facebook.com/roseapplehotel',                                      'open',         true),
('hotel-29', 'Royal Pavilion Hua Hin',                   'Hua Hin',             'Thailand',    'Independent', 'beach',    'https://www.ryphuahin.com',                                       'https://www.facebook.com/RYPHUAHIN',                                           'open',         true),
('hotel-30', 'Ruamchitt Plaza Hotel',                    'Bangkok',             'Thailand',    'Independent', 'city',     'https://ruamchitt.com',                                           'https://www.facebook.com/ruamchittplaza',                                      'open',         true),
('hotel-31', 'Sea Side Ao Nang Krabi',                   'Krabi',               'Thailand',    'Independent', 'beach',    'https://www.booking.com/hotel/th/sea-side-the-landmark-krabi-ao-nang-beach.html', 'https://www.facebook.com/profile.php?id=61575267752107', 'coming_soon', false),
('hotel-32', 'Spittze Hotel Pratunam',                   'Bangkok',             'Thailand',    'Independent', 'city',     'https://www.booking.com/hotel/th/spitze.html',                    'https://www.facebook.com/spittzehotel',                                        'open',         true),
('hotel-33', 'Tatami Hotel Phuket',                      'Phuket',              'Thailand',    'Independent', 'beach',    'https://www.booking.com/hotel/th/tatami-phuket.html',             'https://www.facebook.com/people/Tatami-Hotel/61576671947434',                  'open',         true),
('hotel-34', 'The Kite Hotel Bangsaen',                  'Bangsaen',            'Thailand',    'Independent', 'beach',    'https://www.thekitehotel.com',                                    'https://www.facebook.com/TheKiteHotelBangsaen',                                'open',         true),
('hotel-35', 'The Rich Grand Residence Sukhumvit',        'Bangkok',             'Thailand',    'Independent', 'city',     'https://www.therichresidences.com/grand',                         'https://www.facebook.com/therichgrandresidence',                               'open',         true),
('hotel-36', 'The Rich Residence Sukhumvit',              'Bangkok',             'Thailand',    'Independent', 'city',     'https://www.therichresidences.com',                               'https://www.facebook.com/therichresidencesukhumvitnana',                       'open',         true),
('hotel-37', 'Travelier Hostel',                         'Bangkok',             'Thailand',    'Independent', 'city',     'https://www.booking.com/hotel/th/travelier-hostel.en-gb.html',    'https://www.facebook.com/travelierhostel',                                     'open',         true),
('hotel-38', 'V Style Boutique Hotel',                   'Pattaya',             'Thailand',    'Independent', 'beach',    'https://www.booking.com/hotel/th/v-style-boutique.html',          'https://www.facebook.com/profile.php?id=61582355910546',                       'open',         true),
('hotel-39', 'VOQUE Hotel & Serviced Residence Sukhumvit 51', 'Bangkok',        'Thailand',    'Independent', 'city',     'https://www.voquesukhumvit.com/',                                 'https://www.facebook.com/Voquehotel51',                                        'open',         true),

-- Independent Philippines
('hotel-40', 'Alpa City Suites',                         'Cebu',                'Philippines', 'Independent', 'city',     'https://alpacitysuites.com/',                                     'https://www.facebook.com/AlpaCitySuitesHotel',                                 'open',         true),
('hotel-41', 'La Bella Boutique Hotel',                  'Tagaytay',            'Philippines', 'Independent', 'highland', 'https://labellaboutiquehotel.com/en',                             'https://www.facebook.com/LaBellaBoutiqueHotel',                                'open',         true),
('hotel-42', 'Mangrove Place and Residences',            'Cebu',                'Philippines', 'Independent', 'city',     'https://mangroveplaceresidences.com/',                            'https://www.facebook.com/p/Mangrove-Place-and-Residences-Mactan-61554477525930','coming_soon',  false),
('hotel-43', 'oneTree Plaza Hotel Cebu',                 'Cebu',                'Philippines', 'Independent', 'city',     '',                                                                'https://www.facebook.com/p/OneTree-Plaza-Hotel-61575310798909',                 'coming_soon',  true);
