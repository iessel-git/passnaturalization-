 const questions = [
  {
    id: 1,
    question_en: "What is the supreme law of the land?",
    question_twi: "Dɛn ne mmara titiriw a ɛda so wɔ ɔman no mu?",
    answer_en: "The Constitution",
  },
  {
    id: 2,
    question_en: "What does the Constitution do?",
    question_twi: "Constitution no yɛ dɛn?",
    answer_en: "Sets up the government, defines the government, protects basic rights of Americans",
  },
  {
    id: 3,
    question_en: "The idea of self-government is in the first three words of the Constitution. What are these words?",
    question_twi: "Nnipa ara wotumi di wɔn ho so no, ɛda ho adi wɔ Constitution no mu nsɛm abiɛsa a ɛdi kan no mu. Nsɛm no ne dɛn?",
    answer_en: "We the People",
  },
  {
    id: 4,
    question_en: "What is an amendment?",
    question_twi: "Dɛn ne amendment?",
    answer_en: "A change (to the Constitution), an addition (to the Constitution)",
  },
  {
    id: 5,
    question_en: "What do we call the first ten amendments to the Constitution?",
    question_twi: "Yɛfrɛ Constitution no mmara nsakrae a ɛdi kan du no dɛn?",
    answer_en: "The Bill of Rights",
  },
  {
    id: 6,
    question_en: "What is one right or freedom from the First Amendment?",
    question_twi: "Dɛn ne baako a wopɛ no anaa ahofadi a ɛwɔ First Amendment no mu?",
    answer_en: "Speech, religion, assembly, press, petition the government",
  },
  {
    id: 7,
    question_en: "How many amendments does the Constitution have?",
    question_twi: "Constitution no wom mmara nsakrae a ɛyɛɛ dodo?",
    answer_en: "Twenty-seven (27)",
  },
  {
    id: 8,
    question_en: "What did the Declaration of Independence do?",
    question_twi: "Declaration of Independence yɛɛ dɛn?",
    answer_en: "Announced our independence (from Great Britain), declared our independence, said that the United States is free",
  },
  {
    id: 9,
    question_en: "What are two rights in the Declaration of Independence?",
    question_twi: "Dɛn ne mmara abien a ɛwɔ Declaration of Independence no mu?",
    answer_en: "Life, liberty, pursuit of happiness",
  },
  {
    id: 10,
    question_en: "What is freedom of religion?",
    question_twi: "Dɛn ne som ho ahofadi?",
    answer_en: "You can practice any religion, or not practice a religion.",
  },
  {
    id: 11,
    question_en: "What is the economic system in the United States?",
    question_twi: "Dɛn na yɛde di dwuma wɔ United States mu wɔ sika mu?",
    answer_en: "Capitalist economy, market economy",
  },
  {
    id: 12,
    question_en: "What is the “rule of law”?",
    question_twi: "Dɛn ne “mmara so tumi”?",
    answer_en: "Everyone must follow the law. Leaders must obey the law. Government must obey the law. No one is above the law.",
  },
  {
    id: 13,
    question_en: "Name one branch or part of the government.",
    question_twi: "Ka aban mu akuw anaa baako din.",
    answer_en: "Congress, President, the courts",
  },
  {
    id: 14,
    question_en: "What stops one branch of government from becoming too powerful?",
    question_twi: "Dɛn na ɛbɔ mmɔden sɛ ɛremma aban mu kurow biara nnya tumi kɛse?",
    answer_en: "Checks and balances, separation of powers",
  },
  {
    id: 15,
    question_en: "Who is in charge of the executive branch?",
    question_twi: "Hena na ɔhwɛ executive branch no so?",
    answer_en: "The President",
  },
  {
    id: 16,
    question_en: "Who makes federal laws?",
    question_twi: "Hena na ɔyɛ federal mmara?",
    answer_en: "Congress, Senate and House of Representatives, U.S. or national legislature",
  },
  {
    id: 17,
    question_en: "What are the two parts of the U.S. Congress?",
    question_twi: "Dɛn ne U.S. Congress no akuw mmienu?",
    answer_en: "The Senate and House of Representatives",
  },
  {
    id: 18,
    question_en: "How many U.S. Senators are there?",
    question_twi: "Senators a ɛwɔ U.S. no dodow yɛ sɛn?",
    answer_en: "One hundred (100)",
  },
  {
    id: 19,
    question_en: "We elect a U.S. Senator for how many years?",
    question_twi: "Yɛbɔ U.S. Senator din sɛ ɔbɛyɛ mfeɛ sɛn?",
    answer_en: "Six (6)",
  },
  {
    id: 20,
    question_en: "Who is one of your state’s U.S. Senators now?",
    question_twi: "Hena na ɔyɛ U.S. Senator fi w’asase so seesei?",
    answer_en: "Answers will vary. [Residents of the District of Columbia and U.S. territories should answer that D.C. (or the territory where the applicant lives) has no U.S. Senators.]",
  }
  // Append to your existing questions array

questions.push(
  {
    id: 21,
    question_en: "The House of Representatives has how many voting members?",
    question_twi: "House of Representatives no wɔfoɔ a wɔtumi abɔ aba dodow sɛn?",
    answer_en: "Four hundred thirty-five (435)"
  },
  {
    id: 22,
    question_en: "We elect a U.S. Representative for how many years?",
    question_twi: "Yɛpaw U.S. Representative sɛ ɔbɛyɛ mfeɛ sɛn?",
    answer_en: "Two (2)"
  },
  {
    id: 23,
    question_en: "Name your U.S. Representative.",
    question_twi: "Ka wo U.S. Representative no din.",
    answer_en: "Answers will vary. [Find your representative at https://www.house.gov.]"
  },
  {
    id: 24,
    question_en: "Who does a U.S. Senator represent?",
    question_twi: "U.S. Senator no gyina hɔ ma hena?",
    answer_en: "All people of the state"
  },
  {
    id: 25,
    question_en: "Why do some states have more Representatives than other states?",
    question_twi: "Adɛn nti na aman bi wɔ Representatives dodow sen aman foforo?",
    answer_en: "Because of the state’s population"
  },
  {
    id: 26,
    question_en: "We elect a President for how many years?",
    question_twi: "Yɛpaw President sɛ ɔbɛyɛ mfeɛ sɛn?",
    answer_en: "Four (4)"
  },
  {
    id: 27,
    question_en: "In what month do we vote for President?",
    question_twi: "Bosome bɛn mu na yɛbɔ President aba?",
    answer_en: "November"
  },
  {
    id: 28,
    question_en: "What is the name of the President of the United States now?",
    question_twi: "Dɛn ne United States President din seesei?",
    answer_en: "Joe Biden (as of 2024)"
  },
  {
    id: 29,
    question_en: "What is the name of the Vice President of the United States now?",
    question_twi: "Dɛn ne Vice President din wɔ United States seesei?",
    answer_en: "Kamala Harris (as of 2024)"
  },
  {
    id: 30,
    question_en: "If the President can no longer serve, who becomes President?",
    question_twi: "Sɛ President no ntumi nsa so bio a, hena na ɔbɛyɛ President?",
    answer_en: "The Vice President"
  },
  {
    id: 31,
    question_en: "If both the President and the Vice President can no longer serve, who becomes President?",
    question_twi: "Sɛ President ne Vice President no nyinaa ntumi nsa so bio a, hena na ɔbɛyɛ President?",
    answer_en: "The Speaker of the House"
  },
  {
    id: 32,
    question_en: "Who is the Commander in Chief of the military?",
    question_twi: "Hena na ɔyɛ tumi wura wɔ ɔkofoɔ mu (Commander in Chief)?",
    answer_en: "The President"
  },
  {
    id: 33,
    question_en: "Who signs bills to become laws?",
    question_twi: "Hena na ɔkyerɛw ne din gua mmara so?",
    answer_en: "The President"
  },
  {
    id: 34,
    question_en: "Who vetoes bills?",
    question_twi: "Hena na ɔto mmara nsɛm gu?",
    answer_en: "The President"
  },
  {
    id: 35,
    question_en: "What does the President’s Cabinet do?",
    question_twi: "Dɛn na President Cabinet no yɛ?",
    answer_en: "Advises the President"
  },
  {
    id: 36,
    question_en: "What are two Cabinet-level positions?",
    question_twi: "Ka Cabinet-level mpɔtam abien din.",
    answer_en: "Secretary of Agriculture, Secretary of Defense (or others like Education, State, etc.)"
  },
  {
    id: 37,
    question_en: "What does the judicial branch do?",
    question_twi: "Dɛn na mmara atifi (judicial branch) no yɛ?",
    answer_en: "Reviews laws, explains laws, resolves disputes, decides if a law goes against the Constitution"
  },
  {
    id: 38,
    question_en: "What is the highest court in the United States?",
    question_twi: "Dɛn ne abɛn a ɛda so wɔ United States mu?",
    answer_en: "The Supreme Court"
  },
  {
    id: 39,
    question_en: "How many justices are on the Supreme Court?",
    question_twi: "Justices dodow a ɛwɔ Supreme Court no mu yɛ sɛn?",
    answer_en: "Nine (9)"
  },
  {
    id: 40,
    question_en: "Who is the Chief Justice of the United States now?",
    question_twi: "Hena na ɔyɛ Chief Justice wɔ United States seesei?",
    answer_en: "John Roberts (as of 2024)"
  }
// Append to your existing questions array

questions.push(
  {
    id: 41,
    question_en: "Under our Constitution, some powers belong to the federal government. What is one power of the federal government?",
    question_twi: "Ɔman mmra titiriw no ase, tumi bi wɔ federal aban nsa mu. Bɔ tumi baako din.",
    answer_en: "To print money"
  },
  {
    id: 42,
    question_en: "Under our Constitution, some powers belong to the states. What is one power of the states?",
    question_twi: "Ɔman mmra titiriw no ase, tumi bi wɔ aman mu. Bɔ tumi baako din a ɛwɔ aman mu.",
    answer_en: "Provide schooling and education"
  },
  {
    id: 43,
    question_en: "Who is the Governor of your state now?",
    question_twi: "Hena na ɔyɛ wo state Governor seesei?",
    answer_en: "Answers will vary. [Find at https://www.usa.gov/state-governor.]"
  },
  {
    id: 44,
    question_en: "What is the capital of your state?",
    question_twi: "Dɛn ne wo state no capital?",
    answer_en: "Answers will vary. [Example: Sacramento for California.]"
  },
  {
    id: 45,
    question_en: "What are the two major political parties in the United States?",
    question_twi: "Ka aban akuw abien titiriw a ɛwɔ United States mu.",
    answer_en: "Democratic and Republican"
  },
  {
    id: 46,
    question_en: "What is the political party of the President now?",
    question_twi: "President a ɔwɔ hɔ seesei no yɛ aban akuw bɛn mu?",
    answer_en: "Democratic Party (as of 2024)"
  },
  {
    id: 47,
    question_en: "What is the name of the Speaker of the House of Representatives now?",
    question_twi: "Dɛn ne House of Representatives no Speaker din seesei?",
    answer_en: "Mike Johnson (as of 2024)"
  },
  {
    id: 48,
    question_en: "There are four amendments to the Constitution about who can vote. Describe one of them.",
    question_twi: "Mmara titiriw no mu wɔ nsakrae anan (4) a ɛfa hena na ɔtumi abɔ aba ho. Kyerɛkyerɛ baako.",
    answer_en: "Citizens 18 and older can vote"
  },
  {
    id: 49,
    question_en: "What is one responsibility that is only for United States citizens?",
    question_twi: "Bɔ dwuma baako din a ɛyɛ U.S. nnipa nkutoo dea.",
    answer_en: "Serve on a jury"
  },
  {
    id: 50,
    question_en: "Name one right only for United States citizens.",
    question_twi: "Ka ɔhaw baako a ɛyɛ United States nnipa nkutoo dea.",
    answer_en: "Vote in a federal election"
  },
  {
    id: 51,
    question_en: "What are two rights of everyone living in the United States?",
    question_twi: "Ka nnɛma abien a obiara a ɔte United States mu nya ho kwan.",
    answer_en: "Freedom of speech and freedom of religion"
  },
  {
    id: 52,
    question_en: "What do we show loyalty to when we say the Pledge of Allegiance?",
    question_twi: "Sɛ yɛka Pledge of Allegiance a, dɛn na yɛda nokwaredi adi kyerɛ?",
    answer_en: "The United States and the flag"
  },
  {
    id: 53,
    question_en: "What is one promise you make when you become a United States citizen?",
    question_twi: "Dɛn na wopɛ sɛ woka ho bɔ sɛ wobɛyɛ U.S. citizen?",
    answer_en: "Be loyal to the United States"
  },
  {
    id: 54,
    question_en: "How old do citizens have to be to vote for President?",
    question_twi: "Ɛsɛ sɛ U.S. nipa dɔ mfeɛ sɛn ansa na ɔbɛtumi abɔ aba ama President?",
    answer_en: "Eighteen (18) and older"
  },
  {
    id: 55,
    question_en: "What are two ways that Americans can participate in their democracy?",
    question_twi: "Ka kwan abien a ɛma Amerikani no betumi abɛka wɔn democracy mu ho.",
    answer_en: "Vote and join a political party"
  },
  {
    id: 56,
    question_en: "When is the last day you can send in federal income tax forms?",
    question_twi: "Da bɛn na ɛyɛ da a ɛtɔ so a ɛyɛ de kɔma federal income tax form?",
    answer_en: "April 15"
  },
  {
    id: 57,
    question_en: "When must all men register for the Selective Service?",
    question_twi: "Bere bɛn mu na mmarima nyinaa bɛkyerɛ wɔn ho wɔ Selective Service mu?",
    answer_en: "At age eighteen (18)"
  },
  {
    id: 58,
    question_en: "What is one reason colonists came to America?",
    question_twi: "Bɔ asɛm baako a ɛmaa nnipa fii aman no baa America.",
    answer_en: "Freedom"
  },
  {
    id: 59,
    question_en: "Who lived in America before the Europeans arrived?",
    question_twi: "Hena na na ɔte America ansa na Aburokyirefoɔ no bɛba?",
    answer_en: "American Indians"
  },
  {
    id: 60,
    question_en: "What group of people was taken to America and sold as slaves?",
    question_twi: "Mmarima ne mmea bɛn na wɔde kɔɔ America na wɔtɔn wɔn sɛ nkoa?",
    answer_en: "Africans"
  }
// Continue appending to your questions array

questions.push(
  {
    id: 61,
    question_en: "Why did the colonists fight the British?",
    question_twi: "Adɛn nti na coloni nsɛm no kɔɔ ko tiaa Britishfoɔ?",
    answer_en: "Because of high taxes and lack of self-government"
  },
  {
    id: 62,
    question_en: "Who wrote the Declaration of Independence?",
    question_twi: "Hena na ɔkyerɛwee Declaration of Independence no?",
    answer_en: "Thomas Jefferson"
  },
  {
    id: 63,
    question_en: "When was the Declaration of Independence adopted?",
    question_twi: "Bere bɛn na wɔgyee Declaration of Independence no tom?",
    answer_en: "July 4, 1776"
  },
  {
    id: 64,
    question_en: "There were 13 original states. Name three.",
    question_twi: "Na ɛwɔ state 13 a na ɛyɛ deɛ ɛdi kan. Bɔ state mmiɛnsa din.",
    answer_en: "New York, New Jersey, Virginia"
  },
  {
    id: 65,
    question_en: "What happened at the Constitutional Convention?",
    question_twi: "Dɛn na esii wɔ Constitutional Convention no mu?",
    answer_en: "The Constitution was written"
  },
  {
    id: 66,
    question_en: "When was the Constitution written?",
    question_twi: "Bere bɛn na wɔkyerɛwee Constitution no?",
    answer_en: "1787"
  },
  {
    id: 67,
    question_en: "The Federalist Papers supported the passage of the U.S. Constitution. Name one of the writers.",
    question_twi: "Federalist Papers no boaa ma wɔfaa U.S. Constitution no. Bɔ ɔkyerɛwfoɔ baako din.",
    answer_en: "James Madison"
  },
  {
    id: 68,
    question_en: "What is one thing Benjamin Franklin is famous for?",
    question_twi: "Bɔ Benjamin Franklin din fa adeɛ baako ho a ɛmaa ɔyɛɛ ɔdikanfoɔ.",
    answer_en: "U.S. diplomat"
  },
  {
    id: 69,
    question_en: "Who is the 'Father of Our Country'?",
    question_twi: "Hena na wɔfrɛ no 'Ɔman Pa Papa'?",
    answer_en: "George Washington"
  },
  {
    id: 70,
    question_en: "Who was the first President?",
    question_twi: "Hena na ɔyɛɛ President a ɔdi kan?",
    answer_en: "George Washington"
  },
  {
    id: 71,
    question_en: "What territory did the United States buy from France in 1803?",
    question_twi: "Wɔtɔɔ he asase fi France wɔ 1803 mu?",
    answer_en: "The Louisiana Territory"
  },
  {
    id: 72,
    question_en: "Name one war fought by the United States in the 1800s.",
    question_twi: "Bɔ ko baako din a United States kɔeɛ wɔ 1800s mu.",
    answer_en: "The Civil War"
  },
  {
    id: 73,
    question_en: "Name the U.S. war between the North and the South.",
    question_twi: "Bɔ U.S. ko din a ɛkɔɔ so wɔ North ne South ntam.",
    answer_en: "The Civil War"
  },
  {
    id: 74,
    question_en: "Name one problem that led to the Civil War.",
    question_twi: "Bɔ ɔhaw baako din a ɛde kɔɔ Civil War no mu.",
    answer_en: "Slavery"
  },
  {
    id: 75,
    question_en: "What was one important thing that Abraham Lincoln did?",
    question_twi: "Dɛn na Abraham Lincoln yɛɛ a ɛyɛ ahemfoɔ adwuma?",
    answer_en: "Freed the slaves"
  },
  {
    id: 76,
    question_en: "What did the Emancipation Proclamation do?",
    question_twi: "Dɛn na Emancipation Proclamation yɛɛ?",
    answer_en: "Freed the slaves"
  },
  {
    id: 77,
    question_en: "What did Susan B. Anthony do?",
    question_twi: "Dɛn na Susan B. Anthony yɛɛ?",
    answer_en: "Fought for women’s rights"
  },
  {
    id: 78,
    question_en: "Name one war fought by the United States in the 1900s.",
    question_twi: "Bɔ ko baako din a U.S. kɔeɛ wɔ 1900s mu.",
    answer_en: "World War II"
  },
  {
    id: 79,
    question_en: "Who was President during World War I?",
    question_twi: "Hena na ɔyɛɛ President bere a World War I rekɔ so?",
    answer_en: "Woodrow Wilson"
  },
  {
    id: 80,
    question_en: "Who was President during the Great Depression and World War II?",
    question_twi: "Hena na ɔyɛɛ President bere a Great Depression ne World War II rekɔ so?",
    answer_en: "Franklin Roosevelt"
  }
// Continue appending to your questions array

questions.push(
  {
    id: 81,
    question_en: "Who did the United States fight in World War II?",
    question_twi: "Hena na United States kɔɔ ko tiaa wɔ World War II mu?",
    answer_en: "Japan, Germany, and Italy"
  },
  {
    id: 82,
    question_en: "Before he was President, Eisenhower was a general. What war was he in?",
    question_twi: "Na ɛnyɛ ansa na ɔbɛyɛ President no, Eisenhower yɛɛ general. Ɔkɔɔ ko bɛn?",
    answer_en: "World War II"
  },
  {
    id: 83,
    question_en: "During the Cold War, what was the main concern of the United States?",
    question_twi: "Bere a Cold War rekɔ so no, dɛn na na ɛyɛ U.S. adwene titiriw?",
    answer_en: "Communism"
  },
  {
    id: 84,
    question_en: "What movement tried to end racial discrimination?",
    question_twi: "Dɛn na boaa ma wɔmaa neɛ wɔfrɛ no racial discrimination no tɔɔ mu?",
    answer_en: "The Civil Rights Movement"
  },
  {
    id: 85,
    question_en: "What did Martin Luther King, Jr. do?",
    question_twi: "Dɛn na Martin Luther King, Jr. yɛɛ?",
    answer_en: "Fought for civil rights"
  },
  {
    id: 86,
    question_en: "What major event happened on September 11, 2001, in the United States?",
    question_twi: "Dɛn na esii U.S. September 11, 2001?",
    answer_en: "Terrorists attacked the United States"
  },
  {
    id: 87,
    question_en: "Name one American Indian tribe in the United States.",
    question_twi: "Bɔ American Indian tribe baako din a ɛwɔ U.S.",
    answer_en: "Cherokee"
  },
  {
    id: 88,
    question_en: "Name one of the two longest rivers in the United States.",
    question_twi: "Bɔ nsu baako din a ɛyɛ tenten sen biara wɔ U.S.",
    answer_en: "Mississippi River"
  },
  {
    id: 89,
    question_en: "What ocean is on the West Coast of the United States?",
    question_twi: "Dɛn na ɛyɛ po a ɛwɔ U.S. West Coast?",
    answer_en: "Pacific Ocean"
  },
  {
    id: 90,
    question_en: "What ocean is on the East Coast of the United States?",
    question_twi: "Dɛn na ɛyɛ po a ɛwɔ U.S. East Coast?",
    answer_en: "Atlantic Ocean"
  },
  {
    id: 91,
    question_en: "Name one U.S. territory.",
    question_twi: "Bɔ U.S. territory baako din.",
    answer_en: "Puerto Rico"
  },
  {
    id: 92,
    question_en: "Name one state that borders Canada.",
    question_twi: "Bɔ state baako din a ɛbɛn Canada.",
    answer_en: "New York"
  },
  {
    id: 93,
    question_en: "Name one state that borders Mexico.",
    question_twi: "Bɔ state baako din a ɛbɛn Mexico.",
    answer_en: "California"
  },
  {
    id: 94,
    question_en: "What is the capital of the United States?",
    question_twi: "Dɛn na ɛyɛ United States capital?",
    answer_en: "Washington, D.C."
  },
  {
    id: 95,
    question_en: "Where is the Statue of Liberty?",
    question_twi: "Statue of Liberty wɔ he?",
    answer_en: "New York Harbor"
  },
  {
    id: 96,
    question_en: "Why does the flag have 13 stripes?",
    question_twi: "Adɛn nti na flag no wɔ stripes 13?",
    answer_en: "Because there were 13 original colonies"
  },
  {
    id: 97,
    question_en: "Why does the flag have 50 stars?",
    question_twi: "Adɛn nti na flag no wɔ stars 50?",
    answer_en: "Because there are 50 states"
  },
  {
    id: 98,
    question_en: "What is the name of the national anthem?",
    question_twi: "Dɛn na ɛyɛ U.S. national anthem din?",
    answer_en: "The Star-Spangled Banner"
  },
  {
    id: 99,
    question_en: "When do we celebrate Independence Day?",
    question_twi: "Da bɛn na yɛdi Independence Day?",
    answer_en: "July 4"
  },
  {
    id: 100,
    question_en: "Name two national U.S. holidays.",
    question_twi: "Bɔ U.S. afahyɛ mmienu din.",
    answer_en: "Thanksgiving and Independence Day"
  }

];
