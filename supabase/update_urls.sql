-- URL and visibility update from CSV (2026-04-28)
-- Run this in Supabase SQL Editor

-- Kokotel Bangkok
UPDATE hotels SET website = 'https://www.kokotel.com/bangkok-dheva-thonglor/' WHERE name = 'Kokotel Bangkok Dheva Thonglor';
UPDATE hotels SET website = 'https://www.kokotel.com/bangkok-sukhumvit-50/'    WHERE name = 'Kokotel Bangkok Sukhumvit 50';
UPDATE hotels SET website = 'https://www.kokotel.com/surawong/'                WHERE name = 'Kokotel Bangkok Surawong';

-- Kokotel Cebu
UPDATE hotels SET website = 'https://www.kokotel.com/kokotelcebuadira/', status = 'open'        WHERE name = 'Kokotel Cebu Adira';
UPDATE hotels SET website = 'https://www.kokotel.com',                   status = 'coming_soon' WHERE name = 'Kokotel Cebu Capitol';

-- Kokotel Chiang Mai / Chiang Rai
UPDATE hotels SET website = 'https://www.kokotel.com/chiang-mai-nimman/'                  WHERE name = 'Kokotel Chiang Mai Nimman';
UPDATE hotels SET website = 'https://www.kokotel.com/kokotel-chiang-rai-airport-suites/'  WHERE name = 'Kokotel Chiang Rai Airport Suites';

-- Kokotel Khao Lak
UPDATE hotels SET website = 'https://www.kokotel.com/kokotel-khao-lak-isara-casa/' WHERE name = 'Kokotel Khao Lak Isara Casa';
UPDATE hotels SET website = 'https://www.kokotel.com/khao-lak-lighthouse/'         WHERE name = 'Kokotel Khao Lak Lighthouse';
UPDATE hotels SET website = 'https://www.kokotel.com/khao-lak-montana/'            WHERE name = 'Kokotel Khao Lak Montana';
UPDATE hotels SET website = 'https://www.kokotel.com/khao-lak-seascape/'           WHERE name = 'Kokotel Khao Lak Seascape';

-- Kokotel Krabi
UPDATE hotels SET website = 'https://www.kokotel.com/krabi-ao-nang/' WHERE name = 'Kokotel Krabi Ao Nang';
UPDATE hotels SET website = 'https://www.kokotel.com/krabi-oasis/'   WHERE name = 'Kokotel Krabi Oasis';

-- Kokotel Pattaya
UPDATE hotels SET website = 'https://www.kokotel.com/kokotel-pattaya-north-beach/' WHERE name = 'Kokotel Pattaya North Beach';
UPDATE hotels SET website = 'https://www.kokotel.com/pattaya-south-beach/'         WHERE name = 'Kokotel Pattaya South Beach';

-- Kokotel Phuket
UPDATE hotels SET website = 'https://www.kokotel.com/phuket-nai-yang/' WHERE name = 'Kokotel Phuket Nai Yang';
UPDATE hotels SET website = 'https://www.kokotel.com/phuket-patong/'   WHERE name = 'Kokotel Phuket Patong';

-- Kokotel Rayong
UPDATE hotels SET website = 'https://www.kokotel.com/rayong-beachfront/' WHERE name = 'Kokotel Rayong Beachfront';

-- Independent – status & visibility changes
UPDATE hotels SET status = 'open', visible = true  WHERE name = 'AVA SEA Krabi Resort';
UPDATE hotels SET status = 'open', visible = true,
  website = 'https://www.booking.com/hotel/th/orngaerm-enpthuunaa.html?aid=356980'
  WHERE name = 'Blue Neptuna Hotel Patong';

UPDATE hotels SET visible = false,
  website = 'https://www.booking.com/hotel/th/cubic-pratunam.html?aid=356980'
  WHERE name = 'Cubic Pratunam';

UPDATE hotels SET visible = false WHERE name = 'Nidhra Boutique Hotel Bangkok';
UPDATE hotels SET visible = false WHERE name = 'Rose Apple Hotel';

UPDATE hotels SET visible = true,
  website = 'https://www.booking.com/hotel/th/sea-side-the-landmark-krabi-ao-nang-beach.html?aid=318615'
  WHERE name = 'Sea Side Ao Nang Krabi';

UPDATE hotels SET visible = false,
  website = 'https://www.booking.com/hotel/th/spitze.html?aid=356980'
  WHERE name = 'Spittze Hotel Pratunam';

UPDATE hotels SET website = 'https://www.booking.com/hotel/th/tatami-phuket.html?aid=356980'
  WHERE name = 'Tatami Hotel Phuket';

UPDATE hotels SET visible = false,
  website = 'https://www.booking.com/hotel/th/travelier-hostel.en-gb.html?aid=311984'
  WHERE name = 'Travelier Hostel';

UPDATE hotels SET visible = false,
  website = 'https://www.booking.com/hotel/th/v-style-boutique.html?aid=318615'
  WHERE name = 'V Style Boutique Hotel';

UPDATE hotels SET visible = true, status = 'open' WHERE name = 'Mangrove Place and Residences';
