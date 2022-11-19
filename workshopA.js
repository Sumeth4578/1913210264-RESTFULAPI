let user = {
    name: "Sumeth",
    nickname: "Touch",
    hobby: "Sleep",
    address: "Pattanakarn 39",
    province:{
        province:"Bangkok",
        postcode:"10250"
    }
};

const showData1 = ({nickname,hobby,province:{postcode}}) => {
    return`"My nickname is ${nickname}, My hobby is ${hobby} 
and my postcode is ${postcode}"
    `};

    console.log(showData1(user));
    

