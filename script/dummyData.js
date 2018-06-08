/* eslint-disable */

const userData = [{ "email": "cradwell0@about.com", "password": "U4lVIvq86kHl", "firstName": "Cheryl", "lastName": "Radwell" },
{ "email": "vrosensaft1@furl.net", "password": "cRUCcZlYkgLN", "firstName": "Valerye", "lastName": "Rosensaft" },
{ "email": "twroth2@pagesperso-orange.fr", "password": "JXDluB4hJcA", "firstName": "Terrill", "lastName": "Wroth" },
{ "email": "oquodling3@bluehost.com", "password": "reZrztUqKip", "firstName": "Ollie", "lastName": "Quodling" },
{ "email": "rslidders4@spotify.com", "password": "WmRzDtHXicE", "firstName": "Rancell", "lastName": "Slidders" }];

const bookData = [{
  "title": "Evilspeak",
  "publicationDate": "5/30/2004",
  "publisher": "Welch, Schimmel and Spinka",
  "quantity": 6,
  "price": 8500,
  "genre": "Horror|Sci-Fi",
  "condition": null,
  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "numberSold": 2,
  "imageUrl": "http://dummyimage.com/132x155.png/dddddd/000000",
  "authorId": 1
}, {
  "title": "A Good Marriage",
  "publicationDate": "7/17/2004",
  "publisher": "Stoltenberg, D'Amore and Veum",
  "quantity": 16,
  "price": 5147,
  "genre": "Thriller",
  "condition": null,
  "description": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "numberSold": 2,
  "imageUrl": "http://dummyimage.com/187x187.png/ff4444/ffffff",
  "authorId": 1
}, {
  "title": "Yo Yo (Yoyo)",
  "publicationDate": "12/18/2000",
  "publisher": "Bradtke, Mueller and Waters",
  "quantity": 8,
  "price": 5985,
  "genre": "Comedy|Drama|Romance",
  "condition": null,
  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "numberSold": 5,
  "imageUrl": "http://dummyimage.com/139x227.bmp/ff4444/ffffff",
  "authorId": 1
}, {
  "title": "Intact (Intacto)",
  "publicationDate": "1/4/2005",
  "publisher": "Denesik-Berge",
  "quantity": 11,
  "price": 8246,
  "genre": "Thriller",
  "condition": null,
  "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "numberSold": 4,
  "imageUrl": "http://dummyimage.com/134x156.jpg/ff4444/ffffff",
  "authorId": 1
}, {
  "title": "Expelled from Paradise",
  "publicationDate": "4/3/2005",
  "publisher": "Lind Inc",
  "quantity": 20,
  "price": 4131,
  "genre": "Animation",
  "condition": null,
  "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "numberSold": 3,
  "imageUrl": "http://dummyimage.com/168x187.bmp/ff4444/ffffff",
  "authorId": 1
}, {
  "title": "Vampire Hunter D",
  "publicationDate": "5/14/2003",
  "publisher": "Lubowitz-Quigley",
  "quantity": 11,
  "price": 3448,
  "genre": "Animation|Fantasy|Horror",
  "condition": null,
  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
  "numberSold": 3,
  "imageUrl": "http://dummyimage.com/201x177.png/ff4444/ffffff",
  "authorId": 2
}, {
  "title": "Don't Look Now",
  "publicationDate": "9/22/2002",
  "publisher": "Lemke-Torphy",
  "quantity": 11,
  "price": 9338,
  "genre": "Drama|Horror|Thriller",
  "condition": null,
  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "numberSold": 3,
  "imageUrl": "http://dummyimage.com/148x185.jpg/ff4444/ffffff",
  "authorId": 2
}, {
  "title": "Tyler Perry's Temptation: Confessions of a Marriage Counselor",
  "publicationDate": "9/5/2004",
  "publisher": "Altenwerth LLC",
  "quantity": 2,
  "price": 1537,
  "genre": "Drama",
  "condition": null,
  "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "numberSold": 4,
  "imageUrl": "http://dummyimage.com/249x160.jpg/dddddd/000000",
  "authorId": 2
}, {
  "title": "Syndromes and a Century (Sang sattawat)",
  "publicationDate": "6/15/2001",
  "publisher": "Kozey-McKenzie",
  "quantity": 5,
  "price": 4466,
  "genre": "Drama",
  "condition": null,
  "description": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  "numberSold": 5,
  "imageUrl": "http://dummyimage.com/115x208.png/5fa2dd/ffffff",
  "authorId": 2
}, {
  "title": "No Man of Her Own ",
  "publicationDate": "1/15/2004",
  "publisher": "Haley Group",
  "quantity": 12,
  "price": 7668,
  "genre": "Drama|Film-Noir",
  "condition": null,
  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  "numberSold": 1,
  "imageUrl": "http://dummyimage.com/121x190.bmp/dddddd/000000",
  "authorId": 2
}, {
  "title": "1981",
  "publicationDate": "6/13/2001",
  "publisher": "Bogisich, Wilderman and Ruecker",
  "quantity": 20,
  "price": 7858,
  "genre": "Comedy|Drama|Romance",
  "condition": null,
  "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  "numberSold": 2,
  "imageUrl": "http://dummyimage.com/142x219.bmp/dddddd/000000",
  "authorId": 3
}, {
  "title": "Words, The",
  "publicationDate": "11/22/2001",
  "publisher": "Stanton-Torphy",
  "quantity": 6,
  "price": 5824,
  "genre": "Drama|Romance",
  "condition": null,
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "numberSold": 3,
  "imageUrl": "http://dummyimage.com/114x154.jpg/5fa2dd/ffffff",
  "authorId": 3
}, {
  "title": "Eddie Izzard: Force Majeure Live",
  "publicationDate": "10/23/2003",
  "publisher": "Mayert Group",
  "quantity": 7,
  "price": 2662,
  "genre": "Comedy",
  "condition": null,
  "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  "numberSold": 3,
  "imageUrl": "http://dummyimage.com/131x200.jpg/dddddd/000000",
  "authorId": 3
}, {
  "title": "Tree Grows in Brooklyn, A",
  "publicationDate": "1/11/2002",
  "publisher": "Raynor, Roberts and Weissnat",
  "quantity": 7,
  "price": 2681,
  "genre": "Drama",
  "condition": null,
  "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "numberSold": 4,
  "imageUrl": "http://dummyimage.com/135x152.jpg/cc0000/ffffff",
  "authorId": 3
}, {
  "title": "Frankenstein Must Be Destroyed",
  "publicationDate": "9/1/2003",
  "publisher": "Ziemann-Bartoletti",
  "quantity": 8,
  "price": 3981,
  "genre": "Drama|Horror|Sci-Fi",
  "condition": null,
  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "numberSold": 1,
  "imageUrl": "http://dummyimage.com/117x225.bmp/ff4444/ffffff",
  "authorId": 3
}, {
  "title": "Beauty in Trouble (Kráska v nesnázích)",
  "publicationDate": "5/28/2003",
  "publisher": "O'Hara-Bogisich",
  "quantity": 16,
  "price": 3756,
  "genre": "Drama",
  "condition": null,
  "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "numberSold": 4,
  "imageUrl": "http://dummyimage.com/104x164.png/5fa2dd/ffffff",
  "authorId": 3
}, {
  "title": "Alligator",
  "publicationDate": "3/6/2003",
  "publisher": "Reilly LLC",
  "quantity": 13,
  "price": 2723,
  "genre": "Action|Horror|Sci-Fi",
  "condition": null,
  "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "numberSold": 4,
  "imageUrl": "http://dummyimage.com/179x103.jpg/dddddd/000000",
  "authorId": 3
}, {
  "title": "My Life in Ruins",
  "publicationDate": "3/9/2003",
  "publisher": "Collins, Green and Bailey",
  "quantity": 12,
  "price": 9751,
  "genre": "Comedy",
  "condition": null,
  "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "numberSold": 5,
  "imageUrl": "http://dummyimage.com/206x144.bmp/ff4444/ffffff",
  "authorId": 3
}, {
  "title": "Big White, The",
  "publicationDate": "5/17/2005",
  "publisher": "Hills, Howell and Goyette",
  "quantity": 1,
  "price": 1567,
  "genre": "Comedy|Crime|Drama",
  "condition": null,
  "description": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "numberSold": 4,
  "imageUrl": "http://dummyimage.com/232x229.bmp/cc0000/ffffff",
  "authorId": 3
}, {
  "title": "Chapiteau-show (Shapito-shou)",
  "publicationDate": "4/3/2005",
  "publisher": "Hane, Goodwin and Tillman",
  "quantity": 13,
  "price": 8811,
  "genre": "Adventure|Comedy",
  "condition": null,
  "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "numberSold": 2,
  "imageUrl": "http://dummyimage.com/171x113.jpg/cc0000/ffffff",
  "authorId": 4
}, {
  "title": "She-Devil",
  "publicationDate": "4/19/2001",
  "publisher": "Keebler and Sons",
  "quantity": 20,
  "price": 8107,
  "genre": "Comedy",
  "condition": null,
  "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "numberSold": 2,
  "imageUrl": "http://dummyimage.com/223x210.png/ff4444/ffffff",
  "authorId": 4
}, {
  "title": "Dragon Ball Z: Super Android 13! (Doragon bôru Z 7: Kyokugen batoru!! San dai sûpâ saiyajin)",
  "publicationDate": "11/21/2004",
  "publisher": "Rohan, Cremin and Skiles",
  "quantity": 20,
  "price": 6699,
  "genre": "Action|Adventure|Animation",
  "condition": null,
  "description": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "numberSold": 3,
  "imageUrl": "http://dummyimage.com/186x108.bmp/5fa2dd/ffffff",
  "authorId": 4
}, {
  "title": "Mystery of the Third Planet, The (Tayna tretey planety)",
  "publicationDate": "7/9/2001",
  "publisher": "Dare-Frami",
  "quantity": 10,
  "price": 1810,
  "genre": "Adventure|Animation|Sci-Fi",
  "condition": null,
  "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  "numberSold": 3,
  "imageUrl": "http://dummyimage.com/141x124.bmp/cc0000/ffffff",
  "authorId": 4
}, {
  "title": "One-Eyed Jacks",
  "publicationDate": "4/1/2005",
  "publisher": "Von, Cormier and Parker",
  "quantity": 18,
  "price": 5425,
  "genre": "Western",
  "condition": null,
  "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "numberSold": 5,
  "imageUrl": "http://dummyimage.com/120x124.bmp/5fa2dd/ffffff",
  "authorId": 5
}, {
  "title": "21-87",
  "publicationDate": "4/5/2003",
  "publisher": "Lebsack Group",
  "quantity": 6,
  "price": 841,
  "genre": "Documentary",
  "condition": null,
  "description": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  "numberSold": 2,
  "imageUrl": "http://dummyimage.com/169x142.jpg/cc0000/ffffff",
  "authorId": 5
}, {
  "title": "Cyclo (Xich lo)",
  "publicationDate": "6/24/2004",
  "publisher": "Kshlerin LLC",
  "quantity": 3,
  "price": 2830,
  "genre": "Crime|Drama",
  "condition": null,
  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "numberSold": 3,
  "imageUrl": "http://dummyimage.com/139x206.bmp/ff4444/ffffff",
  "authorId": 5
}, {
  "title": "Felicity",
  "publicationDate": "1/26/2003",
  "publisher": "Sporer-Thompson",
  "quantity": 16,
  "price": 1447,
  "genre": "Drama",
  "condition": null,
  "description": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  "numberSold": 1,
  "imageUrl": "http://dummyimage.com/250x214.jpg/dddddd/000000",
  "authorId": 5
}, {
  "title": "Man Who Saw Tomorrow, The",
  "publicationDate": "2/9/2005",
  "publisher": "Senger-Schowalter",
  "quantity": 11,
  "price": 4186,
  "genre": "Documentary",
  "condition": null,
  "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  "numberSold": 5,
  "imageUrl": "http://dummyimage.com/144x101.bmp/dddddd/000000",
  "authorId": 5
}, {
  "title": "Eddie and the Cruisers II: Eddie Lives!",
  "publicationDate": "10/12/2001",
  "publisher": "Medhurst, Erdman and Leffler",
  "quantity": 15,
  "price": 7162,
  "genre": "Drama|Musical",
  "condition": null,
  "description": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "numberSold": 3,
  "imageUrl": "http://dummyimage.com/237x245.png/cc0000/ffffff",
  "authorId": 5
}, {
  "title": "Silence (Chinmoku)",
  "publicationDate": "11/11/2003",
  "publisher": "Wilkinson-Turner",
  "quantity": 12,
  "price": 1893,
  "genre": "Drama",
  "condition": null,
  "description": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  "numberSold": 3,
  "imageUrl": "http://dummyimage.com/242x224.jpg/5fa2dd/ffffff",
  "authorId": 6
}, {
  "title": "Sweetwater",
  "publicationDate": "6/29/2002",
  "publisher": "Conroy Group",
  "quantity": 2,
  "price": 4798,
  "genre": "Thriller|Western",
  "condition": null,
  "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "numberSold": 4,
  "imageUrl": "http://dummyimage.com/219x197.bmp/dddddd/000000",
  "authorId": 6
}, {
  "title": "Envy (Kiskanmak)",
  "publicationDate": "9/25/2004",
  "publisher": "Wyman-Ruecker",
  "quantity": 13,
  "price": 9643,
  "genre": "Drama",
  "condition": null,
  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  "numberSold": 3,
  "imageUrl": "http://dummyimage.com/155x170.jpg/ff4444/ffffff",
  "authorId": 6
}, {
  "title": "Jeanne and the Perfect Guy (Jeanne et le garçon formidable)",
  "publicationDate": "5/14/2005",
  "publisher": "Mraz, Harvey and Lesch",
  "quantity": 5,
  "price": 8047,
  "genre": "Comedy|Drama|Romance",
  "condition": null,
  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
  "numberSold": 4,
  "imageUrl": "http://dummyimage.com/200x249.jpg/cc0000/ffffff",
  "authorId": 7
}, {
  "title": "Caveman's Valentine, The",
  "publicationDate": "8/10/2002",
  "publisher": "Quigley-Wiegand",
  "quantity": 11,
  "price": 2430,
  "genre": "Drama",
  "condition": null,
  "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  "numberSold": 3,
  "imageUrl": "http://dummyimage.com/144x171.png/dddddd/000000",
  "authorId": 7
}, {
  "title": "Arsène Lupin",
  "publicationDate": "8/11/2001",
  "publisher": "Jacobs, Wisoky and Satterfield",
  "quantity": 8,
  "price": 9680,
  "genre": "Mystery|Romance",
  "condition": null,
  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "numberSold": 1,
  "imageUrl": "http://dummyimage.com/139x173.jpg/ff4444/ffffff",
  "authorId": 7
}, {
  "title": "Fat Man and Little Boy",
  "publicationDate": "11/22/2004",
  "publisher": "Kris Inc",
  "quantity": 12,
  "price": 4728,
  "genre": "Drama",
  "condition": null,
  "description": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "numberSold": 4,
  "imageUrl": "http://dummyimage.com/114x138.bmp/5fa2dd/ffffff",
  "authorId": 7
}, {
  "title": "José and Pilar (José e Pilar)",
  "publicationDate": "7/22/2000",
  "publisher": "Boyle Group",
  "quantity": 18,
  "price": 5748,
  "genre": "Documentary",
  "condition": null,
  "description": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "numberSold": 2,
  "imageUrl": "http://dummyimage.com/117x189.jpg/cc0000/ffffff",
  "authorId": 7
}, {
  "title": "A Merry Friggin' Christmas",
  "publicationDate": "4/10/2003",
  "publisher": "Dietrich-Smith",
  "quantity": 7,
  "price": 1864,
  "genre": "Comedy",
  "condition": null,
  "description": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "numberSold": 5,
  "imageUrl": "http://dummyimage.com/126x240.bmp/dddddd/000000",
  "authorId": 8
}, {
  "title": "Far North",
  "publicationDate": "8/18/2000",
  "publisher": "Leannon-Runolfsdottir",
  "quantity": 19,
  "price": 7575,
  "genre": "Drama|Romance|Thriller",
  "condition": null,
  "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  "numberSold": 1,
  "imageUrl": "http://dummyimage.com/203x237.jpg/ff4444/ffffff",
  "authorId": 8
}, {
  "title": "Harsh Times",
  "publicationDate": "3/9/2005",
  "publisher": "Leffler Group",
  "quantity": 18,
  "price": 8933,
  "genre": "Action|Crime|Drama",
  "condition": null,
  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  "numberSold": 4,
  "imageUrl": "http://dummyimage.com/174x196.bmp/ff4444/ffffff",
  "authorId": 8
}, {
  "title": "Generation Um...",
  "publicationDate": "7/25/2000",
  "publisher": "Anderson, Sipes and Tillman",
  "quantity": 19,
  "price": 6135,
  "genre": "Drama",
  "condition": null,
  "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "numberSold": 5,
  "imageUrl": "http://dummyimage.com/233x102.jpg/cc0000/ffffff",
  "authorId": 8
}, {
  "title": "Lakeview Terrace",
  "publicationDate": "9/9/2003",
  "publisher": "Barrows-Waters",
  "quantity": 12,
  "price": 1793,
  "genre": "Drama|Thriller",
  "condition": null,
  "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  "numberSold": 2,
  "imageUrl": "http://dummyimage.com/211x188.bmp/ff4444/ffffff",
  "authorId": 8
}, {
  "title": "Struck by Lightning",
  "publicationDate": "12/23/2004",
  "publisher": "Bernhard-Mayert",
  "quantity": 4,
  "price": 7472,
  "genre": "Comedy|Drama",
  "condition": null,
  "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "numberSold": 1,
  "imageUrl": "http://dummyimage.com/104x138.bmp/5fa2dd/ffffff",
  "authorId": 9
}, {
  "title": "Speedway",
  "publicationDate": "3/22/2003",
  "publisher": "McCullough, Hansen and Reynolds",
  "quantity": 13,
  "price": 6957,
  "genre": "Action",
  "condition": null,
  "description": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "numberSold": 4,
  "imageUrl": "http://dummyimage.com/248x134.jpg/ff4444/ffffff",
  "authorId": 9
}, {
  "title": "Amarcord",
  "publicationDate": "2/18/2005",
  "publisher": "Gerhold, Rowe and Corwin",
  "quantity": 13,
  "price": 4369,
  "genre": "Comedy|Drama",
  "condition": null,
  "description": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  "numberSold": 4,
  "imageUrl": "http://dummyimage.com/206x188.jpg/5fa2dd/ffffff",
  "authorId": 9
}, {
  "title": "Gunnin' for That #1 Spot",
  "publicationDate": "1/11/2004",
  "publisher": "Harber-Weissnat",
  "quantity": 17,
  "price": 510,
  "genre": "Documentary",
  "condition": null,
  "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "numberSold": 4,
  "imageUrl": "http://dummyimage.com/213x129.bmp/ff4444/ffffff",
  "authorId": 9
}, {
  "title": "Almost Married",
  "publicationDate": "8/11/2000",
  "publisher": "Waters-Hand",
  "quantity": 1,
  "price": 7423,
  "genre": "Comedy",
  "condition": null,
  "description": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "numberSold": 5,
  "imageUrl": "http://dummyimage.com/171x195.bmp/cc0000/ffffff",
  "authorId": 9
}, {
  "title": "Great Texas Dynamite Chase, The",
  "publicationDate": "11/8/2002",
  "publisher": "Fay-Baumbach",
  "quantity": 8,
  "price": 3247,
  "genre": "Action|Comedy|Crime|Drama|Romance",
  "condition": null,
  "description": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "numberSold": 4,
  "imageUrl": "http://dummyimage.com/119x224.png/dddddd/000000",
  "authorId": 9
}, {
  "title": "Hunting Party, The",
  "publicationDate": "3/23/2005",
  "publisher": "Sanford, Gleichner and O'Conner",
  "quantity": 16,
  "price": 8882,
  "genre": "Action|Drama|Western",
  "condition": null,
  "description": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  "numberSold": 5,
  "imageUrl": "http://dummyimage.com/156x246.png/5fa2dd/ffffff",
  "authorId": 9
}, {
  "title": "Piripäiväkirja",
  "publicationDate": "8/11/2001",
  "publisher": "Medhurst LLC",
  "quantity": 9,
  "price": 1751,
  "genre": "Documentary",
  "condition": null,
  "description": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  "numberSold": 2,
  "imageUrl": "http://dummyimage.com/218x130.png/ff4444/ffffff",
  "authorId": 10
}];

const authorData = [{
  "id": 1,
  "firstName": "Mollee",
  "lastName": "Geke",
  "DateOfBirth": "8/17/2017",
  "countryOfOrigin": "Poland",
  "bio": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  "imageUrl": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "id": 2,
  "firstName": "Clarey",
  "lastName": "Lytlle",
  "DateOfBirth": "3/27/2018",
  "countryOfOrigin": "Indonesia",
  "bio": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
  "imageUrl": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "id": 3,
  "firstName": "Albrecht",
  "lastName": "Banishevitz",
  "DateOfBirth": "6/3/2018",
  "countryOfOrigin": "Russia",
  "bio": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  "imageUrl": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "id": 4,
  "firstName": "Bryce",
  "lastName": "Ormond",
  "DateOfBirth": "10/29/2017",
  "countryOfOrigin": "France",
  "bio": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  "imageUrl": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "id": 5,
  "firstName": "Myrna",
  "lastName": "Eicke",
  "DateOfBirth": "3/17/2018",
  "countryOfOrigin": "Indonesia",
  "bio": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  "imageUrl": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "id": 6,
  "firstName": "Dori",
  "lastName": "Driffill",
  "DateOfBirth": "8/6/2017",
  "countryOfOrigin": "Czech Republic",
  "bio": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "imageUrl": "http://dummyimage.com/250x250.png/cc0000/ffffff"
}, {
  "id": 7,
  "firstName": "August",
  "lastName": "Kempe",
  "DateOfBirth": "10/15/2017",
  "countryOfOrigin": "Spain",
  "bio": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "imageUrl": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}, {
  "id": 8,
  "firstName": "Tally",
  "lastName": "Lindemann",
  "DateOfBirth": "11/14/2017",
  "countryOfOrigin": "Kenya",
  "bio": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "imageUrl": "http://dummyimage.com/250x250.png/dddddd/000000"
}, {
  "id": 9,
  "firstName": "Yehudi",
  "lastName": "Niess",
  "DateOfBirth": "7/8/2017",
  "countryOfOrigin": "Indonesia",
  "bio": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "imageUrl": "http://dummyimage.com/250x250.png/5fa2dd/ffffff"
}, {
  "id": 10,
  "firstName": "Kerri",
  "lastName": "Broske",
  "DateOfBirth": "6/9/2017",
  "countryOfOrigin": "Philippines",
  "bio": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  "imageUrl": "http://dummyimage.com/250x250.png/ff4444/ffffff"
}]

const reviewData = [{
  "rating": 2,
  "text": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "date": "19-Jun-2017",
  "bookId": 13,
  "userId": 1
}, {
  "rating": 4,
  "text": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  "date": "15-Sep-2017",
  "bookId": 19,
  "userId": 1
}, {
  "rating": 2,
  "text": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "date": "06-Jan-2018",
  "bookId": 35,
  "userId": 3
}, {
  "rating": 5,
  "text": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "date": "27-Jun-2017",
  "bookId": 43,
  "userId": 3
}, {
  "rating": 3,
  "text": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "date": "25-Nov-2017",
  "bookId": 43,
  "userId": 2
}, {
  "rating": 3,
  "text": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  "date": "01-Jul-2017",
  "bookId": 22,
  "userId": 4
}, {
  "rating": 5,
  "text": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "date": "19-Nov-2017",
  "bookId": 11,
  "userId": 5
}, {
  "rating": 5,
  "text": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "date": "07-Dec-2017",
  "bookId": 22,
  "userId": 4
}, {
  "rating": 5,
  "text": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
  "date": "30-Nov-2017",
  "bookId": 48,
  "userId": 2
}, {
  "rating": 1,
  "text": "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
  "date": "20-Aug-2017",
  "bookId": 43,
  "userId": 4
}, {
  "rating": 4,
  "text": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "date": "07-May-2018",
  "bookId": 46,
  "userId": 1
}, {
  "rating": 4,
  "text": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "date": "22-Jan-2018",
  "bookId": 1,
  "userId": 3
}, {
  "rating": 4,
  "text": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "date": "07-Dec-2017",
  "bookId": 11,
  "userId": 2
}, {
  "rating": 4,
  "text": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  "date": "28-Jun-2017",
  "bookId": 13,
  "userId": 3
}, {
  "rating": 5,
  "text": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "date": "11-Oct-2017",
  "bookId": 12,
  "userId": 5
}, {
  "rating": 2,
  "text": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  "date": "29-Apr-2018",
  "bookId": 41,
  "userId": 2
}, {
  "rating": 5,
  "text": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  "date": "23-Feb-2018",
  "bookId": 32,
  "userId": 4
}, {
  "rating": 3,
  "text": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
  "date": "20-Jan-2018",
  "bookId": 25,
  "userId": 2
}, {
  "rating": 5,
  "text": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "date": "21-Jul-2017",
  "bookId": 27,
  "userId": 2
}, {
  "rating": 4,
  "text": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  "date": "03-Mar-2018",
  "bookId": 37,
  "userId": 4
}, {
  "rating": 5,
  "text": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  "date": "18-Jun-2017",
  "bookId": 45,
  "userId": 3
}, {
  "rating": 3,
  "text": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  "date": "22-May-2018",
  "bookId": 11,
  "userId": 3
}, {
  "rating": 2,
  "text": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "date": "26-Mar-2018",
  "bookId": 46,
  "userId": 3
}, {
  "rating": 2,
  "text": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  "date": "23-Mar-2018",
  "bookId": 1,
  "userId": 5
}, {
  "rating": 2,
  "text": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "date": "02-Apr-2018",
  "bookId": 14,
  "userId": 5
}, {
  "rating": 5,
  "text": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "date": "23-Jan-2018",
  "bookId": 33,
  "userId": 3
}, {
  "rating": 5,
  "text": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  "date": "03-Dec-2017",
  "bookId": 38,
  "userId": 1
}, {
  "rating": 2,
  "text": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  "date": "30-Apr-2018",
  "bookId": 40,
  "userId": 4
}, {
  "rating": 4,
  "text": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  "date": "03-May-2018",
  "bookId": 31,
  "userId": 5
}, {
  "rating": 5,
  "text": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "date": "09-Mar-2018",
  "bookId": 21,
  "userId": 3
}, {
  "rating": 5,
  "text": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  "date": "26-Apr-2018",
  "bookId": 46,
  "userId": 2
}, {
  "rating": 2,
  "text": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "date": "17-Nov-2017",
  "bookId": 28,
  "userId": 2
}, {
  "rating": 2,
  "text": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  "date": "18-Nov-2017",
  "bookId": 20,
  "userId": 4
}, {
  "rating": 1,
  "text": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "date": "29-Jul-2017",
  "bookId": 43,
  "userId": 2
}, {
  "rating": 1,
  "text": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "date": "27-Apr-2018",
  "bookId": 22,
  "userId": 2
}, {
  "rating": 4,
  "text": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "date": "04-Mar-2018",
  "bookId": 37,
  "userId": 3
}, {
  "rating": 1,
  "text": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "date": "08-Aug-2017",
  "bookId": 37,
  "userId": 1
}, {
  "rating": 1,
  "text": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
  "date": "28-Nov-2017",
  "bookId": 41,
  "userId": 5
}, {
  "rating": 4,
  "text": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  "date": "29-Apr-2018",
  "bookId": 20,
  "userId": 5
}, {
  "rating": 1,
  "text": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  "date": "04-Apr-2018",
  "bookId": 6,
  "userId": 4
}, {
  "rating": 3,
  "text": "In congue. Etiam justo. Etiam pretium iaculis justo.",
  "date": "06-Mar-2018",
  "bookId": 17,
  "userId": 4
}, {
  "rating": 4,
  "text": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
  "date": "04-Nov-2017",
  "bookId": 2,
  "userId": 5
}, {
  "rating": 2,
  "text": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "date": "03-Mar-2018",
  "bookId": 6,
  "userId": 1
}, {
  "rating": 5,
  "text": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "date": "03-Mar-2018",
  "bookId": 33,
  "userId": 1
}, {
  "rating": 3,
  "text": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
  "date": "19-Jan-2018",
  "bookId": 27,
  "userId": 2
}, {
  "rating": 2,
  "text": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  "date": "24-Apr-2018",
  "bookId": 24,
  "userId": 4
}, {
  "rating": 3,
  "text": "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  "date": "20-Apr-2018",
  "bookId": 8,
  "userId": 1
}, {
  "rating": 4,
  "text": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  "date": "01-May-2018",
  "bookId": 8,
  "userId": 2
}, {
  "rating": 5,
  "text": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "date": "09-Nov-2017",
  "bookId": 19,
  "userId": 2
}, {
  "rating": 4,
  "text": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "date": "30-Mar-2018",
  "bookId": 6,
  "userId": 5
}, {
  "rating": 5,
  "text": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  "date": "26-Nov-2017",
  "bookId": 12,
  "userId": 3
}, {
  "rating": 3,
  "text": "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
  "date": "12-Apr-2018",
  "bookId": 11,
  "userId": 4
}, {
  "rating": 4,
  "text": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "date": "16-Apr-2018",
  "bookId": 47,
  "userId": 3
}, {
  "rating": 4,
  "text": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "date": "09-Jun-2017",
  "bookId": 36,
  "userId": 2
}, {
  "rating": 2,
  "text": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  "date": "27-Apr-2018",
  "bookId": 12,
  "userId": 4
}, {
  "rating": 2,
  "text": "In congue. Etiam justo. Etiam pretium iaculis justo.",
  "date": "09-Feb-2018",
  "bookId": 5,
  "userId": 1
}, {
  "rating": 3,
  "text": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  "date": "14-Oct-2017",
  "bookId": 4,
  "userId": 5
}, {
  "rating": 1,
  "text": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  "date": "01-Oct-2017",
  "bookId": 46,
  "userId": 3
}, {
  "rating": 3,
  "text": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "date": "19-Oct-2017",
  "bookId": 29,
  "userId": 2
}, {
  "rating": 2,
  "text": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  "date": "01-Mar-2018",
  "bookId": 4,
  "userId": 4
}, {
  "rating": 5,
  "text": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "date": "15-Jul-2017",
  "bookId": 24,
  "userId": 1
}, {
  "rating": 1,
  "text": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  "date": "11-Dec-2017",
  "bookId": 33,
  "userId": 1
}, {
  "rating": 1,
  "text": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "date": "08-Mar-2018",
  "bookId": 23,
  "userId": 3
}, {
  "rating": 2,
  "text": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "date": "05-Aug-2017",
  "bookId": 2,
  "userId": 4
}, {
  "rating": 3,
  "text": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
  "date": "30-Jan-2018",
  "bookId": 44,
  "userId": 4
}, {
  "rating": 3,
  "text": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
  "date": "30-Jan-2018",
  "bookId": 6,
  "userId": 3
}, {
  "rating": 1,
  "text": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
  "date": "26-Dec-2017",
  "bookId": 19,
  "userId": 4
}, {
  "rating": 1,
  "text": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  "date": "24-Apr-2018",
  "bookId": 47,
  "userId": 3
}, {
  "rating": 1,
  "text": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  "date": "01-Jun-2018",
  "bookId": 50,
  "userId": 3
}, {
  "rating": 3,
  "text": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  "date": "06-May-2018",
  "bookId": 12,
  "userId": 1
}, {
  "rating": 3,
  "text": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
  "date": "24-Sep-2017",
  "bookId": 16,
  "userId": 5
}, {
  "rating": 5,
  "text": "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  "date": "29-Nov-2017",
  "bookId": 27,
  "userId": 2
}, {
  "rating": 5,
  "text": "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  "date": "18-Jul-2017",
  "bookId": 46,
  "userId": 4
}, {
  "rating": 4,
  "text": "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  "date": "25-Apr-2018",
  "bookId": 20,
  "userId": 1
}, {
  "rating": 1,
  "text": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
  "date": "18-Mar-2018",
  "bookId": 50,
  "userId": 5
}, {
  "rating": 2,
  "text": "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  "date": "18-Nov-2017",
  "bookId": 18,
  "userId": 2
}, {
  "rating": 4,
  "text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  "date": "13-Apr-2018",
  "bookId": 26,
  "userId": 4
}, {
  "rating": 3,
  "text": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  "date": "12-May-2018",
  "bookId": 18,
  "userId": 5
}, {
  "rating": 3,
  "text": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "date": "24-Mar-2018",
  "bookId": 19,
  "userId": 2
}, {
  "rating": 5,
  "text": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  "date": "18-Feb-2018",
  "bookId": 30,
  "userId": 3
}, {
  "rating": 5,
  "text": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "date": "12-Dec-2017",
  "bookId": 9,
  "userId": 5
}, {
  "rating": 2,
  "text": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  "date": "20-Aug-2017",
  "bookId": 14,
  "userId": 5
}, {
  "rating": 2,
  "text": "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  "date": "03-Feb-2018",
  "bookId": 41,
  "userId": 1
}, {
  "rating": 3,
  "text": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "date": "24-Nov-2017",
  "bookId": 25,
  "userId": 1
}, {
  "rating": 3,
  "text": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "date": "29-May-2018",
  "bookId": 44,
  "userId": 5
}, {
  "rating": 2,
  "text": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "date": "05-Nov-2017",
  "bookId": 28,
  "userId": 3
}, {
  "rating": 3,
  "text": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  "date": "27-Feb-2018",
  "bookId": 23,
  "userId": 3
}, {
  "rating": 5,
  "text": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
  "date": "13-Aug-2017",
  "bookId": 37,
  "userId": 4
}, {
  "rating": 1,
  "text": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
  "date": "29-Oct-2017",
  "bookId": 47,
  "userId": 2
}, {
  "rating": 4,
  "text": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
  "date": "12-Mar-2018",
  "bookId": 41,
  "userId": 4
}, {
  "rating": 4,
  "text": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  "date": "30-Jul-2017",
  "bookId": 33,
  "userId": 1
}, {
  "rating": 2,
  "text": "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
  "date": "17-Oct-2017",
  "bookId": 38,
  "userId": 2
}, {
  "rating": 3,
  "text": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  "date": "20-Dec-2017",
  "bookId": 46,
  "userId": 3
}, {
  "rating": 2,
  "text": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
  "date": "07-Nov-2017",
  "bookId": 32,
  "userId": 5
}, {
  "rating": 1,
  "text": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  "date": "13-Mar-2018",
  "bookId": 19,
  "userId": 5
}, {
  "rating": 4,
  "text": "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
  "date": "03-Mar-2018",
  "bookId": 28,
  "userId": 4
}, {
  "rating": 3,
  "text": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  "date": "21-Jan-2018",
  "bookId": 37,
  "userId": 2
}, {
  "rating": 5,
  "text": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  "date": "23-Jul-2017",
  "bookId": 11,
  "userId": 4
}, {
  "rating": 1,
  "text": "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
  "date": "08-Feb-2018",
  "bookId": 3,
  "userId": 3
}, {
  "rating": 3,
  "text": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
  "date": "17-Feb-2018",
  "bookId": 20,
  "userId": 1
}]

module.exports = { userData, bookData, authorData, reviewData }