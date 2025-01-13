for (a=0; a<5; a++){
    console.log('welcom')
}

//while
i=0
while (i < 10) {
  i++;
  console.log(i)
}

const generateEmail=(name, domain) => {
  const email = name + domain;
  return email;
}
console.log('Exercise 4 Result:', generateEmail("johnsmith", "@example.com"));