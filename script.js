var names = [
'Meadows Museum','Highland Park United Methodist Church','Elizabeth Perkins Pronthro Hall','Commuter Lot','Hughes-Trigg Student Center', 'Fondren Science Center',
'Hillcrest Manor Apartment','Crow Building','Smith Hall','Morrison McGinnis Hall','Sigma Chi House','Cockrell McIntosh Hall', 'Data Center', 'SMU Tennis Complex',
'SMU Bookstore', 'Gerald J. Ford Stadium', 'Ware Residential Commons', 'Crum Residential Commons','Loyd Residential Commons','Kathy Crow Residential Commons', 
'Armstrong Residential Commons','Mustang Parking Center', '6200 N. Central Expressway','Arnold Dining Hall','George W. Bush Presidential Center','Dedman Center for Lifetime Sports',
'Crum Basketball Center', 'Moody Coliseum', 'Westcott Field', 'Binkley Parking Center', 'Cockrell-McIntosh Commons','McElvaney Hall','Barr Pool','Prothro Hall', 'Moore Hall',
'Selecman Hall','Hawk Hall','Kirby Hall','Martin Hall','Intramural Field', 'Perkins Chapel','Kappa Alpha Order','Moody Parking Center','Beta Theta Pi House', 'Phi Gamma Delta House',
'Phi Delta Theta House', 'SMU Service House','Pi Kappa Alpha House','Lambda Chi Alpha House', 'Dawson Service Center', 'Sigma Chi House','Collins Center','Blanton Student Services Building', 
'Junkins Engineering Bldg.','Embrey Engineering Building','Caruth Hall', 'Fincher Building','Maguire Building', 'Boaz Hall','Patterson Hall', 'Clements Hall',
'Owens Art Center','Mary Hay Hall', 'Peyton Hall','Shuttles Hall', 'Virginia-Snider Hall','Umphrey Lee Center','McFarlin Auditorium','Perkins Administration',
'Florence Hall','Underwood Law Library','Storey Hall', 'Daniel Parking Center','Hillcrest Manor','Fondren Science', 'Heroy Science Hall', 'Dallas Hall','SMU Apartments',
'3216 Daniel Avenue', '3200 Daniel Avenue', '3130 Daniel Avenue', 'Daniel House II','Delta Gamma House','Kappa Kappa Gamma House','Gamma Phi Beta House','Chi Omega House', 
'Alpha Chi Omega House', '3014 Daniel Avenue','Pi Beta Phi House','Kappa Alpha Theta House', 'Delta Delta Delta House','Airline Parking Center','Dedman Life Sciences',
'Fondren Library Center','Harold Clark Simmons Hall', 'Annette Caldwell Simmons Hall','Hyer Hall','2800 SMU Boulevard','6100 Bishop Blvd.','3160 Daniel Ave.',
'Sigma Alpha Epsilon House','Kappa Sigma House','Sigma Phi Epsilon House', '3301 Dyer Street', '3058 SMU Boulevard', '2800 SMU Boulevard', '5700 Bishop Blvd.',
'Paul B. Loyd Jr. All Sports Center', 'Bush Parking Center', 'DEA Offices', '3000 Daniel Avenue', '5800 Hillcrest Avenue', 'Highland Park United Methodist Church',
'5900 Ownby Drive', '3000 SMU Blvd', 'Health Center Construction Site', 'Umphrey Lee Parking Lot', 'Junkins Engineering Building', 'Fondren Science Building',
'Expressway Tower', '5900 Bush Avenue', '3000 SMU Blvd.', '5539 SMU Blvd.', 'Kappa Alpha House', '5800 Bush Avenue', 'Airline and Dyer Street',
'Sigma Alpha Epsilon', '6229 Hillcrest Ave.', 'Junkins Engineering Bldg', 'Cockrell-McIntosh Hall', '3300 Daniel Avenue', 'Crum Auditorium', '2701 Fondren Dr.',
'5805 Bush Avenue', '5800 Bush Avenue', '3200 University Blvd.', '2900 SMU Blvd.', 'Perkins Hall', '3300 Daniel Ave.', '3300 Dyer Street',
'Miller Event Center', '3200 Daniel Ave.', '6000 Ownby Drive', '3000 McFarlin Blvd.', '3100 University Blvd.', '3300 Dyer St.', '5811 Bush Avenue',
'6200 Bishop Blvd.', 'Health Center', '5547 SMU Blvd.', '3000 Binkley Avenue', 'Bishop Blvd. at Mockingbird Lane', 'SMU Bookstore'
];

var dict = [];
dict['Meadows Museum'] = {lat: 32.838340, lng: -96.784645, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Highland Park United Methodist Church']= {lat: 32.837272, lng: -96.785477, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Elizabeth Perkins Pronthro Hall']= {lat: 32.837272, lng: -96.785477, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Commuter Lot']= {lat: 32.837272, lng: -96.785477, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Hughes-Trigg Student Center']= {lat: 32.843286, lng: -96.783279, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Fondren Science Center']= {lat: 32.846071, lng: -96.783729, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Hillcrest Manor Apartment']= {lat: 32.846836, lng: -96.785121, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Crow Building']= {lat: 32.842080, lng: -96.784159, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Smith Hall']= {lat: 32.840439, lng: -96.786201, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Morrison McGinnis Hall']= {lat: 32.840097, lng: -96.784294, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Sigma Chi House']= {lat: 32.841185, lng: -96.781945, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Cockrell McIntosh Hall']= {lat: 32.839299, lng: -96.784391, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Data Center']= {lat: 32.834118, lng: -96.780484, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['SMU Tennis Complex']= {lat: 32.836498, lng: -96.780377, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['SMU Bookstore']= {lat: 32.837002, lng: -96.780838, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Gerald J. Ford Stadium']= {lat: 32.838760, lng: -96.782694, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Ware Residential Commons']= {lat: 32.838084, lng: -96.780023, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Crum Residential Commons']= {lat: 32.838030, lng: -96.781052, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Loyd Residential Commons']= {lat: 32.838823, lng: -96.779765, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Kathy Crow Residential Commons']= {lat: 32.838390, lng: -96.780301, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Armstrong Residential Commons']= {lat: 32.838521, lng: -96.781122, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Mustang Parking Center']= {lat: 32.839341, lng: -96.779808, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['6200 N. Central Expressway']= {lat: 32.842636, lng: -96.774330, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Arnold Dining Hall']= {lat: 32.838792, lng: -96.780398, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['George W. Bush Presidential Center']= {lat: 32.841442, lng: -96.778209, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Dedman Center for Lifetime Sports']= {lat: 32.839103, lng: -96.781246, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Crum Basketball Center']= {lat: 32.840820, lng: -96.779765, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Moody Coliseum']= {lat: 32.840432, lng: -96.781224, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Westcott Field']= {lat: 32.839657, lng: -96.781787, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Binkley Parking Center']= {lat: 32.840847, lng: -96.782099, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Cockrell-McIntosh Commons']= {lat: 32.839299, lng: -96.784391, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['McElvaney Hall']= {lat: 32.839702, lng: -96.784067, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Barr Pool']= {lat: 32.840572, lng: -96.783418, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Prothro Hall']= {lat: 32.838668, lng: -96.785549, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Moore Hall']= {lat: 32.838366, lng: -96.786273, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Selecman Hall']= {lat: 32.839024, lng: -96.785489, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Hawk Hall']= {lat: 32.839060, lng: -96.786219, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Kirby Hall']= {lat: 32.839335, lng: -96.785489, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Martin Hall']= {lat: 32.839385, lng: -96.786198, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Intramural Field']= {lat: 32.840976, lng: -96.780834, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Perkins Chapel']= {lat: 32.839759, lng: -96.785827, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Kappa Alpha Order']= {lat: 32.842179, lng: -96.779707, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Moody Parking Center']= {lat: 32.841850, lng: -96.781193, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Beta Theta Pi House']= {lat: 32.842192, lng: -96.780629, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Phi Gamma Delta House']= {lat: 32.842183, lng: -96.780946, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Phi Delta Theta House']= {lat: 32.842183, lng: -96.781332, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['SMU Service House']= {lat: 32.843076, lng: -96.781386, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Pi Kappa Alpha House']= {lat: 32.843076, lng: -96.781042, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Lambda Chi Alpha House']= {lat: 32.843306, lng: -96.780227, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Dawson Service Center']= {lat: 32.843265, lng: -96.781348, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Sigma Chi House']= {lat: 32.841147, lng: -96.781954, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Collins Center']= {lat: 32.841183, lng: -96.783097, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Blanton Student Services Building']= {lat: 32.842048, lng: -96.782308, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Junkins Engineering Bldg.']= {lat: 32.842517, lng: -96.782190, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Embrey Engineering Building']= {lat: 32.842720, lng: -96.782298, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Caruth Hall']= {lat: 32.842607, lng: -96.782837, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Fincher Building']= {lat: 32.842265, lng: -96.783843, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Maguire Building']= {lat: 32.842539, lng: -96.784400, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Boaz Hall']= {lat: 32.841323, lng: -96.784111, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Patterson Hall']= {lat: 32.843490, lng: -96.782394, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Clements Hall']= {lat: 32.843608, lng: -96.784164, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Owens Art Center']= {lat: 32.841196, lng: -96.785425, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Mary Hay Hall']= {lat: 32.841850, lng: -96.785849, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Peyton Hall']= {lat: 32.841845, lng: -96.786514, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Shuttles Hall']= {lat: 32.842278, lng: -96.786557, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Virginia-Snider Hall']= {lat: 32.842706, lng: -96.786149, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Umphrey Lee Center']= {lat: 32.843355, lng: -96.786203, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['McFarlin Auditorium']= {lat: 32.844166, lng: -96.785811, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Perkins Administration']= {lat: 32.844931, lng: -96.785789, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Florence Hall']= {lat: 32.845715, lng: -96.786117, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Underwood Law Library']= {lat: 32.845958, lng: -96.786428, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Storey Hall']= {lat: 32.846179, lng: -96.786090, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Daniel Parking Center']= {lat: 32.846774, lng: -96.786256, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Hillcrest Manor']= {lat: 32.846836, lng: -96.785121, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Fondren Science']= {lat: 32.846071, lng: -96.783729, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Heroy Science Hall']= {lat: 32.845855, lng: -96.784325, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Dallas Hall']= {lat: 32.845052, lng: -96.784899, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['SMU Apartments']= {lat: 32.846811, lng: -96.783487, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3216 Daniel Avenue']= {lat: 32.846801, lng: -96.783663, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3200 Daniel Avenue']= {lat: 32.846816, lng: -96.782966, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3130 Daniel Avenue']= {lat: 32.846802, lng: -96.782189, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Daniel House II']= {lat: 32.846802, lng: -96.782189, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Delta Gamma House']= {lat: 32.847014, lng: -96.781873, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Kappa Kappa Gamma House']= {lat: 32.846960, lng: -96.781513, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Gamma Phi Beta House']= {lat: 32.846969, lng: -96.781132, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Chi Omega House']= {lat: 32.846969, lng: -96.780655, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Alpha Chi Omega House']= {lat: 32.846978, lng: -96.780000, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3014 Daniel Avenue']= {lat: 32.846965, lng: -96.779670, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Pi Beta Phi House']= {lat: 32.846596, lng: -96.781183, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Kappa Alpha Theta House']= {lat: 32.845712, lng: -96.781478, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Delta Delta Delta House']= {lat: 32.845721, lng: -96.781183, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Airline Parking Center']= {lat: 32.846149, lng: -96.782792, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Dedman Life Sciences']= {lat: 32.845636, lng: -96.783297, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Fondren Library Center']= {lat: 32.844459, lng: -96.783624, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Harold Clark Simmons Hall']= {lat: 32.844644, lng: -96.782385, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Annette Caldwell Simmons Hall']= {lat: 32.844888, lng: -96.782154, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Hyer Hall']= {lat: 32.844883, lng: -96.784080, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['2800 SMU Boulevard']= {lat: 32.842679, lng: -96.775709, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['6100 Bishop Blvd.']= {lat: 32.839849, lng: -96.784882, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3160 Daniel Ave.']= {lat: 32.846755, lng: -96.782575, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Sigma Alpha Epsilon House']= {lat: 32.843130, lng: -96.780125, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Kappa Sigma House']= {lat: 32.842228, lng: -96.780066, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Sigma Phi Epsilon House']= {lat: 32.842179, lng: -96.780372, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3301 Dyer Street']= {lat: 32.843186, lng: -96.785811, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3058 SMU Boulevard']= {lat: 32.842348, lng: -96.780563, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['2800 SMU Boulevard']= {lat: 32.842571, lng: -96.775784, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['5700 Bishop Blvd.']= {lat: 32.836635, lng: -96.785157, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Paul B. Loyd Jr. All Sports Center']= {lat: 32.838898, lng: -96.783280, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Bush Parking Center']= {lat: 32.842430, lng: -96.778232, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['DEA Offices']= {lat: 32.844928, lng: -96.785795, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3000 Daniel Avenue']= {lat: 32.847046, lng: -96.779293, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['5800 Hillcrest Avenue']= {lat: 32.837658, lng: -96.787112, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Highland Park United Methodist Church']= {lat: 32.837152, lng: -96.785369, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['5900 Ownby Drive']= {lat: 32.839056, lng: -96.783790, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3000 SMU Blvd']= {lat: 32.842119, lng: -96.779384, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Health Center Construction Site']= {lat: 32.842307, lng: -96.786093, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Umphrey Lee Parking Lot']= {lat: 32.843163, lng: -96.786297, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Junkins Engineering Building']= {lat: 32.842517, lng: -96.782190, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Fondren Science Building']= {lat: 32.846071, lng: -96.783729, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Expressway Tower']= {lat: 32.841792, lng: -96.774657, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['5900 Bush Avenue']= {lat: 32.838926, lng: -96.779409, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3000 SMU Blvd.']= {lat: 32.842119, lng: -96.779384, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['5539 SMU Blvd.']= {lat: 32.842306, lng: -96.773429, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Kappa Alpha House']= {lat: 32.845712, lng: -96.781478, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['5800 Bush Avenue']= {lat: 32.838221, lng: -96.779400, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Airline and Dyer Street']= {lat: 32.843189, lng: -96.781648, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Sigma Alpha Epsilon']= {lat: 32.843130, lng: -96.780125, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['6229 Hillcrest Ave.']= {lat: 32.842682, lng: -96.787449, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Junkins Engineering Bldg']= {lat: 32.842517, lng: -96.782190, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Cockrell-McIntosh Hall']= {lat: 32.839299, lng: -96.784391, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3300 Daniel Avenue']= {lat: 32.846966, lng: -96.785151, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Crum Auditorium']= {lat: 32.841256, lng: -96.782723, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['2701 Fondren Dr.']= {lat: 32.844349, lng:-96.772877, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};5805
dict['5805 Bush Avenue']= {lat: 32.837806, lng: -96.780821, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};5805
dict['5800 Bush Avenue']= {lat: 32.838167, lng: -96.779400, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};5805
dict['3200 University Blvd.']= {lat: 32.845225, lng: -96.782840, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};5805
dict['2900 SMU Blvd.']= {lat: 32.842396, lng: -96.777394, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};5805
dict['Perkins Hall']= {lat: 32.840042, lng: -96.786233, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};5805
dict['3300 Daniel Ave.']= {lat: 32.846966, lng: -96.785151, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3300 Dyer Street']= {lat: 32.843186, lng: -96.785811, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Miller Event Center']= {lat: 32.840749, lng: -96.779931, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3200 Daniel Ave.']= {lat: 32.846816, lng: -96.782966, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['6000 Ownby Drive']= {lat: 32.841090, lng: -96.783420, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['6001 Bush Avenue']= {lat: 32.839774, lng: -96.779365, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3000 McFarlin Blvd.']= {lat: 32.844123, lng: -96.779182, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3100 University Blvd.']= {lat: 32.845941, lng: -96.781431, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3300 Dyer St.']= {lat: 32.843186, lng: -96.785811, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['5811 Bush Avenue']= {lat: 32.836974, lng: -96.781693, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['6200 Bishop Blvd.']= {lat: 32.842961, lng: -96.784918, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Health Center']= {lat: 32.842294, lng: -96.785304, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['5547 SMU Blvd.']= {lat: 32.842028, lng: -96.773672, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['3000 Binkley Avenue']= {lat: 32.841251, lng: -96.780479, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['Bishop Blvd. at Mockingbird Lane']= {lat: 32.836587, lng: -96.785147, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};
dict['SMU Bookstore']= {lat: 32.837064, lng: -96.780844, sexual: 0, violent: 0, substanceAbuse: 0, theft: 0, fireAlarm: 0, other: 0};


var crimeLog = [

        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160004",
            dateReported: "01/03/2016",
            dateOccurred: "12/12/2015",
            timeOccurred:  "0745-1050",
            location: "Commuter Lot",
            disposition: "Inactive"
        },
        {
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160005",
            dateReported: "01/05/2016 - 1628",
            dateOccurred: "01/05/2016",
            timeOccurred:  "1628",
            location: "Hughes-Trigg Student Center",
            disposition: "Conduct Referral"
        },
        {
            incident: "Criminal Trespass",
            reportNumber: "160007",
            dateReported: "01/06/2016 - 1602",
            dateOccurred: "01/06/2016", 
            timeOccurred:  "1602",
            location: "Fondren Science Center",
            disposition: "Arrest"
        },
        {
            incident: "Burglary of a Habitation",
            reportNumber: "160010",
            dateReported: "01/09/2016 - 0914",
            dateOccurred: "01/09/2016",
            timeOccurred:  "0300-0900",
            location: "Hillcrest Manor Apartment",
            disposition: "Active"
        },
        {
            incident: "Theft",
            reportNumber: "160011",
            dateReported: "01/09/2016 - 1629",
            dateOccurred: "01/09/2016",
            timeOccurred:  "1629",
            location: "Crow Building",
            disposition: "Inactive"
        },
        {
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160013",
            dateReported: "01/11/2016 - 1158",
            dateOccurred: "01/11/2016",
            timeOccurred:  "1158",
            location: "Smith Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Possession of Marijuana & Possession of Fictitious License or ID",
            reportNumber: "160014",
            dateReported: "01/11/2016 - 1859",
            dateOccurred: "01/11/2016",
            timeOccurred:  "1859",
            location: "Morrison McGinnis Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160015",
            dateReported: "01/12/2016 - 0217",
            dateOccurred: "01/12/2016",
            timeOccurred:  "0217",
            location: "Sigma Chi House",
            disposition: "Closed"
        },
        {
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160016",
            dateReported: "01/12/2016 - 0743",
            dateOccurred: "01/12/2016",
            timeOccurred:  "0743",
            location: "Patterson Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Harassment",
            reportNumber: "160019",
            dateReported: "01/12/2016 - 1609",
            dateOccurred: "01/12/2016",
            timeOccurred:  "1609",
            location: "Hughes-Trigg Student Center",
            disposition: "Active"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160021",
            dateReported: "01/13/2016 - 0211",
            dateOccurred: "01/13/2016",
            timeOccurred:  "0211",
            location: "Cockrell McIntosh Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Consumption of Alcohol & Failure to Identify",
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160022",
            dateReported: "01/13/2016 - 0317",
            dateOccurred: "01/13/2016",
            timeOccurred:  "0317",
            location: "Phi Delta Theta House",
            disposition: "Conduct Referral"
        },
        {
            incident: "Credit Card or Debit Card Abuse",
            reportNumber: "160024",
            dateReported: "01/13/2016 - 1336",
            dateOccurred: "01/13/2016",
            timeOccurred:  "1336",
            location: "Florence Hall",
            disposition: "Active"
        },
        {
            incident: "Failure to Identify",
            reportNumber: "160026",
            dateReported: "01/13/2016 - 2103",
            dateOccurred: "01/13/2016",
            timeOccurred:  "2103",
            location: "2800 SMU Boulevard",
            disposition: "Arrest"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160027",
            dateReported: "01/14/2016 - 1300",
            dateOccurred: "01/14/2016",
            timeOccurred:  "1300",
            location: "3160 Daniel Ave.",
            disposition: "Closed",
        },
        /*{
            incident: "Theft",
            reportNumber: "160028",
            dateReported: "01/14/2016 - 1617",
            dateOccurred: "01/14/2016",
            timeOccurred:  "1617",
            location: "6100 Bishop Blvd.",
            disposition: "Inactive"
        },*/
        {
            incident: "Fire Alarm",
            reportNumber: "160029",
            dateReported: "01/14/2016 - 2026",
            dateOccurred: "01/14/2016",
            timeOccurred:  "2026",
            location: "Beta Theta Pi House",
            disposition: "Closed"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160030",
            dateReported: "01/15/2016 - 0121",
            dateOccurred: "01/15/2016",
            timeOccurred:  "0121",
            location: "Armstrong Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Theft",
            reportNumber: "160033",
            dateReported: "01/15/2016 - 1356",
            dateOccurred: "01/13/2016 - 01/14/2016",
            location: "Umphrey Lee Center",
            disposition: "Active"
        },
        {
            incident: "Theft",
            reportNumber: "160034",
            dateReported: "01/15/2016 - 1609",
            dateOccurred: "01/15/2016", 
            timeOccurred:  "1200 - 1400",
            location: "Owens Art Center",
            disposition: "Active"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160036",
            dateReported: "01/16/2016 - 0128",
            dateOccurred: "01/16/2016",
            timeOccurred: "0128",
            location: "McElvaney Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Sexual Assault",
            reportNumber: "160037",
            dateReported: "01/16/2016 - 1000",
            dateOccurred: "01/16/2016",
            timeOccurred: "0150",
            location: "3301 Dyer Street",
            disposition: "Active"
        },
        {
            incident: "Possession of Marijuana",
            reportNumber: "160039",
            dateReported: "01/16/2016 - 2236",
            dateOccurred: "01/16/2016",
            timeOccurred: "2236",
            location: "Cockrell McIntosh Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160041",
            dateReported: "01/17/2016 - 1019",
            dateOccurred: "01/15/2016 - 01/17/2016",
            location: "3058 SMU Boulevard",
            disposition: "Active"
        },
        {
            incident: "Theft",
            reportNumber: "160043",
            dateReported: "01/18/2016 - 1620",
            dateOccurred: "01/18/2016",
            timeOccurred: "1030 - 1600",
            location: "Hughes-Trigg Student Center",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160046",
            dateReported: "01/19/2016 - 1828",
            dateOccurred: "01/15/2016 - 01/18/2016",
            location: "Mary Hay Hall",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160048",
            dateReported: "01/20/2016 - 1025",
            dateOccurred: "01/17/2016",
            timeOccurred: "1900",
            location: "Paul B. Loyd Jr. All Sports Center",
            disposition: "Active"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160052",
            dateReported: "01/21/2016 - 0402",
            dateOccurred: "01/21/2016",
            timeOccurred: "0402",
            location: "Fondren Library Center",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160054",
            dateReported: "01/21/2016 - 1059",
            dateOccurred: "01/21/2016",
            timeOccurred: "1059",
            location: "Patterson Hall",
            disposition: "Closed"
        },
        {
            incident: "Possession of Controlled Substance",
            reportNumber: "160057",
            dateReported: "01/21/2016 - 2246",
            dateOccurred: "01/21/2016",
            timeOccurred: "2246",
            location: "Sigma Alpha Epsilon House",
            disposition: "Arrest"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160058",
            dateReported: "01/22/2016 - 0148",
            dateOccurred: "01/22/2016",
            timeOccured: "0148",
            location: "Binkley Parking Center",
            disposition: "Conduct Referral"
        },
        {
            incident: "Possession of Marijuana & Consumption of Alcohol by a Minor & Sexual Assault - (Delayed Report 02/10/2016)",
            reportNumber: "160059",
            dateReported: "01/22/2016 - 0642",
            dateOccurred: "01/22/2016",
            timeOccurred: "0642",
            location: "Smith Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Public Intoxication",
            reportNumber: "160063",
            dateOccurred: "01/23/2016 - 0101",
            dateOccurred: "01/23/2016",
            timeOccurred: "0101",
            location: "George W. Bush Presidential Center",
            disposition: "Arrest"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160067",
            dateReported: "01/24/2016 - 0044",
            dateOccurred: "01/24/2016",
            timeOccurred: "0044",
            location: "McElvaney Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Assault",
            reportNumber: "160068",
            dateReported: "01/24/2015 - 0237",
            dateOccurred: "01/24/2016",  
            timeOccurred: "0237",
            location: "Phi Delta Theta House",
            disposition: "Conduct Referral"
        },
        {
            incident: "Criminal Trespass - Habitation",
            reportNumber: "160069",
            dateReported: "01/24/2016 - 0313",
            dateOccurred: "01/24/2016",  
            timeOccurred: "0313",
            location: "Cockrell McIntosh Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Possession of Drug Paraphernalia",
            reportNumber: "160070",
            dateReported: "01/24/2016 - 2243",
            dateOccurred: "01/24/2016",  
            timeOccurred: "2243",
            location: "Crum Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160071",
            dateReported: "01/25/2016 - 0945",
            dateOccurred: "01/24/2016",  
            timeOccurred: "0145- 0115",
            location: "Virginia-Snider Hall",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160073",
            dateReported: "01/25/2016 - 1133",
            dateOccurred: "01/22/2016 - 01/25/2016",
            location: "Cockrell McIntosh Hall",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160080",
            dateReported: "01/26/2016 - 2226",
            dateOccurred: "01/26/2016",  
            timeOccurred: "0750 - 1930",
            location: "Owens Art Center",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160081",
            dateReported: "01/26/2016 - 2355",
            dateOccurred: "01/26/2016",  
            timeOccurred: "2355",
            location: "Florence Hall",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160086",
            dateReported: "01/28/2016 - 1157",
            dateOccurred: "01/28/2016",  
            timeOccurred: "1157",
            location: "McElvaney Hall",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160088",
            dateReported: "01/28/2016 - 1716",
            dateOccurred: "01/28/2016",  
            timeOccurred: "1716",
            location: "Cockrell McIntosh Hall",
            disposition: "Closed"
        },
        {
            incident: "Duty Upon Striking a Highway Fixture",
            reportNumber: "160089",
            dateReported: "01/28/2016 - 2217",
            dateOccurred: "01/28/2016",  
            timeOccurred: "2217",
            location: "5700 Bishop Blvd.",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160093",
            dateReported: "01/29/2016 - 1237",
            dateOccurred: "01/29/2016",  
            timeOccurred: " 0930 - 1230",
            location: "Moore Hall",
            disposition: "Inactive"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160097",
            dateReported: "01/30/2016 - 0131",
            dateOccurred: "01/30/2016",  
            timeOccurred: "0131",
            location: "Lambda Chi Alpha House",
            disposition: "Conduct Referral"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160098",
            dateReported: "01/30/2016 - 1106",
            dateOccurred: "01/30/2016",
            timeOccurred: "0030 - 1000",
            location: "Phi Gamma Delta House",
            disposition: "Inactive"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160099",
            dateReported: "01/30/2016 - 1157",
            dateOccurred: "01/26/2016",  
            timeOccurred: "0830 - 1230",
            location: "Binkley Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160100",
            dateReported: "01/30/2016 - 1408",
            dateOccurred: "01/30/2016",  
            timeOccurred: "1408",
            location: "Crum Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160101",
            dateReported: "01/30/2016 - 2141",
            dateOccurred: "01/30/2016",  
            timeOccurred: "2141",
            location: "Moody Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160104",
            dateReported: "01/31/2016 - 2032",
            dateOccurred: "01/31/2016",  
            timeOccurred: "2032",
            location: "Shuttles Hall",
            disposition: "Closed"
        },
        {
            incident: "Duty On Striking an Unattended Vehicle",
            reportNumber: "160106",
            dateReported: "02/01/2016 - 1745",
            dateOccurred: "02/01/2016",  
            timeOccurred: "0700 - 1640",
            location: "Moody Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160110",
            dateReported: "02/02/2016 - 1959",
            dateOccurred: "02/02/2016",  
            timeOccurred: "1600 - 1657",
            location: "Junkins Engineering Bldg.",
            dispoition: "Unfounded"
        },
        {
            incident: "Possession/Delivery of Drug Paraphernalia & Possession of Alcohol by a Minor",
            reportNumber: "16112",
            dateReported: "02/03/2016 - 0005",
            dateOccurred: "02/03/2016",  
            timeOccurred: "0005",
            location: "Crum Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Theft",
            reportNumber: "160115",
            dateReported: "02/03/2016 - 1458",
            dateOccurred: "02/03/2016",  
            timeOccurred: "1458 - 1505",
            location: "SMU Bookstore",
            disposition: "Active"
        },
        {
            incident: "Possession of Alcohol by a Minor & Possession/Delivery of Drug Paraphernalia & Possession of Fictitious License or ID",
            reportNumber: "160117",
            dateReported: "02/04/2016 - 0049",
            dateOccurred: "02/04/2016",  
            timeOccurred: "0049",
            location: "Mustang Parking Center",
            disposition: "Conduct Referral"
        },
        {
            incident: "Theft",
            reportNumber: "160118",
            dateReported: "02/04/2016 - 0958",
            dateOccurred: "02/04/2016",  
            timeOccurred: "0030 - 0900",
            location: "Daniel House II",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160120",
            dateReported: "02/04/2016 - 1353",
            dateOccurred: "02/03/2016",  
            timeOccurred: "1800 - 2130",
            location: "Annette Caldwell Simmons Hall",
            disposition: "Inactive"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160122",
            dateReported: "02/05/2016 - 0227",
            dateOccurred: "02/05/2016",  
            timeOccurred: "0227",
            location: "Peyton Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160123",
            dateReported:  "02/05/2016 - 1307",
            dateOccurred: "02/05/2016",  
            timeOccurred: "1245 - 1300",
            location: "Airline Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160124",
            dateReported: "02/05/2016 - 1751",
            dateOccurred: "02/05/2016",  
            timeOccurred: "1350 - 1700",
            location: "Owens Art Center",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160125",
            dateReported: "02/05/2016 - 1917",
            dateOccurred: "02/05/2016",  
            timeOccurred: "1715 - 1900",
            location: "Dedman Center for Lifetime Sports",
            disposition: "Inactive"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160126",
            dateReported: "02/06/2016 - 1500",
            dateOccurred: "02/05/2016 - 02/06/2016",
            location: "Binkley Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160127",
            dateReported: "02/06/2016 - 2131",
            dateOccurred: "02/06/2016",  
            timeOccurred: "2131",
            location: "Underwood Law Library",
            disposition: "Closed"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160129",
            dateReported: "02/07/2016 - 1443",
            dateOccurred: "02/07/2016",  
            timeOccurred: "1434",
            location: "Bush Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160133",
            dateReported: "02/08/2016 - 1004",
            dateOccurred: "02/05/2016 - 02/08/2016 - 0954",
            location: "DEA Offices",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160135",
            dateReported: "02/08/2016 - 1849",
            dateOccurred: "02/08/2016",  
            timeOccurred: "1400 - 1820",
            location: "Blanton Student Services Building",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160136",
            dateReported: "02/08/2016 - 2110",
            dateOccurred: "02/08/2016",  
            timeOccurred: "2130",
            location: "Blanton Student Services Building",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160140",
            dateReported: "02/10/2016 - 1429",
            dateOccurred: "02/09/2016 - 02/10/2016",
            location: "Storey Hall",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160141",
            dateReported: "02/10/2016 - 1618",
            dateOccurred: "01/24/2016 - 02/08/2016",
            location: "Dedman Center for Lifetime Sports",
            disposition: "Inactive"
        },
        {
            incident: "Public Intoxication & Disorderly Conduct",
            reportNumber: "160145",
            dateReported: "02/10/2016 - 2217",
            dateOccurred: "02/10/2016",  
            timeOccurred: "2217",
            location: "Moody Coliseum",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160147",
            dateReported: "02/11/2016 - 0631",
            dateOccurred: "02/11/2016",  
            timeOccurred: "0631",
            location: "McFarlin Auditorium",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160150",
            dateReported: "02/11/2016 - 1609",
            dateOccurred: "02/11/2015",  
            timeOccurred: "1332",
            location: "Dedman Center for Lifetime Sports",
            disposition: "Inactive"
        },
        {
            incident: "Consumption of Alcohol by a Minor & Fraudulent Possession of ID Information",
            reportNumber: "160151",
            dateReported: "02/12/2016 - 0042",
            dateOccurred: "02/12/2016",  
            timeOccurred: "0042",
            location: "Peyton Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160152",
            dateReported: "02/12/2016 - 0129",
            dateOccurred: "02/12/2016",  
            timeOccurred: "0129",
            location: "Mary Hay Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Indecent Exposure",
            reportNumber: "160154",
            dateReported: "02/12/2016 - 0847",
            dateOccurred: "02/12/2016",  
            timeOccurred: "0840",
            location: "3000 Daniel Avenue",
            disposition: "Active"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160159",
            dateReported: "02/14/2016 - 0414",
            dateOccurred: "02/14/2016",  
            timeOccurred: "0414",
            location: "Boaz Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160160",
            dateReported: "02/14/2016 - 1212",
            dateOccurred: "02/14/2016",  
            timeOccurred: "0130 - 0900",
            location: "Beta Theta Pi House",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160162",
            dateReported: "02/14/2016 - 1524",
            dateOccurred: "02/14/2016",  
            timeOccurred: "0930 - 1445",
            location: "Hillcrest Manor Apartment",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160166",
            dateReported: "02/15/2016 - 1232",
            dateOccurred: "02/15/2015",
            location: "Hughes-Trigg Student Center",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160167",
            dateReported: "02/15/2016 - 1312",
            dateOccurred: "02/15/2016",
            location: "Owens Art Center",
            disposition: "Inactive"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160169",
            dateReported: "02/15/2016 - 1742",
            dateOccurred: "02/10/2016 - 02/15/2016",
            location: "Moody Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160170",
            dateReported: "02/15/2016 - 2229",
            dateOccurred: "02/12/2016 - 02/15/2016",
            location: "Smith Hall",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160171",
            dateReported: "02/15/2016 - 2352",
            dateOccurred: "02/15/2016",  
            timeOccurred: "2352",
            location: "Beta Theta Pi House",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160172",
            dateReported: "02/16/2016 - 0921",
            dateOccurred: "02/11/2016",  
            timeOccurred: "1710 - 1715",
            location: "Chi Omega House",
            disposition: "Active"
        },
        {
            incident: "Theft",
            reportNumber: "160174",
            dateReported: "02/16/2016 - 1625",
            dateOccurred: "02/15/2016",  
            timeOccurred: "1625",
            location: "Airline Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160175",
            dateReported: "02/16/2016 - 2232",
            dateOccurred: "02/16/2016",  
            timeOccurred: "2232",
            location: "Florence Hall",
            disposition: "Closed"
        },
        {
            incident: "Possession of Marijuana",
            reportNumber: "160178",
            dateReported: "02/18/2016 - 0008",
            dateOccurred: "02/18/2016",  
            timeOccurred: "0008",
            location: "Armstrong Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Theft",
            reportNumber: "160180",
            dateReported: "02/18/2016 - 1336",
            dateOccurred: "02/18/2016",  
            timeOccurred: "1336",
            location: "Morrison McGinnis Hall",
            disposition: "Inactive"
        },
        {
            incident: "Credit Card or Debit Card Abuse",
            reportNumber: "160181",
            dateReported: "02/18/2016 - 1559",
            dateOccurred: "02/18/2016",  
            timeOccurred: "1559",
            location: "Patterson Hall",
            disposition: "Active"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160183",
            dateReported: "02/19/2016 - 0115",
            dateOccurred: "02/19/2016",  
            timeOccurred: "0115",
            location: "Ware Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Consumption of Alcohol by a Minor & Assault & Forcible Fondling - Sex Offense",
            reportNumber: "160184",
            dateReported: "02/19/2016 - 0135",
            dateOccurred: "02/19/2016",  
            timeOccurred: "0135",
            location: "Loyd Residential Commons",
            disposition: "Conduct Referral",
        },
        {
            incident: "Theft",
            reportNumber: "160188",
            dateReported: "02/20/2016 - 1448",
            dateOccurred: "02/15/2016 - 02/20/2016",
            location: "Umphrey Lee Center",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160189",
            dateReported: "02/20/2016 - 1932",
            dateOccurred: "02/20/2016",  
            timeOccurred: "1932",
            location: "Ware Residential Commons",
            disposition: "Closed"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160190",
            dateReported: "02/20/2016 - 1952",
            dateOccurred: "02/20/2016",  
            timeOccurred: "1952",
            location: "Ware Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Theft",
            reportNumber: "160193",
            dateReported: "02/21/2016 - 1546",
            dateOccurred: "02/21/2016 - 1628",
            location: "Kathy Crow Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Theft",
            reportNumber: "160194",
            dateReported: "02/21/2016 - 1810",
            dateOccurred: "02/14/2016 - 02/18/2016",
            location: "Umphrey Lee Center",
            disposition: "Inactive"
        },
        {
            incident: "Possession of Drug Paraphernalia & Possession of Alcohol by a Minor",
            reportNumber: "160195",
            dateReported: "02/21/2016 - 2017",
            dateOccurred: "02/21/2016",  
            timeOccurred: "2017",
            location: "Virginia-Snider Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Possession of Alcohol by a Minor",
            reportNumber: "160198",
            dateReported: "02/22/2016 - 1143",
            dateOccurred: "02/22/2016",  
            timeOccurred: "1143",
            location: "Morrison McGinnis Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160199",
            dateReported: "02/22/2016 - 1006",
            dateOccurred: "02/22/2016",  
            timeOccurred: "1006",
            location: "Airline Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160205",
            dateReported: "02/22/2016 - 1400",
            dateOccurred: "02/24/2016",  
            timeOccurred: "1750",
            location: "Mustang Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Consumption of Alcohol by a Minor & Fraudulent Possession of ID Information",
            reportNumber: "160206",
            dateReported: "02/25/2016 - 0113",
            dateOccurred: "02/25/2016",  
            timeOccurred: "0136",
            location: "Kathy Crow Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Possession/Delivery of Drug Paraphernalia & Failure to Identify",
            reportNumber: "160207",
            dateReported: "02/25/2016 - 0215",
            dateOccurred: "02/25/2016",  
            timeOccurred: "0215",
            location: "Kathy Crow Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160208",
            dateReported: "02/25/2016 - 0142",
            dateOccurred: "02/25/2016",  
            timeOccurred: "0142 - 0253",
            location: "5800 Hillcrest Avenue",
            disposition: "Conduct Referral"
        },
        {
            incident: "Theft",
            reportNumber: "160213",
            dateReported: "02/26/2016 - 1826",
            dateOccurred: "02/25/2016",  
            timeOccurred: "1500 - 2330",
            location: "McElvaney Hall",
            disposition: "Inactive"
        },
        {
            incident: "Burglary of a Vehicle",
            reportNumber: "160214",
            dateReported: "02/27/2016",  
            timeOccurred: "0013 - 0013",
            location: "Highland Park United Methodist Church",
            disposition: "Inactive"
        },
        {
            incident: "Consumption of Alcohol by a Minor & Possession of Fictitious License or ID",
            reportNumber: "160216",
            dateReported: "02/28/2016 - 0137",
            dateOccurred: "02/28/2016",  
            timeOccurred: "0137",
            location: "Armstrong Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Criminal Trespass",
            reportNumber: "160221",
            dateReported: "02/28/2016 - 2116",
            dateOccurred: "02/28/2016",  
            timeOccurred: "2116",
            location: "George W. Bush Presidential Center",
            disposition: "Inactive"
        },
        {
            incident: "Public intoxication & Resisting Arrest, Search or Transport",
            reportNumber: "160223",
            dateReported: "02/29/2016 - 0240",
            dateOccurred: "02/29/2016",  
            timeOccurred: "0240",
            location: "McElvaney Hall",
            disposition: "Arrest"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160226",
            dateReported: "02/29/2016 - 1939",
            dateOccurred: "02/29/2016",  
            timeOccurred: "1939",
            location: "Underwood Law Library",
            disposition: "Closed"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160229",
            dateReported: "02/29/2016 - 2354",
            dateOccurred: "02/29/2016",  
            timeOccurred: "2354",
            location: "Cockrell McIntosh Hall",
            disposition: "Arrest"
        },

        {
            incident: "Fire Alarm",
            reportNumber: "160235",
            dateReported: "03/01/2016 - 2316",
            dateOccurred: "03/01/2016",  
            timeOccurred: "2316",
            location: "Armstrong Residential Commons",
            disposition: "Closed"
        },
        {
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160236",
            dateReported: "03/02/2016 - 0353",
            dateOccurred: "03/02/2016",  
            timeOccurred: "0353",
            location: "5900 Ownby Drive",
            disposition: "Conduct Referral"
        },
        {
            incident: "Theft",
            reportNumber: "160238",
             dateOccurred: "03/02/2016 - 1112",
             dateOccurred: "03/02/2016",  
            timeOccurred: "1050 - 1105",
            location: "Hughes-Trigg Student Center",
            disposition: "Inactive"
        },
        {
            incident: "Consumption of Alcohol by a Minor & Public Intoxication",
            reportNumber: "160240",
            dateReported: "03/02/2016 - 2120",
             dateOccurred: "03/02/2016",  
            timeOccurred: "2120",
            location: "3000 SMU Blvd",
            disposition: "Arrest",
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160241",
             dateReported: "03/03/2016 - 1133",
             dateOccurred: "03/02/2016",  
            timeOccurred: "1700 - 0800",
            location: "Health Center Construction Site",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160242",
            dateReported: "03/03/2016 - 2335",
             dateOccurred: "03/03/2016",  
            timeOccurred: "2335",
            location: "Umphrey Lee Parking Lot",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160246",
             dateReported:  "03/06/2016 - 1720",
             dateOccurred: "03/06/2016",  
            timeOccurred: "1720",
            location: "Junkins Engineering Building",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160247",
             dateReported: "03/07/2016 - 1014",
             dateOccurred: "03/07/2016",  
            timeOccurred: "1014",
            location: "Airline Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160248",
            dateReported: "03/08/2016 - 0332",
             dateOccurred: "03/02/2016",  
            timeOccurred: "1200",
            location: "Moody Parking Center",
            disposition: "Conduct Referral"
        },
        {
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160249",
             dateReported: "03/08/2016 - 0334",
             dateOccurred: "03/02/2016",  
            timeOccurred: "1200",
            location: "Owens Art Center",
            disposition: "Conduct Referral"
        },
        {
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160250",
            dateReported: "03/08/2016 - 0336",
            dateOccurred: "03/02/2016",  
            timeOccurred: "1200",
            location: "Patterson Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Theft",
            reportNumber: "160251",
            dateReported: "03/08/2016 - 1001",
            dateOccurred: "02/20/2016",  
            timeOccurred: "1130 - 1300",
            location: "Fondren Science Building",
            disposition: "Inactive"
        },
        {
            incident: "Criminal Mischief",
            location: "Crum Basketball Center",
            disposition: "Inactive"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160255",
             dateReported: "03/09/2016 - 0743",
             dateOccurred: "03/09/2016",  
            timeOccurred: "0730",
            location: "Expressway Tower",
            disposition: "Inactive"
        },
        {
            incident: "Unlawful Use of Criminal Instrument",
            reportNumber: "160256",
             dateReported: "03/09/2016 - 2225",
             dateOccurred: "03/09/2016",  
            timeOccurred: "2225",
            location: "Ware Residential Commons",
            disposition: "Arrest"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160257",
            dateReported: "03/10/2016 - 0901",
             dateOccurred: "03/10/2016",  
            timeOccurred: "0901",
            location: "Expressway Tower",
            disposition: "Closed"
        },
        {
            incident: "Unauthorized Use of a Motor Vehicle",
            reportNumber: "160258",
             dateReported: "03/10/2016 - 1802",
             dateOccurred: "03/01/2016 - 03/10/2016",
            location: "Mustang Parking Center",
            disposition: "Active"
        },
        {
            incident: "Burglary of a Vehicle",
            reportNumber: "160261",
            dateReported: "03/13/2016 - 1313",
             dateOccurred: "03/02/2016 - 03/13/2016",
            location: "Moore Hall",
            disposition: "Inactive"
        },
        {
            incident: "Possession of Drug Paraphernalia & Consumption of Alcohol by a Minor & Possession of Alcohol by a Minor & Possession of Fictitious License or ID",
            reportNumber: "160265",
             dateReported: "03/14/2016 - 0153",
             dateOccurred: "03/14/2016",  
            timeOccurred: "0153",
            location: "Mustang Parking Center",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160267",
             dateReported: "03/14/2016 - 1007",
             dateOccurred: "03/14/2016",  
            timeOccurred: "1007",
            location: "Arnold Dining Hall",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160268",
            dateReported: "03/14/2016 - 1140",
             dateOccurred: "03/14/2016",  
            timeOccurred: "1140",
            location: "SMU Apartments",
            disposition: "Closed"
        },
        {
            incident: "Possession of Drug Paraphernalia & Criminal Trespass",
            reportNumber: "160270",
            dateReported: "03/14/2016 - 2357",
             dateOccurred: "03/14/2016",  
            timeOccurred: "2357",
            location: "5900 Bush Avenue",
            disposition: "Conduct Referral"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle & Reckless Driving",
            reportNumber: "160271",
            dateReported: "03/15/2016 - 0010",
             dateOccurred: "03/15/2016",  
            timeOccurred: "0010",
            location: "3000 SMU Blvd.",
            disposition: "Conduct Referral"
        },
        {
            incident: "Theft",
            reportNumber: "160272",
            dateReported: "03/15/2016 - 0801",
             dateOccurred: "03/14/2016 - 03/15/2016",
            location: "Umphrey Lee Center",
            disposition: "Inactive"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160277",
            dateReported: "03/15/2016 - 2024",
             dateOccurred: "03/15/2016",  
            timeOccurred: "2024",
            location: "Kappa Sigma House",
            disposition: "Conduct Referral"
        },
        {
            incident: "Possession of Drug Paraphernalia",
            reportNumber: "160278",
            dateReported: "03/15/2016 - 2129",
             dateOccurred: "03/15/2016",  
            timeOccurred: "2129",
            location: "McElvaney Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Possession of Marijuana",
            reportNumber: "160279",
            dateReported: "03/15/2016 - 2331",
             dateOccurred: "03/15/2016",  
            timeOccurred: "2331",
            location: "5539 SMU Blvd.",
            disposition: "Arrest"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160282",
            dateReported: "03/17/2016 - 0103",
             dateOccurred: "03/17/2016",  
            timeOccurred: "0103",
            location: "Pi Kappa Alpha House",
            disposition: "Conduct Referral"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160284",
             dateReported: "03/17/2016 - 2222",
             dateOccurred: "03/17/2016",  
            timeOccurred: "0800 - 2115",
            location: "Moody Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Possession of Alcohol by a Minor & Consumption of Alcohol by a Minor & Possession of Drug Paraphernalia",
            reportNumber: "160285",
            dateReported: "03/17/2016 - 2324",
             dateOccurred: "03/17/2016",  
            timeOccurred: "2324",
            location: "Armstrong Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire Alarm & Failure to Evacuate & Possession of Fictitious License or ID & Possession of Alcohol by a Minor & Consumption of Alcohol by a Minor",
            reportNumber: "160288",
             dateReported: "03/19/2016 - 0308",
             dateOccurred: "03/19/2016",  
            timeOccurred: "0308",
            location: "Pi Kappa Alpha House",
            disposition: "Conduct Referral"
        },
        {
            incident: "Public Intoxication",
            reportNumber: "160290",
             dateReported: "03/19/2016 - 0728",
             dateOccurred: "03/19/2016",  
            timeOccurred: "0728",
            location: "Moore Hall",
            disposition: "Arrest",
        },
        {
            incident: "Unauthorized Use of a Motor Vehicle",
            reportNumber: "160295",
             dateReported:  "03/19/2016 - 2124",
             dateOccurred: "03/19/2016",  
            timeOccurred: "2124",
            location: "Alpha Chi Omega House",
            disposition: "Active"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160296",
            dateReported: "03/19/2016 - 2319",
             dateOccurred: "03/19/2016",  
            timeOccurred: "2319",
            location: "Mustang Parking Center",
            disposition: "Arrest"
        },
        {
            incident: "Criminal Mischief",
            reportNumber:  "160297",
            dateReported: "03/20/2016 - 0913",
             dateOccurred: "03/20/2016",  
            timeOccurred: "0147",
            location: "Bush Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Criminal Mischief",
            incident: "Theft",
            reportNumber: "160298",
            dateReported: "03/20/2016 - 1200",
             dateOccurred: "03/20/2016",  
            timeOccurred: "1200",
            location: "Beta Theta Pi House",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160300",
            dateReported: "03/21/2016 - 0237",
             dateOccurred: "03/21/2016",  
            timeOccurred: "0237",
            location: "Peyton Hall",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160303",
             dateReported: "03/21/2016 - 1518",
             dateOccurred: "03/21/2016",  
            timeOccurred: "1518",
            location: "Beta Theta Pi House",
            disposition: "Closed"
        },
        {
            incident: "Harassment",
            reportNumber: "160304",
           dateReported: "03/21/2016 - 1816",
             dateOccurred: "03/21/2016",  
            timeOccurred: "1816",
            location: "Virginia-Snider Hall",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160307",
            dateReported: "03/22/2016 - 1445",
             dateOccurred: "03/22/2016",  
            timeOccurred: "1445",
            location: "Fondren Library Center",
            disposition: "Closed"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160308",
             dateReported: "03/22/2016 - 1555",
             dateOccurred: "03/03/2016 - 03/04/2016",
            location: "Mustang Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160309",
            dateReported: "03/22/2016 - 1634",
             dateOccurred: "03/20/2016",  
            timeOccurred: "1730 - 1930",
            location: "Kappa Alpha House",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160310",
            dateReported: "03/23/2016 - 0053",
             dateOccurred: "03/23/2016",  
            timeOccurred: "0053",
            location: "Dedman Center for Lifetime Sports",
            disposition: "Closed"
        },
        {
            incident: "Possession of Drug Paraphernalia",
            reportNumber: "160314",
            dateReported: "03/23/2016 - 2110",
             dateOccurred: "03/23/2016",  
            timeOccurred: "2110",
            location: "Kappa Sigma House",
            disposition: "Conduct Referral"
        },
        {
            incident: "Theft",
            reportNumber: "160315",
            dateReported: "03/23/2016 - 2136",
             dateOccurred: "03/23/2016",  
            timeOccurred: "2136",
            location: "Hughes-Trigg Student Center",
            disposition: "Recovered/Unfounded"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160316",
             dateReported: "03/24/2016 - 0138",
             dateOccurred: "03/24/2016",  
            timeOccurred: "0138",
            location: "5800 Bush Avenue",
            disposition: "Conduct Referral",
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160317",
            dateReported: "03/25/2016 - 0619",
             dateOccurred: "03/25/2016",  
            timeOccurred: "0619",
            location: "Moody Coliseum",
            disposition: "Closed"
        },
        {
            incident: "Driving Under the Influence by a Minor & Possession of Alcohol by a Minor",
            reportNumber: "160320",
             dateReported: "03/26/2016 - 1724",
             dateOccurred: "03/26/2016",  
            timeOccurred: "1724",
            location: "Airline and Dyer Street",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160321",
             dateReported: "03/26/2016 - 2108",
             dateOccurred: "03/26/2016",  
            timeOccurred: "2108",
            location: "Gamma Phi Beta House",
            disposition: "Closed"
        },
        {
            incident: "Unauthorized Use of a Motor Vehicle",
            reportNumber: "160325",
             dateReported: "03/28/2016 - 1034",
             dateOccurred: "03/28/2016",  
            timeOccurred: "1100 - 1500",
            location: "Moody Parking Center",
            disposition: "Unfounded",
        },
        {
            incident: "Harassment",
            reportNumber: "160327",
            dateReported: "03/28/2016 - 1305",
             dateOccurred: "03/28/2016",  
            timeOccurred: "1305",
            location: "Patterson Hall",
            disposition: "Inactive",
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160328",
             dateReported: "03/28/2016 - 1437",
             dateOccurred: "03/28/2016",  
            timeOccurred: "1448",
            location: "Fondren Science Building",
            disposition: "Closed"
        },
        {
            incident: "Possession of Marijuana & Possession of Drug Paraphernalia",
            reportNumber: "160331",
             dateReported: "03/28/2016 - 2228",
             dateOccurred: "03/28/2016",  
            timeOccurred: "2288",
            location: "5800 Bush Avenue",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160332",
            dateReported: "03/29/2016 - 1032",
             dateOccurred: "03/29/2016",  
            timeOccurred: "1032",
            location: "Sigma Alpha Epsilon",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160333",
             dateReported: "03/29/2016 - 1636",
             dateOccurred: "03/29/2016",  
            timeOccurred: "1447 - 1500",
            location: "SMU Bookstore",
            disposition: "Inactive"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160334",
             dateReported: "03/30/2016 - 1003",
             dateOccurred: "03/29/2016",  
            timeOccurred: "1215 - 1530",
            location: "Airline Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160338",
            dateReported: "03/31/2016 - 1138",
             dateOccurred: "03/31/2016",  
            timeOccurred: "1138",
            location: "SMU Bookstore",
            disposition: "Arrest"
        },
        {
            incident: "Burglary of a Vehicle",
            reportNumber: "160340",
            dateReported: "03/31/2016 - 1856",
             dateOccurred: "03/31/2016",  
            timeOccurred: "1856",
            location: "Binkley Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160341",
             dateReported: "03/31/2016 - 2018",
             dateOccurred: "03/31/2016",  
            timeOccurred: "2018",
            location: "Dedman Center for Lifetime Sports",
            disposition: "Inactive"
        },

        {
            incident: "Public Intoxication",
            reportNumber: "160342",
            dateReported: "04/01/2016 - 0113",
            dateOccurred: "04/01/2016",  
            timeOccurred: "0113",
            location: "Kappa Alpha House",
            disposition: "Arrest"
        },
        {
            incident: "Public Intoxication",
            reportNumber: "160343",
            dateReported: "04/01/2016 - 0519",
            dateOccurred: "04/01/2016",  
            timeOccurred: "0519",
            location: "6229 Hillcrest Ave.",
            disposition: "Arrest"
        },
        {
            incident: "Theft",
            reportNumber: "160346",
            dateReported: "04/01/2016 - 1757",
            dateOccurred: "03/31/2016 - 04/01/2016",
            location: "Junkins Engineering Bldg",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160347",
            dateReported: "04/01/2016 - 1842",
            dateOccurred: "02/24/2016 - 02/25/2016",
            location: "Airline Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Public Intoxication",
            reportNumber: "160349",
            dateReported: "04/02/2016 - 0126",
            dateOccurred: "04/02/2016",  
            timeOccurred: "0126",
            location: "Gerald J. Ford Stadium",
            disposition: "Arrest"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160351",
            dateReported: "04/02/2016 - 1609",
            dateOccurred: "04/02/2016",  
            timeOccurred: "1609",
            location: "Cockrell-McIntosh Hall",
            disposition: "Closed"
        },
        {
            incident: "Public Intoxication",
            reportNumber: "160352",
            dateReported: "04/03/2016 - 0027",
            dateOccurred: "04/03/2016",  
            timeOccurred: "0027",
            location: "6229 Hillcrest Ave.",
            disposition: "Arrest",
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160356",
            dateReported: "04/04/2016 - 1158",
            dateOccurred: "04/03/2016",  
            timeOccurred: "1200 - 1900",
            location: "Binkley Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160357",
            dateReported: "04/04/2016 - 1400",
            dateOccurred: "04/04/2016",  
            timeOccurred: "1400",
            location: "Fincher Building",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160365",
            dateReported: "04/06/2016 - 1810",
            dateOccurred: "04/06/2016",  
            timeOccurred: "1400 - 1839",
            location: "Expressway Tower",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160366",
            dateReported: "04/06/2016 - 2056",
            dateOccurred: "04/06/2016",  
            timeOccurred: "1900",
            location: "Annette Caldwell Simmons Hall",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160367",
            dateReported: "04/07/2016 - 0725",
            dateOccurred: "04/06/2016 - 04/07/2016",
            location: "Expressway Tower",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160369",
            dateReported: "04/07/2016 - 2030",
            dateOccurred: "04/07/2016",  
            timeOccurred: "1600",
            location: "Hughes-Trigg Student Center",
            disposition: "Inactive"
        },
        {
            incident: "Fire",
            reportNumber: "160370",
            dateReported: "04/07/2016 - 2256",
            dateOccurred: "04/07/2016",  
            timeOccurred: "2256",
            location: "Peyton Hall",
            disposition: "Inactive"
        },
        {
            incident: "Arson",
            reportNumber: "160371",
            dateReported: "04/07/2016 - 0106",
            dateOccurred: "04/07/2016",  
            timeOccurred: "0050",
            location: "McElvaney Hall",
            disposition: "Active"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160372",
            dateReported: "04/08/2016 - 0250",
            dateOccurred: "04/08/2016",  
            timeOccurred: "0250",
            location: "Crum Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160374",
            dateReported: "04/08/2016 - 0934",
            dateOccurred: "04/08/2016",  
            timeOccurred: "0934",
            location: "Patterson Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160375",
            dateReported: "04/08/2016 - 1156",
            dateOccurred: "04/08/2016",  
            timeOccurred: "1156",
            location: "Mary Hay Hall",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160376",
            dateReported: "04/08/2016 - 1217",
            dateOccurred: "04/08/2016",  
            timeOccurred: "1217",
            location: "Meadows Museum",
            disposition: "Closed"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160378",
            dateReported: "04/08/2016 - 2331",
            dateOccurred: "04/08/2016",  
            timeOccurred: "2331",
            location: "3300 Daniel Avenue",
            disposition: "Conduct Referral"
        },
        {
            incident: "Consumption of Alcohol by a Minor & Possession of Alcohol by a Minor & Fraudulent Use or Possession of ID Information & Criminal Mischief",
            reportNumber: "160379",
            dateReported: "04/09/2016 - 0313",
            dateOccurred: "04/09/2016",  
            timeOccurred: "0313",
            location: "Crum Auditorium",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160380",
            dateReported: "04/10/2016 - 0137",
            dateOccurred: "04/10/2016",  
            timeOccurred: "0137",
            location: "Sigma Chi House",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160382",
            dateReported: "04/10/2016 - 1203",
            dateOccurred: "04/04/2016",  
            timeOccurred: "0800 - 1500",
            location: "Armstrong Residential Commons",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160384",
            dateReported: "04/11/2016 - 0119",
            dateOccurred: "04/11/2016",  
            timeOccurred: "0119",
            location: "Virginia-Snider Hall",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160385",
            dateReported: "04/11/2016 - 0939",
            dateOccurred: "04/11/2016",  
            timeOccurred: "0939",
            location: "Junkins Engineering Bldg.",
            disposition: "Closed"
        },
        {
            incident: "Assault & Disorderly Conduct",
            reportNumber: "160386",
            dateReported: "04/11/2016 - 2027",
            dateOccurred: "04/11/2016",  
            timeOccurred: "2027",
            location: "Peyton Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire",
            reportNumber: "160387",
            dateReported: "04/11/2016 - 2143",
            dateOccurred: "04/11/2016",  
            timeOccurred: "2143",
            location: "2701 Fondren Dr.",
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160389",
            dateReported: "04/12/2016 - 0024",
            dateOccurred: "04/12/2016",  
            timeOccurred: "0024",
            location: "Loyd Residential Commons",
            disposition: "Closed"
        },
        {
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160390",
            dateReported: "04/12/2016 - 0849",
            dateOccurred: "04/12/2016",  
            timeOccurred: "0849",
            location: "Patterson Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Theft",
            reportNumber: "160391",
            dateReported: "04/12/2016 - 10:14",
            dateOccurred: "04/11/2016 - 04/12/2016",
            location: "Dawson Service Center",
            disposition: "Active"
        },
        {
            incident: "Burglary of Vehicle",
            reportNumber: "160393",
            dateReported: "04/12/2016 - 18:56",
            dateOccurred: "04/12/2016",  
            timeOccurred: "18:42 - 18:52",
            location: "5805 Bush Avenue",
            disposition: "Active"
        },
        {
            incident: "Burglary of Vehicle",
            reportNumber: "160394",
            dateReported: "04/12/2016 - 1920",
            dateOccurred: "04/12/2016",  
            timeOccurred: "18:46 - 18:49",
            location: "5800 Bush Avenue",
            disposition: "Active"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160395",
            dateReported: "04/13/2016 - 1022",
            dateOccurred: "04/13/2016",  
            timeOccurred: "1022",
            location: "Sigma Phi Epsilon House",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160399",
            dateReported: "04/13/2016 - 2052",
            dateOccurred: "04/10/2016",  
            timeOccurred: "1550 - 1600",
            location: "Kathy Crow Residential Commons",
            disposition: "Inactive"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160401",
            dateReported: "04/14/2016 - 1110",
            dateOccurred: "04/11/2016 - 04/14/2016",
            location: "Mustang Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Assault",
            reportNumber: "160402",
            dateReported: "04/14/2016 - 1222",
            dateOccurred: "04/14/2016",  
            timeOccurred: "1222",
            location: "Patterson Hall",
            disposition: "Active"
        },
        {
            incident: "Reckless Damage or Destruction",
            reportNumber: "160403",
            dateReported: "04/14/2016 - 1511",
            dateOccurred: "04/14/2016",  
            timeOccurred: "1511",
            location: "Annette Caldwell Simmons Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160404",
            dateReported: "04/14/2016 - 1521",
            dateOccurred: "04/14/2016",  
            timeOccurred: "1521",
            location: "Loyd Residential Commons",
            disposition: "Inactive"
        },
        {
            incident: "Possession of Drug Paraphernalia",
            reportNumber: "160405",
            dateReported: "04/14/2016 - 1557",
            dateOccurred: "04/14/2016",  
            timeOccurred: "1557",
            location: "Daniel Parking Center",
            disposition: "UPPD Citation"
        },
        {
            incident: "Driving While Intoxicated",
            dateReported: "160406",
            dateOccurred: "04/15/2016 - 0001",
            dateOccurred: "04/15/2016",  
            timeOccurred: "0001",
            location: "3200 University Blvd.",
            disposition: "Arrest"
        },
        {
            incident: "Unauthorized Use of a Motor Vehicle",
            reportNumber: "160410",
            dateReported: "04/15/2016 - 1839",
            dateOccurred: "04/15/2016",  
            timeOccurred: "1630 - 1800",
            location: "McElvaney Hall",
            disposition: "Unfounded"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160411",
            dateReported: "04/16/2016 - 0215",
            dateOccurred: "04/16/2016",  
            timeOccurred: "0215",
            location: "George W. Bush Presidential Center",
            disposition: "Conduct Referral"
        },
        {
            incident: "Forgery",
            reportNumber: "160415",
            dateReported: "04/16/2016 - 1908",
            dateOccurred: "04/16/2016",  
            timeOccurred: "1908",
            location: "Sigma Chi House",
            disposition: "Active"
        },
        {
            incident: "Aggravated Robbery",
            reportNumber: "160417",
            dateReported: "04/17/2016 - 0224",
            dateOccurred: "04/17/2016",  
            timeOccurred: "0224",
            location: "2900 SMU Blvd.",
            disposition: "Assist Other Agency - UPPD"
        },
        {
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160418",
            dateReported: "04/17/2016 - 0428",
            dateOccurred: "04/17/2016",  
            timeOccurred: "0428",
            location: "Patterson Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160419",
            dateReported: "04/17/2016 - 0823",
            dateOccurred: "04/17/2016",  
            timeOccurred: "0400",
            location: "Patterson Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160428",
            dateReported: "04/17/2016 - 2302",
            dateOccurred: "04/17/2016",  
            timeOccurred: "2215 - 2230",
            location: "Perkins Hall",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160421",
            dateReported: "04/18/2016 - 1003",
            dateOccurred: "04/17/2016 - 04/18/2016",
            location: "Hughes-Trigg Student Center",
            disposition: "Inactive"
        },
               {
            incident: "Criminal Trespass",
            reportNumber: "160426",
            dateReported: "04/19/2016 - 0229",
            dateOccurred: "04/19/2016", 
            timeOccurred: "0229",
            location: "Storey Hall",
            disposition: "Arrest"
        },
        {
            incident: "Theft",
            reportNumber: "160428",
            dateReported: "04/19/2016 - 1418",
            dateOccurred: "04/15/2016 - 04/18/2016",
            location: "Junkins Engineering Bldg.",
            disposition: "Inactive"
        },
        {
            incident: "Aggravated Robbery (attempted)",
            reportNumber: "160435",
            dateReported: "04/21/2016 - 0314",
            dateOccurred: "04/21/2016",
            timeOccurred: "0300",
            location: "Shuttles Hall",
            disposition: "Active"
        },
        {
            incident: "Possession of Marijuana",
            reportNumber: "160441",
            dateReported: "04/22/2016 - 1806",
            dateOccurred: "04/22/2016",
            timeOccurred: "1806",
            location: "McElvaney Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Unauthorized Use of a Motor Vehicle",
            reportNumber: "160442",
            dateReported: "04/22/2016 - 1935",
            dateOccurred: "04/18/2016 - 04/22/2016",
            location: "Mustang Parking Center",
            disposition: "Unfounded"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160444",
            dateReported: "04/23/2016 - 0129",
            dateOccurred: "04/23/2016",
            timeOccurred: "0129",
            location: "Virginia-Snider Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Consumption of Alcohol by a Minor & Possession of Alcohol by a Minor",
            reportNumber: "160446",
            dateReported: "04/23/2016 - 0321",
            dateOccurred: "04/23/2016",
            timeOccurred: "0321",
            location: "Loyd Residential Commons",
            disposition: "Arrest"
        },
        {
            incident: "Theft",
            reportNumber: "160450",
            dateReported: "04/23/2016 - 1957",
            dateOccurred: "04/23/2016",
            timeOccurred: "1957",
            location: "Kappa Sigma House",
            disposition: "Conduct Referral"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160454",
            dateReported: "04/24/2016 - 1654",
            dateOccurred: "04/18/2016 - 04/23/2016",
            location: "Moody Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Burglary",
            reportNumber: "160458",
            dateReported: "04/25/2016 - 0159",
            dateOccurred: "04/24/2016 - 04/25/2016",
            location: "3300 Daniel Ave.",
            disposition: "Inactive"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160460",
            dateReported: "04/25/2016 - 1013",
            dateOccurred: "04/25/2016",
            timeOccurred: "1013",
            location: "Hughes-Trigg Student Center",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160462",
            dateReported: "04/25/2016 - 1354",
            dateOccurred: "04/18/2016",
            timeOccurred: "1100 - 1130",
            location: "Prothro Hall",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160463",
            dateReported: "04/25/2016 - 1508",
            dateOccurred: "04/25/2016",
            timeOccurred: "1508",
            location: "McElvaney Hall",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160465",
            dateReported: "04/25/2016 - 2219",
            dateOccurred: "04/25/2016",
            timeOccurred: "2219",
            location: "Mary Hay Hall",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160471",
            dateReported: "04/27/2016 - 0003",
            dateOccurred: "04/27/2016",
            timeOccurred: "0003",
            location: "Armstrong Residential Commons",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160472",
            dateReported: "04/26/2016 - 2300",
            dateOccurred: "04/26/2016",
            timeOccurred: "2300",
            location: "Sigma Alpha Epsilon",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160478",
            dateReported: "04/28/2016 - 1939",
            dateOccurred: "04/26/2016",
            timeOccurred: "1900 - 2000",
            location: "Arnold Dining Hall",
            disposition: "Active"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160481",
            dateReported: "04/29/2016 - 0848",
            dateOccurred: "04/28/2016 - 04/29/2016",
            location: "Kirby Hall",
            disposition: "Inactive"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160482",
            dateReported: "04/29/2016 - 1130",
            dateOccurred: "04/28/2016 - 04/29/2016",
            location: "Owens Art Center",
            disposition: "Inactive"
        },
        {
            incident: "Possession of Drug Paraphernalia",
            reportNumber: "160484",
            dateReported: "04/29/2016 - 2257",
            dateOccurred: "04/29/2016",
            timeOccurred: "2257",
            location: "Commuter Lot",
            disposition: "UP Citation"
        },
        {
            incident: "Possession of Controlled Substance",
            reportNumber: "160485",
            dateReported: "04/30/2016 - 0305",
            dateOccurred: "04/30/2016",
            timeOccurred: "0305",
            location: "Ware Residential Commons",
            location: "Phi Delta Theta House",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160487",
            dateReported: "04/30/2016 - 1403",
            dateOccurred: "04/30/2016",
            timeOccurred: "1403",
            location: "Junkins Engineering Building",
            disposition: "Closed"
        },
        {
            incident: "Possession of Controlled Substance",
            reportNumber: "160488",
            dateReported: "05/01/2016 - 0159",
            dateOccurred: "05/01/2016",
            timeOccurred: "0159",
            location: "Barr Pool",
            disposition: "Arrest"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160491",
            dateReported: "05/01/2016 - 0818",
            dateOccurred: "05/01/2016",
            timeOccurred: "0818",
            location: "Crum Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Possession of Drug Paraphernalia",
            reportNumber: "160495",
            dateReported: "05/01/2016 - 2241",
            dateOccurred: "05/01/2016",
            timeOccurred: "2241",
            location: "Commuter Lot",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160496",
            dateReported: "05/02/2016 - 1107",
            dateOccurred: "05/02/2016",
            timeOccurred: "1107",
            location: "Moody Coliseum",
            disposition: "Closed"
        },
        {
            incident: "Criminal Trespass",
            reportNumber: "160498",
            dateReported: "05/02/2016 - 1409",
            dateOccurred: "05/02/2016",
            timeOccurred: "1409",
            location: "Blanton Student Services Building",
            disposition: "Arrest"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160505",
            dateReported: "05/04/2016 - 0728",
            dateOccurred: "05/04/2016",
            timeOccurred: "0030 - 0730",
            location: "George W. Bush Presidential Center",
            disposition: "Active"
        },
        {
            incident: "Theft",
            reportNumber: "160507",
            dateReported: "05/04/2016 - 1656",
            dateOccurred: "05/04/2016",
            timeOccurred: "1656 - 1711",
            location: "Fondren Library Center",
            disposition: "Inactive"
        },
        {
            incident: "Robbery",
            reportNumber: "160514",
            dateReported: "05/05/2016 - 2347",
            dateOccurred: "05/05/2016",
            timeOccurred: "2347",
            location: "Mary Hay Hall",
            disposition: "Active"
        },
        {
            incident: "Possession of Drug Paraphernalia",
            reportNumber: "160516",
            dateReported: "05/06/2016 - 1310",
            dateOccurred: "05/06/2016",
            timeOccurred: "1310",
            location: "Shuttles Hall",
            disposition: "UP Citations"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160517",
            dateReported: "05/06/2016 - 1721",
            dateOccurred: "05/06/2016",
            timeOccurred: "1721",
            location: "Paul B. Loyd Jr. All Sports Center",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160522",
            dateReported: "05/07/2016 - 1647",
            dateOccurred: "05/07/2016 - 0458",
            location: "Crum Residential Commons",
            disposition: "Active"
        },
        {
            incident: "Theft",
            reportNumber: "160523",
            dateReported: "05/07/2016 - 1921",
            dateOccurred: "05/06/2016 - 05/07/2016",
            location: "Virginia-Snider Hall",
            disposition: "Inactive"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160525",
            dateReported: "05/07/2016 - 2333",
            dateOccurred: "05/07/2016",
            timeOccurred: "2333",
            location: "Kathy Crow Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160531",
            dateReported: "05/11/2016 - 1033",
            dateOccurred: "05/11/2016",
            timeOccurred: "0930 - 1000",
            location: "3300 Dyer Street",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160532",
            dateReported: "05/11/2016 - 1159",
            dateOccurred: "05/09/2016 - 05/11/2016",
            location: "Blanton Student Services Building",
            disposition: "Inactive"
        },
        {
            incident: "Duty on Striking an Unattended Vehicle",
            reportNumber: "160533",
            dateReported: "05/11/2016 - 1602",
            dateOccurred: "05/11/2016",
            timeOccurred: "1030 - 1330",
            location: "Commuter Lot",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160534",
            dateReported: "05/12/2016 - 1207",
             dateOccurred: "03/18/2016 - 03/20/2016",
            location: "Armstrong Residential Commons",
            disposition: "Inactive"
        },
        {
            incident: "Possession of Drug Paraphernalia",
            reportNumber: "160535",
            dateReported: "05/12/2016 - 1403",
            dateOccurred: "05/12/2016",
            timeOccurred: "1403",
            location: "Sigma Alpha Epsilon House",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160537",
            dateOccurred: "05/12/2016 - 1537",
            dateOccurred: "05/12/2016",
            timeOccurred: "1537",
            location: "Daniel Parking Center",
            disposition: "Closed"
        },
        {
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160538",
            dateReported: "05/12/2016 - 1508",
            dateOccurred: "05/12/2016",
            timeOccurred: "1508",
            location: "Pi Kappa Alpha House",
            disposition: "Conduct Referral"
        },
        {
            incident: "Harassment",
            reportNumber: "160543",
            dateReported: "05/14/2016 - 0705",
            dateOccurred: "05/14/2016",
            timeOccurred: "0705",
            location: "Miller Event Center",
            disposition: "Inactive"
        },
        {
            incident: "Graffiti",
            reportNumber: "160544",
            dateReported: "05/14/2016 - 1049",
            dateOccurred: "05/14/2016",
            timeOccurred: "1049",
            location: "Daniel Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160547",
            dateReported: "05/14/2016 - 1815",
            dateOccurred: "05/14/2016",
            timeOccurred: "1815",
            location: "Gerald J. Ford Stadium",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160548",
            dateReported: "05/14/2016 - 2334",
            dateOccurred: "05/14/2016",
            timeOccurred: "2334",
            location: "Moody Parking Center",
            disposition: "Closed"
        },
        {
            incident: "Fire",
            reportNumber: "160550",
            dateReported: "05/16/2016 - 1355",
            dateOccurred: "05/16/2016",
            timeOccurred: "1355",
            location: "Hughes-Trigg Student Center",
            disposition: "Closed"
        },
        {
            incident: "Burglary",
            reportNumber: "160552",
            dateReported: "05/17/2016 - 1132",
            dateOccurred: "05/13/2016 - 05/16/2016 - 0930",
            location: "Gerald J. Ford Stadium",
            disposition: "Inactive"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160553",
            dateReported: "05/17/2016 - 1335",
            dateOccurred: "05/17/2016",
            timeOccurred: "1335",
            location: "Binkley Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160556",
            dateReported: "05/20/2016 - 0925",
            dateOccurred: "05/20/2016",
            timeOccurred: "0925",
            location: "Gamma Phi Beta House",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160557",
            dateReported: "05/21/2016 - 1119",
            dateOccurred: "05/21/2016",
            timeOccurred: "1119",
            location: "Pi Kappa Alpha House",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160558",
            dateReported:  "05/26/2016 - 1251",
            dateOccurred: "05/26/2016",
            timeOccurred: "1251",
            location: "Boaz Hall",
            disposition: "Closed"
        },
        {
            incident: "Places Weapons Prohibited",
            reportNumber: "160563",
            dateReported: "05/31/2016 - 1039",
            dateOccurred: "05/31/2016",
            timeOccurred: "1039",
            location: "George W. Bush Presidential Center",
            disposition: "Exceptionally Cleared"
        },
        {
            incident: "Theft",
            reportNumber: "160565",
            dateReported: "05/31/2016 - 1528",
            dateOccurred: "05/31/2016",
            timeOccurred: "1245 - 1530",
            location: "Morrison McGinnis Hall",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160567",
            dateReported: "06/01/2016 - 1046",
             dateOccurred: "06/01/2016",
            timeOccurred: "1046",
            location: "3200 Daniel Ave.",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160750",
            dateReported: "06/02/2016 - 0944",
             dateOccurred: "06/02/2016",
            timeOccurred: "0944",
            location: "Binkley Parking Center",
            disposition: "Unfounded"
        },
        {
            incident: "Possession of Drug Paraphernalia",
            reportNumber: "160572",
            dateReported: "06/03/2016 - 1127",
             dateOccurred: "06/03/2016",
            timeOccurred: "1127",
             location: "Hillcrest Manor Apartment",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160573",
            dateReported: "06/03/2016 - 2243",
             dateOccurred: "06/03/2016",
            timeOccurred: "2243",
            location: "Delta Gamma House",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160577",
            dateReported: "06/06/2016 - 1337",
             dateOccurred: "06/03/2016",
            timeOccurred: "1200 - 1315",
            location: "Dedman Center for Lifetime Sports",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160579",
            dateReported: "06/07/2016 - 0931",
             dateOccurred: "06/07/2016",
            timeOccurred: "0931",
            location: "Lambda Chi Alpha House",
            disposition: "Closed",
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160582",
            dateReported: "06/08/2016 - 1535",
             dateOccurred: "06/08/2016",
            timeOccurred: "1535",
            location: "Kappa Alpha Theta House",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160583",
            dateReported: "06/08/2016 - 1543",
             dateOccurred: "06/08/2016",
            timeOccurred: "1543",
            location: "Fondren Library Center",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160584",
            dateReported: "06/08/2016 - 2148",
             dateOccurred: "06/08/2016",
            timeOccurred: "2148",
            location: "Shuttles Hall",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160587",
            dateReported: "06/09/2016 - 1911",
             dateOccurred: "06/07/2016",
            timeOccurred: "2200 - 1800",
            location: "Owens Art Center",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160588",
            dateReported: "06/10/2016 - 0114",
             dateOccurred: "06/10/2016",
            timeOccurred: "0114",
            location: "Hyer Hall",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160589",
            dateReported: "06/10/2016 - 0821",
             dateOccurred: "06/10/2016",
            timeOccurred: "0821",
            location: "Beta Theta Pi House",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160593",
            dateReported: "06/10/2016 - 1832",
             dateOccurred: "06/10/2016",
            timeOccurred: "1800 - 1832",
            location: "Umphrey Lee Center",
            disposition: "Active"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160594",
            dateReported: "06/11/2016 - 1325",
             dateOccurred: "06/11/2016",
            timeOccurred: "1325",
            location: "Pi Beta Phi House",
            disposition: "Closed"
        },
        {
            incident: "Duty on Striking Unattended Vehicle",
            reportNumber: "160595",
            dateReported: "06/11/2016 - 1938",
             dateOccurred: "06/11/2016",
            timeOccurred: "1230 - 1938",
            location: "6000 Ownby Drive",
            disposition: "Inactive"
        },
        {
            incident: "Terroristic Threat",
            reportNumber: "160599",
            dateReported: "06/12/2016 - 1542",
             dateOccurred: "06/12/2016",
            timeOccurred: "1542",
            location: "Patterson Hall",
            disposition: "Active"
        },
        {
            incident: "Duty on Striking Unattended Vehicle",
            reportNumber: "160601",
            dateReported: "06/13/2016 - 1008",
             dateOccurred: "06/10/2016",
            timeOccurred: "0800 - 1700",
            location: "Daniel Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Accident Involving Damage to Vehicle",
            reportNumber: "160603",
            dateReported: "06/14/2016 - 1721",
             dateOccurred: "06/14/2016",
            timeOccurred: "1721 - 1756",
            location: "Expressway Tower",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160604",
            dateReported: "06/14/2016 - 1919",
             dateOccurred: "06/14/2016",
            timeOccurred: "1919",
            location: "Beta Theta Pi House",
            disposition: "Closed"
        },
        {
            incident: "Public Intoxication",
            reportNumber: "160605",
            dateReported: "06/14/2016 - 2042",
             dateOccurred: "06/14/2016",
            timeOccurred: "2042",
            location: "6001 Bush Avenue",
            disposition: "Arrest"
        },
        {
            incident: "Theft",
            reportNumber: "160606",
            dateReported: "06/15/2016 - 1004",
             dateOccurred: "06/14/2016 - 1130",
             dateOccurred: "06/15/2016",
            timeOccurred: "1000",
            location: "Expressway Tower",
            disposition: "Active"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160607",
            dateReported: "06/15/2016 - 1254",
             dateOccurred: "06/15/2016",
            timeOccurred: "1254",
            location: "Chi Omega House",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160610",
            dateReported: "06/18/2016 - 0900",
             dateOccurred: "06/18/2016",
            timeOccurred: "0900",
            location: "Pi Beta Phi House",
            disposition: "Closed"
        },
        {
            incident: "Burglary of a Vehicle",
            reportNumber: "160614",
            dateReported: "06/20/2016 - 0720",
             dateOccurred: "06/17/2016 - 06/20/2016",
            location: "3000 McFarlin Blvd.",
            disposition: "Inactive"
        },
        {
            incident: "Fire (Vehicle)",
            reportNumber: "160615",
            dateReported: "06/20/2016 - 1756",
             dateOccurred: "06/20/2016",
            timeOccurred: "1756",
            location: "3100 University Blvd.",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160621",
            dateReported: "06/22/2016",
            timeOccurred: "1929",
             dateOccurred: "06/22/2016",
            timeOccurred: "1900 - 1945",
            location: "3300 Dyer St.",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160624",
            dateReported: "06/23/2016 - 2316",
             dateOccurred: "06/23/2016",
            timeOccurred: "2316",
            location: "Phi Gamma Delta House",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160626",
            dateReported: "06/24/2016 - 1024",
             dateOccurred: "06/22/2016 - 06/23/2016",
            location: "Dawson Service Center",
            disposition: "Inactive"
        },
        {
            incident: "Possession of Drug Paraphernalia",
            reportNumber: "160627",
            dateReported: "06/24/2016 - 2047",
            dateOccurred: "06/24/2016",
            timeOccurred: "2047 - 2159",
            location: "George W. Bush Presidential Center",
            disposition: "UP Citation"
        },
        {
            incident: "Theft",
            reportNumber: "160628",
            dateReported: "06/24/2016 - 2118",
            dateOccurred: "06/24/2016",
            timeOccurred: "2118",
            location: "Sigma Alpha Epsilon",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160632",
            dateReported: "06/26/2016 - 0832",
            dateOccurred: "06/26/2016",
            timeOccurred: "0832",
            location: "Crum Residential Commons",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160633",
            dateReported: "06/27/2016 - 0158",
            dateOccurred: "06/27/2016",
            timeOccurred: "0158",
            location: "Phi Gamma Delta House",
            disposition: "Closed"
        },
        {
            incident: "Disorderly Conduct",
            reportNumber: "160640",
            dateReported: "06/28/2016 - 2233",
            dateOccurred: "06/28/2016",
            timeOccurred: "2233",
            location: "5811 Bush Avenue",
            disposition: "Active"
        },
        {
            incident: "Theft",
            reportNumber: "160642",
            dateReported: "06/29/2016 - 2213",
             dateOccurred: "06/29/2016",
            timeOccurred: "0930 - 1000",
            location: "Expressway Tower",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160645",
            dateReported: "06/30/2016 - 1420",
            dateOccurred: "06/30/2016",
            timeOccurred: "1420 - 1455",
            location: "Barr Pool",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160646",
            dateReported: "07/02/2016 - 1518",
             dateOccurred: "07/02/2016",
            timeOccurred: "1518",
            location: "Pi Beta Phi House",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160648",
            dateReported: "07/04/2016 - 0733",
             dateOccurred: "07/04/2016",
            timeOccurred: "0733",
            location: "SMU Apartments",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160650",
            dateReported: "07/06/2016 - 1051",
             dateOccurred: "06/23/2016",
            timeOccurred: "1000 - 1800",
            location: "Moody Coliseum",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160651",
            dateReported: "07/07/2016 - 1508",
             dateOccurred: "07/07/2016",
            timeOccurred: "1508",
            location: "Dawson Service Center",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber:"160653",
            dateReported: "07/07/2016 - 1714",
             dateOccurred: "07/07/2016",
            timeOccurred: "1714",
            location: "Underwood Law Library",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160654",
            dateReported: "07/08/2016 - 0326",
             dateOccurred: "07/08/2016",
            timeOccurred: "0326",
            location: "Delta Gamma House",
            disposition: "Closed"
        },
        {
            incident: "Graffiti",
            reportNumber: "160662",
            dateReported: "07/12/2016 - 1002",
             dateOccurred: "07/11/2016",
            timeOccurred: "1700",
            location: "Expressway Tower",
            disposition: "Inactive"
        },
        {
            incident: "Injury to a Disabled Individual",
            reportNumber: "160665",
            dateReported: "07/12/2016 - 1804",
             dateOccurred: "07/12/2016",
            timeOccurred: "1804",
            location: "6200 Bishop Blvd.",
            disposition: "Active"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160666",
            dateReported: "07/13/2016 - 1305",
             dateOccurred: "07/12/2016 - 07/13/2016",
            location: "Fondren Library Center",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160667",
            dateReported: "07/13/2016 - 1509",
             dateOccurred: "07/11/2016 - 07/13/2016 - 1500",
            location: "Umphrey Lee Center",
            disposition: "Active"
        },
        {
            incident: "False Report to a Peace Officer",
            reportNumber: "160668",
            dateReported: "07/13/2016 - 1902",
             dateOccurred: "07/13/2016",
            timeOccurred: "1902",
            location: "5700 Bishop Blvd.",
            disposition: "Exceptionally Cleared"
        },
        {
            incident: "Criminal Mischief",
            reportNumber: "160671",
            dateReported: "07/16/2016 - 0904",
             dateOccurred: "07/15/2016 - 07/16/2016 - 0800",
            location: "Gerald J. Ford Stadium",
            disposition: "Active"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160672",
            dateReported: "07/16/2016 - 1301",
             dateOccurred: "07/16/2016",
            timeOccurred: "1301",
            location: "Health Center",
            disposition: "Closed"
        },
        {
            incident: "Burglary of a Vehicle",
            reportNumber: "160676",
            dateReported: "07/19/2016 - 1050",
             dateOccurred: "07/18/2016",
            timeOccurred: "1040 - 1300",
            location: "Moody Parking Center",
            disposition: "Active"
        },
        {
            incident: "Sex Offense - Forcible Fondling",
            reportNumber: "160677",
            dateReported: "07/19/2016 - 1530",
             dateOccurred: "07/19/2016",
            timeOccurred: "1530",
            location: "Virginia-Snider Hall",
            disposition: "Exceptionally Cleared"
        },
        {
            incident: "Theft",
            reportNumber: "160678",
            dateReported: "07/20/2016 - 2050",
             dateOccurred: "07/20/2016",
            timeOccurred: "1600 - 2040",
            location: "Caruth Hall",
            disposition: "Inactive"
        },
        {
            incident: "Graffiti",
            reportNumber: "160680",
            dateReported: "07/21/2016 - 0926",
             dateOccurred: "07/20/2016 - 07/21/2016",
            location: "5547 SMU Blvd.",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160682",
            dateReported: "07/21/2016 - 1514",
             dateOccurred: "07/20/2016 - 07/21/2016 - 0830",
            location: "Hughes-Trigg Student Center",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160683",
            dateReported: "07/21/2016 - 1542",
             dateOccurred: "07/21/2016",
            timeOccurred: "1542",
            location: "Morrison McGinnis Hall",
            disposition: "Closed"
        },
        {
            incident: "Driving Under the Influence by a Minor",
            reportNumber: "160685",
            dateReported: "07/22/2016 - 0208",
             dateOccurred: "07/22/2016",
            timeOccurred: "0208",
            location: "Virginia-Snider Hall",
            disposition: "Exceptionally Cleared"
        },
        {
            incident: "Possession of Fictitious License or ID",
            reportNumber: "160686",
            dateReported: "07/22/2016 - 0409",
             dateOccurred: "07/22/2016",
            timeOccurred: "0409",
            location: "Patterson Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160687",
            dateReported: "07/22/2016 - 0620",
             dateOccurred: "07/22/2016",
            timeOccurred: "0620",
            location: "Tennis Complex",
            disposition: "Closed"
        },
        {
            incident: "Theft & Criminal Mischief",
            reportNumber: "160688",
            dateReported: "07/22/2016 - 0640",
             dateOccurred: "07/22/2016",
            timeOccurred: "0640",
            location: "Daniel Parking Center",
            disposition: "Active"
        },
        {
            incident: "Harassment",
            reportNumber: "160693",
            dateReported: "07/26/2016 - 1131",
             dateOccurred: "07/25/2016 - 07/26/2016 - 0905",
            location: "Patterson Hall",
            disposition: "Inactive"
        },
        {
            incident: "Possession of Marijuana & Possession of Drug Paraphernalia",
            reportNumber: "160694",
            dateReported: "07/26/2016 - 1358",
             dateOccurred: "07/26/2016",
            timeOccurred: "1358",
            location: "Expressway Tower",
            disposition: "Arrest"
        },
        {
            incident: "Theft & Criminal Attempt",
            reportNumber: "160695",
            dateReported: "07/26/2016 - 1332",
             dateOccurred: "07/26/2016",
            timeOccurred: "1226 - 1253",
            location: "SMU Bookstore",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160700",
            dateReported: "07/28/2016 - 1602",
             dateOccurred: "07/28/2016",
            timeOccurred: "1602",
            location: "SMU Bookstore",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160703",
            dateReported: "07/30/2016 - 1757",
             dateOccurred: "07/30/2016",
            timeOccurred: "1757",
            location: "University Data Center",
            disposition: "Closed"
        },
        {
            incident: "Assault - Domestic Violence & Public Intoxication",
            reportNumber: "160705",
            dateReported: "07/31/2016 - 0219",
             dateOccurred: "07/31/2016",
            timeOccurred: "0219",
            location: "Park Cities Plaza",
            disposition: "Arrest"
        },
        {
            incident: "Theft",
            reportNumber: "160707",
            dateReported: "08/02/2016 - 1801",
             dateOccurred: "08/02/2016",
            timeOccurred: "0930 - 1630",
            location: "Mustang Parking Center",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160708",
            dateReported: "08/02/2016 - 2008",
             dateOccurred: "08/02/2016",
            timeOccurred: "1800 - 1915",
            location: "Dedman Center for Lifetime Sports",
            disposition: "Inactive"
        },
        {
            incident: "Theft",
            reportNumber: "160710",
            dateReported: "08/03/2016 - 1041",
             dateOccurred: "08/03/2016",
            timeOccurred: "1041",
            location: "Dedman Center for Lifetime Sports",
            disposition: "Inactive"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160712",
            dateReported: "08/04/2016 - 0155",
             dateOccurred: "08/04/2016",
            timeOccurred: "0155",
            location: "Main Quad",
            disposition: "Conduct Referral"
        },
        {
            incident: "Theft",
            reportNumber: "160715",
            dateReported: "08/07/2016 - 1432",
             dateOccurred: "08/06/2016 - 08/07/2016 - 1430",
            location: "Owens Fine Art Center",
            disposition: "Inactive"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160716",
            dateReported: "08/08/2016 - 1106",
             dateOccurred: "08/08/2016",
            timeOccurred: "1106",
            location: "Phi Gamma Delta House",
            disposition: "Closed"
        },
        {
            incident: "Theft",
            reportNumber: "160718",
            dateReported: "08/09/2016 - 1541",
             dateOccurred: "08/09/2016",
            timeOccurred: "0405 - 0415",
            location: "Dedman Center for Lifetime Sports",
            disposition: "Active"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160720",
            dateReported: "08/10/2016 - 1846",
             dateOccurred: "08/10/2016",
            timeOccurred: "1846",
            location: "Boaz Hall",
            disposition: "Closed"
        },
        {
            incident: "Driving While License Invalid",
            reportNumber: "160722",
            dateReported: "08/11/2016 - 2309",
             dateOccurred: "08/11/2016",
            timeOccurred: "2309",
            location: "3000 Binkley Avenue",
            disposition: "Arrest"
        },
        {
            incident: "Possession of Drug Paraphernalia & Possession of Tobacco Product by a Minor",
            reportNumber: "160723",
            dateReported: "08/12/2016 - 0236",
             dateOccurred: "08/12/2016",
            timeOccurred: "0236",
            location: "Bishop Blvd. at Mockingbird Lane",
            disposition: "UP Citation"
        },
        {
            incident: "Disorderly Conduct",
            reportNumber: "160725",
            dateReported: "08/17/2016 - 1216",
             dateOccurred: "08/17/2016",
            timeOccurred: "1216",
            location: "Hyer Hall",
            disposition: "Inactive"
        },
        {
            incident: "Reckless Damage or Destruction",
            reportNumber: "160726",
            dateReported: "08/17/2016 - 1943",
             dateOccurred: "08/17/2016",
            timeOccurred: "1911",
            location: "5700 Ownby Drive",
            disposition: "Active"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160727",
            dateReported: "08/18/2016 - 0125",
             dateOccurred: "08/18/2016",
            timeOccurred: "0125",
            location: "Virginia-Snider Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Consumption of Alcohol by a Minor & Possession of Fictitious License or ID",
            reportNumber: "160728",
            dateReported: "08/18/2016 - 0150",
             dateOccurred: "08/18/2016",
            timeOccurred: "0150",
            location: "Sigma Chi House",
            disposition: "Arrest",
        },
        {
            incident: "Theft",
            reportNumber: "160729",
            dateReported: "08/18/2016 - 1042",
             dateOccurred: "08/17/2016 - 08/18/2016 - 0930",
            location: "5523 Dyer Street",
            disposition: "Active"
        },
        {
            incident: "Theft",
            reportNumber: "160731",
            dateReported: "08/19/2016 - 1012",
             dateOccurred: "08/05/2016 - 08/10/2016 - 2359",
            location: "Perkins Hall",
            disposition: "Inactive"
        },
        {
            incident: "Public Intoxication",
            reportNumber: "160732",
            dateReported: "08/19/2016 - 2235",
             dateOccurred: "08/19/2016",
            timeOccurred: "2235",
            location: "5700 Ownby Drive",
            disposition: "Arrest"
        },
        {
            incident: "Consumption of Alcohol by a Minor & Possession of Fictitious License or ID",
            reportNumber: "160733",
            dateReported: "08/20/2016 - 0052",
             dateOccurred: "08/20/2016",
            timeOccurred: "0052",
            location: "2900 SMU Blvd.",
            disposition: "Arrest"
        },
        {
            incident: "Consumption of Alcohol by a Minor & Possession of Fictitious License or ID",
            reportNumber: "160734",
            dateReported: "08/20/2016 - 0224",
             dateOccurred: "08/20/2016",
            timeOccurred: "0224",
            location: "Mustang Parking Center",
            disposition: "Conduct Referral"
        },
        {
            incident: "Duty On Striking an Unattended Vehicle",
            reportNumber: "160736",
            dateReported: "08/20/2016 - 1309",
             dateOccurred: "08/20/2016",
            timeOccurred: "1309",
            location: "3060 Mockingbird Lane",
            disposition: "Inactive"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160738",
            dateReported: "08/21/2016 - 0019",
             dateOccurred: "08/21/2016",
            timeOccurred: "0019",
            location: "Loyd Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160739",
            dateReported: "08/21/2016 - 0036",
             dateOccurred: "08/21/2016",
            timeOccurred: "0036",
            location: "Ware Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160740",
            dateReported: "08/21/2016 - 0050",
             dateOccurred: "08/21/2016",
            timeOccurred: "0050",
            location: "Bridwell Library",
            disposition: "Conduct Referral"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160742",
            dateReported: "08/21/2016 - 0156",
             dateOccurred: "08/21/2016",
            timeOccurred: "0156",
            location: "Collins Executive Center",
            disposition: "Closed"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160744",
            dateReported: "08/21/2016 - 0150",
             dateOccurred: "08/21/2016",
            timeOccurred: "0150",
            location: "George W. Bush Presidential Center",
            disposition: "Conduct Referral"
        },
        {
            incident: "Criminal Attempt - Theft",
            reportNumber: "160745",
            dateReported: "08/21/2016 - 1527",
             dateOccurred: "08/19/2016 - 08/21/2016 - 1540",
            location: "5526 Dyer Ct.",
            disposition: "Active"
        },
        {
            incident: "Theft & Prostitution",
            reportNumber: "160748",
            dateReported: "08/22/2016 - 2207",
             dateOccurred: "08/22/2016",
            timeOccurred: "2207",
            location: "Patterson Hall",
            disposition: "Inactive"
        },
        {
            incident: "Consumption of Alcohol by a Minor & Possession of Fictitious License or ID",
            reportNumber: "160750",
            dateReported: "08/23/2016 - 0027",
             dateOccurred: "08/23/2016",
            timeOccurred: "0027",
            location: "Loyd Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160751",
            dateReported: "08/23/2016 - 0028",
             dateOccurred: "08/23/2016",
            timeOccurred: "0028",
            location: "Ware Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Assault",
            reportNumber: "160752",
            dateReported: "08/23/2016 - 0056",
             dateOccurred: "08/23/2016",
            timeOccurred: "0056",
            location: "Phi Gamma Delta",
            disposition: "Arrest"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160753",
            dateReported: "08/23/2016 - 0229",
             dateOccurred: "08/23/2016",
            timeOccurred: "0229",
            location: "Crum Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Public Intoxication",
            reportNumber: "160758",
            dateReported: "08/24/2016 - 0704",
             dateOccurred: "08/24/2016",
            timeOccurred: "0704",
            location: "Morrison McGinnis Hall",
            disposition: "Arrest"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160760",
            dateReported: "08/25/2016 - 0254",
             dateOccurred: "08/24/2016",
            timeOccurred: "0254",
            location: "Patterson Hall",
            disposition: "Conduct Referral"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160765",
            dateReported: "08/26/2016 - 0028",
             dateOccurred: "08/26/2016",
            timeOccurred: "0028",
            location: "Morrison McGinnis Hall",
            disposition: "Arrest"
        },
        {
            incident: "Consumption of Alcohol by a Minor",
            reportNumber: "160767",
            dateReported: "08/26/2016 - 0052",
             dateOccurred: "08/26/2016",
            timeOccurred: "0052",
            location: "Ware Residential Commons",
            disposition: "Conduct Referral"
        },
        {
            incident: "Consumption of Alcohol by a Minor & Possession of Fictitious License or ID",
            reportNumber: "160768",
            dateReported: "08/26/2016 - 0203",
             dateOccurred: "08/26/2016",
            timeOccurred: "0203",
            location: "Loyd Residential Commons",
            disposition: "Arrest"
        },
        {
            incident: "Theft",
            reportNumber: "160770",
            dateReported: "08/26/2016 - 1111",
             dateOccurred: "08/21/2016",
            timeOccurred: "0700 - 2300",
            location: "Umphrey Lee Center",
            disposition: "Inactive"
        },
        {
            incident: "Consumption of Alcohol by a Minor & Possession of Fictitious License or ID",
            reportNumber: "160773",
            dateReported: "08/26/2016 - 2239",
             dateOccurred: "08/26/2016",
            timeOccurred: "2239",
            location: "Kappa Alpha House",
            disposition: "Conduct Referral",
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160774",
            dateReported: "08/26/2016 - 2257",
             dateOccurred: "08/26/2016",
            timeOccurred: "2257",
            location: "McElvaney Hall",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160776",
            dateReported: "08/27/2016 - 0145",
             dateOccurred: "08/27/2016",
            timeOccurred: "0145",
            location: "Ware Residential Commons",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160779",
            dateReported: "08/27/2016 - 2325",
             dateOccurred: "08/27/2016",
            timeOccurred: "2325",
            location: "Kathy Crow Residential Commons",
            disposition: "Closed"
        },
        {
            incident: "Fire Alarm",
            reportNumber: "160780",
            dateReported: "08/28/2016 - 0257",
             dateOccurred: "08/27/2016",
            timeOccurred: "0257",
            location: "Sigma Alpha Epsilon",
            disposition: "Closed"
        },

];

    console.log(crimeLog.length);
//Logic to calculate types of crimes and quantity
for(var i = 0; i < crimeLog.length; i++) {
    console.log(crimeLog[i].location);
    
    if (crimeLog[i].incident.includes('Sex')) {
        dict[crimeLog[i].location].sexual = dict[crimeLog[i].location].sexual + 1;
            if (crimeLog[i].incident.includes('Harrasment') ||
               crimeLog[i].incident.includes('Stalking')) {
                    dict[crimeLog[i].location].violent = dict[crimeLog[i].location].violent + 1;
            } 
            if (crimeLog[i].incident.includes('Consumption') || 
               crimeLog[i].incident.includes('Alcohol') ||
               crimeLog[i].incident.includes('Marijuana') ||
               crimeLog[i].incident.includes('Intoxication') ||
               crimeLog[i].incident.includes('Drug')) {
                    dict[crimeLog[i].location].substanceAbuse = dict[crimeLog[i].location].substanceAbuse + 1;
            } 
            if (crimeLog[i].incident.includes('Theft') || 
               crimeLog[i].incident.includes('Burglary')) {
                     dict[crimeLog[i].location].theft = dict[crimeLog[i].location].theft + 1;
            } 
            if (crimeLog[i].incident.includes('Fire')) {
                    dict[crimeLog[i].location].fireAlarm = dict[crimeLog[i].location].fireAlarm + 1;
            }
            if (crimeLog[i].incident.includes('Fictitious') ||
                crimeLog[i].incident.includes('Mischief') ||
                crimeLog[i].incident.includes('Trespass')) {
                    dict[crimeLog[i].location].other = dict[crimeLog[i].location].other + 1;
            }
    } else if (crimeLog[i].incident.includes('Assault') ||
               crimeLog[i].incident.includes('Harrasment') ||
               crimeLog[i].incident.includes('Stalking')) {
        dict[crimeLog[i].location].violent = dict[crimeLog[i].location].violent + 1;
            if (crimeLog[i].incident.includes('Consumption') || 
               crimeLog[i].incident.includes('Alcohol') ||
               crimeLog[i].incident.includes('Marijuana') ||
               crimeLog[i].incident.includes('Intoxication') ||
               crimeLog[i].incident.includes('Drug')) {
                    dict[crimeLog[i].location].substanceAbuse = dict[crimeLog[i].location].substanceAbuse + 1;
            } 
            if (crimeLog[i].incident.includes('Theft') || 
               crimeLog[i].incident.includes('Burglary')) {
                     dict[crimeLog[i].location].theft = dict[crimeLog[i].location].theft + 1;
            } 
            if (crimeLog[i].incident.includes('Fire')) {
                    dict[crimeLog[i].location].fireAlarm = dict[crimeLog[i].location].fireAlarm + 1;
            }
            if (crimeLog[i].incident.includes('Fictitious') ||
                crimeLog[i].incident.includes('Mischief') ||
                crimeLog[i].incident.includes('Trespass')) {
                    dict[crimeLog[i].location].other = dict[crimeLog[i].location].other + 1;
            }
    } else if (crimeLog[i].incident.includes('Consumption') || 
               crimeLog[i].incident.includes('Alcohol') ||
               crimeLog[i].incident.includes('Marijuana') ||
               crimeLog[i].incident.includes('Intoxication') ||
               crimeLog[i].incident.includes('Drug')) {
        dict[crimeLog[i].location].substanceAbuse = dict[crimeLog[i].location].substanceAbuse + 1;
            if (crimeLog[i].incident.includes('Theft') || 
               crimeLog[i].incident.includes('Burglary')) {
                     dict[crimeLog[i].location].theft = dict[crimeLog[i].location].theft + 1;
            } 
            if (crimeLog[i].incident.includes('Fire')) {
                    dict[crimeLog[i].location].fireAlarm = dict[crimeLog[i].location].fireAlarm + 1;
            }
            if (crimeLog[i].incident.includes('Fictitious') ||
                crimeLog[i].incident.includes('Mischief') ||
                crimeLog[i].incident.includes('Trespass')) {
                    dict[crimeLog[i].location].other = dict[crimeLog[i].location].other + 1;
            }
    } else if (crimeLog[i].incident.includes('Theft') || 
               crimeLog[i].incident.includes('Burglary')) {
        dict[crimeLog[i].location].theft = dict[crimeLog[i].location].theft + 1;
            if (crimeLog[i].incident.includes('Fire')) {
                dict[crimeLog[i].location].fireAlarm = dict[crimeLog[i].location].fireAlarm + 1;
            }
            if (crimeLog[i].incident.includes('Fictitious') ||
                crimeLog[i].incident.includes('Mischief') ||
                crimeLog[i].incident.includes('Trespass')) {
                    dict[crimeLog[i].location].other = dict[crimeLog[i].location].other + 1;
            }
    } else if (crimeLog[i].incident.includes('Fire')) {
        dict[crimeLog[i].location].fireAlarm = dict[crimeLog[i].location].fireAlarm + 1;
            if (crimeLog[i].incident.includes('Fictitious') ||
                crimeLog[i].incident.includes('Mischief') ||
                crimeLog[i].incident.includes('Trespass')) {
                    dict[crimeLog[i].location].other = dict[crimeLog[i].location].other + 1;
            }
    } else {
        dict[crimeLog[i].location].other = dict[crimeLog[i].location].other + 1;
    } 
    console.log(dict[crimeLog[i].location]);
    
}


var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.838941, lng:  -96.785074},
    zoom: 15,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: true,
    fullscreenControl: true,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#E3E3E3'}]},
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{color: '#9F7E5E'}]
            },
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{visibility: "off"},]
              
            },
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{visibility: "off"},]
              
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              //stylers: [{visibility: "off"},]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#C8DA4A'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#72C5AE'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#FFFFFF'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              visibility: 'off',
            }
            ]
    });



    for (var i = 0; i < names.length; i++) {
        console.log("drawing markers");
        console.log(names[i]);
    if (dict[names[i]].sexual != 0) {
        var markers = new google.maps.Circle({
            fillColor: '#f44242',
            strokeWeight: 0,
            map: map,
            center: new google.maps.LatLng(dict[names[i]].lat, dict[names[i]].lng),
            radius: dict[names[i]].sexual * 10 

        });

    }
    if (dict[names[i]].violent != 0) {
        var markers = new google.maps.Circle({
            fillColor: '#f4428c',
            strokeWeight: 0,
            map: map,
            center: new google.maps.LatLng(dict[names[i]].lat, dict[names[i]].lng),
            radius: dict[names[i]].violent * 10 
        });

    }
    if (dict[names[i]].substanceAbuse != 0) {
        var markers = new google.maps.Circle({
            strokeWeight: 0,
            fillColor: '#42d1f4',
            map: map,
            center: new google.maps.LatLng(dict[names[i]].lat, dict[names[i]].lng),
            radius: dict[names[i]].substanceAbuse * 10 
        });

    }
    if (dict[names[i]].theft != 0) {
        var markers = new google.maps.Circle({
            fillColor: '#42f462',
            strokeWeight: 0,
            map: map,
            center: new google.maps.LatLng(dict[names[i]].lat, dict[names[i]].lng),
            radius: dict[names[i]].theft * 10 
        });
    }
    if (dict[names[i]].fireAlarm != 0) {
        var markers = new google.maps.Circle({
            fillColor: '#e8f442',
            strokeWeight: 0,
            map: map,
            radius: dict[names[i]].fireAlarm * 10
        });

    }
    if (dict[names[i]].other != 0) {
        var markers = new google.maps.Circle({
            fillColor: '#f47a42',
            strokeWeight: 0,
            map: map,
            center: new google.maps.LatLng(dict[names[i]].lat, dict[names[i]].lng),
            radius: dict[names[i]].other * 10 
        });

    }                

    } 
}


