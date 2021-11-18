// Options the user could type in
const BasicQuestion = [
//1
["hii", "hello","hi","good morning ", "good afternoon","hyy","hiii","hey","hy"],
//2
["how are you","how are you doing","are you fine"],
//3
["who are you","what's your name","what is your name","What is your name","What's your name","Who are you","How may I call you","how may i call you"],
//4 
["can you help me","can you please help me","what is your functionality","Can you help me"],
//5
["eligibility criteria","Eligibility criteria"],
//6
["number of seats in cse","no. of seats in cse","no. of seats in CSE","no. of seats available in cse","seats available in cse","no of seats available in cse","seats available in cse","Seats in cse"],
//7
["number of seats in ce","no. of seats in ce","no. of seats in CE","no. of seats available in ce","seats available in ce","no of seats available in CE","seats available in ce","seats in CE","Seats in ce"],
//8
["number of seats in it","no. of seats in it","no. of seats in IT","no. of seats available in it","seats available in it","seats available in it","seats in IT"],
//9
["department wise seats"],
//10
["admission procedure"],
//11
["admission procedure branch wise","branch wise admission procedure"],
//12
["admission procedure in btech"],
//13
["fees for engineering","fees structure","fees structure of charusat","fees structure for charusat"],
//14
["fees for computer science enginnering"],
//15
["fees for btech"],
//16
["branchwise fees"],
//17
["fees"],
//18
["hostel facility","accomodation","hostel"],
//19
["boys hostel","hostel facility for boys","hostel for boys"],
//20
["girls hostel","hostel facility for girls","hostel for girls"],
//21
["last year cutoff for btech cse","cse last year cut off","ending rank for admission in cse branch","ending rank for admission in cse"],
//22
["last year cutoff for btech ce","ce last year cut off","ending rank for admission in ce branch","ending rank for admission in ce"],
//23
["last year cutoff for btech it","it last year cut off","ending rank for admission in it branch","ending rank for admission in it"],
//24
["last year cutoff for btech ece","ec last year cut off","ending rank for admission in ec branch","ending rank for admission in ece","ending rank for admission in ece branch"],
//25
["last year cutoff for all branches"],
//26
["last year cutoff"],
//27
["food facility","mess facility","food","canteen","Lunch"],
//28
["which are branches in depstar","depstar branches","branches in depstar","number of branches in depstar","which are the branches are available in depstar","available branches in depstar"],
//29
["which are branches in cspit","cspit branches","branches in cspit","number of branches in cspit","which are the branches are available in cspit","available branches in cspit"],
//30
["admission contact number" , "contact number ","mobile number","to whom we can contact for admission related query"],
//31
["transportation facility", "bus facility", "bus","transportation","bus charges","bus facility charge"],
//32
["address of charusat","address","where charusat is located","where is charusat","where charusat is situated"],
//33
["teaching facility","professor"],
//34
["what are labs available there","lab","lab facility","labs available"],
//35
["personal guidance for admission","guide for admission","book a slot for councelling ", "councelling"],
//36
["which cells and centers present in charusat","What centers are available in charusat","Which centers are available in charusat","which cells and centers are there in charusat"],
//37
["percentage placement","company","placement","placement percentage","what are placement percentage"],
//38
["recruitment list"],
//39
["who made you", "who created you"],
//40
["scholarship", "scholarship for gujarat student","scholarship for ews",],

]

// Possible responses, in corresponding order



const replies = [
//1
["hey there ", "hi","hello","hey there!"], 
//2
["I am fine. What about you ?","I am good. How may I help you ?","I am great and What about you"],
//3
["My name is sophia. I can help you in assisting about the general informations regarding to Charusat university."],
//4
["Yes! , I can help to get the information about CHARUSAT university in best possible way !"],
//5
["for engineering , minimum 45 percentage in PCM for more detail click on Eligibility"],
//6
["number of seats in CSE are 120 in depstar and 60 in CSPIT"],
//7
["number of seats in CE are 120 in depstar and 120 in CSPIT"],
//8
["number of seats in IT are 60 in depstar and 120 in CSPIT"],
//9
["for department wise seat distribution visit "],
//10
["visit on admission to get information college wise"],
//11
["visit on admission to get information branch wise"],
//12
["for engineering , minimum 45% in PCM for information click on CSPIT"],
//13
["For engineering , it varies from 98 thousand to 1 lakh 28 thousand for more detail visit official charusat website. "],
//14
["fees for computer science engineering is 1 lakh 28 thousand in CSPIT and 98 thousand in Depstar For branchwise fees click on Fee Structure "],
//15
["For engineering , it varies from 98 thousand to 1 lakh 28  thousand for more detail visit Fee Structure "],
//16
["For branchwise fees click on Fee Structure "],
//17
["Fees varies from college to college please click on Fee structure "],
//18
["type boys/girls hostel for information about individual hostel"],
//19
["Boy's hostels are outsourced at 8 different locations within a radius of 1 km. These hostels have a housing capacity for about 1500 boys. AC as well Non AC accommodation is available at these Hostels. Facilities available at these hostels include Dining hall, Sports, reading room, TV room, Wi-Fi connectivity and transport facilities to the campus and back. Guest rooms are also available.For further information contact Jignesh Patel – 98794 38045."],
//20
["CHARUSAT campus has 4 Girls’ hostels. These hostels have a housing capacity for 1200 girls. AC as well Non AC accommodation is available at these Hostels."],
//21
["for general category 1153 to 2112 in CSPIT and 1319 to 2968 in Depstar"],
//22
["for general category 1659 to 2486 in CSPIT and 1910 to 3472 in Depstar"],
//23
["for general category 1795 to 3124 in CSPIT and 2210 to 3640 in Depstar"],
//24
["for general category 7578 to 32785 in CSPIT "],
//25
["For more information click on ACPC"],
//26
["For every branch cutoff click on ACPC"],
//27
["Mess is available for breakfast, lunch and dinner in the campus at economical rate also canteens for fast food are available."],
//28
["There are 3 branches in Depstar. They are CSE, CE, IT."],
//29
["There are 7 branches in C S P I T. They are CE, CSE, IT, ECE, Civil, Mechanical, Electric."],
//30
["You can call us on 02697265011 or whatsapp text us on 98259 61830"],
//31
["charusat has entered into contracts for providing the commuting transport facilities to the students. For further information contact Dharmendrabhai Patel – 02697 265018. visit https://www.charusat.ac.in/transportation.php"],
//32
["Offside Nadiad-Petlad Highway, Changa Pin code 388421 Anand, Gujarat, India"],
//33
["Over 600 plus highly qualified professor are present in charusat to guide and enlighten every steps taken by students"],
//34
["Over 18 plus patents , 1500 plus software licences , 30 plus highly advance research labs are available"],
//35
["Click on personal assistance in official website to book an online meeting with personal guide"],
//36
["There are more than 22 active cells and centers are available to develop overall personality of individual. for more detail click on  Cells & Centers"],
//37
["There is 100% placement in CHARUSAT. There is dedicated training and placement cell which train students for industry level qualification"],
//38
["for brief detail information about placement click on Placement"],
//39
["I have been developed by Jeet , Meet , Vatsal"],
//40 
["There are plenty of scholarship available please click on scholarship for more detail"],






]

// Random for any other user input

const alternative = [
["Sorry , I don't understand please call us on 02697265011"],
["Sorry , I don't understand please click on email "],
["Sorry , I don't understand please visit us on admission"],
["Sorry , I don't understand please whatsapp text us on 98259 61830"],
]

// Whatever else you want :)

//const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]