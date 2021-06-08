const ObjectId = (id) => {
  return id
}
const CHAT_TOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2NoYXQtc2VydmljZS5iYWFuaWEuY29tIiwiaWF0IjoxNjIzMTI5MjY3LCJleHAiOjE2NTQ2NjUyNjcsImlzcyI6ImJhYW5pYWNvbm5lY3RAZ21haWwuY29tIiwic3ViIjoiYmFhbmlhY29ubmVjdEBnbWFpbC5jb20iLCJ1aWQiOiI1ZTBkYTJiZmExNzkzNzQyNWY2MDI1NzgiLCJjbGFpbXMiOnsiZW1haWwiOiJ0dGhuZ3NpbnRodUB5YWhvby5jb20iLCJkaXNwbGF5TmFtZSI6IkppbGwgR3JlZW4ifX0.mWbOxp-oiZwQvsDuD1gsvqGDCed_pXHIyPD15ln6YgK6aavRbiPzyw8XaTbC8pp_Ld5KYzkWI_jjWBmiQtpkFXwzxhKFenYL1dFfIBfkRAV0qQWOQfwiUjcFwcTFkWAWoQIfywguqvKtvRhsJVVSDAGkD0MWLIK9-MH8-1FiuvU'
const CHAT_AGENT_TOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2NoYXQtc2VydmljZS5iYWFuaWEuY29tIiwiaWF0IjoxNjIyODAzODE0LCJleHAiOjE2NTQzMzk4MTQsImlzcyI6ImJhYW5pYWNvbm5lY3RAZ21haWwuY29tIiwic3ViIjoiYmFhbmlhY29ubmVjdEBnbWFpbC5jb20iLCJ1aWQiOiI1ZGQzYjk1YTRmMTk3ZGM0MTQ2NzU2NDYiLCJjbGFpbXMiOnsiZW1haWwiOiJkYnVueWFzYXBodGhAaG90bWFpbC5jb20iLCJkaXNwbGF5TmFtZSI6IuC4oOC4seC4hOC4iuC4seC4jeC4jeC4siDguJfguKvguLLguKPguYHguJfguYkifX0.RWnGPURWLSY_syDlNPMesbmr4LmEaDtpSC82tNeCblNClVjVq_Ke9ScUFANKB1wVSdOzdjmPbMu2VUv5Hyb8qHzPIvLjyEaWIUxTh2U1Lzyi1AEC2YZOhshtE5SwKVWgFe-x07Sy3m50jO0RwJMuJc836V9X85IdyITHzH2WYVQ'
const LISTINGS = [
  /* 1 createdAt:5/12/2021, 7:57:11 PM*/
  {
    _id: ObjectId('609bd0a7368e4ffeb0996e58'),
    keyId: 'listing_dummy_69hi06re'
  },

  /* 2 createdAt:5/12/2021, 7:57:11 PM*/
  {
    _id: ObjectId('609bd0a7368e4ffeb0996e57'),
    keyId: 'listing_dummy_9f8wonve'
  },

  /* 3 createdAt:5/12/2021, 7:57:11 PM*/
  {
    _id: ObjectId('609bd0a7368e4ffeb0996e56'),
    keyId: 'listing_dummy_fh8kx624'
  },

  /* 4 createdAt:5/12/2021, 7:57:11 PM*/
  {
    _id: ObjectId('609bd0a7368e4ffeb0996e55'),
    keyId: 'listing_dummy_dqvgf0qh'
  },

  /* 5 createdAt:5/12/2021, 7:57:11 PM*/
  {
    _id: ObjectId('609bd0a7368e4ffeb0996e54'),
    keyId: 'listing_dummy_9zeau8x1'
  },

  /* 6 createdAt:5/12/2021, 7:57:11 PM*/
  {
    _id: ObjectId('609bd0a7368e4ffeb0996e53'),
    keyId: 'listing_dummy_q3o9ho9g'
  },

  /* 7 createdAt:5/12/2021, 7:57:11 PM*/

  /* 8 createdAt:5/12/2021, 7:57:11 PM*/
  {
    _id: ObjectId('609bd0a7368e4ffeb0996e51'),
    keyId: 'listing_dummy_bho08ycu'
  },

  /* 9 createdAt:5/12/2021, 7:57:11 PM*/
  {
    _id: ObjectId('609bd0a7368e4ffeb0996e50'),
    keyId: 'listing_dummy_ewqo1zpc'
  },

  /* 10 createdAt:5/12/2021, 7:57:11 PM*/
  {
    _id: ObjectId('609bd0a7368e4ffeb0996e4f'),
    keyId: 'listing_dummy_lo3i2ogo'
  },

  /* 11 createdAt:5/12/2021, 7:57:10 PM*/
  {
    _id: ObjectId('609bd0a6368e4ffeb0996e4e'),
    keyId: 'listing_dummy_pyqhaot5'
  },

  /* 12 createdAt:5/12/2021, 7:57:10 PM*/
  {
    _id: ObjectId('609bd0a6368e4ffeb0996e4d'),
    keyId: 'listing_dummy_n12mxln3'
  },

  /* 13 createdAt:5/12/2021, 7:57:10 PM*/
  {
    _id: ObjectId('609bd0a6368e4ffeb0996e4c'),
    keyId: 'listing_dummy_tx3ztj22'
  },

  /* 14 createdAt:5/12/2021, 7:57:10 PM*/
  {
    _id: ObjectId('609bd0a6368e4ffeb0996e4b'),
    keyId: 'listing_dummy_krhh55s9'
  },

  /* 15 createdAt:5/12/2021, 7:57:10 PM*/
  {
    _id: ObjectId('609bd0a6368e4ffeb0996e4a'),
    keyId: 'listing_dummy_u2pq78xk'
  },

  /* 16 createdAt:5/12/2021, 7:57:10 PM*/
  {
    _id: ObjectId('609bd0a6368e4ffeb0996e49'),
    keyId: 'listing_dummy_b2692n69'
  },

  /* 17 createdAt:5/12/2021, 7:57:10 PM*/
  {
    _id: ObjectId('609bd0a6368e4ffeb0996e48'),
    keyId: 'listing_dummy_y3c92oxy'
  },

  /* 18 createdAt:5/12/2021, 7:57:10 PM*/
  {
    _id: ObjectId('609bd0a6368e4ffeb0996e47'),
    keyId: 'listing_dummy_rvjlb6xf'
  },

  /* 19 createdAt:5/12/2021, 7:57:10 PM*/
  {
    _id: ObjectId('609bd0a6368e4ffeb0996e46'),
    keyId: 'listing_dummy_iaqskphm'
  },

  /* 20 createdAt:5/12/2021, 7:57:10 PM*/
  {
    _id: ObjectId('609bd0a6368e4ffeb0996e45'),
    keyId: 'listing_dummy_u3dad8vu'
  },

  /* 21 createdAt:5/12/2021, 7:57:10 PM*/
  {
    _id: ObjectId('609bd0a6368e4ffeb0996e44'),
    keyId: 'listing_dummy_vnv8g2yj'
  },

  /* 22 createdAt:5/12/2021, 7:57:09 PM*/
  {
    _id: ObjectId('609bd0a5368e4ffeb0996e43'),
    keyId: 'listing_dummy_vzy9762q'
  },

  /* 23 createdAt:5/12/2021, 7:57:09 PM*/
  {
    _id: ObjectId('609bd0a5368e4ffeb0996e42'),
    keyId: 'listing_dummy_a7pqg9fr'
  },

  /* 24 createdAt:5/12/2021, 7:57:09 PM*/
  {
    _id: ObjectId('609bd0a5368e4ffeb0996e41'),
    keyId: 'listing_dummy_tti4shhs'
  },

  /* 25 createdAt:5/12/2021, 7:57:08 PM*/
  {
    _id: ObjectId('609bd0a4368e4ffeb0996e40'),
    keyId: 'listing_dummy_m5r6gn1i'
  },

  /* 26 createdAt:5/12/2021, 7:57:08 PM*/
  {
    _id: ObjectId('609bd0a4368e4ffeb0996e3f'),
    keyId: 'listing_dummy_cqjvwey3'
  },

  /* 27 createdAt:5/12/2021, 7:57:08 PM*/
  {
    _id: ObjectId('609bd0a4368e4ffeb0996e3e'),
    keyId: 'listing_dummy_ib0qho76'
  },

  /* 28 createdAt:5/12/2021, 7:57:08 PM*/
  {
    _id: ObjectId('609bd0a4368e4ffeb0996e3d'),
    keyId: 'listing_dummy_dabjhddp'
  },

  /* 29 createdAt:5/12/2021, 7:57:08 PM*/
  {
    _id: ObjectId('609bd0a4368e4ffeb0996e3c'),
    keyId: 'listing_dummy_36pe8zno'
  },

  /* 30 createdAt:5/12/2021, 7:57:08 PM*/
  {
    _id: ObjectId('609bd0a4368e4ffeb0996e3b'),
    keyId: 'listing_dummy_0qqu52gg'
  },

  /* 31 createdAt:5/12/2021, 7:57:08 PM*/
  {
    _id: ObjectId('609bd0a4368e4ffeb0996e3a'),
    keyId: 'listing_dummy_am9gwcrc'
  },

  /* 32 createdAt:5/12/2021, 7:57:08 PM*/
  {
    _id: ObjectId('609bd0a4368e4ffeb0996e39'),
    keyId: 'listing_dummy_e3lsq4xy'
  },

  /* 33 createdAt:5/12/2021, 7:57:07 PM*/
  {
    _id: ObjectId('609bd0a3368e4ffeb0996e38'),
    keyId: 'listing_dummy_wi7ksmhj'
  },

  /* 34 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e37'),
    keyId: 'listing_dummy_cdrj8p0h'
  },

  /* 35 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e36'),
    keyId: 'listing_dummy_vbox5d85'
  },

  /* 36 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e35'),
    keyId: 'listing_dummy_vxkmadrz'
  },

  /* 37 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e34'),
    keyId: 'listing_dummy_e3kpg64o'
  },

  /* 38 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e33'),
    keyId: 'listing_dummy_snq034xc'
  },

  /* 39 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e32'),
    keyId: 'listing_dummy_c3zynff9'
  },

  /* 40 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e31'),
    keyId: 'listing_dummy_6xqhi2on'
  },

  /* 41 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e30'),
    keyId: 'listing_dummy_rjh6hgsa'
  },

  /* 42 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e2f'),
    keyId: 'listing_dummy_jflcuxhh'
  },

  /* 43 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e2e'),
    keyId: 'listing_dummy_ys3k6xgr'
  },

  /* 44 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e2d'),
    keyId: 'listing_dummy_nuye25fr'
  },

  /* 45 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e2c'),
    keyId: 'listing_dummy_or99jnza'
  },

  /* 46 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e2b'),
    keyId: 'listing_dummy_dy3ru2oq'
  },

  /* 47 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e2a'),
    keyId: 'listing_dummy_0fcvrmc7'
  },

  /* 48 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e29'),
    keyId: 'listing_dummy_xuw49ym6'
  },

  /* 49 createdAt:5/12/2021, 7:57:06 PM*/
  {
    _id: ObjectId('609bd0a2368e4ffeb0996e28'),
    keyId: 'listing_dummy_pjh2nb0h'
  },

  /* 50 createdAt:5/12/2021, 7:57:05 PM*/
  {
    _id: ObjectId('609bd0a1368e4ffeb0996e27'),
    keyId: 'listing_dummy_9zaid1v3'
  },

  /* 51 createdAt:5/12/2021, 7:57:05 PM*/
  {
    _id: ObjectId('609bd0a1368e4ffeb0996e26'),
    keyId: 'listing_dummy_xhyuezcb'
  },

  /* 52 createdAt:5/12/2021, 7:57:05 PM*/
  {
    _id: ObjectId('609bd0a1368e4ffeb0996e25'),
    keyId: 'listing_dummy_9dxay8zo'
  },

  /* 53 createdAt:5/12/2021, 7:57:05 PM*/
  {
    _id: ObjectId('609bd0a1368e4ffeb0996e24'),
    keyId: 'listing_dummy_y8wez1lt'
  },

  /* 54 createdAt:5/12/2021, 7:57:05 PM*/
  {
    _id: ObjectId('609bd0a1368e4ffeb0996e23'),
    keyId: 'listing_dummy_5kci3xeu'
  },

  /* 55 createdAt:5/12/2021, 7:57:05 PM*/
  {
    _id: ObjectId('609bd0a1368e4ffeb0996e22'),
    keyId: 'listing_dummy_tefz7sjh'
  },

  /* 56 createdAt:5/12/2021, 7:57:05 PM*/
  {
    _id: ObjectId('609bd0a1368e4ffeb0996e21'),
    keyId: 'listing_dummy_31s8vxtn'
  },

  /* 57 createdAt:5/12/2021, 7:57:05 PM*/
  {
    _id: ObjectId('609bd0a1368e4ffeb0996e20'),
    keyId: 'listing_dummy_h6xzw0e0'
  },

  /* 58 createdAt:5/12/2021, 7:57:05 PM*/
  {
    _id: ObjectId('609bd0a1368e4ffeb0996e1f'),
    keyId: 'listing_dummy_1t0wqagk'
  },

  /* 59 createdAt:5/12/2021, 7:57:05 PM*/
  {
    _id: ObjectId('609bd0a1368e4ffeb0996e1e'),
    keyId: 'listing_dummy_btea36te'
  },

  /* 60 createdAt:5/12/2021, 7:57:05 PM*/
  {
    _id: ObjectId('609bd0a1368e4ffeb0996e1d'),
    keyId: 'listing_dummy_i0o3v3t9'
  },

  /* 61 createdAt:5/12/2021, 7:57:05 PM*/
  {
    _id: ObjectId('609bd0a1368e4ffeb0996e1c'),
    keyId: 'listing_dummy_t069e369'
  },

  /* 62 createdAt:5/12/2021, 7:57:04 PM*/
  {
    _id: ObjectId('609bd0a0368e4ffeb0996e1b'),
    keyId: 'listing_dummy_ng6e0jk8'
  },

  /* 63 createdAt:5/12/2021, 7:57:04 PM*/
  {
    _id: ObjectId('609bd0a0368e4ffeb0996e1a'),
    keyId: 'listing_dummy_zrtgu8o8'
  },

  /* 64 createdAt:5/12/2021, 7:57:04 PM*/
  {
    _id: ObjectId('609bd0a0368e4ffeb0996e19'),
    keyId: 'listing_dummy_28z7j0im'
  },

  /* 65 createdAt:5/12/2021, 7:57:04 PM*/
  {
    _id: ObjectId('609bd0a0368e4ffeb0996e18'),
    keyId: 'listing_dummy_tv766s6j'
  },

  /* 66 createdAt:5/12/2021, 7:57:04 PM*/
  {
    _id: ObjectId('609bd0a0368e4ffeb0996e17'),
    keyId: 'listing_dummy_jy270n24'
  },

  /* 67 createdAt:5/12/2021, 7:57:03 PM*/
  {
    _id: ObjectId('609bd09f368e4ffeb0996e16'),
    keyId: 'listing_dummy_c9p9vbmb'
  },

  /* 68 createdAt:5/12/2021, 7:57:03 PM*/
  {
    _id: ObjectId('609bd09f368e4ffeb0996e15'),
    keyId: 'listing_dummy_duv15k51'
  },

  /* 69 createdAt:5/12/2021, 7:57:03 PM*/
  {
    _id: ObjectId('609bd09f368e4ffeb0996e14'),
    keyId: 'listing_dummy_zlc7xjuw'
  },

  /* 70 createdAt:5/12/2021, 7:57:03 PM*/
  {
    _id: ObjectId('609bd09f368e4ffeb0996e13'),
    keyId: 'listing_dummy_9d4cjwsm'
  },

  /* 71 createdAt:5/12/2021, 7:57:03 PM*/
  {
    _id: ObjectId('609bd09f368e4ffeb0996e12'),
    keyId: 'listing_dummy_mby55yh8'
  },

  /* 72 createdAt:5/12/2021, 7:57:03 PM*/
  {
    _id: ObjectId('609bd09f368e4ffeb0996e11'),
    keyId: 'listing_dummy_i618i7jd'
  },

  /* 73 createdAt:5/12/2021, 7:57:02 PM*/
  {
    _id: ObjectId('609bd09e368e4ffeb0996e10'),
    keyId: 'listing_dummy_1k46nld7'
  },

  /* 74 createdAt:5/12/2021, 7:57:02 PM*/
  {
    _id: ObjectId('609bd09e368e4ffeb0996e0f'),
    keyId: 'listing_dummy_l5y6pw5e'
  },

  /* 75 createdAt:5/12/2021, 7:57:02 PM*/
  {
    _id: ObjectId('609bd09e368e4ffeb0996e0e'),
    keyId: 'listing_dummy_z2a3y5d4'
  },

  /* 76 createdAt:5/12/2021, 7:57:02 PM*/
  {
    _id: ObjectId('609bd09e368e4ffeb0996e0d'),
    keyId: 'listing_dummy_pvu9e91b'
  },

  /* 77 createdAt:5/12/2021, 7:57:02 PM*/
  {
    _id: ObjectId('609bd09e368e4ffeb0996e0c'),
    keyId: 'listing_dummy_wmdcruwb'
  },

  /* 78 createdAt:5/12/2021, 7:57:02 PM*/
  {
    _id: ObjectId('609bd09e368e4ffeb0996e0b'),
    keyId: 'listing_dummy_yo4iqrj7'
  },

  /* 79 createdAt:5/12/2021, 7:57:02 PM*/
  {
    _id: ObjectId('609bd09e368e4ffeb0996e0a'),
    keyId: 'listing_dummy_1xx2efif'
  },

  /* 80 createdAt:5/12/2021, 7:57:01 PM*/
  {
    _id: ObjectId('609bd09d368e4ffeb0996e09'),
    keyId: 'listing_dummy_yu4mk3b7'
  },

  /* 81 createdAt:5/12/2021, 7:57:01 PM*/
  {
    _id: ObjectId('609bd09d368e4ffeb0996e08'),
    keyId: 'listing_dummy_xwhlp9lp'
  },

  /* 82 createdAt:5/12/2021, 7:57:01 PM*/
  {
    _id: ObjectId('609bd09d368e4ffeb0996e07'),
    keyId: 'listing_dummy_ywsfoi3g'
  },

  /* 83 createdAt:5/12/2021, 7:57:01 PM*/
  {
    _id: ObjectId('609bd09d368e4ffeb0996e06'),
    keyId: 'listing_dummy_rtnn75f0'
  },

  /* 84 createdAt:5/12/2021, 7:57:01 PM*/
  {
    _id: ObjectId('609bd09d368e4ffeb0996e05'),
    keyId: 'listing_dummy_19t5e7ux'
  },

  /* 85 createdAt:5/12/2021, 7:57:01 PM*/
  {
    _id: ObjectId('609bd09d368e4ffeb0996e04'),
    keyId: 'listing_dummy_che09uob'
  },

  /* 86 createdAt:5/12/2021, 7:57:01 PM*/
  {
    _id: ObjectId('609bd09d368e4ffeb0996e03'),
    keyId: 'listing_dummy_vmjp1qgb'
  },

  /* 87 createdAt:5/12/2021, 7:57:01 PM*/
  {
    _id: ObjectId('609bd09d368e4ffeb0996e02'),
    keyId: 'listing_dummy_tq156lvf'
  },

  /* 88 createdAt:5/12/2021, 7:57:01 PM*/
  {
    _id: ObjectId('609bd09d368e4ffeb0996e01'),
    keyId: 'listing_dummy_1izdogwm'
  },

  /* 89 createdAt:5/12/2021, 7:57:00 PM*/
  {
    _id: ObjectId('609bd09c368e4ffeb0996e00'),
    keyId: 'listing_dummy_i8q3dz46'
  },

  /* 90 createdAt:5/12/2021, 7:57:00 PM*/
  {
    _id: ObjectId('609bd09c368e4ffeb0996dff'),
    keyId: 'listing_dummy_8fmd7qtg'
  },

  /* 91 createdAt:5/12/2021, 7:57:00 PM*/
  {
    _id: ObjectId('609bd09c368e4ffeb0996dfe'),
    keyId: 'listing_dummy_f481q5ky'
  },

  /* 92 createdAt:5/12/2021, 7:57:00 PM*/
  {
    _id: ObjectId('609bd09c368e4ffeb0996dfd'),
    keyId: 'listing_dummy_qmmf1lzp'
  },

  /* 93 createdAt:5/12/2021, 7:57:00 PM*/
  {
    _id: ObjectId('609bd09c368e4ffeb0996dfc'),
    keyId: 'listing_dummy_if89tpyt'
  },

  /* 94 createdAt:5/12/2021, 7:57:00 PM*/
  {
    _id: ObjectId('609bd09c368e4ffeb0996dfb'),
    keyId: 'listing_dummy_t844v35a'
  },

  /* 95 createdAt:5/12/2021, 7:56:59 PM*/
  {
    _id: ObjectId('609bd09b368e4ffeb0996dfa'),
    keyId: 'listing_dummy_k0ei54k1'
  },

  /* 96 createdAt:5/12/2021, 7:56:59 PM*/
  {
    _id: ObjectId('609bd09b368e4ffeb0996df9'),
    keyId: 'listing_dummy_eqajejku'
  },

  /* 97 createdAt:5/12/2021, 7:56:59 PM*/
  {
    _id: ObjectId('609bd09b368e4ffeb0996df8'),
    keyId: 'listing_dummy_bx14fr4n'
  },

  /* 98 createdAt:5/12/2021, 7:56:59 PM*/
  {
    _id: ObjectId('609bd09b368e4ffeb0996df7'),
    keyId: 'listing_dummy_d40oo2r5'
  },

  /* 99 createdAt:5/12/2021, 7:56:59 PM*/
  {
    _id: ObjectId('609bd09b368e4ffeb0996df6'),
    keyId: 'listing_dummy_9c4yjoe5'
  },

  /* 100 createdAt:5/12/2021, 7:56:59 PM*/
  {
    _id: ObjectId('609bd09b368e4ffeb0996df5'),
    keyId: 'listing_dummy_9tc5lpxc'
  }
]

export { CHAT_TOKEN, CHAT_AGENT_TOKEN, LISTINGS }
