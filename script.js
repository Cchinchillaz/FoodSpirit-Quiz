let storyIndex = 0;
let e = 0;
let s = 0;
let t = 0;
let j = 0;
let choices = ['a','i','n','f','a','a','a','p','i','a','a','n','f','p','i','n','a','f','p','a','a','a'];
let result = ["I","N","F","P"];
let resultType = "";
let story;

// add listener
document.getElementById('start-button').addEventListener('click', function() {
  document.getElementById('home-page').style.display = 'none';
  document.getElementById('story-page').style.display = 'block';
});
function playQuiz(){
  setStory();
  showCurrentStory();

  function setStory(){
    story = [
    { dialog: "เสียงกริ่งดังขึ้น บอกเวลาเลิกเรียน คุณกำลังจะกลับบ้าน แต่แล้วดันเห็นใบปลิวใบหนึ่งตกอยู่ที่ทางเดิน",
      choices: [">>"],
      value: ['a'],
    },
    
    { dialog: "ทันใดนั้นเองคุณได้ยินเสียงดังมาจากในห้อง ซึ่งคาดว่าเป็นสถานที่จัดงาน",
      choices: ["น่าสนุกจัง ต้องมีของอร่อยเยอะแน่เลย", "ดูวุ่นวายจัง แต่ก็อยากกิน ทำยังไงดี"],
      value: ['e','i'],
    },

    { dialog: "คุณเปิดประตูเข้าไป แต่ในห้องกลับมีหลุมดำขนาดใหญ่ คุณกำลังโดนดูดเข้าไป!",
      choices: ["นี่เรากำลังจะตายรึเปล่าเนี่ยย!", "หลุมดำมาอยู่ที่นี่ได้ยังไง นี่เป็นความฝันแน่ๆ!"],
      value: ['n','s'],
    },

    { dialog: "…คุณโผล่มาอีกโลกหนึ่ง ซึ่งเต็มไปด้วยกองขยะ คุณได้เหลือบไปพบกับ แตงกวาเน่าที่ดูตายด้านตัวหนึ่ง",
      choices: ["ทำไมแตงกวานั่นถึงได้ดูย่ำแย่ขนาดนั้นกันนะ?", "นั่นมันตัวอะไรน่ะ แตงกวาหรอ?"],
      value: ['f','t'],
    },

    { dialog: "เห้อ “ฉันติดอยู่ในคุกขยะนี้มากี่ปีกันแล้วนะ” แตงกวาบ่น ",
      choices: ["เกิดอะไรขึ้นน่ะ นายติดอยู่ในนี้ได้ยังไงกัน"],
      value: ['a'],
    },

    { dialog: "ในโลกอาหารแห่งนี้น่ะ ทุกคนจะมีสิ่งที่เรียกว่า ออร่าความอร่อยอยู่ ซึ่งเราสามารถผสมออร่าจากอาหารตัวอื่นๆ แล้วบันทึกเป็นเมนูของตัวเองได้ ค่าความอร่อยก็จะเปลี่ยนแปลงด้วย",
      choices: [">>"],
      value: ['a'],
    },

    { dialog: "“ทุกสิ้นเดือนน่ะ จะมีการจัดอันดับสุดยอดอาหารด้วยล่ะ อันดับสูงๆ ได้เงินเยอะเลยน้า ...แต่ว่า ฉันน่ะเป็นแตงกวา ใครๆก็ไม่ชอบกินแตงกวา อันดับรั้งท้ายสุดๆเลยล่ะ”",
      choices: ["ใครว่า! ฉันชอบกินแตงกวานะ", "จริงของนาย ฉันไม่ชอบกินแตงกวาเลย"],
      value: ['a','a'],
    },

    { dialog: "อาหารที่อร่อยไม่ถึงเกณฑ์จะต้องติดอยู่ในคุกอย่างที่เห็นเนี่ยแหละ ผู้คุมไม่ยอมให้ฉันออกไปเลย",
      choices: ["ถ้าลองแอบๆหนีตอนนี้ อาจจะออกไปได้นะ", "มาวางแผนการแหกคุกกันเถอะ!"],
      value: ['p','j'],
    },

    { dialog: "“เห้ย! จะหนีไปไหนน่ะ” เสียงผู้คุมตะโกน พวกคุณทำไม่สำเร็จ และต้องติดคุกตามเดิม",
      choices: ["เห้อ เหนื่อยชะมัดเลย ขอนอนสักพักละกัน", "เบื่อจริงๆ อยากออกไปจากที่นี่แล้ววว"],
      value: ['i','e'],
    },

    { dialog: "ทันใดนั้นเอง คุณก็จำได้ว่าคุณมีของชิ้นหนึ่งในกระเป๋ากางเกง …ของที่สำคัญมาก น้ำพริกนรกโลกันตร์!!",
      choices: ["น้ำพริกนรกนี่จะช่วยนายออกจากนรกเอง!"],
      value: ['a'],
    },

    { dialog: "แตงกวาทานคู่กับน้ำพริกนรก เข้ากันได้อย่างลงตัว ในที่สุดพวกคุณก็ออกจากคุกได้",
      choices: [">>"],
      value: ['a'],
    },

    { dialog: "ขอบคุณเธอมากนะ ที่ช่วยฉัน ถ้าเดินตามทางนี้ก็จะเข้าไปในเมืองได้แล้วล่ะ",
      choices: ["แค่นี้ก็จะไม่ไหวแล้ว ยังต้องเดินอีกไกลแค่ไหนกันนะ", "รู้สึกเหมือนเขาจะดูเน่าน้อยลงรึเปล่านะ?"],
      value: ['s','n'],
    },

    { dialog: "ต๊อกๆ เสียงหนึ่งดังขึ้นจากข้างหน้า คุณเดินไปและพบกับ คุณตาช็อกโกแลตที่ดูเหน็ดเหนื่อย “รถของฉันมันดันพลังงานหมดน่ะสิ อากาศก็ร้อนชะมัด ฉันจะละลายหมดแล้ว”",
      choices: ["น่าสงสารจังเลย ต้องรีบช่วยคุณตา!" , "แถวๆนี้น่าจะพออะไรมาเติมพลังงานได้นะ"],
      value: ['f','t'],
    },

    { dialog: "ในที่สุดรถก็กลับมาใช้งานได้ คุณอยากจะไปที่ไหน…",
      choices: ["ศึกษาผังเมืองจากแผนที่", "เห็นที่ไหนน่าไปค่อยไป"],
      value: ['j','p'],
    },

    { dialog: "คุณได้เดินทางมาถึงย่านที่ดูครึกครื้นแห่งหนึ่ง…",
      choices: ["มีของแปลกๆเพียบเลย เดินสำรวจสักหน่อยดีกว่า~", "ของกินน่ารักๆเดินอยู่เต็มเลย ไปคุยด้วยดีกว่า~"],
      value: ['i','e'],
    },

    { dialog: "ระหว่างที่คุณเดินเล่น คุณได้เหลือบไปเห็นของชิ้นหนึ่งที่ดึงดูดสายตาคุณ และอดไม่ได้ที่จะซื้อมัน สิ่งนั้นคือ…",
      choices: ["หนังสือปรัชญาแห่งอาหารโดย ดอกเตอร์วุ้นเส้น", "คู่มือเคล็ดลับความอร่อยโดยเชฟคาเวียร์"],
      value: ['n','s'],
    },

    { dialog: "“นี่ๆ” แตงกวากำลังวิ่งมาหาคุณ ด้วยท่าทางตื่นเต้น",
      choices: [">>"],
      value: ['a'],
    },

    { dialog: "“ชั้นขอแบ่งออร่ามาจากคุณตาช็อกโกแลตด้วยล่ะ ภูมิใจนำเสนอ เมนูสุดพิเศษ แตงกวาชุบช็อกโกแลต! ลองชิมดูสิ อร่อยมะล่า” คุณได้ลองชิมและพบว่ารสชาติมันช่างแย่ซะเหลือเกิน",
      choices: ["ก็ได้อยู่แหละนะแตงกวาคุง", "ตามตรงนะแตงกวาคุง รสชาติห่วยสุดๆเลยล่ะ"],
      value: ['f','t'],
    },

    { dialog: "คุณได้ยินมาว่าคืนนี้จะมีงานเลี้ยงฉลองวันเกิดของนายกเทศมนตรี ที่เมืองถัดไป ที่นั่นจะต้องมีวัตถุดิบดีๆ เยอะแน่ๆเลยล่ะ",
      choices: ["เราไปที่นั่นกันเถอะ!", "ไปดีมั้ยน้า"],
      value: ['j','p'],
    },

    { dialog: "และแล้วคุณก็มาถึงงานเลี้ยงวันเกิดของ นายกปลาหยก ที่หน้างานได้มีบริกรนำเครื่องดื่มสุด exclusive แจกจ่ายให้แก่แขกที่มาร่วมงาน",
      choices: ["ชิมเครื่องดื่ม"],
      value: ['a'],
    },

    { dialog: "คุณได้ดื่มและรู้สึกว่าร่างกายคุณค่อยๆหดเล็กลง ตัวเบาขึ้น แขนกับขาก็เปลี่ยนไป",
      choices: [">>"],
      value: ['a'],
    },

    { dialog: "“โอ้ ไม่นะ! เธอกลายเป็น-” คุณได้มองไปที่กระจกและเห็นเงาสะท้อนเป็น….",
      choices: ["ดูผลลัพธ์"],
      value: ['a'],
    }
  ]
  }
  function getStoryURL(index){
    const urls = ["P1.png","P2.png","P3.png","P4.png","P5.png","P6.png","P7.png","P8.png","P9.png","P10.png",
     "P11.png","P12.png","P13.png","P14.png","P15.jpg","P16.png","P17.png","P18.png","P19.png","P20.png"]
    
     return urls[index];
  }
  function setStoryImage(){
    const image = document.getElementById('story-image');
    const background = document.getElementById('dialog-background');
    if (storyIndex < 20) {
      image.src = 'images/' + getStoryURL(storyIndex); 
    } else {
      image.style.display = 'none';
      back = document.getElementById('back-button');
      back.style.display = 'none';
      background.className = 'dialog-background dialog-20'; 
      
    }
    image.style.marginTop = '20px'; 
  }

  function drawProgressBar(){
    const elem =document.getElementById('bar');
    if(storyIndex < 20){
    var width = (storyIndex+1)*5;
    elem.style.width = width + "%";
    }
    else{
      const parent = document.getElementById('progress');
      parent.style.display = 'none';
    }
  }

  function showCurrentStory(){
  const thisStory = story[storyIndex];
  const dialogMessage = document.getElementById('dialog');
  dialogMessage.textContent = thisStory.dialog;

  const choiceList = document.getElementById('choices');
  choiceList.innerHTML = '';
  
  drawProgressBar();
  setStoryImage();

  thisStory.choices.forEach((choice, index) => {
      const button = document.createElement('button');
      button.textContent = choice;
      button.addEventListener('click', () => selectChoice(index));
      choiceList.appendChild(button);
  });
  }

  function selectChoice(index){
 
  const thisStory = story[storyIndex];
  const selectedChoice = thisStory.value[index];
  storyIndex++;
  
  // If quiz is over, calculate the result.
  if (storyIndex < story.length){
    showCurrentStory();
    choices[storyIndex] = selectedChoice;
  } else {
    showResult();
  }
  }

  function getResult(){
    for(var x of choices){
      if( x === 'e'){e +=1;}
      else if(x === 's'){s +=1;}
      else if(x === 't'){t +=1;}
      else if(x === 'j'){j +=1;}
    }

    if(e >= 2){result[0] = "E";}
    if(s >= 2){result[1] = "S";}
    if(t >= 2){result[2] = "T";}
    if(j >= 2){result[3] = "J";}

    for(var x of result){
      resultType += x;
    }

  }

  function getResultUrl(result){
    const urls = {
      "INTJ": "1.png",
      "INTP": "2.png",
      "ENTJ": "3.png",
      "ENTP": "4.png",
      "INFJ": "5.png",
      "INFP": "6.png",
      "ENFJ": "7.png",
      "ENFP": "8.png",
      "ISTJ": "9.png",
      "ISFJ": "10.png",
      "ESTJ": "11.png",
      "ESFJ": "12.png",
      "ISTP": "13.png",
      "ISFP": "14.png",
      "ESTP": "15.png",
      "ESFP": "16.png",
   };

  return urls[result]
  }

  function showResult(){
    getResult();
    console.log(resultType);
    document.getElementById('story-page').style.display = 'none';
    document.getElementById('result-page').style.display = 'block';
    
    const imageURL = getResultUrl(resultType);
    const resultImage = document.getElementById('result-image');
    const image = document.createElement('img');
    image.src = "images/"+imageURL;

    resultImage.appendChild(image);
    console.log(storyIndex);
  }
// try again button
  let tryButton = document.getElementById('try-button')
  tryButton.addEventListener('click', () => window.location.href = 'https://cchinchillaz.github.io/FoodSpirit-Quiz/');

// share button
  // Check if the Web Share API is supported
  if (navigator.share) {
    document.getElementById('share-button').addEventListener('click', async () => {
      try {
        await navigator.share({
          title: 'Check out this quiz!',
          text: 'What is your food spirit?',
          url: window.location.href
        });
        console.log('Content shared successfully');
      } catch (error) {
        console.error('Error sharing content:', error);
      }
    });
  } else {
  // Hide the share button if Web Share API is not supported
    document.getElementById('share-button').style.display = 'none';
  }

  // back button
  function showPreviousStory(){
  if(storyIndex > 0){
    storyIndex--;
    showCurrentStory();
  }
  else{window.location.href = 'https://cchinchillaz.github.io/FoodSpirit-Quiz/';}
  
  }
  document.getElementById('back-button').addEventListener('click', () => showPreviousStory());
}

playQuiz();
